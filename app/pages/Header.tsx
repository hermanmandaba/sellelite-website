"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useMemo, useCallback } from "react";
import { useLanguage } from "../contexts/LanguageContexts";
import { handleNavClick } from "../utils/SmoothScroll";
import LanguageToggle from "./LanguageToggle";
import Image from "next/image";

// 🔹 Typage strict pour la navigation
interface NavItem {
  name: string;
  href: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  // 🔹 Utilisation de useMemo pour éviter de recréer la navigation à chaque rendu
  const navigation: NavItem[] = useMemo(
    () => [
      { name: t("nav.home"), href: "#hero" },
      { name: t("nav.projects"), href: "#projets" },
      { name: t("nav.services"), href: "#services" },
      { name: t("nav.pricing"), href: "#tarifs" },
      { name: t("nav.contact"), href: "#contact" },
    ],
    [t]
  );

  // 🔹 Toggle avec useCallback pour éviter les re-créations inutiles
  const toggleMenu = useCallback(
    () => setIsMenuOpen((prev) => !prev),
    []
  );

  // 🔹 Fermer le menu après un clic sur un lien
  const handleMobileNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      handleNavClick(e, href);
      setIsMenuOpen(false);
    },
    []
  );

  return (
    <header
      className="fixed top-0 w-full bg-[rgba(10,15,44,0.95)] backdrop-blur-sm border-b border-[#1F2A48] z-50 transition-all duration-300"
      role="banner"
    >
      <div className="px-4 max-w-[1400px] mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center -space-x-7 group"
            aria-label="SellElite - Retour à l'accueil"
          >
              <Image 
              src="/Logo.png" 
              alt="Logo SellElite Agency"  
              width={100} 
              height={50} 
              />
            <span className="text-2xl lg:text-3xl font-bold text-[#FFFFFF] group-hover:text-[#00B2FF] transition-colors duration-300">
              SellElite
            </span>
          </a>

          {/* Navigation Desktop */}
          <nav
            className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8"
            role="navigation"
            aria-label="Navigation principale"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-[#B0B8D1] hover:text-[#FFFFFF] transition-all duration-300 font-medium group px-1 md:px-2 py-1 text-sm lg:text-base"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[linear-gradient(135deg,#00B2FF_0%,#005DFF_100%)] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Langue + CTA Desktop */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <LanguageToggle />
            <Button
              size="default"
              className="hover:scale-105 hover:shadow-[0_0_40px_hsl(197,100%,56%/_0.3)] transition-all duration-300 text-sm lg:text-base px-3 lg:px-4"
            >
              {t("header.cta")}
            </Button>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              className="hover:scale-110 transition-transform duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 hover:rotate-12 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <div
            className="md:hidden border-t border-[#1F2A48] animate-fade-in"
            role="dialog"
            aria-modal="true"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 bg-[rgba(10,15,44,0.98)] backdrop-blur-sm">
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-[#B0B8D1] hover:text-[#FFFFFF] hover:bg-[#1F2A48]/20 rounded-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={(e) => handleMobileNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <div className="flex gap-2 justify-center">
                  <LanguageToggle />
                </div>
                <Button
                  size="default"
                  className="w-full hover:scale-105 transition-transform duration-300"
                >
                  {t("header.cta")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
