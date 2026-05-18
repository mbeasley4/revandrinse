import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t" style={{ borderColor: "rgba(109,40,217,0.2)" }}>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <span
              className="text-xl text-purple-400"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
            >
              REV &amp;
            </span>
            <span
              className="text-xl text-white"
              style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
            >
              RINSE
            </span>
          </div>
          <p
            className="text-[0.6rem] tracking-[0.3em] text-white/35 uppercase mb-4"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Auto Detailing
          </p>
          <p
            className="text-white/35 text-xs italic leading-relaxed"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            &ldquo;Detailing Excellence, Every Drive.&rdquo;
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p
            className="text-xs tracking-widest uppercase text-purple-400/60 mb-4"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Navigation
          </p>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/before-after", label: "Before & After" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white/45 hover:text-white text-xs tracking-widest uppercase transition-colors"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {label}
              </Link>
            ))}
            <a
              href="sms:+15134322052"
              className="text-purple-400/70 hover:text-purple-300 text-xs tracking-widest uppercase transition-colors"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Book Now
            </a>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p
            className="text-xs tracking-widest uppercase text-purple-400/60 mb-4"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Contact
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="sms:+15134322052"
              className="text-white/60 hover:text-white text-sm tracking-wide transition-colors"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              (513) 432-2052
            </a>
            <p
              className="text-white/40 text-xs tracking-wide"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Greater Cincinnati Area
            </p>
            <p
              className="text-white/30 text-xs leading-relaxed"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Mobile detailing along the I-275 corridor — we come to you.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-4 py-4 text-center"
        style={{ borderColor: "rgba(109,40,217,0.1)" }}
      >
        <p
          className="text-white/20 text-xs tracking-widest"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          &copy; {new Date().getFullYear()} Rev &amp; Rinse Auto Detailing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
