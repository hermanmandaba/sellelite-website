"use client";

import { useLanguage } from "../contexts/LanguageContexts";

import Carousel from "@/components/ui/carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}

const ProjectsSection = () => {
  const { t } = useLanguage();
  
//   const projects = [
//     {
//       title: "E-commerce Fashion",
//       description: "Transformation digitale complète d'une boutique de mode",
//       results: [
//         { label: "Chiffre d'affaires", value: "+450%" },
//         { label: "Trafic organique", value: "+280%" },
//         { label: "Conversions", value: "+320%" }
//       ],
//       tags: ["SEO", "Ads", "UX/UI", "E-commerce"],
//       color: "from-blue-gradient-start to-blue-gradient-end"
//     },
//     {
//       title: "SaaS B2B",
//       description: "Stratégie de croissance pour une plateforme SaaS innovante",
//       results: [
//         { label: "Leads qualifiés", value: "+380%" },
//         { label: "MRR", value: "+420%" },
//         { label: "Rétention", value: "+95%" }
//       ],
//       tags: ["Growth", "Content", "Automation", "Analytics"],
//       color: "from-medium-blue to-blue-gradient-end"
//     },
//     {
//       title: "Startup FinTech",
//       description: "Lancement et positionnement d'une fintech disruptive",
//       results: [
//         { label: "Utilisateurs", value: "+500%" },
//         { label: "Notoriété", value: "+350%" },
//         { label: "Investissement", value: "2M€" }
//       ],
//       tags: ["Branding", "PR", "Social", "Funnel"],
//       color: "from-accent to-blue-gradient-start"
//     }
//   ];

  return (
    <section id="projets" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[linear-gradient(180deg,hsl(223,40%,20%)_0%,hsl(229,61%,10%)_100%)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4 sm:mb-6">
              {t('projects.title')}
              <span className="bg-[linear-gradient(135deg,hsl(197,100%,50%)_0%,hsl(219,100%,50%)_100%)] bg-clip-text text-transparent"> {t('projects.subtitle')}</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#FFFFFF] max-w-3xl mx-auto px-4">
              {t('projects.description')}
            </p>
          </div>
            {/* Carousel */}
            <CarouselDemo />

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
