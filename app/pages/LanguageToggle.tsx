import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContexts";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center hover:bg-[#1C4EFF] gap-2 text-[#B0B8D1] hover:text-[#FFFFFF] transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{language.toUpperCase()}</span>
    </Button>
  );
};

export default LanguageToggle;