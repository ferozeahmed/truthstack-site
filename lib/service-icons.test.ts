import { describe, it, expect } from "vitest";
import { services } from "./services-data";
import { serviceIconPaths } from "./service-icons";

describe("service icons", () => {
  it("has a line icon for every service", () => {
    for (const service of services) {
      expect(serviceIconPaths[service.id]?.length, service.id).toBeGreaterThan(0);
    }
  });

  it("has no icons for unknown services", () => {
    const ids = new Set(services.map((s) => s.id));
    for (const id of Object.keys(serviceIconPaths)) {
      expect(ids.has(id), id).toBe(true);
    }
  });
});
