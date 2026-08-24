import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { LocalTrustBlock, GBP_URL, SOCIAL_LINKS, LocalReview } from '@/components/sub-page/LocalTrustBlock';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/locations/kanpur/ai-development';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'AI Development Company in Kanpur',
  description:
    'Verelios Labs builds AI agents, chatbots, ML models & workflow automation in Govind Nagar, Kanpur. Free 48-hour proof-of-concept. Rated 5.0★.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'AI Development Company in Kanpur — Agents, Chatbots & Automation | Verelios Labs',
    description:
      'AI agents, chatbots, machine learning and workflow automation built in Govind Nagar, Kanpur. Free 48-hour proof-of-concept, milestone payments, meet us in person. Rated 5.0★.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — AI Development Company in Kanpur' }],
  },
};

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

// Page-specific LocalBusiness schema for this Kanpur AI landing page.
// NOTE: this page deliberately declares NO ProfessionalService/LocalBusiness node.
// The single canonical business entity lives on the homepage as
// `${SITE}/#localbusiness`; every other page references it by @id. Declaring a
// parallel copy here (with its own @id, NAP and self-rating) fragmented one real
// business into six schema entities and multiplied the same 53 reviews six-fold.
// Reference the canonical @id instead of re-declaring.

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'AI Development',
  name: 'AI Development Company in Kanpur',
  description:
    'Custom AI development in Kanpur — AI agents, chatbots, generative AI, machine learning models, computer vision and workflow automation, built for Kanpur businesses on a modern stack. You own the code.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'City', name: 'Kanpur' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: 'INR', minPrice: 49999 },
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Kanpur', item: `${SITE}/locations/kanpur` },
    { '@type': 'ListItem', position: 3, name: 'AI Development', item: `${SITE}${URL_PATH}` },
  ],
};

// Mirrors the visible "Frequently asked questions" Q&A below, verbatim.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does AI development cost in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused AI chatbot or automation trained on your own content starts at ₹49,999. Larger builds — custom machine-learning models, computer vision, multi-step AI agents or deep system integrations — typically range from ₹1,50,000 to ₹10,00,000+ depending on scope. We share a fixed quote after a free scoping call, and a free 48-hour proof-of-concept before you commit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of AI can you build for a Kanpur business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI chatbots and WhatsApp assistants, AI agents that complete multi-step tasks, document and invoice processing, computer-vision quality inspection for Kanpur factories, demand forecasting and predictive analytics, recommendation engines, voice AI in Hindi and English, and custom machine-learning models trained on your own data. Everything runs on a modern stack and you own the code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will an AI model use my private business data safely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We ground AI on your own documents using retrieval (RAG) so it answers from your real information rather than making things up, and we can deploy on private or on-premise infrastructure so sensitive data never leaves your control. You own the code and the data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we meet the AI team in person in Kanpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Unlike out-of-town template companies that run the same AI page across 60 cities, we are a real Kanpur AI team in Govind Nagar you can sit across from. Visit our office, or we can come to you anywhere in Kanpur — Kakadeo, Swaroop Nagar, Kidwai Nagar, Panki, Barra and beyond.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an AI project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A chatbot or a single automation typically ships in 2–4 weeks. A custom machine-learning model or a multi-step AI agent integrated with your systems usually takes 4–10 weeks. We start with a free 48-hour proof-of-concept so you can see it working before the full build.',
      },
    },
  ],
};

