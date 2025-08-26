# Resend API Setup Guide

## 🚀 **Email Functionality Setup**

Your portfolio now has a fully functional contact form that sends real emails! Here's how to set it up:

### **1. Get Your Resend API Key**

1. Go to [resend.com](https://resend.com) and create an account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy your API key

### **2. Create Environment File**

Create a `.env.local` file in your project root with:

```bash
# Resend API Configuration
RESEND_API_KEY=your_actual_resend_api_key_here 

# Optional: Customize these values
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=anshkumar3931@gmail.com
```

### **3. Update Email Configuration**

In `app/api/send-email/route.ts`, update these lines:

```typescript
// Line 32: Update with your verified domain
from: 'Portfolio Contact <noreply@yourdomain.com>',

// Line 33: Update with your email address
to: ['anshkumar3931@gmail.com'],
```

### **4. Verify Your Domain (Optional but Recommended)**

1. In Resend dashboard, add and verify your domain
2. This allows you to send emails from `noreply@yourdomain.com`
3. If you don't have a domain, you can use the default Resend domain temporarily

### **5. Test the Contact Form**

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email for the message
4. Check the browser console for any errors

## 🔧 **Troubleshooting**

### **Common Issues:**

1. **"Failed to send email" error:**
   - Check if your API key is correct
   - Verify the API key is in `.env.local`
   - Restart your development server

2. **"Missing required fields" error:**
   - Ensure all required fields are filled
   - Check form validation

3. **Network errors:**
   - Check your internet connection
   - Verify the API route is working

### **Testing:**

- Use the browser's Network tab to see API calls
- Check the browser console for error messages
- Verify the API route `/api/send-email` exists

## ✨ **Features Added:**

- ✅ **Real Email Sending**: Uses Resend API
- ✅ **Form Validation**: Client and server-side validation
- ✅ **Loading States**: Shows "Sending..." while processing
- ✅ **Success/Error Messages**: Clear feedback to users
- ✅ **Professional Email Templates**: HTML and text versions
- ✅ **Security**: Input validation and error handling

## 🎯 **Next Steps:**

1. Add your Resend API key to `.env.local`
2. Test the contact form
3. Customize email templates if needed
4. Consider adding rate limiting for production

Your contact form is now fully functional and will send real emails! 🎉
