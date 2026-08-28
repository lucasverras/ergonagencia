import { services } from '@/services/servicesData'
import { cases } from '@/cases/casesData'

/** Every public, indexable route, in one place. Drives the prerenderer,
 * the sitemap and the SEO audit script, so those three can never drift
 * apart from each other or from the real route table in App.tsx. */
export const PUBLIC_ROUTES: string[] = [
  '/',
  '/servicos',
  ...services.map((s) => `/servicos/${s.slug}`),
  '/fly',
  '/portfolio',
  ...cases.map((c) => `/portfolio/${c.slug}`),
]

/** Prerendered but deliberately noindex — served as the 404 body. */
export const NOINDEX_ROUTES: string[] = ['/404']
