import { describe, expect, it } from "vitest";
import { workItems } from "./work-index";
import { servicePages } from "./service-pages";
import { services } from "./services-data";

describe("service pages", () => {
  it("only exist for known services", () => {
    const ids = new Set(services.map((s) => s.id));
    for (const p of servicePages) expect(ids.has(p.id)).toBe(true);
  });

  it("link their worked example to an existing work item", () => {
    const slugs = new Set(workItems.map((c) => `/work/${c.slug}`));
    for (const p of servicePages) {
      if (p.example.href) expect(slugs.has(p.example.href)).toBe(true);
    }
  });

  it("label every example as a reference project or illustrative, never as a client", () => {
    for (const p of servicePages) expect(p.example.label).toMatch(/reference project|illustrative/i);
  });

  it("give every example either a case study link or a sample table", () => {
    for (const p of servicePages) expect(Boolean(p.example.href || p.example.sample)).toBe(true);
  });
});
