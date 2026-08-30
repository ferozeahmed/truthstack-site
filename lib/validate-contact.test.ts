import { describe, it, expect } from "vitest";
import { validateContact, type ContactFormData } from "./validate-contact";

const valid: ContactFormData = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  company: "Acme",
  serviceInterest: "software-testing",
  message: "We need help with our test suite.",
};

describe("validateContact", () => {
  it("accepts fully filled valid data", () => {
    expect(validateContact(valid)).toEqual({ valid: true, errors: {} });
  });

  it("rejects missing required fields", () => {
    const result = validateContact({ ...valid, name: "", message: "" });
    expect(result.valid).toBe(false);
    expect(result.errors.name).toBeTruthy();
    expect(result.errors.message).toBeTruthy();
  });

  it("rejects malformed email", () => {
    const result = validateContact({ ...valid, email: "not-an-email" });
    expect(result.valid).toBe(false);
    expect(result.errors.email).toBeTruthy();
  });

  it("company is optional", () => {
    const result = validateContact({ ...valid, company: "" });
    expect(result.valid).toBe(true);
  });
});
