import dynamic from 'next/dynamic';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

// Non-essential UI — load after paint, no SSR needed.
// (With static export, dynamic imports on content sections cause mobile
// hydration bursts without saving bytes, so we keep those static.)
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
