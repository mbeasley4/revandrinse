const services = [
  {
    title: "Exterior Wash",
    desc: "Wheel cleaning, prewash & contact wash to prevent wear and scratches on paint.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="24" cy="34" rx="18" ry="4" strokeOpacity="0.4"/>
        <path d="M6 30 Q8 18 24 16 Q40 18 42 30"/>
        <path d="M10 30 Q12 24 24 22 Q36 24 38 30"/>
        <circle cx="13" cy="32" r="3"/>
        <circle cx="35" cy="32" r="3"/>
        <path d="M20 10 Q24 6 28 10" strokeOpacity="0.6"/>
        <path d="M16 8 Q24 2 32 8" strokeOpacity="0.3"/>
      </svg>
    ),
  },
  {
    title: "Interior Detail",
    desc: "Floor mat and carpet cleaning, vacuuming, surface wipe down & leather conditioning.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="14" width="32" height="22" rx="3"/>
        <circle cx="24" cy="25" r="7"/>
        <circle cx="24" cy="25" r="2"/>
        <path d="M8 20 L4 20 M40 20 L44 20"/>
        <path d="M14 36 L12 40 M34 36 L36 40"/>
      </svg>
    ),
  },
  {
    title: "Steam Cleaning",
    desc: "High-temperature steam blasts away grime & bacteria.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 38 L24 28"/>
        <path d="M16 34 L16 26"/>
        <path d="M32 36 L32 28"/>
        <path d="M12 24 Q12 14 24 14 Q36 14 36 24"/>
        <path d="M18 20 Q18 26 24 24 Q30 22 30 28" strokeOpacity="0.5"/>
        <path d="M20 8 Q24 4 28 8" strokeOpacity="0.6"/>
        <path d="M24 6 L24 10"/>
      </svg>
    ),
  },
  {
    title: "Clay Bar Treatment",
    desc: "Removes embedded contaminants for a glass-smooth finish.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="20" width="14" height="10" rx="2"/>
        <path d="M24 22 Q32 18 38 24 Q34 28 28 26"/>
        <path d="M10 30 Q20 36 36 30"/>
        <path d="M16 20 L22 14 M20 20 L26 14" strokeOpacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Carpet Shampooing",
    desc: "Hot-water extraction lifts stains & eliminates odors.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 38 L10 20 Q10 16 14 16 L20 16"/>
        <path d="M10 28 L38 28"/>
        <rect x="20" y="10" width="18" height="18" rx="2"/>
        <path d="M26 16 L26 22 M30 14 L30 22 M34 16 L34 22" strokeOpacity="0.6"/>
        <path d="M38 28 L38 38 Q38 40 36 40 L12 40 Q10 40 10 38"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      className="py-24 text-center relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,40,217,0.18) 0%, #000 70%)",
      }}
    >
      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(109,40,217,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10">
        <p
          className="text-purple-400 text-sm tracking-[0.35em] uppercase mb-2"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          What We Do
        </p>
        <h2
          className="text-[clamp(2.5rem,8vw,5rem)] text-white leading-none mb-14 text-glow"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
        >
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-glow rounded-2xl p-6 flex flex-col items-center gap-3 text-center"
              style={{
                background:
                  "linear-gradient(160deg, rgba(109,40,217,0.22) 0%, rgba(0,0,0,0.75) 100%)",
                border: "1px solid rgba(168,85,247,0.4)",
                boxShadow:
                  "0 0 40px rgba(109,40,217,0.15), inset 0 1px 0 rgba(168,85,247,0.15)",
              }}
            >
              <div className="text-purple-300 text-glow-sm">{s.icon}</div>
              <div className="w-8 h-px bg-linear-to-r from-transparent via-purple-500/60 to-transparent" />
              <h3
                className="text-purple-300 text-lg tracking-widest uppercase text-glow-sm"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.12em" }}
              >
                {s.title}
              </h3>
              <p
                className="text-white/70 text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
