import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <HeroSection />

      <PricingSection />

      <ServicesSection />

      <TrustSection />

      <PortfolioSection />

      <TestimonialsSection />

      <ProcessSection />

      <CTASection />
    </main>
  );
}