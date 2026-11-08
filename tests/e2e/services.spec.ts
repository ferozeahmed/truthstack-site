import { test, expect } from "@playwright/test";
import { services } from "../../lib/services-data";

test("services page renders detailed cards for every service", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByRole("heading", { name: "Services", exact: true })).toBeVisible();

  for (const service of services) {
    await expect(page.getByText(service.title, { exact: true })).toBeVisible();
  }

  const includedHeadings = page.getByText("What's included");
  await expect(includedHeadings).toHaveCount(services.length);
});

test("services use line icons instead of emoji", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByTestId("service-icon")).toHaveCount(services.length);
  for (const emoji of ["🧪", "🤖", "🧠", "🔍", "🔁"]) {
    await expect(page.getByText(emoji)).toHaveCount(0);
  }
});

test("each service says who it is best for", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByText("Best for:")).toHaveCount(services.length);
  for (const service of services) {
    await expect(page.getByText(service.bestFor)).toBeVisible();
  }
});

test("contact form offers every packaged service", async ({ page }) => {
  await page.goto("/contact");
  const options = await page.getByLabel("Service you're interested in").locator("option").allTextContents();
  for (const service of services) {
    expect(options).toContain(service.title);
  }
});
