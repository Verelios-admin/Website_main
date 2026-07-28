import Link from 'next/link';

export const GBP_URL = 'https://share.google/fLuxTG3N5HVlEGhge';

/**
 * Compact trust strip for the national /services/* pages.
 *
 * Why it exists: every trust signal on this site used to live only on the
 * /locations/kanpur/* pages — the rating, the client quotes, the "meet us in
 * person" framing. The /services/* pages serve a strictly larger audience (all of
 * India, plus remote founders) and carried none of it, so the pages with the
 * widest reach were the least reassuring. This is the portable version: the real
 * rating, a link to read it at source, and a route to the evidence.
 *
 * No Review/AggregateRating JSON-LD here on purpose — self-authored review markup
 * about our own business is ineligible for Google's star rich result. This is
 * visible content for humans; Google gets the truth from the linked profile.
 */
export function TrustStrip() {
  const items: { label: string; value: string; href?: string; external?: boolean }[] = [
    { label: 'Client rating', value: '5.0 ★ from 38 reviews', href: GBP_URL, external: true },
    { label: 'Projects delivered', value: '10+ across India', href: '/about' },
    { label: 'Average delivery', value: 'Under 3 weeks' },
    { label: 'Payment', value: 'Nothing upfront · 30/30/40' },
  ];

  return (
    <section className="tile" style={{ paddingTop: 8, paddingBottom: 24 }}>
      <div className="wrap" style={{ maxWidth: 900, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 20,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-lg)',
            padding: '26px 26px',
          }}
        >
          {items.map((it) => (
            <div key={it.label}>
              <div
                style={{
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {it.label}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.82)' }}>
                {it.value}
              </div>
              {it.href ? (
                <div style={{ marginTop: 6 }}>
                  {it.external ? (
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        minHeight: 44,
                        color: '#2997ff',
                        textDecoration: 'none',
                        fontSize: 14,
                      }}
                    >
                      Read them on Google →
                    </a>
                  ) : (
                    <Link
                      href={it.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        minHeight: 44,
                        color: '#2997ff',
                        textDecoration: 'none',
                        fontSize: 14,
                      }}
                    >
                      See the work →
                    </Link>
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
