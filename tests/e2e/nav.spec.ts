import { test, expect } from "@playwright/test";

test("nav renders all links with correct hrefs", async ({ page }) => {
  await page.goto("/");
  const header = page.getByRole("banner");
  const links: [string, string][] = [
    ["Home", "/"],
    ["Services", "/services"],
    ["About", "/about"],
    ["Pricing", "/pricing"],
    ["Contact", "/contact"],
  ];
  for (const [label, href] of links) {
    await expect(header.getByRole("link", { name: label, exact: true })).toHaveAttribute(
      "href",
      href
    );
  }
});

test("mobile menu toggles", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");
  // Scoped to the header: the footer also renders a "Services" link that is
  // always visible, so an unscoped role query would resolve to that instead.
  const header = page.getByRole("banner");
  await expect(header.getByRole("link", { name: "Services", exact: true })).toBeHidden();
  await page.getByRole("button", { name: "Toggle menu" }).click();
  await expect(header.getByRole("link", { name: "Services", exact: true })).toBeVisible();
});
