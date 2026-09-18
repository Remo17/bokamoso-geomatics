import { test, expect } from '@playwright/test';

const routes = [
  '/services',
  '/projects',
  '/expertise',
  '/contact',
  '/request-a-quote'
];

for (const route of routes) {
  test(`route ${route} scrolls correctly`, async ({ page }) => {
    await page.goto(`http://localhost:3000${route}`);

    // Check if the scroll height is larger than window height
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const windowHeight = await page.evaluate(() => window.innerHeight);

    console.log(`Route ${route}: scrollHeight=${scrollHeight}, windowHeight=${windowHeight}`);
    expect(scrollHeight).toBeGreaterThan(windowHeight);

    // Check for overflow: hidden on html or body
    const bodyOverflow = await page.evaluate(() => window.getComputedStyle(document.body).overflow);
    const htmlOverflow = await page.evaluate(() => window.getComputedStyle(document.documentElement).overflow);

    expect(bodyOverflow).not.toBe('hidden');
    expect(htmlOverflow).not.toBe('hidden');
  });
}
