// Ponto único de acesso ao conteúdo do site — escolhe PT ou EN conforme o idioma atual.
// Os dados de verdade ficam em src/i18n/pt.js e src/i18n/en.js (mesmo formato nos dois).
import { useLanguage } from "./i18n/LanguageContext.jsx";
import pt from "./i18n/pt.js";
import en from "./i18n/en.js";

export function useContent() {
  const { lang } = useLanguage();
  return lang === "en" ? en : pt;
}
