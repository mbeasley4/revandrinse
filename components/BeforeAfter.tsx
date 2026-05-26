import Image from "next/image";
import Link from "next/link";

export default function BeforeAfter() {
  return (
    <section className="py-20 bg-black text-center">
      <p
        className="text-purple-400 text-sm tracking-[0.35em] uppercase mb-2"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        The Proof
      </p>
      <h2
        className="text-[clamp(2.5rem,8vw,5rem)] text-white leading-none mb-4 text-glow"
        style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
      >
        Before &amp; After
      </h2>
      <p
        className="text-white/40 text-sm mb-10 tracking-wide"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        Real results from real cars.
      </p>

      {/* Preview — two stacked images for pair 1 */}
      <div className="max-w-3xl mx-auto px-4">
        <div
          className="rounded-xl overflow-hidden grid grid-cols-2 gap-0.5"
          style={{ border: "1px solid rgba(109,40,217,0.35)" }}
        >
          <div className="relative overflow-hidden">
            <Image
              src="/images/before_after/before1.jpg"
              alt="Before detailing"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <span
              className="absolute bottom-2 left-2 text-xs tracking-widest uppercase bg-black/70 text-white/70 px-2 py-0.5 rounded"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Before
            </span>
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/before_after/after1.jpg"
              alt="After detailing"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <span
              className="absolute bottom-2 right-2 text-xs tracking-widest uppercase bg-purple-900/70 text-purple-200 px-2 py-0.5 rounded"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              After
            </span>
          </div>
        </div>

        <Link
          href="/before-after"
          className="btn-glow mt-6 inline-block border border-purple-600 text-purple-300 hover:text-white px-10 py-3 rounded-full text-sm tracking-widest uppercase transition-colors"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          See All Transformations&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block w-4 h-4 align-middle mb-0.5"
            aria-hidden="true"
          >
            {/* 4-point shine burst — evokes glare on a freshly polished car */}
            <path d="M12 2 L13.2 10.8 L22 12 L13.2 13.2 L12 22 L10.8 13.2 L2 12 L10.8 10.8 Z" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
