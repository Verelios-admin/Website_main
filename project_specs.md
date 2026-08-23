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
- `/services` — hub, plus one page per service:
  `website-development`, `mobile-app-development`, `custom-software-development`, `ui-ux-design`,
  `ai-automation`, `erp`, `web-hosting`, `ecommerce-development`, `hrms-payroll-software`,
  `billing-inventory-software`, `crm-software-development`
- `/locations/kanpur` — hub, plus one page per local intent:
  `website-development`, `mobile-app-development`, `ai-development`, `erp-software`,
  `hrms-payroll-software`, `billing-inventory-software`
- `/about`, `/blog` plus nine articles
- `/privacy-policy`, `/terms-of-service`, `/cookie-policy`

### Phase 6 — Landing pages for queries we already rank for ✓ COMPLETED 2026-08-18 (build-verified: 38 routes, 31 sitemap URLs, every internal link resolves)

Driven by a measured rank scan of 17 commercial Kanpur queries, not guesswork. The
finding: relevance is strong and prominence is weak, so we rank #1 on narrow product
queries and 10th–14th or nowhere on head terms.

Two queries — **"billing and inventory software in kanpur"** and **"hrms and payroll
software in kanpur"** — were already **#1 in the local pack with no landing page behind
them**, so that traffic was arriving on a homepage that never mentioned what was
searched for. Those two pages were the highest-return work available and needed no
ranking improvement at all.

New pages, each with Service + BreadcrumbList + FAQPage schema mirroring the visible
FAQ verbatim, matching the established `SubPageLayout` / `PageHero` / `Prose` pattern:

| Page | Why | Rank at build time |
|---|---|---|
| `/services/hrms-payroll-software` | ranked #1, no page | 1 |
| `/services/billing-inventory-software` | ranked #1, no page | 1 |
| `/services/crm-software-development` | close to top 3 | 7 |
| `/services/ecommerce-development` | not ranking at all | — |
| `/locations/kanpur/hrms-payroll-software` | local intent for a #1 query | 1 |
| `/locations/kanpur/billing-inventory-software` | local intent for a #1 query | 1 |

Supporting changes:
- `RelatedServices` now shows a **rotating window of 6** of the 11 services instead of
  all of them. A fixed `.slice(0, 6)` would have orphaned whatever sat at the bottom of
  the array; rotating by the current page's index keeps the grid tight *and* gives every
  service inbound internal links from roughly half the others.
- Stale **"38 client reviews"** corrected to **53** in all nine user-facing places
  (`TrustStrip`, `LocalTrustBlock`, `Testimonials`, `/about`, and four Kanpur pages).
  The Google Business Profile is the source of truth and had moved on.
- `/services` hub and `/locations/kanpur` hub updated; the Kanpur "HR & payroll" card
  previously pointed at `erp-software` as a placeholder and now has a real destination.

Known constraint: a full `next build` cannot run in a network-restricted sandbox because
`next/font/google` fetches Inter from `fonts.googleapis.com` at build time. Verification
was done by building an isolated copy with the font call stubbed — the repo itself is
untouched, and `tsc --noEmit` passes against it directly.

### Phase 7 — Reconcile the site against the Google Business Profile ✓ COMPLETED 2026-08-18

GBP is the source of truth for NAP, hours, rating and categories. Re-read live before
editing: **5.0 from 53 reviews**, 126/58 G Block Govind Nagar Kanpur 208006,
+91 82995 22798, open 24 hours, primary category Software company.

Mismatches found and fixed:

- **Contradictory project count.** Hero and `TrustStrip` said "10+ projects", `Studio`
  said "10+ projects shipped", while `Portfolio` said "50+ clients" — on the same site.
  Aligned to **50+** everywhere (owner-confirmed; corroborated by 53 GBP reviews).
- **Review count** was 38 in nine user-facing places and in six code comments. Now 53
  throughout. This is the field most likely to drift again — GBP is authoritative.
