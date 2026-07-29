'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useGsap } from '@/hooks/useGsap';
import { useToast } from '@/hooks/use-toast';
import { trackMetaLead } from '@/components/MetaPixel';
import { trackGoogleAdsLead, resetLeadConversionGuard, trackWhatsAppClick } from '@/lib/gtag';
import { LocalMap } from '@/components/sub-page/LocalMap';

// Google Business Profile — the "read our Google reviews" link + map tie the
// homepage to the verified GBP listing (entity + local-trust signal).
const GBP_URL = 'https://share.google/fLuxTG3N5HVlEGhge';

const COUNTRY_CODES = [
  { code: '+91',  flag: '\u{1F1EE}\u{1F1F3}', country: 'IN' },
  { code: '+1',   flag: '\u{1F1FA}\u{1F1F8}', country: 'US' },
  { code: '+44',  flag: '\u{1F1EC}\u{1F1E7}', country: 'GB' },
  { code: '+61',  flag: '\u{1F1E6}\u{1F1FA}', country: 'AU' },
  { code: '+86',  flag: '\u{1F1E8}\u{1F1F3}', country: 'CN' },
  { code: '+81',  flag: '\u{1F1EF}\u{1F1F5}', country: 'JP' },
  { code: '+49',  flag: '\u{1F1E9}\u{1F1EA}', country: 'DE' },
  { code: '+33',  flag: '\u{1F1EB}\u{1F1F7}', country: 'FR' },
  { code: '+39',  flag: '\u{1F1EE}\u{1F1F9}', country: 'IT' },
  { code: '+34',  flag: '\u{1F1EA}\u{1F1F8}', country: 'ES' },
  { code: '+7',   flag: '\u{1F1F7}\u{1F1FA}', country: 'RU' },
  { code: '+82',  flag: '\u{1F1F0}\u{1F1F7}', country: 'KR' },
  { code: '+971', flag: '\u{1F1E6}\u{1F1EA}', country: 'AE' },
  { code: '+966', flag: '\u{1F1F8}\u{1F1E6}', country: 'SA' },
  { code: '+65',  flag: '\u{1F1F8}\u{1F1EC}', country: 'SG' },
];

const SERVICE_TYPES = [
  'Business Website',
  'E-commerce Website',
  'Mobile App (iOS/Android)',
  'Custom Software / CRM / ERP',
  'UI/UX Design',
  'Website Redesign',
  'Other',
];
const BUDGETS = [
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹3,00,000',
  '₹3,00,000 – ₹5,00,000',
  '₹5,00,000+',
  'Not sure yet',
];

