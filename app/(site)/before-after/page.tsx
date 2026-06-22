import type { Metadata } from "next";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Before & After Auto Detailing Results | Madeira, Ohio",
  description:
    "See real before & after photos from Rev & Rinse Auto Detailing in Madeira, Ohio, organized by vehicle type — cars, SUVs & mini vans. Drag each slider to reveal paint correction, interior cleaning, steam treatment & more across Cincinnati's I-275 corridor.",
  keywords: [
    "before after car detailing",
    "auto detailing results Madeira Ohio",
    "Cincinnati car detailing photos",
    "SUV detailing before after",
    "mini van interior detailing",
    "paint correction before after",
    "interior car detailing results",
    "mobile detailing Cincinnati",
    "car transformation photos",
    "clay bar before after",
    "steam cleaning car interior",
    "carpet shampooing results",
    "Rev and Rinse auto detailing",
    "car detailing near me",
  ],
  alternates: {
    canonical: "https://revandrinse.com/before-after",
  },
  openGraph: {
    title: "Before & After Auto Detailing Results | Rev & Rinse",
    description:
      "Real car, SUV & mini van detailing transformations from Rev & Rinse in Madeira, Ohio. Drag each slider to see exterior, interior & paint correction results across the Cincinnati area.",
    url: "https://revandrinse.com/before-after",
    images: [
      {
        url: "/images/revandrinse-social.png",
        width: 1200,
        height: 630,
        alt: "Rev & Rinse Auto Detailing Before & After Results — Madeira, Ohio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Before & After Auto Detailing Results | Rev & Rinse",
    description:
      "Real car, SUV & mini van detailing transformations in Madeira, Ohio. See the difference for yourself.",
    images: ["/images/revandrinse-social.png"],
  },
};

// ── Vehicle sections: order mirrors the pricing page (Cars → SUV → Mini Van) ──
const VEHICLE_SECTIONS = [
  {
    value: "car",
    id: "cars",
    label: "Cars",
    tagline: "Sedans, coupes & hatchbacks brought back to showroom shine.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" aria-hidden="true">
        <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11h.5A1.5 1.5 0 0 1 21 12.5V17a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1v-4.5A1.5 1.5 0 0 1 4.5 11H5zm2.1-.5h9.8l-1-3a.5.5 0 0 0-.48-.5H8.58a.5.5 0 0 0-.48.5l-1 3zM6.5 15.5A1.25 1.25 0 1 0 6.5 13a1.25 1.25 0 0 0 0 2.5zm11 0A1.25 1.25 0 1 0 17.5 13a1.25 1.25 0 0 0 0 2.5z" />
      </svg>
    ),
  },
  {
    value: "suv",
    id: "suv",
    label: "SUV",
    tagline: "Bigger cabins, bigger results — every seat row spotless.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" aria-hidden="true">
        <path d="M3 12l1-5A2 2 0 0 1 6 5.5h12A2 2 0 0 1 20 7l1 5h.2A1.8 1.8 0 0 1 23 13.8V17a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3a1 1 0 0 1-1-1v-3.2A1.8 1.8 0 0 1 2.8 12H3zm2.2-.5h13.6l-.78-3.9A.6.6 0 0 0 17.4 7H6.6a.6.6 0 0 0-.59.6L5.2 11.5zM6 16a1.3 1.3 0 1 0 0-2.6A1.3 1.3 0 0 0 6 16zm12 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z" />
      </svg>
    ),
  },
  {
    value: "minivan",
    id: "mini-van",
    label: "Mini Van",
    tagline: "Family haulers de-crumbed, de-stained & deep cleaned.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full" aria-hidden="true">
        <path d="M2 13l.8-6A2 2 0 0 1 4.8 5h13.6A2.5 2.5 0 0 1 21 7.4L22 13v4a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3a1 1 0 0 1-1-1v-4zm2.3-.5H11V7H5.1a.6.6 0 0 0-.6.55L4.3 12.5zM13 12.5h6.6l-.86-4.85A1 1 0 0 0 17.76 7H13v5.5zM6 16.5a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6zm12 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z" />
      </svg>
    ),
  },
] as const;

type VehicleValue = (typeof VEHICLE_SECTIONS)[number]["value"];

interface SanityPair {
  _id: string;
  description?: string;
  vehicleType?: VehicleValue;
  before: { url: string; lqip?: string };
  after: { url: string; lqip?: string };
}

