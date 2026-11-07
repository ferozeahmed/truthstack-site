import { test, expect } from "@playwright/test";

test("privacy page explains data collection and links to contact", async ({ page }) => {
  await page.goto("/privacy");
  await expect(page.getByRole("heading", { name: "Privacy", level: 1 })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What I collect" })).toBeVisible();
  await expect(page.getByRole("link", { name: "contact page" })).toHaveAttribute("href", "/contact");
});

test("footer links to the privacy page", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Privacy", exact: true })
  ).toHaveAttribute("href", "/privacy");
});
