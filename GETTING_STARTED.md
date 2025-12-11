# TARSCO Website - Getting Started Guide

## What You Have

A complete, production-ready Next.js website for Tarkwa Senior High School featuring:

- ✅ Dual-tier sticky navigation with mobile menu
- ✅ Hero section with typewriter animation
- ✅ Home page with 7+ engaging sections
- ✅ Complete core pages (About, Academics, Admissions)
- ✅ News with search & filtering
- ✅ Photo gallery with lightbox
- ✅ Contact form with email integration ready
- ✅ Alumni section with donation CTA
- ✅ Fully responsive mobile design
- ✅ WCAG AA accessibility compliance
- ✅ SEO optimization with sitemap & schema
- ✅ TARSCO brand colors and typography

## 5-Minute Quick Start

### Step 1: Install Dependencies
\`\`\`bash
cd tarsco-website
npm install
\`\`\`

### Step 2: Run Locally
\`\`\`bash
npm run dev
\`\`\`
Open http://localhost:3000 in your browser.

### Step 3: Make Your First Edit
1. Open `app/page.tsx`
2. Change the tagline text
3. See changes live (hot reload)

### Step 4: Deploy to Vercel
\`\`\`bash
npm install -g vercel
vercel
\`\`\`
Follow the prompts and your site is live!

## Essential Files to Customize

### 1. **Site Configuration** 
File: `data/site.json`
\`\`\`json
{
  "name": "Tarkwa Senior High School",
  "contact": {
    "phone": "YOUR_NUMBER",
    "email": "YOUR_EMAIL"
  }
}
\`\`\`

### 2. **Content Updates**
- News: `data/news.json`
- Staff: `data/staff.json`
- Gallery: `data/gallery.json`

### 3. **Home Page Sections**
- Quick links: `components/home/quick-links.tsx`
- Programs: `components/home/featured-programs.tsx`
- Carousel: `components/home/news-carousel.tsx`

### 4. **Brand Colors**
File: `app/globals.css`
\`\`\`css
--tarsco-green: #006400;    /* Primary button color */
--tarsco-gold: #FFD700;     /* Accent highlights */
--tarsco-brown: #964B00;    /* Secondary accents */
--tarsco-dark: #111827;     /* Text color */
--tarsco-ivory: #FFF7ED;    /* Background */
\`\`\`

## Common Tasks

### Add a News Article
Edit `data/news.json`:
\`\`\`json
{
  "id": 7,
  "title": "Your news title",
  "date": "2024-11-20",
  "category": "Achievement",
  "excerpt": "Short summary",
  "content": "Full content...",
  "author": "Author Name",
  "image": "/placeholder.svg?key=30"
}
\`\`\`

### Update Staff Directory
Edit `data/staff.json`:
\`\`\`json
{
  "name": "New Staff Name",
  "role": "Position",
  "email": "email@tarsco.edu.gh",
  "bio": "Bio text..."
}
\`\`\`

### Add Gallery Images
Edit `data/gallery.json` and upload images to `public/images/`.

### Customize Colors
Edit CSS variables in `app/globals.css` `:root` section.

### Change Fonts
Fonts are imported in `app/layout.tsx`. Change to any Google Font:
\`\`\`tsx
import { Cute_Font as YOUR_FONT_HERE } from 'next/font/google'
\`\`\`

## Page Structure

| URL | File | Purpose |
|-----|------|---------|
| / | app/page.tsx | Home page |
| /about | app/about/page.tsx | About & leadership |
| /academics | app/academics/page.tsx | Programs & departments |
| /admissions | app/admissions/page.tsx | Apply & fees |
| /news | app/news/page.tsx | News articles |
| /gallery | app/gallery/page.tsx | Photo gallery |
| /contact | app/contact/page.tsx | Contact form |
| /alumni | app/alumni/page.tsx | Alumni network |

## Components Overview

- `Header`: Two-tier navigation
- `HeroSection`: Main banner with typewriter effect
- `PageHeader`: Reusable section header
- `NewsCarousel`: Featured news slider
- `GalleryPreview`: Image grid with lightbox
- `QuickLinks`: Card-based navigation
- `Testimonials`: Student quotes
- `Footer`: Multi-column footer

## Adding New Pages

1. Create folder: `app/new-page/`
2. Add file: `app/new-page/page.tsx`
3. Add route to navigation: `components/header/main-nav.tsx`
4. Example:
\`\`\`tsx
import { Header } from '@/components/header/header'
import { PageHeader } from '@/components/page-header'
import { Footer } from '@/components/footer/footer'

export default function NewPage() {
  return (
    <main>
      <Header />
      <PageHeader title="Your Title" />
      {/* Your content here */}
      <Footer />
    </main>
  )
}
\`\`\`

## Next Steps

### Immediate (Today)
- [ ] Update site.json with real contact info
- [ ] Replace placeholder images
- [ ] Update news articles
- [ ] Deploy to Vercel

### Short Term (This Week)
- [ ] Set up custom domain
- [ ] Add staff photos
- [ ] Update admissions content
- [ ] Test on mobile devices

### Medium Term (This Month)
- [ ] Set up form submission (Formspree, SendGrid, etc.)
- [ ] Add analytics tracking
- [ ] Implement email newsletter signup
- [ ] Add testimonial video section

### Long Term (Future)
- [ ] Database integration for dynamic content
- [ ] Student/staff login portal
- [ ] Online fee payment system
- [ ] Event booking system
- [ ] Mobile app

## Form Submission Setup

The contact form is ready but needs a backend. Options:

### Easy: Formspree
1. Visit https://formspree.io
2. Create account and form
3. Update form action in `app/contact/page.tsx`

### Free: SendGrid
1. Sign up at https://sendgrid.com
2. Create API key
3. Add to Vercel env vars
4. Update form handler

### Built-in: Vercel Functions
Create `app/api/contact/route.ts` for serverless form handling.

## Troubleshooting

**Hot reload not working?**
- Restart dev server: `npm run dev`

**Build errors?**
- Clear cache: `rm -rf .next`
- Reinstall: `npm install`

**Images not showing?**
- Check path: `/placeholder.svg?key=1`
- Use full URLs for external images

**TypeScript errors?**
- Run: `npm run lint`
- Check types: `npx tsc --noEmit`

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs

## You're All Set!

Your TARSCO website is ready for production. Start by:
1. Running locally (`npm run dev`)
2. Updating content (data files)
3. Deploying to Vercel (`vercel`)

Questions? Check the included README.md, DEPLOYMENT.md, and PERFORMANCE.md files.

**Happy coding! 🚀**
