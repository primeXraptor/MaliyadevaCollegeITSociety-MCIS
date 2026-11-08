import { test, expect } from "@playwright/test";
test("routes, internal destinations, and unknown slugs", async ({
  page,
  request,
}) => {
  const routes = [
    "/",
    "/blogs",
    "/events",
    "/competitions",
    "/news",
    "/about",
    "/contact",
    "/terminal",
    "/blogs/first-line-of-code",
    "/blogs/designing-with-intention",
    "/blogs/open-source-together",
    "/events/build-together",
    "/events/creative-lab",
    "/competitions/code-challenge",
    "/competitions/interface-challenge",
    "/news/a-space-for-ideas",
  ];
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("main h1")).toHaveCount(1);
    const links = await page
      .locator("a")
      .evaluateAll((links) =>
        links
          .map((l) => l.getAttribute("href"))
          .filter((h): h is string => !!h && h.startsWith("/")),
      );
    for (const href of new Set(links)) {
      const response = await request.get(href);
      expect(response.status(), href).toBe(200);
    }
  }
  for (const route of ["/blogs/not-real", "/unknown", "/about/not-real"])
    expect((await request.get(route)).status()).toBe(404);
  expect(errors).toEqual([]);
});
test("search, combined category/status filters, and reset", async ({
  page,
}) => {
  await page.goto("/blogs");
  await page.getByRole("textbox", { name: "Search blogs" }).fill("design");
  await expect(page.locator(".listing-grid .content-card")).toHaveCount(1);
  await page.getByLabel("Category").selectOption("Development");
  await expect(page.getByText("No matches this time.")).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(page.locator(".listing-grid .content-card")).toHaveCount(3);
  await page.goto("/competitions");
  await page.getByLabel("Status").selectOption("Upcoming");
  await expect(page.locator(".listing-grid .content-card")).toHaveCount(1);
  await page.getByLabel("Category").selectOption("Design");
  await expect(page.getByText("No matches this time.")).toBeVisible();
  await page.goto("/events");
  await page.getByLabel("Status").selectOption("Completed");
  await expect(page.locator(".listing-grid .content-card")).toHaveCount(1);
});
test("mobile menu keyboard behaviour and responsive layout", async ({
  page,
}) => {
  for (const width of [375, 390, 768, 1280, 1536]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/blogs",
      "/terminal",
      "/contact",
      "/blogs/first-line-of-code",
    ]) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${route} at ${width}`,
      ).toBeTruthy();
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.locator('button[aria-controls="main-nav"]');
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("navigation").getByRole("link", { name: "Competitions" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Blogs", exact: true })
    .click();
  await expect(page).toHaveURL("/blogs");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toHaveAttribute("aria-expanded", "false");
});
