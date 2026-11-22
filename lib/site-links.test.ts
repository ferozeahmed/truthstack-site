import { describe, expect, it } from "vitest";
import { LINKEDIN_URL } from "./site-links";

describe("site links", () => {
  it("uses a LinkedIn profile URL", () => {
    const url = new URL(LINKEDIN_URL);
    expect(url.protocol).toBe("https:");
    expect(url.hostname).toBe("www.linkedin.com");
    expect(url.pathname).toMatch(/^\/in\/[^/]+\/?$/);
  });
});
