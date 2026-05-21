import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}