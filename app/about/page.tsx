import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

const TEAM_PLACEHOLDERS = ["Team member", "Team member", "Team member"];

export const metadata: Metadata = {
  title: "About",
  description: "Why Truthstack exists, how we work, and who we are.",
};

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
        <h2 className="mt-16 font-mono text-xl font-bold text-brand-text">Team</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {TEAM_PLACEHOLDERS.map((label, i) => (
            <div
              key={i}
              className="rounded-lg border border-brand-border bg-brand-surface p-6 text-center text-brand-muted"
            >
              {label}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
