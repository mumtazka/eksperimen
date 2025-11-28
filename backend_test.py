#!/usr/bin/env python3
"""
Backend API Testing for Portfolio Contact Form
Tests the contact form endpoints at https://dev-portfolio-847.preview.emergentagent.com/api
"""

import requests
import json
import sys
from datetime import datetime

# Base URL from frontend/.env
BASE_URL = "https://dev-portfolio-847.preview.emergentagent.com/api"

def test_contact_form_valid_submission():
    """Test valid contact form submission"""
    print("\n=== Testing POST /api/contact - Valid Submission ===")
    
    url = f"{BASE_URL}/contact"
    valid_data = {
        "name": "Test User",
        "email": "test@example.com", 
        "subject": "Test Subject",
        "message": "This is a test message for the contact form"
    }
    
    try:
        response = requests.post(url, json=valid_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") == True and "message" in data:
                print("✅ Valid submission test PASSED")
                return True, data
            else:
                print("❌ Valid submission test FAILED - Missing success=true or message")
                return False, data
        else:
            print(f"❌ Valid submission test FAILED - Expected 200, got {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ Valid submission test FAILED - Exception: {str(e)}")
        return False, None

def test_contact_form_invalid_email():
    """Test contact form with invalid email format"""
    print("\n=== Testing POST /api/contact - Invalid Email ===")
    
    url = f"{BASE_URL}/contact"
    invalid_data = {
        "name": "Test User",
        "email": "invalid-email-format",
        "subject": "Test Subject", 
        "message": "This is a test message for the contact form"
    }
    
    try:
        response = requests.post(url, json=invalid_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # FastAPI validation error
            print("✅ Invalid email test PASSED - Proper validation error returned")
            return True
        else:
            print(f"❌ Invalid email test FAILED - Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Invalid email test FAILED - Exception: {str(e)}")
        return False

def test_contact_form_missing_fields():
    """Test contact form with missing required fields"""
    print("\n=== Testing POST /api/contact - Missing Required Fields ===")
    
    url = f"{BASE_URL}/contact"
    
    # Test missing name
    missing_name = {
        "email": "test@example.com",
        "subject": "Test Subject",
        "message": "This is a test message for the contact form"
    }
    
    try:
        response = requests.post(url, json=missing_name, timeout=10)
        print(f"Missing name - Status Code: {response.status_code}")
        print(f"Missing name - Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ Missing name test PASSED")
            missing_name_passed = True
        else:
            print("❌ Missing name test FAILED")
            missing_name_passed = False
            
    except Exception as e:
        print(f"❌ Missing name test FAILED - Exception: {str(e)}")
        missing_name_passed = False
    
    # Test missing email
    missing_email = {
        "name": "Test User",
        "subject": "Test Subject", 
        "message": "This is a test message for the contact form"
    }
    
    try:
        response = requests.post(url, json=missing_email, timeout=10)
        print(f"Missing email - Status Code: {response.status_code}")
        print(f"Missing email - Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ Missing email test PASSED")
            missing_email_passed = True
        else:
            print("❌ Missing email test FAILED")
            missing_email_passed = False
            
    except Exception as e:
        print(f"❌ Missing email test FAILED - Exception: {str(e)}")
        missing_email_passed = False
    
    return missing_name_passed and missing_email_passed

def test_contact_form_short_message():
    """Test contact form with message too short (< 10 characters)"""
    print("\n=== Testing POST /api/contact - Message Too Short ===")
    
    url = f"{BASE_URL}/contact"
    short_message_data = {
        "name": "Test User",
        "email": "test@example.com",
        "subject": "Test Subject",
        "message": "Short"  # Only 5 characters, should fail validation
    }
    
    try:
        response = requests.post(url, json=short_message_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ Short message test PASSED - Proper validation error returned")
            return True
        else:
            print(f"❌ Short message test FAILED - Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Short message test FAILED - Exception: {str(e)}")
        return False

def test_get_contact_messages():
    """Test GET /api/contact endpoint to retrieve messages"""
    print("\n=== Testing GET /api/contact - Get All Messages ===")
    
    url = f"{BASE_URL}/contact"
    
    try:
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if "success" in data and "data" in data:
                print("✅ GET contact messages test PASSED")
                print(f"Total messages retrieved: {data.get('total', 0)}")
                return True, data
            else:
                print("❌ GET contact messages test FAILED - Missing expected response structure")
                return False, data
        else:
            print(f"❌ GET contact messages test FAILED - Expected 200, got {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ GET contact messages test FAILED - Exception: {str(e)}")
        return False, None

def test_message_persistence():
    """Test if submitted messages are actually saved and retrievable"""
    print("\n=== Testing Message Persistence ===")
    
    # First submit a unique message
    unique_message = f"Test message for persistence check - {datetime.now().isoformat()}"
    submit_data = {
        "name": "Persistence Test User",
        "email": "persistence@example.com",
        "subject": "Persistence Test Subject", 
        "message": unique_message
    }
    
    # Submit the unique message directly
    url = f"{BASE_URL}/contact"
    try:
        response = requests.post(url, json=submit_data, timeout=10)
        print(f"Persistence submit - Status Code: {response.status_code}")
        print(f"Persistence submit - Response: {response.text}")
        
        if response.status_code != 200:
            print("❌ Message persistence test FAILED - Could not submit message")
            return False
            
    except Exception as e:
        print(f"❌ Message persistence test FAILED - Exception during submit: {str(e)}")
        return False
    
    # Wait a moment for database write
    import time
    time.sleep(1)
    
    # Retrieve messages and check if our message exists
    get_success, get_response = test_get_contact_messages()
    if not get_success:
        print("❌ Message persistence test FAILED - Could not retrieve messages")
        return False
    
    # Check if our message is in the retrieved messages
    messages = get_response.get("data", [])
    found_message = False
    
    for msg in messages:
        if (msg.get("email") == "persistence@example.com" and 
            unique_message in msg.get("message", "")):
            found_message = True
            print("✅ Message persistence test PASSED - Message found in database")
            break
    
    if not found_message:
        print("❌ Message persistence test FAILED - Submitted message not found in database")
        print(f"Looking for email: persistence@example.com")
        print(f"Looking for message containing: {unique_message}")
        print("Messages found:")
        for i, msg in enumerate(messages):
            print(f"  {i+1}. Email: {msg.get('email')}, Message: {msg.get('message')[:50]}...")
        return False
    
    return True

def run_all_tests():
    """Run all contact form API tests"""
    print("🚀 Starting Portfolio Contact Form API Tests")
    print(f"Base URL: {BASE_URL}")
    print("=" * 60)
    
    test_results = []
    
    # Test 1: Valid submission
    result = test_contact_form_valid_submission()
    test_results.append(("Valid Submission", result[0] if isinstance(result, tuple) else result))
    
    # Test 2: Invalid email format
    result = test_contact_form_invalid_email()
    test_results.append(("Invalid Email", result))
    
    # Test 3: Missing required fields
    result = test_contact_form_missing_fields()
    test_results.append(("Missing Fields", result))
    
    # Test 4: Message too short
    result = test_contact_form_short_message()
    test_results.append(("Short Message", result))
    
    # Test 5: Get contact messages
    result = test_get_contact_messages()
    test_results.append(("Get Messages", result[0] if isinstance(result, tuple) else result))
    
    # Test 6: Message persistence
    result = test_message_persistence()
    test_results.append(("Message Persistence", result))
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test_name, success in test_results:
        status = "✅ PASSED" if success else "❌ FAILED"
        print(f"{test_name}: {status}")
        if success:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal Tests: {len(test_results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests PASSED! Contact form API is working correctly.")
        return True
    else:
        print(f"\n⚠️  {failed} test(s) FAILED. Please check the issues above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)