const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1024 });

  const pagesToScreenshot = [
    { url: 'http://localhost:3000/cost-centers', path: '/home/jules/verification/cost-centers.png' },
    { url: 'http://localhost:3000/reports/income-statement', path: '/home/jules/verification/income-statement.png' },
    { url: 'http://localhost:3000/reports/balance-sheet', path: '/home/jules/verification/balance-sheet.png' },
    { url: 'http://localhost:3000/reports/aging', path: '/home/jules/verification/aging.png' }
  ];

  for (const { url, path } of pagesToScreenshot) {
    await page.goto(url);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path, fullPage: true });
  }

  await browser.close();
})();
