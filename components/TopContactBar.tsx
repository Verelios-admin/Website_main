'use client';

/**
 * Slim contact bar above the main navigation — country flag + phone numbers
 * + email. Real-business agencies (Antino, Mindtree, every Indian dev house)
 * have one; design-portfolio templates don't. That's the point.
 */
export function TopContactBar() {
  return (
    <div
      className="top-contact-bar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 51,
        minHeight: 36,
        background: '#050507',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        color: 'rgba(255,255,255,0.78)',
        fontSize: 13,
        letterSpacing: '-0.005em',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28,
          padding: '8px 28px',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="tel:+918471094125"
          className="tcb-item"
          aria-label="Call Verelios Labs in India (primary)"
        >
          <span aria-hidden="true" className="tcb-flag">🇮🇳</span>
          <span>+91 84710 94125</span>
        </a>
        <span className="tcb-sep" aria-hidden="true">·</span>
        <a
          href="tel:+918299522798"
          className="tcb-item"
          aria-label="Call Verelios Labs in India (secondary)"
        >
          <span aria-hidden="true" className="tcb-flag">🇮🇳</span>
          <span>+91 82995 22798</span>
        </a>
        <span className="tcb-sep" aria-hidden="true">·</span>
        <a
          href="mailto:contact@verelios.com"
          className="tcb-item"
          aria-label="Email Verelios Labs"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          <span>contact@verelios.com</span>
        </a>
        <span className="tcb-sep tcb-hidden-sm" aria-hidden="true">·</span>
        <span className="tcb-item tcb-hidden-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <span
            style={{
              display: 'inline-block',
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#34d399',
              boxShadow: '0 0 0 0 rgba(52,211,153,0.6)',
              animation: 'tcb-live 2s ease-in-out infinite',
            }}
          />
          <span>Online · replies in under an hour</span>
        </span>
      </div>

      <style jsx>{`
        :global(.tcb-item) {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: inherit;
          text-decoration: none;
          transition: color 180ms ease;
        }
        :global(.tcb-item:hover) {
          color: #fff;
          text-decoration: none;
        }
        :global(.tcb-flag) {
          font-size: 14px;
          line-height: 1;
        }
        :global(.tcb-sep) {
          color: rgba(255,255,255,0.18);
        }
        @keyframes tcb-live {
          0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.6); }
          50%      { box-shadow: 0 0 0 5px rgba(52,211,153,0); }
        }
        @media (max-width: 760px) {
          :global(.top-contact-bar) { font-size: 12px !important; }
          :global(.top-contact-bar .wrap) { gap: 14px !important; padding: 8px 16px !important; }
          :global(.tcb-hidden-sm) { display: none !important; }
        }
        @media (max-width: 460px) {
          :global(.top-contact-bar .wrap) { gap: 10px !important; }
          :global(.tcb-sep) { display: none; }
        }
      `}</style>
    </div>
  );
}

export default TopContactBar;
