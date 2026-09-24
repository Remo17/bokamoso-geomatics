const { chromium } = require('playwright')

const base = 'http://localhost:3003'

const routes = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/expertise',
  '/contact',
  '/request-a-quote',
  '/projects/topographic-survey-kanana-estate'
]

const widths = [320, 360, 375, 390, 412, 430, 768, 1024, 1280, 1440]

async function main() {
  const browser = await chromium.launch({ headless: true })
  const failures = []
  let tested = 0

  for (const width of widths) {
    for (const route of routes) {
      tested++

      const page = await browser.newPage({
        viewport: { width, height: 900 }
      })

      const consoleErrors = []
      const failedRequests = []

      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text())
        }
      })

      page.on('requestfailed', request => {
        failedRequests.push(request.url())
      })

      try {
        const response = await page.goto(base + route, {
          waitUntil: 'networkidle',
          timeout: 15000
        })

        const audit = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth
        }))

        const status = response ? response.status() : 0
        const overflow = audit.scrollWidth > audit.clientWidth + 1

        if (status !== 200 || overflow || consoleErrors.length || failedRequests.length) {
          failures.push({
            width,
            route,
            status,
            overflow,
            consoleErrors,
            failedRequests
          })
        }

        if (width < 768) {
          const menu = page.locator('button[aria-controls="mobile-navigation"]')

          if (await menu.count() !== 1) {
            failures.push({
              width,
              route,
              issue: 'Mobile menu button missing'
            })
          } else {
            await menu.click()

            const mobileNav = page.locator('#mobile-navigation')

            if (!(await mobileNav.isVisible())) {
              failures.push({
                width,
                route,
                issue: 'Mobile navigation did not open'
              })
            }

            const links = await mobileNav.locator('a').count()

            if (links !== 6) {
              failures.push({
                width,
                route,
                issue: 'Expected 6 mobile links, found ' + links
              })
            }

            await menu.click()

            if (await mobileNav.isVisible()) {
              failures.push({
                width,
                route,
                issue: 'Mobile navigation did not close'
              })
            }
          }
        }
      } catch (error) {
        failures.push({
          width,
          route,
          issue: 'PAGE TEST FAILED',
          error: String(error)
        })
      }

      await page.close()
    }
  }

  await browser.close()

  console.log('')
  console.log('=== BOKAMOSO PRODUCTION QA ===')
  console.log('Pages tested: ' + tested)
  console.log('Viewport widths: ' + widths.length)
  console.log('Failures: ' + failures.length)
  console.log('')

  if (failures.length === 0) {
    console.log('PASS')
    console.log('All routes returned 200')
    console.log('No horizontal overflow detected')
    console.log('No console errors detected')
    console.log('No failed network requests detected')
    console.log('Mobile navigation opened and closed correctly')
    console.log('Mobile navigation contained all 6 expected links')
  } else {
    console.log('FAILURES')
    console.log(JSON.stringify(failures, null, 2))
    process.exitCode = 1
  }
}

main()
