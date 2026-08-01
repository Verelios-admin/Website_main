import type { Metadata } from 'next';
import Link from 'next/link';
import { SubPageLayout } from '@/components/sub-page/SubPageLayout';
import { PageHero } from '@/components/sub-page/PageHero';
import { ClosingCta } from '@/components/sub-page/ClosingCta';

const SITE = 'https://www.verelios.com';

export const metadata: Metadata = {
  title: 'Web & App Development Blog — India',
  description:
    'Honest guides on custom website & app development in India — pricing, timelines, stack choices and how to pick an agency. Written by the Verelios Labs team.',
  alternates: { canonical: `${SITE}/blog` },
  // Own Open Graph so sharing /blog no longer shows the homepage card.
  openGraph: {
    title: 'Blog — Web & App Development Insights | Verelios Labs',
    description:
      'Honest guides on custom website & app development in India — pricing, timelines, stack choices and how to pick an agency.',
    url: `${SITE}/blog`,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Verelios Labs',
    images: [{ url: '/logo.webp', width: 1200, height: 630, alt: 'Verelios Labs Blog' }],
  },
};

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${SITE}/blog#blog`,
  url: `${SITE}/blog`,
  name: 'Verelios Labs Blog',
  publisher: { '@type': 'Organization', name: 'Verelios Labs', url: SITE },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
  ],
};

const posts = [
  {
    slug: 'best-ai-development-companies-kanpur-2026',
    title: 'Best AI development companies in Kanpur (2026)',
    excerpt:
      'AI is the newest and thinnest field in Kanpur’s tech scene. An honest look at who’s actually building AI locally — and how to tell a real partner from a reseller.',
    readTime: '7 min read',
    date: '2026-07-17',
  },
  {
    slug: 'best-website-development-companies-kanpur-2026',
    title: 'Best website development companies in Kanpur (2026)',
    excerpt:
      'A fair, up-to-date roundup of the website development companies worth knowing in Kanpur this year — what each does well, and the questions that help you choose.',
    readTime: '7 min read',
    date: '2026-07-17',
  },
  {
    slug: 'best-app-development-companies-kanpur-2026',
    title: 'Best mobile app development companies in Kanpur (2026)',
    excerpt:
      'Who builds iOS and Android apps well in Kanpur in 2026, and how to pick the right partner for a product you’ll maintain for years.',
    readTime: '7 min read',
    date: '2026-07-17',
  },
  {
    slug: 'best-erp-software-companies-kanpur-2026',
    title: 'Best ERP software companies in Kanpur (2026)',
    excerpt:
      'Kanpur runs on manufacturing and trade, and ERP is how the good units stay in control. Who builds ERP locally, custom vs off-the-shelf, and how to choose.',
    readTime: '7 min read',
    date: '2026-07-17',
  },
  {
    slug: 'ai-automation-for-indian-businesses-2026',
    title: 'AI automation for Indian businesses (2026)',
    excerpt:
      'A no-hype guide to AI automation — what to automate first, what it actually costs in INR, and how to tell if a process in your business is ready for it.',
    readTime: '9 min read',
    date: '2026-06-26',
  },
  {
    slug: 'ai-chatbot-for-business-india',
    title: 'Should your business get an AI chatbot?',
    excerpt:
      'What a good AI chatbot actually does in 2026, what it costs to build and run in India, where they go wrong, and a simple test for whether you need one.',
    readTime: '8 min read',
    date: '2026-06-26',
  },
  {
    slug: 'custom-website-development-cost-india-2026',
    title: 'Custom website development cost in India (2026)',
    excerpt:
      'An honest, no-fluff guide to what custom websites actually cost in India — ranges, what drives the price up, and what to expect at each budget tier.',
    readTime: '8 min read',
    date: '2026-05-26',
  },
  {
    slug: 'how-to-choose-web-development-agency-india',
    title: 'How to choose a web development agency in India',
    excerpt:
      'Ten questions that separate good agencies from cheap ones. The red flags to watch for, the green flags worth paying more for, and the trade-offs that matter.',
    readTime: '7 min read',
    date: '2026-05-26',
  },
  {
    slug: 'how-we-ship-websites-in-3-weeks',
    title: 'How we ship custom websites in under 3 weeks',
    excerpt:
      'The exact 21-day process we run on every website project — tools, tight feedback loops, and the principle that "no" is a feature.',
    readTime: '6 min read',
    date: '2026-05-26',
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SubPageLayout>
        <PageHero
          eyebrow="Verelios blog"
          title="Honest guides for"
          highlight="Indian founders."
          lead="Pricing, timelines, stack choices and how to pick the right development partner. No fluff, no marketing-speak. Written by the team that ships the work."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
          ]}
          ctaLabel="Get a free mockup"
        />

        <section className="tile" style={{ paddingTop: 16, paddingBottom: 64 }}>
          <div
            className="wrap"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 24,
              maxWidth: 1100,
              margin: '0 auto',
            }}
          >
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                style={{
                  display: 'block',
                  padding: 28,
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none',
                  color: '#fff',
                  transition: 'transform 220ms ease, border-color 220ms ease, background 220ms ease',
                }}
                className="blog-card"
              >
                <div
                  style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {p.readTime} · Verelios Labs
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 600,
                    letterSpacing: '-0.015em',
                    margin: '14px 0 12px',
                    color: '#fff',
                  }}
                >
                  {p.title}
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-text)',
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0,
                  }}
                >
                  {p.excerpt}
                </p>
                <div
                  style={{
                    marginTop: 18,
                    fontSize: 14,
                    color: '#2997ff',
                    fontWeight: 500,
                  }}
                >
                  Read article →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <ClosingCta heading="Got a project in mind?" />

      </SubPageLayout>
    </>
  );
}
