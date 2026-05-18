import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import BookingForm from "@/components/BookingForm";
import Map from "@/components/Map";

export const metadata: Metadata = {
  title: "Rev & Rinse Auto Detailing | Madeira, Ohio",
  description:
    "Detailing excellence, every drive. Professional auto detailing in Madeira, Ohio. Exterior wash, interior detail, steam cleaning, clay bar treatment & carpet shampooing. Text us to book.",
  alternates: {
    canonical: "https://revandrinse.com",
  },
};

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Services />
      <BeforeAfter />
      <Map />
    </main>
  );
}
