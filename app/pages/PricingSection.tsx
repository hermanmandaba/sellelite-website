/* eslint-disable react/no-unescaped-entities */
'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card-hover-effect";
import { Check, Crown, Star, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContexts";


const PricingSection = () => {
  const { t } = useLanguage();
  
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
      name: "Growth",
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

  return (
    <section id="tarifs" className="py-12 sm:py-16 md:py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              {t('pricing.title')}
              <span className="bg-gradient-hero bg-clip-text text-transparent"> {t('pricing.subtitle')}</span>
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto px-4">
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
                  className={`relative bg-card border-border-blue hover:shadow-glow transition-all duration-300 ${
                    plan.popular ? 'border-blue-gradient-start scale-105 shadow-glow' : 'hover:border-blue-gradient-start/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-hero text-white px-4 py-2 rounded-full text-sm font-medium">
                        Le plus populaire
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Plan name */}
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}€</span>
                      <span className="text-text-secondary">{plan.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Highlight */}
                    <div className="bg-secondary/50 rounded-lg p-3 mb-6 text-center">
                      <span className="text-sm font-medium text-blue-gradient-start">{plan.highlight}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-gradient-start mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">{feature}</span>
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
          <div className="text-center bg-card/50 backdrop-blur-sm rounded-2xl border border-border-blue p-8">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Garantie 100% Satisfaction
              </h3>
              <p className="text-text-secondary mb-6">
                Si vous n'êtes pas entièrement satisfait de nos services dans les 30 premiers jours, 
                nous vous remboursons intégralement. Aucune question posée.
              </p>
              <div className="flex justify-center items-center gap-8 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-gradient-start" />
                  Sans engagement
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-gradient-start" />
                  Résultats garantis
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-gradient-start" />
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