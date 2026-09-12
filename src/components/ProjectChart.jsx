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

const CYAN = "#22d3ee";
const tooltipStyle = {
  background: "#0a0f1e",
  border: "1px solid rgba(34,211,238,0.3)",
  borderRadius: 8,
  color: "#e2e8f0",
  fontSize: 11,
};

// Componente isolado num arquivo próprio pra poder ser carregado sob demanda (code splitting) —
// o recharts é pesado e não precisa estar no bundle inicial, só quando o card do projeto aparece.
export default function ProjectChart({ chart }) {
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
