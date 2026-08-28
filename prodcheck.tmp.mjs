import { chromium } from 'playwright'
const base = 'https://www.ergonstudio.com.br'
const b = await chromium.launch()
for (const [label, vp] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
  for (const r of ['/', '/servicos/sites', '/portfolio', '/portfolio/garagi', '/fly']) {
    const p = await b.newPage({ viewport: vp, deviceScaleFactor: 2 })
    const errs = [], failed = []
    p.on('pageerror', (e) => errs.push(e.message.slice(0, 120)))
    p.on('console', (m) => m.type() === 'error' && errs.push(m.text().slice(0, 120)))
    p.on('response', (res) => res.status() >= 400 && failed.push(res.status() + ' ' + res.url().replace(base, '')))
    await p.goto(base + r, { waitUntil: 'networkidle' })
    await p.waitForTimeout(1500)
    const d = await p.evaluate(() => ({
      h1: document.querySelectorAll('h1').length,
      ld: document.querySelectorAll('script[type="application/ld+json"]').length,
      links: document.querySelectorAll('a[href]').length,
      imgs: document.querySelectorAll('img').length,
      noAlt: [...document.querySelectorAll('img')].filter((i) => !i.hasAttribute('alt')).length,
      brokenImgs: [...document.querySelectorAll('img')].filter((i) => i.complete && i.naturalWidth === 0).length,
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      text: document.body.innerText.length,
    }))
    console.log(
      `${label.padEnd(8)} ${r.padEnd(20)} h1=${d.h1} ld=${d.ld} a=${d.links} img=${d.imgs}/${d.brokenImgs}broken/${d.noAlt}noalt text=${d.text} hscroll=${d.overflow} errs=${errs.length} 4xx=${failed.length}`,
    )
    errs.slice(0, 2).forEach((e) => console.log('    err: ' + e))
    failed.slice(0, 3).forEach((e) => console.log('    ' + e))
    await p.close()
  }
}
await b.close()
