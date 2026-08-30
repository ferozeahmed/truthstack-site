import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="font-mono text-3xl font-bold text-brand-text">404 — Page not found</h1>
      <p className="mt-4 text-brand-muted">
        That page doesn&apos;t exist. It might have moved, or the link might be wrong.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-brand-accent-green px-6 py-3 font-mono font-semibold text-brand-bg hover:opacity-90"
      >
        Back to home
      </Link>
    </section>
  );
}
