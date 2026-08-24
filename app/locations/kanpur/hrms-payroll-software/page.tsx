import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { LocalTrustBlock, LocalReview } from '@/components/sub-page/LocalTrustBlock';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/locations/kanpur/hrms-payroll-software';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'HRMS & Payroll Software Company in Kanpur',
  description:
    'Custom HRMS and payroll software built in Govind Nagar, Kanpur — attendance, shifts, payslips and automatic PF, ESI & TDS. Biometric integration. Rated 5.0★.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'HRMS & Payroll Software Company in Kanpur | Verelios Labs',
    description:
      'Attendance, shifts, leave, payslips and automatic PF / ESI / TDS — built in Govind Nagar, Kanpur, with biometric integration. Meet us in person. Rated 5.0★.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — HRMS & Payroll Software Company in Kanpur' }],
  },
};

const REVIEWS: LocalReview[] = [
  {
    author: 'BrandMate Digital Tech',
    body: 'It was wonderful partnering with Verelios to develop a customised HRMS solution. It streamlined our internal operations and reduced a lot of manual work.',
  },
  {
    author: 'Tanay Trivedi',
    body: 'They built our website really well — the design, performance and overall quality exceeded expectations. Wide range of tech support, from app and web development to ERP and CRM. Highly recommended.',
  },
];

// NOTE: this page deliberately declares NO ProfessionalService/LocalBusiness node.
// The single canonical business entity lives on the homepage as
// `${SITE}/#localbusiness`; every other page references it by @id. Declaring a
// parallel copy here (with its own @id, NAP and self-rating) would fragment one
// real business into several schema entities and multiply the same reviews.
// Reference the canonical @id instead of re-declaring.

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'HRMS and Payroll Software Development',
  name: 'HRMS & Payroll Software Company in Kanpur',
  description:
    'Custom HRMS and payroll software development in Kanpur — biometric attendance, shift rosters, leave, salary structures, payslips and automatic PF, ESI, professional tax and TDS, with employee self-service. Built for Kanpur factories, hospitals, schools and trading houses.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'City', name: 'Kanpur' },
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
    { '@type': 'ListItem', position: 2, name: 'Kanpur', item: `${SITE}/locations/kanpur` },
    { '@type': 'ListItem', position: 3, name: 'HRMS & Payroll Software', item: `${SITE}${URL_PATH}` },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does HRMS and payroll software cost in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused HRMS covering attendance, leave and payslips starts at ₹99,999. A full system adding shift rosters, biometric integration, PF / ESI / TDS exports and employee self-service typically ranges from ₹2,00,000 to ₹6,00,000 depending on headcount rules. We scope it in person at your unit and give a fixed quote before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you connect it to our existing biometric machine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most units in Kanpur run eSSL, ZKTeco, Matrix or Realtime devices, and all of them expose punch logs over a local database, a push API or a scheduled export. We read those logs directly and apply your shift, grace, late-mark and overtime rules automatically, so nobody downloads a spreadsheet from the machine each month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it handle contract labour and piece-rate workers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and this is usually why Kanpur manufacturers come to us. Packaged HR products assume everyone is salaried. We build contract, daily-wage and piece-rate workers into the same system alongside permanent staff, with separate wage registers, contractor-wise billing and the statutory records a labour inspection expects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will it calculate PF, ESI, professional tax and TDS automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. EPF at the applicable wage ceiling, ESI for eligible employees, Uttar Pradesh professional tax rules, and TDS under the old or new regime with 80C, 80D and HRA declarations. The system generates ECR files for the EPFO portal and ESI return files, so your compliance team uploads rather than re-keys.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we meet the team in person in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are in Govind Nagar, Kanpur — you can visit our office, or we can come to your factory, hospital, school or office anywhere in Kanpur including Panki, Dada Nagar, Fazalganj and Jajmau, and sit with your HR and accounts team to write down how salary is actually calculated today before we build anything.',
      },
    },
  ],
};

