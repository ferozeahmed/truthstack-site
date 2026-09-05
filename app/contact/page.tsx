import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Truthstack about testing, QA consulting, or CI/CD pipeline work.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Reveal>
        <h1 className="font-mono text-3xl font-bold text-brand-text">Contact</h1>
        <p className="mt-4 text-brand-muted">
          Tell us what you&apos;re working on and which service you need — we&apos;ll reply
          within a business day.
        </p>
        <p className="mt-2 text-brand-muted">
          Prefer email? Reach us at{" "}
          <a
            href="mailto:algofire-contact@googlegroups.com"
            className="text-brand-accent-green hover:underline"
          >
            algofire-contact@googlegroups.com
          </a>
          .
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10">
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
