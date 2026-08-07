import { useEffect } from 'react'

interface FlyHeadOptions {
  title: string
  description: string
  canonical: string
  jsonLd: object[]
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

// This is a Vite SPA with no SSR, so there's no metadata API / app router
// head export to rely on — this hook is the client-side equivalent: it
// mutates document.head on mount and cleans up on unmount so navigating
// back to "/" doesn't leave /fly's tags behind. Client-only tags won't be
// seen by crawlers that don't execute JS, same limitation the old
// Lovable-built source site had (see docs/fly/AUDITORIA.md).
export function useFlyHead({ title, description, canonical, jsonLd }: FlyHeadOptions) {
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

    const scripts = jsonLd.map((data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
      return script
    })

    return () => {
      document.title = previousTitle
      scripts.forEach((s) => s.remove())
    }
  }, [title, description, canonical, jsonLd])
}
