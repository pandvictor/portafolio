import { test, expect, type Page } from "@playwright/test";

const ROUTES = ["/", "resume", "cover-letter", "printResume", "no-such-page"];

// Rendering the whole page and walking it takes longer than the 30s default.
test.setTimeout(60_000);

/**
 * Walk the page so every `whileInView` reveal has fired before asserting.
 * Bounded: the printable CV runs to several thousand pixels and an unbounded
 * loop pushed that test past its timeout.
 */
const revealAll = async (page: Page) => {
  await page.evaluate(async () => {
    const step = 700;
    const steps = Math.min(Math.ceil(document.body.scrollHeight / step), 30);
    for (let i = 0; i <= steps; i++) {
      // "instant" is required: the site sets scroll-behavior: smooth for the
      // header's section links, and a smooth sweep never reaches the offsets
      // in time for the reveals to fire.
      window.scrollTo({ top: i * step, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 45));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.waitForTimeout(500);
};

test.describe("every page", () => {
  for (const route of ROUTES) {
    test(`${route} renders without errors or broken images`, async ({ page }) => {
      const problems: string[] = [];
      page.on("pageerror", (e) => problems.push(`pageerror: ${e.message}`));
      page.on("console", (m) => {
        if (m.type() === "error") problems.push(`console: ${m.text()}`);
      });
      page.on("response", (r) => {
        if (r.status() >= 400) problems.push(`${r.status()} ${r.url()}`);
      });

      await page.goto(route);
      await revealAll(page);

      const broken = await page.evaluate(() =>
        [...document.querySelectorAll("img")]
          .filter((i) => i.complete && i.naturalWidth === 0)
          .map((i) => i.src)
      );

      expect(problems, "console errors / failed requests").toEqual([]);
      expect(broken, "broken images").toEqual([]);
      // One h1 per page: the outline used to start at h3 with none at all.
      await expect(page.locator("h1")).toHaveCount(1);
    });
  }
});

test.describe("print output", () => {
  for (const route of ROUTES) {
    test(`${route} hides screen-only chrome when printing`, async ({ page }) => {
      await page.goto(route);
      await page.emulateMedia({ media: "print" });

      const leaked = await page.evaluate(() =>
        [
          "header.MuiAppBar-root",
          ".no-print",
          ".floating-buttons",
          ".scroll-progress",
          ".site-footer",
          ".site-colophon",
        ].filter((sel) =>
          [...document.querySelectorAll(sel)].some(
            (el) => getComputedStyle(el).display !== "none"
          )
        )
      );
      expect(leaked, "screen chrome visible in print").toEqual([]);
      await expect(page.locator("body")).toHaveCSS(
        "background-color",
        "rgb(255, 255, 255)"
      );
    });
  }
});

test.describe("language switching", () => {
  // Keys built from translated text used to change on every switch, remounting
  // items into a `hidden` variant the stagger parent never re-triggered.
  const CASES = [
    { flag: "English", heading: "How I help" },
    { flag: "Español", heading: "Cómo ayudo" },
    { flag: "Italiano", heading: "Come posso aiutarti" },
  ];

  test("translates and leaves nothing hidden", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "mobile", "switcher lives in the drawer");
    await page.goto("/");

    for (const { flag, heading } of CASES) {
      await page.locator(`header [aria-label="${flag}"]`).click();
      await page.waitForTimeout(900);
      await expect(page.getByRole("heading", { name: heading })).toBeVisible();
      await revealAll(page);

      // Poll rather than sample once: reveals run for ~0.7s and a single read
      // catches blocks that are merely mid-animation.
      await expect
        .poll(
          () =>
            page.evaluate(
              () =>
                [
                  ...document.querySelectorAll(".MuiCard-root, .MuiBox-root"),
                ].filter(
                  (el) =>
                    parseFloat(getComputedStyle(el).opacity) < 0.9 &&
                    (el.textContent ?? "").trim().length > 15 &&
                    getComputedStyle(el).display !== "none"
                ).length
            ),
          { message: `blocks hidden after switching to ${flag}`, timeout: 8000 }
        )
        .toBe(0);
    }
  });
});

test.describe("project dialog", () => {
  test("gallery swaps the image and its caption", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "mobile", "rail controls are desktop-only");
    await page.goto("/");
    await page.getByRole("button", { name: /^overview$/i }).first().click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    const thumbs = dialog.getByRole("tab");
    if ((await thumbs.count()) > 1) {
      const stage = dialog.getByTestId("project-stage");
      const before = await stage.getAttribute("src");
      await thumbs.nth(1).click();
      await expect.poll(() => stage.getAttribute("src")).not.toBe(before);
    }
  });

  // `more_info` was left as the English "Overview" in the Spanish file, so the
  // card button never translated.
  test("card and dialog labels translate", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "mobile", "switcher lives in the drawer");
    await page.goto("/");
    await page.locator('header [aria-label="Español"]').click();
    await page.waitForTimeout(800);

    await expect(
      page.getByRole("button", { name: /ver detalle/i }).first()
    ).toBeVisible();
    await page.getByRole("button", { name: /ver detalle/i }).first().click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText("Resultados");
    await expect(dialog.getByRole("link", { name: /ver proyecto/i })).toBeVisible();
  });
});

test.describe("generated documents", () => {
  test("the CV downloads as a PDF", async ({ page }) => {
    await page.goto("printResume");
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.getByRole("button", { name: /download pdf/i }).click(),
    ]);
    expect(download.suggestedFilename()).toMatch(/-cv-en\.pdf$/);
  });

  test("the cover letter downloads as a PDF", async ({ page }) => {
    await page.goto("cover-letter");
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.getByRole("button", { name: /download cover letter/i }).click(),
    ]);
    expect(download.suggestedFilename()).toMatch(/-cover-letter-en\.pdf$/);
  });
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("nothing stays stuck at its hidden variant", async ({ page }) => {
    await page.goto("/");
    await revealAll(page);
    const stuck = await page.evaluate(() =>
      [...document.querySelectorAll(".MuiCard-root, .MuiBox-root")].filter(
        (el) =>
          parseFloat(getComputedStyle(el).opacity) < 0.15 &&
          (el.textContent ?? "").trim().length > 15 &&
          getComputedStyle(el).display !== "none"
      ).length
    );
    expect(stuck).toBe(0);
  });
});

test.describe("section navigation", () => {
  test("header links jump to the right section", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "mobile", "links live in the drawer");
    await page.goto("/");

    for (const [label, id] of [["Work", "work"], ["Services", "services"]]) {
      await page.getByRole("link", { name: label, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      // The fixed app bar is ~80px tall; the target must clear it.
      await expect
        .poll(() =>
          page.evaluate(
            (sectionId) =>
              document.getElementById(sectionId)!.getBoundingClientRect().top,
            id
          )
        )
        .toBeLessThan(140);
    }
  });

  test("an anchor works from another route", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === "mobile", "links live in the drawer");
    await page.goto("resume");
    await page.getByRole("link", { name: "Work", exact: true }).click();
    await expect(page).toHaveURL(/#work$/);
    await expect
      .poll(() =>
        page.evaluate(() => document.getElementById("work")!.getBoundingClientRect().top)
      )
      .toBeLessThan(140);
  });
});

test("no horizontal overflow", async ({ page }) => {
  await page.goto("/");
  await page.waitForTimeout(800);
  const overflows = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1
  );
  expect(overflows).toBe(false);
});
