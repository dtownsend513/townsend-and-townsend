import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950">
      <HeroSection />

      <PortfolioSection />

      <ServicesSection />

      <PricingSection />

      <TestimonialsSection />

      <CTASection />
    </main>
  );
}