'use client';

import { useState } from 'react';
import { useGsap } from '@/hooks/useGsap';

const FAQS = [
  {
    q: 'How long does it take to build a website or app?',
    a: 'Most projects go from kickoff to launch in under 3 weeks. Simple websites can be done in 7–10 days, while complex apps with custom backends may take 4–6 weeks. We share a clear timeline before we start.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We work on a milestone-based payment model — 30% to start, 30% at mid-delivery, and 40% at launch. You only pay as you see progress. No hidden charges, no surprises.',
  },
  {
    q: 'Do you build mobile apps for both iOS and Android?',
    a: 'Yes. We build cross-platform apps using React Native and Flutter, which means your app works on both iOS and Android from a single codebase — saving you time and money.',
  },
  {
    q: 'What happens after my project launches?',
    a: 'Every project comes with 7 days of free post-launch support for bug fixes and tweaks. After that, we offer affordable monthly maintenance plans to keep your site secure and updated.',
  },
  {
    q: 'Can I see a mockup before committing?',
    a: 'Absolutely. We provide a free mockup or prototype within 48 hours of our first conversation. No payment or commitment required — we want you to see our quality before you decide.',
  },
  {
    q: 'Do you help with SEO and getting found on Google?',
    a: 'Every project includes free basic SEO setup — proper meta tags, sitemap, performance optimisation, and structured data. For advanced SEO (content strategy, link building, ongoing optimisation), we offer add-on packages.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We use modern, battle-tested technologies: React, Next.js, React Native, Flutter, Node.js, MongoDB, PostgreSQL, Firebase, and AWS/Vercel for hosting. We choose the best stack for your specific needs.',
  },
  {
    q: 'How do we communicate during the project?',
    a: 'You get a dedicated project manager on WhatsApp for instant communication. We share daily / weekly progress updates and you can give feedback in real time — no waiting for scheduled meetings.',
  },
  {
    q: 'Where in Kanpur is Verelios Labs located?',
    a: 'We\'re based at 126/58 G Block, Govind Nagar, Kanpur, Uttar Pradesh 208006. We\'re open every day, 8am–11pm, and you\'re welcome to meet us in person or talk over WhatsApp before starting a project.',
  },
  {
    q: 'Do you work with local businesses in Kanpur?',
    a: 'Yes. As website, app and custom software developers based in Govind Nagar, we work with local businesses right across Kanpur — shops, clinics, schools, real-estate firms and startups — as well as founders across India. Local clients can meet us face to face; everyone gets the same free 48-hour mockup and milestone-based payment.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-q press" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span
          style={{
            flexShrink: 0,
            marginLeft: 16,
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: open ? 'var(--color-ink)' : 'transparent',
            color: open ? '#fff' : 'var(--color-ink)',
            border: open ? '0' : '1px solid var(--color-hairline)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            lineHeight: 1,
            transition: 'all 180ms ease-out',
          }}
        >
          {open ? '−' : '+'}
        </span>
      </button>
      <div className={'faq-a ' + (open ? 'open' : '')}>{a}</div>
    </div>
  );
}

export function FAQ() {
  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    gsap.from(scope.querySelectorAll('.faq-head > *'), {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 78%' },
    });
    gsap.from(scope.querySelectorAll('.faq-item'), {
      y: 18,
      opacity: 0,
      duration: 0.6,
      ease: 'expo.out',
      stagger: 0.06,
      scrollTrigger: { trigger: scope.querySelector('.faq-list'), start: 'top 80%' },
    });
  });

  return (
    <section ref={ref} id="faq" className="tile" style={{ background: 'var(--color-canvas)' }}>
      <div
        className="wrap faq-wrap"
        style={{
          display: 'grid',
          gridTemplateColumns: '340px 1fr',
          gap: 64,
          alignItems: 'start',
        }}
      >
        <div className="faq-head">
          <div className="eyebrow">FAQ</div>
          <h2 className="display-section" style={{ marginTop: 16 }}>
            Things <br />
            founders ask.
          </h2>
          <p className="lead" style={{ marginTop: 18, maxWidth: 320, fontSize: 18 }}>
            Still curious? Send us a message — we usually reply within the hour.
          </p>
          <div style={{ marginTop: 24 }}>
            <a href="#contact" className="link-arrow">
              Ask a question <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="faq-list">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 880px) {
          :global(.faq-wrap) {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default FAQ;
