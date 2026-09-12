import { motion } from "framer-motion";
import { timeline } from "../content.js";

export default function Timeline() {
  return (
    <section id="trajetoria" className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm mb-2 tracking-widest">TRAJETÓRIA</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Linha do tempo</h2>

        <div className="relative pl-8 border-l border-white/10">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              <span
                className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full ring-2 ring-white/20"
                style={{ backgroundColor: t.color, boxShadow: `0 0 12px ${t.textColor}b3` }}
              />
              <p className="font-mono text-sm" style={{ color: t.textColor }}>
                {t.year}
              </p>
              <h3 className="text-xl font-bold text-white mt-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: t.color }} />
                {t.company}
              </h3>
              <p className="text-slate-400 mt-1">{t.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
