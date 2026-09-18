import { test, expect } from '@playwright/test';

const routes = [
  '/services',
  '/projects',
  '/expertise',
  '/contact',
  '/request-a-quote'
];

for (const route of routes) {
  test(`route ${route} verification`, async ({ page }) => {
    // Desktop check
    const response = await page.goto(`http://localhost:3000${route}`);
    console.log(`\n=== ROUTE: ${route} (Desktop) ===`);
    console.log(`HTTP Status: ${response?.status()}`);
    console.log(`Title: ${await page.title()}`);

    // Check if the scroll height is larger than window height
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const windowHeight = await page.evaluate(() => window.innerHeight);
    const bodyOverflow = await page.evaluate(() => window.getComputedStyle(document.body).overflow);

    console.log(`Scroll Height: ${scrollHeight}px`);
    console.log(`Viewport Height: ${windowHeight}px`);
    console.log(`Body Overflow: ${bodyOverflow}`);
    console.log(`Footer reached: ${scrollHeight > windowHeight && bodyOverflow !== 'hidden'}`);

    // Log content snippet
    const contentText = await page.locator('main').textContent();
    console.log(`Content Snippet: ${contentText?.substring(0, 150).replace(/\n/g, ' ')}...`);

    // Mobile check
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    const scrollHeightMobile = await page.evaluate(() => document.documentElement.scrollHeight);
    const windowHeightMobile = await page.evaluate(() => window.innerHeight);
    const bodyOverflowMobile = await page.evaluate(() => window.getComputedStyle(document.body).overflow);
    console.log(`\n=== ROUTE: ${route} (Mobile) ===`);
    console.log(`Scroll Height: ${scrollHeightMobile}px`);
    console.log(`Viewport Height: ${windowHeightMobile}px`);
    console.log(`Body Overflow: ${bodyOverflowMobile}`);
    console.log(`Footer reached: ${scrollHeightMobile > windowHeightMobile && bodyOverflowMobile !== 'hidden'}`);

    // Check for JS errors or network errors
    page.on('console', msg => {
      if (msg.type() === 'error') console.log(`Console Error: ${msg.text()}`);
    });
    page.on('requestfailed', request => {
      console.log(`Failed Request: ${request.url()} - ${request.failure()?.errorText}`);
    });
  });
}
