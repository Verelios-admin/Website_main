import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { LocalTrustBlock, LocalReview } from '@/components/sub-page/LocalTrustBlock';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

// Phase 16 (2026-10-28). The only page on the site that targets "AI consulting /
// AI consultancy in Kanpur". Kanpur-only on purpose: a national twin would repeat
// the /services vs /locations duplicate that Search Console flagged for CRM.
//
// Facts on this page are the ones the owner approved for Phase 16: the first
// consultation is free, builds start at ₹49,999, and no AI client is named
// until the owner supplies a real case study. Timelines and prices match
// /services/ai-automation and /locations/kanpur/ai-development — change all three
// together or none.

const URL_PATH = '/locations/kanpur/ai-consulting';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'AI Consulting Company in Kanpur',
  description:
    'AI consultancy in Govind Nagar, Kanpur. Free first consultation, a one-page AI plan in 2–3 days and a 48-hour proof-of-concept. Builds from ₹49,999.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'AI Consulting Company in Kanpur | Verelios Labs',
    description:
      'Find out where AI actually pays off in your business. Free first consultation in Govind Nagar, Kanpur, a one-page plan in 2–3 days, then a free 48-hour proof-of-concept.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — AI Consulting Company in Kanpur' }],
  },
};

// Same two genuine Google reviews used across the Kanpur pages. They are about
// working with the team, not about AI work, and the heading says so.
const REVIEWS: LocalReview[] = [
  {
    author: 'Tanay Trivedi',
    body: 'They built our website really well — the design, performance and overall quality exceeded expectations. Wide range of tech support, from app and web development to ERP and CRM. Highly recommended.',
  },
  {
    author: 'Sumit Prasad',
    body: 'A great experience working with Verelios Labs for website development. Highly professional, responsive, and they understand client requirements very well. They delivered a clean, modern and fully functional website.',
  },
];

const FAQS: Array<[string, string]> = [
  [
    'What does an AI consultant actually do?',
    'An AI consultant looks at how your business runs today, finds the tasks where AI would save real time or money, estimates what it would cost to build and run, and plans the rollout. At Verelios Labs the same team then builds it, so the advice is tied to something that has to work, not a slide deck.',
  ],
  [
    'How much does AI consulting cost in Kanpur?',
    'The first consultation and the one-page plan are free. If you go ahead, a focused AI chatbot or automation starts at ₹49,999. Larger AI assistants, AI agents and multi-system workflows are quoted per project, typically ₹1,50,000 to ₹10,00,000+ depending on scope. Payments are milestone-based: 30% to start, 30% at mid-delivery, 40% at launch.',
  ],
  [
    'Is AI worth it for a small business in Kanpur?',
    'Often, but not always. AI pays off when a task is repetitive, high-volume and rule-based or text-heavy: answering the same customer questions, reading invoices, following up leads, preparing reports. If the task happens a few times a month, a simpler tool is usually cheaper, and we will say so in the plan.',
  ],
  [
    'Do we need technical staff or clean data before we start?',
    'No. Most first projects use data you already have: WhatsApp chats, Excel sheets, Tally, PDFs and emails. We check what is usable during the consultation and handle the setup. Your team only needs to explain how the work is done today.',
  ],
  [
    'Will our business data stay private?',
    'Yes. We work under a mutual NDA, ground AI answers in your own documents through retrieval, and can run models on your own cloud account or on-premise, so sensitive data stays in your control. You own the code, the workflows and the data.',
  ],
  [
    'Can the AI work in Hindi?',
    'Yes. Chatbots and voice assistants can answer customers in Hindi, English or a mix of both, which is how most Kanpur customers actually write on WhatsApp.',
  ],
  [
    'Can we meet the AI consultant in person?',
    'Yes. Our office is at 126/103-1, Nand Lal Chauraha, B Block, Govind Nagar, Kanpur, open every day. We can also come to you anywhere in Kanpur, including Kakadeo, Swaroop Nagar, Kidwai Nagar, Panki, Dada Nagar, Barra and Jajmau.',
  ],
  [
    'How soon will we see results?',
    'The one-page plan arrives within two to three days of the first consultation, and a free 48-hour proof-of-concept shows the idea working on your own data. A focused chatbot or automation is typically live in two to four weeks; larger AI agents and integrations take longer and are scheduled in the plan.',
  ],
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'AI consulting',
  name: 'AI Consulting in Kanpur',
  description:
    'AI consulting for Kanpur businesses: a free first consultation, a workflow audit, a shortlist of AI use cases with build and running costs, a written one-page plan, a free 48-hour proof-of-concept, then the build, handover and training.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: [
    { '@type': 'City', name: 'Kanpur' },
    { '@type': 'City', name: 'Unnao' },
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    description: 'Free first AI consultation and one-page plan. Builds from ₹49,999.',
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Kanpur', item: `${SITE}/locations/kanpur` },
    { '@type': 'ListItem', position: 3, name: 'AI Consulting', item: `${SITE}${URL_PATH}` },
  ],
};

