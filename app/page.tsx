import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <HeroSection />
            {/* <ServicesSection />
      <PricingSection />
      <HowItWorksSection />
      <WhyReelzoSection />
      <ImpactSection />
      <CTASection />
      <ContactSection /> */}
        </main>
    );
}
