import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { TrustStrip } from '@/components/sub-page/TrustStrip';
import { RelatedServices } from '@/components/sub-page/RelatedServices';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/services/crm-software-development';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Custom CRM Software Development in India',
  description:
    'Custom CRM software — leads, follow-ups, quotations and deals in one pipeline, with WhatsApp integration and reports that show where revenue comes from.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Custom CRM Software Development Company in India | Verelios Labs',
    description:
      'Leads, follow-ups, quotations and deals in one pipeline. WhatsApp and call-log integration, role-based access, real revenue reporting. You own the code.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Custom CRM Software Development in India' }],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'CRM Software Development',
  name: 'Custom CRM Software Development',
  description:
    'Custom CRM software for Indian businesses — lead capture, pipeline and follow-up tracking, quotations, WhatsApp and call integration, role-based access and revenue reporting, built around your sales process. You own the code.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'Country', name: 'India' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: 'INR', minPrice: 99999 },
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
    { '@type': 'ListItem', position: 3, name: 'CRM Software Development', item: `${SITE}${URL_PATH}` },
  ],
};

// Mirrors the visible "Frequently asked questions" Q&A below, verbatim, so the
// page is eligible for FAQ rich results and AI-answer citation.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does custom CRM software cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused CRM covering leads, pipeline, follow-ups and quotations starts at ₹99,999. Adding WhatsApp Business API, call-log capture, field-sales tracking, target dashboards and ERP or billing integration typically takes it to ₹1,50,000–₹4,00,000. One-time build, fixed quote up front, milestone payments (30/30/40) — not per user per month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why not just use Zoho CRM, HubSpot or Salesforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a standard B2B sales motion they are excellent and usually the right call — we will tell you when that is true. Custom becomes worth it when your sales process does not look like the template: dealer and distributor hierarchies, quotations with technical BOM line items, field staff who work offline, or a pipeline that has to read live stock and pricing from your ERP. That is where teams end up maintaining a parallel Excel alongside the CRM, which is the signal the tool is not fitting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the CRM send and receive WhatsApp messages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We integrate the official WhatsApp Business API so enquiries arriving on WhatsApp create a lead automatically, the full conversation is visible on the lead record, and approved template messages — quotation sent, follow-up reminder, payment due — can go out from the CRM. This matters in India because most B2B and retail selling actually happens on WhatsApp, not email.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will it stop leads from being forgotten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'That is the main job. Every lead gets an owner and a next-action date; anything without one appears on a daily list. Overdue follow-ups escalate to the manager, and ageing enquiries surface automatically rather than waiting to be noticed. The reason most enquiries are lost is not poor salesmanship, it is that nobody was told to call back on Thursday.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a CRM build take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused CRM ships in 5 to 7 weeks. With WhatsApp, call-log capture, field tracking and ERP integration it takes 8 to 12 weeks. We roll it out to one sales team first, fix what they complain about, then extend to everyone — CRM projects fail on adoption far more often than on technology.',
      },
    },
  ],
};

