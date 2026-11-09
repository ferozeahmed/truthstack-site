import { test, expect } from "@playwright/test";
import { services } from "../../lib/services-data";

test("home page renders hero, all service cards, and CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Build confidence in every release with intelligent test automation." })).toBeVisible();

  for (const service of services) {
    await expect(page.getByText(service.title, { exact: true })).toBeVisible();
  }

  await expect(page.getByRole("link", { name: "Talk to me" })).toHaveAttribute("href", "/contact");
  await expect(page.getByRole("link", { name: "See services" })).toHaveAttribute("href", "/services");
  await expect(page.getByText("Open to new engagements")).toBeVisible();
  await expect(page.getByText(/Truthstack helps SaaS companies and growing engineering teams/)).toBeVisible();
  await expect(page.getByText(/get senior QA expertise without building a full-time testing team/)).toBeVisible();
  await expect(page.getByText("Years in quality engineering")).toBeVisible();
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
  await page.getByRole("link", { name: /See how PULSE.s CI is set up/ }).click();
  await expect(page).toHaveURL(/\/work\/pulse$/);
});

test("closing call to action leads to the contact form", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Request an intro call" })).toHaveAttribute("href", "/contact");
});

test("home page has a dedicated PULSE section with working links", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Engineering better automation frameworks." })).toBeVisible();
  await expect(page.getByText(/Explore PULSE, our reference automation framework/)).toBeVisible();
  await expect(page.getByRole("link", { name: "View the code on GitHub →" })).toHaveAttribute(
    "href",
    "https://github.com/ferozeahmed/PULSE",
  );
  await expect(page.getByRole("link", { name: "See the sample audit →" })).toHaveAttribute("href", "/work/pulse-audit");
  await page.getByRole("link", { name: "Read the PULSE case study" }).click();
  await expect(page).toHaveURL(/\/work\/pulse$/);
});
