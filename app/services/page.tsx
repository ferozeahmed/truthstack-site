import type { Metadata } from "next";
import ServiceGrid from "@/components/ServiceGrid";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Test automation frameworks, test strategy audits, CI/CD test pipelines, AI and LLM testing, and embedded QA consulting from Truthstack.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h1 className="font-mono text-3xl font-bold text-brand-text">Services</h1>
        <p className="mt-4 max-w-2xl text-brand-muted">
          Five ways I can help, from building your automation framework to testing your AI features and joining your team.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10">
          <ServiceGrid services={services} detailed />
        </div>
      </Reveal>
    </section>
  );
}
