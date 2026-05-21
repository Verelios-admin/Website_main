'use client';

const TECHS = [
  'React', 'Next.js', 'React Native', 'Node.js', 'TypeScript',
  'Tailwind CSS', 'Flutter', 'MongoDB', 'PostgreSQL', 'Firebase',
  'AWS', 'Vercel',
];

export function TechMarquee() {
  const row = [...TECHS, ...TECHS];
  return (
    <section
      className="tile-pad-tight"
      style={{
        background: 'var(--color-canvas)',
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-text)',
          fontSize: 12,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--color-ink-muted-48)',
          textAlign: 'center',
          marginBottom: 18,
        }}
      >
        Built with the same stack as the products your team already uses
      </div>
      <div className="marquee-wrap">
        <div className="marquee">
          {row.map((t, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontWeight: 500,
                color: 'var(--color-ink-muted-48)',
                letterSpacing: '-0.01em',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechMarquee;
