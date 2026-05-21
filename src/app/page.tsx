import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}