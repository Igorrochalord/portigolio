import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);
const STORAGE_KEY = "portfolio-lang";

function detectInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    // localStorage indisponível (modo privado, etc.) — segue pra detecção pelo navegador.
  }
  const nav = typeof navigator !== "undefined" ? navigator.language || navigator.userLanguage || "" : "";
  return nav.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  }, [lang]);

  function setLang(next) {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // sem localStorage, só não persiste — a detecção roda de novo na próxima visita.
    }
  }

  function toggle() {
    setLang(lang === "en" ? "pt" : "en");
  }

  return <LanguageContext.Provider value={{ lang, setLang, toggle }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage precisa estar dentro de um LanguageProvider");
  return ctx;
}
