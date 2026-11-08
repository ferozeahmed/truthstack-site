import type { Effort, Finding, Severity } from "@/lib/audit-pulse";

const COLS: Effort[] = ["S", "M", "L"];
const ROWS: Severity[] = ["High", "Medium", "Low"];
const COL_LABEL: Record<Effort, string> = { S: "Small effort", M: "Medium effort", L: "Large effort" };
const ROW_COLOR: Record<Severity, string> = { High: "#f87171", Medium: "#fbbf24", Low: "#8b96a5" };

export default function ImpactEffortGrid({ findings }: { findings: Finding[] }) {
  const cellW = 200;
  const cellH = 84;
  const left = 80;
  const top = 30;
  return (
    <svg
      viewBox="0 0 700 300"
      role="img"
      aria-label="Grid of findings by severity and effort. Numbers match the findings listed below."
      className="w-full h-auto"
      data-testid="impact-effort-grid"
    >
      {COLS.map((c, ci) => (
        <text key={c} x={left + ci * cellW + cellW / 2} y="18" fill="#8b96a5" fontSize="12" textAnchor="middle">
          {COL_LABEL[c]}
        </text>
      ))}
      {ROWS.map((r, ri) => (
        <g key={r}>
          <text x={left - 10} y={top + ri * cellH + cellH / 2 + 4} fill={ROW_COLOR[r]} fontSize="12" textAnchor="end">
            {r}
          </text>
          {COLS.map((c, ci) => {
            const x = left + ci * cellW;
            const y = top + ri * cellH;
            const here = findings.filter((f) => f.severity === r && f.effort === c);
            return (
              <g key={c}>
                <rect x={x + 2} y={y + 2} width={cellW - 4} height={cellH - 4} rx="6" fill="#0d1117" stroke="#1c2530" />
                {here.map((f, i) => (
                  <g key={f.id}>
                    <circle cx={x + 30 + i * 40} cy={y + cellH / 2} r="15" fill="#05070a" stroke={ROW_COLOR[r]} />
                    <text x={x + 30 + i * 40} y={y + cellH / 2 + 4} fill="#e6edf3" fontFamily="monospace" fontSize="13" textAnchor="middle">
                      {f.id}
                    </text>
                  </g>
                ))}
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
}
