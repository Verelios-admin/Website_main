'use client';

import { useGsap } from '@/hooks/useGsap';

const SERVICES = [
  {
    title: 'App development',
    body: 'Native iOS and Android apps, or cross-platform from a single React Native / Flutter codebase. Shipped to both stores.',
    bullets: ['iOS & Android', 'React Native', 'Flutter', 'Native modules'],
  },
  {
    title: 'Web development',
    body: 'Responsive, fast, scalable web apps with the same stack the best product teams use. Built to convert, not just to look pretty.',
    bullets: ['React & Next.js', 'Full-stack', 'Progressive web apps', 'E-commerce'],
  },
  {
    title: 'Custom software',
    body: "Internal tools, CRMs, ERPs, dashboards — tailored to your workflow, not someone else's idea of one.",
    bullets: ['Enterprise solutions', 'API development', 'System integration', 'Cloud architecture'],
  },
  {
    title: 'UI / UX design',
    body: 'Considered design that earns user trust on the first screen. Research, wireframes, prototypes, and a system you can hand to your team.',
    bullets: ['User research', 'Wireframing', 'Prototyping', 'Design systems'],
  },
  {
    title: 'Performance',
    body: 'Make what you already have faster. Speed audits, refactors, SEO setup, and analytics that tell you what to fix next.',
    bullets: ['Speed optimization', 'SEO enhancement', 'Code refactoring', 'Analytics setup'],
  },
  {
    title: 'Maintenance & support',
    body: 'Ongoing care so your product keeps shipping. Bug fixes, feature updates, security patches, and a human on WhatsApp.',
    bullets: ['24/7 monitoring', 'Security updates', 'Bug fixes', 'Feature updates'],
  },
];

export function Services() {
  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    gsap.from(scope.querySelectorAll('.section-head > *'), {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 75%' },
    });
    gsap.from(scope.querySelectorAll('.service-card'), {
      y: 32,
      opacity: 0,
      duration: 0.7,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: scope.querySelector('.six-up'),
        start: 'top 80%',
      },
    });
  });

  return (
    <section
      ref={ref}
      id="services"
      className="tile"
      style={{ background: 'var(--color-canvas)' }}
    >
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What we do</div>
          <h2 className="display-section">
            Six practices. <br />
            <span style={{ color: 'var(--color-ink-muted-48)' }}>One team, end-to-end.</span>
          </h2>
          <p className="lead" style={{ marginTop: 6, maxWidth: 640 }}>
            Comprehensive digital work — designed, engineered, and launched by the same people from first message to live release.
          </p>
        </div>

        <div className="six-up">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="card service-card"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'var(--color-ink-muted-48)',
                  letterSpacing: '-0.01em',
                }}
              >
                0{i + 1}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 26,
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  margin: '10px 0 12px',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 15.5,
                  lineHeight: 1.55,
                  color: 'var(--color-ink-muted-80)',
                  letterSpacing: '-0.01em',
                  margin: 0,
                }}
              >
                {s.body}
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '20px 0 0',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                }}
              >
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      fontSize: 12,
                      padding: '5px 10px',
                      borderRadius: 'var(--radius-pill)',
                      background: 'var(--color-canvas-parchment)',
                      color: 'var(--color-ink-muted-80)',
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <span style={{ color: 'var(--color-ink-muted-48)', fontSize: 14 }}>
            Don&apos;t see what you need?
          </span>{' '}
          <a href="#contact" className="link-arrow">
            Let&apos;s talk about your project <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
