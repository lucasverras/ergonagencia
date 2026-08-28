// Build-time prerenderer.
//
// This is a Vite SPA: without this step Vercel serves the same empty
// index.html for every URL, so every route shares one title, has no H1 in
// the delivered HTML and no JSON-LD until JavaScript runs. This script
// renders each public route with react-dom/server and writes a real static
// HTML file per URL. The client then hydrates that markup (see main.tsx),
// so the design system, animations and cursor behave exactly as before.
//
// Head tags are NOT duplicated here — each page's own useSEO() call is what
// runs during renderToString, and the head sink in lib/seo.ts hands the
// result back so there is exactly one source of truth per route.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const { render, PUBLIC_ROUTES, NOINDEX_ROUTES } = await import(
  join(dist, 'server', 'entry-server.js')
)

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// </script> inside JSON-LD would close the tag early; escaping the slash is
// the standard, JSON-valid way out.
// data-seo marks these so the client hooks can replace them on hydration
// instead of appending a second copy of every node (see lib/seo.ts).
const jsonLd = (data, scope) =>
  `<script type="application/ld+json" data-seo="${scope}">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

const ROBOTS_INDEX =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
const ROBOTS_NOINDEX = 'noindex, nofollow'
const OG_IMAGE = 'https://www.ergonstudio.com.br/og/ergon-studio.png'

function buildHead(head, url) {
  const p = head.page
  if (!p) throw new Error(`route ${url} rendered without calling useSEO()`)
  const robots = p.noindex ? ROBOTS_NOINDEX : ROBOTS_INDEX
  const image = p.ogImage || OG_IMAGE
  const tags = [
    `<title>${esc(p.title)}</title>`,
    `<meta name="description" content="${esc(p.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta name="googlebot" content="${robots}" />`,
    `<link rel="canonical" href="${esc(p.canonical)}" />`,
    `<meta property="og:site_name" content="Ergon Studio" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:type" content="${esc(p.ogType || 'website')}" />`,
    `<meta property="og:title" content="${esc(p.title)}" />`,
    `<meta property="og:description" content="${esc(p.description)}" />`,
    `<meta property="og:url" content="${esc(p.canonical)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(p.title)}" />`,
    `<meta name="twitter:description" content="${esc(p.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  ]
  // page schema first, then the site-wide graph — order is cosmetic, but
  // stable output makes the diffs between builds readable.
  for (const d of p.jsonLd || []) tags.push(jsonLd(d, 'page'))
  for (const d of head.global || []) tags.push(jsonLd(d, 'global'))
  return tags.join('\n    ')
}

// The template marks its fallback head between SEO-FALLBACK:START/END.
// Replacing exactly that block (rather than pattern-matching individual
// tags) is what keeps the prerenderer from ever removing something it
// wasn't meant to touch — the viewport meta and the font preload live in
// the same <head> and must survive untouched.
const FALLBACK = /[ \t]*<!-- SEO-FALLBACK:START[\s\S]*?SEO-FALLBACK:END -->/
if (!FALLBACK.test(template)) {
  console.error('index.html is missing its SEO-FALLBACK:START/END markers')
  process.exit(1)
}

const routes = [...PUBLIC_ROUTES, ...NOINDEX_ROUTES]
const failures = []

for (const url of routes) {
  let result
  try {
    result = render(url)
  } catch (err) {
    failures.push(`${url}: ${err.message}`)
    continue
  }
  const html = template
    .replace(FALLBACK, `    ${buildHead(result.head, url)}`)
    .replace('<div id="root"></div>', `<div id="root">${result.html}</div>`)

  const file =
    url === '/' ? join(dist, 'index.html') : join(dist, url, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
  console.log(`  prerendered ${url}`)
}

// /404 also gets written flat, because Vercel's error routing points at a
// single file rather than a directory index.
const notFound = join(dist, '404', 'index.html')
writeFileSync(join(dist, '404.html'), readFileSync(notFound, 'utf8'))

if (failures.length) {
  console.error('\nPrerender failed:\n' + failures.map((f) => '  ' + f).join('\n'))
  process.exit(1)
}
console.log(`\nPrerendered ${routes.length} routes.`)
