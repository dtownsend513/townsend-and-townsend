import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ServicesGrid from "../components/ServicesGrid";
import StatsSection from "../components/StatsSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

import { theme } from "../data/theme";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      <HeroSection />
      <FeaturesSection />
      <ServicesGrid />
      <StatsSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}