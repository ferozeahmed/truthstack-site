import { describe, expect, it } from "vitest";
import { CI_EXCERPT, PROBLEMS, PROCESS } from "./home-content";

describe("home content", () => {
  it("has unique problems and process steps", () => {
    expect(new Set(PROBLEMS.map((p) => p.problem)).size).toBe(PROBLEMS.length);
    expect(new Set(PROCESS.map((p) => p.title)).size).toBe(PROCESS.length);
  });

  it("gives every problem a lead and several concrete points", () => {
    for (const p of PROBLEMS) {
      expect(p.lead.length).toBeGreaterThan(20);
      expect(p.points.length).toBeGreaterThanOrEqual(5);
      expect(new Set(p.points.map((x) => x.title)).size).toBe(p.points.length);
    }
  });

  it("makes no numeric claims about results", () => {
    const text = JSON.stringify([PROBLEMS, PROCESS]);
    expect(text).not.toMatch(/\d+\s?%|\d+x\b|\d+\+ (clients|projects)/i);
  });

  it("keeps the CI excerpt aligned with PULSE's real checks", () => {
    for (const cmd of ["ruff check", "mypy src/pulse_tf", "pytest tests/", "pytest examples/", "uv build"]) {
      expect(CI_EXCERPT).toContain(cmd);
    }
  });
});
