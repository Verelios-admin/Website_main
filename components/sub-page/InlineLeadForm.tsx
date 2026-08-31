'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { trackMetaLead } from '@/components/MetaPixel';
import { trackGoogleAdsLead } from '@/lib/gtag';

/**
 * On-page lead form for service, location and paid-landing pages.
 *
 * Why this exists: until now the ONLY form on the site lived on the homepage.
 * Every service and location page just linked to /#contact, so a visitor who
 * landed on, say, /services/erp had to navigate somewhere else before they
 * could enquire. For organic traffic that's merely lossy; for paid traffic it
 * is fatal — you pay for the click and then ask the visitor to go find the
 * form. Google also scores landing-page relevance as part of Quality Score,
 * and a page that can't convert reads as a poor destination.
 *
 * It posts to the same Make.com webhook as the homepage form with the same
 * field names, so the existing Sheets + Gmail automation keeps working
 * untouched. The one addition is `source`, which records WHICH page produced
 * the lead — without it every lead says "Contact Us" and there is no way to
 * tell which ad or page is actually paying for itself.
 *
 * Deliberately NOT using the toast hook: <Toaster /> is only mounted on the
 * homepage (app/page.tsx), so a toast fired from a sub-page would be invisible.
 * Success and failure are both rendered inline instead.
 */

const LEAD_WEBHOOK = 'https://hook.us2.make.com/sqedcdetgz0wvevhfem1z0e6mcitx6m9';

// Abandon the request rather than leaving the button stuck on "Sending…"
// forever if Make is slow or unreachable.
const SUBMIT_TIMEOUT_MS = 15000;

// Ordered high-value first, split by system type — see the note in
// components/sections/Contact.tsx.
export const SERVICE_TYPES = [
  'ERP Software',
  'CRM Software',
  'Billing & Inventory Software',
  'Custom Software / Internal Tools',
  'Mobile App (iOS/Android)',
  'E-commerce Website',
  'Business Website',
  'Website Redesign',
  'UI/UX Design',
  'Other',
] as const;

const BUDGETS = [
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹3,00,000',
  '₹3,00,000 – ₹5,00,000',
  '₹5,00,000+',
  'Not sure yet',
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 'var(--radius-pill)',
  padding: '12px 18px',
  height: 44,
  color: '#fff',
  fontFamily: 'var(--font-text)',
  fontSize: 15,
  letterSpacing: '-0.01em',
  outline: 'none',
  boxSizing: 'border-box',
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: 'none',
  WebkitAppearance: 'none',
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%23ffffff88' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 16px center',
};

function Lbl({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: 'block',
        fontSize: 11,
        color: 'rgba(255,255,255,0.5)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        fontWeight: 600,
        marginBottom: 8,
      }}
    >
      {children}
    </label>
  );
}

export interface InlineLeadFormProps {
  /** Which page this form sits on — written to the lead record so you can tell
   *  which page (and therefore which ad) produced the enquiry. Defaults to the
   *  current pathname, so attribution is automatic and can't drift out of sync
   *  when pages are added or renamed. */
  source?: string;
  /** Pre-select the service dropdown to match the page the visitor is on. */
  defaultService?: (typeof SERVICE_TYPES)[number];
  /** Text on the submit button. */
  submitLabel?: string;
  /** Unique prefix for input ids, so two forms on one page can't collide. */
  idPrefix?: string;
}

