import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Page Not Found" };
  return { title: study.title, description: study.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <Link href="/work" className="font-mono text-sm text-brand-accent-cyan hover:underline">
          ← All work
        </Link>
        <p className="mt-4 font-mono text-xs uppercase tracking-wide text-brand-accent-cyan">
          {study.label}
        </p>
        <h1 className="mt-2 font-mono text-3xl font-bold text-brand-text">{study.title}</h1>
        <p className="mt-4 text-brand-muted">{study.summary}</p>
        <a
          href={study.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-brand-accent-green hover:underline"
        >
          View the code on GitHub →
        </a>
      </Reveal>

      <section className="mt-12">
        <h2 className="font-mono text-xl font-semibold text-brand-text">The problem</h2>
        <p className="mt-3 text-brand-muted">{study.problem}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-xl font-semibold text-brand-text">The approach</h2>
        <ul className="mt-3 list-disc list-inside text-brand-muted">
          {study.approach.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-xl font-semibold text-brand-text">What&apos;s inside</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {study.inside.map((item) => (
            <div key={item.title} className="rounded-lg border border-brand-border bg-brand-surface p-4">
              <h3 className="font-mono font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-1 text-brand-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-xl font-semibold text-brand-text">Trade-offs and limits</h2>
        <p className="mt-3 text-brand-muted">
          Being clear about what a framework does not do yet matters as much as what it does.
        </p>
        <div className="mt-4 grid gap-4">
          {study.tradeoffs.map((t) => (
            <div key={t.title} className="rounded-lg border border-brand-border bg-brand-surface p-4">
              <h3 className="font-mono font-semibold text-brand-text">{t.title}</h3>
              <p className="mt-1 text-brand-muted">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {study.snippets.map((s) => (
        <section key={s.title} className="mt-12">
          <h2 className="font-mono text-xl font-semibold text-brand-text">{s.title}</h2>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-brand-border bg-brand-surface p-4 font-mono text-sm text-brand-text">
            <code>{s.code}</code>
          </pre>
        </section>
      ))}

      <div className="mt-12">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-brand-accent-green px-6 py-3 font-mono font-semibold text-brand-bg hover:opacity-90"
        >
          Want this for your team? Talk to me
        </Link>
      </div>
    </article>
  );
}
