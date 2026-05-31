# Project Specs — Verelios Labs Website

## What the app does and who uses it
A marketing website for **Verelios Labs**, a website & app development agency in India.
Visitors are founders and businesses looking to build a website, mobile app, or custom
software. The site explains services, shows work/process/pricing, and drives contact
(WhatsApp + form) to start a project.

## Tech stack
- **Framework:** Next.js 13.5.1 (App Router) — **static export** (`output: 'export'`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Radix UI primitives, GSAP for animation
- **Hosting:** Vercel (static)
- **Backend/Auth/DB:** None active on the marketing site (Supabase available per CLAUDE.md but unused here)
- **Analytics:** Google Analytics 4 + Google Ads, Meta Pixel

## Pages and user flows (all public)
- `/` — Homepage (Hero, Services, Industries, Portfolio, Process, About, Studio, Pricing, Testimonials, FAQ, Contact, Footer)
- `/services/website-development`, `/services/mobile-app-development`, `/services/custom-software-development`, `/services/ui-ux-design`
- `/blog`, plus three articles
- `/privacy-policy`, `/terms-of-service`, `/cookie-policy`

## Data models / storage
None — static content. Contact form posts out (no DB writes on this site).

## Third-party services
Google Analytics/Ads, Meta Pixel, WhatsApp deep links.

## SEO / GEO task — what "done" looks like
This task is an SEO + GEO (Generative Engine Optimization) pass on the existing site:
- Each page has unique title, meta description, canonical, OpenGraph/Twitter, single H1. ✓ (already present)
- Site-wide identity schema (`Organization`, `WebSite`) in the root layout; **page-specific**
  schema (`FAQPage`, `HowTo`, homepage `BreadcrumbList`, review/rating `ProfessionalService`)
  scoped to the homepage only — not injected on legal/blog pages.
- `robots.txt` allows mainstream + AI/answer-engine crawlers (GPTBot, PerplexityBot, Google-Extended, etc.). ✓
- `sitemap.xml` lists every indexable page with fresh `lastmod`.
- `llms.txt` published at the site root with a clean, factual, citable brief for AI engines.
- `npm run build` passes with no errors.
