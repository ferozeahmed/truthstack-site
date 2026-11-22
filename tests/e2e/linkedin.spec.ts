import { expect, test } from "@playwright/test";

const LINKEDIN = "https://www.linkedin.com/in/ferozebtech2007/";

for (const path of ["/", "/about", "/contact"]) {
  test(`LinkedIn link is present and opens safely on ${path}`, async ({ page }) => {
    await page.goto(path);
    const link = page.getByRole("link", { name: /LinkedIn/ }).first();
    await expect(link).toHaveAttribute("href", LINKEDIN);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
  });
}
