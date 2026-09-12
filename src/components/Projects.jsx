import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Vote, RadioTower, Banknote, Bot, Wallet } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  LabelList,
  AreaChart,
  Area,
  PieChart,
  Pie,
  XAxis,
  Tooltip,
} from "recharts";
import { projects, personalProjects } from "../content.js";

const ICONS = { vote: Vote, "radio-tower": RadioTower, banknote: Banknote, bot: Bot, wallet: Wallet };

const CYAN = "#22d3ee";
const tooltipStyle = {
  background: "#0a0f1e",
  border: "1px solid rgba(34,211,238,0.3)",
  borderRadius: 8,
  color: "#e2e8f0",
  fontSize: 11,
};

function ProjectChart({ chart }) {
  if (!chart) return null;

  return (
    <div className="mb-4">
      <p className="text-[11px] text-slate-500 mb-1">{chart.caption}</p>
      <div className="h-20 relative">
        {chart.type === "donut" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-lg font-bold text-white">{chart.data[0].value}%</span>
          </div>
        )}
        <ResponsiveContainer width="100%" height="100%">
          {chart.type === "area" ? (
            <AreaChart data={chart.data} margin={{ top: 4, right: 4, left: 4, bottom: 0 }}>
              <defs>
                <linearGradient id={`fill-${chart.caption}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={CYAN} stopOpacity={0.5} />
                  <stop offset="100%" stopColor={CYAN} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#475569" fontSize={9} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="value" stroke={CYAN} strokeWidth={2} fill={`url(#fill-${chart.caption})`} />
            </AreaChart>
          ) : chart.type === "donut" ? (
            <PieChart>
              <Pie data={chart.data} dataKey="value" innerRadius={22} outerRadius={36} startAngle={90} endAngle={-270} stroke="none">
                <Cell fill={CYAN} />
                <Cell fill="rgba(255,255,255,0.08)" />
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          ) : (
            <BarChart data={chart.data} margin={{ top: 14, right: 4, left: 4, bottom: 0 }}>
              <XAxis dataKey="name" stroke="#475569" fontSize={9} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="value" position="top" fill="#e2e8f0" fontSize={10} />
                {chart.data.map((_, i) => (
                  <Cell key={i} fill={CYAN} fillOpacity={0.5 + i * 0.5} />
                ))}
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="px-6 py-24 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm mb-2 tracking-widest">PROJETOS</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Produtos que construí no Poder360</h2>
        <p className="text-slate-400 max-w-2xl mb-10">
          Sistemas de dados públicos em produção, do backend de coleta ao streaming em tempo real — cada um com o
          resultado real que gerou.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-7 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Icon size={20} className="text-cyan-400 shrink-0" />
                    {p.name}
                  </h3>
                  {p.link && p.link !== "#" && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-cyan-400 transition-colors"
                      aria-label={`Abrir ${p.name}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="text-cyan-400 text-sm mt-1 mb-4">{p.tagline}</p>

                {p.metrics && (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="rounded-lg bg-black/30 p-3">
                        <p className="text-sm font-bold text-white leading-tight">{m.value}</p>
                        <p className="text-xs text-slate-400">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <ProjectChart chart={p.chart} />

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mt-auto">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-1">Projetos pessoais</h3>
          <p className="text-slate-400 text-sm mb-6">Fora do horário de trabalho, sem métricas de produção.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <motion.article
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-black/20 p-6"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Icon size={18} className="text-cyan-400 shrink-0" />
                      {p.name}
                    </h4>
                    {p.link && p.link !== "#" && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-cyan-400 transition-colors"
                        aria-label={`Abrir ${p.name}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-cyan-400 text-xs mt-1 mb-1">{p.tagline}</p>
                  <p className="text-slate-500 text-xs mb-4">{p.period}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
