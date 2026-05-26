import type { Metadata } from 'next';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { Prose } from '@/components/sub-page/Prose';
import { ClosingCta } from '@/components/sub-page/ClosingCta';

const URL_PATH = '/services/ui-ux-design';
const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'UI/UX Design Services in India',
  description:
    'Conversion-focused UI/UX design for Indian businesses. Research, wireframes, prototypes and design systems. Figma mockup in 48 hours, no upfront payment.',
  alternates: { canonical: `${SITE}${URL_PATH}` },
  keywords: [
    'UI UX design services India',
    'UI UX design company India',
    'website design services India',
    'app UI design India',
    'product design India',
    'Figma design India',
    'design system India',
    'conversion-focused design',
    'startup design agency India',
    'UI UX design Pune',
    'UI UX design Mumbai',
    'UI UX design Bangalore',
  ],
  openGraph: {
    title: 'UI/UX Design Services in India | Verelios Labs',
    description:
      'Conversion-focused UI/UX design — research, wireframes, prototypes and design systems. Figma mockup in 48 hours.',
    url: `${SITE}${URL_PATH}`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs — UI/UX Design Services' }],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE}${URL_PATH}#service`,
  serviceType: 'UI/UX Design Services',
  name: 'UI/UX Design Services',
  description:
    'User research, wireframing, prototyping, visual design and design systems for Indian web and mobile products. Conversion-focused, hand-off-ready Figma files.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Verelios Labs',
    url: SITE,
    telephone: '+91-8471094125',
    email: 'contact@verelios.com',
    areaServed: { '@type': 'Country', name: 'India' },
  },
  areaServed: { '@type': 'Country', name: 'India' },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/#services` },
    { '@type': 'ListItem', position: 3, name: 'UI/UX Design', item: `${SITE}${URL_PATH}` },
  ],
};

export default function UiUxDesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="UI/UX design · India"
          title="Design that earns trust"
          highlight="on the first screen."
          lead="Verelios Labs designs interfaces for websites, mobile apps and internal tools — research, wireframes, prototypes, visual design and a design system you can hand to your engineering team. Figma mockup in 48 hours."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/#services' },
            { label: 'UI/UX Design', href: URL_PATH },
          ]}
        />

        <section className="tile" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
            <Prose>
              <h2>What we design</h2>
              <p>
                Every project starts with one question: what action do you want a user to take? Every screen, every component, every line of microcopy is designed in service of that. We don&apos;t do "decorate it nicely" work — we do work that measurably moves conversion, retention, or task-completion.
              </p>
              <p>
                What we ship most often:
              </p>
              <ul>
                <li><strong>Marketing-site design</strong> — homepage, services pages, pricing, contact. Conversion-focused, brand-coherent.</li>
                <li><strong>Mobile-app UI/UX</strong> — full screen library, onboarding, navigation patterns, micro-interactions.</li>
                <li><strong>SaaS / dashboard design</strong> — admin views, charts, tables, settings, role-based UIs.</li>
                <li><strong>Design systems</strong> — Figma components + tokens + documentation your engineers can hand-off without ambiguity.</li>
                <li><strong>Redesigns</strong> — auditing an existing product, identifying friction, redesigning the high-impact screens.</li>
                <li><strong>Brand identity</strong> — logo, type system, colour palette, brand book (for projects starting from zero).</li>
              </ul>

              <h2>Our design process</h2>
              <ol>
                <li><strong>Discovery (1–3 days)</strong> — understand the business, users, competitors. Map the key user journeys.</li>
                <li><strong>Wireframes (2–4 days)</strong> — low-fidelity layouts of every key screen. Focus on hierarchy, not visuals.</li>
                <li><strong>Visual design (4–7 days)</strong> — high-fidelity Figma mockups. Brand applied, every component pixel-perfect.</li>
                <li><strong>Prototype (1–2 days)</strong> — clickable Figma prototype so you can walk through the full flow on your phone before any code is written.</li>
                <li><strong>Design system (2–3 days)</strong> — tokens, components, variants, naming. Ready for engineering hand-off.</li>
                <li><strong>Iteration (ongoing)</strong> — we revise until you sign off. No "design feels done" stopping until you say so.</li>
              </ol>

              <h2>What you get</h2>
              <ul>
                <li><strong>Figma file</strong> with every screen, every state (empty, loading, error, success).</li>
                <li><strong>Design tokens</strong> — colour, type, spacing, radius, shadow — exportable to CSS / Tailwind / Style Dictionary.</li>
                <li><strong>Component library</strong> — buttons, inputs, cards, modals — with auto-layout and variants so engineers build, not improvise.</li>
                <li><strong>Clickable prototype</strong> — share via link, run usability tests with real users.</li>
                <li><strong>Hand-off doc</strong> — interaction notes, breakpoints, motion specs.</li>
              </ul>

              <h2>Design + Build, in one team</h2>
              <p>
                Most clients ship design AND build with us in the same engagement — the same team designs in Figma, then implements in code. That eliminates the usual "design hands off to engineering, engineering re-interprets, things break" disconnect. If you only need design, we hand off to your engineering team with full documentation. If you want both, see <a href="/services/website-development">website development</a> or <a href="/services/mobile-app-development">app development</a>.
              </p>

              <h2>Pricing</h2>
              <p>
                A focused design engagement (5–8 screens, design system, prototype) starts at <strong>₹40,000</strong>. Larger product systems (20+ screens, multiple flows, advanced components) land between <strong>₹1,00,000 and ₹3,00,000</strong>.
              </p>

              <h2>Frequently asked questions</h2>
              <h3>What does "conversion-focused" actually mean?</h3>
              <p>
                It means we design with measurable success in mind — a target conversion rate, a target task-completion time, a target user-satisfaction score. We use established best practice (Apple HIG, Material guidelines, NN/g research) but tailor everything to your specific audience and goal.
              </p>
              <h3>Do you do brand identity / logos?</h3>
              <p>
                For projects where it makes sense (e.g. you&apos;re a new startup with no brand). We don&apos;t do "logo only" engagements — we do brand as part of a product design.
              </p>
              <h3>Can you redesign an existing product?</h3>
              <p>
                Absolutely. We start with an audit — what works, what doesn&apos;t, where users are dropping off — and redesign the high-impact screens. Often we leave 60–70% of the product alone and focus on the screens that actually move metrics.
              </p>
            </Prose>
          </div>
        </section>

        <ClosingCta
          heading="Start with a free 48-hour mockup"
          body="Send us a two-line description of the product. We'll come back with a designed homepage / key screen in 48 hours, free, no commitment."
        />
      </SubPageLayout>
    </>
  );
}
