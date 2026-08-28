import { useEffect } from 'react'

// True during the build-time prerender pass (scripts/prerender.mjs), false
// in the browser. Server-side there is no document.head to mutate, so the
// hooks below hand their tags to this sink instead and the prerenderer
// serialises them straight into each route's static <head>.
const IS_SERVER = typeof document === 'undefined'

export interface HeadSink {
  page: SEOOptions | null
  global: object[]
}

const sink: HeadSink = { page: null, global: [] }

/** prerender-only: called before each renderToString pass */
export function resetHeadSink() {
  sink.page = null
  sink.global = []
}

/** prerender-only: called after each renderToString pass */
export function readHeadSink(): HeadSink {
  return { page: sink.page, global: [...sink.global] }
}

// This is a Vite SPA with no SSR — there's no metadata API / app-router
// head export to rely on, so this hook is the client-side equivalent: it
// mutates document.head on mount and restores/removes what it added on
// unmount, so navigating between routes never leaves one page's tags (or
// JSON-LD) attached to the next. Client-only tags won't be seen by
// crawlers that don't execute JavaScript — a real limitation of this
// architecture, not something this hook can paper over.
export interface SEOOptions {
  title: string
  description: string
  canonical: string
  /** defaults to 'website'; case pages could pass 'article' if that's ever warranted */
  ogType?: string
  ogImage?: string
  jsonLd?: object[]
  /** set on pages that must never be indexed (e.g. the 404 page) */
  noindex?: boolean
}

export const OG_IMAGE = 'https://www.ergonstudio.com.br/og/ergon-studio.png'
export const OG_IMAGE_WIDTH = '1200'
export const OG_IMAGE_HEIGHT = '630'

// Indexable pages get the full preview allowance; noindex pages get a plain
// noindex,nofollow. Emitted for both `robots` and `googlebot` so the two
// never disagree.
export const ROBOTS_INDEX =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
export const ROBOTS_NOINDEX = 'noindex, nofollow'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useSEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = OG_IMAGE,
  jsonLd = [],
  noindex = false,
}: SEOOptions) {
  if (IS_SERVER) {
    sink.page = { title, description, canonical, ogType, ogImage, jsonLd, noindex }
  }

  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const robots = noindex ? ROBOTS_NOINDEX : ROBOTS_INDEX
    setMeta('name', 'description', description)
    setMeta('name', 'robots', robots)
    setMeta('name', 'googlebot', robots)
    setMeta('property', 'og:site_name', 'Ergon Product Studio')
    setMeta('property', 'og:locale', 'pt_BR')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:type', ogType)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    if (ogImage) {
      setMeta('property', 'og:image', ogImage)
      setMeta('property', 'og:image:width', OG_IMAGE_WIDTH)
      setMeta('property', 'og:image:height', OG_IMAGE_HEIGHT)
      setMeta('name', 'twitter:image', ogImage)
    }

    let canonicalEl = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.setAttribute('href', canonical)

    // The prerendered HTML already carries this page's JSON-LD (marked
    // data-seo="page"). Drop those before injecting, or hydration leaves
    // two copies of every node in the document.
    document.head.querySelectorAll('script[data-seo="page"]').forEach((el) => el.remove())

    const scripts = jsonLd.map((data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.seo = 'page'
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
      return script
    })

    return () => {
      document.title = previousTitle
      // reset robots back to the indexable default so leaving a noindex
      // page (e.g. the 404) doesn't leave the next real page non-indexable
      setMeta('name', 'robots', ROBOTS_INDEX)
      setMeta('name', 'googlebot', ROBOTS_INDEX)
      scripts.forEach((s) => s.remove())
    }
  }, [title, description, canonical, ogType, ogImage, jsonLd, noindex])
}

// Organization/WebSite/Service/OfferCatalog describe the site itself, not
// one specific route — they're injected once when the app mounts and never
// removed, so they stay present across every client-side navigation
// instead of being added and torn down per page like useSEO's per-page tags.
export function useGlobalSchema(jsonLd: object[]) {
  if (IS_SERVER) {
    sink.global = jsonLd
  }

  // intentionally mount-only: jsonLd is a fresh array literal at the call
  // site on every render, so including it would re-inject on every render
  // instead of exactly once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // same reason as useSEO above: the prerendered <head> already has the
    // site-wide graph, so replace it rather than append a second copy
    document.head.querySelectorAll('script[data-seo="global"]').forEach((el) => el.remove())

    const scripts = jsonLd.map((data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.seo = 'global'
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
      return script
    })
    // only runs if App itself unmounts (full teardown) — still correct to
    // clean up rather than leak scripts in that case
    return () => scripts.forEach((s) => s.remove())
  }, [])
}
