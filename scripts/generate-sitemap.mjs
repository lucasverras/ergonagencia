// Generates public/sitemap.xml from the same route manifest the
// prerenderer uses (src/lib/routes.ts), so the sitemap can't list a URL
// that isn't built or miss one that is.
//
// lastmod is the real git commit date of the files that produce each
// route — not the build timestamp. Stamping "today" on every URL at every
// deploy is noise Google learns to ignore, so a route only gets a date
// when its own source actually changed.
//
// Priority and changefreq are set per route type to guide Google crawling:
// - Homepage (/) → 1.0 weekly (most important)
// - Service pages → 0.9 weekly (core business)
// - Portfolio → 0.8 monthly (stable content)
// - Other pages → 0.7 weekly

import { writeFileSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readDates } from './content-dates.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const { PUBLIC_ROUTES } = await import(join(dist, 'server', 'entry-server.js'))
const { routes: DATES } = readDates()

const SITE = 'https://www.ergonstudio.com.br'

// Determine priority and changefreq based on route type
function getRouteMeta(route) {
  if (route === '/') return { priority: '1.0', changefreq: 'weekly' }
  if (route.startsWith('/servicos')) return { priority: '0.9', changefreq: 'weekly' }
  if (route.startsWith('/portfolio')) return { priority: '0.8', changefreq: 'monthly' }
  if (route === '/fly') return { priority: '0.8', changefreq: 'weekly' }
  return { priority: '0.7', changefreq: 'weekly' }
}

const urls = PUBLIC_ROUTES.map((route) => {
  const loc = route === '/' ? `${SITE}/` : `${SITE}${route}`
  const lastmod = DATES[route] ?? null
  const { priority, changefreq } = getRouteMeta(route)

  let urlEntry = `  <url>\n    <loc>${loc}</loc>`
  if (lastmod) urlEntry += `\n    <lastmod>${lastmod}</lastmod>`
  urlEntry += `\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`

  return urlEntry
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(join(root, 'public', 'sitemap.xml'), xml)
writeFileSync(join(dist, 'sitemap.xml'), xml)
console.log(`sitemap.xml — ${PUBLIC_ROUTES.length} URLs`)
