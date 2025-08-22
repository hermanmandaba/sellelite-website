'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card-hover-effect";
import { ArrowRight, Code, Megaphone, PenTool, Search } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContexts";




const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Megaphone,
      title: "Marketing Digital",
      description: "Stratégies sur-mesure pour booster votre visibilité et vos conversions.",
      features: ["Publicité en ligne", "Social media", "Email marketing", "Content marketing"]
    },
    {
      icon: Search,
      title: "SEO & Référencement",
      description: "Positionnement #1 sur Google avec notre expertise technique et éditoriale avancée.",
      features: ["Audit SEO complet", "Optimisation technique", "Content marketing", "Link building"]
    },
    {
      icon: PenTool,
      title: "Design & UX/UI",
      description: "Interfaces captivantes qui convertissent et fidélisent vos visiteurs.",
      features: ["Web design", "UI/UX", "Branding", "Conversion rate"]
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "Sites performants et optimisés pour la conversion et la vitesse.",
      features: ["Sites vitrine", "E-commerce", "Applications", "Maintenance"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[linear-gradient(180deg,hsl(223,40%,20%)_0%,hsl(229,61%,10%)_100%)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4 sm:mb-6">
              {t('services.title')}
              <span className="bg-[linear-gradient(135deg,hsl(197,100%,50%)_0%,hsl(219,100%,50%)_100%)] bg-clip-text text-transparent"> {t('services.subtitle')}</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#B0B8D1] max-w-3xl mx-auto px-4">
              {t('services.description')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group bg-[#0A0F2C] border-[#1F2A48] hover:border-[#00B2FF]/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(197,100%,50%/0.3)] h-full hover:scale-105 hover:-translate-y-2 hover:bg-[#0A0F2C]/80 cursor-pointer">
                  <CardContent className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-[linear-gradient(135deg,hsl(197,100%,50%)_0%,hsl(219,100%,50%)_100%)] rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFFFFF] mb-2 sm:mb-3 group-hover:text-[#00B2FF] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#B0B8D1] mb-4 sm:mb-6 leading-relaxed flex-grow text-sm sm:text-base lg:text-lg group-hover:text-[#B0B8D1]/90 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base text-[#B0B8D1] group-hover:text-[#B0B8D1]/90 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00B2FF] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-[#0A0F2C]/50 backdrop-blur-sm rounded-2xl border border-[#1F2A48] p-6 sm:p-8 lg:p-10 mx-4 sm:mx-0 hover:bg-[#0A0F2C]/60 hover:border-[#00B2FF]/50 transition-all duration-500 group">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFFFFF] mb-3 sm:mb-4 lg:mb-6 group-hover:text-[#00B2FF] transition-colors duration-300">
              {t('services.cta.title')}
            </h3>
            <p className="text-[#B0B8D1] mb-4 sm:mb-6 lg:mb-8 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
              {t('services.cta.description')}
            </p>
            <Button variant="default" size="lg" className="hover:scale-105 hover:shadow-[0_0_40px_hsl(197,100%,50%/0.3)] transition-all duration-300 group-hover:scale-110">
              {t('services.cta.button')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;