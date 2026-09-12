import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import { useContent } from "../content.js";

const CYAN = "#22d3ee";
const GRID = "rgba(255,255,255,0.06)";

const tooltipStyle = {
  background: "#0a0f1e",
  border: "1px solid rgba(34,211,238,0.3)",
  borderRadius: 8,
  color: "#e2e8f0",
  fontSize: 12,
};

export default function AutomationScale() {
  const { scraperCategories, sseLoadTest, automationStats, ui } = useContent();
  const t = ui.automation;

  return (
    <section id="automacao" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm mb-2 tracking-widest">{t.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t.heading}</h2>
        <p className="text-slate-400 max-w-2xl mb-10">{t.subheading}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {automationStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 text-glow">{s.value}</h3>
              <p className="text-slate-400 text-xs mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-white/90">{t.scrapersByCategory.title}</h3>
              <span className="text-xs px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {t.scrapersByCategory.badge}
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">{t.scrapersByCategory.caption}</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={scraperCategories}
                  layout="vertical"
                  margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
                >
                  <CartesianGrid stroke={GRID} horizontal={false} />
                  <XAxis type="number" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    stroke="#64748b"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    width={140}
                  />
                  <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                    {scraperCategories.map((entry) => (
                      <Cell key={entry.name} fill={CYAN} fillOpacity={0.55 + entry.value / 200} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-white/90">{t.sseLoadTest.title}</h3>
              <span className="text-xs px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {t.sseLoadTest.badge}
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">{t.sseLoadTest.caption}</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sseLoadTest} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="sseFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={CYAN} stopOpacity={0.5} />
                      <stop offset="100%" stopColor={CYAN} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke={GRID} vertical={false} />
                  <XAxis dataKey="step" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis
                    stroke="#64748b"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `${v / 1000}K`}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(v) => [`${v.toLocaleString()} ${t.sseLoadTest.tooltipLabel}`, t.sseLoadTest.tooltipName]}
                  />
                  <Area
                    type="monotone"
                    dataKey="conexoes"
                    stroke={CYAN}
                    strokeWidth={2.5}
                    fill="url(#sseFill)"
                    dot={{ r: 3, fill: CYAN }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
