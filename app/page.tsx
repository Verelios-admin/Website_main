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
import { Toaster } from '@/components/ui/toaster';
import { CursorEffect } from '@/components/CursorEffect';
import { FloatingElements } from '@/components/FloatingElements';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { StickyCTA } from '@/components/StickyCTA';

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
