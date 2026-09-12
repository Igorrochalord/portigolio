import { motion } from "framer-motion";
import { Mail, MessageCircle, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { useContent } from "../content.js";

export default function Contact() {
  const { links, profile, ui } = useContent();
  const t = ui.contact;

  return (
    <section id="contato" className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto glass rounded-3xl p-10 text-center"
      >
        <p className="font-mono text-cyan-400 text-sm mb-2 tracking-widest">{t.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.heading}</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          {t.subheading(profile.name, profile.role, profile.location)}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors"
          >
            <MessageCircle size={18} /> {t.whatsapp}
          </a>
          <a
            href={links.email}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            <Mail size={18} /> {t.email}
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            <LinkedinIcon size={18} /> {t.linkedin}
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            <GithubIcon size={18} /> {t.github}
          </a>
          <a
            href={links.cv}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            <Download size={18} /> {t.cv}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
