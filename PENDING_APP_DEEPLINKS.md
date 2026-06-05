# Pending: Unifesto App Deep Links Integration

## Status: ⚠️ Awaiting Deep Links

**Fix #7** from the VCPL Website Fixes document is partially complete. Google Form links are currently functional as a fallback, but should be replaced with Unifesto app deep links when available.

---

## Current Links (Google Forms)

### Developer Registration
- **Current URL:** `https://forms.gle/KV5Ke5D9cykUWycf6`
- **Locations:** 
  - Hero section "Join as Developer" button
  - For Developers section main CTA

### Team Owner Registration
- **Current URL:** `https://forms.gle/t1rU5xr1GHkFYQ1Y7`
- **Location:** For Team Owners section CTA

### Sponsor Enquiry
- **Current URL:** `https://forms.gle/JetNzejsXP7XmcR37`
- **Location:** Sponsors & Partners section

---

## What's Needed

### 1. Unifesto App Deep Links

Obtain the following deep links from the Unifesto app team:

```
Developer Registration:
unifesto://vcpl/register/developer
or
https://app.unifesto.app/vcpl/register/developer

Team Owner Registration:
unifesto://vcpl/register/owner
or
https://app.unifesto.app/vcpl/register/owner

Sponsor Enquiry:
unifesto://vcpl/sponsor/enquiry
or
https://app.unifesto.app/vcpl/sponsor/enquiry
```

### 2. App Download Deep Links

Also needed for the app download section:

```
iOS App Store:
https://apps.apple.com/app/unifesto/[APP_ID]

Google Play Store:
https://play.google.com/store/apps/details?id=app.unifesto.[PACKAGE_NAME]
```

---

## Implementation Steps

Once deep links are available:

### Step 1: Update Developer Registration CTAs

**File:** `/app/page.tsx`

**Location 1:** Hero section (around line 90)
```tsx
// BEFORE
<a href="https://forms.gle/KV5Ke5D9cykUWycf6">

// AFTER
<a href="https://app.unifesto.app/vcpl/register/developer">
```

**Location 2:** For Developers section (around line 300)
```tsx
// BEFORE
<a href="https://forms.gle/KV5Ke5D9cykUWycf6">

// AFTER
<a href="https://app.unifesto.app/vcpl/register/developer">
```

---

### Step 2: Update Team Owner Registration CTA

**File:** `/app/page.tsx`

**Location:** For Team Owners section (around line 400)
```tsx
// BEFORE
<a href="https://forms.gle/t1rU5xr1GHkFYQ1Y7">

// AFTER
<a href="https://app.unifesto.app/vcpl/register/owner">
```

---

### Step 3: Update Sponsor Enquiry Link

**File:** `/app/page.tsx`

**Location:** Sponsors & Partners section (around line 480)
```tsx
// BEFORE
<a href="https://forms.gle/JetNzejsXP7XmcR37">

// AFTER
<a href="https://app.unifesto.app/vcpl/sponsor/enquiry">
```

---

### Step 4: Update App Store Links

**File:** `/app/page.tsx`

**Location:** Download Unifesto App section (near bottom)

```tsx
// App Store
<a href="https://apps.apple.com/app/unifesto/[REAL_APP_ID]">

// Google Play
<a href="https://play.google.com/store/apps/details?id=app.unifesto.[REAL_PACKAGE]">
```

---

## Enhanced Implementation (Recommended)

For better user experience, consider smart routing:

```tsx
const handleRegistration = () => {
  // Check if user has Unifesto app installed
  const isAppInstalled = checkIfUnifestoAppInstalled();
  
  if (isAppInstalled) {
    // Open in app
    window.location.href = 'unifesto://vcpl/register/developer';
  } else {
    // Redirect to app download page or web registration
    window.location.href = 'https://app.unifesto.app/vcpl/register/developer';
  }
};
```

---

## Testing Checklist

After implementation:

- [ ] Test deep link on iOS device (with app installed)
- [ ] Test deep link on iOS device (without app installed)
- [ ] Test deep link on Android device (with app installed)
- [ ] Test deep link on Android device (without app installed)
- [ ] Test web fallback behavior
- [ ] Verify registration flow completion
- [ ] Check analytics tracking on app opens
- [ ] Test on desktop browsers (should redirect to web version)

---

## Fallback Strategy

**Option A: Keep Google Forms as Backup**
```tsx
<a href="https://app.unifesto.app/vcpl/register/developer">
  Register in Unifesto App
</a>
<p className="text-xs text-zinc-500 mt-2">
  Or use <a href="https://forms.gle/KV5Ke5D9cykUWycf6">Google Form</a>
</p>
```

**Option B: Progressive Enhancement**
```tsx
<div className="flex flex-col gap-2">
  <a href="https://app.unifesto.app/vcpl/register/developer">
    Register via Unifesto App (Recommended)
  </a>
  <a href="https://forms.gle/KV5Ke5D9cykUWycf6">
    Register via Google Form
  </a>
</div>
```

---

## Benefits of App Deep Links

1. **Better User Experience**
   - Seamless app integration
   - Faster registration flow
   - Native app experience

2. **Data Collection**
   - Better analytics
   - User profile integration
   - Track conversion funnel

3. **Ecosystem Growth**
   - Drives Unifesto app downloads
   - Increases app engagement
   - Builds unified user base

4. **Brand Consistency**
   - Keeps users in Unifesto ecosystem
   - Reduces external dependencies
   - Professional presentation

---

## Timeline Estimate

| Task | Duration | Owner |
|------|----------|-------|
| Obtain deep links from app team | 1-2 days | Backend/App Team |
| Update website links | 30 minutes | Frontend Dev |
| Test on all devices | 2-3 hours | QA Team |
| Deploy to production | 1 hour | DevOps |

**Total:** 2-4 days

---

## Contact for Deep Links

Reach out to:
- Unifesto App Development Team
- Backend API team (for registration endpoints)
- DevOps (for URL routing configuration)

---

*Document created: June 6, 2026*  
*Priority: Medium (P2 — Before Launch)*
