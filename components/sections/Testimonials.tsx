'use client';

import { useGsap } from '@/hooks/useGsap';

const TESTIMONIALS = [
  {
    quote:
      "They delivered our website in just 2.5 weeks and we saw double the inquiries within the first month. Honestly didn't expect this level of quality at this price point.",
    name: 'Rajesh M.',
    role: 'Business Owner, Real Estate',
    tag: 'Business website',
    color: '#3b82f6',
  },
  {
    quote:
      'We needed both a website and a mobile app and they built both at the same time. Quality was outstanding and our conversions jumped 40% after launch.',
    name: 'Priya S.',
    role: 'Entrepreneur, Property Business',
    tag: 'Website + Mobile app',
    color: '#8b5cf6',
  },
  {
    quote:
      'The news application handles thousands of daily readers without any performance issues. Real-time updates and push notifications work flawlessly. Best tech team we have worked with.',
    name: 'Amit Patel',
    role: 'Director, FastNews Media',
    tag: 'News application',
    color: '#06b6d4',
  },
  {
    quote:
      'I was skeptical about the 3-week timeline but they actually delivered my e-commerce store in 18 days. The free mockup within 48 hours convinced me. My online sales have tripled since launch.',
    name: 'Neha Gupta',
    role: 'Founder, StyleCart E-commerce',
    tag: 'E-commerce website',
    color: '#ec4899',
  },
  {
    quote:
      'Verelios built our patient booking system and clinic management app. The milestone-based payment model made it risk-free for us. Felt like having an in-house team.',
    name: 'Vikram Singh',
    role: 'CTO, HealthFirst Clinics',
    tag: 'Custom software + app',
    color: '#f59e0b',
  },
  {
    quote:
      'We approached Verelios for a complete website redesign. The new site loads in under 2 seconds and our bounce rate dropped by 60%. Free SEO setup helped us rank on the first page.',
    name: 'Ananya Krishnan',
    role: 'Marketing Head, TravelBuddy Tours',
    tag: 'Website redesign',
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
              5.0 average rating from 37 Google reviews
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

      <style jsx>{`
        @media (max-width: 980px) {
          :global(.testimonial-grid) { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          :global(.testimonial-grid) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
