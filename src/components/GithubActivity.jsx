import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, CircleCheck, CircleX, Clock, RefreshCw, ExternalLink } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { githubRepo, links } from "../content.js";

const EMERALD = "#34d399";
const ROSE = "#fb7185";
const AMBER = "#fbbf24";

const tooltipStyle = {
  background: "#0a0f1e",
  border: "1px solid rgba(34,211,238,0.3)",
  borderRadius: 8,
  color: "#e2e8f0",
  fontSize: 12,
};

function statusColor(run) {
  if (run.status !== "completed") return AMBER;
  return run.conclusion === "success" ? EMERALD : ROSE;
}

function relativeTime(iso) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const min = Math.round(diffMs / 60000);
  if (min < 1) return "agora mesmo";
  if (min < 60) return `há ${min} min`;
  const hr = Math.round(min / 60);
  if (hr < 24) return `há ${hr}h`;
  const days = Math.round(hr / 24);
  return `há ${days}d`;
}

export default function GithubActivity() {
  const [runs, setRuns] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      `https://api.github.com/repos/${githubRepo.owner}/${githubRepo.name}/actions/workflows/${githubRepo.workflow}/runs?per_page=8`,
      { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } }
    )
      .then((res) => {
        if (!res.ok) throw new Error("github api error");
        return res.json();
      })
      .then((data) => {
        const parsed = (data.workflow_runs || [])
          .map((r) => ({
            id: r.id,
            status: r.status,
            conclusion: r.conclusion,
            message: (r.head_commit?.message || r.display_title || "sem mensagem").split("\n")[0],
            sha: r.head_sha?.slice(0, 7),
            createdAt: r.created_at,
            durationSec: Math.max(1, Math.round((new Date(r.updated_at) - new Date(r.created_at)) / 1000)),
            url: r.html_url,
          }))
          .reverse(); // mais antigo -> mais recente, pro gráfico ler da esquerda pra direita
        setRuns(parsed);
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // cleanup do StrictMode/unmount, não é erro real
        setError(true);
      });
    return () => controller.abort();
  }, []);

  return (
    <section id="deploys" className="px-6 py-24 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <p className="font-mono text-cyan-400 text-sm tracking-widest">DEPLOY ACTIVITY</p>
          <span className="flex items-center gap-1 text-[11px] text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-400/30 bg-emerald-400/5">
            <RefreshCw size={10} />
            AO VIVO — via GitHub API
          </span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Este site também é CI/CD</h2>
          <a
            href={`https://github.com/${githubRepo.owner}/${githubRepo.name}/actions`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <GitBranch size={14} /> Ver no GitHub <ExternalLink size={12} />
          </a>
        </div>

        {error && (
          <p className="text-slate-500 text-sm">
            Não consegui carregar os dados ao vivo agora. Veja direto em{" "}
            <a href={links.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">
              github.com/{githubRepo.owner}/{githubRepo.name}
            </a>
            .
          </p>
        )}

        {!error && !runs && (
          <p className="text-slate-500 text-sm animate-pulse">Carregando atividade do GitHub…</p>
        )}

        {!error && runs && runs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-xs text-slate-500 mb-3">Duração dos últimos deploys (segundos)</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={runs} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                  <XAxis dataKey="sha" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(v) => [`${v}s`, "Duração"]}
                    labelFormatter={(label, payload) => payload?.[0]?.payload?.message || label}
                  />
                  <Bar dataKey="durationSec" radius={[4, 4, 0, 0]}>
                    {runs.map((r) => (
                      <Cell key={r.id} fill={statusColor(r)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 divide-y divide-white/5">
              {[...runs]
                .reverse()
                .slice(0, 5)
                .map((r) => (
                  <a
                    key={r.id}
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 py-3 text-sm hover:bg-white/[0.02] px-2 -mx-2 rounded-lg transition-colors"
                  >
                    {r.status !== "completed" ? (
                      <Clock size={16} className="text-amber-400 shrink-0" />
                    ) : r.conclusion === "success" ? (
                      <CircleCheck size={16} className="text-emerald-400 shrink-0" />
                    ) : (
                      <CircleX size={16} className="text-rose-400 shrink-0" />
                    )}
                    <span className="text-slate-300 truncate flex-1">{r.message}</span>
                    <span className="text-slate-600 font-mono text-xs shrink-0">{r.sha}</span>
                    <span className="text-slate-500 text-xs shrink-0 w-16 text-right">
                      {relativeTime(r.createdAt)}
                    </span>
                  </a>
                ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
