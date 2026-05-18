"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/before-after", label: "Before & After" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-20 bg-black/85 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/revrinse-logo.png"
            alt="Rev & Rinse Auto Detailing"
            width={200}
            height={65}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-widest uppercase transition-colors ${
                pathname === href
                  ? "text-purple-400"
                  : "text-white/55 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              {label}
            </Link>
          ))}
          <a
            href="sms:+15134322052"
            className="btn-glow bg-purple-700 hover:bg-purple-600 text-white px-7 py-2.5 rounded-full text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile: compact Book + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="sms:+15134322052"
            className="btn-glow bg-purple-700 hover:bg-purple-600 text-white px-5 py-2 rounded-full text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Book
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-white/60 hover:text-white p-1 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-black/95 border-b border-purple-900/30 px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-widest uppercase transition-colors ${
                pathname === href ? "text-purple-400" : "text-white/55 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
