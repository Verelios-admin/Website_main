'use client';

import { useGsap } from '@/hooks/useGsap';

const WHYS = [
  {
    title: 'Under 3-week delivery',
    body: 'Most projects go from kickoff to launch in under 21 days. No endless timelines, no scope creep dressed as a feature.',
    icon: '⏱',
  },
  {
    title: 'Dedicated project manager',
    body: 'A single human on WhatsApp — updates, feedback, queries, all resolved without scheduling a call.',
    icon: '◇',
  },
  {
    title: 'Built to convert',
    body: 'Every site and app we ship is engineered around one thing: turning your visitors into paying customers.',
    icon: '↗',
  },
  {
    title: 'Pay in milestones',
    body: '30% to start, 30% at mid-delivery, 40% at launch. You pay as the work lands, not before it begins.',
    icon: '₹',
  },
  {
    title: '7-day post-launch support',
    body: 'Bug fixes, copy tweaks, last-mile changes — on us, for the first week after we ship.',
    icon: '✓',
  },
  {
    title: 'SEO & speed included',
    body: 'Meta tags, sitemap, structured data, performance tuning. Every project ships ready to rank.',
    icon: '⚡',
  },
];

const STATS = [
  { num: '48 hrs', label: 'Free mockup delivery' },
  { num: '24/7',   label: 'WhatsApp support' },
  { num: '<3 wks', label: 'Average delivery' },
  { num: 'EMI',    label: 'Milestone payments' },
];

export function About() {
  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    gsap.from(scope.querySelectorAll('.section-head > *'), {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 78%' },
    });

    gsap.from(scope.querySelectorAll('.why-card'), {
      y: 32,
      opacity: 0,
      duration: 0.7,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope.querySelector('.six-up'), start: 'top 80%' },
    });

    gsap.from(scope.querySelectorAll('.why-stat'), {
      y: 18,
      opacity: 0,
      duration: 0.6,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope.querySelector('.why-stats'), start: 'top 85%' },
    });
  });

  return (
    <section
      ref={ref}
      id="about"
      className="tile"
      style={{ background: 'var(--color-canvas-parchment)' }}
    >
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Why us</div>
          <h2 className="display-section">
            Not just another agency. <br />
            <span style={{ color: 'var(--color-ink-muted-48)' }}>A studio that ships.</span>
          </h2>
        </div>

        <div className="six-up">
          {WHYS.map((w) => (
            <article key={w.title} className="card why-card" style={{ padding: 28 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-ink)',
                  color: '#fff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  marginBottom: 16,
                }}
              >
                {w.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 21,
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  margin: '0 0 10px',
                }}
              >
                {w.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: 'var(--color-ink-muted-80)',
                  letterSpacing: '-0.01em',
                  margin: 0,
                }}
              >
                {w.body}
              </p>
            </article>
          ))}
        </div>

        <div
          className="why-stats"
          style={{
            marginTop: 56,
            background: 'var(--color-canvas)',
            border: '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-lg)',
            padding: 36,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 28,
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="why-stat">
              <div className="stat-num" style={{ fontSize: 36 }}>{s.num}</div>
              <div
                style={{
                  fontSize: 13,
                  color: 'var(--color-ink-muted-48)',
                  marginTop: 8,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 880px) {
          :global(.why-stats) { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default About;
