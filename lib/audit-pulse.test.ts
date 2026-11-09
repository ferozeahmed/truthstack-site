import { describe, expect, it } from "vitest";
import { FINDINGS, ROADMAP } from "./audit-pulse";

describe("PULSE audit data", () => {
  it("has unique, sequential finding ids", () => {
    expect(FINDINGS.map((f) => f.id)).toEqual(FINDINGS.map((_, i) => i + 1));
  });

  it("gives every finding evidence, impact and a fix", () => {
    for (const f of FINDINGS) {
      expect(f.evidence.length).toBeGreaterThan(20);
      expect(f.why.length).toBeGreaterThan(20);
      expect(f.fix.length).toBeGreaterThan(20);
    }
  });

  it("places every finding in exactly one roadmap stage", () => {
    const placed = ROADMAP.flatMap((s) => s.ids).sort((a, b) => a - b);
    expect(placed).toEqual(FINDINGS.map((f) => f.id));
  });
});
