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
      <h1 className="mx-auto max-w-3xl font-mono text-4xl font-bold text-brand-text sm:text-5xl">
        Ship software that actually works.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-brand-muted">
        Truthstack is a software-testing consultancy: manual and automated testing, AI-model
        validation, CI/CD pipelines, and testing-as-a-service — for teams who&apos;d rather catch
        bugs before their users do.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-block rounded-md bg-brand-accent-green px-6 py-3 font-mono font-semibold text-brand-bg hover:opacity-90"
      >
        Talk to us
      </Link>
    </section>
  );
}
