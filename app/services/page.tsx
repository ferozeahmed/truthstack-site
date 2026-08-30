import type { Metadata } from "next";
import ServiceGrid from "@/components/ServiceGrid";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software testing, AI-model validation, test consultants, CI/CD pipeline setup, and testing-as-a-service from Truthstack.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h1 className="font-mono text-3xl font-bold text-brand-text">Services</h1>
        <p className="mt-4 max-w-2xl text-brand-muted">
          Everything Truthstack offers, from hands-on testing to standing up your CI/CD pipeline.
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
