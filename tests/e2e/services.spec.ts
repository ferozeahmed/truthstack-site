import { test, expect } from "@playwright/test";
import { services } from "../../lib/services-data";

test("services page renders detailed cards for all 8 services", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByRole("heading", { name: "Services", exact: true })).toBeVisible();

  for (const service of services) {
    await expect(page.getByText(service.title, { exact: true })).toBeVisible();
  }

  const includedHeadings = page.getByText("What's included");
  await expect(includedHeadings).toHaveCount(services.length);
});