const AI_SERVICES = [
  ['AI chatbots & WhatsApp assistants', 'Bots trained on your own catalogue, pricing and FAQs that answer customers instantly in Hindi or English and capture every lead — on your website and on WhatsApp, where Kanpur customers already are.'],
  ['AI agents', 'Agents that don’t just chat but do the work — checking stock, drafting quotes, updating records and completing multi-step tasks across your tools without a human clicking through every screen.'],
  ['Document & invoice automation', 'AI that reads invoices, purchase orders, GST documents and forms, extracts the data and pushes it into your ERP or Tally — turning a full day of manual entry into minutes.'],
  ['Computer vision for factories', 'Quality inspection, defect detection and counting on the production line for Kanpur’s manufacturing, leather and textile units — cameras plus a trained model that never gets tired.'],
  ['Predictive analytics & forecasting', 'Demand forecasting, inventory optimisation and sales prediction models trained on your own history, so you stock and staff for what’s actually coming.'],
  ['Custom machine-learning models', 'Recommendation engines, scoring, classification and clustering models built for your specific data and problem — not an off-the-shelf tool you have to bend your business around.'],
  ['Generative AI & content tools', 'Internal tools that draft, summarise and translate — product descriptions, replies, reports — grounded in your brand voice and your real information.'],
  ['Voice AI & call automation', 'Hindi and English voice assistants that handle routine calls, bookings and follow-ups, freeing your team for the conversations that need a person.'],
  ['AI-powered search & knowledge base', 'A single place your team can ask questions and get grounded answers from your own manuals, policies and records — no more hunting through folders.'],
  ['AI integration & consulting', 'Not sure where AI actually helps? We audit your workflows, find the one or two processes worth automating first, and tell you honestly where AI won’t pay off.'],
];

const KANPUR_AREAS = [
  'Govind Nagar', 'Kakadeo', 'Swaroop Nagar', 'Kidwai Nagar', 'Kalyanpur',
  'Civil Lines', 'Arya Nagar', 'Panki', 'Barra', 'Naveen Market', 'Shastri Nagar', 'Ratan Lal Nagar',
];

