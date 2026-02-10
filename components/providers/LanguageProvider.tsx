"use client";

import { createContext, useContext, useState } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {

  const [lang, setLang] = useState("ar");

  const t = translations[lang]; // 🔥 هذا أهم سطر

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
