const vehicleCategories = [
  {
    label: "Sedan / Small SUV",
    packages: [
      { name: "Exterior Package", price: "$50" },
      { name: "Interior Package", price: "$180" },
      { name: "Full Package", price: "$220", highlight: true },
    ],
    addons: [
      { name: "Clay Bar Treatment", note: "price varies by severity" },
      { name: "Stain Extraction", note: "price varies by severity" },
    ],
  },
  {
    label: "Large SUV / Trucks / Vans",
    packages: [
      { name: "Exterior Package", price: "$65" },
      { name: "Interior Package", price: "$200" },
      { name: "Full Package", price: "$250", highlight: true },
    ],
    addons: [
      { name: "Clay Bar Treatment", note: "price varies by severity" },
      { name: "Stain Extraction", note: "price varies by severity" },
    ],
  },
];

export default function Pricing() {
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
          What We Charge
        </p>
        <h2
          className="text-[clamp(2.5rem,8vw,5rem)] text-white leading-none mb-14 text-glow"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
        >
          Pricing
        </h2>

        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicleCategories.map((cat) => (
            <div
              key={cat.label}
              className="card-glow rounded-2xl p-8 flex flex-col text-left"
              style={{
                background:
                  "linear-gradient(160deg, rgba(109,40,217,0.22) 0%, rgba(0,0,0,0.75) 100%)",
                border: "1px solid rgba(168,85,247,0.4)",
                boxShadow: "0 0 40px rgba(109,40,217,0.15), inset 0 1px 0 rgba(168,85,247,0.15)",
              }}
            >
              <h3
                className="text-purple-300 text-2xl tracking-widest uppercase mb-1 text-glow-sm"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.1em" }}
              >
                {cat.label}
              </h3>
              <div className="h-px bg-linear-to-r from-purple-600/60 via-purple-400/40 to-transparent mb-6" />

              <ul className="flex flex-col gap-1 mb-7">
                {cat.packages.map((pkg) => (
                  <li
                    key={pkg.name}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 ${
                      pkg.highlight
                        ? "bg-purple-700/25 border border-purple-500/40"
                        : "border-b border-white/8"
                    }`}
                  >
                    <span
                      className={`text-sm tracking-wide ${pkg.highlight ? "text-white font-semibold" : "text-white/70"}`}
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      {pkg.name}
                      {pkg.highlight && (
                        <span className="ml-2 text-[10px] bg-purple-600/50 text-purple-200 px-2 py-0.5 rounded-full uppercase tracking-widest">
                          Best Value
                        </span>
                      )}
                    </span>
                    <span
                      className={`font-bold tabular-nums ${
                        pkg.highlight
                          ? "text-purple-300 text-2xl text-glow-sm"
                          : "text-white text-xl"
                      }`}
                      style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em" }}
                    >
                      {pkg.price}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="rounded-xl p-4"
                style={{
                  background: "rgba(109,40,217,0.08)",
                  border: "1px dashed rgba(168,85,247,0.3)",
                }}
              >
                <p
                  className="text-purple-400 text-[10px] tracking-[0.25em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Add-Ons Available
                </p>
                <ul className="flex flex-col gap-2">
                  {cat.addons.map((addon) => (
                    <li
                      key={addon.name}
                      className="flex items-center justify-between"
                    >
                      <span
                        className="text-white/80 text-sm flex items-center gap-2"
                        style={{ fontFamily: "var(--font-oswald)" }}
                      >
                        <span className="w-1 h-1 rounded-full bg-purple-400 inline-block" />
                        {addon.name}
                      </span>
                      <span
                        className="text-purple-400/70 text-xs italic"
                        style={{ fontFamily: "var(--font-oswald)" }}
                      >
                        {addon.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto px-4 mt-12">
          <div
            className="flex gap-3 items-start rounded-xl px-6 py-4 text-left"
            style={{
              background: "rgba(109,40,217,0.1)",
              border: "1px solid rgba(168,85,247,0.35)",
              boxShadow: "0 0 20px rgba(109,40,217,0.1)",
            }}
          >
            <span className="text-purple-400 text-lg leading-none mt-0.5 shrink-0">⚠</span>
            <p
              className="text-white/75 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              <span className="text-purple-300 font-semibold">Prices may vary</span> based on excessive pet hair, spot treatment and stain removal, or excessive dirt and debris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