export function InlineLeadForm({
  source,
  defaultService,
  submitLabel = 'Get my free 48-hour mockup',
  idPrefix = 'lead',
}: InlineLeadFormProps) {
  const pathname = usePathname();
  // e.g. "Verelios Website - /services/erp". Every lead in the Sheet now says
  // exactly which page it came from, which is the only way to tell which ad
  // group is earning its budget.
  const leadSource = source ?? `Verelios Website - ${pathname || '/'}`;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState<string>(defaultService ?? '');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValid =
    Boolean(name.trim()) &&
    Boolean(email.trim()) &&
    Boolean(phone.trim()) &&
    Boolean(service) &&
    Boolean(budget) &&
    Boolean(message.trim());

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || submitting) return;
    setSubmitting(true);
    setError(null);

    // Phone is collected as digits only; the country code is fixed to +91
    // because these pages target India. Kept in the same shape the homepage
    // form sends so the downstream automation doesn't need to change.
    const digits = phone.replace(/\D/g, '');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

    try {
      const res = await fetch(LEAD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name,
          email,
          phone: `91 ${phone}`,
          serviceType: service,
          budgetRange: budget,
          message,
          source: leadSource,
          date: new Date().toISOString(),
          marketingConsent: 'Yes',
          nonMarketingConsent: 'Yes',
        }),
      });

      // Only treat it as a lead if the webhook actually accepted it. A non-2xx
      // means the lead was never delivered, so firing a conversion here would
      // be reporting revenue that doesn't exist.
      if (!res.ok) throw new Error(`Lead webhook returned HTTP ${res.status}`);

      trackMetaLead();
      trackGoogleAdsLead({
        email,
        phone: `+91${digits}`,
        service,
        budget,
      });

      setSent(true);
    } catch (err) {
      // The homepage form swallows this silently, which is how a broken webhook
      // could go unnoticed. Log it so a failure is at least visible in the
      // console and in any error reporting that gets added later.
      console.error('[InlineLeadForm] submission failed', err);
      setError(
        'We could not send that just now. Please try again, or WhatsApp us on +91 84710 94125.',
      );
    } finally {
      clearTimeout(timeout);
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '20px 0 8px' }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'var(--color-primary-on-dark)',
            color: '#000',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 18,
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 24,
            fontWeight: 600,
            color: '#fff',
            margin: '0 0 8px',
          }}
        >
          Thanks {name}, we&apos;ve got it.
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>
          We&apos;ll reply to <strong style={{ color: '#fff' }}>{email}</strong> — usually within
          the hour.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left' }}
    >
      <div
        className="lead-form-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
      >
        <div>
          <Lbl htmlFor={`${idPrefix}-name`}>Name</Lbl>
          <input
            id={`${idPrefix}-name`}
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <Lbl htmlFor={`${idPrefix}-phone`}>Phone</Lbl>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 00000 00000"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <Lbl htmlFor={`${idPrefix}-email`}>Email</Lbl>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <Lbl htmlFor={`${idPrefix}-service`}>What do you need?</Lbl>
          <select
            id={`${idPrefix}-service`}
            name="serviceType"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            aria-label="Service type"
            style={selectStyle}
          >
            <option value="" disabled style={{ background: '#1d1d1f' }}>
              Select a service
            </option>
            {SERVICE_TYPES.map((s) => (
              <option key={s} value={s} style={{ background: '#1d1d1f' }}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Lbl htmlFor={`${idPrefix}-budget`}>Budget range</Lbl>
        <select
          id={`${idPrefix}-budget`}
          name="budgetRange"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
          aria-label="Budget range"
          style={selectStyle}
        >
          <option value="" disabled style={{ background: '#1d1d1f' }}>
            Select a range
          </option>
          {BUDGETS.map((b) => (
            <option key={b} value={b} style={{ background: '#1d1d1f' }}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Lbl htmlFor={`${idPrefix}-message`}>Tell us briefly what you need</Lbl>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="A line or two about your business and what you're trying to solve"
          required
          style={{
            ...inputStyle,
            height: 'auto',
            borderRadius: 'var(--radius-md)',
            resize: 'vertical',
          }}
        />
      </div>

      {error && (
        <div
          role="alert"
          style={{
            background: 'rgba(255,86,86,0.1)',
            border: '1px solid rgba(255,86,86,0.35)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            fontSize: 14,
            lineHeight: 1.5,
            color: '#ffb4b4',
          }}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting || !isValid}
        className="btn-pill press"
        style={{
          width: '100%',
          justifyContent: 'center',
          marginTop: 4,
          padding: '14px 24px',
          opacity: isValid ? 1 : 0.6,
          cursor: isValid && !submitting ? 'pointer' : 'not-allowed',
        }}
      >
        {submitting ? 'Sending…' : submitLabel}
      </button>

      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, lineHeight: 1.5 }}>
        By submitting, you consent to receive updates from Verelios Labs about your enquiry. We
        don&apos;t spam, and we don&apos;t share your details.
      </div>
    </form>
  );
}

export default InlineLeadForm;
