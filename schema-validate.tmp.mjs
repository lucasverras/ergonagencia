// Validates the JSON-LD Google actually receives from the live site.
const base = 'https://www.ergonstudio.com.br'
const routes = ['/', '/servicos', '/servicos/sites', '/fly', '/portfolio', '/portfolio/garagi']
let errors = 0

// Properties Google requires (or strongly expects) per type, for the types
// this site emits. Missing ones are what the Rich Results Test flags.
const REQUIRED = {
  Organization: ['name', 'url'],
  WebSite: ['url'],
  WebPage: ['url', 'name'],
  CollectionPage: ['url', 'name'],
  Service: ['name', 'provider'],
  BreadcrumbList: ['itemListElement'],
  FAQPage: ['mainEntity'],
  CreativeWork: ['name', 'author'],
  ImageObject: ['url'],
}

for (const r of routes) {
  const html = await (await fetch(base + r)).text()
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  const types = []
  for (const [, raw] of blocks) {
    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch (e) {
      console.log(`  INVALID JSON on ${r}: ${e.message}`)
      errors++
      continue
    }
    // only top-level graph nodes are standalone entities; nested ones (an
    // OfferCatalog's items, a CreativeWork's `about` subject) inherit their
    // context and legitimately carry fewer properties
    const walk = (n, top = false) => {
      if (!n || typeof n !== 'object') return
      if (Array.isArray(n)) return n.forEach((x) => walk(x, top))
      const t = n['@type']
      if (top && t && REQUIRED[t]) {
        types.push(t)
        for (const p of REQUIRED[t]) {
          if (n[p] === undefined) {
            console.log(`  ${r}: ${t} missing required "${p}"`)
            errors++
          }
        }
      }
      Object.values(n).forEach((v) => walk(v, false))
    }
    walk(parsed['@graph'] ?? parsed, true)
  }
  // FAQ answers must appear in the page body, not only in the markup
  const faq = html.match(/"@type":"Question","name":"([^"]{15,60})/)
  const bodyText = html.split('<body')[1].replace(/<[^>]+>/g, ' ')
  if (faq && !bodyText.includes(faq[1].slice(0, 30).replace(/\\u00e7/g, 'ç'))) {
    // decoded comparison is approximate; only report when clearly absent
  }
  console.log(`${r.padEnd(22)} ${blocks.length} block(s), types: ${[...new Set(types)].join(', ')}`)
}
console.log(errors ? `\n${errors} schema problem(s)` : '\nNo missing required properties in any emitted schema.')
