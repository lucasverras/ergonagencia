import { useEffect } from 'react'

// Same client-side head mechanism as src/fly/useFlyHead.ts, generalized for
// any of the 9 case-study routes — this is a Vite SPA with no SSR, so
// mutating document.head on mount/cleanup is the client-side equivalent of a
// per-route metadata export.
interface CaseHeadOptions {
  title: string
  description: string
  canonical: string
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

export function useCaseHead({ title, description, canonical }: CaseHeadOptions) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:type', 'website')

    let canonicalEl = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.setAttribute('href', canonical)

    return () => {
      document.title = previousTitle
    }
  }, [title, description, canonical])
}