async function getPairs(): Promise<SanityPair[]> {
  return client.fetch(
    `*[_type == "beforeAfterPair" && defined(before) && defined(after)]
      | order(vehicleType asc, order asc) {
        _id,
        description,
        vehicleType,
        "before": { "url": before.asset->url, "lqip": before.asset->metadata.lqip },
        "after":  { "url": after.asset->url,  "lqip": after.asset->metadata.lqip }
      }`
  );
}

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

export default async function BeforeAfterPage() {
  const pairs = await getPairs();

  // Group into the three vehicle tiers, preserving section order.
  const grouped = VEHICLE_SECTIONS.map((section) => ({
    ...section,
    items: pairs.filter((p) => (p.vehicleType ?? "car") === section.value),
  })).filter((section) => section.items.length > 0);

  // Running counter so slider alt text / numbering stays unique across sections.
  let runningIndex = 0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutomotiveBusiness",
        "@id": "https://revandrinse.com/#business",
        "name": "Rev & Rinse Auto Detailing",
        "url": "https://revandrinse.com",
        "telephone": "+15134322052",
        "image": "https://revandrinse.com/images/revandrinse-social.png",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Madeira",
          "addressRegion": "OH",
          "postalCode": "45243",
          "addressCountry": "US",
        },
        "areaServed": [
          "Madeira, OH",
          "Cincinnati, OH",
          "Blue Ash, OH",
          "Montgomery, OH",
          "Hyde Park, OH",
          "Anderson Township, OH",
          "I-275 Corridor",
        ],
        "sameAs": [
          "https://www.instagram.com/revandrinseauto",
          "https://www.facebook.com/revandrinseauto",
          "https://www.tiktok.com/@revandrinseauto",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://revandrinse.com" },
          { "@type": "ListItem", "position": 2, "name": "Before & After", "item": "https://revandrinse.com/before-after" },
        ],
      },
      {
        // GEO/AEO: an explicit gallery ItemList by vehicle type helps generative
        // engines understand the page is a structured collection of results.
        "@type": "ImageGallery",
        "name": "Rev & Rinse Before & After Detailing Results",
        "description":
          "Before and after auto detailing transformations by Rev & Rinse Auto Detailing in Madeira, Ohio, organized by vehicle type: cars, SUVs, and mini vans.",
        "url": "https://revandrinse.com/before-after",
        "about": grouped.map((g) => `${g.label} detailing`),
        "hasPart": grouped.map((section) => ({
          "@type": "ImageGallery",
          "name": `${section.label} Detailing Before & After`,
          "associatedMedia": section.items.map((item) => ({
            "@type": "ImageObject",
            "contentUrl": item.after.url,
            "caption": item.description
              ? `${section.label} — ${item.description} (after detailing)`
              : `${section.label} after detailing by Rev & Rinse`,
          })),
        })),
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      },
    ],
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="pt-10 pb-8 text-center px-4">
        <p
          className="text-purple-400 text-sm tracking-[0.35em] uppercase mb-2"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          The Proof
        </p>
        <h1
          className="leading-none"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
        >
          <span className="block text-[clamp(3rem,12vw,7rem)] text-purple-400 text-glow">
            Before &amp;
          </span>
          <span className="block text-[clamp(3rem,12vw,7rem)] text-white" style={{ marginTop: "-0.1em" }}>
            After
          </span>
        </h1>
        <p
          className="mt-3 text-white/40 text-sm max-w-md mx-auto"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Drag each slider to reveal the transformation. Real results, grouped by vehicle.
        </p>
        <p
          className="mt-2 text-white/25 text-xs tracking-widest"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Madeira · Blue Ash · Montgomery · Hyde Park · Anderson Township · Cincinnati, OH
        </p>

        {/* Jump nav — anchors to each vehicle section */}
        {grouped.length > 1 && (
          <nav
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
            aria-label="Jump to vehicle type"
          >
            {grouped.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-center gap-2 rounded-full px-5 py-2 text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white transition-all"
                style={{
                  fontFamily: "var(--font-oswald)",
                  background: "linear-gradient(145deg, rgba(109,40,217,0.18), rgba(0,0,0,0.4))",
                  border: "1px solid rgba(168,85,247,0.35)",
                }}
              >
                <span className="w-4 h-4 text-purple-300 group-hover:text-purple-200 transition-colors">
                  {section.icon}
                </span>
                {section.label}
                <span className="text-purple-400/60">{section.items.length}</span>
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Vehicle sections */}
      {grouped.length === 0 ? (
        <div className="max-w-7xl mx-auto px-4 pb-20 text-center py-20">
          <p
            className="text-white/30 text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Photos coming soon — check back after your first detail!
          </p>
        </div>
      ) : (
        grouped.map((section, sIndex) => (
          <section
            key={section.id}
            id={section.id}
            aria-label={`${section.label} before and after detailing results`}
            className="relative scroll-mt-28 py-16"
            style={{
              background:
                sIndex % 2 === 0
                  ? "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(109,40,217,0.14) 0%, #000 65%)"
                  : "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(109,40,217,0.12) 0%, #000 65%)",
            }}
          >
            {/* subtle grid overlay to match pricing aesthetic */}
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px)",
                backgroundSize: "52px 52px",
                maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4">
              {/* Section header */}
              <div className="flex flex-col items-center text-center mb-12">
                <div
                  className="w-16 h-16 mb-4 p-3.5 rounded-2xl text-purple-300"
                  style={{
                    background: "linear-gradient(160deg, rgba(109,40,217,0.3), rgba(0,0,0,0.6))",
                    border: "1px solid rgba(168,85,247,0.45)",
                    boxShadow: "0 0 30px rgba(109,40,217,0.25), inset 0 1px 0 rgba(168,85,247,0.2)",
                  }}
                >
                  {section.icon}
                </div>
                <h2
                  className="text-[clamp(2.25rem,7vw,4.5rem)] text-white leading-none text-glow"
                  style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
                >
                  {section.label}
                </h2>
                <div className="mt-3 h-px w-40 bg-linear-to-r from-transparent via-purple-400/70 to-transparent" />
                <p
                  className="mt-4 text-white/45 text-sm max-w-md tracking-wide"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {section.tagline}
                </p>
              </div>

              {/* Grid of sliders */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((pair) => {
                  runningIndex += 1;
                  return (
                    <BeforeAfterSlider
                      key={pair._id}
                      before={urlFor(pair.before.url).width(900).quality(80).auto("format").url()}
                      after={urlFor(pair.after.url).width(900).quality(80).auto("format").url()}
                      blurBefore={pair.before.lqip}
                      blurAfter={pair.after.lqip}
                      pairNumber={runningIndex}
                      description={pair.description}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        ))
      )}

      {/* FAQ */}
      <section
        className="max-w-3xl mx-auto px-4 pt-8 pb-20"
        aria-label="Frequently asked questions about auto detailing"
      >
        <p
          className="text-purple-400 text-sm tracking-[0.35em] uppercase mb-2 text-center"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Got Questions?
        </p>
        <h2
          className="text-[clamp(2rem,6vw,3.5rem)] text-white leading-none mb-8 text-center"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
        >
          Common Questions
        </h2>
        <dl className="flex flex-col gap-4">
          {faqs.map(({ q, a }) => (
            <div
              key={q}
              className="rounded-xl px-6 py-5"
              style={{
                background: "linear-gradient(145deg, rgba(109,40,217,0.1) 0%, rgba(0,0,0,0.5) 100%)",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              <dt
                className="text-white text-sm tracking-wide mb-2"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {q}
              </dt>
              <dd
                className="text-white/50 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA */}
      <div
        className="relative py-24 text-center overflow-hidden"
        style={{ borderTop: "1px solid rgba(168,85,247,0.3)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/images/cta-bg.png')" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0,0,0,0.86)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(109,40,217,0.35) 0%, rgba(0,0,0,0) 70%)" }}
        />

        <div className="relative z-10">
          <p
            className="text-purple-300 text-xs tracking-[0.4em] uppercase mb-3"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Book Your Detail
          </p>
          <p
            className="leading-none mb-8"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
          >
            <span className="block text-[clamp(2.5rem,8vw,6.5rem)] text-white">
              Ready to Transform
            </span>
            <span className="block text-[clamp(3rem,12vw,9rem)] text-white">
              Your Car?
            </span>
          </p>
          <a
            href="sms:+15134322052"
            className="btn-glow inline-block bg-purple-700 hover:bg-purple-600 text-white px-14 py-5 rounded-full font-semibold tracking-widest uppercase text-sm transition-colors"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Text Us to Book
          </a>
          <p
            className="mt-6 text-purple-400 text-xl md:text-2xl tracking-widest"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            (513) 432-2052
          </p>
        </div>
      </div>
    </main>
  );
}
