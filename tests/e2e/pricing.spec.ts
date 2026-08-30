import { test, expect } from "@playwright/test";
import { engagementModels } from "../../lib/pricing-data";

test("pricing page renders all engagement models with quote links", async ({ page }) => {
  await page.goto("/pricing");
  await expect(page.getByRole("heading", { name: "Pricing", exact: true })).toBeVisible();

  for (const model of engagementModels) {
    await expect(page.getByText(model.title, { exact: true })).toBeVisible();
  }

  await expect(page.getByRole("link", { name: "Get a quote" })).toHaveCount(engagementModels.length);
});
