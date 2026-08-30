import { describe, it, expect } from "vitest";
import { services } from "./services-data";

describe("services data", () => {
  it("has exactly 8 services", () => {
    expect(services).toHaveLength(8);
  });

  it("each service has all required non-empty fields", () => {
    for (const service of services) {
      expect(service.id).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.summary).toBeTruthy();
      expect(service.details).toBeTruthy();
      expect(service.included.length).toBeGreaterThan(0);
      expect(service.icon).toBeTruthy();
    }
  });

  it("has unique ids", () => {
    const ids = services.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