export default function KanpurAiDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="AI development · Kanpur"
          title="An AI development company in Kanpur"
          highlight="you can actually sit across from."
          lead="Verelios Labs is an AI development company based in Govind Nagar, Kanpur — building AI agents, chatbots, machine-learning models and workflow automation for local businesses. Free 48-hour proof-of-concept, milestone payments, and a team you can meet in person. Rated 5.0★ by our clients."
          ctaLabel="Get a free AI proof-of-concept"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Kanpur', href: '/locations/kanpur' },
            { label: 'AI Development', href: URL_PATH },
          ]}
        />

        <LocalTrustBlock reviews={REVIEWS} heading="What our Kanpur AI clients say" />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 40 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>The AI development company in Kanpur that actually builds it here</h2>
              <p>
                Here&apos;s the awkward truth about &ldquo;AI companies in Kanpur&rdquo;: search for one and you&apos;ll mostly meet firms sitting in Delhi or Bengaluru, quietly cloning a single landing page across dozens of cities and dropping &ldquo;Kanpur&rdquo; into the blanks. <strong>Verelios Labs is different: we&apos;re a real AI development company based in Govind Nagar, Kanpur.</strong> You can visit our office, sit across the table, and watch your AI agent or chatbot work before you pay for the full build. For a Kanpur manufacturer, trader, clinic, school or shop, that local presence is the difference between an AI project you hope goes well and one you can actually steer.
              </p>
              <p>
                Being local doesn&apos;t mean behind the curve. We build on the same modern AI stack the best product teams in the world use — large language models, retrieval-augmented generation (RAG), fine-tuned machine-learning models, computer vision and agent frameworks — and we hand you code and models you own outright. Kanpur pricing, world-class AI engineering.
              </p>

              <h2>Why your Kanpur business needs AI in 2026</h2>
              <p>
                AI stopped being a science-fiction word this year and became a practical tool that quietly does work. For businesses across Kanpur — from the leather and textile units of Jajmau and Panki to traders in Naveen Market and clinics in Swaroop Nagar — the opportunity is the same: <strong>take the repetitive, after-hours and error-prone work off people, and let them focus on customers and growth.</strong>
              </p>
              <p>
                The Kanpur businesses winning with AI right now aren&apos;t doing anything exotic. They&apos;re answering customer messages instantly at midnight with a chatbot, reading a stack of invoices in minutes instead of a day, catching defects on the production line with a camera, and forecasting demand so they don&apos;t over- or under-stock. None of that requires a data-science department — it requires one AI development partner in Kanpur who understands your workflow and ships something that works.
              </p>
              <ul>
                <li><strong>Meet us in person</strong> — a real AI team in Govind Nagar, not a remote template company that vanishes after launch.</li>
                <li><strong>Free 48-hour proof-of-concept</strong> — see your AI agent or chatbot working on your own data before you pay a rupee.</li>
                <li><strong>Milestone payments</strong> — 30% to start, 30% at mid-delivery, 40% at launch. You pay as you see it work.</li>
                <li><strong>Rated 5.0★</strong> across 53 client reviews, with AI work you can actually try.</li>
                <li><strong>You own everything</strong> — the code, the models and the data stay yours, deployable on your own infrastructure. No lock-in.</li>
                <li><strong>Open 24 hours, every day</strong>, with a real human on WhatsApp.</li>
              </ul>

              <h2>AI development services we offer in Kanpur</h2>
              <p>
                Whether you run a factory in Panki, a shop in Naveen Market, a clinic in Swaroop Nagar or a startup out of a bedroom in Kakadeo, here&apos;s the AI we build for Kanpur businesses:
              </p>
            </Prose>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 16,
                margin: '28px 0 8px',
              }}
            >
              {AI_SERVICES.map(([title, desc]) => (
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
              <h2>How we run an AI project in Kanpur, step by step</h2>
              <p>
                Good AI projects don&apos;t start with the technology — they start with the problem. Here&apos;s the process we run on every AI build for a Kanpur business:
              </p>
              <ol>
                <li><strong>Discovery &amp; requirement gathering.</strong> We sit with you — in our Govind Nagar office or yours — to understand the exact task you want AI to take on and what &ldquo;working&rdquo; looks like for you.</li>
                <li><strong>Feasibility &amp; scoping.</strong> We tell you honestly whether AI is the right tool, which approach fits (chatbot, agent, ML model, computer vision), and what data it needs.</li>
                <li><strong>Free 48-hour proof-of-concept.</strong> We build a working slice on your real data so you can see it in action before committing to the full project.</li>
                <li><strong>Model build &amp; grounding.</strong> We develop and, where needed, fine-tune the model, grounding it in your own documents so answers are accurate, not invented.</li>
                <li><strong>Integration.</strong> We connect the AI to where you actually work — WhatsApp, your website, your ERP, Tally, your CRM — so it fits your day, not the other way round.</li>
                <li><strong>Testing &amp; evaluation.</strong> We run it against the real questions and cases your business faces, measure accuracy, and tune until it&apos;s reliable.</li>
                <li><strong>Launch &amp; training.</strong> We deploy it, hand over ownership, and train your team to use and update it.</li>
                <li><strong>Monitoring &amp; improvement.</strong> Real usage reveals gaps; we monitor, refine and keep the model current so it stays accurate as your business changes.</li>
              </ol>

              <h2>How to choose the best AI development company in Kanpur</h2>
              <p>
                AI is easy to sell and hard to do well. If you&apos;re comparing AI development companies in Kanpur, these are the questions that separate a real partner from a reseller of someone else&apos;s tool:
              </p>
              <ul>
                <li><strong>Are they actually in Kanpur?</strong> Can you visit their office and meet the people building your AI, or is it a template page pointed at your city? A local team you can sit with is far easier to hold accountable.</li>
                <li><strong>Will they show you a proof-of-concept first?</strong> A serious AI company will build a working slice on your data before asking for the full budget. If they can&apos;t demo it, be cautious.</li>
                <li><strong>Do they ground the AI in your data?</strong> Ask how they stop the model making things up. &ldquo;Retrieval from your own documents&rdquo; is the right answer.</li>
                <li><strong>Do you own the code and models?</strong> Insist on owning what you pay for, with the option to run it on your own infrastructure. Avoid lock-in.</li>
                <li><strong>Do they measure accuracy?</strong> Good AI teams evaluate against real cases and share the numbers — they don&apos;t just say &ldquo;it works.&rdquo;</li>
                <li><strong>Will they tell you when NOT to use AI?</strong> The best partner sometimes says a simpler tool is cheaper and better. Honesty about limits is a green flag.</li>
              </ul>

              <h2>The AI stack we build on</h2>
              <p>
                We choose tools that are proven, portable and yours to keep:
              </p>
              <ul>
                <li><strong>Language models:</strong> OpenAI, Anthropic Claude, Google Gemini, and open-source models (Llama, Mistral) for private or on-premise deployment.</li>
                <li><strong>Retrieval &amp; grounding (RAG):</strong> vector databases (Pinecone, Weaviate, pgvector), so AI answers from your real content.</li>
                <li><strong>Machine learning:</strong> Python, PyTorch, TensorFlow, scikit-learn for custom and fine-tuned models.</li>
                <li><strong>Computer vision:</strong> OpenCV, YOLO and custom-trained models for inspection and detection.</li>
                <li><strong>Agents &amp; orchestration:</strong> LangChain, LlamaIndex and custom agent frameworks for multi-step tasks.</li>
                <li><strong>Engineering &amp; deployment:</strong> Next.js, Node.js, TypeScript, Docker; hosted on your cloud (AWS, GCP, Azure) or on-premise in Kanpur.</li>
              </ul>

              <h2>AI trends Kanpur businesses should watch</h2>
              <p>
                A few shifts are worth knowing as you plan: <strong>AI agents</strong> that complete whole tasks rather than just answering questions; <strong>on-device and private-cloud models</strong> that keep sensitive data in your control; <strong>multimodal AI</strong> that reads images, documents and voice together; and <strong>vertical AI</strong> tuned for specific industries like manufacturing and retail. We keep the Kanpur businesses we work with ahead of these curves without chasing hype that doesn&apos;t pay off.
              </p>

              <h2>Where we build AI across Kanpur</h2>
              <p>
                Our office is in Govind Nagar, but we work with businesses right across the city and can come to you:
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
                We also serve clients in Lucknow, Unnao and across Uttar Pradesh — and founders all over India. Not in Kanpur? Everything we do works remotely too, with the same free 48-hour proof-of-concept and milestone payments. See our national <Link href="/services/ai-automation">AI automation</Link> page for the full capability. Prefer to start with something simpler? See our <Link href="/locations/kanpur/website-development">website development in Kanpur</Link> and <Link href="/locations/kanpur/mobile-app-development">app development in Kanpur</Link> pages, or the full <Link href="/locations/kanpur">software company in Kanpur</Link> overview.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>How much does AI development cost in Kanpur?</h3>
              <p>
                A focused AI chatbot or automation trained on your own content starts at <strong>₹49,999</strong>. Larger builds — custom machine-learning models, computer vision, multi-step AI agents or deep system integrations — typically range from <strong>₹1,50,000 to ₹10,00,000+</strong> depending on scope. We share a fixed quote after a free scoping call, and a free 48-hour proof-of-concept before you commit.
              </p>
              <h3>What kinds of AI can you build for a Kanpur business?</h3>
              <p>
                AI chatbots and WhatsApp assistants, AI agents that complete multi-step tasks, document and invoice processing, computer-vision quality inspection for Kanpur factories, demand forecasting and predictive analytics, recommendation engines, voice AI in Hindi and English, and custom machine-learning models trained on your own data. Everything runs on a modern stack and you own the code.
              </p>
              <h3>Will an AI model use my private business data safely?</h3>
              <p>
                Yes. We ground AI on your own documents using retrieval (RAG) so it answers from your real information rather than making things up, and we can deploy on private or on-premise infrastructure so sensitive data never leaves your control. You own the code and the data.
              </p>
              <h3>Can we meet the AI team in person in Kanpur?</h3>
              <p>
                Absolutely. Unlike out-of-town template companies that run the same AI page across 60 cities, we&apos;re a real Kanpur AI team in Govind Nagar you can sit across from. Visit our office, or we can come to you anywhere in Kanpur — Kakadeo, Swaroop Nagar, Kidwai Nagar, Panki, Barra and beyond.
              </p>
              <h3>How long does an AI project take?</h3>
              <p>
                A chatbot or a single automation typically ships in <strong>2–4 weeks</strong>. A custom machine-learning model or a multi-step AI agent integrated with your systems usually takes <strong>4–10 weeks</strong>. We start with a free 48-hour proof-of-concept so you can see it working before the full build.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          defaultService="Custom Software / CRM / ERP"
          heading="Let's build your AI, in Kanpur."
          body="Tell us the one task you'd most like to take off your team's plate. We'll tell you honestly whether AI is the right fit, build a free 48-hour proof-of-concept, and send a fixed quote — and you're welcome to visit our Govind Nagar office any day."
        />
      </SubPageLayout>
    </>
  );
}
