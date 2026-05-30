import Link from 'next/link';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  lead: string;
  ctaHref?: string;
  ctaLabel?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  lead,
  ctaHref = '/#contact',
  ctaLabel = 'Get a free 48-hour mockup',
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section
      className="tile"
      style={{
        paddingTop: 168,
        paddingBottom: 56,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 380,
          background:
            'radial-gradient(50% 60% at 50% 50%, rgba(41,151,255,0.18), transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <div className="wrap" style={{ position: 'relative', maxWidth: 880, textAlign: 'center', margin: '0 auto' }}>
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'inline-flex',
              gap: 8,
              alignItems: 'center',
              fontSize: 13,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 18,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {breadcrumbs.map((b, i) => (
              <span key={b.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {i > 0 && <span aria-hidden="true">/</span>}
                <Link
                  href={b.href}
                  style={{
                    color:
                      i === breadcrumbs.length - 1
                        ? 'rgba(255,255,255,0.8)'
                        : 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                  }}
                >
                  {b.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        <div className="eyebrow eyebrow-on-dark" style={{ marginBottom: 16 }}>{eyebrow}</div>
        <h1
          className="display-hero"
          style={{
            color: '#fff',
            fontSize: 'clamp(36px, 6vw, 68px)',
            fontWeight: 600,
            lineHeight: 1.06,
            letterSpacing: '-0.025em',
          }}
        >
          {title}
          {highlight && (
            <>
              {' '}
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #2997ff 0%, #7cc1ff 60%, #b794ff 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {highlight}
              </span>
            </>
          )}
        </h1>
        <p
          className="lead lead-on-dark"
          style={{ marginTop: 22, color: 'rgba(255,255,255,0.7)', maxWidth: 720, margin: '22px auto 0' }}
        >
          {lead}
        </p>
        <div style={{ marginTop: 32, display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href={ctaHref} className="btn-pill press" style={{ fontWeight: 600 }}>
            {ctaLabel}
          </Link>
          <Link href="/#work" className="btn-pill-ghost on-dark press">
            See the work
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
