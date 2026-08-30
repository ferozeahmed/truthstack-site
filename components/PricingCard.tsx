import Link from "next/link";
import type { EngagementModel } from "@/lib/pricing-data";

export default function PricingCard({ model }: { model: EngagementModel }) {
  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 flex flex-col">
      <h3 className="font-mono text-lg font-semibold text-brand-text">{model.title}</h3>
      <p className="mt-2 text-brand-muted">{model.description}</p>
      <ul className="mt-4 list-disc list-inside text-brand-muted flex-1">
        {model.included.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-6 inline-block rounded-md bg-brand-accent-green px-4 py-2 text-center font-mono font-semibold text-brand-bg hover:opacity-90"
      >
        Get a quote
      </Link>
    </div>
  );
}
