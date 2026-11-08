import type { Metadata } from "next";
import Link from "next/link";
import ImpactEffortGrid from "@/components/diagrams/ImpactEffortGrid";
import Reveal from "@/components/Reveal";
import {
  AUDIT_META,
  FINDINGS,
  ROADMAP,
  STRENGTHS,
  findingById,
  type Severity,
} from "@/lib/audit-pulse";

export const metadata: Metadata = {
  title: AUDIT_META.title,
  description: AUDIT_META.summary,
};

const SEVERITY_STYLE: Record<Severity, string> = {
  High: "border-red-400/60 text-red-300",
  Medium: "border-amber-400/60 text-amber-300",
  Low: "border-brand-border text-brand-muted",
};
const EFFORT_LABEL = { S: "Small", M: "Medium", L: "Large" } as const;

export default function PulseAuditPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <Link href="/work" className="font-mono text-sm text-brand-accent-cyan hover:underline">
          ← All work
        </Link>
        <p className="mt-4 font-mono text-xs uppercase tracking-wide text-brand-accent-cyan">
          {AUDIT_META.label}
        </p>
        <h1 className="mt-2 font-mono text-3xl font-bold text-brand-text">{AUDIT_META.title}</h1>
        <p className="mt-4 text-brand-muted">{AUDIT_META.summary}</p>
        <a
          href={AUDIT_META.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-brand-accent-green hover:underline"
        >
          View the audited code on GitHub →
        </a>
      </Reveal>

      <section className="mt-12">
        <h2 className="font-mono text-xl font-semibold text-brand-text">Scope and method</h2>
        <p className="mt-3 text-brand-muted">
          <span className="text-brand-text">Reviewed:</span> {AUDIT_META.reviewed}
        </p>
        <p className="mt-3 text-brand-muted">
          Findings are scored by severity (how much harm if left alone) and effort (how much work to
          fix). Severity and effort are my judgement, and I show the evidence so you can disagree.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-xl font-semibold text-brand-text">What is already working</h2>
        <ul className="mt-3 list-disc list-inside text-brand-muted">
          {STRENGTHS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="grid-heading">
        <h2 id="grid-heading" className="font-mono text-xl font-semibold text-brand-text">
          Findings at a glance
        </h2>
        <div className="mt-4 rounded-lg border border-brand-border bg-brand-surface p-4 sm:p-6">
          <ImpactEffortGrid findings={FINDINGS} />
        </div>
        <p className="mt-3 text-sm text-brand-muted">
          Numbers match the findings below. Top left is the best place to start: serious and cheap
          to fix.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-xl font-semibold text-brand-text">Findings</h2>
        <ol className="mt-4 grid gap-4">
          {FINDINGS.map((f) => (
            <li
              key={f.id}
              id={`finding-${f.id}`}
              className="rounded-lg border border-brand-border bg-brand-surface p-5"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-sm text-brand-accent-cyan">#{f.id}</span>
                <span className="font-mono text-xs text-brand-muted">{f.area}</span>
                <span className={`rounded border px-2 py-0.5 font-mono text-xs ${SEVERITY_STYLE[f.severity]}`}>
                  {f.severity} severity
                </span>
                <span className="rounded border border-brand-border px-2 py-0.5 font-mono text-xs text-brand-muted">
                  {EFFORT_LABEL[f.effort]} effort
                </span>
              </div>
              <h3 className="mt-2 font-mono text-lg font-semibold text-brand-text">{f.title}</h3>
              <dl className="mt-3 grid gap-3 text-brand-muted">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wide text-brand-accent-cyan">Evidence</dt>
                  <dd>{f.evidence}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wide text-brand-accent-cyan">Why it matters</dt>
                  <dd>{f.why}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wide text-brand-accent-cyan">Suggested fix</dt>
                  <dd>{f.fix}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-xl font-semibold text-brand-text">Roadmap</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {ROADMAP.map((stage) => (
            <div key={stage.title} className="rounded-lg border border-brand-border bg-brand-surface p-4">
              <h3 className="font-mono font-semibold text-brand-accent-green">{stage.title}</h3>
              <p className="mt-1 text-sm text-brand-muted">{stage.note}</p>
              <ul className="mt-3 text-brand-muted">
                {stage.ids.map((id) => (
                  <li key={id}>
                    <a href={`#finding-${id}`} className="hover:text-brand-accent-cyan">
                      #{id} {findingById(id)?.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/services/test-strategy-audit"
          className="inline-block rounded-md border border-brand-border px-6 py-3 font-mono text-brand-text hover:border-brand-accent-cyan"
        >
          How the audit works
        </Link>
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
