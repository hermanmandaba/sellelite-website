"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import translations from "./Translations";

// 1️⃣ Typage strict pour éviter les erreurs
export type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

type TranslationKeys = keyof typeof translations["fr"];


// 3️⃣ Création du contexte
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("fr");

  // Fonction de traduction sécurisée
  const t = useCallback(
    (key: TranslationKeys): string => {
      const value = translations[language][key];
      if (!value) {
        console.warn(`Missing translation for key "${key}" in "${language}"`);
        return key;
      }
      return value;
    },
    [language]
  );

  // 4️⃣ Memo pour éviter les re-rendus inutiles
  const contextValue = useMemo(
    () => ({ language, setLanguage, t }),
    [language, t]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// 5️⃣ Hook personnalisé
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
