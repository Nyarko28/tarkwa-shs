# Tarkwa Senior High School (TARSCO) Website

A modern, production-ready website for Tarkwa Senior High School built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- **Two-tier Navigation**: Utility bar and sticky main navigation with mobile responsiveness
- **Hero Section**: Full-width hero with typewriter animation and parallax effects
- **Smooth Animations**: CSS-based animations with IntersectionObserver for scroll triggers
- **Content Management**: JSON-based data files for easy content updates
- **SEO Optimized**: Meta tags, Open Graph, JSON-LD schema, sitemap.xml, robots.txt
- **Accessibility**: WCAG AA compliant, semantic HTML, keyboard navigation, focus states
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Brand Colors**: Custom TARSCO color scheme with design tokens

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx              # Root layout with metadata and fonts
│   ├── globals.css             # Global styles and design tokens
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page with timeline
│   ├── academics/page.tsx      # Academic programs
│   ├── admissions/page.tsx     # Admissions and applications
│   ├── news/page.tsx           # News listing with search/filter
│   ├── gallery/page.tsx        # Photo gallery with lightbox
│   ├── contact/page.tsx        # Contact form and information
│   ├── alumni/page.tsx         # Alumni stories and network
│   └── sitemap.ts              # Dynamic sitemap generation
├── components/
│   ├── header/                 # Navigation components
│   ├── hero/                   # Hero section
│   ├── home/                   # Home page sections
│   ├── footer/                 # Footer component
│   └── page-header.tsx         # Reusable page header
├── hooks/
│   └── use-intersection-observer.ts  # Custom scroll animation hook
├── data/
│   ├── site.json              # Site configuration
│   ├── news.json              # News articles
│   ├── staff.json             # Staff directory
│   └── gallery.json           # Gallery images
├── public/
│   ├── robots.txt             # SEO robot directives
│   └── assets/                # Images and static assets
└── README.md                  # This file
\`\`\`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (body) + Playfair Display (headings)
- **TypeScript**: For type safety
- **Icons**: Lucide React
- **Deployment**: Vercel

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/tarsco-website.git
cd tarsco-website

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Visit `http://localhost:3000` to see the site.

### Build & Deploy

\`\`\`bash
# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
\`\`\`

## Deployment to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Deploy with one click

Or deploy via CLI:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Environment Variables

Create a `.env.local` file (not committed to git):

\`\`\`
NEXT_PUBLIC_SITE_URL=https://tarsco.edu.gh
\`\`\`

## Performance Checklist

- ✅ Images optimized with responsive srcset
- ✅ Lazy loading for images below the fold
- ✅ Code splitting with dynamic imports
- ✅ Font optimization with next/font
- ✅ CSS animations respect prefers-reduced-motion
- ✅ SEO meta tags for all pages
- ✅ Sitemap and robots.txt for crawlers
- ✅ Accessible focus states and keyboard navigation

## Recommended Performance Improvements

1. **Image Optimization**: Use next/image component for all images and implement WebP format
2. **API Routes**: Add server-side contact form handling instead of client-side only
3. **Database Integration**: Implement real content management with Supabase or similar for dynamic news/gallery updates

## Accessibility (WCAG AA)

- Semantic HTML elements
- ARIA labels where needed
- Color contrast ratios >= 4.5:1 for text
- Keyboard navigation support
- Focus visible styles
- Skip-to-content link
- Screen reader optimized

## Content Management

### Updating News

Edit `data/news.json` with new articles:

\`\`\`json
{
  "id": 4,
  "title": "Your Article Title",
  "date": "2024-11-20",
  "category": "Achievement",
  "excerpt": "Short summary...",
  "content": "Full article content...",
  "author": "Author Name",
  "image": "/path/to/image.jpg"
}
\`\`\`

### Updating Staff Directory

Edit `data/staff.json` to add or update staff information.

### Updating Gallery

Edit `data/gallery.json` to add new gallery images.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Changelog

### v1.0.0 (November 2024)
- Initial launch with all core pages
- Hero with typewriter animation
- News and gallery with filtering
- Admissions application form
- Alumni network section
- Mobile-responsive design
- SEO optimization

## License

© 2025 Tarkwa Senior High School. All rights reserved.

## Support

For technical issues, contact: tech@tarsco.edu.gh

## Contributors

- v0 AI Development

---

**Last Updated**: November 2024
**Version**: 1.0.0
