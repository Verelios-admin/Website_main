import Link from 'next/link';

const ALL_SERVICES = [
  {
    slug: 'website-development',
    title: 'Custom Website Development',
    blurb: 'React + Next.js sites shipped in under 3 weeks. Conversion-focused, SEO-ready out of the box.',
    accent: '#2997ff',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    blurb: 'iOS + Android apps from one React Native or Flutter codebase. Live on both stores in 3–5 weeks.',
    accent: '#22c55e',
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software & ERPs',
    blurb: 'ERPs, CRMs, dashboards and internal tools tailored to your workflow. Launched in 4–8 weeks.',
    accent: '#06b6d4',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    blurb: 'Conversion-focused design — research, wireframes, prototypes and design systems.',
    accent: '#b794ff',
  },
];

export function RelatedServices({ exclude }: { exclude: string }) {
  const items = ALL_SERVICES.filter((s) => s.slug !== exclude);
  return (
    <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
      <div className="wrap" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-head" style={{ textAlign: 'center', marginBottom: 36, justifyItems: 'center', margin: '0 auto 36px' }}>
          <div className="eyebrow eyebrow-on-dark">Related services</div>
          <h2 className="display-section" style={{ color: '#fff', textAlign: 'center', marginTop: 14 }}>
            Other things we build.
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {items.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="related-card"
              style={{
                display: 'block',
                padding: 24,
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'transform 220ms ease, border-color 220ms ease, background 220ms ease',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: `linear-gradient(135deg, ${s.accent}, rgba(255,255,255,0.12))`,
                  marginBottom: 14,
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 19,
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  margin: '0 0 8px',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.65)',
                  margin: 0,
                }}
              >
                {s.blurb}
              </p>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 13,
                  fontWeight: 500,
                  color: s.accent,
                }}
              >
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .related-card:hover {
          transform: translateY(-3px);
          border-color: rgba(41,151,255,0.35) !important;
          background: rgba(41,151,255,0.05) !important;
        }
      `}</style>
    </section>
  );
}

export default RelatedServices;
