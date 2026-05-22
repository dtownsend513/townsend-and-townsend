import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}