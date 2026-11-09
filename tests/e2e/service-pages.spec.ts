import { expect, test } from "@playwright/test";

test("services list links to detail pages only where they exist", async ({ page }) => {
  await page.goto("/services");
  await expect(page.getByRole("link", { name: "See how it works →" })).toHaveCount(5);
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

test("unknown service id returns 404", async ({ page }) => {
  const res = await page.goto("/services/does-not-exist");
  expect(res?.status()).toBe(404);
});

test("audit service page links to the sample audit", async ({ page }) => {
  await page.goto("/services/test-strategy-audit");
  await expect(page.getByTestId("audit-diagram")).toBeVisible();
  await expect(page.getByText("Reference project · self-initiated audit of my own repo")).toBeVisible();
  await page.getByRole("link", { name: /Read the full sample audit/ }).click();
  await expect(page).toHaveURL(/\/work\/pulse-audit$/);
});

test("sample audit shows scope, every finding and a roadmap", async ({ page }) => {
  await page.goto("/work/pulse-audit");
  await expect(page.getByRole("heading", { name: "Scope and method" })).toBeVisible();
  await expect(page.getByTestId("impact-effort-grid")).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: /Redaction misses common secret names/ })).toBeVisible();
  await expect(page.locator("li[id^='finding-']")).toHaveCount(10);
  await expect(page.getByRole("heading", { name: "Fix first" })).toBeVisible();
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

test("AI testing page is labelled illustrative and shows layers and sample cases", async ({ page }) => {
  await page.goto("/services/ai-llm-testing");
  await expect(page.getByTestId("llm-diagram")).toBeVisible();
  await expect(page.getByText("Illustrative · method only, not client results")).toBeVisible();
  await expect(page.getByTestId("sample-table").getByRole("row")).toHaveCount(6);
});

test("embedded page shows the engagement flow and report template", async ({ page }) => {
  await page.goto("/services/embedded-consultant");
  await expect(page.getByTestId("engagement-diagram")).toBeVisible();
  await expect(page.getByText("Illustrative · template, not real data")).toBeVisible();
  await expect(page.getByTestId("sample-table").getByRole("row")).toHaveCount(7);
});
