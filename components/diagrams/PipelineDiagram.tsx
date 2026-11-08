const ROW1 = [
  { title: "Pull request", sub: "Push triggers run" },
  { title: "Static checks", sub: "Lint, types, unit" },
  { title: "Build", sub: "Package the app" },
  { title: "Smoke + API", sub: "Minutes, blocking" },
];
const ROW2 = [
  { title: "UI regression", sub: "Parallel jobs" },
  { title: "Reports", sub: "Screenshots, logs" },
  { title: "Quality gate", sub: "Pass to merge" },
  { title: "Nightly run", sub: "Full suite, scheduled" },
];

function Box({ x, y, title, sub, accent }: { x: number; y: number; title: string; sub: string; accent: string }) {
  return (
    <g>
      <rect x={x} y={y} width="150" height="64" rx="8" fill="#0d1117" stroke={accent} strokeOpacity="0.7" />
      <text x={x + 75} y={y + 28} fill="#e6edf3" fontFamily="monospace" fontSize="13" fontWeight="600" textAnchor="middle">
        {title}
      </text>
      <text x={x + 75} y={y + 47} fill="#8b96a5" fontSize="11" textAnchor="middle">
        {sub}
      </text>
    </g>
  );
}

export default function PipelineDiagram() {
  const xs = [10, 190, 370, 550];
  return (
    <svg
      viewBox="0 0 720 230"
      role="img"
      aria-label="Staged test pipeline: pull request, static checks, build, smoke and API tests, then UI regression, reports, quality gate, and a nightly full run."
      className="w-full h-auto"
      data-testid="pipeline-diagram"
    >
      <defs>
        <marker id="parrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="#8b96a5" />
        </marker>
      </defs>
      {ROW1.map((s, i) => (
        <Box key={s.title} x={xs[i]} y={10} accent="#22d3ee" {...s} />
      ))}
      {ROW2.map((s, i) => (
        <Box key={s.title} x={xs[i]} y={150} accent={i === 3 ? "#a78bfa" : "#39ff88"} {...s} />
      ))}
      {[0, 1, 2].map((i) => (
        <path key={`a${i}`} d={`M${xs[i] + 152} 42 H${xs[i + 1] - 2}`} stroke="#8b96a5" strokeWidth="1.5" markerEnd="url(#parrow)" />
      ))}
      {[0, 1, 2].map((i) => (
        <path key={`b${i}`} d={`M${xs[i] + 152} 182 H${xs[i + 1] - 2}`} stroke="#8b96a5" strokeWidth="1.5" markerEnd="url(#parrow)" />
      ))}
      <path d="M625 76 V113 H85 V148" fill="none" stroke="#8b96a5" strokeWidth="1.5" markerEnd="url(#parrow)" />
    </svg>
  );
}
