const LAYERS = [
  { title: "Prompt checks", note: "Fast, deterministic checks on format and rules", tag: "Every change" },
  { title: "Golden-set evals", note: "Representative questions scored against expected behaviour", tag: "Every change" },
  { title: "Adversarial tests", note: "Injection attempts, off-topic and sensitive inputs", tag: "Every change" },
  { title: "Retrieval and tool calls", note: "Right context fetched, right tool called", tag: "Every change" },
  { title: "Drift monitoring", note: "Scores tracked against a baseline over time", tag: "Scheduled" },
];

export default function LlmDiagram() {
  const h = 52;
  const gap = 12;
  return (
    <svg
      viewBox="0 0 720 330"
      role="img"
      aria-label="Five layers for testing an AI feature: prompt checks, golden-set evaluations, adversarial tests, retrieval and tool-call checks, and drift monitoring."
      className="w-full h-auto"
      data-testid="llm-diagram"
    >
      <defs>
        <marker id="larrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="#8b96a5" />
        </marker>
      </defs>
      {LAYERS.map((l, i) => {
        const y = 4 + i * (h + gap);
        const accent = i === 4 ? "#a78bfa" : "#22d3ee";
        return (
          <g key={l.title}>
            <rect x="1" y={y} width="718" height={h} rx="8" fill="#0d1117" stroke={accent} strokeOpacity="0.7" />
            <text x="18" y={y + 32} fill={accent} fontFamily="monospace" fontSize="14" fontWeight="600">
              {l.title}
            </text>
            <text x="250" y={y + 32} fill="#e6edf3" fontSize="12">
              {l.note}
            </text>
            <text x="702" y={y + 32} fill="#8b96a5" fontSize="11" textAnchor="end">
              {l.tag}
            </text>
            {i < LAYERS.length - 1 && (
              <path d={`M360 ${y + h + 1} v${gap - 4}`} stroke="#8b96a5" strokeWidth="1.5" markerEnd="url(#larrow)" />
            )}
          </g>
        );
      })}
    </svg>
  );
}
