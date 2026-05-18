import type { Metadata } from "next";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Before & After Results",
  description:
    "Real transformation results from Rev & Rinse Auto Detailing in Madeira, Ohio. Drag each slider to see the difference — exterior, interior, and paint correction.",
  alternates: {
    canonical: "https://revandrinse.com/before-after",
  },
  openGraph: {
    title: "Before & After | Rev & Rinse Auto Detailing",
    description:
      "Real transformation results from Rev & Rinse Auto Detailing in Madeira, Ohio. See the difference for yourself.",
    url: "https://revandrinse.com/before-after",
  },
};

interface SanityPair {
  _id: string;
  description?: string;
  before: object;
  after: object;
}

async function getPairs(): Promise<SanityPair[]> {
  return client.fetch(
    `*[_type == "beforeAfterPair"] | order(order asc) { _id, description, before, after }`
  );
}

export default async function BeforeAfterPage() {
  const pairs = await getPairs();

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="pt-10 pb-10 text-center px-4">
        <p
          className="text-purple-400 text-sm tracking-[0.35em] uppercase mb-2"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          The Proof
        </p>
        <h1
          className="text-[clamp(3rem,12vw,7rem)] text-white leading-none"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
        >
          Before &amp; After
        </h1>
        <p
          className="mt-3 text-white/40 text-sm max-w-md mx-auto"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Drag each slider to reveal the transformation. Real results, real cars.
        </p>
      </div>

      {/* Gallery grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {pairs.length === 0 ? (
          <div className="lg:col-span-2 text-center py-20">
            <p
              className="text-white/30 text-sm tracking-widest uppercase"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Photos coming soon — check back after your first detail!
            </p>
          </div>
        ) : (
          pairs.map((pair, i) => (
            <BeforeAfterSlider
              key={pair._id}
              before={urlFor(pair.before).width(900).url()}
              after={urlFor(pair.after).width(900).url()}
              pairNumber={i + 1}
              description={pair.description}
            />
          ))
        )}
      </div>

      {/* CTA */}
      <div
        className="py-16 text-center border-t"
        style={{ borderColor: "rgba(109,40,217,0.2)" }}
      >
        <p
          className="text-white/50 text-sm mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Ready to transform your car?
        </p>
        <a
          href="sms:+15134322052"
          className="btn-glow inline-block bg-purple-700 hover:bg-purple-600 text-white px-12 py-4 rounded-full font-semibold tracking-widest uppercase text-sm"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Text Us to Book
        </a>
        <p
          className="mt-3 text-purple-400/50 text-xs tracking-widest"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          (513) 432-2052
        </p>
      </div>
    </main>
  );
}
