import { motion } from "framer-motion";
import { useContent } from "../content.js";

export default function EngineeringMetrics() {
  const { engineeringMetrics, ui } = useContent();

  return (
    <section className="px-6 py-24 bg-black/20">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-mono text-cyan-400 text-sm mb-2 tracking-widest">{ui.engineeringMetrics.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">{ui.engineeringMetrics.heading}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {engineeringMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 text-glow">{m.value}</h3>
              <p className="text-slate-400 text-sm mt-2">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
