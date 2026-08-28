// Generates public/sitemap.xml from the same route manifest the
// prerenderer uses (src/lib/routes.ts), so the sitemap can't list a URL
// that isn't built or miss one that is.
//
// lastmod is the real git commit date of the files that produce each
// route — not the build timestamp. Stamping "today" on every URL at every
// deploy is noise Google learns to ignore, so a route only gets a date
// when its own source actually changed.

import { writeFileSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readDates } from './content-dates.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const { PUBLIC_ROUTES } = await import(join(dist, 'server', 'entry-server.js'))
const { routes: DATES } = readDates()

const SITE = 'https://www.ergonstudio.com.br'
const urls = PUBLIC_ROUTES.map((route) => {
  const loc = route === '/' ? `${SITE}/` : `${SITE}${route}`
  const lastmod = DATES[route] ?? null
  return `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(join(root, 'public', 'sitemap.xml'), xml)
writeFileSync(join(dist, 'sitemap.xml'), xml)
console.log(`sitemap.xml — ${PUBLIC_ROUTES.length} URLs`)
