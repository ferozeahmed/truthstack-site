import { test, expect } from "@playwright/test";
import { services } from "../../lib/services-data";

test("home page renders hero, all service cards, and CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: /test automation that keeps pace with how fast you ship/i })).toBeVisible();

  for (const service of services) {
    await expect(page.getByText(service.title, { exact: true })).toBeVisible();
  }

  await expect(page.getByRole("link", { name: "Talk to me" })).toHaveAttribute("href", "/contact");
  await expect(page.getByRole("link", { name: "See services" })).toHaveAttribute("href", "/services");
  await expect(page.getByText("Open to new engagements")).toBeVisible();
  await expect(page.getByText(/18\+ years of experience/)).toBeVisible();
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

test("home page explains the problems, process and CI approach", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /releases shouldn't feel like a gamble/i })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Nobody trusts the tests" })).toBeVisible();
  await expect(page.getByText("Right test, right layer")).toBeVisible();
  await expect(page.getByText("An automation health dashboard")).toBeVisible();
  await expect(page.getByText("Drift monitoring in production")).toBeVisible();
  await expect(page.getByText("Release readiness view")).toBeVisible();
  await expect(page.getByRole("heading", { name: "How we work together" })).toBeVisible();
  await expect(page.getByRole("listitem").filter({ hasText: "Hand off" })).toBeVisible();
  await expect(page.getByTestId("ci-snippet")).toContainText("uv run mypy src/pulse_tf");
  await page.getByRole("link", { name: /Read the PULSE case study/ }).click();
  await expect(page).toHaveURL(/\/work\/pulse$/);
});

test("closing call to action leads to the contact form", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Request an intro call" })).toHaveAttribute("href", "/contact");
});
