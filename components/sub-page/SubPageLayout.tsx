import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';

/**
 * Shared wrapper for sub-pages (/services/*, /blog/*, /locations/*).
 * Reuses Navigation + Footer so every new SEO page has identical chrome.
 */
export function SubPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      id="main-content"
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(120% 60% at 50% 0%, rgba(41,151,255,0.10) 0%, transparent 55%), linear-gradient(180deg, #0a0a0c 0%, #131316 100%)',
        color: '#fff',
      }}
    >
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}

export default SubPageLayout;
