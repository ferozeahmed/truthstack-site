import { test, expect } from "@playwright/test";

test("about page renders mission and founder section with no placeholders", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { name: "About Truthstack" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /who.s behind truthstack/i })).toBeVisible();
  await expect(page.getByText("18+ years in quality engineering", { exact: true })).toBeVisible();
  await expect(page.getByText("Claude Certified Professional")).toBeVisible();
  await expect(page.getByText("Team member")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Get in touch" })).toHaveAttribute("href", "/contact");
});
