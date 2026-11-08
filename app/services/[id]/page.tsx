import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Diagram from "@/components/diagrams";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services-data";
import { getServicePage, servicePages } from "@/lib/service-pages";

export function generateStaticParams() {
  return servicePages.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service || !getServicePage(id)) return { title: "Page Not Found" };
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  const page = getServicePage(id);
  if (!service || !page) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <Link href="/services" className="font-mono text-sm text-brand-accent-cyan hover:underline">
          ← All services
        </Link>
        <h1 className="mt-4 font-mono text-3xl font-bold text-brand-text">{service.title}</h1>
        <p className="mt-3 text-xl text-brand-accent-green">{page.headline}</p>
        <p className="mt-4 text-brand-muted">{page.problem}</p>
      </Reveal>

      <section className="mt-12" aria-labelledby="how-heading">
        <h2 id="how-heading" className="font-mono text-xl font-semibold text-brand-text">
          How it works
        </h2>
        <div className="mt-4 rounded-lg border border-brand-border bg-brand-surface p-4 sm:p-6">
          <Diagram name={page.diagram} />
        </div>
        <p className="mt-3 text-sm text-brand-muted">{page.diagramCaption}</p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {page.steps.map((step, i) => (
            <li key={step.title} className="rounded-lg border border-brand-border bg-brand-surface p-4">
              <span className="font-mono text-sm text-brand-accent-cyan">Step {i + 1}</span>
              <h3 className="font-mono font-semibold text-brand-text">{step.title}</h3>
              <p className="mt-1 text-brand-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12" aria-labelledby="example-heading">
        <h2 id="example-heading" className="font-mono text-xl font-semibold text-brand-text">
          A worked example
        </h2>
        <div className="mt-4 rounded-lg border border-brand-accent-cyan/40 bg-brand-surface p-6">
          <span className="font-mono text-xs uppercase tracking-wide text-brand-accent-cyan">
            {page.example.label}
          </span>
          <h3 className="mt-2 font-mono text-lg font-semibold text-brand-text">{page.example.title}</h3>
          <p className="mt-2 text-brand-muted">{page.example.summary}</p>
          <Link href={page.example.href} className="mt-4 inline-block text-brand-accent-green hover:underline">
            {page.example.cta} →
          </Link>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="deliver-heading">
        <h2 id="deliver-heading" className="font-mono text-xl font-semibold text-brand-text">
          What you receive
        </h2>
        <ul className="mt-4 list-disc list-inside text-brand-muted">
          {page.deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <p className="mt-4 text-brand-muted">
          <span className="font-mono text-sm uppercase tracking-wide text-brand-accent-cyan">Best for:</span>{" "}
          {service.bestFor}
        </p>
        {page.notes && <p className="mt-2 text-sm text-brand-muted">{page.notes}</p>}
      </section>

      <div className="mt-12">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-brand-accent-green px-6 py-3 font-mono font-semibold text-brand-bg hover:opacity-90"
        >
          Talk to me about this
        </Link>
      </div>
    </article>
  );
}
