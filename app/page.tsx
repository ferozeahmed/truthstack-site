import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import StatCounter from "@/components/StatCounter";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services-data";
import Link from "next/link";

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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-center font-mono text-2xl font-bold text-brand-text">
            What we do
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

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Reveal>
          <h2 className="font-mono text-2xl font-bold text-brand-text">
            Ready to test with confidence?
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-brand-accent-cyan px-6 py-3 font-mono font-semibold text-brand-bg hover:opacity-90"
          >
            Get in touch
          </Link>
        </Reveal>
      </section>
    </>
  );
}
