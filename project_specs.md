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

## SEO / GEO + LOCAL task — execution plan (updated 2026-06-15)

**Goal:** rank verelios.com at the top of Google for its real, winnable intents — local
(Kanpur / Gujaini / Uttar Pradesh), AI automation, brand, and long-tail — and be citable by
AI answer engines (GEO). National head terms are treated as long-term pillars, not the near-term bet.

**Audit verdict:** technically healthy EXCEPT one indexing-killing bug (duplicate canonical) and
several data-integrity issues. Biggest missed opportunity: the site is physically in Kanpur and
already earns Kanpur impressions, but has ZERO local optimization and even says "Pune-based".

### Phase 1 — Critical fixes ✓ COMPLETED 2026-06-16 (`npm run build` clean; verified each `out/*.html` has exactly ONE self-referencing canonical, 20/20 JSON-LD blocks valid).
- [x] **Canonical bug:** removed hard-coded `<link rel="canonical">` (`app/layout.tsx`) and `canonical:SITE_URL` from layout `alternates`; added explicit `alternates.canonical:'https://www.verelios.com/'` to `app/page.tsx`. Verified: every page self-canonicals; no subpage points at the homepage.
- [x] **Review schema integrity:** `reviewCount` 10 → 6 to match the 6 named Review objects (owner confirmed reviews are real clients).
- [x] **Pricing consistency:** mobile-app floor unified to **₹99,999** across homepage `OfferCatalog`, app service page body + Offer schema; `llms.txt` floor ₹14,999 → ₹49,999.
- [x] **Blog `&amp;` bug:** `app/blog/page.tsx` title/description now use literal "&" (no double-encoding in output).
- [x] **robots.txt:** added ClaudeBot, anthropic-ai, Claude-Web, Claude-User, Perplexity-User, Amazonbot, Meta-ExternalAgent, FacebookBot, cohere-ai.
- [x] **FAQPage JSON-LD:** added to all 4 service pages (homepage already had it). Cost blog post deferred — it has descriptive headings, not a clean Q&A block.
- [x] **Bonus:** "Pune-based" → "Kanpur-based" on website-development page (false-claim fix; owner confirmed Kanpur).
- [~] **app/sitemap.ts:** deferred — the existing static `public/sitemap.xml` already lists all pages; refreshed `lastmod` to 2026-06-16 for the 6 changed pages. (Deleting the static file to switch to `app/sitemap.ts` would need your OK per the "ask before deleting" rule; we'll do it when adding the AI/local pages.)

### Phase 2 — Local SEO (Kanpur) ✓ COMPLETED 2026-06-16 (build-verified). Real NAP: **Verelios Labs, 126/58 G Block, Govind Nagar, Kanpur, Uttar Pradesh 208006 · +91 8471094125 · open daily 8am–11pm**. GBP already verified (5.0 from 23 reviews).
- [x] "Pune-based" → "Kanpur-based" (website-development page).
- [x] Added `PostalAddress` + `GeoCoordinates` (26.4382, 80.3010 — Govind Nagar approx; refine to exact GBP pin if desired) + `openingHoursSpecification` (08:00–23:00 daily) to `localBusinessJsonLd`; mirrored `PostalAddress` into Organization schema.
- [x] geo meta → region `IN-UP`, placename Kanpur, Kanpur coordinates.
- [x] `areaServed` now leads Kanpur/Lucknow/UP, then Bangalore (served on-site) + India + metros. No "no office"/"remote" wording anywhere public.
- [x] Visible `<address>` NAP block in Footer; Kanpur/Lucknow local keywords added; `llms.txt` location + hours + 5.0/23-review rating + "Last updated" + Kanpur address updated.
- [x] `aggregateRating` reviewCount → 23 (matches real verified Google reviews).
- **Owner to-do:** GBP hours currently show "Open 24 hours" — change to daily 8am–11pm so it matches the site.

### Phase 3 — AI automation service page (net-new content). DONE = `/services/ai-automation` live, wired into nav/footer/related, with Service + Breadcrumb + FAQPage schema. *(Needs owner data: what AI automation you actually offer + starting price.)*

### Phase 4 — GEO + content clusters (ongoing). 
- [ ] `llms.txt`: add "Last updated", founding year, expanded FAQs, unified pricing.
- [ ] Blog cluster: Kanpur-local pricing post, AI-automation-for-SMBs, AI chatbot/WhatsApp, "Next.js vs WordPress", "get your business on Google in India". Each links up to a service page + cross-links pillars.
- [ ] (Ask before adding a top-level `/locations` folder per CLAUDE.md) Kanpur + Lucknow local landing pages.

### Off-site — owner actions (I can't do these; highest ROI first)
1. **Claim + verify Google Business Profile** for the Gujaini, Kanpur address (wins the map pack — the single biggest local lever).
2. Get 5+ real Google reviews from past clients.
3. Vercel: confirm apex→www + https redirects; clean URLs return 200.
4. GSC: after canonical fix, resubmit sitemap + Request Indexing on the 4 pages + Validate Fix.
5. Earn 5–10 real backlinks (JustDial, Sulekha, IndiaMART, LinkedIn, client footer links).

### Open decisions (blocking Phases 1–3)
1. Is the business really Kanpur-based? Exact address / pincode / hours / GBP pin coordinates?
2. Are the 10 reviews / 6 testimonials from real, verifiable clients?
3. True mobile-app starting price — ₹99,999 or ₹49,999?
4. What AI-automation services do you offer, and starting price?
