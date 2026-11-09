import { GBP_RATING, GBP_REVIEW_COUNT } from '@/lib/schema';
import { US_CONTACT_EMAIL, US_HOURS, US_PHONE_DISPLAY, US_PRICING, US_WHATSAPP_DISPLAY } from '@/lib/us';

// Phase 17. The objections a US owner has about hiring a team in India, answered
// in one block that every US page shares: hours, price, ownership, privacy,
// payment and who we are. Facts come from lib/us.ts and lib/schema.ts only.

const cardStyle: React.CSSProperties = {
  padding: 20,
  borderRadius: 'var(--radius-lg)',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
};

const h3Style: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 18,
  fontWeight: 600,
  letterSpacing: '-0.015em',
  margin: '0 0 8px',
  color: '#fff',
};

const pStyle: React.CSSProperties = {
  fontFamily: 'var(--font-text)',
  fontSize: 14,
  lineHeight: 1.55,
  color: 'rgba(255,255,255,0.65)',
  margin: 0,
};

const ITEMS: Array<[string, string]> = [
  [
    'Email or WhatsApp, any time',
    `Email ${US_CONTACT_EMAIL} or WhatsApp ${US_WHATSAPP_DISPLAY} and you get a reply within one business day. Prefer to talk? Calls ${US_HOURS}, on ${US_PHONE_DISPLAY}.`,
  ],
  [
    'Fixed price, paid in milestones',
    `The 48-hour proof is free. A pilot with one workflow live starts at ${US_PRICING.pilotFrom}; a typical build is ${US_PRICING.buildRange}. You pay 30% to start, 30% mid-way and 40% at launch. No hourly billing.`,
  ],
  [
    'You own everything',
    'The code, the workflows and the data live in your own accounts: your cloud, your store, your accounting system. If we part ways, nothing stops working.',
  ],
  [
    'NDA and private data',
    'A mutual NDA before you share a single order or ticket. The assistant answers from your own documents, and it can run inside your own cloud account.',
  ],
  [
    'Simple payment in USD',
    'Invoices in US dollars, paid by ACH or wire through Wise, or by card through PayPal.',
  ],
  [
    'A real, reviewed team',
    `Founded in 2024 by Sahil Chauhan in Kanpur, India. 50+ projects delivered and rated ${GBP_RATING} from ${GBP_REVIEW_COUNT} Google reviews.`,
  ],
];

export function UsWorkingWithUs({ heading = 'Working with a team in India' }: { heading?: string }) {
  return (
    <div style={{ margin: '36px 0 8px' }}>
      <h2 className="display-section" style={{ color: '#fff', fontSize: 'clamp(26px, 3.2vw, 34px)', margin: '0 0 18px' }}>
        {heading}
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16,
        }}
      >
        {ITEMS.map(([title, body]) => (
          <div key={title} style={cardStyle}>
            <h3 style={h3Style}>{title}</h3>
            <p style={pStyle}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsWorkingWithUs;
