import HeroSection from "@/components/sections/hero/HeroSection";
import TrustStrip from "@/components/sections/stats/TrustStrip";
import IntroSection from "@/components/sections/intro/IntroSection";
import ConnectedSystem from "@/components/sections/methodology/ConnectedSystem";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import CoreBeliefs from "@/components/sections/beliefs/CoreBeliefs";
import LeadershipTeam from "@/components/sections/leadership/LeadershipTeam";
import SEOContent from "@/components/sections/seo/SEOContent";
import FinalCTA from "@/components/sections/cta/FinalCTA";

export const metadata = {
  title: "Phoenix Cloud Technologies | Oracle Cloud HCM & Payroll Specialists",
  description:
    "Outcome-led Oracle Cloud HCM & Payroll delivery. FLIGHT™ methodology, CloudifAI™ delivery model, ZentoH™ orchestration, and GLIDE™ managed services.",
};

export default function HomePage() {
  return (
    <div className="bg-[#0A1929] min-h-screen">
      <HeroSection />
      <TrustStrip />
      <IntroSection />
      <ConnectedSystem />
      <ServicesGrid />
      <CoreBeliefs />
      <LeadershipTeam />
      <Testimonials />
      <SEOContent />
      <FinalCTA />
    </div>
  );
}
