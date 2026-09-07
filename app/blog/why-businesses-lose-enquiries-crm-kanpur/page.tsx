import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { AUTHOR_REF } from '@/lib/schema';

const SLUG = 'why-businesses-lose-enquiries-crm-kanpur';
const URL_PATH = `/blog/${SLUG}`;
const SITE = 'https://www.verelios.com';
const PUBLISHED = '2026-09-07';
const UPDATED = '2026-09-07';

export const metadata: Metadata = {
  title: 'Why Businesses Lose Enquiries — and What a CRM Fixes',
  description:
    'Most Kanpur businesses lose more enquiries to forgetting than to price. Where leads actually leak, what a CRM does and does not fix, and what one costs.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'Why Businesses Lose Enquiries — and What a CRM Actually Fixes | Verelios Labs',
    description:
      'Where leads actually leak, what a CRM does and does not fix, and what one costs in 2026.',
    url: `${SITE}${URL_PATH}`,
    type: 'article',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — Why Businesses Lose Enquiries' }],
    publishedTime: `${PUBLISHED}T00:00:00.000Z`,
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${SITE}${URL_PATH}#article`,
  headline: 'Why Businesses Lose Enquiries — and What a CRM Actually Fixes',
  description:
    'Most Kanpur businesses lose more enquiries to forgetting than to price. Where leads actually leak, what a CRM does and does not fix, and what one costs.',
  datePublished: `${PUBLISHED}T00:00:00+05:30`,
  dateModified: `${UPDATED}T00:00:00+05:30`,
  inLanguage: 'en-IN',
  isAccessibleForFree: true,
  articleSection: 'Guides',
  keywords: 'CRM software Kanpur, custom CRM India, lead management software, WhatsApp CRM, CRM cost India',
  author: AUTHOR_REF,
  publisher: { '@id': `${SITE}/#organization` },
  mainEntityOfPage: `${SITE}${URL_PATH}`,
  image: {
    '@type': 'ImageObject',
    url: `${SITE}/logo.webp`,
    width: 1200,
    height: 630,
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Why Businesses Lose Enquiries — and What a CRM Actually Fixes', item: `${SITE}${URL_PATH}` },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Guide · 7 min read"
          title="Why businesses lose enquiries"
          highlight="— and what a CRM fixes"
          lead="Most businesses lose more enquiries to forgetting than to price. Where leads actually leak, what a CRM genuinely fixes, what it does not, and what one costs in 2026."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Why businesses lose enquiries', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 760, margin: '0 auto' }}>
            <Prose>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '0 0 8px' }}>By <a href="/about" style={{ color: 'inherit' }}>Sahil Chauhan</a> · Founder &amp; CEO, Verelios Labs · Published <time dateTime="2026-09-07">7 September 2026</time></p>

              <p>
                Ask an owner why a deal was lost and you will usually hear &ldquo;the rate was too high&rdquo;. Ask the customer and you will often hear something else entirely: nobody called back.
              </p>
              <p>
                That gap is the most under-priced problem in a lot of Indian businesses. Marketing spend goes up, more enquiries arrive, and the same proportion quietly evaporates — because the system holding them is a diary, three WhatsApp threads and one salesperson&apos;s memory.
              </p>

              <h2>The four places enquiries actually leak</h2>
              <ul>
                <li><strong>Nobody owns it.</strong> An enquiry lands on a shared number or a shared inbox. Everyone assumes someone else picked it up. Nobody did.</li>
                <li><strong>The follow-up was never scheduled.</strong> The customer said &ldquo;call me next week&rdquo;. Next week arrived. Nobody remembered which customer, or which week.</li>
                <li><strong>The salesperson left.</strong> With their phone, their contacts and every conversation that existed only in their head.</li>
                <li><strong>The quotation went out and then nothing.</strong> Most deals need three to five touches. Most businesses manage one and a half.</li>
              </ul>
              <p>
                Notice that not one of those is a pricing problem. They are all memory problems, and memory is the one thing software is genuinely good at.
              </p>

              <h2>What a CRM actually does</h2>
              <p>
                Strip away the jargon and a CRM does four things:
              </p>
              <ul>
                <li><strong>Every enquiry gets recorded and assigned</strong> — with a name against it, so &ldquo;someone else was handling it&rdquo; stops being possible.</li>
                <li><strong>Every next step has a date</strong> — and the reminder arrives without anyone remembering to set it.</li>
                <li><strong>The history stays with the business</strong> — so when someone leaves, the conversation does not leave with them.</li>
                <li><strong>The owner can see the pipeline</strong> — how many enquiries, at what stage, worth roughly what, and which ones have gone quiet.</li>
              </ul>
              <p>
                That is it. Anything else a vendor demos is a nice-to-have.
              </p>

              <h2>What a CRM will not fix</h2>
              <p>
                This is the part sales demos skip, and it matters more than the feature list.
              </p>
              <ul>
                <li><strong>It will not make anyone follow up.</strong> If your team does not chase leads today, a CRM gives you an accurate record of them not chasing leads. The discipline has to exist first; software makes it visible and repeatable.</li>
                <li><strong>It will not fix a bad offer.</strong> If the rate genuinely is wrong, faster follow-up just gets you rejected sooner.</li>
                <li><strong>It will not fill itself in.</strong> A CRM nobody updates is worse than a diary, because it looks authoritative while being wrong. This is the single most common way CRM projects fail.</li>
              </ul>
              <p>
                The honest test: is there someone who will look at the pipeline every week and ask why a deal has not moved? If the answer is no, fix that before buying anything.
              </p>

              <h2>WhatsApp is not optional here</h2>
              <p>
                In India, and certainly in Kanpur, most B2B conversation happens on WhatsApp. A CRM that does not touch it means your team works in two places and updates one of them — usually the wrong one.
              </p>
              <p>
                What working WhatsApp integration means in practice: messages from a lead appear against that lead&apos;s record rather than in a personal chat; replies can go out from the system; the number belongs to the business, not to whoever happens to hold the phone. That last point saves more relationships than any feature on a comparison chart.
              </p>

              <h2>Ready-made or custom?</h2>
              <p>
                Again, be honest. <strong>If your sales process is straightforward, buy a ready-made CRM.</strong> Zoho and Freshsales are inexpensive, work well, and will be live this week. We say this to people who ask us to quote.
              </p>
              <p>
                Custom earns its cost in two situations:
              </p>
              <ul>
                <li><strong>Your pipeline is genuinely yours.</strong> Sample sent, sample approved, rate negotiated, trial order, regular supply — stages a generic product cannot express, so your team stops using the stages and the data becomes meaningless.</li>
                <li><strong>It needs to know your stock and your prices.</strong> A quotation that pulls live rates and live availability out of your <a href="/services/erp">ERP</a> or <a href="/services/billing-inventory-software">billing system</a> is a different tool from one that makes a salesperson look both up by hand.</li>
              </ul>
              <p>
                There is also the per-user maths. Ready-made CRMs charge monthly per person, and a growing sales team makes that line climb forever. A <a href="/services/crm-software-development">custom CRM</a> is a one-time build, so adding your eleventh salesperson costs nothing.
              </p>

              <h2>What it costs</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Option</th><th>Cost</th><th>Best for</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ready-made CRM</td>
                      <td className="price">₹800 – ₹3,000 / user / month</td>
                      <td>Standard pipeline, small team, live this week</td>
                    </tr>
                    <tr>
                      <td>Custom CRM, focused</td>
                      <td className="price">from ₹99,999 once</td>
                      <td>Your own stages, leads, quotations, reminders</td>
                    </tr>
                    <tr>
                      <td>Custom CRM, full</td>
                      <td className="price">around ₹1,50,000+</td>
                      <td>WhatsApp API, call logging, field sales, ERP integration</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                At ten users on a ₹1,500 plan you are spending ₹1,80,000 a year, every year. That is the number worth comparing against a build, not the monthly figure.
              </p>

              <h2>The cheapest fix, if you are not ready to buy anything</h2>
              <p>
                Before spending a rupee, try this for one month. One shared sheet. Five columns: who enquired, what they wanted, who owns it, what the next step is, and the date of that next step. One person reviews it every Monday and asks about any row whose date has passed.
              </p>
              <p>
                If that works, you have proved the discipline exists and a CRM will multiply it. If nobody fills it in, you have just saved yourself a failed software project — and you know exactly what to fix first.
              </p>

              <hr />

              <p>
                <strong>Want to know which one you need?</strong> Tell us roughly how many enquiries you get a month, how they arrive, and who handles them. We will tell you honestly whether a ready-made CRM covers it, and name one if it does. <a href="#enquire">Ask here</a>.
              </p>
              <p>
                More on <a href="/locations/kanpur/crm-software-development">CRM software in Kanpur</a>, or if the enquiries are not arriving in the first place, that is a <a href="/services/website-development">website</a> problem rather than a CRM one.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta heading="Find out which one you need" defaultService="CRM Software" />
      </SubPageLayout>
    </>
  );
}
