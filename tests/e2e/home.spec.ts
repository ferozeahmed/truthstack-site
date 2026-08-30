import { test, expect } from "@playwright/test";
import { services } from "../../lib/services-data";

test("home page renders hero, all service cards, and CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /ship software that actually works/i })).toBeVisible();

  for (const service of services) {
    await expect(page.getByText(service.title, { exact: true })).toBeVisible();
  }

  await expect(page.getByRole("link", { name: "Talk to us" })).toHaveAttribute("href", "/contact");
});
