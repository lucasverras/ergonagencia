// Crawls every public route over HTTP and asserts the SEO contract on the
// HTML the server actually returns — no JavaScript executed, which is the
// whole point: this is what a crawler that doesn't render sees.
//
//   node scripts/seo-audit.mjs http://localhost:4179
//   node scripts/seo-audit.mjs https://www.ergonstudio.com.br
//
// Exits non-zero if any check fails, so it can gate a deploy.


import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const base = (process.argv[2] || 'http://localhost:4179').replace(/\/$/, '')
const CANONICAL_HOST = 'https://www.ergonstudio.com.br'

const { PUBLIC_ROUTES } = await import(join(root, 'dist', 'server', 'entry-server.js'))

const errors = []
const warnings = []
const seen = { title: new Map(), description: new Map(), canonical: new Map() }

// every fetch gets a deadline — a single hung connection shouldn't stall
// the whole audit with no output
const get = (url, opts = {}) => fetch(url, { signal: AbortSignal.timeout(20000), ...opts })

const one = (html, re) => html.match(re)?.[1]?.trim()
const attr = (html, sel) => one(html, sel)

function checkJsonLd(html, route) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  if (!blocks.length) return errors.push(`${route}: no JSON-LD`)
  blocks.forEach((b, i) => {
    try {
      const parsed = JSON.parse(b[1])
      const types = JSON.stringify(parsed)
      if (!types.includes('"@type"')) errors.push(`${route}: JSON-LD block ${i} has no @type`)
    } catch (e) {
      errors.push(`${route}: JSON-LD block ${i} is invalid JSON — ${e.message}`)
    }
  })
}

async function audit(route) {
  const url = route === '/' ? `${base}/` : `${base}${route}`
  const res = await get(url, { redirect: 'manual' })
  if (res.status !== 200) return errors.push(`${route}: HTTP ${res.status}`)
  const html = await res.text()

  const title = one(html, /<title>([^<]*)<\/title>/)
  const desc = attr(html, /<meta\s+name="description"\s+content="([^"]*)"/)
  const canonical = attr(html, /<link\s+rel="canonical"\s+href="([^"]*)"/)
  const robots = attr(html, /<meta\s+name="robots"\s+content="([^"]*)"/)
  const ogTitle = attr(html, /<meta\s+property="og:title"\s+content="([^"]*)"/)
  const ogImage = attr(html, /<meta\s+property="og:image"\s+content="([^"]*)"/)
  const ogUrl = attr(html, /<meta\s+property="og:url"\s+content="([^"]*)"/)
  const twCard = attr(html, /<meta\s+name="twitter:card"\s+content="([^"]*)"/)
  const h1s = [...html.matchAll(/<h1[\s>]/g)].length
  const lang = attr(html, /<html\s+lang="([^"]*)"/)

  if (!title) errors.push(`${route}: missing <title>`)
  else if (title.length > 65) warnings.push(`${route}: title is ${title.length} chars — "${title}"`)
  if (!desc) errors.push(`${route}: missing meta description`)
  else if (desc.length > 165) warnings.push(`${route}: description is ${desc.length} chars`)
  if (!canonical) errors.push(`${route}: missing canonical`)
  else {
    const expected = route === '/' ? `${CANONICAL_HOST}/` : `${CANONICAL_HOST}${route}`
    if (canonical !== expected) errors.push(`${route}: canonical is "${canonical}", expected "${expected}"`)
  }
  if (!robots?.includes('index')) errors.push(`${route}: robots is "${robots}"`)
  if (robots?.includes('noindex')) errors.push(`${route}: public route is noindex`)
  if (h1s !== 1) errors.push(`${route}: ${h1s} <h1> elements, expected exactly 1`)

  // Heading levels must descend one at a time — a jump (h1 -> h3) breaks
  // both the document outline a crawler builds and screen-reader navigation.
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]))
  let prev = 0
  for (const l of levels) {
    if (prev && l > prev + 1) {
      errors.push(`${route}: heading order skips h${prev} -> h${l}`)
      break
    }
    prev = l
  }
  if (lang !== 'pt-BR') errors.push(`${route}: html lang is "${lang}"`)
  if (!ogTitle) errors.push(`${route}: missing og:title`)
  if (!ogImage?.startsWith('https://')) errors.push(`${route}: og:image is not an absolute https URL`)
  if (ogUrl !== canonical) errors.push(`${route}: og:url "${ogUrl}" != canonical "${canonical}"`)
  if (twCard !== 'summary_large_image') errors.push(`${route}: twitter:card is "${twCard}"`)

  if (/ergonagencia\.com\.br/i.test(html)) errors.push(`${route}: references the old domain`)
  if (/Ergon Ag[eê]ncia/i.test(html)) errors.push(`${route}: references the old brand name`)

  // The prerender contract: real text content, not an empty #root.
  const body = html.split('<body')[1] ?? ''
  const text = body.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ')
  const words = text.split(/\s+/).filter((w) => w.length > 2).length
  if (words < 120) errors.push(`${route}: only ~${words} words in server HTML — not prerendered?`)

  // Images must carry alt text (empty alt is legitimate for decoration).
  const imgs = [...body.matchAll(/<img\b[^>]*>/g)]
  const noAlt = imgs.filter((m) => !/\balt=/.test(m[0]))
  if (noAlt.length) errors.push(`${route}: ${noAlt.length} <img> without an alt attribute`)

  checkJsonLd(html, route)

  for (const [key, val] of [['title', title], ['description', desc], ['canonical', canonical]]) {
    if (!val) continue
    const prev = seen[key].get(val)
    if (prev) errors.push(`duplicate ${key}: ${prev} and ${route}`)
    else seen[key].set(val, route)
  }

  // Internal links must be real anchors pointing at routes that exist.
  const hrefs = [...body.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)].map((m) => m[1])
  for (const href of new Set(hrefs)) {
    const clean = href.length > 1 ? href.replace(/\/$/, '') : '/'
    if (!PUBLIC_ROUTES.includes(clean)) errors.push(`${route}: internal link to unknown route ${href}`)
  }

  return { route, title, desc: desc?.length, words, h1s }
}

