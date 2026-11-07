import { serviceIconPaths } from "@/lib/service-icons";

export default function ServiceIcon({ serviceId, fallback }: { serviceId: string; fallback?: string }) {
  const paths = serviceIconPaths[serviceId];
  if (!paths) {
    return fallback ? (
      <span aria-hidden="true" className="text-3xl">
        {fallback}
      </span>
    ) : null;
  }
  return (
    <svg
      data-testid="service-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-brand-accent-green"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
