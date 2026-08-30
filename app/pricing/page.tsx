import type { Metadata } from "next";
import PricingCard from "@/components/PricingCard";
import Reveal from "@/components/Reveal";
import { engagementModels } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Truthstack engagement models: project-based, staff augmentation, and testing-as-a-service retainers.",
};

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h1 className="font-mono text-3xl font-bold text-brand-text">Pricing</h1>
        <p className="mt-4 max-w-2xl text-brand-muted">
          QA work doesn&apos;t fit neat tiers — pick the engagement model that matches how you
          want to work with us, and we&apos;ll scope it together.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {engagementModels.map((model) => (
            <PricingCard key={model.id} model={model} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
