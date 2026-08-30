import Link from "next/link";
import type { Service } from "@/lib/services-data";

export default function ServiceCard({
  service,
  detailed = false,
}: {
  service: Service;
  detailed?: boolean;
}) {
  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6">
      <span className="text-3xl">{service.icon}</span>
      <h3 className="mt-3 font-mono text-lg font-semibold text-brand-text">{service.title}</h3>
      <p className="mt-2 text-brand-muted">{service.summary}</p>
      {detailed && (
        <>
          <p className="mt-4 text-brand-text">{service.details}</p>
          <h4 className="mt-4 font-mono text-sm uppercase tracking-wide text-brand-accent-cyan">
            What&apos;s included
          </h4>
          <ul className="mt-2 list-disc list-inside text-brand-muted">
            {service.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-4 inline-block text-brand-accent-green hover:underline"
          >
            Get in touch →
          </Link>
        </>
      )}
    </div>
  );
}
