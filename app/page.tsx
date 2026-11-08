import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import StatCounter from "@/components/StatCounter";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services-data";
import Link from "next/link";
import { CI_EXCERPT, PROBLEMS, PROCESS } from "@/lib/home-content";

const tools = [
  "Playwright",
  "Selenium",
  "Cypress",
  "Appium",
  "Postman",
  "k6",
  "GitHub Actions",
  "Jenkins",
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
];

export default function Home() {
  return (
    <>
      <Hero />

      <section aria-labelledby="problem-heading" className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 id="problem-heading" className="text-center font-mono text-2xl font-bold text-brand-text">
            Releases shouldn&apos;t feel like a gamble
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-brand-muted">
            These are the problems teams bring me, and what I do about each one.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((item) => (
              <li key={item.problem} className="rounded-lg border border-brand-border bg-brand-surface p-5">
                <h3 className="font-mono font-semibold text-brand-text">{item.problem}</h3>
                <p className="mt-2 text-brand-muted">{item.fix}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-center font-mono text-2xl font-bold text-brand-text">
            What I do
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8">
            <ServiceGrid services={services} />
          </div>
        </Reveal>
      </section>

      <section
        aria-label="Experience and credentials"
        className="mx-auto max-w-4xl px-6 py-16 grid grid-cols-3 gap-6"
      >
        <Reveal>
          <StatCounter label="Years in quality engineering" value={18} suffix="+" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="text-center">
            <p className="font-mono text-xl font-bold text-brand-accent-green sm:text-2xl">
              Claude Certified Professional
            </p>
            <p className="text-brand-muted mt-1">Certification</p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="text-center">
            <p className="font-mono text-xl font-bold text-brand-accent-green sm:text-2xl">
              Web · API · Mobile · AI
            </p>
            <p className="text-brand-muted mt-1">Testing coverage</p>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="tools-heading" className="mx-auto max-w-4xl px-6 py-16 text-center">
        <Reveal>
          <h2 id="tools-heading" className="text-brand-muted">
            Tools &amp; stack
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-3 font-mono text-sm text-brand-text">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-md border border-brand-muted/30 px-3 py-1.5"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section aria-labelledby="ci-heading" className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <h2 id="ci-heading" className="text-center font-mono text-2xl font-bold text-brand-text">
            From commit to confidence
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-brand-muted">
            Every change runs lint, type checks and tests automatically. This is an excerpt from the
            CI workflow of PULSE, my own reference framework.
          </p>
          <pre
            data-testid="ci-snippet"
            className="mt-6 overflow-x-auto rounded-lg border border-brand-border bg-brand-surface p-4 font-mono text-sm text-brand-text"
          >
            <code>{CI_EXCERPT}</code>
          </pre>
          <p className="mt-4 text-center">
            <Link href="/work/pulse" className="text-brand-accent-green hover:underline">
              Read the PULSE case study →
            </Link>
          </p>
        </Reveal>
      </section>

      <section aria-labelledby="process-heading" className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 id="process-heading" className="text-center font-mono text-2xl font-bold text-brand-text">
            How we work together
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="rounded-lg border border-brand-border bg-brand-surface p-5">
                <span className="font-mono text-sm text-brand-accent-cyan">Step {i + 1}</span>
                <h3 className="font-mono font-semibold text-brand-text">{step.title}</h3>
                <p className="mt-2 text-brand-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Reveal>
          <h2 className="font-mono text-2xl font-bold text-brand-text">
            Not sure where to start?
          </h2>
          <p className="mt-3 text-brand-muted">
            Tell me about your team and how you release. I&apos;ll reply with suggestions and times
            for an intro call.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-brand-accent-cyan px-6 py-3 font-mono font-semibold text-brand-bg hover:opacity-90"
          >
            Request an intro call
          </Link>
        </Reveal>
      </section>
    </>
  );
}
