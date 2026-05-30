import dynamic from 'next/dynamic';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';

// Below-the-fold sections — server-rendered into the HTML (good for SEO),
// but their JavaScript chunks are split out and load after the hero, so
// the main thread is free during the FCP/LCP window on mobile.
const TrustedBy     = dynamic(() => import('@/components/sections/TrustedBy'));
const Services      = dynamic(() => import('@/components/sections/Services'));
const Industries    = dynamic(() => import('@/components/sections/Industries'));
const Portfolio     = dynamic(() => import('@/components/sections/Portfolio'));
const Process       = dynamic(() => import('@/components/sections/Process'));
const About         = dynamic(() => import('@/components/sections/About'));
const Studio        = dynamic(() => import('@/components/sections/Studio'));
const Pricing       = dynamic(() => import('@/components/sections/Pricing'));
const Testimonials  = dynamic(() => import('@/components/sections/Testimonials'));
const FAQ           = dynamic(() => import('@/components/sections/FAQ'));
const Contact       = dynamic(() => import('@/components/sections/Contact'));
const Footer        = dynamic(() => import('@/components/sections/Footer'));

// Client-only UI — loaded after paint, no SSR needed.
const Toaster        = dynamic(() => import('@/components/ui/toaster'), { ssr: false });
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), { ssr: false });
const StickyCTA      = dynamic(() => import('@/components/StickyCTA'), { ssr: false });
// Removed: ScrollProgress, CursorGlow — both read as "generic AI portfolio
// template" tricks. Real-business sites don't have them.

export default function Home() {
  return (
    <main id="home">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Services />
      <Industries />
      <Portfolio />
      <Process />
      <About />
      <Studio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
      <Toaster />
    </main>
  );
}
