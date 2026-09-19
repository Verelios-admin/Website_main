/**
 * Shared Schema.org entity references.
 *
 * WHY THESE EXIST — read before changing anything here.
 *
 * There are two ways to get this wrong, and we have now hit both:
 *
 *  1. Declaring a FULL copy of the business on every page, each with its own
 *     distinct @id. That fragmented one real business into six schema entities
 *     and multiplied the same review count six-fold.
 *
 *  2. Over-correcting to a bare reference — `provider: { '@id': '.../#localbusiness' }`
 *     — with the full node declared on only one page. This site is a static
 *     export, so every route is a separate HTML document, and Google resolves
 *     @id references only WITHIN the document it is currently parsing. It does
 *     not fetch other URLs to stitch the graph together. So a bare reference on
 *     /services/website-development pointed at a node that page never contained:
 *     Google saw a provider with no name, address or phone at all. For
 *     BlogPosting.author that is worse than cosmetic, because `author.name` is
 *     required for Article rich-result eligibility.
 *
 * The correct pattern is BOTH: inline enough identity to stand alone on the page,
 * AND carry the same canonical @id everywhere so Google consolidates every
 * mention into one entity. Co-referencing a shared @id across fully-declared
 * mentions is exactly what @id is for; what does not work is a page carrying
 * only an @id with nothing attached to it.
 *
 * Keep NAP here and only here — this is the single source of truth that stops
 * the address drifting between pages the way it did the first time.
 */

export const SITE = 'https://www.verelios.com';

/**
 * Google Business Profile rating, as displayed on the profile itself.
 *
 * This is a live number and it WILL drift — it has already gone 38 -> 53 -> 56
 * reviews, and 5.0 -> 4.9 after a single text-less one-star arrived on
 * 7 Sep 2026. Import these two constants rather than typing the figures, so the
 * next change is one edit instead of a hunt through forty-odd strings.
 *
 * To refresh: open the profile, read the headline rating, update here, then
 *   grep -rn "5\.0\|53 review" app components
 * to confirm nothing has been hardcoded behind your back.
 */
export const GBP_RATING = '4.9';
export const GBP_REVIEW_COUNT = 56;

export const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '126/58 G Block, Govind Nagar',
  addressLocality: 'Kanpur',
  addressRegion: 'Uttar Pradesh',
  postalCode: '208006',
  addressCountry: 'IN',
} as const;

/**
 * The business, as referenced FROM another node (a Service's `provider`, an
 * AboutPage's `about`). Same @id as the full node on the homepage and the Kanpur
 * hub, so Google merges them; enough identity that the page stands alone.
 */
export const LOCAL_BUSINESS_REF = {
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#localbusiness`,
  name: 'Verelios Labs',
  url: SITE,
  telephone: '+91-8299522798',
  address: POSTAL_ADDRESS,
} as const;

/**
 * The site's author, as referenced from a BlogPosting's `author`. `name` is
 * required by Google for Article rich results — never reduce this to a bare @id.
 * The full Person node (with knowsAbout, address, worksFor) lives on /about.
 */
export const AUTHOR_REF = {
  '@type': 'Person',
  '@id': `${SITE}/#sahil-chauhan`,
  name: 'Sahil Chauhan',
  url: `${SITE}/about`,
  jobTitle: 'Founder & CEO',
} as const;

/**
 * Every off-site profile that represents this business, as `Organization.sameAs`.
 *
 * Google builds ONE entity out of every profile listed here, so a target that
 * contradicts the NAP above actively works against the local signal. This list
 * lived in four separate files until 2026-09-19 (layout, homepage, the Kanpur hub
 * and LocalTrustBlock) — the same drift this file exists to prevent. Import it.
 *
 * DELIBERATELY EXCLUDED, verified live 2026-08-30 — do not "fix" by adding:
 *   https://www.linkedin.com/company/verelios-labs — a Company Page is the stronger
 *   entity signal than a personal profile, but it says "Founded: 2025" against this
 *   site's 2024 and lists Bangalore as a second location. The Facebook Page title
 *   reads "VereliosLabs | Bangalore" and the Instagram bio says "Offices in Bangalore
 *   (HSR Layout) and Kanpur". There is one office, in Govind Nagar; the Bangalore
 *   claim was removed from this site in Phase 7 and was never corrected on the
 *   platforms. Fix the platforms first, then swap the LinkedIn URL below.
 *
 * GoodFirms added 2026-09-19: owner-confirmed, and the profile's "Founded 2024"
 * matches this site. It is the only third-party directory Google indexes for the
 * brand, and directories of this class are what AI assistants lean on for
 * "best agency in X" answers. Re-check its Locations tab if the Bangalore claim
 * ever spreads there.
 */
export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/in/verelios-4a1483387/',
  'https://www.facebook.com/profile.php?id=61585021269687',
  'https://www.instagram.com/verelioslabs/',
  'https://www.goodfirms.co/company/verelios-labs',
] as const;
