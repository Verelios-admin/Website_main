import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { AUTHOR_REF } from '@/lib/schema';
import { BLS_SOURCES, US_CONTACT_EMAIL, US_PRICING, US_WHATSAPP_HREF, usMailto } from '@/lib/us';

// Phase 17 (2026-11-10). US cost article that supports the e-commerce and
// home-services pages. Figures: BLS OOH customer service representatives median
// $21.53/h, $44,770/yr (May 2025), projected −5% 2025–35; BLS ECEC wages = 70.0%
// of private-industry compensation (June 2026). $44,770 ÷ 0.70 ≈ $63,960.

const SLUG = 'hire-customer-service-rep-or-ai-2026';
const URL_PATH = `/blog/${SLUG}`;
const SITE = 'https://www.verelios.com';
const PUBLISHED = '2026-11-10';

export const metadata: Metadata = {
  title: 'Customer Service Rep or AI? 2026 Cost Guide',
  description:
    'Should a US small business hire another customer service rep or use AI in 2026? BLS wage data, what AI really costs, what it handles well and how to decide.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Hire a Customer Service Rep or Use AI? The 2026 Cost Guide | Verelios Labs',
    description:
      'A US customer service rep costs about $64,000 a year with benefits. Here is what an AI assistant costs, which questions it handles well, and which still need a person.',
    url: `${SITE}${URL_PATH}`,
    type: 'article',
    locale: 'en_US',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — customer service rep or AI' }],
    publishedTime: `${PUBLISHED}T00:00:00+05:30`,
    modifiedTime: `${PUBLISHED}T00:00:00+05:30`,
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${SITE}${URL_PATH}#article`,
  headline: 'Hire a Customer Service Rep or Use AI? The 2026 Cost Guide',
  description:
    'What another customer service representative costs a US small business in 2026, what an AI customer service assistant costs, which questions each handles best, and a simple way to decide.',
  datePublished: `${PUBLISHED}T00:00:00+05:30`,
  dateModified: `${PUBLISHED}T00:00:00+05:30`,
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  articleSection: 'AI Automation',
  keywords: 'customer service rep cost, AI customer service small business, hire CSR or AI, AI customer service cost, ecommerce customer service AI',
  author: AUTHOR_REF,
  publisher: { '@id': `${SITE}/#organization` },
  mainEntityOfPage: `${SITE}${URL_PATH}`,
  image: { '@type': 'ImageObject', url: `${SITE}/logo.webp`, width: 1200, height: 630 },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Customer service rep or AI', item: `${SITE}${URL_PATH}` },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="AI automation · 7 min read"
          title="Hire a customer service rep,"
          highlight="or use AI? The 2026 cost guide."
          lead="What another customer service rep really costs a US small business, what an AI assistant costs instead, which questions each one handles best, and a two-week test that tells you which you need."
          ctaHref={usMailto('Customer service rep or AI: free 48-hour proof')}
          ctaLabel={`Email ${US_CONTACT_EMAIL}`}
          whatsappHref={US_WHATSAPP_HREF}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Customer service rep or AI', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 760, margin: '0 auto' }}>
            <Prose>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '0 0 8px' }}>By <a href="/about" style={{ color: 'inherit' }}>Sahil Chauhan</a> · Founder &amp; CEO, Verelios Labs · Published <time dateTime="2026-11-10">10 November 2026</time></p>

              <div className="key-answer">
                <p>
                  A customer service representative at the US median wage of $21.53 an hour earns about $44,770 a year, according to the Bureau of Labor Statistics, and costs an employer roughly $64,000 a year once benefits and payroll costs are included. An AI customer service assistant that drafts replies to routine questions from your own policies and data typically costs a few thousand dollars to build, {US_PRICING.buildRange} at Verelios Labs, plus a running cost of tens to a few hundred dollars a month. AI is strong on repetitive written questions such as order status, policies, sizing and booking requests, at any hour. People are still better at complaints, judgment calls, phone conversations and customers who need care. If most of your queue is the same handful of questions, test an assistant before hiring. If most of it needs judgment, hire, and let automation take the routine remainder.
                </p>
              </div>

              <h2>What another customer service rep costs</h2>
              <p>
                The Bureau of Labor Statistics reports a median wage of <strong>$21.53 an hour</strong> for US customer service representatives in May 2025, or <strong>$44,770 a year</strong>. Wages were <strong>70.0% of private employers’ total compensation cost</strong> in June 2026, so the full cost of a median rep is roughly <strong>$64,000 a year</strong> before recruiting, training, software seats and management time. Seasonal businesses pay a second way too: temporary staff for the holiday rush or the first heat wave, trained for a few weeks and gone again.
              </p>
              <p>
                The BLS also projects employment of customer service representatives to fall 5% between 2025 and 2035, noting that their tasks continue to be automated as self-service systems take over simple requests. That is not a reason to stop hiring people. It is a sign that the routine part of the job is the part most businesses are moving to software.
              </p>

              <h2>What an AI customer service assistant costs</h2>
              <p>
                There are two common routes. Many helpdesks now include a built-in AI agent, usually billed per resolved conversation, which works well when your questions are standard and your answers live in one place. A custom assistant is a one-time build plus a running cost: at Verelios Labs a pilot covering one category of questions starts at {US_PRICING.pilotFrom}, and a typical build connected to your store or field-service platform and your helpdesk is {US_PRICING.buildRange}, fixed up front, with AI usage usually tens to a few hundred dollars a month. Custom makes sense when your answers depend on several systems or rules a built-in agent cannot see.
              </p>

              <h2>Which questions suit AI, and which need a person</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Usually good for AI</th><th>Usually better with a person</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Where is my order, and when will it arrive?</td><td>A damaged or wrong item from a frustrated customer</td></tr>
                    <tr><td>Return, exchange and shipping policy questions</td><td>A refund outside your policy, or a goodwill gesture</td></tr>
                    <tr><td>Sizing, product details and availability</td><td>A complaint that could become a bad review</td></tr>
                    <tr><td>Booking, rescheduling and reminder messages</td><td>A diagnosis that needs a technician’s judgment</td></tr>
                    <tr><td>Enquiries at night and on weekends</td><td>Phone calls, and customers who simply want a person</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                A well-built assistant handles the left column and hands the right column to a person with the history already summarized, so your team spends its time where it matters most.
              </p>

              <h2>A two-week test before you hire</h2>
              <ol>
                <li><strong>Tag every enquiry for two weeks.</strong> Routine (the answer is in your policies or order data) or judgment (it needed a decision or a conversation).</li>
                <li><strong>Count the hours, not the tickets.</strong> Routine questions are quick one by one but add up; judgment cases are fewer but longer.</li>
                <li><strong>Decide by the split.</strong> Mostly routine: test an assistant first. Mostly judgment: hire, and automate only the routine share. Somewhere in between: do both, and delay the next hire until you see the pilot numbers.</li>
              </ol>

              <h2>Test it on your own questions</h2>
              <p>
                Send us a sample of real past tickets or enquiries, with customer names removed, and within 48 hours we will show you the replies an assistant would have drafted, free. For online stores see <Link href="/us/ai-customer-service-for-ecommerce">AI customer service for Shopify and online brands</Link>; for HVAC, plumbing and pest-control companies see the <Link href="/us/ai-front-office-for-home-services">AI front office for home services</Link>; or start from our <Link href="/us">overview for US businesses</Link>.
              </p>

              <h2>Sources</h2>
              <ul>
                <li>U.S. Bureau of Labor Statistics, <a href={BLS_SOURCES.csr} target="_blank" rel="noopener noreferrer">Occupational Outlook Handbook, Customer Service Representatives</a>: median wage, May 2025, and employment projections, 2025–35.</li>
                <li>U.S. Bureau of Labor Statistics, <a href={BLS_SOURCES.ecec} target="_blank" rel="noopener noreferrer">Employer Costs for Employee Compensation</a>: wages as a share of private-industry compensation, June 2026.</li>
              </ul>
            </Prose>
          </div>
        </section>

        <ClosingCta
          market="us"
          mailSubject="Customer service rep or AI: free 48-hour proof"
          defaultService="AI Automation / Chatbot"
          submitLabel="Test AI on my enquiries"
          heading="See your own questions answered in 48 hours."
          body="Tell us your business, your helpdesk or field-service platform, and roughly how many enquiries you get a week. The proof is free, and we reply within one business day."
        />
      </SubPageLayout>
    </>
  );
}
