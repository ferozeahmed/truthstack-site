const STAGES = [
  { title: "Scope", sub: "Repo, CI, goals" },
  { title: "Map flows", sub: "Code to release" },
  { title: "Score", sub: "Severity and effort" },
  { title: "Rank", sub: "Evidence for each" },
  { title: "Roadmap", sub: "Fix first, next, later" },
];

export default function AuditDiagram() {
  const w = 126;
  const step = 146;
  return (
    <svg
      viewBox="0 0 720 100"
      role="img"
      aria-label="Audit flow: scope, map the flows, score each finding, rank by priority, and produce a roadmap."
      className="w-full h-auto"
      data-testid="audit-diagram"
    >
      <defs>
        <marker id="aarrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="#8b96a5" />
        </marker>
      </defs>
      {STAGES.map((s, i) => {
        const x = 4 + i * step;
        const accent = i === 4 ? "#39ff88" : "#22d3ee";
        return (
          <g key={s.title}>
            <rect x={x} y="12" width={w} height="64" rx="8" fill="#0d1117" stroke={accent} strokeOpacity="0.7" />
            <text x={x + w / 2} y="40" fill="#e6edf3" fontFamily="monospace" fontSize="13" fontWeight="600" textAnchor="middle">
              {s.title}
            </text>
            <text x={x + w / 2} y="59" fill="#8b96a5" fontSize="11" textAnchor="middle">
              {s.sub}
            </text>
            {i < STAGES.length - 1 && (
              <path d={`M${x + w + 2} 44 H${x + step - 2}`} stroke="#8b96a5" strokeWidth="1.5" markerEnd="url(#aarrow)" />
            )}
          </g>
        );
      })}
    </svg>
  );
}
