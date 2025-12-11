# TARSCO Website - Deployment Guide

## Quick Start

### One-Click Deploy to Vercel

1. **Install Vercel CLI**:
   \`\`\`bash
   npm install -g vercel
   \`\`\`

2. **Deploy**:
   \`\`\`bash
   vercel
   \`\`\`

3. **Follow prompts** and your site will be live in minutes.

## Alternative: Manual GitHub Deploy

1. Push code to GitHub repository
2. Visit https://vercel.com/new
3. Select your GitHub repository
4. Accept default settings
5. Click Deploy
6. Custom domain setup in project settings

## Environment Variables

In Vercel project settings, add:

\`\`\`
NEXT_PUBLIC_SITE_URL = https://your-domain.com
\`\`\`

## Custom Domain

1. Go to Vercel Dashboard → Project Settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., tarsco.edu.gh)
4. Update DNS records:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
   - Or use Vercel's nameservers for root domain

## Monitoring

- **Analytics**: Vercel Dashboard → Analytics
- **Performance**: Lighthouse in Chrome DevTools
- **Errors**: Vercel Dashboard → Deployments

## Troubleshooting

**Images not loading**: Ensure image paths are correct and use `/placeholder.svg` format.

**Slow performance**: Check Lighthouse score and follow recommended optimizations.

**404 errors**: Verify route file structure matches URL paths.

## Rollback

Vercel automatically saves deployment history. To rollback:

1. Go to Deployments tab
2. Find previous working deployment
3. Click the three dots → Promote to Production

## Database Integration (Future)

When ready to add a CMS or database:

1. Connect Supabase, Firebase, or MongoDB
2. Add API routes in `/app/api`
3. Migrate static JSON to database
4. Update components to fetch from API

## Maintenance

- Update dependencies monthly: `npm update`
- Monitor security alerts: GitHub Security tab
- Backup data: Regular database exports if using CMS
- Content updates: Edit JSON files or CMS as needed
by:emmanuelnyarko284@gmail.com