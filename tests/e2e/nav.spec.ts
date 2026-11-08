import { test, expect } from "@playwright/test";

test("nav renders all links with correct hrefs", async ({ page }) => {
  await page.goto("/");
  const header = page.getByRole("banner");
  const links: [string, string][] = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Work", "/work"],
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

test("nav marks the current page and styles Contact as the call to action", async ({ page }) => {
  await page.goto("/services");
  const header = page.getByRole("banner");
  await expect(header.getByRole("link", { name: "Services", exact: true })).toHaveAttribute(
    "aria-current",
    "page"
  );
  await expect(header.getByRole("link", { name: "Home", exact: true })).not.toHaveAttribute(
    "aria-current",
    "page"
  );
  await expect(header.getByRole("link", { name: "Contact", exact: true })).toHaveClass(
    /bg-brand-accent-green/
  );
});

test("mobile menu toggle reports its expanded state and closes after navigating", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Toggle menu" });
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("banner").getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("footer links to About", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "About", exact: true })
  ).toHaveAttribute("href", "/about");
});
