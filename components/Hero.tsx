import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, #39ff8833, transparent 60%), radial-gradient(circle at 80% 60%, #22d3ee33, transparent 60%)",
        }}
      />
      <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-brand-muted">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-accent-green" />
        Open to new engagements
      </p>
      <h1 className="mx-auto mt-6 max-w-3xl font-mono text-4xl font-bold text-brand-text sm:text-5xl">
        Test automation that keeps pace with how fast you ship.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-brand-muted">
        I&apos;m Feroze, a test automation architect with 18+ years of experience. I build test
        frameworks, CI/CD test pipelines and AI-model evaluations for engineering teams who&apos;d
        rather catch bugs before their users do.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-brand-accent-green px-6 py-3 font-mono font-semibold text-brand-bg hover:opacity-90"
        >
          Talk to me
        </Link>
        <Link
          href="/services"
          className="inline-block rounded-md border border-brand-border px-6 py-3 font-mono font-semibold text-brand-text hover:border-brand-accent-cyan hover:text-brand-accent-cyan"
        >
          See services
        </Link>
      </div>
      <p className="mt-6 font-mono text-sm text-brand-muted">
        Web · API · Mobile · AI-model testing
      </p>
    </section>
  );
}
