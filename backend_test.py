#!/usr/bin/env python3
"""
Backend API Testing Script for Newsletter Subscription Functionality
Tests the newsletter subscription endpoints comprehensively
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading backend URL: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("❌ Could not get backend URL from frontend/.env")
    sys.exit(1)

API_BASE = f"{BASE_URL}/api"
print(f"🔗 Testing API at: {API_BASE}")

def test_newsletter_subscribe_success():
    """Test successful newsletter subscription with valid email and consent"""
    print("\n📧 Testing successful newsletter subscription...")
    
    url = f"{API_BASE}/newsletter/subscribe"
    payload = {
        "email": "john.doe@example.com",
        "consent": True,
        "source": "website"
    }
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "réussie" in data.get("message", ""):
                print("✅ Newsletter subscription successful")
                return True
            else:
                print("❌ Unexpected response format")
                return False
        else:
            print(f"❌ Newsletter subscription failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during newsletter subscription test: {e}")
        return False

def test_newsletter_subscribe_duplicate():
    """Test duplicate email subscription (should return error)"""
    print("\n📧 Testing duplicate email subscription...")
    
    url = f"{API_BASE}/newsletter/subscribe"
    payload = {
        "email": "john.doe@example.com",  # Same email as previous test
        "consent": True,
        "source": "website"
    }
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            data = response.json()
            if "déjà inscrite" in data.get("detail", ""):
                print("✅ Duplicate email correctly rejected")
                return True
            else:
                print("❌ Wrong error message for duplicate email")
                return False
        else:
            print(f"❌ Expected 400 status for duplicate email, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during duplicate email test: {e}")
        return False

def test_newsletter_subscribe_no_consent():
    """Test subscription without consent (should return error)"""
    print("\n📧 Testing subscription without consent...")
    
    url = f"{API_BASE}/newsletter/subscribe"
    payload = {
        "email": "jane.smith@example.com",
        "consent": False,
        "source": "website"
    }
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            data = response.json()
            if "consentement est requis" in data.get("detail", ""):
                print("✅ No consent correctly rejected")
                return True
            else:
                print("❌ Wrong error message for no consent")
                return False
        else:
            print(f"❌ Expected 400 status for no consent, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during no consent test: {e}")
        return False

def test_newsletter_subscribe_invalid_email():
    """Test subscription with invalid email format"""
    print("\n📧 Testing subscription with invalid email...")
    
    url = f"{API_BASE}/newsletter/subscribe"
    payload = {
        "email": "invalid-email-format",
        "consent": True,
        "source": "website"
    }
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            # FastAPI validation error for invalid email
            print("✅ Invalid email format correctly rejected")
            return True
        else:
            print(f"❌ Expected 422 status for invalid email, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during invalid email test: {e}")
        return False

def test_get_subscribers():
    """Test GET /api/newsletter/subscribers endpoint"""
    print("\n📋 Testing get subscribers endpoint...")
    
    url = f"{API_BASE}/newsletter/subscribers"
    
    try:
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if "count" in data and "subscribers" in data:
                count = data["count"]
                subscribers = data["subscribers"]
                print(f"✅ Successfully retrieved {count} subscribers")
                
                # Verify we have at least one subscriber from our previous test
                if count > 0:
                    print(f"📊 Sample subscriber: {subscribers[0] if subscribers else 'None'}")
                    return True
                else:
                    print("⚠️ No subscribers found (this might be expected if database is empty)")
                    return True
            else:
                print("❌ Unexpected response format for subscribers")
                return False
        else:
            print(f"❌ Get subscribers failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during get subscribers test: {e}")
        return False

def test_api_connectivity():
    """Test basic API connectivity"""
    print("\n🔌 Testing API connectivity...")
    
    url = f"{API_BASE}/"
    
    try:
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ API connectivity successful")
                return True
            else:
                print("❌ Unexpected API response")
                return False
        else:
            print(f"❌ API connectivity failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during API connectivity test: {e}")
        return False

def main():
    """Run all newsletter subscription tests"""
    print("🚀 Starting Newsletter Subscription Backend Tests")
    print("=" * 60)
    
    test_results = []
    
    # Test API connectivity first
    test_results.append(("API Connectivity", test_api_connectivity()))
    
    # Test newsletter subscription functionality
    test_results.append(("Newsletter Subscribe Success", test_newsletter_subscribe_success()))
    test_results.append(("Newsletter Subscribe Duplicate", test_newsletter_subscribe_duplicate()))
    test_results.append(("Newsletter Subscribe No Consent", test_newsletter_subscribe_no_consent()))
    test_results.append(("Newsletter Subscribe Invalid Email", test_newsletter_subscribe_invalid_email()))
    test_results.append(("Get Subscribers", test_get_subscribers()))
    
    # Print summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal: {len(test_results)} tests")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed!")
        return True
    else:
        print(f"\n⚠️ {failed} test(s) failed!")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)