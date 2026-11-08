const STAGES = [
  { title: "Kickoff", sub: "Scope and access" },
  { title: "Onboard", sub: "Learn the product" },
  { title: "Sprint work", sub: "Test, automate, triage" },
  { title: "Weekly report", sub: "Readiness and risks" },
  { title: "Monthly review", sub: "Adjust and hand over" },
];

export default function EngagementDiagram() {
  const w = 126;
  const step = 146;
  return (
    <svg
      viewBox="0 0 720 150"
      role="img"
      aria-label="Engagement flow: kickoff, onboarding, then a repeating cycle of sprint work, weekly report and monthly review."
      className="w-full h-auto"
      data-testid="engagement-diagram"
    >
      <defs>
        <marker id="earrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="#8b96a5" />
        </marker>
      </defs>
      {STAGES.map((s, i) => {
        const x = 4 + i * step;
        const accent = i < 2 ? "#22d3ee" : "#39ff88";
        return (
          <g key={s.title}>
            <rect x={x} y="10" width={w} height="64" rx="8" fill="#0d1117" stroke={accent} strokeOpacity="0.7" />
            <text x={x + w / 2} y="38" fill="#e6edf3" fontFamily="monospace" fontSize="13" fontWeight="600" textAnchor="middle">
              {s.title}
            </text>
            <text x={x + w / 2} y="57" fill="#8b96a5" fontSize="11" textAnchor="middle">
              {s.sub}
            </text>
            {i < STAGES.length - 1 && (
              <path d={`M${x + w + 2} 42 H${x + step - 2}`} stroke="#8b96a5" strokeWidth="1.5" markerEnd="url(#earrow)" />
            )}
          </g>
        );
      })}
      <path d="M 651 78 V 110 H 359 V 80" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#earrow)" />
      <text x="505" y="132" fill="#a78bfa" fontSize="12" textAnchor="middle">
        Repeats every sprint
      </text>
    </svg>
  );
}
