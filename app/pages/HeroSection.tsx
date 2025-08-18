'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContexts";




const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F2C]">
      {/* Modern geometric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F2C] via-[#0A0F2C]/95 to-[#1F2A48]/10"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#005DFF]/5 rounded-3xl rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-[#00B2FF]/10 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-[#005DFF]/5 rounded-2xl rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#005DFF]/8 rounded-full"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(219, 100%, 50%))
 1px, transparent 1px),
            linear-gradient(90deg, hsl(219, 100%, 50%))
 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-[#0A0F2C] border border-[#1F2A48] rounded-full px-4 py-3 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-[#B0B8D1] text-sm font-medium">
              {t('hero.badge')}
            </span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1]">
            <span className="text-[#FFFFFF] block mb-2">{t('hero.title')}</span>
            <span className="bg-gradient-to-r from-[#005DFF] via-[#00B2FF] to-[#005DFF] bg-clip-text text-transparent inline-block">
              {t('hero.brand')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#B0B8D1] mb-10 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-16">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-[#005DFF] text-[#FFFFFF] border-0 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <span className="flex items-center gap-2">
                {t('hero.cta.primary')}
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-[#1F2A48] bg-[#0A0F2C] text-[#FFFFFF] px-8 py-4 text-lg font-semibold rounded-xl"
            >
              {t('hero.cta.secondary')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div>
            <p className="text-[#B0B8D1] mb-6 text-base">
              {t('hero.trust')}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {["TechCorp", "InnovLab", "GrowthCo", "ScalePro", "NextGen"].map((company, index) => (
                <div 
                  key={company} 
                  className="text-[#B0B8D1]/60 font-medium text-lg tracking-wide cursor-default"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-1 h-20 bg-gradient-to-b from-[#005DFF] to-transparent opacity-20"></div>
      <div className="absolute bottom-1/4 right-8 w-1 h-20 bg-gradient-to-t from-[#005DFF] to-transparent opacity-20"></div>
    </section>
  );
};

export default HeroSection;