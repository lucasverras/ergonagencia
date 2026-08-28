// Real last-changed dates for each route, resolved from git.
//
// Vercel builds from a source snapshot with no .git directory, so the build
// itself cannot ask git anything. The dates are therefore resolved on a
// developer machine and committed to content-dates.json; the build reads
// that file. This also makes the sitemap deterministic — rebuilding without
// changing content doesn't churn every <lastmod>.
//
//   node scripts/content-dates.mjs   # refresh the committed file

import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const DATES_FILE = join(root, 'content-dates.json')

const SHARED = ['src/App.tsx', 'src/components', 'src/lib', 'src/index.css']

export function sourcesFor(route) {
  if (route === '/') return ['src/pages/Home.tsx', ...SHARED]
  if (route === '/fly') return ['src/fly', 'src/components/fly', ...SHARED]
  if (route === '/servicos')
    return ['src/pages/ServicesHub.tsx', 'src/services/servicesData.ts', ...SHARED]
  if (route.startsWith('/servicos/'))
    return ['src/services/servicesData.ts', 'src/pages/ServiceDetail.tsx', 'src/components/service', ...SHARED]
  if (route === '/portfolio')
    return ['src/pages/Portfolio.tsx', 'src/cases/casesData.ts', ...SHARED]
  if (route.startsWith('/portfolio/'))
    return ['src/cases/casesData.ts', 'src/pages/CaseStudy.tsx', 'src/components/case', ...SHARED]
  return SHARED
}

export function gitAvailable() {
  try {
    execFileSync('git', ['rev-parse', '--git-dir'], { cwd: root, stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

export function lastCommitDate(paths) {
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

/** Reads the committed dates. Returns {} if the file isn't there yet. */
export function readDates() {
  if (!existsSync(DATES_FILE)) return { routes: {}, site: null }
  try {
    return JSON.parse(readFileSync(DATES_FILE, 'utf8'))
  } catch {
    return { routes: {}, site: null }
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  if (!gitAvailable()) {
    console.log('content-dates: no git here, leaving the committed file alone')
    process.exit(0)
  }
  const { PUBLIC_ROUTES } = await import(join(root, 'dist', 'server', 'entry-server.js'))
  const routes = {}
  for (const r of PUBLIC_ROUTES) {
    const d = lastCommitDate(sourcesFor(r))
    if (d) routes[r] = d
  }
  const site = lastCommitDate(['src', 'public', 'index.html'])
  writeFileSync(DATES_FILE, JSON.stringify({ site, routes }, null, 2) + '\n')
  console.log(`content-dates.json — ${Object.keys(routes).length} routes, site ${site}`)
}