export default function CrmSoftwareDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Custom CRM software · India"
          title="A CRM your sales team"
          highlight="actually opens every morning."
          lead="Verelios Labs builds custom CRM software for Indian businesses — leads, follow-ups, quotations and deals in one pipeline, with WhatsApp integration and reporting that shows where revenue really comes from. You own the code."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'CRM Software Development', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>Most CRMs fail for the same reason</h2>
              <p>
                They are bought to give management visibility, and they make the salesperson&apos;s day harder. Data entry goes up, nothing they do gets easier, so within two months the real pipeline moves back into a personal notebook and a WhatsApp thread, and the CRM holds a fiction.
              </p>
              <p>
                We build CRMs the other way round — <strong>the salesperson gets something useful first</strong>: their calls logged without typing, their follow-ups queued for them, quotations generated in one click. The management reporting is a by-product of them using it, not a tax they pay for it. We are a team of <strong>CRM developers based in Govind Nagar, Kanpur</strong>, building for manufacturers, distributors, real-estate firms, education and services businesses across India.
              </p>

              <h2>What we build</h2>
              <ul>
                <li><strong>Lead capture from everywhere</strong> — website forms, WhatsApp, IndiaMART, Facebook and Google lead forms, and phone calls, all landing in one place with the source recorded.</li>
                <li><strong>Pipeline &amp; stages</strong> — your actual stages, not a generic template, with drag-and-drop movement and stage-wise conversion visible.</li>
                <li><strong>Follow-up engine</strong> — every lead has an owner and a next-action date; overdue items escalate rather than quietly ageing.</li>
                <li><strong>Quotations</strong> — branded PDF quotes generated from a product and price list, with revisions tracked and approval limits enforced.</li>
                <li><strong>WhatsApp Business API</strong> — conversations attached to the lead record, template messages for quotes, reminders and payment follow-ups.</li>
                <li><strong>Call logging</strong> — mobile app captures call duration and outcome so activity is recorded without anyone writing it down.</li>
                <li><strong>Field sales</strong> — check-in with location at customer visits, beat plans, and offline capture that syncs when signal returns.</li>
                <li><strong>Targets &amp; incentives</strong> — monthly targets by person and territory, with live achievement and incentive calculation.</li>
                <li><strong>Role-based access</strong> — each salesperson sees their own pipeline, managers see their team, the owner sees everything.</li>
                <li><strong>Reporting</strong> — source-wise ROI, conversion by stage, lost-reason analysis, and ageing — the numbers that change what you do next month.</li>
              </ul>

              <h2>When custom is the right call — and when it isn&apos;t</h2>
              <p>
                If you run a straightforward B2B pipeline with a handful of users, <strong>Zoho CRM or HubSpot is probably the correct and cheaper answer</strong>, and we will say so rather than sell you a build. Custom earns its cost when:
              </p>
              <ul>
                <li>You sell through dealers and distributors with a hierarchy and territory rules the product cannot model.</li>
                <li>Quotations carry technical line items, a bill of materials, or slab pricing that has to match your ERP.</li>
                <li>The CRM needs live stock, dispatch status or outstanding balance from your <a href="/services/erp">ERP</a> or <a href="/services/billing-inventory-software">billing system</a> to be useful.</li>
                <li>Field staff work where there is no signal.</li>
                <li>Per-user licences across a large sales team now exceed what a one-time build would have cost.</li>
              </ul>

              <h2>How a CRM project runs</h2>
              <ol>
                <li><strong>Week 1 — follow a salesperson.</strong> We sit with two of your best and two of your average sellers and map what they actually do, including the parts they do on WhatsApp. No code yet.</li>
                <li><strong>Week 1 — blueprint &amp; fixed quote.</strong> Stages, fields, automations and integrations on one page, fixed price, monthly hosting cost. You approve before we build.</li>
                <li><strong>Week 2–7 — build.</strong> Staging environment, WhatsApp updates, weekly reviews with the sales head.</li>
                <li><strong>Pilot with one team.</strong> One territory or product line goes live first. We fix what they complain about before anyone else touches it.</li>
                <li><strong>Rollout &amp; training.</strong> Short sessions per role, plus a one-page cheat sheet — adoption is the whole game.</li>
                <li><strong>+30 days support included.</strong></li>
              </ol>

              <h2>Pricing for custom CRM software in India</h2>
              <p>
                A focused CRM covering leads, pipeline, follow-ups and quotations starts at <strong>₹99,999</strong>. Adding WhatsApp Business API, call-log capture, field-sales tracking, targets and ERP integration typically takes it to <strong>₹1,50,000–₹4,00,000</strong>, with a fixed quote up front and milestone payments (30/30/40). For dashboards and internal tools beyond sales, see <a href="/services/custom-software-development">custom software development</a>.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does custom CRM software cost in India?</h3>
              <p>
                A focused CRM covering leads, pipeline, follow-ups and quotations starts at ₹99,999. Adding WhatsApp Business API, call-log capture, field-sales tracking, target dashboards and ERP or billing integration typically takes it to ₹1,50,000–₹4,00,000. One-time build, fixed quote up front, milestone payments (30/30/40) — not per user per month.
              </p>
              <h3>Why not just use Zoho CRM, HubSpot or Salesforce?</h3>
              <p>
                For a standard B2B sales motion they are excellent and usually the right call — we will tell you when that is true. Custom becomes worth it when your sales process doesn&apos;t look like the template: dealer and distributor hierarchies, quotations with technical BOM line items, field staff who work offline, or a pipeline that has to read live stock and pricing from your ERP. That is where teams end up maintaining a parallel Excel alongside the CRM, which is the signal the tool is not fitting.
              </p>
              <h3>Can the CRM send and receive WhatsApp messages?</h3>
              <p>
                Yes. We integrate the official WhatsApp Business API so enquiries arriving on WhatsApp create a lead automatically, the full conversation is visible on the lead record, and approved template messages — quotation sent, follow-up reminder, payment due — can go out from the CRM. This matters in India because most B2B and retail selling actually happens on WhatsApp, not email.
              </p>
              <h3>Will it stop leads from being forgotten?</h3>
              <p>
                That is the main job. Every lead gets an owner and a next-action date; anything without one appears on a daily list. Overdue follow-ups escalate to the manager, and ageing enquiries surface automatically rather than waiting to be noticed. The reason most enquiries are lost is not poor salesmanship, it is that nobody was told to call back on Thursday.
              </p>
              <h3>How long does a CRM build take?</h3>
              <p>
                A focused CRM ships in 5 to 7 weeks. With WhatsApp, call-log capture, field tracking and ERP integration it takes 8 to 12 weeks. We roll it out to one sales team first, fix what they complain about, then extend to everyone — CRM projects fail on adoption far more often than on technology.
              </p>
            </Prose>
          </div>
        </section>

        <TrustStrip />

        <RelatedServices exclude="crm-software-development" />

        <ClosingCta
          heading="Where are your enquiries actually going?"
          body="Tell us how leads reach you today and how many people chase them. We'll set up a free scoping call to map your pipeline, then follow up with a fixed quote."
        />
      </SubPageLayout>
    </>
  );
}