- **`foundingDate`** — RESOLVED 2026-08-20 (commit `a814261`) and re-verified live on
  2026-08-23: both the `#organization` node and the `#localbusiness` node now declare
  `2024`, and `/about` and `public/llms.txt` agree. The earlier `2025-01` value and the
  open question about it are closed. Change all four together or none of them.
- **`additionalType` added** mirroring the four GBP categories (Software company,
  Web Designer, Marketing agency, Internet marketing service) so the entity Google
  builds from the site agrees with the one it builds from the GBP.
- **Bangalore on-site claim removed.** The `areaServed` comment asserted Bangalore was
  "served on-site too". There is one office, in Govind Nagar. Kanpur is the only physical
  location; everywhere else is remote, matching how the GBP service area is set. Added
  Maharashtra (in the GBP service area), dropped Hyderabad (not in it).

Verified after rebuild: single `#localbusiness` @id sitewide, one street address, one
postal code, one set of opening hours, zero `aggregateRating` nodes (self-serving review
markup stays out), and zero occurrences of any stale count across all 38 pages.

### Phase 8 — Full SEO audit and remediation ✓ COMPLETED 2026-08-23 (build-verified: 39 routes, 32 sitemap URLs, tsc clean)

Eleven specialists audited the live site (commit `e05f91d`) in parallel. **Health score
79/100.** Every finding below was verified against the live site before acting; three
agent findings were **rejected as false** and are recorded here so nobody re-fixes them.

**The central finding: the pages are fine, the link graph is not.** Two specialists
working independently reached the same conclusion. Technical 90/100, schema 90/100, no
thin pages, Kanpur pages 95–99.9% unique against their national twins. What is missing is
prominence: **zero of the seven client sites Verelios built link back** (verified — all 7
return 200, none contains the string "verelios"), no LinkedIn Company Page, no GoodFirms
profile, an unclaimed Clutch profile, and a domain only ~9.5 months old. That is why the
site ranks #1 on narrow product queries and 10th–14th on head terms.

Fixed in code:

| Finding | Fix |
|---|---|
| Homepage said custom software from ₹1,49,999; `/services`, the service page and `llms.txt` said ₹99,999 | Owner confirmed **₹1,49,999**; the other three now agree. `/locations/kanpur` lumped "custom software / ERP from ₹99,999" — split, ERP keeps ₹99,999 |
| `llms.txt` claimed **42** Google reviews | → 53 |
| `/services` hub had no link from homepage or footer (click-depth 2) | Added to the footer Services column and the homepage services section |
| 3 of 6 Kanpur pages never linked up to their national service page | Standardised; the other 3 already did |
| `areaServed` listed Maharashtra, Bangalore, Pune, Mumbai, Delhi with no content behind them | Trimmed to Kanpur, Lucknow, UP, India |
| `alternateName` "Verelios Web & App Studio" matched neither the site nor the GBP | Removed |
| `/blog` publisher was a loose Organization copy | References `#organization` |
| Coordinates and `minPrice` were quoted strings | Numbers |
| The 6 Kanpur leaf pages showed the address with no "Get directions"; site had **no** review-request path at all | Both added to `LocalTrustBlock`. `REVIEW_URL` still points at the profile — swap in the GBP dashboard's `g.page/r/<id>/review` link |
| FAQ rows were 354×28px; country-code button 82×33px | FAQ padding moved onto the `<button>` (same look, whole row tappable); country button fills its field at 36×92 |
| Cost-guide prose rewritten 2026-06-13 but `dateModified` still derived from `PUBLISHED` | Separate `UPDATED` constant |
| Sub-page heroes had no WhatsApp above the fold on mobile; "See the work" sent visitors back to the homepage | Second CTA is now WhatsApp across ~20 pages |
| CRM was the only service with no Kanpur twin, while ranking ~#7 | Built `/locations/kanpur/crm-software-development` — 1,792 words, 93.8% unique |

