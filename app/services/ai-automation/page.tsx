import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';
import { TrustStrip } from '@/components/sub-page/TrustStrip';
import { RelatedServices } from '@/components/sub-page/RelatedServices';
import { LOCAL_BUSINESS_REF } from '@/lib/schema';

const URL_PATH = '/services/ai-automation';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'AI Automation Company in India',
  description:
    'AI automation for Indian businesses — workflow automation, AI chatbots, document processing and integrations. Built on your stack, live in 2–6 weeks.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  openGraph: {
    title: 'AI Automation Company in India | Verelios Labs',
    description:
      'Custom AI automation — workflow automation, AI chatbots, document processing and AI integrations. Launched in 2–6 weeks.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — AI Automation Company in India' }],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'AI Automation',
  name: 'Custom AI Automation',
  description:
    'Custom AI automation for Indian businesses — workflow automation, AI chatbots and assistants, document processing, lead automation, and LLM integrations. Built on a modern TypeScript stack, end-to-end ownership.',
  provider: LOCAL_BUSINESS_REF,
  areaServed: { '@type': 'Country', name: 'India' },
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
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
    { '@type': 'ListItem', position: 3, name: 'AI Automation', item: `${SITE}${URL_PATH}` },
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
      name: 'What kinds of AI automation do you build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Workflow automations that connect the tools you already use, AI chatbots and support assistants trained on your own content, document and data processing (invoices, forms, PDFs, emails), lead capture and routing, and custom LLM features inside your existing product. If a task is repetitive and rule-based — or needs a model to read, write or classify text — it is usually automatable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an AI automation project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused single automation (for example a WhatsApp lead bot, or an invoice-to-spreadsheet pipeline) usually ships in 1–2 weeks. A larger AI assistant or a multi-step workflow across several systems takes 3–6 weeks. We share a fixed scope and timeline before we start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you use ready-made tools or build from scratch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both — whichever is cheaper and more reliable for your case. Some automations are fastest on Make / n8n / Zapier; others need custom code on Node.js / TypeScript with a model API (OpenAI, Anthropic, Gemini or an open model). We pick the approach that keeps your running cost low and hands you something you can maintain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does my data go, and is it secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Automations run on your accounts and your cloud, and we sign a mutual NDA before touching anything sensitive. Where it matters, we can use models that do not train on your data, or run open models so nothing leaves your infrastructure.',
      },
    },
  ],
};

