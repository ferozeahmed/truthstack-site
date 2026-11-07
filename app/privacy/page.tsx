import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What information this site collects, why, and how to ask me to remove it.",
};

const SECTIONS = [
  {
    heading: "What I collect",
    body: [
      "If you use the contact form, I receive your name, your email address, the service you are interested in, your message, and your company name if you choose to add it.",
      "The site also records anonymous page views through Vercel Web Analytics, so I can see which pages are visited.",
    ],
  },
  {
    heading: "How I use it",
    body: [
      "I use your contact details only to reply to your enquiry. The form submission reaches me as an email, sent through the Resend email service.",
      "I don't sell your information, and I won't add you to a mailing list without asking you first.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "I don't set advertising or tracking cookies on this site.",
    ],
  },
  {
    heading: "Hosting and services",
    body: [
      "The site is hosted on Vercel, and contact emails are delivered by Resend. These providers process data on my behalf, under their own privacy terms.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can ask me what I hold about you, or ask me to delete your messages, at any time.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Reveal>
        <h1 className="font-mono text-3xl font-bold text-brand-text">Privacy</h1>
        <p className="mt-4 text-brand-muted">
          A short, plain-language note on what this site collects and why. Last updated November
          2026.
        </p>
      </Reveal>
      {SECTIONS.map((section, i) => (
        <Reveal key={section.heading} delay={0.05 * (i + 1)}>
          <h2 className="mt-10 font-mono text-xl font-bold text-brand-text">{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-brand-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>
      ))}
      <Reveal delay={0.4}>
        <p className="mt-10 text-brand-muted">
          Questions or requests? Use the{" "}
          <Link href="/contact" className="text-brand-accent-green hover:underline">
            contact page
          </Link>
          .
        </p>
      </Reveal>
    </section>
  );
}
