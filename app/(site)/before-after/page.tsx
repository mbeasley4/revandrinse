import type { Metadata } from "next";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Before & After Auto Detailing Results | Madeira, Ohio",
  description:
    "See real before & after photos from Rev & Rinse Auto Detailing in Madeira, Ohio. Drag each slider to reveal paint correction, interior cleaning, steam treatment & more — serving Cincinnati's I-275 corridor.",
  keywords: [
    "before after car detailing",
    "auto detailing results Madeira Ohio",
    "Cincinnati car detailing photos",
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
      "Real car detailing transformations from Rev & Rinse in Madeira, Ohio. Drag each slider to see exterior, interior & paint correction results across the Cincinnati area.",
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
      "Real car detailing transformations in Madeira, Ohio. See the difference for yourself.",
    images: ["/images/revandrinse-social.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutomotiveBusiness",
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Auto Detailing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Wash", "description": "Hand wash, wheel scrub, streak-free rinse & blow dry." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Detail", "description": "Deep vacuuming, surface wipe-down & leather conditioning." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Steam Cleaning", "description": "High-temperature steam blasts away grime & bacteria." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Clay Bar Treatment", "description": "Removes embedded contaminants for a glass-smooth finish." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carpet Shampooing", "description": "Hot-water extraction lifts stains & eliminates odors." } },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://revandrinse.com" },
        { "@type": "ListItem", "position": 2, "name": "Before & After", "item": "https://revandrinse.com/before-after" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a full auto detail take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A full interior and exterior detail typically takes 3–5 hours depending on vehicle size and condition. We come to your location across the greater Cincinnati area so you can carry on with your day while we work.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer mobile auto detailing near Cincinnati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Rev & Rinse is a mobile auto detailing service based in Madeira, Ohio. We serve the I-275 corridor and greater Cincinnati area including Hyde Park, Blue Ash, Montgomery, Anderson Township, and surrounding communities. Text us at (513) 432-2052 to book.",
          },
        },
        {
          "@type": "Question",
          "name": "What is included in an interior car detail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our interior detail includes deep vacuuming, surface wipe-down, leather conditioning, carpet shampooing with hot-water extraction, and steam cleaning of hard surfaces. We target stains, odors, and embedded dirt to restore your interior to like-new condition.",
          },
        },
        {
          "@type": "Question",
          "name": "What does a clay bar treatment do for my car?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A clay bar treatment safely removes embedded contaminants from your paint — including industrial fallout, rail dust, and road tar — that a normal wash can't reach. The result is a glass-smooth finish ready for polishing or wax protection.",
          },
        },
      ],
    },
  ],
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

  return (
    <main className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="pt-10 pb-10 text-center px-4">
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
          Drag each slider to reveal the transformation. Real results, real cars.
        </p>
        {/* Service-area line — visible for users and crawlers */}
        <p
          className="mt-2 text-white/25 text-xs tracking-widest"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Madeira · Blue Ash · Montgomery · Hyde Park · Anderson Township · Cincinnati, OH
        </p>
      </div>

      {/* Gallery grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pairs.length === 0 ? (
          <div className="lg:col-span-3 text-center py-20">
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

      {/* FAQ */}
      <section
        className="max-w-3xl mx-auto px-4 pb-20"
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
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/images/cta-bg.png')" }}
        />
        {/* Dark overlay so text stays readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0,0,0,0.86)" }}
        />
        {/* Purple tint overlay */}
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
