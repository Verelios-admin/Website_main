'use client';

import { useGsap } from '@/hooks/useGsap';
import { trackGoogleAdsLead } from '@/lib/gtag';
import { trackMetaLead } from '@/components/MetaPixel';

/* --------------------------------------------------------------
   Helpers — word + char wrappers that animate cleanly.
   The outer span is inline-block / overflow hidden so the inner
   span can mask-slide from below. Spaces between siblings (placed
   in JSX as `{' '}` between sibling elements) survive the masking.
   -------------------------------------------------------------- */
function Word({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className="hero-word"
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        lineHeight: 1.06,
        paddingBottom: '0.08em',
      }}
    >
      <span
        className="hero-word-inner"
        style={{
          display: 'inline-block',
          willChange: 'transform',
          ...(accent
            ? {
                backgroundImage: 'linear-gradient(135deg, #2997ff 0%, #7cc1ff 60%, #b794ff 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }
            : {}),
        }}
      >
        {children}
      </span>
    </span>
  );
}

export function Hero() {
  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    // Entrance animations run as CSS keyframes (see <style jsx> below) — they
    // start at first paint with no late-frame snap from a deferred JS callback,
    // which keeps Cumulative Layout Shift at zero. GSAP only drives the
    // *continuous* loops (rings, glow, card bobs) and the mouse parallax —
    // none of which run until well after the LCP measurement window.

    // Orbital rings — keep rotating behind the devices
    gsap.to('.ring-outer', {
      rotation: 360, duration: 60, repeat: -1, ease: 'none', transformOrigin: '50% 50%',
    });
    gsap.to('.ring-mid', {
      rotation: -360, duration: 45, repeat: -1, ease: 'none', transformOrigin: '50% 50%',
    });
    gsap.to('.ring-inner', {
      rotation: 360, duration: 32, repeat: -1, ease: 'none', transformOrigin: '50% 50%',
    });
    gsap.to('.ring-dot', {
      rotation: 360, duration: 8, repeat: -1, ease: 'none', transformOrigin: '50% 50%',
    });

    // Breathing core glow
    gsap.to('.orb-glow', {
      scale: 1.15, opacity: 0.85, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut',
    });

    // Subtle device float
    gsap.to('.device-laptop', {
      y: -6, duration: 4.5, yoyo: true, repeat: -1, ease: 'sine.inOut',
    });
    gsap.to('.device-phone', {
      y: -10, duration: 3.5, yoyo: true, repeat: -1, ease: 'sine.inOut',
    });

    // Laptop screen: cards stagger in, hold, fade out, restart
    const laptopLoop = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
    laptopLoop
      .set('.lc-card', { opacity: 0, y: 8 })
      .to('.lc-card', { opacity: 1, y: 0, duration: 0.55, stagger: 0.12, ease: 'expo.out' })
      .to({}, { duration: 1.6 })
      .to('.lc-card', { opacity: 0, y: -6, duration: 0.45, stagger: 0.06, ease: 'expo.in' });

    // Progress bar fills + retracts
    gsap.fromTo(
      '.lc-progress-fill',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        transformOrigin: 'left center',
      }
    );

    // Typing-cursor blink on the address bar
    gsap.to('.lc-caret', {
      opacity: 0,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: 'steps(1)',
    });

    // Phone screen: list items slide in, hold, slide out
    const phoneLoop = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
    phoneLoop
      .set('.pc-row', { opacity: 0, x: -16 })
      .to('.pc-row', { opacity: 1, x: 0, duration: 0.55, stagger: 0.14, ease: 'expo.out' })
      .to({}, { duration: 1.8 })
      .to('.pc-row', { opacity: 0, x: 12, duration: 0.4, stagger: 0.06, ease: 'expo.in' });

    // Phone bottom-tab active dot — slides across tabs
    gsap.fromTo(
      '.pc-tab-indicator',
      { x: 0 },
      {
        x: 56,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'expo.inOut',
      }
    );

    // Phone notification badge — soft pulse
    gsap.to('.pc-badge', {
      scale: 1.15,
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      transformOrigin: '50% 50%',
    });

    // Subtle background drift
    gsap.to('.amb-1', { x: 30, y: -20, duration: 14, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    gsap.to('.amb-2', { x: -40, y: 20, duration: 18, yoyo: true, repeat: -1, ease: 'sine.inOut' });

    // Mouse parallax — runs only on devices with a real pointer
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      const sceneEl = scope.querySelector('.hero-scene') as HTMLElement | null;
      if (sceneEl) {
        const onMove = (e: MouseEvent) => {
          const r = sceneEl.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const dx = (e.clientX - cx) / r.width;
          const dy = (e.clientY - cy) / r.height;

          gsap.to('.parallax-1', { x: dx * 14, y: dy * 14, duration: 0.8, ease: 'power3.out' });
          gsap.to('.parallax-2', { x: dx * -22, y: dy * -18, duration: 0.9, ease: 'power3.out' });
          gsap.to('.parallax-3', { x: dx * 10, y: dy * 12, duration: 1.0, ease: 'power3.out' });
          gsap.to('.parallax-4', { x: dx * -8, y: dy * 8, duration: 1.0, ease: 'power3.out' });
          gsap.to('.rings-rig', { x: dx * 6, y: dy * 6, duration: 1.2, ease: 'power3.out' });
          gsap.to('.device-laptop', {
            rotateY: dx * 6,
            rotateX: dy * -4,
            duration: 0.9,
            ease: 'power3.out',
          });
          gsap.to('.device-phone', {
            rotateY: dx * 10,
            rotateX: dy * -6,
            x: dx * 8,
            duration: 0.9,
            ease: 'power3.out',
          });
        };
        window.addEventListener('mousemove', onMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMove);
      }
    }
  });

  return (
    <section
      ref={ref}
      id="top"
      aria-label="Website and app development agency in India — Verelios Labs"
      className="hero-section"
      style={{
        position: 'relative',
        background:
          'radial-gradient(120% 80% at 85% 0%, rgba(41,151,255,0.16) 0%, transparent 55%), radial-gradient(80% 60% at 10% 100%, rgba(124,58,237,0.14) 0%, transparent 60%), linear-gradient(180deg, #0a0a0c 0%, #131316 100%)',
        color: '#fff',
        overflow: 'hidden',
        paddingTop: 120,
        paddingBottom: 0,
      }}
    >
      {/* Ambient drifting blobs */}
      <div
        className="amb amb-1"
        style={{
          position: 'absolute', top: '-15%', left: '-10%',
          width: 620, height: 620, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(41,151,255,0.28), transparent 60%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="amb amb-2"
        style={{
          position: 'absolute', bottom: '-25%', right: '-10%',
          width: 720, height: 720, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.22), transparent 60%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Faint dot grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="wrap hero-grid" style={{ position: 'relative', zIndex: 2, minHeight: '72vh' }}>
        {/* LEFT — copy */}
        <div>
          <div
            className="hero-eyebrow chip"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              backdropFilter: 'blur(10px)',
              fontWeight: 500,
            }}
          >
            <span className="dot dot-pulse" style={{ background: 'var(--color-primary-on-dark)' }} />
            3 slots open this month · Currently accepting
          </div>

          <h1
            className="hero-headline display-hero"
            style={{ marginTop: 28, color: '#fff', fontWeight: 600 }}
          >
            <Word>Idea</Word>{' '}<Word>to</Word>{' '}<Word>launch</Word>
            <br />
            <Word>in</Word>{' '}<Word accent>three weeks.</Word>
          </h1>

          <p
            className="hero-lead lead lead-on-dark"
            style={{ marginTop: 26, maxWidth: 520, color: 'rgba(255,255,255,0.7)' }}
          >
            Verelios Labs designs and ships custom websites, mobile apps, and software for founders who need to move now — not next quarter.
          </p>

          <div
            className="hero-cta"
            style={{ display: 'flex', gap: 12, marginTop: 34, flexWrap: 'wrap' }}
          >
            <a
              href="#contact"
              className="btn-pill press"
              onClick={() => {
                trackGoogleAdsLead();
                trackMetaLead();
              }}
            >
              Get a free mockup in 48 hours
            </a>
            <a
              href="https://wa.me/918471094125?text=Hi%20Verelios%20Labs!%20I%27d%20like%20to%20discuss%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackGoogleAdsLead();
                trackMetaLead();
              }}
              className="btn-pill btn-wa press"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Inline stats row */}
          <div
            className="hero-stats"
            style={{
              marginTop: 56,
              display: 'flex',
              gap: 48,
              flexWrap: 'wrap',
              paddingTop: 28,
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {[
              { num: '10+',    label: 'Projects delivered' },
              { num: '<3 wks', label: 'Avg. delivery time' },
              { num: '48 hrs', label: 'Free mockup' },
              { num: '100%',   label: 'Satisfaction' },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 40,
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.0,
                    color: '#fff',
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — animated scene with orbital rings + laptop + phone */}
        <div
          className="hero-scene"
          style={{
            position: 'relative',
            aspectRatio: '1 / 1',
            width: '100%',
            maxWidth: 560,
            justifySelf: 'end',
            perspective: 1200,
          }}
        >
          {/* Orbital rings rig (background of devices) */}
          <div
            className="rings-rig"
            style={{ position: 'absolute', inset: 0, willChange: 'transform' }}
          >
            <svg
              viewBox="0 0 600 600"
              style={{ width: '100%', height: '100%', overflow: 'visible' }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2997ff" stopOpacity="0.9" />
                  <stop offset="55%" stopColor="#7cc1ff" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#b794ff" stopOpacity="0.1" />
                </linearGradient>
                <radialGradient id="orb-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2997ff" stopOpacity="0.5" />
                  <stop offset="60%" stopColor="#2997ff" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#2997ff" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Glowing core behind devices */}
              <circle
                className="orb-glow"
                cx="300"
                cy="300"
                r="170"
                fill="url(#orb-grad)"
                style={{ transformOrigin: '300px 300px', willChange: 'transform, opacity' }}
              />

              {/* Outer ring */}
              <g className="ring-outer" style={{ transformOrigin: '300px 300px' }}>
                <circle
                  cx="300" cy="300" r="275"
                  fill="none"
                  stroke="url(#ring-grad)"
                  strokeWidth="1"
                  strokeDasharray="2 8"
                />
                <circle cx="300" cy="25"  r="4" fill="#2997ff" />
                <circle cx="575" cy="300" r="3" fill="#7cc1ff" />
                <circle cx="300" cy="575" r="5" fill="#b794ff" />
              </g>

              {/* Mid ring */}
              <g className="ring-mid" style={{ transformOrigin: '300px 300px' }}>
                <circle
                  cx="300" cy="300" r="225"
                  fill="none"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="1"
                />
                <circle cx="525" cy="300" r="4" fill="#fff" />
                <circle cx="75"  cy="300" r="3" fill="rgba(255,255,255,0.5)" />
              </g>

              {/* Inner ring */}
              <g className="ring-inner" style={{ transformOrigin: '300px 300px' }}>
                <circle
                  cx="300" cy="300" r="180"
                  fill="none"
                  stroke="rgba(41,151,255,0.45)"
                  strokeWidth="1.4"
                  strokeDasharray="80 320"
                />
              </g>

              {/* Fast orbiting dot */}
              <g className="ring-dot" style={{ transformOrigin: '300px 300px' }}>
                <circle cx="300" cy="115" r="6" fill="#2997ff" />
                <circle cx="300" cy="115" r="14" fill="#2997ff" opacity="0.25" />
              </g>
            </svg>
          </div>

          {/* LAPTOP — center of the scene */}
          <div
            className="device-laptop"
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '78%',
              transformStyle: 'preserve-3d',
              willChange: 'transform',
              filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.5))',
            }}
          >
            <svg viewBox="0 0 480 320" style={{ width: '100%', display: 'block', overflow: 'visible' }} aria-hidden="true">
              <defs>
                <linearGradient id="lap-body" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"  stopColor="#1d1d20" />
                  <stop offset="100%" stopColor="#111114" />
                </linearGradient>
                <linearGradient id="lap-screen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"  stopColor="#0c1018" />
                  <stop offset="100%" stopColor="#0b0f17" />
                </linearGradient>
                <linearGradient id="lap-hero" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"  stopColor="#2997ff" />
                  <stop offset="100%" stopColor="#7cc1ff" />
                </linearGradient>
              </defs>

              {/* Laptop chassis */}
              <rect x="10"  y="10"  width="460" height="280" rx="14" fill="url(#lap-body)" stroke="rgba(255,255,255,0.12)" />
              {/* Screen background */}
              <rect x="22"  y="22"  width="436" height="256" rx="6"  fill="url(#lap-screen)" />

              {/* Browser chrome */}
              <rect x="22"  y="22"  width="436" height="26" rx="6" fill="#0a0d14" />
              <circle cx="38"  cy="35" r="4" fill="#ff5f57" />
              <circle cx="52"  cy="35" r="4" fill="#febc2e" />
              <circle cx="66"  cy="35" r="4" fill="#28c840" />
              {/* URL pill */}
              <rect x="160" y="28" width="220" height="14" rx="7" fill="rgba(255,255,255,0.07)" />
              <text x="178" y="38" fontFamily="ui-monospace,monospace" fontSize="9" fill="rgba(255,255,255,0.55)">
                verelios.com
              </text>
              <rect className="lc-caret" x="240" y="30" width="1" height="10" fill="rgba(255,255,255,0.7)" />

              {/* Hero band (gradient) */}
              <rect x="34" y="60" width="412" height="74" rx="6" fill="rgba(41,151,255,0.08)" stroke="rgba(41,151,255,0.18)" />
              <rect x="50" y="74"  width="120" height="8" rx="4" fill="url(#lap-hero)" />
              <rect x="50" y="92"  width="260" height="6" rx="3" fill="rgba(255,255,255,0.22)" />
              <rect x="50" y="106" width="200" height="6" rx="3" fill="rgba(255,255,255,0.14)" />
              <rect x="320" y="92" width="78" height="22" rx="11" fill="#2997ff" />
              <text x="359" y="107" textAnchor="middle" fontFamily="var(--font-display)" fontSize="9" fontWeight="600" fill="#fff">
                Get mockup
              </text>

              {/* 3 service cards — animated */}
              <g>
                <rect className="lc-card lc-c1" x="34"  y="148" width="135" height="86" rx="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" />
                <rect className="lc-card lc-c1" x="46"  y="160" width="22"  height="22" rx="6" fill="rgba(41,151,255,0.4)" />
                <rect className="lc-card lc-c1" x="46"  y="190" width="80"  height="6"  rx="3" fill="rgba(255,255,255,0.5)" />
                <rect className="lc-card lc-c1" x="46"  y="202" width="100" height="5"  rx="2.5" fill="rgba(255,255,255,0.2)" />
                <rect className="lc-card lc-c1" x="46"  y="212" width="60"  height="5"  rx="2.5" fill="rgba(255,255,255,0.2)" />
              </g>

              <g>
                <rect className="lc-card lc-c2" x="175" y="148" width="135" height="86" rx="7" fill="rgba(255,255,255,0.05)" stroke="rgba(124,58,237,0.25)" />
                <rect className="lc-card lc-c2" x="187" y="160" width="22"  height="22" rx="6" fill="rgba(124,58,237,0.45)" />
                <rect className="lc-card lc-c2" x="187" y="190" width="80"  height="6"  rx="3" fill="rgba(255,255,255,0.5)" />
                <rect className="lc-card lc-c2" x="187" y="202" width="100" height="5"  rx="2.5" fill="rgba(255,255,255,0.2)" />
                <rect className="lc-card lc-c2" x="187" y="212" width="60"  height="5"  rx="2.5" fill="rgba(255,255,255,0.2)" />
              </g>

              <g>
                <rect className="lc-card lc-c3" x="316" y="148" width="130" height="86" rx="7" fill="rgba(255,255,255,0.05)" stroke="rgba(52,211,153,0.25)" />
                <rect className="lc-card lc-c3" x="328" y="160" width="22"  height="22" rx="6" fill="rgba(52,211,153,0.45)" />
                <rect className="lc-card lc-c3" x="328" y="190" width="80"  height="6"  rx="3" fill="rgba(255,255,255,0.5)" />
                <rect className="lc-card lc-c3" x="328" y="202" width="100" height="5"  rx="2.5" fill="rgba(255,255,255,0.2)" />
                <rect className="lc-card lc-c3" x="328" y="212" width="60"  height="5"  rx="2.5" fill="rgba(255,255,255,0.2)" />
              </g>

              {/* Bottom progress bar */}
              <rect x="34" y="250" width="412" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
              <rect
                className="lc-progress-fill"
                x="34" y="250" width="412" height="4" rx="2"
                fill="url(#lap-hero)"
                style={{ transformOrigin: 'left center' }}
              />
              <text x="34"  y="270" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(255,255,255,0.4)">
                Build · Deploy · Live
              </text>
              <text x="446" y="270" textAnchor="end" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(52,211,153,0.85)">
                ● ONLINE
              </text>

              {/* Laptop hinge */}
              <rect x="-18" y="290" width="516" height="14" rx="6" fill="#15161a" stroke="rgba(255,255,255,0.06)" />
              <rect x="210" y="294" width="60"  height="4"  rx="2" fill="#0a0a0c" />
            </svg>
          </div>

          {/* PHONE — in front, lower-right of laptop */}
          <div
            className="device-phone"
            style={{
              position: 'absolute',
              top: '36%',
              right: '-2%',
              width: '24%',
              transformStyle: 'preserve-3d',
              willChange: 'transform',
              filter: 'drop-shadow(0 25px 40px rgba(0,0,0,0.55))',
            }}
          >
            <svg viewBox="0 0 140 280" style={{ width: '100%', display: 'block', overflow: 'visible' }} aria-hidden="true">
              <defs>
                <linearGradient id="ph-body" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"  stopColor="#1d1d20" />
                  <stop offset="100%" stopColor="#0c0c0e" />
                </linearGradient>
                <linearGradient id="ph-screen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"  stopColor="#0d1018" />
                  <stop offset="100%" stopColor="#0a0d16" />
                </linearGradient>
                <linearGradient id="ph-hero" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"  stopColor="#2997ff" />
                  <stop offset="100%" stopColor="#b794ff" />
                </linearGradient>
              </defs>

              {/* Phone chassis */}
              <rect x="2"  y="2"  width="136" height="276" rx="22" fill="url(#ph-body)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" />
              {/* Screen */}
              <rect x="8"  y="10" width="124" height="260" rx="17" fill="url(#ph-screen)" />
              {/* Dynamic Island */}
              <rect x="50" y="14" width="40"  height="10"  rx="5" fill="#000" />
              <circle cx="84" cy="19" r="2" fill="rgba(41,151,255,0.6)" />

              {/* Status bar */}
              <text x="16"  y="36" fontFamily="var(--font-display)" fontSize="9"  fontWeight="600" fill="#fff">9:41</text>
              <text x="124" y="36" textAnchor="end" fontFamily="var(--font-display)" fontSize="9" fontWeight="500" fill="rgba(255,255,255,0.75)">●●●</text>

              {/* App header */}
              <text x="14" y="58" fontFamily="var(--font-display)" fontSize="12" fontWeight="600" fill="#fff">Verelios</text>
              <text x="14" y="72" fontFamily="var(--font-text)" fontSize="8" fill="rgba(255,255,255,0.55)">Your projects · 4 active</text>

              {/* Notification badge — top right */}
              <g className="pc-badge" style={{ transformOrigin: '116px 56px' }}>
                <circle cx="120" cy="56" r="9" fill="rgba(41,151,255,0.18)" />
                <circle cx="120" cy="56" r="5" fill="#2997ff" />
                <text x="120" y="59" textAnchor="middle" fontFamily="var(--font-display)" fontSize="6" fontWeight="700" fill="#fff">3</text>
              </g>

              {/* Hero gradient strip */}
              <rect x="12" y="86" width="116" height="44" rx="8" fill="rgba(41,151,255,0.1)" stroke="rgba(41,151,255,0.25)" />
              <rect x="20" y="96" width="50" height="6" rx="3" fill="url(#ph-hero)" />
              <rect x="20" y="108" width="78" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
              <rect x="20" y="116" width="50" height="4" rx="2" fill="rgba(255,255,255,0.2)" />

              {/* List rows — animated */}
              <g className="pc-row pc-row-1">
                <rect x="12" y="142" width="116" height="32" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
                <rect x="20" y="150" width="14"  height="14" rx="4" fill="rgba(41,151,255,0.45)" />
                <rect x="40" y="151" width="56"  height="5" rx="2.5" fill="rgba(255,255,255,0.55)" />
                <rect x="40" y="160" width="72"  height="4" rx="2"   fill="rgba(255,255,255,0.22)" />
                <text x="120" y="165" textAnchor="end" fontFamily="var(--font-display)" fontSize="7" fontWeight="600" fill="rgba(52,211,153,0.85)">+12%</text>
              </g>

              <g className="pc-row pc-row-2">
                <rect x="12" y="180" width="116" height="32" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
                <rect x="20" y="188" width="14"  height="14" rx="4" fill="rgba(124,58,237,0.5)" />
                <rect x="40" y="189" width="56"  height="5" rx="2.5" fill="rgba(255,255,255,0.55)" />
                <rect x="40" y="198" width="72"  height="4" rx="2"   fill="rgba(255,255,255,0.22)" />
                <text x="120" y="203" textAnchor="end" fontFamily="var(--font-display)" fontSize="7" fontWeight="600" fill="rgba(52,211,153,0.85)">+8%</text>
              </g>

              <g className="pc-row pc-row-3">
                <rect x="12" y="218" width="116" height="32" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
                <rect x="20" y="226" width="14"  height="14" rx="4" fill="rgba(52,211,153,0.5)" />
                <rect x="40" y="227" width="56"  height="5" rx="2.5" fill="rgba(255,255,255,0.55)" />
                <rect x="40" y="236" width="72"  height="4" rx="2"   fill="rgba(255,255,255,0.22)" />
                <text x="120" y="241" textAnchor="end" fontFamily="var(--font-display)" fontSize="7" fontWeight="600" fill="rgba(52,211,153,0.85)">+24%</text>
              </g>

              {/* Bottom tab bar */}
              <rect x="10" y="256" width="120" height="2" rx="1" fill="rgba(255,255,255,0.06)" />
              <rect className="pc-tab-indicator" x="22" y="255" width="14" height="3" rx="1.5" fill="#2997ff" />
              <circle cx="29" cy="266" r="2.5" fill="rgba(255,255,255,0.6)" />
              <circle cx="55" cy="266" r="2.5" fill="rgba(255,255,255,0.3)" />
              <circle cx="85" cy="266" r="2.5" fill="rgba(255,255,255,0.3)" />
              <circle cx="111" cy="266" r="2.5" fill="rgba(255,255,255,0.3)" />
            </svg>
          </div>

          {/* Floating glassy cards (orbit the scene) */}
          <div
            className="hero-card hero-card-1 parallax-1"
            style={{
              position: 'absolute',
              top: '4%',
              left: '-10%',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 14,
              padding: '12px 16px',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: '0 18px 40px -16px rgba(0,0,0,0.5)',
              willChange: 'transform',
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #2997ff, #7cc1ff)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0a0a0c',
                fontWeight: 700,
                fontSize: 13,
                fontFamily: 'var(--font-display)',
              }}
            >
              ✓
            </div>
            <div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Shipping
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, marginTop: 2 }}>
                10+ projects live
              </div>
            </div>
          </div>

          <div
            className="hero-card hero-card-2 parallax-2"
            style={{
              position: 'absolute',
              top: '4%',
              right: '-8%',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 14,
              padding: '14px 18px',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              boxShadow: '0 18px 40px -16px rgba(0,0,0,0.5)',
              willChange: 'transform',
              minWidth: 160,
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Up to
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 30,
                fontWeight: 600,
                letterSpacing: '-0.025em',
                color: '#fff',
                marginTop: 2,
              }}
            >
              40%
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
              more conversions
            </div>
          </div>

          <div
            className="hero-card hero-card-3 parallax-3"
            style={{
              position: 'absolute',
              bottom: '12%',
              left: '-6%',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 14,
              padding: '12px 16px',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              boxShadow: '0 18px 40px -16px rgba(0,0,0,0.5)',
              willChange: 'transform',
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13 }}>
                Your project manager
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>
                Always on WhatsApp
              </div>
            </div>
          </div>

          <div
            className="hero-card hero-card-4 parallax-4"
            style={{
              position: 'absolute',
              bottom: '4%',
              right: '-4%',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 999,
              padding: '8px 14px',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12,
              color: '#fff',
              boxShadow: '0 18px 40px -16px rgba(0,0,0,0.5)',
              willChange: 'transform',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#34d399',
                boxShadow: '0 0 12px #34d399',
              }}
            />
            Live · All systems shipping
          </div>
        </div>
      </div>

      {/* Giant brand watermark */}
      <div
        className="hero-watermark"
        aria-hidden="true"
        style={{
          position: 'relative',
          marginTop: 64,
          textAlign: 'center',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(80px, 18vw, 240px)',
          letterSpacing: '-0.06em',
          lineHeight: 0.9,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.08)',
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.0) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          userSelect: 'none',
          pointerEvents: 'none',
          paddingBottom: 8,
        }}
      >
        VERELIOS
      </div>

      <style jsx>{`
        :global(.hero-section .hero-grid) {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }

        /* ===== CSS-driven entrance — runs at first paint, no layout shift =====
           These use 'backwards' fill-mode so the element renders in the start
           keyframe state during the delay window (invisible / translated), then
           animates into the natural state. No CLS because there's no late
           opacity-1 → opacity-0 snap from a deferred JS callback. */
        @keyframes hero-fade-rise {
          from { opacity: 0; transform: translate3d(0, 16px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0,    0); }
        }
        @keyframes hero-scale-in {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes hero-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        :global(.hero-section .hero-eyebrow) {
          animation: hero-fade-rise 0.7s 0.0s cubic-bezier(0.22, 1, 0.36, 1) backwards;
        }
        :global(.hero-section .hero-lead) {
          animation: hero-fade-rise 0.7s 0.45s cubic-bezier(0.22, 1, 0.36, 1) backwards;
        }
        :global(.hero-section .hero-cta) > * {
          animation: hero-fade-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) backwards;
        }
        :global(.hero-section .hero-cta) > *:nth-child(1) { animation-delay: 0.7s; }
        :global(.hero-section .hero-cta) > *:nth-child(2) { animation-delay: 0.8s; }

        :global(.hero-section .hero-stat) {
          animation: hero-fade-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) backwards;
        }
        :global(.hero-section .hero-stat):nth-child(1) { animation-delay: 0.95s; }
        :global(.hero-section .hero-stat):nth-child(2) { animation-delay: 1.05s; }
        :global(.hero-section .hero-stat):nth-child(3) { animation-delay: 1.15s; }
        :global(.hero-section .hero-stat):nth-child(4) { animation-delay: 1.25s; }

        :global(.hero-section .hero-scene) {
          animation: hero-scale-in 1.1s 0.4s cubic-bezier(0.22, 1, 0.36, 1) backwards;
        }
        :global(.hero-section .device-laptop),
        :global(.hero-section .device-phone) {
          animation: hero-fade 0.9s 0.7s ease-out backwards;
        }
        :global(.hero-section .hero-card) {
          animation: hero-fade 0.8s ease-out backwards;
        }
        :global(.hero-section .hero-card-1) { animation-delay: 0.95s; }
        :global(.hero-section .hero-card-2) { animation-delay: 1.05s; }
        :global(.hero-section .hero-card-3) { animation-delay: 1.15s; }
        :global(.hero-section .hero-card-4) { animation-delay: 1.25s; }

        :global(.hero-section .hero-watermark) {
          animation: hero-fade 1.6s 0.9s ease-out backwards;
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.hero-section .hero-eyebrow),
          :global(.hero-section .hero-lead),
          :global(.hero-section .hero-cta) > *,
          :global(.hero-section .hero-stat),
          :global(.hero-section .hero-scene),
          :global(.hero-section .device-laptop),
          :global(.hero-section .device-phone),
          :global(.hero-section .hero-card),
          :global(.hero-section .hero-watermark) {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }


        /* Tablet — stack copy above scene, keep cards visible but contained */
        @media (max-width: 980px) {
          :global(.hero-section) {
            padding-top: 96px !important;
          }
          :global(.hero-section .hero-grid) {
            grid-template-columns: 1fr;
            gap: 56px;
            align-items: stretch;
            min-height: auto;
          }
          :global(.hero-section .hero-scene) {
            justify-self: center !important;
            max-width: 380px !important;
          }
          :global(.hero-section .hero-stats) {
            gap: 28px !important;
          }
          /* Pull floating cards inside the visible area */
          :global(.hero-section .hero-card-1) { left: 0 !important; right: auto !important; }
          :global(.hero-section .hero-card-2) { right: 0 !important; left: auto !important; }
          :global(.hero-section .hero-card-3) { left: 0 !important; right: auto !important; }
          :global(.hero-section .hero-card-4) { right: 0 !important; left: auto !important; }
        }

        /* Phone — hide decorative chips, shrink scene, switch stats to 2-up grid */
        @media (max-width: 640px) {
          :global(.hero-section) {
            padding-top: 88px !important;
          }
          :global(.hero-section .hero-scene) {
            max-width: 320px !important;
          }
          /* Decorative floating chips contain redundant info — hide on phones
             so the laptop+phone composition has room to breathe. */
          :global(.hero-section .hero-card) {
            display: none !important;
          }
          /* Stats: 2-up grid, smaller numbers */
          :global(.hero-section .hero-stats) {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 22px 18px !important;
            margin-top: 40px !important;
          }
          :global(.hero-section .hero-stat) > div:first-child {
            font-size: 28px !important;
          }
          :global(.hero-section .hero-stat) > div:last-child {
            font-size: 11px !important;
            letter-spacing: 0.03em !important;
          }
          /* Lead + buttons: tighter spacing on phones */
          :global(.hero-section .hero-lead) {
            margin-top: 20px !important;
            font-size: 17px !important;
            line-height: 1.4 !important;
          }
          :global(.hero-section .hero-cta) {
            margin-top: 26px !important;
            gap: 10px !important;
          }
          :global(.hero-section .hero-cta) > a {
            padding: 12px 18px !important;
            font-size: 14px !important;
          }
          :global(.hero-section .hero-watermark) {
            font-size: clamp(56px, 20vw, 100px) !important;
            margin-top: 40px !important;
          }
        }

        /* Very small phones (≤ 380px) — extra compact */
        @media (max-width: 380px) {
          :global(.hero-section .hero-scene) {
            max-width: 280px !important;
          }
          :global(.hero-section .hero-stat) > div:first-child {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
