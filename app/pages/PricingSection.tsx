/* eslint-disable react/no-unescaped-entities */
'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card-hover-effect";
import { Check, Crown, Star, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContexts";


const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "1 997",
    period: "/mois",
    description: "Parfait pour démarrer votre croissance digitale",
    popular: false,
    features: [
      "Audit SEO complet",
      "Optimisation de 10 pages",
      "2 campagnes publicitaires",
      "Reporting mensuel",
      "Support email prioritaire",
      "Formation équipe"
    ],
    highlight: "Résultats garantis en 30 jours"
  },
  {
    name: "Business",
    icon: Star,
    price: "3 997",
    period: "/mois",
    description: "L'offre la plus populaire pour une croissance explosive",
    popular: true,
    features: [
      "Tout du plan Starter",
      "Stratégie omnicanale complète",
      "5 campagnes publicitaires",
      "Content marketing avancé",
      "A/B testing continu",
      "Support téléphonique",
      "Account manager dédié",
      "Reporting hebdomadaire"
    ],
    highlight: "ROI moyen de +350%"
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Sur mesure",
    period: "",
    description: "Solution personnalisée pour les grandes ambitions",
    popular: false,
    features: [
      "Tout du plan Growth",
      "Stratégie 100% personnalisée",
      "Équipe dédiée complète",
      "Développements sur-mesure",
      "Formation approfondie",
      "Support 24/7",
      "Reporting en temps réel",
      "Consulting stratégique"
    ],
    highlight: "Accompagnement premium"
  }
];
const PricingSection = () => {
  const { t } = useLanguage();
  

  return (
    <section id="tarifs" className="py-12 sm:py-16 md:py-20 bg-[linear-gradient(180deg,hsl(223,40%,20%)_0%,hsl(229,61%,10%)_100%)]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4 sm:mb-6">
              {t('pricing.title')}
              <span className="bg-[linear-gradient(135deg,hsl(197,100%,50%)_0%,hsl(219,100%,50%)_100%)] bg-clip-text text-transparent"> {t('pricing.subtitle')}</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#B0B8D1] max-w-3xl mx-auto px-4">
              {t('pricing.description')}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative bg-[#0A0F2C] border-[#1F2A48] hover:shadow-blue-500/5 transition-all duration-300 ${
                    plan.popular ? 'border-[#00B2FF] scale-105 shadow-blue/5' : 'hover:border-[#00B2FF]/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[linear-gradient(135deg,hsl(197,100%,50%)_0%,hsl(219,100%,50%)_100%)] text-white px-4 py-2 rounded-full text-sm font-medium">
                        Le plus populaire
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-[linear-gradient(135deg,hsl(197,100%,50%)_0%,hsl(219,100%,50%)_100%)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Plan name */}
                    <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">{plan.name}</h3>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#FFFFFF]">{plan.price}€</span>
                      <span className="text-[#B0B8D1]">{plan.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-[#B0B8D1]">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Highlight */}
                    <div className="bg-[#1F2A48]/50 rounded-lg p-3 mb-6 text-center">
                      <span className="text-sm font-medium text-[#00B2FF]">{plan.highlight}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#00B2FF] mt-0.5 flex-shrink-0" />
                          <span className="text-[#B0B8D1]">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      variant={plan.popular ? "default" : "outline"} 
                      size="lg" 
                      className="w-full"
                    >
                      {plan.name === "Enterprise" ? "Nous contacter" : "Commencer maintenant"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Guarantee Section */}
          <div className="text-center bg-[#0A0F2C]/50 backdrop-blur-sm rounded-2xl border border-[#1F2A48] p-8">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">
                Garantie 100% Satisfaction
              </h3>
              <p className="text-[#B0B8D1] mb-6">
                Si vous n'êtes pas entièrement satisfait de nos services dans les 30 premiers jours, 
                nous vous remboursons intégralement. Aucune question posée.
              </p>
              <div className="flex justify-center items-center gap-8 text-sm text-[#B0B8D1]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B2FF]" />
                  Sans engagement
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B2FF]" />
                  Résultats garantis
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00B2FF]" />
                  Support inclus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;