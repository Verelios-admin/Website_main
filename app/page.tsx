import dynamic from 'next/dynamic';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';

// Below-fold: code-split so initial JS bundle stays small.
// ssr stays on (default) so static export still pre-renders HTML for SEO.
const Process = dynamic(() => import('@/components/sections/Process'));
const About = dynamic(() => import('@/components/sections/About'));
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const Pricing = dynamic(() => import('@/components/sections/Pricing'));
const FAQ = dynamic(() => import('@/components/sections/FAQ'));
const Contact = dynamic(() => import('@/components/sections/Contact'));
const Footer = dynamic(() => import('@/components/sections/Footer'));

// Non-essential UI — load after paint, no SSR needed
const Toaster = dynamic(() => import('@/components/ui/toaster'), { ssr: false });
const CursorEffect = dynamic(() => import('@/components/CursorEffect'), { ssr: false });
const FloatingElements = dynamic(() => import('@/components/FloatingElements'), { ssr: false });
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), { ssr: false });
const StickyCTA = dynamic(() => import('@/components/StickyCTA'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen" id="home">
      <CursorEffect />
      <FloatingElements />
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <About />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
      <Toaster />
    </main>
  );
}
