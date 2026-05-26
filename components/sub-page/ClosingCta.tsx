import Link from 'next/link';

interface ClosingCtaProps {
  heading: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function ClosingCta({
  heading,
  body = "Tell us what you need and we'll show you a free mockup within 48 hours. No commitment, no upfront payment.",
  primaryHref = '/#contact',
  primaryLabel = 'Get a free mockup',
  secondaryHref = 'https://wa.me/918471094125?text=Hi%20Verelios%20Labs!%20I%27d%20like%20to%20discuss%20my%20project.',
  secondaryLabel = 'Chat on WhatsApp',
}: ClosingCtaProps) {
  return (
    <section
      className="tile"
      style={{
        paddingTop: 64,
        paddingBottom: 96,
      }}
    >
      <div
        className="wrap"
        style={{
          background:
            'radial-gradient(60% 100% at 50% 0%, rgba(41,151,255,0.18) 0%, transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 'var(--radius-lg)',
          padding: '56px 32px',
          textAlign: 'center',
          maxWidth: 880,
          margin: '0 auto',
        }}
      >
        <h2 className="display-section" style={{ color: '#fff' }}>{heading}</h2>
        <p className="lead lead-on-dark" style={{ marginTop: 18, color: 'rgba(255,255,255,0.7)' }}>{body}</p>
        <div style={{ marginTop: 32, display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href={primaryHref} className="btn-pill press" style={{ fontWeight: 600 }}>
            {primaryLabel}
          </Link>
          {secondaryHref.startsWith('http') ? (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-wa press"
              style={{ fontWeight: 600 }}
            >
              {secondaryLabel}
            </a>
          ) : (
            <Link href={secondaryHref} className="btn-pill-ghost on-dark press">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default ClosingCta;
