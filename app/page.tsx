import FAQSection from "./pages/FAQSection";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import HowItWorksSection from "./pages/HowItWorksSection";
import PricingSection from "./pages/PricingSection";
import ProjectsSection from "./pages/ProjectSection";
import ServicesSection from "./pages/ServicesSection";
import  { Testimonials } from "./pages/TestimonialsSection";

export default function Home() {
  return (
    <>
    <div className="min-h-screen font-inter">
      <Header/>
      <HeroSection />
      <ProjectsSection />
      <HowItWorksSection />
      <ServicesSection />
      <Testimonials />
      <PricingSection />
      <FAQSection />
    </div>
      {/* <footer className="text-center text-gray-500">
        &copy; {new Date().getFullYear()} SellElite Agency. Tous droits réservés.
      </footer> */}
    </>
  );
}
