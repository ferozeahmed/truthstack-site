const TIERS = [
  {
    label: "Tests",
    note: "Your team writes these",
    items: ["Web tests", "API tests", "E2E flows", "Smoke suite"],
    tone: "teal",
  },
  {
    label: "Product layer",
    note: "Built around your product",
    items: ["Page objects", "API clients", "Test data", "Fixtures"],
    tone: "teal",
  },
  {
    label: "Core layer",
    note: "Reusable, your team extends it",
    items: ["Base page", "Base client", "Config", "Reporting"],
    tone: "purple",
  },
  {
    label: "Engines",
    note: "Chosen to fit your stack",
    items: ["Browser driver", "HTTP client", "Test runner", "Report tool"],
    tone: "muted",
  },
] as const;

const STROKE = {
  teal: "#22d3ee",
  purple: "#a78bfa",
  muted: "#8b96a5",
} as const;

export default function FrameworkDiagram() {
  const rowH = 74;
  const gap = 14;
  return (
    <svg
      viewBox="0 0 720 400"
      role="img"
      aria-label="Layered test framework: tests use the product layer, which uses the reusable core, which sits on the test engines, all running in CI/CD."
      className="w-full h-auto"
      data-testid="framework-diagram"
    >
      {TIERS.map((tier, i) => {
        const y = i * (rowH + gap);
        const stroke = STROKE[tier.tone];
        return (
          <g key={tier.label}>
            <rect x="1" y={y + 1} width="718" height={rowH} rx="10" fill="#0d1117" stroke={stroke} strokeOpacity="0.7" />
            <text x="18" y={y + 28} fill={stroke} fontFamily="monospace" fontSize="14" fontWeight="600">
              {tier.label}
            </text>
            <text x="18" y={y + 50} fill="#8b96a5" fontSize="11">
              {tier.note}
            </text>
            {tier.items.map((item, j) => (
              <g key={item}>
                <rect x={190 + j * 130} y={y + 20} width="120" height="36" rx="6" fill="#05070a" stroke="#1c2530" />
                <text x={250 + j * 130} y={y + 43} fill="#e6edf3" fontSize="12" textAnchor="middle">
                  {item}
                </text>
              </g>
            ))}
            {i < TIERS.length - 1 && (
              <path d={`M360 ${y + rowH + 2} v${gap - 4}`} stroke="#8b96a5" strokeWidth="1.5" markerEnd="url(#arrow)" />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="#8b96a5" />
        </marker>
      </defs>
      <rect x="1" y={4 * (rowH + gap) + 1} width="718" height="32" rx="8" fill="#39ff88" fillOpacity="0.08" stroke="#39ff88" strokeOpacity="0.6" />
      <text x="360" y={4 * (rowH + gap) + 22} fill="#39ff88" fontFamily="monospace" fontSize="13" textAnchor="middle">
        CI/CD: runs on every pull request, publishes reports
      </text>
    </svg>
  );
}
