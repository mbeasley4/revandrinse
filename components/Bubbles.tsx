"use client";

// Pre-computed so server and client render identically (no hydration mismatch).
const BUBBLES = Array.from({ length: 28 }, (_, i) => ({
  left: ((i * 41 + 7) % 97) + 1.5,
  duration: 7 + ((i * 1.7) % 10),
  delay: (i * 0.6) % 9,
  size: 28 + ((i * 17) % 52),   // 28–80px — noticeably larger
  opacity: 0.35 + ((i * 0.07) % 0.35), // 0.35–0.70 — clearly visible
}));

export default function Bubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-0 rounded-full animate-bubble"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `-${b.delay}s`,
            // Soap-bubble look: thin iridescent rim + transparent centre + top-left highlight
            background: `radial-gradient(
              circle at 32% 30%,
              rgba(255,255,255,${b.opacity * 0.55}) 0%,
              rgba(216,180,254,${b.opacity * 0.30}) 30%,
              rgba(147,51,234,${b.opacity * 0.18}) 65%,
              transparent 100%
            )`,
            boxShadow: `
              inset 0 0 0 1.5px rgba(216,180,254,${b.opacity * 0.7}),
              0 0 ${Math.round(b.size * 0.4)}px rgba(168,85,247,${b.opacity * 0.3})
            `,
          }}
        />
      ))}
    </div>
  );
}
