import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { TrustStrip } from '@/components/sub-page/TrustStrip';
import { RelatedServices } from '@/components/sub-page/RelatedServices';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/services/hrms-payroll-software';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'HRMS & Payroll Software Development in India',
  description:
    'Custom HRMS and payroll software — attendance, leave, shifts, salary structures, payslips and automatic PF, ESI & TDS. One-time build, you own the code.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Custom HRMS & Payroll Software Development in India | Verelios Labs',
    description:
      'Attendance, leave, shifts, salary structures, payslips and automatic PF / ESI / TDS in one system. Built around your policies. You own the code.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — HRMS & Payroll Software Development in India' }],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'HRMS and Payroll Software Development',
  name: 'Custom HRMS & Payroll Software Development',
  description:
    'Custom HRMS and payroll software for Indian businesses — attendance, leave, shift rosters, salary structures, payslips, full-and-final settlement and automatic PF, ESI, PT and TDS calculation, with employee self-service. Built around your policies, hosted on your own cloud, code owned by you.',
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
    { '@type': 'ListItem', position: 3, name: 'HRMS & Payroll Software', item: `${SITE}${URL_PATH}` },
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
      name: 'How much does custom HRMS and payroll software cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused HRMS covering attendance, leave and payslips starts at ₹99,999. A full system adding shift rostering, biometric integration, PF / ESI / TDS filing exports, employee self-service and reimbursement workflows typically lands between ₹2,00,000 and ₹6,00,000, depending on how many headcount rules and integrations it has to encode. It is a one-time build with a fixed quote agreed before any code is written, paid in milestones of 30/30/40 — not a per-employee monthly subscription that grows every time you hire. What you pay for stays yours: the full source code sits in a GitHub repository under your own organisation, the system runs on your own hosting account rather than a shared multi-tenant database, and 30 days of support after go-live is included. Measured against a per-employee subscription, a custom build is usually cheaper by about year two, and it does not get more expensive as headcount grows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the payroll software calculate PF, ESI, TDS and professional tax automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build the statutory logic into the payroll engine — EPF at the applicable wage ceiling, ESI for eligible employees, professional tax by state slab, and TDS under the old or new regime with Section 80C, 80D and HRA declarations. The system generates ECR files for the EPFO portal, ESI return files and Form 16 inputs, so your compliance team exports rather than re-keys.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it connect to our biometric attendance machine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most biometric and access-control devices (eSSL, ZKTeco, Matrix, Realtime and similar) expose punch logs over a local database, a push API or a scheduled export. We read those logs directly, apply your shift, grace, late-mark and overtime rules, and post the result straight into payroll — so nobody downloads a spreadsheet from the machine each month.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build and go live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused HRMS ships in 6 to 8 weeks. A full system with statutory filing, biometric integration and self-service takes 10 to 14 weeks. We always run one or two payroll cycles in parallel with your existing process before switching over, so you verify every salary figure against the old method before anyone relies on the new one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why build custom instead of buying Keka, Zoho People or GreytHR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Packaged HR products are a good fit when your policies match theirs. They stop being a good fit when they do not — contract and piece-rate workers, multi-unit shift patterns, custom incentive formulas, or advances and loans recovered across months are where teams end up exporting to Excel anyway. A custom build encodes your actual rules, costs a one-time fee instead of per employee per month forever, and stops getting more expensive every time you hire.',
      },
    },
  ],
};

