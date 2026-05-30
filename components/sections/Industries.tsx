'use client';

import { useGsap } from '@/hooks/useGsap';

const INDUSTRIES = [
  {
    name: 'Fintech',
    blurb: 'Trading apps, advisory platforms, payment flows.',
    examples: 'ChainShots, MyBiniyog',
  },
  {
    name: 'Real Estate',
    blurb: 'Listings, virtual tours, agent + buyer portals.',
    examples: 'Rivali Park, Serene Homes',
  },
  {
    name: 'E-commerce &amp; Retail',
    blurb: 'Catalogues, checkout, inventory, returns.',
    examples: 'RMPD Jewellers',
  },
  {
    name: 'News &amp; Media',
    blurb: 'Editorial workflows, personalised feeds, PWAs.',
    examples: 'News &amp; Media Platform',
  },
  {
    name: 'Manufacturing &amp; ERP',
    blurb: 'Internal tools, dashboards, ops automation.',
    examples: 'Envirofluent ERP',
  },
  {
    name: 'Jobs &amp; AI',
    blurb: 'Aggregators, smart filters, recommendation engines.',
    examples: 'PuneAIJobs',
  },
  {
    name: 'Healthcare',
    blurb: 'Patient booking, clinic management, telehealth.',
    examples: 'On request',
  },
  {
    name: 'Education',
    blurb: 'Course platforms, LMS, certification flows.',
    examples: 'On request',
  },
];

export function Industries() {
  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    gsap.from(scope.querySelectorAll('.section-head > *'), {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 78%' },
    });
    gsap.from(scope.querySelectorAll('.industry-card'), {
      y: 24,
      opacity: 0,
      duration: 0.6,
      ease: 'expo.out',
      stagger: 0.06,
      scrollTrigger: { trigger: scope.querySelector('.industries-grid'), start: 'top 80%' },
    });
  });

  return (
    <section
      ref={ref}
      id="industries"
      className="tile"
      style={{ background: 'var(--color-canvas-parchment)' }}
    >
      <div className="wrap">
        <div
          className="section-head"
          style={{ textAlign: 'center', justifyItems: 'center', margin: '0 auto 48px' }}
        >
          <div className="eyebrow" style={{ textAlign: 'center' }}>Industries we serve</div>
          <h2 className="display-section" style={{ textAlign: 'center' }}>
            Eight industries. <br />
            <span style={{ color: 'var(--color-ink-muted-48)' }}>One studio that gets it.</span>
          </h2>
          <p className="lead" style={{ marginTop: 6, maxWidth: 640, textAlign: 'center' }}>
            We&apos;ve built and shipped across these sectors. Each one taught us something we now bring to the next client&apos;s project.
          </p>
        </div>

        <div
          className="industries-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }}
        >
          {INDUSTRIES.map((i) => (
            <article
              key={i.name}
              className="industry-card"
              style={{
                background: 'var(--color-canvas)',
                border: '1px solid var(--color-hairline)',
                borderRadius: 'var(--radius-lg)',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 19,
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{ __html: i.name }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 14.5,
                  lineHeight: 1.5,
                  color: 'var(--color-ink-muted-80)',
                  margin: 0,
                }}
              >
                {i.blurb}
              </p>
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: 12,
                  fontSize: 12,
                  color: 'var(--color-ink-muted-48)',
                  letterSpacing: '-0.005em',
                }}
                dangerouslySetInnerHTML={{ __html: `Recent · ${i.examples}` }}
              />
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
          Don&apos;t see your industry?{' '}
          <a href="#contact" className="link-arrow">
            We adapt fast — let&apos;s talk <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          :global(.industries-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          :global(.industries-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Industries;
