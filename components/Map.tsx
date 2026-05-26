export default function Map() {
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
          Find Us
        </p>
        <h2
          className="text-[clamp(2.5rem,8vw,5rem)] text-white leading-none mb-4 text-glow"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
        >
          Service Area
        </h2>
        <p
          className="text-white/70 text-sm mb-10 tracking-wide"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Mobile detailing throughout the I-275 corridor &amp; greater Cincinnati area.
        </p>

        {/* Community tags */}
        <div className="max-w-3xl mx-auto px-4 mb-12 flex flex-wrap justify-center gap-2">
          {[
            "Madeira", "Blue Ash", "Montgomery", "Mason", "West Chester",
            "Kenwood", "Anderson Township", "Symmes Township", "Loveland",
            "Sharonville", "Evendale", "Forest Park", "Norwood", "Milford",
            "Landen", "Springboro",
          ].map((city) => (
            <span
              key={city}
              className="px-3 py-1 rounded-full text-xs tracking-widest uppercase text-purple-200/80"
              style={{
                fontFamily: "var(--font-oswald)",
                background: "rgba(109,40,217,0.18)",
                border: "1px solid rgba(168,85,247,0.35)",
              }}
            >
              {city}
            </span>
          ))}
        </div>

        {/* Map + contact card side-by-side on lg */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* Map — takes 2/3 on desktop */}
          <div
            className="lg:col-span-2 rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(168,85,247,0.4)",
              boxShadow: "0 0 40px rgba(109,40,217,0.35), 0 0 80px rgba(109,40,217,0.1)",
            }}
          >
            <iframe
              title="Rev & Rinse service area map"
              className="w-full h-80 lg:h-full block min-h-72"
              src="https://maps.google.com/maps?ll=39.18,-84.46&z=10&output=embed"
            />
          </div>

          {/* Contact card */}
          <div
            className="card-glow rounded-2xl flex flex-col justify-center gap-8 px-8 py-10 text-left"
            style={{
              background:
                "linear-gradient(160deg, rgba(109,40,217,0.22) 0%, rgba(0,0,0,0.75) 100%)",
              border: "1px solid rgba(168,85,247,0.4)",
              boxShadow:
                "0 0 40px rgba(109,40,217,0.15), inset 0 1px 0 rgba(168,85,247,0.15)",
            }}
          >
            <div>
              <p
                className="text-purple-400/70 text-xs tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Book an Appointment
              </p>
              <a
                href="sms:+15134322052"
                className="block text-[clamp(1.6rem,4vw,2.2rem)] text-white leading-tight hover:text-purple-300 transition-colors"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
              >
                (513) 432-2052
              </a>
              <p
                className="mt-1 text-white/40 text-xs tracking-wide"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Text us to schedule
              </p>
            </div>

            <div
              className="h-px w-full"
              style={{ background: "rgba(168,85,247,0.25)" }}
            />

            <div>
              <p
                className="text-purple-400/70 text-xs tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Location
              </p>
              <p
                className="text-white text-lg leading-snug"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Madeira, Ohio
              </p>
              <p
                className="mt-1 text-white/40 text-xs tracking-wide leading-relaxed"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                We come to you — home, office, or anywhere in the I-275 corridor.
              </p>
            </div>

            <div
              className="h-px w-full"
              style={{ background: "rgba(168,85,247,0.25)" }}
            />

            <div>
              <p
                className="text-purple-400/70 text-xs tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Hours
              </p>
              <p
                className="text-white text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                By appointment
              </p>
              <p
                className="mt-1 text-white/40 text-xs tracking-wide"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                7 days a week
              </p>
            </div>

            <a
              href="sms:+15134322052"
              className="btn-glow block text-center bg-purple-700 hover:bg-purple-600 text-white px-6 py-3.5 rounded-full text-sm tracking-widest uppercase"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Text Us to Book
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
