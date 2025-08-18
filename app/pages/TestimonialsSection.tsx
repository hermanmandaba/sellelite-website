'use client';

import CircularTestimonials from "../../components/circular-testimonials";
import { useLanguage } from "../contexts/LanguageContexts";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  const testimonialsData = [
    {
      name: "Marie Dubois",
      role: "CEO, TechCorp",
      text: "SellElite a transformé notre présence digitale. En 6 mois, notre chiffre d'affaires a augmenté de 350%. Leur approche data-driven et leur expertise sont exceptionnelles.",
      src: "/man.jpg"
    },
    {
      name: "Pierre Martin",
      role: "Fondateur, InnovLab",
      text: "Une équipe de professionnels qui tient ses promesses. Grâce à leur stratégie SEO, nous sommes passés de la page 3 au top 3 Google en moins de 4 mois.",
      src: "/woman.jpg"
    },
    {
      name: "Sophie Laurent",
      role: "CMO, GrowthCo",
      text: "Le ROI de nos campagnes publicitaires a été multiplié par 4. SellElite maîtrise parfaitement l'art de la conversion digitale.",
      src: "/woman-girl.jpg"
    },
    {
      name: "Thomas Bernard",
      role: "Directeur, ScalePro",
      text: "Accompagnement exceptionnel du début à la fin. Leur méthodologie claire et leurs résultats rapides ont dépassé toutes nos attentes.",
      src: "/man.jpg"
    },
    {
      name: "Camille Rousseau",
      role: "CEO, NextGen",
      text: "SellElite ne se contente pas de livrer, ils innovent constamment. Notre site e-commerce génère maintenant 5x plus de ventes.",
      src: "/woman.jpg"
    },
    {
      name: "Alexandre Petit",
      role: "Fondateur, DigitalFirst",
      text: "Une équipe réactive, créative et orientée résultats. Ils ont su adapter leur stratégie à nos besoins spécifiques avec brio.",
      src: "/woman-girl.jpg"
    }
  ];

  // Adapter au format attendu par CircularTestimonials
  const mappedTestimonials = testimonialsData.map((t) => ({
    name: t.name,
    designation: t.role,
    quote: t.text,
    src: t.src,
  }));

  return (
    <section id="temoignages" className="py-12 sm:py-16 md:py-20 bg-[#0A0F2C] text-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4 sm:mb-6">
              {t('testimonials.title')}
              <span className="bg-[linear-gradient(135deg,hsl(197,100%,50%)_0%,hsl(219,100%,50%)_100%)] bg-clip-text text-transparent"> {t('testimonials.subtitle')}</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#FFFFFF] max-w-3xl mx-auto px-4">
              {t('testimonials.description')}
            </p>
          </div>

          {/* Testimonials Carousel */}
          <CircularTestimonials testimonials={mappedTestimonials} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
