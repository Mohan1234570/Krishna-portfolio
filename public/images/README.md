# Profile Image Instructions

## How to Add Your Profile Image:

1. **Copy your profile image** (JPG, PNG, or WEBP format)
2. **Name it exactly:** `profile-photo.jpg`
3. **Place it here:** `public/images/profile-photo.jpg`

## File Path Structure:
```
Krishna-portfolio/
└── public/
    └── images/
        └── profile-photo.jpg  ← Your image goes here
```

## Alternative File Names:
If your image has a different extension, update line 9 in `src/components/Hero.jsx`:
- For PNG: Change to `/images/profile-photo.png`
- For WEBP: Change to `/images/profile-photo.webp`

## After Adding the Image:
1. Save the file
2. Refresh your browser (or restart dev server if needed)
3. The image should appear automatically

## Troubleshooting:
- Check browser console (F12) for any error messages
- Make sure the filename matches exactly (case-sensitive)
- Try clearing browser cache (Ctrl+F5)
- Restart the dev server: `npm run dev`