**RESOLVED 2026-08-23 after two wrong turns. There is NO duplicate-tag
misconfiguration. Nothing to fix in Google Tag Manager.**

The sequence, recorded because the reasoning error is the useful part:

1. An agent reported "Google Ads gtag loads twice, once via GTM." It was rejected
   after grepping `gtm.js` for literal `AW-`/`G-` strings. That test is invalid —
   GTM resolves tag IDs at runtime — so the rejection was right by luck, not method.
2. With the PageSpeed API key configured, Google's network log showed
   `gtag/js?id=AW-18037984640&cx=c&gtm=4e68j0h1`. The `gtm=` parameter was read as
   proof the GTM container fetched it, and the rejection was reversed. **That reading
   was wrong:** `gtm=` in a `gtag/js` URL is gtag.js's own version string, not evidence
   of Google Tag Manager.
3. The owner's screenshot of container `GTM-KQ48CLVM` settles it: it holds exactly
   **one** tag — "Leadfeeder Website Tracker", Custom HTML, All Pages. No GA4 tag, no
   Ads tag. The guard comment at `app/layout.tsx:262-268` is being honoured.

What actually happens: `app/layout.tsx:285` loads `gtag/js?id=AW-18037984640` once,
then `gtag('config', …)` for two destination IDs (AW-18037984640 and G-96F7T65XWE),
and gtag.js fetches a per-destination config for each. That is documented Google tag
behaviour, not duplication anyone introduced, and it cannot be removed without
removing the tag.

**Lesson:** never conclude "this loads twice" from a URL parameter. Confirm against
the actual configuration surface — here, the container's own Tags list.

**What IS real about performance** (all measured, none of it a misconfiguration):
PageSpeed mobile is **79, and 69 on a re-run**, where a local Lighthouse run with
devtools throttling reported 97 — Google's simulated throttling is the number that
counts and the local figure was flattering. Third-party scripts total **~790 KiB and
~460ms of main thread**: Google tag ~450 KiB, Meta Pixel ~180 KiB, GTM + Leadfeeder
~124 KiB. Unused JavaScript is 369 KiB, essentially all of it tracking. This is not a
bug to fix; it is a decision about how many tracking stacks the business needs to run
at once. Meta Pixel is the most questionable line if Facebook ads are not active.

**CrUX field data:** verelios.com returns `NOT_FOUND` — too little real traffic to be
sampled. So Core Web Vitals currently cost nothing in ranking terms, and speed work is
pre-emptive rather than remedial. Competitors' field data (public, pulled 2026-08-23):
sigmasoftwares.org LCP 3982ms / INP 272ms / **CLS 0.74 (poor)**, vyaparinfotech.com LCP
4144ms (poor), webguard.in LCP 2702ms. **Not one competitor passes Core Web Vitals on
real phones.**

