import { motion } from "framer-motion";
import { useContent } from "../content.js";

export default function Skills() {
  const { skills, ui } = useContent();

  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm mb-2 tracking-widest">{ui.skills.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{ui.skills.heading}</h2>

        <div className="glass rounded-2xl p-8 space-y-5">
          {skills.map((s, i) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white font-medium">{s.name}</span>
                <span className="text-cyan-400 font-mono">{s.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
