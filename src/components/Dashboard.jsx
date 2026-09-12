import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";
import { useContent } from "../content.js";

const CYAN = "#22d3ee";
const CYAN_DIM = "#0e7490";
const GRID = "rgba(255,255,255,0.06)";

const tooltipStyle = {
  background: "#0a0f1e",
  border: "1px solid rgba(34,211,238,0.3)",
  borderRadius: 8,
  color: "#e2e8f0",
  fontSize: 12,
};

function Panel({ title, badge, children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white/90">{title}</h3>
        {badge && (
          <span className="text-xs px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {badge}
          </span>
        )}
      </div>
      {children}
    </motion.div>
  );
}

export default function Dashboard() {
  const { cloudCostData, deployTrend, automationBars, ui } = useContent();
  const t = ui.dashboard;

  return (
    <section id="dashboard" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm mb-2 tracking-widest">{t.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{t.heading}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Panel title={t.cloudCost.title} badge="-35%" delay={0}>
            <div className="h-40 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={cloudCostData}
                    dataKey="value"
                    innerRadius={45}
                    outerRadius={65}
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    <Cell fill={CYAN} />
                    <Cell fill="rgba(255,255,255,0.08)" />
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 text-xs text-slate-400 mt-2">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400" /> {t.cloudCost.legendSavings}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-white/20" /> {t.cloudCost.legendCurrent}
              </span>
            </div>
          </Panel>

          <Panel title={t.deployTime.title} badge="-60%" delay={0.1}>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={deployTrend} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke={GRID} vertical={false} />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Line
                    type="monotone"
                    dataKey="minutes"
                    stroke={CYAN}
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: CYAN }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel title={t.automations.title} badge="+150" delay={0.2}>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={automationBars} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke={GRID} vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    <Cell fill={CYAN_DIM} />
                    <Cell fill={CYAN} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}
