from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import re


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class NewsletterSubscription(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    consent: bool
    source: str = "website"
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    active: bool = True

class NewsletterSubscribe(BaseModel):
    email: EmailStr
    consent: bool
    source: str = "website"

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Newsletter endpoints
@api_router.post("/newsletter/subscribe")
async def subscribe_newsletter(input: NewsletterSubscribe):
    # Validate consent
    if not input.consent:
        raise HTTPException(status_code=400, detail="Le consentement est requis pour s'inscrire à la newsletter.")
    
    # Check if email already exists
    existing = await db.newsletter_subscriptions.find_one({"email": input.email.lower()}, {"_id": 0})
    
    if existing:
        # If exists and active, return message
        if existing.get('active', True):
            raise HTTPException(status_code=400, detail="Cette adresse email est déjà inscrite à notre newsletter.")
        else:
            # Reactivate subscription
            await db.newsletter_subscriptions.update_one(
                {"email": input.email.lower()},
                {"$set": {"active": True, "timestamp": datetime.now(timezone.utc).isoformat()}}
            )
            return {"success": True, "message": "Votre abonnement a été réactivé avec succès."}
    
    # Create new subscription
    subscription_dict = input.model_dump()
    subscription_dict['email'] = subscription_dict['email'].lower()
    subscription = NewsletterSubscription(**subscription_dict)
    
    # Convert to dict and serialize datetime
    doc = subscription.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.newsletter_subscriptions.insert_one(doc)
    
    logger.info(f"New newsletter subscription: {input.email}")
    
    return {"success": True, "message": "Inscription réussie ! Vous recevrez bientôt nos actualités."}

@api_router.get("/newsletter/subscribers")
async def get_subscribers():
    """Get all active newsletter subscribers (for admin purposes)"""
    subscribers = await db.newsletter_subscriptions.find(
        {"active": True}, 
        {"_id": 0, "email": 1, "timestamp": 1, "source": 1}
    ).to_list(10000)
    
    return {"count": len(subscribers), "subscribers": subscribers}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()