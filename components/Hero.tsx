"use client";

import Image from "next/image";
import Bubbles from "./Bubbles";
import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";

export default function Hero() {
  const locationRef = useRef<HTMLParagraphElement>(null);
  const revRef = useRef<HTMLSpanElement>(null);
  const rinseRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLSpanElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const phoneRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const els = [
      locationRef.current,
      revRef.current,
      rinseRef.current,
      subRef.current,
      dividerRef.current,
      taglineRef.current,
      ctaRef.current,
      phoneRef.current,
    ];

    // Hide all elements before animating
    els.forEach((el) => {
      if (el) {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(24px)";
      }
    });
    if (revRef.current) revRef.current.style.transform = "translateX(-40px)";
    if (rinseRef.current) rinseRef.current.style.transform = "translateX(40px)";
    if (dividerRef.current) {
      dividerRef.current.style.transform = "scaleX(0)";
      dividerRef.current.style.transformOrigin = "center";
    }

    const tl = createTimeline({ defaults: { ease: "outExpo", duration: 800 } });

    tl.add(locationRef.current!, { opacity: [0, 1], translateY: [16, 0] }, 200)
      .add(revRef.current!, { opacity: [0, 1], translateX: [-40, 0], filter: ["blur(8px)", "blur(0px)"] }, 450)
      .add(rinseRef.current!, { opacity: [0, 1], translateX: [40, 0], filter: ["blur(8px)", "blur(0px)"] }, 550)
      .add(subRef.current!, { opacity: [0, 1], translateY: [16, 0] }, 750)
      .add(
        dividerRef.current!,
        { opacity: [0, 1], scaleX: [0, 1], duration: 600, ease: "outCubic" },
        900
      )
      .add(taglineRef.current!, { opacity: [0, 1], translateY: [12, 0], duration: 700 }, 1050)
      .add(ctaRef.current!, { opacity: [0, 1], translateY: [20, 0], scale: [0.9, 1], ease: "outBack", duration: 700 }, 1200)
      .add(phoneRef.current!, { opacity: [0, 1], translateY: [10, 0], duration: 600 }, 1350);

    // Idle pulse on CTA after entrance finishes
    const pulse = setTimeout(() => {
      if (!ctaRef.current) return;
      const loop = () => {
        createTimeline({ loop: true })
          .add(ctaRef.current!, {
            scale: [1, 1.04, 1],
            duration: 2200,
            ease: "inOutSine",
          });
      };
      loop();
    }, 2200);

    return () => clearTimeout(pulse);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/images/hero-bg.png"
        alt="Rev & Rinse"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Light edge vignette — just darkens the very edges, not the whole image */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)"
      }} />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black to-transparent pointer-events-none" />

      <Bubbles />

      <div className="relative z-10 px-4 flex flex-col items-center">
        {/* Dark scrim behind just the content */}
        <div className="absolute inset-0 -z-10 rounded-3xl" style={{
          background: "radial-gradient(ellipse 80% 90% at 50% 50%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
          filter: "blur(24px)",
        }} />

        {/* Location chip */}
        <p
          ref={locationRef}
          className="mb-4 text-xs tracking-[0.3em] uppercase text-purple-400 opacity-80"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Madeira, Ohio
        </p>

        {/* Main brand name */}
        <h1
          className="leading-none tracking-wide"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          <span ref={revRef} className="block text-[clamp(4rem,18vw,10rem)] text-glow text-purple-400">
            REV &amp;
          </span>
          <span ref={rinseRef} className="block text-[clamp(4rem,18vw,10rem)] text-white" style={{ marginTop: "-0.1em" }}>
            RINSE
          </span>
          <span
            ref={subRef}
            className="block text-[clamp(1.1rem,4vw,2rem)] tracking-[0.5em] text-white/70 mt-1"
          >
            AUTO DETAILING
          </span>
        </h1>

        {/* Divider */}
        <div ref={dividerRef} className="mt-5 mb-5 flex items-center gap-3 w-72">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-600" />
          <span className="text-purple-400 text-xs tracking-widest" style={{ fontFamily: "var(--font-oswald)" }}>✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-600" />
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-purple-300 italic text-sm tracking-widest text-glow-sm"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          &ldquo;Detailing Excellence, Every Drive.&rdquo;
        </p>

        {/* CTA */}
        <a
          ref={ctaRef}
          href="sms:+15134322052"
          className="mt-8 inline-block bg-purple-700 hover:bg-purple-600 text-white px-12 py-4 rounded-full font-semibold tracking-widest uppercase text-sm btn-glow"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Text Us to Book
        </a>

        <p
          ref={phoneRef}
          className="mt-4 text-purple-400/60 text-xs tracking-widest"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Text&nbsp;
          <a href="sms:+15134322052" className="text-purple-400 hover:text-purple-300 transition-colors">
            (513) 432-2052
          </a>
          &nbsp;to book with us
        </p>
      </div>

    </section>
  );
}
