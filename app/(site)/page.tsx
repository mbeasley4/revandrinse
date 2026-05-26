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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Rev & Rinse Auto Detailing",
  description:
    "Professional mobile auto detailing serving Madeira, Ohio and the Greater Cincinnati area along the I-275 corridor.",
  url: "https://revandrinse.com",
  telephone: "+15134322052",
  priceRange: "$$",
  image: "https://revandrinse.com/images/revandrinse-social.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madeira",
    addressRegion: "OH",
    postalCode: "45243",
    addressCountry: "US",
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
