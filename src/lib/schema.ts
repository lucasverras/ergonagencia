// Centralized Schema.org JSON-LD builders for the whole site — one source
// of truth for stable @ids and entity shapes, so every page references the
// same Organization/WebSite instead of each route inventing its own
// disconnected copy. Every value here is either a literal drawn from real,
// visible page content or a stable identifier — nothing here is invented
// (no ratings, prices, addresses, or dates that don't exist in the project).

export const SITE_URL = 'https://www.ergonstudio.com.br'

// Primary contact channel for the whole studio (every "falar sobre um
// projeto" CTA site-wide) — Ergon Fly keeps its own separate, pre-existing
// WhatsApp line (FlyCTA.tsx / the drone ContactPoint below).
export const WHATSAPP_NUMBER = '5511988162883'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Quero%20falar%20sobre%20um%20projeto`

export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

// Real service clusters as they actually exist across the site today —
// mirrors WhatWeBuild.tsx's four cards (Lançar/Operar/Automatizar/Evoluir)
// and the drone vertical (/fly) — not an invented taxonomy. Each now has
// its own real page under /servicos (see src/services/servicesData.ts),
// except drone, which keeps living at its own established /fly route.
export const SERVICE_IDS = {
  automation: `${SITE_URL}/#service-automacao`,
  systems: `${SITE_URL}/#service-sistemas`,
  websites: `${SITE_URL}/#service-websites`,
  digitalProducts: `${SITE_URL}/#service-produtos-digitais`,
  drone: `${SITE_URL}/#service-drone`,
} as const

export type ServiceKey = keyof typeof SERVICE_IDS

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Ergon Studio',
    alternateName: ['Ergon', 'Ergon Product Studio'],
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: `${SITE_URL}/favicon.png`,
      contentUrl: `${SITE_URL}/favicon.png`,
      caption: 'Ergon Studio',
    },
    image: `${SITE_URL}/og/ergon-studio.png`,
    slogan: 'Digital Product Studio',
    // São Paulo is the studio's stated base and the drone vertical's
    // stated coverage; no street address or opening hours are published
    // anywhere on the site, so no PostalAddress / LocalBusiness is
    // claimed here.
    areaServed: [
      { '@type': 'City', name: 'São Paulo' },
      { '@type': 'Country', name: 'Brasil' },
    ],
    description:
      'A Ergon projeta e desenvolve automações, sistemas personalizados, produtos digitais e websites para empresas que precisam transformar processos manuais em ferramentas que funcionam. Também produz captação aérea com drone como serviço complementar.',
    // Two real, currently-visible contact channels — the studio's own
    // (Footer.tsx / FinalCTA.tsx) and the drone vertical's dedicated one
    // (FlyCTA.tsx) — not invented, and each scoped by contactType so they
    // don't read as duplicate/conflicting contact points for one channel.
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'atendimento geral',
        telephone: '+5511988162883',
        email: 'agenciaergon0@gmail.com',
        areaServed: 'BR',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'captação aérea com drone',
        telephone: '+5511967206875',
        email: 'contato@ergonstudio.com.br',
        areaServed: 'BR',
      },
    ],
    knowsAbout: [
      'Automação de processos',
      'Integração de sistemas',
      'Desenvolvimento de software',
      'Sistemas internos e dashboards',
      'Desenvolvimento web',
      'UX/UI',
      'Captação aérea com drone',
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: 'Ergon Studio',
    alternateName: ['Ergon', 'Ergon Product Studio'],
    inLanguage: 'pt-BR',
    publisher: { '@id': ORGANIZATION_ID },
  }
}

export interface ServiceDef {
  key: ServiceKey
  name: string
  description: string
  serviceType: string
  url: string
  areaServed?: string
}

// Grounded in real, existing content: WhatWeBuild.tsx's four product steps
// (Lançar/Operar/Automatizar/Evoluir) collapse into three clusters — sites,
// systems, automation — plus the drone vertical, which is its own route.
// Exported so /servicos (ServicesHub.tsx) can list the drone entry without
// duplicating its copy — the other four have their own richer page data in
// src/services/servicesData.ts instead.
export const SERVICES: ServiceDef[] = [
  {
    key: 'automation',
    name: 'Automação e Integração de Sistemas',
    description:
      'Automação de atendimento, follow-up, qualificação de leads, agenda e cobrança — conectando ferramentas que hoje dependem de trabalho manual.',
    serviceType: 'Automação de processos',
    url: `${SITE_URL}/servicos/automacoes`,
  },
  {
    key: 'systems',
    name: 'Sistemas Internos e Painéis',
    description:
      'Painéis administrativos, mini CRMs, sistemas de reservas e catálogos construídos sobre o processo que já existe na empresa, sem depender de plugins genéricos.',
    serviceType: 'Desenvolvimento de sistemas personalizados',
    url: `${SITE_URL}/servicos/plataformas`,
  },
  {
    key: 'websites',
    name: 'Websites e Experiências Digitais',
    description:
      'Sites institucionais, landing pages e primeiras versões de produto, com a estrutura de conteúdo e SEO definida antes de qualquer tela ser desenhada.',
    serviceType: 'Desenvolvimento web',
    url: `${SITE_URL}/servicos/sites`,
  },
  {
    key: 'digitalProducts',
    name: 'Produtos Digitais',
    description:
      'MVPs, plataformas e ferramentas digitais sob medida — da validação ao lançamento, e a evolução do que já está em produção.',
    serviceType: 'Desenvolvimento de produtos digitais',
    url: `${SITE_URL}/servicos/produtos-digitais`,
  },
  {
    key: 'drone',
    name: 'Captação Aérea e Produção Audiovisual com Drone',
    description:
      'Captação aérea profissional com drone para empresas, imóveis, eventos e turismo, com piloto certificado ANAC.',
    serviceType: 'Captação aérea com drone',
    url: `${SITE_URL}/fly`,
    areaServed: 'São Paulo e todo o Brasil',
  },
]

