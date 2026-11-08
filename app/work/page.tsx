import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { workItems } from "@/lib/work-index";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and reference projects showing how Truthstack approaches test automation.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <h1 className="font-mono text-3xl font-bold text-brand-text">Work</h1>
        <p className="mt-4 max-w-2xl text-brand-muted">
          I&apos;m launching Truthstack, so I don&apos;t have client case studies to show yet. These
          are reference projects I built myself, each clearly labelled, so you can judge the
          approach before we talk.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6">
        {workItems.map((c) => (
          <Reveal key={c.slug}>
            <Link
              href={`/work/${c.slug}`}
              className="block rounded-lg border border-brand-border bg-brand-surface p-6 transition-all duration-200 hover:border-brand-accent-cyan"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-brand-accent-cyan">
                {c.label}
              </span>
              <h2 className="mt-2 font-mono text-xl font-semibold text-brand-text">{c.title}</h2>
              <p className="mt-2 text-brand-muted">{c.summary}</p>
              <span className="mt-4 inline-block text-brand-accent-green">{c.cta} →</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
