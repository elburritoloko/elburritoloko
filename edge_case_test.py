#!/usr/bin/env python3
"""
Additional Edge Case Tests for Newsletter Subscription
"""

import requests
import json
import sys

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
API_BASE = f"{BASE_URL}/api"

def test_case_insensitive_email():
    """Test that email case insensitivity works for duplicates"""
    print("\n📧 Testing case insensitive email handling...")
    
    # First subscribe with lowercase
    url = f"{API_BASE}/newsletter/subscribe"
    payload1 = {
        "email": "test.case@example.com",
        "consent": True,
        "source": "website"
    }
    
    try:
        response1 = requests.post(url, json=payload1, timeout=10)
        print(f"First subscription - Status: {response1.status_code}")
        
        if response1.status_code != 200:
            print("❌ First subscription failed")
            return False
        
        # Try to subscribe with uppercase version of same email
        payload2 = {
            "email": "TEST.CASE@EXAMPLE.COM",
            "consent": True,
            "source": "website"
        }
        
        response2 = requests.post(url, json=payload2, timeout=10)
        print(f"Second subscription (uppercase) - Status: {response2.status_code}")
        print(f"Response: {response2.text}")
        
        if response2.status_code == 400:
            data = response2.json()
            if "déjà inscrite" in data.get("detail", ""):
                print("✅ Case insensitive duplicate detection working")
                return True
            else:
                print("❌ Wrong error message")
                return False
        else:
            print(f"❌ Expected 400 for duplicate, got {response2.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during case insensitive test: {e}")
        return False

def test_missing_fields():
    """Test subscription with missing required fields"""
    print("\n📧 Testing subscription with missing fields...")
    
    url = f"{API_BASE}/newsletter/subscribe"
    
    # Test missing email
    payload1 = {
        "consent": True,
        "source": "website"
    }
    
    try:
        response1 = requests.post(url, json=payload1, timeout=10)
        print(f"Missing email - Status: {response1.status_code}")
        
        if response1.status_code == 422:
            print("✅ Missing email correctly rejected")
        else:
            print(f"❌ Expected 422 for missing email, got {response1.status_code}")
            return False
        
        # Test missing consent
        payload2 = {
            "email": "test.missing@example.com",
            "source": "website"
        }
        
        response2 = requests.post(url, json=payload2, timeout=10)
        print(f"Missing consent - Status: {response2.status_code}")
        
        if response2.status_code == 422:
            print("✅ Missing consent correctly rejected")
            return True
        else:
            print(f"❌ Expected 422 for missing consent, got {response2.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during missing fields test: {e}")
        return False

def test_empty_payload():
    """Test subscription with empty payload"""
    print("\n📧 Testing subscription with empty payload...")
    
    url = f"{API_BASE}/newsletter/subscribe"
    
    try:
        response = requests.post(url, json={}, timeout=10)
        print(f"Empty payload - Status: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ Empty payload correctly rejected")
            return True
        else:
            print(f"❌ Expected 422 for empty payload, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during empty payload test: {e}")
        return False

def main():
    """Run additional edge case tests"""
    print("🔍 Running Additional Edge Case Tests")
    print("=" * 50)
    
    test_results = []
    
    test_results.append(("Case Insensitive Email", test_case_insensitive_email()))
    test_results.append(("Missing Fields", test_missing_fields()))
    test_results.append(("Empty Payload", test_empty_payload()))
    
    # Print summary
    print("\n" + "=" * 50)
    print("📊 EDGE CASE TEST SUMMARY")
    print("=" * 50)
    
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
    
    return failed == 0

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)