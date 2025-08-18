'use client'
import { Card, CardContent } from "@/components/ui/card-hover-effect";
import { useLanguage } from "../contexts/LanguageContexts";
import { BarChart3, Rocket, Search, Target } from "lucide-react";



const HowItWorksSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Audit Complet",
      description: "Analyse approfondie de votre situation actuelle, identification des opportunités et des points de blocage.",
      duration: "24h"
    },
    {
      icon: Target,
      step: "02", 
      title: "Stratégie Sur-Mesure",
      description: "Élaboration d'un plan d'action personnalisé avec des objectifs clairs et des KPIs mesurables.",
      duration: "48h"
    },
    {
      icon: Rocket,
      step: "03",
      title: "Mise en Œuvre",
      description: "Déploiement des actions optimisées avec notre équipe d'experts dédiée à votre projet.",
      duration: "7 jours"
    },
    {
      icon: BarChart3,
      step: "04",
      title: "Optimisation Continue",
      description: "Suivi en temps réel des performances et ajustements constants pour maximiser les résultats.",
      duration: "Permanent"
    }
  ];

  return (
    <section id="comment-ca-marche" className="py-12 sm:py-16 md:py-20 bg-[#0A0F2C]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4 sm:mb-6">
              {t('howItWorks.title')}
              <span className="bg-[linear-gradient(135deg,hsl(197,100%,50%)_0%,hsl(219,100%,50%)_100%)] bg-clip-text text-transparent"> {t('howItWorks.subtitle')}</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#B0B8D1] max-w-3xl mx-auto px-4">
              {t('howItWorks.description')}
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative bg-[#0A0F2C] border-[#1F2A48] hover:border-[#00B2FF]/50 transition-all duration-300 hover:scale-105 shadow  hover:shadow-[#00B2FF] group">
                  <CardContent className="p-6 text-center">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-[linear-gradient(135deg,hsl(197,100%,50%)_0%,hsl(219,100%,50%)_100%)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mt-4 mb-6">
                      <Icon className="w-12 h-12 text-[#00B2FF] mx-auto group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#00B2FF] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#B0B8D1] mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Duration */}
                    <div className="inline-flex items-center px-3 py-1 bg-[#1F2A48] rounded-full">
                      <span className="text-xs font-medium text-[#B0B8D1]">
                        {step.duration}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Process Flow */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-[linear-gradient(180deg,hsl(223,40%,20%)_0%,hsl(229,61%,10%)_100%)] rounded-2xl border border-[#1F2A48">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00B2FF] rounded-full animate-pulse"></div>
                <span className="text-[#B0B8D1]">Démarrage immédiat</span>
              </div>
              <div className="w-8 h-px bg-[#1F2A48]"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#1C4EFF] rounded-full animate-pulse delay-300"></div>
                <span className="text-[#B0B8D1]">Résultats rapides</span>
              </div>
              <div className="w-8 h-px bg-[#1F2A48]"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#005DFF] rounded-full animate-pulse delay-700"></div>
                <span className="text-[#B0B8D1]">Croissance durable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;