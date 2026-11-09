import { describe, expect, it } from "vitest";
import { getContactConfig } from "./contact-config";

describe("getContactConfig", () => {
  it("falls back to the defaults", () => {
    const c = getContactConfig({});
    expect(c.to).toBe("algofire-contact@googlegroups.com");
    expect(c.from).toContain("onboarding@resend.dev");
  });

  it("uses overrides and trims them", () => {
    const c = getContactConfig({
      CONTACT_TO_EMAIL: "  me@example.org ",
      CONTACT_FROM_EMAIL: "Truthstack <hello@example.org>",
    });
    expect(c).toEqual({ to: "me@example.org", from: "Truthstack <hello@example.org>" });
  });

  it("ignores blank overrides", () => {
    expect(getContactConfig({ CONTACT_TO_EMAIL: "   " }).to).toBe("algofire-contact@googlegroups.com");
  });
});
