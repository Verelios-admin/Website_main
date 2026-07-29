import { Prose } from '@/components/sub-page/Prose';

// Verelios Labs' Google Business Profile — used for the "view on Google" link
// and as a sameAs signal in the LocalBusiness structured data.
export const GBP_URL = 'https://share.google/fLuxTG3N5HVlEGhge';

export const SOCIAL_LINKS = [
  'https://www.linkedin.com/in/verelios-4a1483387/',
  'https://www.facebook.com/profile.php?id=61585021269687',
  'https://www.instagram.com/verelioslabs/',
];

export interface LocalReview {
  author: string;
  body: string;
}

/**
 * Reusable local-trust block for Kanpur landing pages: address / hours / rating
 * card plus a grid of visible client reviews.
 *
 * These quotes are visible social proof ONLY — they are deliberately not wrapped
 * in Review/AggregateRating JSON-LD. Self-authored review markup about our own
 * business is ineligible for Google's star rich result and risks a manual action,
 * so the ratings live here as content a human reads, and the authoritative version
 * stays on the Google Business Profile we link to.
 */
export function LocalTrustBlock({
  reviews,
  heading = 'What our Kanpur clients say',
}: {
  reviews: LocalReview[];
  heading?: string;
}) {
  return (
    <>
      {/* Local trust card — address, hours, rating, Google Business Profile */}
      <section className="tile" style={{ paddingTop: 8, paddingBottom: 24 }}>
        <div className="wrap" style={{ maxWidth: 900, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 20,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px 26px',
            }}
          >
            <div>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 8 }}>
                Visit us in Kanpur
              </div>
              <address style={{ fontStyle: 'normal', fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
                126/58 G Block, Govind Nagar<br />
                Kanpur, Uttar Pradesh 208006
              </address>
            </div>
            <div>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 8 }}>
                Open
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
                Open 24 hours · Every day<br />
                <a href="tel:+918299522798" style={{ color: '#2997ff', textDecoration: 'none' }}>+91 82995 22798</a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 8 }}>
                Rated 5.0 ★
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
                38 client reviews<br />
                <a href={GBP_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#2997ff', textDecoration: 'none' }}>
                  See us on Google →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client reviews — visible content only. There is deliberately no Review or
          AggregateRating JSON-LD anywhere on this site; see the note on the
          component above. The authoritative version of these ratings lives on the
          linked Google Business Profile. */}
      <section className="tile" style={{ paddingTop: 8, paddingBottom: 24 }}>
        <div className="wrap" style={{ maxWidth: 900, margin: '0 auto' }}>
          <Prose>
            <h2>{heading}</h2>
          </Prose>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, margin: '4px 0 22px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 700, lineHeight: 1, color: '#fff' }}>5.0</span>
            <span aria-hidden="true" style={{ color: '#f5a623', fontSize: 20, letterSpacing: 3 }}>★★★★★</span>
            <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)' }}>from 38 verified client reviews</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 16,
            }}
          >
            {reviews.map((r) => (
              <figure
                key={r.author}
                style={{
                  margin: 0,
                  padding: 22,
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div aria-hidden="true" style={{ color: '#f5a623', fontSize: 15, letterSpacing: 2, marginBottom: 10 }}>★★★★★</div>
                <blockquote style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.82)' }}>
                  &ldquo;{r.body}&rdquo;
                </blockquote>
                <figcaption style={{ marginTop: 14, fontSize: 14, fontWeight: 600, color: '#fff' }}>
                  {r.author}
                  <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}> · Kanpur</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div style={{ marginTop: 20 }}>
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2997ff', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}
            >
              Read all our reviews on Google →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default LocalTrustBlock;
