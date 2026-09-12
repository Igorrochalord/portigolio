import { motion } from "framer-motion";
import { Download, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { links, profile } from "../content.js";

const NAV_ITEMS = [
  { href: "#impacto", label: "Impacto" },
  { href: "#automacao", label: "Automação" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
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
            CV
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
