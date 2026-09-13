import { motion } from "framer-motion";
import { useContent } from "../content.js";

export default function ImpactCases() {
  const { cases, ui } = useContent();

  return (
    <section id="impacto" className="px-6 py-24 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm mb-2 tracking-widest">{ui.impact.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{ui.impact.heading}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col"
            >
              <span className="text-xs text-slate-500 font-mono">{c.period}</span>
              <h3 className="text-xl font-bold text-white mt-1">{c.company}</h3>
              <p className="text-cyan-400 text-sm mb-5">{c.title}</p>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {c.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg bg-black/30 p-3">
                    <p className="text-lg font-bold text-white">{m.value}</p>
                    <p className="text-xs text-slate-400">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