**Leadfeeder:** working, but its beacon to `tr.lfeeder.com` logs a console error in
PageSpeed's environment, and its payload carries `gaTrackingIds: []` / `gaMeasurementIds:
[]` — it cannot see the Google tag because Leadfeeder runs `afterInteractive` while gtag
runs `lazyOnload`. Company identification still works; GA-to-Leadfeeder correlation does
not. Only worth changing if that correlation is actually used.

**Rejected as false — do not re-fix:**
1. *"Zero of the 11 `/services/*` pages link down to a `/locations/kanpur/*` page."* All
   six that have a Kanpur twin already linked to it. Only the reverse direction was broken.
2. *"`RelatedServices` rotation leaves some services under-linked."* Checked by
   simulation: each of the 11 gets exactly 6 inbound contextual links. Balanced.

**Lesson recorded:** verify a "this loads twice" claim against an actual network log, not
against the source of a script that resolves its config at runtime. PageSpeed also reports
**79 (and 69 on a second run)** for mobile where a local Lighthouse run with devtools
throttling reported 97 — Google's simulated throttling is the number that matters, and the
local figure was flattering. Both numbers were labelled lab data, but only one is Google's.

**Accepted risk (owner decision 2026-08-23):** the four `best-*-companies-kanpur-2026`
listicles score Verelios 6/6 with specifics while every competitor gets 0/6 and a
sentence, under a claim of applying the "same criteria", with no outbound links to any of
them. The conflict-of-interest disclosure is genuinely honest, but the scoring asymmetry
is the site's largest helpful-content exposure. Owner chose to leave them as-is.

**Also left as-is by decision:** `sameAs` continues to point at a personal LinkedIn
profile rather than a Company Page (weaker entity signal, not wrong).

**Owner-side work, highest return first** (nothing in code can substitute):
1. Ask the 7 client sites for a "Website by Verelios Labs" footer credit. Seven free,
   perfectly topical links from warm relationships. Re-check with the script in
   `verelios.com-audit/` in 30 days.
2. Create a LinkedIn Company Page; create GoodFirms; claim Clutch; check and create
   IndiaMART / JustDial / Sulekha. Submit this exact string every time so citations match:
   `Verelios Labs | 126/58 G Block, Govind Nagar, Kanpur, Uttar Pradesh 208006 | +91 82995 22798 | https://www.verelios.com`
   Never submit +91 84710 94125 as the primary phone — that is the WhatsApp line.
3. Connect Search Console + a free Moz key. Several audit questions could only be answered
   directionally without them: which page Google prefers per query, referring domains, and
   real field Core Web Vitals.

**Measured, lab only (no Google API key configured, so no CrUX/field data):** homepage
mobile Lighthouse 96, LCP 2.16s (LCP element is `p.hero-lead` text), CLS 0.000, TBT 120ms
— up from a previously reported ~50ms. Third-party tags now cost **459ms of main-thread
time and 792KB, 67% of total page weight** (GTM 285ms, Meta Pixel 157ms, Leadfeeder 15ms).
Still "Good", but the trend has one direction. Service, location, blog and all desktop
pages were not measured.

**Artifacts:** `verelios.com-audit/` — `FULL-AUDIT-REPORT.md`, `ACTION-PLAN.md`,
`audit-data.json`, 11 per-specialist findings files, 27 screenshots, and a pre-deploy
drift baseline (`/seo drift compare` after deploying will show exactly what changed).

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
- [x] **app/sitemap.ts:** DONE — migrated 2026-07-28 (commit `3486f85`). `public/sitemap.xml` no longer exists; the sitemap is generated at build time from the `PAGES` list in `app/sitemap.ts`, where adding a route is one typed line and a typo is a build error. ~~deferred~~ (this line said "deferred" until 2026-08-23; it was stale by three weeks.)

### Phase 2 — Local SEO (Kanpur) ✓ COMPLETED 2026-06-16 (build-verified). Real NAP: **Verelios Labs, 126/58 G Block, Govind Nagar, Kanpur, Uttar Pradesh 208006 · +91 8299522798 (primary) · open 24 hours, daily**. WhatsApp remains +91 8471094125. GBP verified (5.0 from 42 reviews).
- [x] "Pune-based" → "Kanpur-based" (website-development page).
- [x] Added `PostalAddress` + `GeoCoordinates` (26.4382, 80.3010 — Govind Nagar approx; refine to exact GBP pin if desired) + `openingHoursSpecification` (open 24 hours, daily) to `localBusinessJsonLd`; mirrored `PostalAddress` into Organization schema.
- [x] geo meta → region `IN-UP`, placename Kanpur, Kanpur coordinates.
- [x] `areaServed` now leads Kanpur/Lucknow/UP, then Bangalore (served on-site) + India + metros. No "no office"/"remote" wording anywhere public.
- [x] Visible `<address>` NAP block in Footer; Kanpur/Lucknow local keywords added; `llms.txt` location + hours + 5.0/23-review rating + "Last updated" + Kanpur address updated.
- [x] `aggregateRating` reviewCount → 42 (matches real verified Google reviews as of 2026-07-12).
- [x] Resolved 2026-07-12: business is genuinely 24 hours; site hours updated to 24/7 to match GBP. Primary phone set to +91 8299522798 sitewide (schema + display); WhatsApp links stay on +91 8471094125. reviewCount updated 23 → 42.

### Phase 3 — AI automation service page (net-new content). DONE = `/services/ai-automation` live, wired into nav/footer/related, with Service + Breadcrumb + FAQPage schema. *(Needs owner data: what AI automation you actually offer + starting price.)*

### Phase 4 — GEO + content clusters (ongoing). 
- [~] `llms.txt`: "Last updated", founding year and unified pricing are all DONE
  (verified live 2026-08-23; the review count was corrected 42 → 53 and the custom-software
  floor set to ₹1,49,999 on 2026-08-23). Still outstanding: **expanded FAQs** — llms.txt
  carries four generic questions while the service pages carry richer, price-bearing ones.
- [ ] Blog cluster: Kanpur-local pricing post, AI-automation-for-SMBs, AI chatbot/WhatsApp, "Next.js vs WordPress", "get your business on Google in India". Each links up to a service page + cross-links pillars.
- [ ] (Ask before adding a top-level `/locations` folder per CLAUDE.md) Kanpur + Lucknow local landing pages.

### Phase 5 — Mobile performance ✓ COMPLETED 2026-06-16 (build-verified). Mobile PSI was 74 (LCP 3.5s / TBT 360ms / CLS 0.11); desktop 95.
- [x] **Lazy-load GSAP** (`hooks/useGsap.ts`, `components/WhatsAppButton.tsx`) via dynamic `import()` — moved off the first-paint path. Homepage First Load JS **188 kB → 143 kB**. First PSI re-test: mobile **74 → 88**, LCP **3.5s → 2.1s** (green). BUT lazy GSAP caused a CLS regression (desktop 0.008 → 0.217) because all sections' `gsap.from()` entrance tweens snapped *after* paint. **Fixed** by gating each section's GSAP init behind an IntersectionObserver (`rootMargin 150px`), so below-the-fold `.from()` tweens never snap during the load CLS window. (Re-measure pending.)
- [x] **Modern `browserslist`** (`package.json`) → drops the "legacy JavaScript" polyfills.
- [x] **CLS fix:** TopContactBar now fixed 36px (hairline via inset shadow, not border); `--tcb-h:36px` defined in CSS `:root` + matching fallbacks in `globals.css`/`Hero.tsx`; 2nd phone hidden ≤760px so the bar stays one row → no post-hydration jump.
- [x] **Logo:** 453×453 (54 KB) → `verelios-mark-sm.png` 64×64 (3.9 KB), repointed navbar + footer; big PNG no longer preloaded. Original kept for `pitch-deck.html`.
- [x] **Removed dead `fonts.googleapis.com` preconnect/dns-prefetch** (next/font self-hosts Inter).
- [x] **Stopped animating the `blur(40px)` hero blobs** (per-frame re-raster cost).
- [x] **`vercel.json`** far-future immutable cache headers for static images/fonts.
- [x] **CLS deep-fix (Lighthouse-attributed, not guessed):** ran Lighthouse locally; ~96% of CLS was ONE node — the hero block re-wrapping on "web font loaded". Fix: Inter `preload:false` + scoped the **hero text to system fonts** (`.hero-section` overrides `--font-display`/`--font-text`; Apple=SF Pro, Android=Roboto; rest of site keeps Inter) so Inter never swaps above the fold. Result: mobile **74→92→97**, TBT **360→50ms**, LCP **3.5s→1.8s**, CLS down toward ~0.005.
- [~] **doNext (second pass, not yet done):** gate Hero's ~14 always-running decorative GSAP loops behind IntersectionObserver; pause off-screen Portfolio SVG keyframes; coalesce desktop mouse-parallax tweens; tighten Tailwind CSS purge to shrink the 66 KB render-blocking sheet.

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
