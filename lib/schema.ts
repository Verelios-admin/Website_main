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
