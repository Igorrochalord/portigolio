import { motion } from "framer-motion";
import { Download, MessageCircle, Languages } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { useContent } from "../content.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Navbar() {
  const { links, profile, ui } = useContent();
  const { toggle } = useLanguage();

  const NAV_ITEMS = [
    { href: "#impacto", label: ui.nav.impacto },
    { href: "#automacao", label: ui.nav.automacao },
    { href: "#skills", label: ui.nav.skills },
    { href: "#projetos", label: ui.nav.projetos },
    { href: "#trajetoria", label: ui.nav.trajetoria },
    { href: "#depoimentos", label: ui.nav.depoimentos },
    { href: "#contato", label: ui.nav.contato },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-widest text-cyan-400">
          {profile.name.split(" ").map((n) => n[0]).join("")}
          <span className="text-slate-500">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-cyan-400 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggle}
            aria-label={ui.langToggle.ariaLabel}
            className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-400/40 rounded-md px-2 py-1 transition-colors"
          >
            <Languages size={14} />
            {ui.langToggle.label}
          </button>
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <GithubIcon size={18} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <LinkedinIcon size={18} />
          </a>
          <a href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <MessageCircle size={18} />
          </a>
          <a
            href={links.cv}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-cyan-500 text-slate-950 text-sm font-semibold px-4 py-2 hover:bg-cyan-400 transition-colors"
          >
            <Download size={16} />
            {ui.nav.cv}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
