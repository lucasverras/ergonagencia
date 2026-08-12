import { useEffect } from 'react'

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
  ogImage,
  jsonLd = [],
  noindex = false,
}: SEOOptions) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:type', ogType)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    if (ogImage) {
      setMeta('property', 'og:image', ogImage)
      setMeta('name', 'twitter:image', ogImage)
    }

    let canonicalEl = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.setAttribute('href', canonical)

    const scripts = jsonLd.map((data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
      return script
    })

    return () => {
      document.title = previousTitle
      // reset robots back to the indexable default so leaving a noindex
      // page (e.g. the 404) doesn't leave the next real page non-indexable
      setMeta('name', 'robots', 'index, follow')
      scripts.forEach((s) => s.remove())
    }
  }, [title, description, canonical, ogType, ogImage, jsonLd, noindex])
}

// Organization/WebSite/Service/OfferCatalog describe the site itself, not
// one specific route — they're injected once when the app mounts and never
// removed, so they stay present across every client-side navigation
// instead of being added and torn down per page like useSEO's per-page tags.
export function useGlobalSchema(jsonLd: object[]) {
  // intentionally mount-only: jsonLd is a fresh array literal at the call
  // site on every render, so including it would re-inject on every render
  // instead of exactly once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
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
