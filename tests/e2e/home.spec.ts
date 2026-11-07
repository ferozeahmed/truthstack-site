import { test, expect } from "@playwright/test";
import { services } from "../../lib/services-data";

test("home page renders hero, all service cards, and CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /ship software that actually works/i })).toBeVisible();

  for (const service of services) {
    await expect(page.getByText(service.title, { exact: true })).toBeVisible();
  }

  await expect(page.getByRole("link", { name: "Talk to me" })).toHaveAttribute("href", "/contact");
});

test("home page shows real credentials and tools, with no placeholder proof", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Claude Certified Professional")).toBeVisible();
  await expect(page.getByRole("heading", { name: /tools & stack/i })).toBeVisible();
  for (const tool of ["Playwright", "Selenium", "Cypress", "k6", "Jenkins"]) {
    await expect(page.getByRole("listitem").filter({ hasText: tool }).first()).toBeVisible();
  }

  await expect(page.getByText("[client logo]")).toHaveCount(0);
  await expect(page.getByText("Bugs caught pre-release")).toHaveCount(0);
});
