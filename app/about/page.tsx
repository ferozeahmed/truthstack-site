import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Truthstack exists, how we work, and the test automation architect behind it.",
};

const FACTS = [
  { label: "Experience", value: "18+ years in quality engineering" },
  { label: "Specialty", value: "Test automation frameworks, built from scratch" },
  { label: "Languages", value: "Python, Java, JavaScript, TypeScript and more" },
  { label: "Certification", value: "Claude Certified Professional" },
  { label: "Focus", value: "AI-assisted test automation and AI-model validation" },
  { label: "Engagements", value: "Remote, open to teams worldwide" },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <h1 className="font-mono text-3xl font-bold text-brand-text">About Truthstack</h1>
        <p className="mt-6 text-brand-muted">
          We started Truthstack because too much software ships untested, and the bugs land on
          users instead of engineers. We work as an extension of your team — testing, auditing,
          and building the pipelines that catch problems before release.
        </p>
        <p className="mt-4 text-brand-muted">
          Our approach: understand your product, find where quality actually breaks down, and fix
          the process, not just the bug of the week.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-16 font-mono text-xl font-bold text-brand-text">
          Who&apos;s behind Truthstack
        </h2>
        <p className="mt-6 text-brand-muted">
          Truthstack is led by Feroze, a test automation architect with 18+ years in quality
          engineering. He has designed and built test automation frameworks from scratch, working
          across Python, Java, JavaScript and TypeScript, and now focuses on bringing AI into
          test automation and on validating AI-powered products.
        </p>
        <p className="mt-4 text-brand-muted">
          You work directly with the person doing the work — no hand-offs between a sales team
          and a delivery team.
        </p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="rounded-lg border border-brand-border bg-brand-surface p-5"
            >
              <dt className="font-mono text-sm text-brand-accent-green">{fact.label}</dt>
              <dd className="mt-1 text-brand-text">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-16 text-center">
          <p className="text-brand-muted">Want to see how Truthstack could fit your team?</p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-md bg-brand-accent-cyan px-6 py-3 font-mono font-semibold text-brand-bg hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
