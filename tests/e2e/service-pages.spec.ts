import { expect, test } from "@playwright/test";

test("services list links to detail pages only where they exist", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByRole("link", { name: "See how it works →" })).toHaveCount(2);
});

test("framework service page shows diagram, steps and worked example", async ({ page }) => {
  await page.goto("/services/test-automation-framework");
  await expect(
    page.getByRole("heading", { level: 1, name: "Test Automation Framework Build" }),
  ).toBeVisible();
  await expect(page.getByTestId("framework-diagram")).toBeVisible();
  await expect(page.getByText("Reference project · self-initiated")).toBeVisible();
  await page.getByRole("link", { name: /Read the PULSE case study/ }).click();
  await expect(page).toHaveURL(/\/work\/pulse$/);
});

test("CI/CD service page shows the pipeline diagram", async ({ page }) => {
  await page.goto("/services/cicd-test-pipeline");
  await expect(page.getByTestId("pipeline-diagram")).toBeVisible();
});

test("service without a detail page returns 404", async ({ page }) => {
  const res = await page.goto("/services/test-strategy-audit");
  expect(res?.status()).toBe(404);
});

test("work page lists PULSE and case study states its limits", async ({ page }) => {
  await page.goto("/work");
  await page.getByRole("link", { name: /PULSE: a layered Python test framework/ }).click();
  await expect(page.getByRole("heading", { name: "Trade-offs and limits" })).toBeVisible();
  await expect(page.getByRole("link", { name: /View the code on GitHub/ })).toHaveAttribute(
    "href",
    "https://github.com/ferozeahmed/PULSE",
  );
});
