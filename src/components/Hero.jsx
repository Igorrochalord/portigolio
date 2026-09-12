import { motion } from "framer-motion";
import { Server, Cloud, Cpu, Bot, ArrowRight, Download } from "lucide-react";
import { profile, heroMetrics, links } from "../content.js";

const ICONS = { server: Server, cloud: Cloud, cpu: Cpu, bot: Bot };

function MetricCard({ label, value, icon, delay }) {
  const Icon = ICONS[icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-xl bg-black/40 border border-white/5 p-5"
    >
      <div className="text-cyan-400 mb-3">
        <Icon size={20} />
      </div>
      <p className="text-slate-400 text-sm">{label}</p>
      <h3 className="text-2xl md:text-3xl font-bold text-white">{value}</h3>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-cyan-400 text-sm mb-4 tracking-widest">
            {profile.location.toUpperCase()} · DISPONÍVEL PARA NOVOS DESAFIOS
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            {profile.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-400 mt-4 text-glow">
            {profile.role}
          </h2>
          <p className="mt-6 text-slate-400 text-lg max-w-md">{profile.tagline}</p>
          <p className="mt-3 text-slate-500 max-w-md">{profile.summary}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors"
            >
              Ver projetos <ArrowRight size={18} />
            </a>
            <a
              href={links.cv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass rounded-3xl p-8"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-white/90 font-semibold">System Dashboard</h3>
            <span className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Production Online
            </span>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-6">
            {heroMetrics.map((m, i) => (
              <MetricCard key={m.label} {...m} delay={0.1 * i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
