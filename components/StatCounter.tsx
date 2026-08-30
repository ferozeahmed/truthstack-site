export default function StatCounter({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div className="text-center">
      <p className="font-mono text-4xl font-bold text-brand-accent-green">
        {value}
        {suffix}
      </p>
      <p className="text-brand-muted mt-1">{label}</p>
    </div>
  );
}