const darkInputStyle: React.CSSProperties = {
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

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState(COUNTRY_CODES[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(true);
  const [nonMarketingConsent, setNonMarketingConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    gsap.from(scope.querySelectorAll('.contact-left > *'), {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 80%' },
    });
    gsap.from(scope.querySelector('.contact-form-card'), {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'expo.out',
      scrollTrigger: { trigger: scope, start: 'top 80%' },
    });
  });

  const isValid =
    name.trim() && email.trim() && phone.trim() && service && budget && message.trim();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setSubmitting(true);

    try {
      const countryDigits = country.code.replace('+', '');
      const fullPhone = `${countryDigits} ${phone}`;
      const payload = {
        name,
        email,
        phone: fullPhone,
        serviceType: service,
        budgetRange: budget,
        message,
        source: 'Verelios Website - Contact Us',
        date: new Date().toISOString(),
        marketingConsent: marketingConsent ? 'Yes' : 'No',
        nonMarketingConsent: nonMarketingConsent ? 'Yes' : 'No',
      };

      const res = await fetch('https://hook.us2.make.com/sqedcdetgz0wvevhfem1z0e6mcitx6m9', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Only count this as a lead if the webhook genuinely accepted it.
      // A non-2xx means the lead wasn't delivered — fall through to the catch.
      if (!res.ok) throw new Error(`Lead webhook returned HTTP ${res.status}`);

      trackMetaLead();

      // Google Ads conversion + Enhanced Conversions — fires once, here only,
      // because the submission actually succeeded.
      trackGoogleAdsLead({
        email,
        phone: `+${countryDigits}${phone}`,
        service,
        budget,
      });

      toast({ title: 'Message Sent!', description: "We'll get back to you as soon as possible." });
      setSent(true);
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setBudget('');
    setMessage('');
    setMarketingConsent(true);
    setNonMarketingConsent(true);
    setSent(false);
    // Allow the conversion to fire again for a fresh, separate submission.
    resetLeadConversionGuard();
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="tile"
      style={{ background: 'var(--color-surface-black)', color: '#fff' }}
    >
      <div
        className="wrap contact-wrap"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 64,
          alignItems: 'center',
        }}
      >
        <div className="contact-left">
          <div className="eyebrow eyebrow-on-dark">Contact</div>
          <h2 className="display-section" style={{ color: '#fff', marginTop: 18 }}>
            Got an idea? <br />
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Let&apos;s make it real.</span>
          </h2>
          <p className="lead lead-on-dark" style={{ marginTop: 22, maxWidth: 520 }}>
            Tell us what you need and we&apos;ll show you a free mockup within 48 hours. No commitment, no strings attached.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="mailto:contact@verelios.com" className="btn-pill press">
              contact@verelios.com
            </a>
            <a
              href="https://wa.me/918471094125?text=Hi%20Verelios%20Labs!%20I%27d%20like%20to%20discuss%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { trackMetaLead(); trackWhatsAppClick('Contact section'); }}
              className="btn-pill btn-wa press"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
              </svg>
              +91 84710 94125
            </a>
          </div>

          <div
            className="contact-meta"
            style={{
              marginTop: 40,
              paddingTop: 28,
              borderTop: '1px solid rgba(255,255,255,0.1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Phone (IN)
              </div>
              <a href="tel:+918299522798" style={{ color: '#fff', fontSize: 16, textDecoration: 'none' }}>
                +91 82995 22798
              </a>
              <br />
              <a href="tel:+918471094125" style={{ color: '#fff', fontSize: 16, textDecoration: 'none' }}>
                +91 84710 94125
              </a>
            </div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Email
              </div>
              <a
                href="mailto:contact@verelios.com"
                style={{ color: '#fff', fontSize: 16, textDecoration: 'none' }}
              >
                contact@verelios.com
              </a>
            </div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Reply time
              </div>
              <span style={{ color: '#fff', fontSize: 16 }}>Usually under an hour</span>
            </div>
          </div>

          {/* Visit us — physical address, Google reviews link and an embedded
              map. Ties the homepage to the verified Google Business Profile. */}
          <div style={{ marginTop: 32 }}>
            <div
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              Visit us in Kanpur
            </div>
            <address style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.6 }}>
              126/58 G Block, Govind Nagar<br />
              Kanpur, Uttar Pradesh 208006
            </address>
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', marginTop: 8, color: 'var(--color-primary-on-dark)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}
            >
              Read our reviews on Google →
            </a>
            <div style={{ marginTop: 16 }}>
              <LocalMap />
            </div>
          </div>
        </div>

        <div
          className="contact-form-card"
          style={{
            background: 'var(--color-surface-tile-2)',
            borderRadius: 'var(--radius-lg)',
            padding: 32,
          }}
        >
          {sent ? (
            <div style={{ textAlign: 'center', padding: '14px 0 6px' }}>
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
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                Thanks {name || '—'}, we&apos;ve got it.
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', margin: '0 0 22px' }}>
                We&apos;ll send your free 48-hour mockup to{' '}
                <strong style={{ color: '#fff' }}>{email || 'your inbox'}</strong>.
              </p>
              <button onClick={resetForm} className="btn-pill-ghost on-dark press">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#fff',
                    margin: 0,
                    letterSpacing: '-0.015em',
                  }}
                >
                  Tell us about your project
                </h3>
                <span
                  style={{
                    fontSize: 11,
                    color: 'var(--color-primary-on-dark)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Free
                </span>
              </div>

              <div>
                <Lbl htmlFor="contact-name">Name</Lbl>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  style={darkInputStyle}
                />
              </div>

              <div>
                <Lbl htmlFor="contact-email">Email</Lbl>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  style={darkInputStyle}
                />
              </div>

              <div>
                <Lbl htmlFor="contact-phone">Phone</Lbl>
                <div style={{ position: 'relative' }}>
                  <button
                    type="button"
                    onClick={() => setCountryOpen((o) => !o)}
                    style={{
                      position: 'absolute',
                      left: 6,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      borderRadius: 'var(--radius-pill)',
                      padding: '6px 10px',
                      color: '#fff',
                      fontSize: 13,
                      cursor: 'pointer',
                    }}
                  >
                    <span>{country.flag}</span>
                    <span>{country.code}</span>
                    <ChevronDown size={12} />
                  </button>
                  {countryOpen && (
                    <>
                      <div
                        onClick={() => setCountryOpen(false)}
                        style={{ position: 'fixed', inset: 0, zIndex: 1 }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 6px)',
                          left: 0,
                          background: '#1d1d1f',
                          border: '1px solid rgba(255,255,255,0.14)',
                          borderRadius: 'var(--radius-md)',
                          padding: 6,
                          width: 220,
                          maxHeight: 240,
                          overflowY: 'auto',
                          zIndex: 2,
                          boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                        }}
                      >
                        {COUNTRY_CODES.map((c) => (
                          <button
                            key={c.code + c.country}
                            type="button"
                            onClick={() => {
                              setCountry(c);
                              setCountryOpen(false);
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              width: '100%',
                              background: 'transparent',
                              border: 0,
                              color: '#fff',
                              padding: '8px 10px',
                              borderRadius: 'var(--radius-sm)',
                              cursor: 'pointer',
                              fontSize: 14,
                            }}
                          >
                            <span>{c.flag}</span>
                            <span>{c.code}</span>
                            <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>
                              {c.country}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contact number"
                    required
                    aria-label="Contact phone number"
                    style={{ ...darkInputStyle, paddingLeft: 116 }}
                  />
                </div>
              </div>

              <div>
                <Lbl htmlFor="contact-service">Service type</Lbl>
                <select
                  id="contact-service"
                  name="serviceType"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  aria-label="Service type"
                  style={{
                    ...darkInputStyle,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%23ffffff88' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                  }}
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

              <div>
                <Lbl htmlFor="contact-budget">Budget range</Lbl>
                <select
                  id="contact-budget"
                  name="budgetRange"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                  aria-label="Budget range"
                  style={{
                    ...darkInputStyle,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%23ffffff88' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                  }}
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
                <Lbl htmlFor="contact-message">Project notes</Lbl>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="A line about what you're building"
                  required
                  style={{
                    ...darkInputStyle,
                    height: 'auto',
                    borderRadius: 'var(--radius-md)',
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <label
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.65)',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                    style={{ marginTop: 3 }}
                  />
                  <span>I consent to receive marketing text messages from Verelios Labs. Reply STOP to opt out.</span>
                </label>
                <label
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.65)',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={nonMarketingConsent}
                    onChange={(e) => setNonMarketingConsent(e.target.checked)}
                    style={{ marginTop: 3 }}
                  />
                  <span>I consent to receive non-marketing messages such as updates &amp; reminders.</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting || !isValid}
                className="btn-pill press"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: 6,
                  padding: '14px 24px',
                  opacity: isValid ? 1 : 0.6,
                  cursor: isValid && !submitting ? 'pointer' : 'not-allowed',
                }}
              >
                {submitting ? 'Sending…' : 'Get my free 48-hour mockup'}
              </button>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, lineHeight: 1.5 }}>
                By submitting, you consent to receive non-marketing updates from Verelios Labs. We don&apos;t spam.
              </div>
            </form>
          )}
        </div>
      </div>

    </section>
  );
}

export default Contact;
