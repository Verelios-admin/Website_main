import Link from 'next/link';
import { US_CALCULATOR_PATH, US_HUB_PATH, US_PAGES } from '@/lib/us';

// Phase 17. Cross-links between the US pages so every one of them gets inbound
// internal links from all the others, plus the hub and the calculator.

export function UsMoreLinks({ exclude }: { exclude?: string }) {
  const pages = US_PAGES.filter((p) => p.path !== exclude);
  return (
    <div style={{ margin: '40px 0 8px' }}>
      <h2 className="display-section" style={{ color: '#fff', fontSize: 'clamp(24px, 3vw, 30px)', margin: '0 0 18px' }}>
        More for US businesses
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
        {pages.map((p) => (
          <Link
            key={p.path}
            href={p.path}
            style={{
              display: 'block',
              padding: 18,
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, marginBottom: 6 }}>
              {p.title}
            </span>
            <span style={{ display: 'block', fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.62)' }}>{p.blurb}</span>
          </Link>
        ))}
      </div>
      <p style={{ marginTop: 18, fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>
        Want a number first? Try the free{' '}
        <Link href={US_CALCULATOR_PATH} style={{ color: 'var(--color-primary-on-dark)' }}>
          order entry cost calculator
        </Link>
        , or start from our{' '}
        <Link href={US_HUB_PATH} style={{ color: 'var(--color-primary-on-dark)' }}>
          overview for US businesses
        </Link>
        .
      </p>
    </div>
  );
}

export default UsMoreLinks;
