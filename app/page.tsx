import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import StatCounter from "@/components/StatCounter";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services-data";
import Link from "next/link";
import { CI_EXCERPT, PROBLEMS, PROCESS, PULSE_HIGHLIGHTS, PULSE_REPO } from "@/lib/home-content";

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
          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {PROBLEMS.map((item, i) => {
              const accent = i % 2 === 0 ? "green" : "cyan";
              const wide = i === 0 || i >= 3;
              return (
                <li
                  key={item.problem}
                  className={`overflow-hidden rounded-xl border border-brand-border bg-brand-surface ${
                    wide ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`h-1 ${accent === "green" ? "bg-brand-accent-green" : "bg-brand-accent-cyan"}`}
                    aria-hidden="true"
                  />
                  <div className="p-6">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-sm ${
                          accent === "green" ? "text-brand-accent-green" : "text-brand-accent-cyan"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-mono text-lg font-semibold text-brand-text">{item.problem}</h3>
                    </div>
                    <p className="mt-3 text-brand-text/90">{item.lead}</p>
                    <ul className={`mt-5 grid gap-x-8 gap-y-4 ${wide ? "md:grid-cols-2" : ""}`}>
                      {item.points.map((pt) => (
                        <li key={pt.title} className="flex gap-3">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={accent === "green" ? "#39ff88" : "#22d3ee"}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className="mt-0.5 flex-none"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <p className="text-sm text-brand-muted">
                            <span className="font-semibold text-brand-text">{pt.title}.</span> {pt.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
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

      <section aria-labelledby="pulse-heading" className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="rounded-xl border border-brand-accent-cyan/40 bg-brand-surface p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-wide text-brand-accent-cyan">
              Reference framework · PULSE
            </p>
            <h2 id="pulse-heading" className="mt-3 font-mono text-2xl font-bold text-brand-text sm:text-3xl">
              Engineering better automation frameworks.
            </h2>
            <p className="mt-4 max-w-3xl text-brand-text/90">
              Explore PULSE, our reference automation framework demonstrating how we approach
              scalable, maintainable web and API automation.
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-5 md:grid-cols-2">
              {PULSE_HIGHLIGHTS.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="mt-0.5 flex-none"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-sm text-brand-muted">
                    <span className="font-semibold text-brand-text">{h.title}.</span> {h.text}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/work/pulse"
                className="inline-block rounded-md bg-brand-accent-cyan px-5 py-2.5 font-mono text-sm font-semibold text-brand-bg hover:opacity-90"
              >
                Read the PULSE case study
              </Link>
              <a
                href={PULSE_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent-green hover:underline"
              >
                View the code on GitHub →
              </a>
              <Link href="/work/pulse-audit" className="text-brand-accent-green hover:underline">
                See the sample audit →
              </Link>
            </div>
          </div>
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
              See how PULSE&apos;s CI is set up →
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
