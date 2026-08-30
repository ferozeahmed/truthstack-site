import { describe, it, expect } from "vitest";
import { engagementModels } from "./pricing-data";

describe("pricing data", () => {
  it("has exactly 3 engagement models", () => {
    expect(engagementModels).toHaveLength(3);
  });

  it("each model has all required non-empty fields", () => {
    for (const model of engagementModels) {
      expect(model.id).toBeTruthy();
      expect(model.title).toBeTruthy();
      expect(model.description).toBeTruthy();
      expect(model.included.length).toBeGreaterThan(0);
    }
  });
});
