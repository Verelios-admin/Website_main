export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="prose-on-dark"
      style={{
        fontFamily: 'var(--font-text)',
        fontSize: 17,
        lineHeight: 1.65,
        color: 'rgba(255,255,255,0.78)',
        letterSpacing: '-0.005em',
      }}
    >
      {children}
      <style>{`
        .prose-on-dark h2 {
          color: #fff;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(26px, 3.4vw, 36px);
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 56px 0 18px;
        }
        .prose-on-dark h3 {
          color: #fff;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(20px, 2.4vw, 24px);
          letter-spacing: -0.015em;
          line-height: 1.25;
          margin: 36px 0 12px;
        }
        .prose-on-dark p { margin: 0 0 18px; }
        .prose-on-dark ul, .prose-on-dark ol {
          padding-left: 22px;
          margin: 0 0 22px;
        }
        .prose-on-dark li { margin: 0 0 10px; }
        .prose-on-dark li::marker { color: rgba(41,151,255,0.7); }
        .prose-on-dark strong { color: #fff; font-weight: 600; }
        .prose-on-dark a {
          color: #2997ff;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
        }
        .prose-on-dark a:hover { color: #7cc1ff; }
        .prose-on-dark blockquote {
          border-left: 3px solid rgba(41,151,255,0.5);
          margin: 24px 0;
          padding: 6px 18px;
          color: rgba(255,255,255,0.85);
          font-style: italic;
        }
        .prose-on-dark hr {
          border: 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          margin: 40px 0;
        }
        .prose-on-dark code {
          background: rgba(41,151,255,0.12);
          padding: 2px 7px;
          border-radius: 6px;
          font-family: ui-monospace, "SF Mono", Menlo, monospace;
          font-size: 14px;
          color: #7cc1ff;
        }
        .prose-on-dark .callout {
          background: rgba(41,151,255,0.07);
          border: 1px solid rgba(41,151,255,0.22);
          border-radius: 14px;
          padding: 18px 22px;
          margin: 28px 0;
        }
        .prose-on-dark .callout p:last-child { margin-bottom: 0; }
      `}</style>
    </div>
  );
}

export default Prose;
