import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import BeforeAfter from "@/components/BeforeAfter";
import BookingForm from "@/components/BookingForm";
import Map from "@/components/Map";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Rev & Rinse Auto Detailing | Madeira, Ohio",
  description:
    "Professional mobile auto detailing in Madeira, Ohio & the Greater Cincinnati area. Exterior wash, interior detail, steam cleaning, clay bar treatment & carpet shampooing. Text us to book.",
  alternates: {
    canonical: "https://revandrinse.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// FAQ content mirrors the on-page <FAQ /> component so the structured data
// matches what users actually read (Google requirement + AEO accuracy).
const homeFaqs = [
  {
    q: "How long does a full detail take?",
    a: "Most full interior + exterior details take 3–5 hours depending on vehicle size and condition. We come to you — no drop-off needed.",
  },
  {
    q: "Do you service my area?",
    a: "We're mobile and serve Madeira, Blue Ash, Montgomery, Hyde Park, Anderson Township, and the broader I-275 corridor around Cincinnati, Ohio. Text us and we'll confirm.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutomotiveBusiness",
      // Stable @id lets every other page reference this single business entity —
      // important for GEO/entity resolution across the site.
      "@id": "https://revandrinse.com/#business",
      name: "Rev & Rinse Auto Detailing",
      alternateName: "Rev and Rinse Auto Detailing",
      description:
        "Professional mobile auto detailing serving Madeira, Ohio and the Greater Cincinnati area along the I-275 corridor. We detail cars, SUVs, and mini vans at your home or office.",
      url: "https://revandrinse.com",
      telephone: "+15134322052",
      priceRange: "$$",
      image: "https://revandrinse.com/images/revandrinse-social.png",
      logo: "https://revandrinse.com/images/revrinse-logo.png",
      currenciesAccepted: "USD",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madeira",
        addressRegion: "OH",
        postalCode: "45243",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.1929,
        longitude: -84.3549,
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 39.1929,
          longitude: -84.3549,
        },
        geoRadius: "32000",
        description: "Greater Cincinnati area along the I-275 corridor",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "18:00",
          description: "By appointment, 7 days a week",
        },
      ],
      sameAs: [
        "https://www.instagram.com/revandrinseauto",
        "https://www.facebook.com/revandrinseauto",
        "https://www.tiktok.com/@revandrinseauto",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Auto Detailing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Exterior Wash",
              description: "Hand wash, wheel scrub, streak-free rinse & blow dry.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Interior Detail",
              description:
                "Deep vacuuming, surface wipe-down & leather conditioning.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Steam Cleaning",
              description:
                "High-temperature steam blasts away grime & bacteria.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Clay Bar Treatment",
              description:
                "Removes embedded contaminants for a glass-smooth finish.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Carpet Shampooing",
              description:
                "Hot-water extraction lifts stains & eliminates odors.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://revandrinse.com/#website",
      url: "https://revandrinse.com",
      name: "Rev & Rinse Auto Detailing",
      publisher: { "@id": "https://revandrinse.com/#business" },
    },
    {
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-black text-white">
        <Hero />
        <Services />
        <Pricing />
        <BeforeAfter />
        <FAQ />
        <Map />
      </main>
    </>
  );
}
