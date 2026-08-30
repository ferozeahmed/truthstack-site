import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import StatCounter from "@/components/StatCounter";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services-data";
import Link from "next/link";

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

      <section className="mx-auto max-w-4xl px-6 py-16 grid grid-cols-3 gap-6">
        <Reveal>
          <StatCounter label="Bugs caught pre-release" value={1200} suffix="+" />
        </Reveal>
        <Reveal delay={0.1}>
          <StatCounter label="Avg. test coverage lift" value={40} suffix="%" />
        </Reveal>
        <Reveal delay={0.2}>
          <StatCounter label="Teams supported" value={25} suffix="+" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <Reveal>
          <p className="text-brand-muted">Trusted by engineering teams shipping real products.</p>
          <div className="mt-6 flex justify-center gap-8 text-brand-muted/50 font-mono">
            <span>[client logo]</span>
            <span>[client logo]</span>
            <span>[client logo]</span>
          </div>
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
