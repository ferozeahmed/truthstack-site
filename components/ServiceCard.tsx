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
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-accent-cyan hover:shadow-lg hover:shadow-brand-accent-cyan/10">
      <span aria-hidden="true" className="text-3xl">{service.icon}</span>
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
              <li key={`${service.id}-${item}`}>{item}</li>
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
