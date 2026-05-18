"use client";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  before: string;
  after: string;
  pairNumber: number;
  description?: string;
}

export default function BeforeAfterSlider({ before, after, pairNumber, description }: Props) {
  const [slider, setSlider] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setSlider(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateSlider(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateSlider(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid rgba(109,40,217,0.35)" }}
    >
      <div
        ref={containerRef}
        className="relative select-none cursor-ew-resize touch-none"
        style={{ aspectRatio: "3/2" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* After image — always fills the full area */}
        <Image
          src={after}
          alt={`After — transformation ${pairNumber}`}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Before image — clipped from the right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`Before — transformation ${pairNumber}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Divider line + handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)] pointer-events-none"
          style={{ left: `${slider}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-purple-700 border-2 border-white shadow-[0_0_14px_rgba(168,85,247,0.9)] flex items-center justify-center">
            <span className="text-white text-xs select-none">↔</span>
          </div>
        </div>

        {/* Labels */}
        <span
          className="absolute bottom-2 left-2 text-xs tracking-widest uppercase bg-black/70 text-white/70 px-2 py-0.5 rounded pointer-events-none"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Before
        </span>
        <span
          className="absolute bottom-2 right-2 text-xs tracking-widest uppercase bg-purple-900/70 text-purple-200 px-2 py-0.5 rounded pointer-events-none"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          After
        </span>
      </div>

      {/* Description */}
      {description && (
        <div
          className="px-4 py-3 text-sm text-white/60 tracking-wide border-t"
          style={{ borderColor: "rgba(109,40,217,0.25)", fontFamily: "var(--font-oswald)" }}
        >
          {description}
        </div>
      )}
    </div>
  );
}
