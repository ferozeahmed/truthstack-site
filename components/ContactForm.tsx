"use client";

import { useState } from "react";
import { validateContact, type ContactFormData, type ValidationResult } from "@/lib/validate-contact";
import { services } from "@/lib/services-data";

const EMPTY: ContactFormData = {
  name: "",
  email: "",
  company: "",
  serviceInterest: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error" | "misconfigured";

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>(EMPTY);
  const [errors, setErrors] = useState<ValidationResult["errors"]>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = validateContact(data);
    setErrors(result.errors);
    if (!result.valid) return;

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("misconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="text-brand-accent-green">
        Thanks — we&apos;ll get back to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg" noValidate>
      <label className="flex flex-col gap-1">
        Name
        <input
          className="rounded-md border border-brand-border bg-brand-surface px-3 py-2 text-brand-text"
          value={data.name}
          onChange={(e) => update("name", e.target.value)}
        />
        {errors.name && <span className="text-sm text-red-400">{errors.name}</span>}
      </label>

      <label className="flex flex-col gap-1">
        Email
        <input
          className="rounded-md border border-brand-border bg-brand-surface px-3 py-2 text-brand-text"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
        />
        {errors.email && <span className="text-sm text-red-400">{errors.email}</span>}
      </label>

      <label className="flex flex-col gap-1">
        Company (optional)
        <input
          className="rounded-md border border-brand-border bg-brand-surface px-3 py-2 text-brand-text"
          value={data.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </label>

      <label className="flex flex-col gap-1">
        Service you&apos;re interested in
        <select
          className="rounded-md border border-brand-border bg-brand-surface px-3 py-2 text-brand-text"
          value={data.serviceInterest}
          onChange={(e) => update("serviceInterest", e.target.value)}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
        {errors.serviceInterest && <span className="text-sm text-red-400">{errors.serviceInterest}</span>}
      </label>

      <label className="flex flex-col gap-1">
        Message
        <textarea
          className="rounded-md border border-brand-border bg-brand-surface px-3 py-2 text-brand-text"
          rows={4}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
        />
        {errors.message && <span className="text-sm text-red-400">{errors.message}</span>}
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 rounded-md bg-brand-accent-green px-6 py-3 font-mono font-semibold text-brand-bg hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-red-400">
          Something went wrong — please try again or email us directly.
        </p>
      )}

      {status === "misconfigured" && (
        <p role="alert" className="text-red-400">
          This form isn&apos;t configured yet — please email us directly instead.
        </p>
      )}
    </form>
  );
}
