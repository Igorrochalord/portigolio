import { motion } from "framer-motion";
import { Flame, LifeBuoy, PhoneCall } from "lucide-react";
import { useContent } from "../content.js";

export default function Dedication() {
  const { dedication, profile, maleSuicideIntro, maleSuicideStats, maleSuicideSource, ui } = useContent();

  return (
    <section id="dedicatoria" className="px-6 py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <Flame size={26} className="text-amber-400 mx-auto mb-4" />
          <p className="font-mono text-amber-400/80 text-sm mb-2 tracking-widest">{ui.dedication.eyebrow}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {dedication.name} <span className="text-slate-500 font-normal">· {dedication.years}</span>
          </h2>
          <p className="text-slate-400 mt-6 leading-relaxed max-w-xl mx-auto">{dedication.message}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10"
        >
          {dedication.photos.map((p) => (
            <div
              key={p.src}
              className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/30"
            >
              <img
                src={`${import.meta.env.BASE_URL}${p.src}`}
                alt={p.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 text-left sm:text-center"
        >
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">{maleSuicideIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {maleSuicideStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xl md:text-2xl font-bold text-amber-400">{s.value}</p>
                <p className="text-xs text-slate-400 mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-[11px] mt-4">{maleSuicideSource}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6 text-left sm:text-center"
        >
          <div className="flex items-center gap-2 justify-start sm:justify-center mb-3">
            <LifeBuoy size={18} className="text-amber-400" />
            <p className="text-white font-semibold text-sm">{ui.dedication.helpTitle}</p>
          </div>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">{dedication.helpMessage}</p>
          <a
            href={dedication.helpLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 text-sm font-semibold hover:bg-amber-300 transition-colors"
          >
            <PhoneCall size={16} />
            {ui.dedication.cvvLabel}
          </a>
        </motion.div>
      </div>

      <p className="text-center text-slate-600 text-sm mt-16">
        {ui.footer.rights(new Date().getFullYear(), profile.name)}
      </p>
    </section>
  );
}
