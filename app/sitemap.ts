import type { MetadataRoute } from 'next';

// Generated sitemap, replacing the hand-maintained public/sitemap.xml.
//
// Why this exists: the static file had to be edited by hand in the same commit as
// every new route, with nothing enforcing that pairing — one forgotten edit and a
// page silently drops out of the sitemap. Driving it from this list means adding a
// route means adding one line here, in TypeScript, where a typo is a build error.
//
// `output: 'export'` is fine with this — Next runs sitemap.ts at BUILD time and
// writes a static out/sitemap.xml. There is no server involved at request time.
//
// LASTMOD POLICY: the date is the last time the page's CONTENT meaningfully
// changed — not the last time any character in the file moved. A blanket "today"
// stamp on every URL is a freshness signal Google learns to discount, so keep
// these honest: only bump a date when a human would agree the page changed.
//
// Deliberately NOT included:
//   • /privacy-policy, /terms-of-service, /cookie-policy — all `noindex, follow`.
//     A sitemap is a list of pages you want indexed, so listing noindex pages
//     sends Google contradictory instructions.
//   • hreflang alternates — the old sitemap declared en-IN + en + x-default all
//     pointing at the SAME url, on 1 of 24 entries. Self-referential alternates on
//     a single-language, single-region site carry no routing signal and were pure
//     maintenance surface. Re-add only if a real second locale ships.

const SITE = 'https://www.verelios.com';

/** Date each page's content last meaningfully changed (Asia/Kolkata calendar day). */
const PAGES: Array<{ path: string; lastmod: string; priority: number }> = [
  // Core — schema, hero rendering and metadata substantively reworked 2026-07-28.
  { path: '/', lastmod: '2026-07-28', priority: 1.0 },

  // Service pages (national intent: "… in India").
  { path: '/services', lastmod: '2026-07-28', priority: 0.8 },
  { path: '/services/website-development', lastmod: '2026-07-28', priority: 0.9 },
  { path: '/services/mobile-app-development', lastmod: '2026-07-28', priority: 0.9 },
  { path: '/services/custom-software-development', lastmod: '2026-07-28', priority: 0.8 },
  { path: '/services/ai-automation', lastmod: '2026-07-28', priority: 0.8 },
  { path: '/services/erp', lastmod: '2026-07-28', priority: 0.8 },
  { path: '/services/web-hosting', lastmod: '2026-07-28', priority: 0.7 },
  { path: '/services/ui-ux-design', lastmod: '2026-07-28', priority: 0.7 },

  // Location pages (local intent: "… in Kanpur").
  { path: '/locations/kanpur', lastmod: '2026-07-28', priority: 0.9 },
  { path: '/locations/kanpur/website-development', lastmod: '2026-07-28', priority: 0.9 },
  { path: '/locations/kanpur/mobile-app-development', lastmod: '2026-07-28', priority: 0.8 },
  { path: '/locations/kanpur/ai-development', lastmod: '2026-07-28', priority: 0.8 },
  { path: '/locations/kanpur/erp-software', lastmod: '2026-07-28', priority: 0.8 },

  // Blog. lastmod = the post's own publish date, because the prose has not been
  // rewritten since; keep each of these in step with the PUBLISHED constant in the
  // matching app/blog/<slug>/page.tsx and the `posts` array in app/blog/page.tsx.
  { path: '/blog', lastmod: '2026-07-28', priority: 0.7 },
  { path: '/blog/best-ai-development-companies-kanpur-2026', lastmod: '2026-07-17', priority: 0.7 },
  { path: '/blog/best-website-development-companies-kanpur-2026', lastmod: '2026-07-17', priority: 0.7 },
  { path: '/blog/best-app-development-companies-kanpur-2026', lastmod: '2026-07-17', priority: 0.7 },
  { path: '/blog/best-erp-software-companies-kanpur-2026', lastmod: '2026-07-17', priority: 0.7 },
  { path: '/blog/ai-automation-for-indian-businesses-2026', lastmod: '2026-06-26', priority: 0.6 },
  { path: '/blog/ai-chatbot-for-business-india', lastmod: '2026-06-26', priority: 0.6 },
  { path: '/blog/custom-website-development-cost-india-2026', lastmod: '2026-05-26', priority: 0.7 },
  { path: '/blog/how-to-choose-web-development-agency-india', lastmod: '2026-05-26', priority: 0.6 },
  { path: '/blog/how-we-ship-websites-in-3-weeks', lastmod: '2026-05-26', priority: 0.6 },

  // About — author/company credentials page (E-E-A-T).
  { path: '/about', lastmod: '2026-07-28', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastmod, priority }) => ({
    // Trailing-slash-free form, matching every page's own <link rel="canonical">
    // and what the host serves. `/` is the one exception.
    url: path === '/' ? `${SITE}/` : `${SITE}${path}`,
    lastModified: lastmod,
    priority,
  }));
}
