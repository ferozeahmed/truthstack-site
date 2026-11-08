export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="flex-none">
      <polygon points="32,6 58,19 32,32 6,19" fill="#39ff88" />
      <polyline
        points="23,19 29.5,24.5 41,14"
        fill="none"
        stroke="#05070a"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="6,29 32,42 58,29"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="6,39 32,52 58,39"
        fill="none"
        stroke="#22d3ee"
        strokeOpacity="0.55"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-brand-text">
      <LogoMark />
      <span>
        Truth<span className="text-brand-accent-green">stack</span>
      </span>
    </span>
  );
}
