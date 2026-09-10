const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const widths = [320, 360, 375, 390, 414, 430, 768, 834, 1024, 1280, 1440, 1920];

  await page.goto('http://localhost:3000');

  for (const width of widths) {
    await page.setViewportSize({ width, height: 800 });
    await page.waitForTimeout(500); // Give time for responsive adjustments
    // Check for any horizontal scroll or obvious issues (simple check)
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    if (scrollWidth > clientWidth) {
      console.log(`[Warning] Horizontal scroll detected at width ${width}px (scroll: ${scrollWidth}, client: ${clientWidth})`);
    }
  }

  await browser.close();
})();
