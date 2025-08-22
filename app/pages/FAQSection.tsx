/* eslint-disable react/no-unescaped-entities */
"use client"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { useLanguage } from "../contexts/LanguageContexts";

const faqs = [
  {
    question: "Combien de temps faut-il pour voir les premiers résultats ?",
    answer: "Nos clients voient généralement les premiers résultats dans les 30 premiers jours. Pour le SEO, comptez 3-6 mois pour des résultats durables. Les campagnes publicitaires peuvent générer du trafic dès le premier jour."
  },
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer: "Nous travaillons avec des TPE, PME et startups dans tous les secteurs : e-commerce, SaaS, services B2B, formation, santé, immobilier, etc. Notre approche s'adapte à chaque secteur et chaque budget."
  },
  {
    question: "Proposez-vous des contrats sans engagement ?",
    answer: "Oui, tous nos contrats sont sans engagement avec préavis d'un mois. Nous préférons vous convaincre par nos résultats plutôt que par des contraintes contractuelles."
  },
  {
    question: "Comment garantissez-vous le retour sur investissement ?",
    answer: "Nous fixons des objectifs clairs et mesurables dès le début. Si nous n'atteignons pas les KPIs convenus dans les 3 premiers mois, nous travaillons gratuitement jusqu'à les atteindre."
  },
  {
    question: "Qui s'occupe concrètement de mon projet ?",
    answer: "Chaque client a un account manager dédié et accès à notre équipe d'experts : développeurs, designers, rédacteurs, spécialistes SEO et publicité. Vous aurez un point de contact unique."
  },
  {
    question: "Puis-je suivre l'évolution de mes campagnes en temps réel ?",
    answer: "Absolument ! Vous avez accès à un dashboard personnalisé avec toutes vos métriques en temps réel. Nous envoyons aussi des rapports détaillés chaque semaine."
  },
  {
    question: "Travaillez-vous avec des sous-traitants ?",
    answer: "Non, toute notre équipe est interne. Cela nous permet de garantir la qualité, la réactivité et la confidentialité de vos projets. Vous travaillez directement avec les experts."
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait ?",
    answer: "Nous avons une garantie satisfaction 30 jours. Si vous n'êtes pas entièrement satisfait, nous vous remboursons intégralement, sans question. Votre réussite est notre priorité absolue."
  }
];

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-[#0A0F2C]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4 sm:mb-6">
              {t('faq.title')}
              <span className="bg-[linear-gradient(135deg,hsl(197,100%,50%)_0%,hsl(219,100%,50%)_100%)] bg-clip-text text-transparent"> {t('faq.subtitle')}</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#B0B8D1] max-w-3xl mx-auto px-4">
              {t('faq.description')}
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[#0A0F2C] border border-[#1F2A48] rounded-lg px-6 hover:border-[#00B2FF]/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-[#FFFFFF] hover:text-[#00B2FF] transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#1F2A48] leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-[#1F2A48] mb-6">
              Vous avez d'autres questions ? Notre équipe est là pour vous répondre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center h-12 px-6 py-3 bg-[linear-gradient(135deg,hsl(197,100%,50%)_0%,hsl(219,100%,50%)_100%)] text-[#FFFFFF] rounded-lg font-semibold hover:shadow-blue-300 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Poser une question
              </a>
              <a 
                href="tel:+23674246414" 
                className="inline-flex items-center justify-center h-12 px-6 py-3 border border-[#1F2A48] bg-transparent text-[#FFFFFF] rounded-lg hover:bg-[#1C4EFF] hover:text-[#FFFFFF] transition-all duration-300"
              >
                Reserver maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;