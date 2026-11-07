import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FreshnessSection from "@/components/FreshnessSection";
import StorySection from "@/components/StorySection";
import ProductSection from "@/components/ProductSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />
      <FreshnessSection />
      <StorySection />
      <ProductSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}