// Mirrors the visible FAQ below, verbatim (both render from FAQS).
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const COVERS = [
  ['Workflow audit', 'We sit with the people who do the work and map how it happens today: every step, every hand-off, every spreadsheet. No code, no jargon.'],
  ['AI use-case shortlist', 'The one or two processes where AI saves the most time or money first, and a plain list of the ones where it will not pay off yet.'],
  ['Cost and payback estimate', 'What each idea costs to build, what it costs to run each month (model and hosting usage), and roughly how many hours it gives back.'],
  ['Tool and model choice', 'The cheapest reliable path for each job: a no-code tool like Make or n8n, or custom code calling OpenAI, Claude, Gemini or a self-hosted open model.'],
  ['Data and privacy check', 'Which of your data is usable, what must stay private, and whether the AI should run on your own cloud account or on-premise.'],
  ['One-page roadmap', 'A written plan in two to three days: what gets built first, in what order, at what fixed price, and how you will know it worked.'],
  ['Proof-of-concept and build', 'A free 48-hour proof-of-concept on your real data, then the build in a staging environment you can test against.'],
  ['Training and handover', 'Your team learns to use and update it. You get the code, the workflows and a clear view of running costs. No black box.'],
];

const KANPUR_AREAS = [
  'Govind Nagar', 'Kakadeo', 'Swaroop Nagar', 'Kidwai Nagar', 'Kalyanpur',
  'Civil Lines', 'Arya Nagar', 'Panki', 'Dada Nagar', 'Barra', 'Naveen Market', 'Jajmau',
];

