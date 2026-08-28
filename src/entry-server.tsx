import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { resetHeadSink, readHeadSink, type HeadSink } from './lib/seo'

export { PUBLIC_ROUTES, NOINDEX_ROUTES } from './lib/routes'
// re-exported so the sitemap / llms.txt generators read the same editorial
// source of truth the pages render from, instead of a hand-kept copy
export { services, DISCOVER_PROCESS } from './services/servicesData'
export { cases } from './cases/casesData'
export { SERVICES, SITE_URL } from './lib/schema'
export { flyFaq } from './fly/flyServices'

export interface RenderResult {
  html: string
  head: HeadSink
}

/** Build-time only. Renders one route to static HTML and returns the head
 * tags the page's own useSEO/useGlobalSchema calls asked for, so the
 * prerenderer never has to duplicate per-route metadata of its own. */
export function render(url: string): RenderResult {
  resetHeadSink()
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return { html, head: readHeadSink() }
}
