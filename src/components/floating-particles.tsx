const COLORS = ["#FF7777", "#75A9FF", "#77D99A", "#FFD166"];
const DOTS = Array.from({ length: 68 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 13) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  size: `${2 + (index % 3)}px`,
  color: COLORS[index % COLORS.length],
  duration: `${5 + (index % 6)}s`,
  delay: `${(index % 13) * -0.65}s`,
}));

export function FloatingParticles() {
  return (
    <div className="particle-field" aria-hidden="true">
      {DOTS.map((dot) => (
        <span key={dot.id} className="particle-dot" style={{
          left: dot.left, top: dot.top, width: dot.size, height: dot.size,
          backgroundColor: dot.color,
          "--duration": dot.duration,
          "--delay": dot.delay,
        } as React.CSSProperties} />
      ))}
    </div>
  );
}