export default function AIAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="AI automation · India"
          title="Custom AI automation"
          highlight="that does the boring work for you."
          lead="Verelios Labs builds custom AI automation for Indian businesses — workflow automation, AI chatbots, document processing, lead automation and LLM integrations. Built on the tools you already use, launched in 2–6 weeks."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'AI Automation', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>What we automate</h2>
              <p>
                Most businesses lose hours every day to work that a machine should be doing — copying data between apps, answering the same questions, reading invoices, chasing leads. We build automations that quietly take that work off your team&apos;s plate, on the tools you already use.
              </p>
              <p>
                The automations we ship most often:
              </p>
              <ul>
                <li><strong>Workflow automation</strong> — connect the apps you already use (CRM, sheets, email, WhatsApp, payments) so data flows automatically instead of being copied by hand.</li>
                <li><strong>AI chatbots &amp; assistants</strong> — support and sales bots trained on your own content, on your website or WhatsApp, that actually answer instead of deflecting.</li>
                <li><strong>Document &amp; data processing</strong> — read invoices, forms, PDFs and emails, pull out the fields you care about, and drop them into your system.</li>
                <li><strong>Lead capture &amp; routing</strong> — qualify, tag and route incoming leads to the right person instantly, with follow-ups that fire on their own.</li>
                <li><strong>LLM features inside your product</strong> — search, summaries, drafting and classification built directly into the app you already have.</li>
                <li><strong>Reporting &amp; alerts</strong> — scheduled summaries and threshold alerts so the right number reaches the right person without anyone pulling a report.</li>
              </ul>

              <h2>Why automate now</h2>
              <p>
                Automation used to mean a six-figure enterprise project. It doesn&apos;t any more. A well-scoped automation usually <strong>pays for itself in weeks</strong> by giving a person their day back — and unlike hiring, it works nights and weekends without complaint. The point isn&apos;t to replace your team; it&apos;s to stop them spending their best hours on copy-paste.
              </p>
              <p>
                A few signs a process is ready to automate:
              </p>
              <ul>
                <li>Someone re-types the same data from one app into another every day.</li>
                <li>Your team answers the same handful of customer questions over and over.</li>
                <li>Leads sit unanswered because no one saw the email in time.</li>
                <li>You&apos;re paying people to read documents and copy numbers into a sheet.</li>
              </ul>

              <h2>How an AI automation project runs</h2>
              <ol>
                <li><strong>Day 1 — map the process.</strong> We watch how the task is done today and write down every step, trigger and exception. No code yet.</li>
                <li><strong>Day 2–3 — scope &amp; quote.</strong> A one-pager of exactly what gets automated, what it costs to build, and what it costs to run each month. Fixed price before we start.</li>
                <li><strong>Week 1–4 — build.</strong> We build in a staging environment you can test against, with WhatsApp updates as each piece comes online.</li>
                <li><strong>Pilot.</strong> We run the automation alongside the manual process first, so you can trust the output before you switch off the old way.</li>
                <li><strong>Handover.</strong> You get the source / workflow, documentation, and a clear view of running costs. No black box.</li>
                <li><strong>+30 days support.</strong> We tune prompts, fix edge cases and adjust as your real data comes through.</li>
              </ol>

              <h2>The stack we build on</h2>
              <p>
                We pick the cheapest reliable path for each job — sometimes that&apos;s a no-code tool like <strong>Make, n8n or Zapier</strong>, sometimes it&apos;s custom <strong>Node.js / TypeScript</strong> code calling a model API (<strong>OpenAI, Anthropic, Gemini</strong>, or an open model you self-host). For assistants that need to answer from your own documents, we build <strong>retrieval (RAG)</strong> pipelines so answers stay grounded in your content. You always own what we build, and we keep running costs visible from day one.
              </p>

              <h2>Pricing for AI automation in India</h2>
              <p>
                A focused automation — one workflow or one bot — starts at <strong>₹49,999</strong>, with a fixed quote up front and milestone payments (30/30/40). Larger assistants and multi-system workflows are scoped per project. We&apos;ll always tell you the monthly running cost (model and hosting usage) before you commit, so there are no surprises after launch.
              </p>
              <p>
                Based in Kanpur and want to meet in person? See our dedicated <a href="/locations/kanpur/ai-development">AI development company in Kanpur</a> page — a real AI team in Govind Nagar you can sit across from.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>What kinds of AI automation do you build?</h3>
              <p>
                Workflow automations that connect the tools you already use, AI chatbots and support assistants trained on your own content, document and data processing (invoices, forms, PDFs, emails), lead capture and routing, and custom LLM features inside your existing product. If a task is repetitive and rule-based — or needs a model to read, write or classify text — it&apos;s usually automatable.
              </p>
              <h3>How long does an AI automation project take?</h3>
              <p>
                A focused single automation (for example a WhatsApp lead bot, or an invoice-to-spreadsheet pipeline) usually ships in 1–2 weeks. A larger AI assistant or a multi-step workflow across several systems takes 3–6 weeks. We share a fixed scope and timeline before we start.
              </p>
              <h3>Do you use ready-made tools or build from scratch?</h3>
              <p>
                Both — whichever is cheaper and more reliable for your case. Some automations are fastest on Make / n8n / Zapier; others need custom code on Node.js / TypeScript with a model API. We pick the approach that keeps your running cost low and hands you something you can maintain.
              </p>
              <h3>Where does my data go, and is it secure?</h3>
              <p>
                Automations run on your accounts and your cloud, and we sign a mutual NDA before touching anything sensitive. Where it matters, we can use models that don&apos;t train on your data, or run open models so nothing leaves your infrastructure.
              </p>
            </Prose>
          </div>
        </section>

        <TrustStrip />


        <RelatedServices exclude="ai-automation" />

        <ClosingCta
          heading="What could you automate first?"
          body="Tell us about one task your team repeats every day. We'll set up a free automation scoping call to map how to automate it, then follow up with a fixed quote."
        />
      </SubPageLayout>
    </>
  );
}
