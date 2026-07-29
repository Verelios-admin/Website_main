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
    </div>
  );
}

export default Prose;