const HRMS_MODULES: Array<[string, string]> = [
  ['Biometric attendance', 'Punch logs pulled straight from your eSSL, ZKTeco, Matrix or Realtime device — no monthly CSV download.'],
  ['Shifts & overtime', 'Rotating shifts, night allowance, grace periods, late marks and OT multipliers applied automatically.'],
  ['Leave management', 'CL, SL, EL and comp-off with accrual, carry-forward and an approval chain that matches your hierarchy.'],
  ['Salary structures', 'Basic, HRA, allowances, incentives, piece-rate and contract rates, with arrears handled retrospectively.'],
  ['PF, ESI, PT & TDS', 'Statutory calculation built in, with ECR and return files ready to upload to the EPFO and ESIC portals.'],
  ['Payslips & bank files', 'Payslips emailed to staff, plus salary transfer files in your bank’s required format.'],
  ['Employee self-service', 'Staff check attendance, apply for leave and download payslips without walking to the HR desk.'],
  ['Loans & advances', 'Recovery schedules that run across months automatically instead of living in someone’s diary.'],
];

const KANPUR_AREAS = [
  'Govind Nagar', 'Panki', 'Dada Nagar', 'Fazalganj', 'Jajmau', 'Kakadeo',
  'Swaroop Nagar', 'Kidwai Nagar', 'Civil Lines', 'Barra', 'Naveen Market', 'Ratan Lal Nagar',
];

export default function KanpurHrmsPayrollPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="HRMS & payroll software · Kanpur"
          title="An HRMS and payroll company in Kanpur"
          highlight="that knows your shift rules."
          lead="Verelios Labs builds custom HRMS and payroll software in Govind Nagar, Kanpur — biometric attendance, shifts, leave, payslips and automatic PF, ESI and TDS, including contract and piece-rate workers. A team you can bring onto your floor. Rated 5.0★."
          ctaLabel="Get a free payroll consultation"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Kanpur', href: '/locations/kanpur' },
            { label: 'HRMS & Payroll Software', href: URL_PATH },
          ]}
        />

        <LocalTrustBlock reviews={REVIEWS} heading="What our Kanpur HRMS clients say" />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>Payroll in Kanpur is not a standard problem</h2>
              <p>
                A software company in Bangalore builds payroll for a company where everyone is salaried, works one shift and has a bank account. That is not what a Kanpur factory looks like. Here you have permanent staff and contract labour on the same floor, piece-rate workers in the finishing section, three rotating shifts, overtime that follows its own local convention, and advances that come out of next month&apos;s wages.
              </p>
              <p>
                <strong>Verelios Labs is a custom HRMS and payroll software company based in Govind Nagar, Kanpur.</strong> We build the system around the rules your unit already runs on, and because we are local you can bring us to your floor and point at the exceptions rather than describing them over a call.
              </p>

              <h2>Why Kanpur businesses come to us for payroll</h2>
              <ul>
                <li><strong>Contract and piece-rate workers handled properly</strong> — not bolted on as an afterthought.</li>
                <li><strong>Your biometric machine already works</strong> — we read from the device you have, not one we want to sell you.</li>
                <li><strong>Meet us in person</strong> — a real team in Govind Nagar, on your floor within the hour.</li>
                <li><strong>One-time build, not per employee per month</strong> — the bill does not grow every time you hire.</li>
                <li><strong>Milestone payments</strong> — 30% to start, 30% at mid-delivery, 40% at launch.</li>
                <li><strong>Rated 5.0★</strong> across 53 client reviews. <strong>You own the code.</strong></li>
              </ul>

              <h2>What we build into a Kanpur HRMS</h2>
              <p>You take the modules you need now, and add the rest as you grow:</p>
            </Prose>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 16,
                margin: '28px 0 8px',
              }}
            >
              {HRMS_MODULES.map(([title, desc]) => (
                <div
                  key={title}
                  style={{
                    padding: 20,
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, letterSpacing: '-0.015em', margin: '0 0 8px', color: '#fff' }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <Prose>
              <h2>Who we build payroll for in Kanpur</h2>
              <p>
                <strong>Manufacturing units</strong> in Panki, Dada Nagar and Fazalganj with shift rosters and contract labour. <strong>Leather and tannery units</strong> in the Jajmau belt with piece-rate finishing work. <strong>Hospitals and nursing homes</strong> with duty rosters and night allowances. <strong>Schools and colleges</strong> with teaching and non-teaching salary structures. <strong>Trading and distribution houses</strong> in Naveen Market with field staff and incentive-linked pay.
              </p>

              <h2>How a payroll project runs in Kanpur</h2>
              <ol>
                <li><strong>We come to you.</strong> A morning with HR and accounts, writing down every rule — shift timings, grace, OT multipliers, leave accrual, incentive formulas, contractor terms. Most of this has never been written down.</li>
                <li><strong>Blueprint &amp; fixed quote.</strong> Every rule and screen on one page, with a fixed price and monthly hosting cost, before any code.</li>
                <li><strong>Build in phases.</strong> Attendance and leave first, so your team sees value in week three, then payroll and statutory.</li>
                <li><strong>Biometric integration.</strong> We connect to the device already on your wall.</li>
                <li><strong>Parallel payroll run.</strong> One or two full cycles alongside your current process, reconciled to the rupee. You switch only when the numbers match.</li>
                <li><strong>On-site training &amp; go-live.</strong> HR, accounts and employee self-service, trained in Kanpur, in person.</li>
              </ol>

              <h2>Areas we serve across Kanpur</h2>
              <p>Our office is in Govind Nagar, and we work with units and offices right across the city:</p>
            </Prose>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '20px 0 8px' }}>
              {KANPUR_AREAS.map((a) => (
                <span
                  key={a}
                  style={{
                    fontSize: 13,
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.75)',
                  }}
                >
                  {a}
                </span>
              ))}
            </div>

            <Prose>
              <p style={{ marginTop: 24 }}>
                We also serve Lucknow, Unnao and the rest of Uttar Pradesh, and businesses across India. See our national{' '}
                <Link href="/services/hrms-payroll-software">HRMS &amp; payroll software</Link> page for the full capability, the{' '}
                <Link href="/locations/kanpur/erp-software">ERP software company in Kanpur</Link> page if you also need inventory and
                production, or the <Link href="/locations/kanpur">software company in Kanpur</Link> overview for everything we build locally.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does HRMS and payroll software cost in Kanpur?</h3>
              <p>
                A focused HRMS covering attendance, leave and payslips starts at <strong>₹99,999</strong>. A full system adding shift rosters, biometric integration, PF / ESI / TDS exports and employee self-service typically ranges from <strong>₹2,00,000 to ₹6,00,000</strong> depending on headcount rules. We scope it in person at your unit and give a fixed quote before any work begins.
              </p>
              <h3>Can you connect it to our existing biometric machine?</h3>
              <p>
                Yes. Most units in Kanpur run eSSL, ZKTeco, Matrix or Realtime devices, and all of them expose punch logs over a local database, a push API or a scheduled export. We read those logs directly and apply your shift, grace, late-mark and overtime rules automatically, so nobody downloads a spreadsheet from the machine each month.
              </p>
              <h3>Does it handle contract labour and piece-rate workers?</h3>
              <p>
                Yes — and this is usually why Kanpur manufacturers come to us. Packaged HR products assume everyone is salaried. We build contract, daily-wage and piece-rate workers into the same system alongside permanent staff, with separate wage registers, contractor-wise billing and the statutory records a labour inspection expects.
              </p>
              <h3>Will it calculate PF, ESI, professional tax and TDS automatically?</h3>
              <p>
                Yes. EPF at the applicable wage ceiling, ESI for eligible employees, Uttar Pradesh professional tax rules, and TDS under the old or new regime with 80C, 80D and HRA declarations. The system generates ECR files for the EPFO portal and ESI return files, so your compliance team uploads rather than re-keys.
              </p>
              <h3>Can we meet the team in person in Kanpur?</h3>
              <p>
                Yes. We&apos;re in Govind Nagar, Kanpur — you can visit our office, or we can come to your factory, hospital, school or office anywhere in Kanpur including Panki, Dada Nagar, Fazalganj and Jajmau, and sit with your HR and accounts team to write down how salary is actually calculated today before we build anything.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          defaultService="Custom Software / CRM / ERP"
          heading="Let's fix payroll, in Kanpur."
          body="Tell us your headcount, how many shifts you run and whether you have contract labour. We'll come to your unit, map your rules, and send a fixed quote — visit our Govind Nagar office any day."
        />
      </SubPageLayout>
    </>
  );
}
