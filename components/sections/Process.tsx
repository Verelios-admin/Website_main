'use client';

import { useGsap } from '@/hooks/useGsap';

const STEPS = [
  {
    n: 'Step 01',
    day: 'Day 1',
    title: 'Free consultation',
    body: 'Tell us about your project on WhatsApp or a quick call. We understand your goals, audience, and timeline — no commitment needed.',
  },
  {
    n: 'Step 02',
    day: 'Day 2–3',
    title: 'Free mockup in 48 hours',
    body: 'We design a visual mockup or prototype within 48 hours. You review, give feedback, and approve before we write a single line of code.',
  },
  {
    n: 'Step 03',
    day: 'Day 4–18',
    title: 'Development & updates',
    body: 'We build with regular WhatsApp updates. Progress in real time, change requests at any milestone, no waiting for scheduled standups.',
  },
  {
    n: 'Step 04',
    day: 'Day 19–21',
    title: 'Launch & support',
    body: 'We deploy live, handle all the technical setup, and stick around for seven days of free post-launch support — tweaks, fixes, anything.',
  },
];

export function Process() {
  const ref = useGsap<HTMLElement>(({ gsap, scope }) => {
    gsap.from(scope.querySelectorAll('.section-head > *'), {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: 'top 75%' },
    });

    gsap.from(scope.querySelectorAll('.process-step'), {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'expo.out',
      stagger: 0.12,
      scrollTrigger: { trigger: scope.querySelector('.process-grid'), start: 'top 80%' },
    });

    const line = scope.querySelector('.process-line') as HTMLElement | null;
    if (line) {
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: { trigger: scope.querySelector('.process-grid'), start: 'top 80%' },
        }
      );
    }
  });

  return (
    <section
      ref={ref}
      id="process"
      className="tile"
      style={{ background: 'var(--color-surface-tile-1)', color: '#fff' }}
    >
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow eyebrow-on-dark">How it works</div>
          <h2 className="display-section" style={{ color: '#fff' }}>
            First message to live launch <br />
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>in four steps.</span>
          </h2>
          <p className="lead lead-on-dark" style={{ marginTop: 6, maxWidth: 620 }}>
            No surprises, no delays. You see progress every day, you approve every milestone, and you pay only as the work lands.
          </p>
        </div>

        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            position: 'relative',
          }}
        >
          <div
            className="process-line"
            style={{
              position: 'absolute',
              left: '8%',
              right: '8%',
              top: 9,
              height: 1,
              background: 'rgba(255,255,255,0.15)',
            }}
          />

          {STEPS.map((s) => (
            <div key={s.n} className="process-step" style={{ position: 'relative', paddingTop: 28 }}>
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: 'var(--color-surface-tile-1)',
                  border: '2px solid var(--color-primary-on-dark)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--color-primary-on-dark)',
                  }}
                />
              </span>
              <div style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                <span className="step-num step-num-on-dark">{s.n}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-text)',
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  · {s.day}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  margin: '10px 0 12px',
                  color: '#fff',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: 'var(--color-body-muted)',
                  letterSpacing: '-0.01em',
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          :global(.process-grid) { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          :global(.process-grid) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Process;
