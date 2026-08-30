import { test, expect } from "@playwright/test";

test("shows inline validation errors on empty submit", async ({ page }) => {
  await page.route("**/formspree.io/**", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: "{}" })
  );
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.getByText("Name is required.")).toBeVisible();
  await expect(page.getByText("Email is required.")).toBeVisible();
});

test("submits successfully with valid data", async ({ page }) => {
  await page.route("**/formspree.io/**", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: "{}" })
  );

  await page.goto("/contact");
  await page.getByLabel("Name").fill("Ada Lovelace");
  await page.getByLabel("Email").fill("ada@example.com");
  await page.getByLabel("Service you're interested in").selectOption("software-testing");
  await page.getByLabel("Message").fill("We need help with our test suite.");
  await page.getByRole("button", { name: "Send message" }).click();

  await expect(page.getByRole("status")).toContainText("Thanks");
});
