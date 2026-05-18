import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import BookingForm from "@/components/BookingForm";
import Map from "@/components/Map";

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
