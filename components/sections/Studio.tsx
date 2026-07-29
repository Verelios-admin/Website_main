'use client';

import { useGsap } from '@/hooks/useGsap';

/**
 * First-person "Studio" section. Real-business sites have a section like this
 * (an "About us" / "Why we exist" in plain English). Template sites don't —
 * which is precisely why adding one makes the whole site read as human-made.
 */
export function Studio() {
  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    gsap.from(scope.querySelectorAll('.studio-copy > *'), {
      y: 22,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 78%' },
    });
    gsap.from(scope.querySelectorAll('.studio-stat'), {
      y: 16,
      opacity: 0,
      duration: 0.6,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope.querySelector('.studio-stats'), start: 'top 82%' },
    });
  });

  return (
    <section
      ref={ref}
      id="studio"
      className="tile"
      style={{ background: 'var(--color-canvas)' }}
    >
      <div
        className="wrap studio-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <div className="studio-copy">
          <div className="eyebrow">About the studio</div>
          <h2 className="display-section" style={{ marginTop: 14 }}>
            We&apos;re a small Indian <br />
            studio that{' '}
            <span style={{ color: 'var(--color-ink-muted-48)' }}>actually ships.</span>
          </h2>
          <p className="lead" style={{ marginTop: 22, color: 'var(--color-ink-muted-80)' }}>
            We design and build custom websites, mobile apps and software for founders who&apos;ve heard too many quotes that started with &ldquo;we&apos;ll need 8 weeks&rdquo; and ended somewhere around 6 months.
          </p>
          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.6,
              color: 'var(--color-ink-muted-80)',
            }}
          >
            We stay small on purpose. No account managers, no project coordinators, no offshore-to-our-offshore-to-an-onshore chain. You message us on WhatsApp and the people writing your code reply. That&apos;s the entire stack.
          </p>
          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.6,
              color: 'var(--color-ink-muted-80)',
            }}
          >
            We use a tight modern stack (Next.js, React Native, TypeScript, Node, Postgres) on every project, refuse scope-creep that doesn&apos;t move the metric you actually care about, and ship in under three weeks for most websites.
          </p>
          <div style={{ marginTop: 28 }}>
            <a href="#contact" className="link-arrow">
              Send us a 2-line message <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div>
          {/* "Founder card" — gives the studio a human face even without a real photo */}
          <div
            style={{
              background: 'var(--color-canvas-parchment)',
              border: '1px solid var(--color-hairline)',
              borderRadius: 'var(--radius-lg)',
              padding: 28,
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                paddingBottom: 22,
                borderBottom: '1px solid var(--color-hairline)',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2997ff, #7cc1ff)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: '-0.02em',
                  flexShrink: 0,
                }}
              >
                VL
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: 17,
                    letterSpacing: '-0.01em',
                    color: 'var(--color-ink)',
                  }}
                >
                  The Verelios team
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: 'var(--color-ink-muted-48)',
                    marginTop: 2,
                  }}
                >
                  Designers + engineers · Based in India
                </div>
              </div>
            </div>

            <div
              className="studio-stats"
              style={{
                marginTop: 22,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 18,
              }}
            >
              <div className="studio-stat">
                <div className="stat-num" style={{ fontSize: 32 }}>10+</div>
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--color-ink-muted-48)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginTop: 6,
                  }}
                >
                  Projects shipped
                </div>
              </div>
              <div className="studio-stat">
                <div className="stat-num" style={{ fontSize: 32 }}>&lt;3 wks</div>
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--color-ink-muted-48)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginTop: 6,
                  }}
                >
                  Average delivery
                </div>
              </div>
              <div className="studio-stat">
                <div className="stat-num" style={{ fontSize: 32 }}>5.0★</div>
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--color-ink-muted-48)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginTop: 6,
                  }}
                >
                  Client rating
                </div>
              </div>
              <div className="studio-stat">
                <div className="stat-num" style={{ fontSize: 32 }}>100%</div>
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--color-ink-muted-48)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginTop: 6,
                  }}
                >
                  Satisfaction
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 22,
                paddingTop: 22,
                borderTop: '1px solid var(--color-hairline)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
              }}
            >
              {['Next.js', 'React Native', 'TypeScript', 'Node.js', 'Postgres', 'Vercel'].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 12,
                    padding: '5px 11px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'var(--color-canvas)',
                    border: '1px solid var(--color-hairline)',
                    color: 'var(--color-ink-muted-80)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Studio;
