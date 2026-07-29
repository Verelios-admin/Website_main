'use client';

import { useGsap } from '@/hooks/useGsap';

// Real, verified 5★ Google reviews (from the Verelios Labs Google Business
// Profile — 5.0 across 38 reviews). Text lightly trimmed for length; names are
// the reviewers' real public names.
const TESTIMONIALS = [
  {
    quote:
      'From domain setup to live launch, the entire process was smooth and well-communicated. Our website ranks well on Google too, thanks to the SEO-ready structure they built. Best website developers in Kanpur for small and medium businesses.',
    name: 'Shrawan Garg',
    role: 'Verified Google review',
    tag: 'Website development',
    color: '#3b82f6',
  },
  {
    quote:
      'They built our website really well — the design, performance and overall quality exceeded expectations. What impressed me most is the range of tech support, from app and web development to ERP and CRM. Highly recommended.',
    name: 'Tanay Trivedi',
    role: 'Verified Google review',
    tag: 'Website + tech',
    color: '#8b5cf6',
  },
  {
    quote:
      'Had a really great experience building a custom website for my company. They are super reliable and committed exactly to the timeline — I got the work done even before my deadline, and my website has reached so many customers.',
    name: 'Bhavesh Singh',
    role: 'Verified Google review',
    tag: 'Custom website',
    color: '#06b6d4',
  },
  {
    quote:
      'They provided the best services needed for the app, published it on the App Store, and also handle maintenance. They released my app on both the Play Store and the App Store.',
    name: 'Maitrey Deshpande',
    role: 'Verified Google review',
    tag: 'Mobile app',
    color: '#ec4899',
  },
  {
    quote:
      'Verelios’s ERP software integrated all our factory operations — production, inventory, quality and maintenance — into one system. Manufacturing efficiency improved 25% and the ROI was clearly visible within 12 months. Best ERP software company in Kanpur.',
    name: 'Agile Horses ERP',
    role: 'Verified Google review',
    tag: 'ERP software',
    color: '#f59e0b',
  },
  {
    quote:
      'A great experience working with Verelios Labs for website development. Highly professional, responsive, and they understand client requirements very well. They delivered a clean, modern and fully functional website.',
    name: 'Sumit Prasad',
    role: 'Verified Google review',
    tag: 'Website development',
    color: '#10b981',
  },
];

function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: color,
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: '-0.01em',
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

export function Testimonials() {
  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    gsap.from(scope.querySelectorAll('.section-head > *, .section-head .testimonial-rating'), {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: { trigger: scope, start: 'top 78%' },
    });

    gsap.from(scope.querySelectorAll('.testimonial-card'), {
      y: 32,
      opacity: 0,
      duration: 0.7,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope.querySelector('.testimonial-grid'), start: 'top 80%' },
    });
  });

  return (
    <section
      ref={ref}
      id="testimonials"
      className="tile"
      style={{ background: 'var(--color-canvas-parchment)' }}
    >
      <div className="wrap">
        <div
          className="section-head"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            maxWidth: '100%',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="eyebrow">Client love</div>
            <h2 className="display-section" style={{ marginTop: 16 }}>
              Don&apos;t just take <br />
              our word for it.
            </h2>
          </div>
          <div className="testimonial-rating" style={{ textAlign: 'right' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 44,
                fontWeight: 600,
                letterSpacing: '-0.025em',
                lineHeight: 1.0,
              }}
            >
              5.0 / 5.0
            </div>
            <div style={{ color: 'var(--color-ink-muted-48)', fontSize: 13, marginTop: 6 }}>
              5.0 average rating from 38 Google reviews
            </div>
          </div>
        </div>

        <div
          className="testimonial-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="card testimonial-card"
              style={{ padding: 28, display: 'flex', flexDirection: 'column' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 28,
                  lineHeight: 1.0,
                  color: 'var(--color-ink-muted-48)',
                  marginBottom: 12,
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 15.5,
                  lineHeight: 1.55,
                  color: 'var(--color-ink)',
                  letterSpacing: '-0.01em',
                  margin: 0,
                  flex: 1,
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  marginTop: 20,
                  paddingTop: 20,
                  borderTop: '1px solid var(--color-hairline)',
                  display: 'flex',
                  gap: 14,
                  alignItems: 'center',
                }}
              >
                <Avatar name={t.name} color={t.color} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: 'var(--color-ink-muted-48)', fontSize: 12 }}>{t.role}</div>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'var(--color-canvas-parchment)',
                    color: 'var(--color-ink-muted-80)',
                    letterSpacing: '-0.005em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {t.tag}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Testimonials;
