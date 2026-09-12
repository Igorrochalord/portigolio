import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../content.js";

function initials(name) {
  return name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="px-6 py-24 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm mb-2 tracking-widest">DEPOIMENTOS</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">O que dizem sobre trabalhar comigo</h2>
        <p className="text-slate-400 max-w-2xl mb-10">Recomendações reais recebidas no LinkedIn.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col"
            >
              <Quote size={22} className="text-cyan-400/60 mb-3" />
              <blockquote className="text-sm text-slate-300 leading-relaxed flex-1">"{t.quote}"</blockquote>
              <figcaption className="flex items-center gap-3 mt-5 pt-5 border-t border-white/10">
                <span className="w-10 h-10 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 font-bold text-sm flex items-center justify-center shrink-0">
                  {initials(t.name)}
                </span>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate" title={t.name}>{t.name}</p>
                  <p className="text-slate-500 text-xs truncate" title={t.role}>{t.role}</p>
                  <p className="text-cyan-400/80 text-[11px] mt-0.5">{t.relation}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
