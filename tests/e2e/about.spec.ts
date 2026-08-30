import { test, expect } from "@playwright/test";

test("about page renders mission and team placeholders", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { name: "About Truthstack" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Team" })).toBeVisible();
  await expect(page.getByText("Team member")).toHaveCount(3);
});
