'use client';

/**
 * Subtle horizontal marquee of real client names that fades in/out at the
 * edges. Real-business agencies put a "trusted by" strip below the hero —
 * design-portfolio templates almost never do, so adding one breaks the
 * "AI-generated portfolio" feel immediately.
 */

const CLIENTS = [
  'ChainShots',
  'Rivali Park',
  'Serene Homes',
  'RMPD Jewellers',
  'Envirofluent ERP',
  'PuneAIJobs',
  'MyBiniyog',
  'News &amp; Media',
];

export function TrustedBy() {
  // Render the list twice so the marquee can loop without a visible gap.
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section
      style={{
        background: '#0a0a0c',
        padding: '32px 0 36px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
      aria-label="Clients we've worked with"
    >
      <div
        style={{
          textAlign: 'center',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
          marginBottom: 22,
        }}
      >
        Trusted by founders building in fintech, real estate, news, jobs, retail &amp; manufacturing
      </div>
      <div className="marquee-wrap">
        <div className="marquee" style={{ animationDuration: '42s' }}>
          {row.map((name, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
              dangerouslySetInnerHTML={{ __html: name }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
