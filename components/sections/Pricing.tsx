'use client';

import { useGsap } from '@/hooks/useGsap';

const PLANS = [
  {
    name: 'Business website',
    sub: 'Conversion-focused sites that turn visitors into enquiries',
    price: '₹49,999',
    eta: 'Delivery: 7–14 days',
    featured: false,
    features: [
      'Up to 5 pages — Home, About, Services, Contact & more',
      'Mobile-first, responsive design',
      'SEO-optimised & built to load fast',
      'Lead-capture form with WhatsApp integration',
      'Domain & hosting setup handled for you',
      '7-day post-launch support',
    ],
  },
  {
    name: 'Mobile app',
    sub: 'Cross-platform iOS & Android from a single codebase',
    price: '₹99,999',
    eta: 'Delivery: 3–5 weeks',
    featured: true,
    features: [
      'One codebase, shipped to iOS + Android',
      'Custom UI/UX designed for retention',
      'Push notifications & real-time updates',
      'Backend API & database setup',
      'App Store & Play Store submission',
      '7-day post-launch support',
    ],
  },
  {
    name: 'Custom software',
    sub: 'CRMs, ERPs, dashboards & automations built around your workflow',
    price: '₹1,49,999',
    eta: 'Delivery: 4–8 weeks',
    featured: false,
    features: [
      'Fully custom-built to your requirements',
      'Admin dashboard & analytics',
      'Third-party API integrations',
      'Role-based access & security',
      'Scalable cloud architecture',
      'Dedicated project manager',
    ],
  },
];

export function Pricing() {
  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    gsap.from(scope.querySelectorAll('.section-head > *'), {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 78%' },
    });

    gsap.from(scope.querySelectorAll('.price-card'), {
      y: 36,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.12,
      scrollTrigger: { trigger: scope.querySelector('.three-up'), start: 'top 80%' },
    });
  });

  return (
    <section ref={ref} id="pricing" className="tile" style={{ background: 'var(--color-canvas)' }}>
      <div className="wrap">
        <div
          className="section-head"
          style={{ textAlign: 'center', margin: '0 auto 56px', justifyItems: 'center' }}
        >
          <div className="eyebrow" style={{ textAlign: 'center' }}>Pricing</div>
          <h2 className="display-section" style={{ textAlign: 'center' }}>
            Transparent pricing. <br />
            <span style={{ color: 'var(--color-ink-muted-48)' }}>Pay as you see progress.</span>
          </h2>
          <p className="lead" style={{ marginTop: 6, maxWidth: 620, textAlign: 'center' }}>
            No hidden charges. 30% to start, 30% at mid-delivery, 40% at launch.
          </p>
        </div>

        <div className="three-up">
          {PLANS.map((p) => (
            <article key={p.name} className={'price-card ' + (p.featured ? 'featured' : '')}>
              {p.featured && <span className="price-feature-badge">Most popular</span>}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 24,
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  margin: '0 0 6px',
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 14,
                  color: 'var(--color-ink-muted-48)',
                  margin: '0 0 22px',
                  letterSpacing: '-0.005em',
                }}
              >
                {p.sub}
              </p>
              <div
                style={{
                  paddingBottom: 18,
                  borderBottom: '1px solid var(--color-hairline)',
                  marginBottom: 22,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: 'var(--color-ink-muted-48)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  Projects typically start at
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 38,
                    fontWeight: 600,
                    letterSpacing: '-0.025em',
                  }}
                >
                  {p.price}
                </span>
              </div>
              <div style={{ color: 'var(--color-ink-muted-48)', fontSize: 13, marginBottom: 22 }}>{p.eta}</div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      gap: 10,
                      alignItems: 'flex-start',
                      fontFamily: 'var(--font-text)',
                      fontSize: 14.5,
                      lineHeight: 1.5,
                      color: 'var(--color-ink)',
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        marginTop: 2,
                        color: 'var(--color-primary)',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <a
                  href="#contact"
                  className="btn-pill press"
                  style={
                    p.featured
                      ? { background: 'var(--color-ink)', width: '100%', justifyContent: 'center' }
                      : {
                          background: 'var(--color-canvas)',
                          color: 'var(--color-ink)',
                          border: '1px solid var(--color-ink)',
                          width: '100%',
                          justifyContent: 'center',
                        }
                  }
                >
                  Get started
                </a>
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: 36,
            textAlign: 'center',
            color: 'var(--color-ink-muted-80)',
            fontSize: 15,
          }}
        >
          Every project includes{' '}
          <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>free SEO setup</strong>,{' '}
          <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>speed optimization</strong>, and{' '}
          <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>7-day post-launch support</strong>.{' '}
          <a href="#contact" className="link-arrow">
            Need something custom? Let&apos;s talk <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
