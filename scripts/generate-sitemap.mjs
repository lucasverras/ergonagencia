// Generates public/sitemap.xml from the same route manifest the
// prerenderer uses (src/lib/routes.ts), so the sitemap can't list a URL
// that isn't built or miss one that is.
//
// lastmod is the real git commit date of the files that produce each
// route — not the build timestamp. Stamping "today" on every URL at every
// deploy is noise Google learns to ignore, so a route only gets a date
// when its own source actually changed.

import { execFileSync } from 'node:child_process'
import { existsSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const { PUBLIC_ROUTES } = await import(join(dist, 'server', 'entry-server.js'))

// Which sources actually determine each route's content.
const SHARED = ['src/App.tsx', 'src/components', 'src/lib', 'src/index.css']
function sourcesFor(route) {
  if (route === '/') return ['src/pages/Home.tsx', ...SHARED]
  if (route === '/fly') return ['src/fly', 'src/components/fly', ...SHARED]
  if (route === '/servicos') return ['src/pages/ServicesHub.tsx', 'src/services/servicesData.ts', ...SHARED]
  if (route.startsWith('/servicos/'))
    return ['src/services/servicesData.ts', 'src/pages/ServiceDetail.tsx', 'src/components/service', ...SHARED]
  if (route === '/portfolio') return ['src/pages/Portfolio.tsx', 'src/cases/casesData.ts', ...SHARED]
  if (route.startsWith('/portfolio/'))
    return ['src/cases/casesData.ts', 'src/pages/CaseStudy.tsx', 'src/components/case', ...SHARED]
  return SHARED
}

function lastCommitDate(paths) {
  const existing = paths.filter((p) => existsSync(join(root, p)))
  if (!existing.length) return null
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...existing], {
      cwd: root,
      encoding: 'utf8',
    }).trim()
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null
  } catch {
    return null
  }
}

const SITE = 'https://www.ergonstudio.com.br'
const urls = PUBLIC_ROUTES.map((route) => {
  const loc = route === '/' ? `${SITE}/` : `${SITE}${route}`
  const lastmod = lastCommitDate(sourcesFor(route))
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