console.log(`SEO audit — ${base}\n`)
const rows = []
for (const route of PUBLIC_ROUTES) rows.push(await audit(route))

for (const r of rows.filter(Boolean))
  console.log(`  ${r.route.padEnd(34)} ${String(r.words).padStart(5)}w  h1=${r.h1s}  ${r.title}`)

// --- site-level files -----------------------------------------------------
for (const [path, must] of [
  ['/robots.txt', 'Sitemap: https://www.ergonstudio.com.br/sitemap.xml'],
  ['/sitemap.xml', '<urlset'],
  ['/llms.txt', '# Ergon Product Studio'],
  ['/llms-full.txt', '# Ergon Product Studio'],
]) {
  const res = await get(`${base}${path}`)
  const body = await res.text()
  if (res.status !== 200) errors.push(`${path}: HTTP ${res.status}`)
  else if (!body.includes(must)) errors.push(`${path}: missing expected content "${must}"`)
  else console.log(`  ${path.padEnd(34)} ok (${body.length} bytes)`)
}

// Sitemap must list exactly the public routes.
const sitemap = await (await get(`${base}/sitemap.xml`)).text()
const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace(CANONICAL_HOST, '').replace(/^$/, '/'),
)
for (const r of PUBLIC_ROUTES)
  if (!listed.includes(r === '/' ? '/' : r)) errors.push(`sitemap missing ${r}`)
for (const l of listed)
  if (!PUBLIC_ROUTES.includes(l)) errors.push(`sitemap lists non-public route ${l}`)

// A URL that must not exist has to answer 404, not 200.
const missing = await get(`${base}/esta-pagina-nao-existe-teste-seo`, { redirect: 'manual' })
if (missing.status !== 404) errors.push(`unknown URL returned HTTP ${missing.status}, expected 404`)
else console.log(`  ${'/<unknown>'.padEnd(34)} 404 ok`)

console.log()
for (const w of warnings) console.log(`  WARN  ${w}`)
for (const e of errors) console.log(`  FAIL  ${e}`)
console.log(
  `\n${rows.filter(Boolean).length} routes · ${errors.length} errors · ${warnings.length} warnings`,
)
process.exit(errors.length ? 1 : 0)
