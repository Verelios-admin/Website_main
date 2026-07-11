'use client';

import { useEffect } from 'react';

/**
 * Removes duplicate JSON-LD (`<script type="application/ld+json">`) blocks that
 * React 18 re-inserts during client-side hydration in the App Router.
 *
 * The server HTML is correct — it contains exactly one of each structured-data
 * block. But on hydration React appends a second, identical copy of every
 * inline JSON-LD script, so the *rendered* DOM ends up with two of each. Because
 * Googlebot renders JavaScript, it saw the duplicated DOM — which is why Search
 * Console reported "Review has multiple aggregate ratings" on /locations/kanpur
 * (the reviewed ProfessionalService entity appeared twice, each with its own
 * aggregateRating, which is invalid).
 *
 * This runs right after hydration and drops any exact-duplicate JSON-LD script,
 * leaving a single copy of each — well before Google's renderer snapshots the
 * page. It keeps all structured data in the initial server HTML (good for SEO)
 * and, mounted in the root layout, protects every page (home, Kanpur, etc.).
 */
export function JsonLdDedupe() {
  useEffect(() => {
    const dedupe = () => {
      const seen = new Set<string>();
      document
        .querySelectorAll('script[type="application/ld+json"]')
        .forEach((el) => {
          const key = (el.textContent || '').trim();
          if (!key) return;
          if (seen.has(key)) {
            el.remove();
          } else {
            seen.add(key);
          }
        });
    };

    // Run immediately after hydration, then once more on the next tick as a
    // safety net in case a duplicate is committed slightly later.
    dedupe();
    const t = setTimeout(dedupe, 0);
    return () => clearTimeout(t);
  }, []);

  return null;
}
