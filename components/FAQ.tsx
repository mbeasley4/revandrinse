const faqs = [
  {
    q: "How long does a full detail take?",
    a: "Most full interior + exterior details take 3–5 hours depending on vehicle size and condition. We come to you — no drop-off needed.",
  },
  {
    q: "Do you service my area?",
    a: "We're mobile and serve Madeira, Blue Ash, Montgomery, Hyde Park, Anderson Township, and the broader I-275 corridor. Text us and we'll confirm.",
  },
  {
    q: "What's included in an interior detail?",
    a: "Deep vacuuming, surface wipe-down, leather conditioning, carpet shampooing with hot-water extraction, and steam cleaning of all hard surfaces.",
  },
  {
    q: "What does a clay bar treatment do?",
    a: "It removes embedded contaminants — fallout, rail dust, road tar — that washing can't reach, leaving a glass-smooth surface ready for polish or wax.",
  },
];

export default function FAQ() {
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

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <p
          className="text-purple-400 text-sm tracking-[0.35em] uppercase mb-2"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Got Questions?
        </p>
        <h2
          className="text-[clamp(2.5rem,8vw,5rem)] text-white leading-none mb-14 text-glow"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
        >
          Common Questions
        </h2>

        <dl className="flex flex-col gap-4 text-left">
          {faqs.map(({ q, a }) => (
            <div
              key={q}
              className="card-glow rounded-2xl px-6 py-5"
              style={{
                background:
                  "linear-gradient(160deg, rgba(109,40,217,0.22) 0%, rgba(0,0,0,0.75) 100%)",
                border: "1px solid rgba(168,85,247,0.4)",
                boxShadow:
                  "0 0 40px rgba(109,40,217,0.15), inset 0 1px 0 rgba(168,85,247,0.15)",
              }}
            >
              <dt
                className="text-purple-300 text-sm tracking-wide mb-2 text-glow-sm"
                style={{ fontFamily: "var(--font-oswald)", fontWeight: 600 }}
              >
                {q}
              </dt>
              <dd
                className="text-white/70 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
