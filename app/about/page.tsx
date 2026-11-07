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

const PULSE_FEATURES = [
  { title: "Web testing", text: "Playwright page-object base class with common actions built in." },
  { title: "API testing", text: "httpx-based client base with a factory for multiple services." },
  {
    title: "Configuration",
    text: "Environment-aware settings (dev, staging, prod) that projects extend.",
  },
  {
    title: "Reporting",
    text: "Allure steps, with a screenshot attached automatically when a test fails.",
  },
  { title: "Parallel runs", text: "Works with pytest-xdist; no shared global state." },
  {
    title: "Quality gates",
    text: "CI runs ruff, strict mypy and tests on Python 3.10–3.12 for every pull request.",
  },
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
          Truthstack is led by Feroze Ahmed R, a test automation architect with 18+ years in quality
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

      <Reveal delay={0.15}>
        <h2 className="mt-16 font-mono text-xl font-bold text-brand-text">How we build: PULSE</h2>
        <p className="mt-6 text-brand-muted">
          PULSE (Playwright Uncomplicated Layered Scalable Execution) is a Python base framework
          for web and API test suites, built by Feroze Ahmed R and published on GitHub. It installs as a
          pytest plugin that teams extend instead of copying code between projects — a working
          example of how Truthstack designs test automation.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {PULSE_FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="rounded-lg border border-brand-border bg-brand-surface p-5"
            >
              <p className="font-mono text-sm text-brand-accent-green">{feature.title}</p>
              <p className="mt-1 text-brand-muted">{feature.text}</p>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/ferozeahmed/PULSE"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-mono text-brand-accent-cyan hover:underline"
        >
          View PULSE on GitHub &rarr;
        </a>
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