export default function KanpurAiConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="AI consulting · Kanpur"
          title="AI consultancy in Kanpur"
          highlight="that tells you where AI actually pays off."
          lead="Verelios Labs is an AI consultancy in Govind Nagar, Kanpur. We find the one or two jobs in your business where AI saves real time or money, put the plan on one page, and then build it. The first consultation is free."
          ctaLabel="Book a free AI consultation"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Kanpur', href: '/locations/kanpur' },
            { label: 'AI Consulting', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              {/* Front-loaded answer block (see .key-answer in globals.css). Every fact
                  here appears again further down the page. The GBP rating is
                  deliberately not repeated so this block never goes stale.
                  Keep it between 134 and 167 words. */}
              <div className="key-answer">
                <p>
                  Verelios Labs is an AI consultancy in Govind Nagar, Kanpur that helps local businesses work out where artificial intelligence will actually save time or money, and then builds it. It starts with a free first consultation, in person at the office or on a call, where we walk through how the work is done today. Within two to three days you get a one-page plan: which one or two processes are worth automating first, what the build would cost, what it would cost to run each month, and where AI will not pay off. If you go ahead, we build a free 48-hour proof-of-concept on your own data before you commit. Typical first projects are WhatsApp and website chatbots that answer in Hindi or English, invoice and document processing into Tally or an ERP, lead follow-up and reporting. Builds start at ₹49,999, are paid in milestones of 30%, 30% and 40%, and you own the code.
                </p>
              </div>

              <h2>What is AI consulting, and does your business need it?</h2>
              <p>
                AI consulting is advice on where and how to use artificial intelligence in a business: finding the right tasks, estimating the return, choosing the tools and planning the rollout, before money is spent on building. For a Kanpur manufacturer, trader, clinic or school it should be short and practical, not a three-month strategy project. The useful question is not &ldquo;how do we use AI?&rdquo; but <strong>&ldquo;which task costs us the most hours, and can a machine do it reliably?&rdquo;</strong>
              </p>
              <p>
                You probably need it if your team answers the same customer questions all day, copies numbers from invoices or WhatsApp messages into Tally or Excel, misses leads because nobody saw the message in time, or spends evenings building the same report. You probably do not need it yet if those jobs happen a few times a month. A good AI consultant tells you both, and we put the &ldquo;not yet&rdquo; list in writing.
              </p>

              <h2>What our AI consulting covers</h2>
            </Prose>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 16,
                margin: '28px 0 8px',
              }}
            >
              {COVERS.map(([title, desc]) => (
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
              <h2>Where AI usually pays off first for Kanpur businesses</h2>
              <p>
                These are the starting points we look at first in the consultation, by the kind of business Kanpur is full of. They are common patterns, not promises: the plan says which apply to you.
              </p>
              <ul>
                <li><strong>Leather and footwear exporters (Jajmau, Unnao):</strong> reading buyer purchase orders and shipping documents, drafting replies to overseas buyers, and tracking order status without chasing the factory floor.</li>
                <li><strong>Textile, hosiery and garment units:</strong> turning daily production and stock sheets into one report, and answering dealer questions about availability.</li>
                <li><strong>Manufacturers in Panki and Dada Nagar:</strong> camera-based defect checks on the line, maintenance logs that flag repeat faults, and dispatch paperwork.</li>
                <li><strong>Traders and distributors in Naveen Market and Collectorganj:</strong> WhatsApp orders turned into draft GST invoices in Tally, and reminders for regular customers who have not reordered.</li>
                <li><strong>Clinics and diagnostic labs:</strong> appointment booking and report-ready messages on WhatsApp, in Hindi or English.</li>
                <li><strong>Schools and coaching institutes:</strong> admission enquiries answered at night, fee reminders and attendance summaries for parents.</li>
              </ul>

              <h2>How an AI consultation works, step by step</h2>
              <ol>
                <li><strong>Day 1 — free consultation.</strong> In our Govind Nagar office, at yours, or on a call. We watch how the task is done today and note every step, trigger and exception.</li>
                <li><strong>Day 2–3 — one-page plan.</strong> What gets automated first, what it costs to build, what it costs to run each month, and what we recommend you leave alone. Fixed price before anything starts.</li>
                <li><strong>Free 48-hour proof-of-concept.</strong> A working slice on your own data, so you see the answer quality before you pay.</li>
                <li><strong>Build — usually two to six weeks.</strong> In a staging environment you can test against, with WhatsApp updates as each piece comes online.</li>
                <li><strong>Pilot.</strong> The AI runs alongside the manual process first, so you can trust its output before switching the old way off.</li>
                <li><strong>Handover and training.</strong> Your team learns to use and update it. You get the code, the workflows and the running-cost picture.</li>
                <li><strong>30 days of support.</strong> We tune prompts, fix edge cases and adjust as real data comes through.</li>
              </ol>

              <h2>AI consultant, AI agency, freelancer or do it yourself?</h2>
              <p>
                There are four common ways a Kanpur business gets AI help. Each suits someone; here is the honest trade-off.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Option</th><th>What you get</th><th>Main risk</th><th>Best for</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Advice-only AI consultant</td>
                      <td>A strategy report and recommendations</td>
                      <td>Nobody is responsible for building it, so the report sits in a drawer</td>
                      <td>Large companies with an in-house tech team</td>
                    </tr>
                    <tr>
                      <td>AI agency in Delhi, Noida or Bengaluru</td>
                      <td>A build, usually remote</td>
                      <td>Hard to meet, and many run one template page across dozens of cities</td>
                      <td>Projects that never need an in-person meeting</td>
                    </tr>
                    <tr>
                      <td>Freelancer</td>
                      <td>A quick, low-cost build</td>
                      <td>One person, so support stops if they get busy or move on</td>
                      <td>Small, one-off experiments</td>
                    </tr>
                    <tr>
                      <td>Do it yourself with ChatGPT or no-code tools</td>
                      <td>The cheapest start</td>
                      <td>Private data pasted into public tools, and fragile workflows nobody maintains</td>
                      <td>Testing an idea before spending money</td>
                    </tr>
                    <tr>
                      <td>Local consult-and-build team (Verelios Labs)</td>
                      <td>The plan, the build, the pilot and support from one Kanpur team</td>
                      <td>Best suited to focused projects rather than company-wide transformations</td>
                      <td>Kanpur businesses that want advice and a working result</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>What AI consulting costs in Kanpur</h2>
              <p>
                <strong>The first consultation and the one-page plan are free.</strong> If you go ahead, a focused AI chatbot or automation starts at <strong>₹49,999</strong>. Larger AI assistants, AI agents and multi-system workflows are quoted per project, typically <strong>₹1,50,000 to ₹10,00,000+</strong> depending on scope. Payments are milestone-based, 30% to start, 30% at mid-delivery and 40% at launch, and we tell you the monthly running cost before you commit, so there are no surprises after launch.
              </p>

              <h2>Questions to ask any AI consultant in Kanpur</h2>
              <ul>
                <li><strong>Will you also build it?</strong> Advice from someone who never has to make it work is cheap. Ask who is accountable for the result.</li>
                <li><strong>Can I see it working on my data first?</strong> A proof-of-concept on your own invoices, chats or sheets tells you more than any demo.</li>
                <li><strong>What will it cost to run each month?</strong> Model and hosting usage is a real bill. A serious consultant puts it in writing.</li>
                <li><strong>Where will my data go?</strong> Ask whether it stays on your own account, and whether you get an NDA.</li>
                <li><strong>What should I not use AI for?</strong> If the answer is &ldquo;nothing&rdquo;, keep looking.</li>
                <li><strong>Can I meet you?</strong> For a business in Kanpur, a team in Govind Nagar you can visit is easier to hold to account than a city name on a template page.</li>
              </ul>

              <h2>AI consulting across Kanpur</h2>
              <p>
                Our office is at 126/103-1, Nand Lal Chauraha, B Block, Govind Nagar, and we come to businesses across the city:
              </p>
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
                We also work with businesses in Unnao, Lucknow and across Uttar Pradesh, and remotely anywhere in India. Already know what you want built? Go straight to <Link href="/locations/kanpur/ai-development">AI development in Kanpur</Link>, or see the full capability on our <Link href="/services/ai-automation">AI automation</Link> page. New to the topic? Our <a href="/blog/ai-automation-for-indian-businesses-2026">practical guide to AI automation for Indian businesses</a> covers what to automate first and what it costs in INR, and our rundown of <a href="/blog/best-ai-development-companies-kanpur-2026">AI development companies in Kanpur</a> lists who else works locally.
              </p>

              <h2>Frequently asked questions</h2>
              {FAQS.map(([q, a]) => (
                <div key={q}>
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </Prose>
          </div>
        </section>

        <LocalTrustBlock reviews={REVIEWS} heading="What Kanpur clients say about working with us" />

        <ClosingCta
          defaultService="AI Consulting"
          heading="Find out where AI pays off in your business."
          body="Tell us the one task that eats the most hours in your week. The first consultation is free, the one-page plan follows in two to three days, and you are welcome to visit our Govind Nagar office any day."
        />
      </SubPageLayout>
    </>
  );
}
