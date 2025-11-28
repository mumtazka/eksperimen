# API Contracts & Integration Plan

## Overview
Portfolio website untuk Mumtaz Kholafiyan Alfan dengan contact form yang terintegrasi dengan backend.

## Mock Data Location
- **File**: `/app/frontend/src/mockData.js`
- **Mock Function**: `submitContactForm(formData)` - Currently returns mock success response

## Backend Implementation Plan

### 1. Database Schema

#### ContactMessage Model
```python
{
    "_id": ObjectId,
    "name": String (required),
    "email": String (required, email format),
    "subject": String (required),
    "message": String (required),
    "created_at": DateTime (auto-generated),
    "status": String (default: "new", enum: ["new", "read", "replied"])
}
```

### 2. API Endpoints

#### POST `/api/contact`
**Purpose**: Submit contact form message

**Request Body**:
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry about collaboration",
    "message": "Hi, I would like to discuss..."
}
```

**Success Response** (201):
```json
{
    "success": true,
    "message": "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.",
    "data": {
        "id": "contact_id",
        "created_at": "2025-01-26T14:30:00Z"
    }
}
```

**Error Response** (400):
```json
{
    "success": false,
    "message": "Validation error",
    "errors": ["Email format tidak valid"]
}
```

**Error Response** (500):
```json
{
    "success": false,
    "message": "Server error. Silakan coba lagi."
}
```

#### GET `/api/contact` (Optional - Admin only)
**Purpose**: Get all contact messages (for admin dashboard in future)

**Success Response** (200):
```json
{
    "success": true,
    "data": [
        {
            "id": "...",
            "name": "...",
            "email": "...",
            "subject": "...",
            "message": "...",
            "created_at": "...",
            "status": "new"
        }
    ],
    "total": 10
}
```

## Frontend Integration

### Files to Update

#### 1. `/app/frontend/src/mockData.js`
- **Current**: Mock function `submitContactForm(formData)` with setTimeout
- **Action**: Replace with actual API call using axios
- **Change**:
```javascript
// OLD (Mock)
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted (MOCK):", formData);
      resolve({ success: true, message: "Pesan berhasil dikirim! (Mock)" });
    }, 1000);
  });
};

// NEW (Real API)
export const submitContactForm = async (formData) => {
  const response = await axios.post(`${API}/contact`, formData);
  return response.data;
};
```

#### 2. `/app/frontend/src/components/Contact.jsx`
- **Current**: Already using `submitContactForm` from mockData
- **Action**: Add better error handling and validation
- **Status**: Minor updates only (already well-structured)

## Implementation Steps

1. ✅ Create contracts.md (this file)
2. ⏳ Create backend models and endpoints
3. ⏳ Test backend with curl
4. ⏳ Update frontend to use real API
5. ⏳ End-to-end testing
6. ⏳ Documentation

## Notes
- MongoDB is currently used, can be migrated to Supabase later
- Email notifications can be added in future iterations
- Admin dashboard for viewing messages can be added later
- Rate limiting should be considered for production