export function servicesSchema() {
  return SERVICES.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': SERVICE_IDS[s.key],
    name: s.name,
    description: s.description,
    serviceType: s.serviceType,
    url: s.url,
    provider: { '@id': ORGANIZATION_ID },
    ...(s.areaServed ? { areaServed: s.areaServed } : {}),
  }))
}

// SiteNavigationElement — tells Google which pages are the primary
// navigation destinations. This is the strongest structured-data hint
// for controlling which links appear as sitelinks in search results.
export function siteNavigationSchema() {
  const navItems = [
    { name: 'Sites & Experiences', url: `${SITE_URL}/servicos/sites` },
    { name: 'Digital Platforms', url: `${SITE_URL}/servicos/plataformas` },
    { name: 'Intelligent Operations', url: `${SITE_URL}/servicos/automacoes` },
    { name: 'Product Launch', url: `${SITE_URL}/servicos/produtos-digitais` },
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Serviços Ergon',
    itemListElement: navItems.map((item, i) => ({
      '@type': 'SiteNavigationElement',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  }
}

export function offerCatalogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': `${SITE_URL}/#offer-catalog`,
    name: 'Serviços Ergon Studio',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@id': SERVICE_IDS[s.key] },
    })),
  }
}

// Only ever call this with Q&A that's actually visible on the page in the
// same words — never with questions invented to chase a rich result.
export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export interface WebPageDef {
  id: string
  url: string
  name: string
  description: string
  primaryImage?: string
  about?: string[] // array of @id references (Organization and/or Service)
}

export function webPageSchema(page: WebPageDef) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': page.id,
    url: page.url,
    name: page.name,
    description: page.description,
    isPartOf: { '@id': WEBSITE_ID },
    ...(page.primaryImage ? { primaryImageOfPage: page.primaryImage } : {}),
    ...(page.about && page.about.length > 0
      ? { about: page.about.map((id) => ({ '@id': id })) }
      : {}),
  }
}

// One @graph instead of eight sibling <script> blocks: the site-wide
// entities all reference each other by @id, so emitting them as a single
// connected graph is both smaller on the wire and unambiguous for parsers
// about which Organization the Services belong to.
export function globalGraphSchema() {
  const strip = (o: object) => {
    const { '@context': _ctx, ...rest } = o as Record<string, unknown>
    return rest
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      strip(organizationSchema()),
      strip(websiteSchema()),
      ...servicesSchema().map(strip),
      strip(offerCatalogSchema()),
      strip(siteNavigationSchema()),
    ],
  }
}

export interface CollectionPageDef {
  id: string
  url: string
  name: string
  description: string
  /** the things actually listed on the page, in the order they appear */
  items: { name: string; url: string }[]
}

// /servicos and /portfolio are both real listing pages — CollectionPage
// with a mainEntity ItemList describes exactly what a visitor sees, one
// entry per card actually rendered.
export function collectionPageSchema(page: CollectionPageDef) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': page.id,
    url: page.url,
    name: page.name,
    description: page.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: page.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  }
}

export interface CaseWorkDef {
  url: string
  /** the project/client name as shown in the page's own H1 */
  name: string
  description: string
  image?: string
  /** what Ergon actually built, from the case's own visible copy */
  about: string[]
  /** @ids of the Service entities this case demonstrates */
  serviceIds: string[]
}

// A case study is a piece of work Ergon authored about a client project —
// CreativeWork with Ergon as `creator`/`author` and the client as the
// `about` subject. Deliberately NOT Article (these aren't dated editorial
// posts, and no real publish dates exist to claim) and deliberately not
// anything that would read as the client's own site.
export function caseWorkSchema(c: CaseWorkDef) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${c.url}/#case`,
    url: c.url,
    name: `${c.name} — case Ergon Studio`,
    headline: c.name,
    description: c.description,
    inLanguage: 'pt-BR',
    ...(c.image ? { image: c.image } : {}),
    // Ergon made this case study AND did the work it describes; the client
    // is the subject, never the owner of this page.
    author: { '@id': ORGANIZATION_ID },
    creator: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntityOfPage: { '@id': `${c.url}/#webpage` },
    about: [
      { '@type': 'Organization', name: c.name },
      ...c.serviceIds.map((id) => ({ '@id': id })),
    ],
    keywords: c.about,
  }
}

export interface PageServiceDef {
  id: string
  url: string
  name: string
  description: string
  serviceType: string
  /** @id of the site-wide Service entity this page is the detail view of */
  sameAs: string
  /** the deliverables the page itself lists, as an OfferCatalog */
  offerings: string[]
}

// Page-scoped Service for a /servicos/:slug page. Separate from the
// site-wide SERVICES entities (which exist so every page can reference the
// same @ids); this one carries the detail the page itself shows. No
// `offers`/price: nothing on these pages publishes one.
export function serviceSchema(s: PageServiceDef) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': s.id,
    url: s.url,
    name: s.name,
    description: s.description,
    serviceType: s.serviceType,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: [
      { '@type': 'City', name: 'São Paulo' },
      { '@type': 'Country', name: 'Brasil' },
    ],
    isSimilarTo: { '@id': s.sameAs },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: s.name,
      itemListElement: s.offerings.map((title) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: title },
      })),
    },
  }
}