export default function HrmsPayrollSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="HRMS & payroll software · India"
          title="HR and payroll"
          highlight="that runs itself on the 1st."
          lead="Verelios Labs builds custom HRMS and payroll software for Indian businesses — attendance, leave, shifts, salary structures, payslips and automatic PF, ESI, PT and TDS. Built around your policies, not a product's defaults. You own the code."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'HRMS & Payroll Software', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>What payroll actually costs you today</h2>
              <p>
                In most Indian companies under 500 people, payroll is a spreadsheet. Attendance comes off a biometric machine as a CSV, someone reconciles it against a leave register, someone else applies overtime and late-mark rules from memory, and a third person calculates PF, ESI and TDS by hand. It takes three to five days every month, it produces at least one salary query per ten employees, and the knowledge lives in one person&apos;s head.
              </p>
              <p>
                <strong>Custom HRMS and payroll software</strong> encodes those rules once and then runs them every month without argument. We are a team of <strong>HRMS and payroll developers based in Govind Nagar, Kanpur</strong>, building for manufacturers, factories, hospitals, schools, retail chains and services firms across Uttar Pradesh and all of India.
              </p>

              <h2>What we build</h2>
              <ul>
                <li><strong>Attendance &amp; biometric integration</strong> — punch logs read directly from eSSL, ZKTeco, Matrix or Realtime devices, plus mobile punch with geo-fencing for field staff.</li>
                <li><strong>Shifts &amp; rosters</strong> — rotating shifts, night-shift allowances, week-offs, grace periods, late marks, half-days and overtime, applied automatically.</li>
                <li><strong>Leave management</strong> — CL, SL, EL and comp-off with accrual, carry-forward, encashment and an approval chain that matches your reporting structure.</li>
                <li><strong>Salary structures</strong> — basic, HRA, allowances, incentives, piece-rate and contract-labour rates, with arrears and revisions handled retrospectively.</li>
                <li><strong>Statutory compliance</strong> — EPF, ESI, professional tax by state slab, TDS under old and new regime, gratuity and bonus. ECR and return files generated for upload.</li>
                <li><strong>Payslips &amp; disbursement</strong> — payslips emailed or downloadable, plus bank-ready salary transfer files in your bank&apos;s format.</li>
                <li><strong>Employee self-service</strong> — staff check their own attendance, apply for leave, download payslips and Form 16, and submit investment declarations without going through HR.</li>
                <li><strong>Loans, advances &amp; reimbursements</strong> — recovery schedules that run across months without anyone tracking them manually.</li>
                <li><strong>Reports</strong> — salary register, department-wise cost, attendance summary, statutory registers and the headcount numbers an owner actually asks for.</li>
              </ul>

              <h2>Why custom beats a per-employee subscription</h2>
              <p>
                Keka, Zoho People, GreytHR and Darwinbox are good products. They are the right answer when your policies look like the policies they were designed around. The problem starts at the edges — and Indian manufacturing and services businesses live at the edges.
              </p>
              <p>
                Signs a packaged HR product is not fitting:
              </p>
              <ul>
                <li>You run contract, piece-rate or daily-wage workers alongside salaried staff.</li>
                <li>Your incentive formula is genuinely yours, and the product cannot express it.</li>
                <li>Multiple units or plants with different shift patterns and different PF codes.</li>
                <li>Somebody still exports to Excel every month to produce the report the owner wants.</li>
                <li>Your per-employee bill grows every time you hire, for features you do not use.</li>
              </ul>
              <p>
                A custom build is a one-time cost. After roughly year two it is almost always cheaper than the subscription it replaced, and it does not get more expensive as you grow.
              </p>
              {/* Same comparison the prose above makes, in a form a reader can scan and an
                  answer engine can extract. Every row restates a claim already on this page —
                  no new assertion about any named product. */}
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th></th><th>Packaged HR subscription</th><th>Custom build</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cost model</td>
                      <td>Per employee, per month, for as long as you use it</td>
                      <td>One-time build cost, quoted up front</td>
                    </tr>
                    <tr>
                      <td>As you grow</td>
                      <td>Bill rises with every person you hire</td>
                      <td>Cost does not change as headcount grows</td>
                    </tr>
                    <tr>
                      <td>Break-even</td>
                      <td>—</td>
                      <td>Usually cheaper than the subscription it replaced by around year two</td>
                    </tr>
                    <tr>
                      <td>Policy fit</td>
                      <td>Strong when your policies resemble the ones the product was designed around</td>
                      <td>Encodes the rules you actually run, including the ones nobody wrote down</td>
                    </tr>
                    <tr>
                      <td>Edge cases</td>
                      <td>Contract and piece-rate workers, multi-unit shift patterns and custom incentive formulas are where teams end up exporting to Excel</td>
                      <td>Built into the system, so the monthly Excel step disappears</td>
                    </tr>
                    <tr>
                      <td>Where salary data sits</td>
                      <td>The vendor&apos;s multi-tenant platform</td>
                      <td>Your own hosting account, with the source code in your GitHub organisation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>How a payroll project runs</h2>
              <ol>
                <li><strong>Week 1 — policy capture.</strong> We sit with HR and accounts and write down every rule: shift timings, grace, overtime multipliers, leave accrual, incentive formulas, statutory codes. Most of this has never been written down before. No code yet.</li>
                <li><strong>Week 1–2 — blueprint &amp; fixed quote.</strong> Every screen, rule and integration listed on one page with a fixed price and the monthly hosting cost. You approve before we build.</li>
                <li><strong>Week 2–10 — build.</strong> Staging environment your HR team can test daily, WhatsApp updates, weekly reviews.</li>
                <li><strong>Parallel payroll run.</strong> We run one or two full cycles alongside your existing process and reconcile to the rupee. You switch only once the numbers match.</li>
                <li><strong>Rollout &amp; training.</strong> HR and accounts training, employee self-service onboarding, role-based access for every user.</li>
                <li><strong>+30 days support included.</strong> Because the real questions only arrive on the first live 1st of the month.</li>
              </ol>

              <h2>What you own on day one</h2>
              <ul>
                <li><strong>Full source code</strong> in a GitHub repo under your organisation — no vendor lock-in.</li>
                <li><strong>Hosted on your account</strong> so salary data never sits on someone else&apos;s multi-tenant database. We can <a href="/services/web-hosting">manage the hosting</a> if you prefer.</li>
                <li><strong>Role-based access</strong> — HR, accounts, manager and employee roles, because payroll data should not be visible to everyone.</li>
                <li><strong>Audit log</strong> — every salary change recorded with who, what and when.</li>
                <li><strong>Daily encrypted backups</strong> and point-in-time recovery.</li>
                <li><strong>Documentation</strong> — user guide, statutory-rule reference and deployment guide.</li>
              </ul>

              <h2>Pricing for HRMS &amp; payroll software in India</h2>
              <p>
                Fixed quote up front and milestone payments (30/30/40). It is a one-time build, not a per-employee monthly subscription, so the cost does not rise every time you hire.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Tier</th><th>Price</th><th>What it covers</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Focused HRMS</td>
                      <td className="price">from ₹99,999</td>
                      <td>Attendance, leave and payslips</td>
                    </tr>
                    <tr>
                      <td>Full system</td>
                      <td className="price">₹2,00,000 – ₹6,00,000</td>
                      <td>Adds shift rostering, biometric integration, statutory filing exports, employee self-service and reimbursements. Final figure depends on how many headcount rules and integrations it has to encode</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                If you also need inventory, production and accounting in the same system, that is our <a href="/services/erp">custom ERP software</a> service — HR and payroll is usually built as one module of it.
              </p>
              <p>
                Based in Kanpur? See our dedicated <a href="/locations/kanpur/hrms-payroll-software">HRMS &amp; payroll software company in Kanpur</a> page — we can visit your unit and map your shift and wage rules in person.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does custom HRMS and payroll software cost in India?</h3>
              <p>
                A focused HRMS covering attendance, leave and payslips starts at ₹99,999. A full system adding shift rostering, biometric integration, PF / ESI / TDS filing exports, employee self-service and reimbursement workflows typically lands between ₹2,00,000 and ₹6,00,000, depending on how many headcount rules and integrations it has to encode. It is a one-time build with a fixed quote agreed before any code is written, paid in milestones of 30/30/40 — not a per-employee monthly subscription that grows every time you hire. What you pay for stays yours: the full source code sits in a GitHub repository under your own organisation, the system runs on your own hosting account rather than a shared multi-tenant database, and 30 days of support after go-live is included. Measured against a per-employee subscription, a custom build is usually cheaper by about year two, and it does not get more expensive as headcount grows.
              </p>
              <h3>Does the payroll software calculate PF, ESI, TDS and professional tax automatically?</h3>
              <p>
                Yes. We build the statutory logic into the payroll engine — EPF at the applicable wage ceiling, ESI for eligible employees, professional tax by state slab, and TDS under the old or new regime with Section 80C, 80D and HRA declarations. The system generates ECR files for the EPFO portal, ESI return files and Form 16 inputs, so your compliance team exports rather than re-keys.
              </p>
              <h3>Can it connect to our biometric attendance machine?</h3>
              <p>
                Yes. Most biometric and access-control devices (eSSL, ZKTeco, Matrix, Realtime and similar) expose punch logs over a local database, a push API or a scheduled export. We read those logs directly, apply your shift, grace, late-mark and overtime rules, and post the result straight into payroll — so nobody downloads a spreadsheet from the machine each month.
              </p>
              <h3>How long does it take to build and go live?</h3>
              <p>
                A focused HRMS ships in 6 to 8 weeks. A full system with statutory filing, biometric integration and self-service takes 10 to 14 weeks. We always run one or two payroll cycles in parallel with your existing process before switching over, so you verify every salary figure against the old method before anyone relies on the new one.
              </p>
              <h3>Why build custom instead of buying Keka, Zoho People or GreytHR?</h3>
              <p>
                Packaged HR products are a good fit when your policies match theirs. They stop being a good fit when they don&apos;t — contract and piece-rate workers, multi-unit shift patterns, custom incentive formulas, or advances and loans recovered across months are where teams end up exporting to Excel anyway. A custom build encodes your actual rules, costs a one-time fee instead of per employee per month forever, and stops getting more expensive every time you hire.
              </p>
            </Prose>
          </div>
        </section>

        <TrustStrip />

        <RelatedServices exclude="hrms-payroll-software" />

        <ClosingCta
          defaultService="Custom Software / CRM / ERP"
          heading="Stop closing payroll in a spreadsheet."
          body="Tell us your headcount, shift pattern and how salary is calculated today. We'll set up a free scoping call to map your rules, then follow up with a fixed quote."
        />
      </SubPageLayout>
    </>
  );
}
