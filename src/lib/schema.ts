// Centralized Schema.org JSON-LD builders for the whole site — one source
// of truth for stable @ids and entity shapes, so every page references the
// same Organization/WebSite instead of each route inventing its own
// disconnected copy. Every value here is either a literal drawn from real,
// visible page content or a stable identifier — nothing here is invented
// (no ratings, prices, addresses, or dates that don't exist in the project).

export const SITE_URL = 'https://www.ergonagencia.com.br'

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
    name: 'Ergon Digital Product Studio',
    alternateName: ['Ergon', 'Ergon Agência'],
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon.png`,
    image: `${SITE_URL}/favicon.png`,
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
        email: 'agenciaergon0@gmail.com',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'captação aérea com drone',
        telephone: '+5511967206875',
        email: 'contato@ergonagencia.com.br',
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
    name: 'Ergon Digital Product Studio',
    alternateName: ['Ergon', 'Ergon Agência'],
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

export function offerCatalogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': `${SITE_URL}/#offer-catalog`,
    name: 'Serviços Ergon Digital Product Studio',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@id': SERVICE_IDS[s.key] },
    })),
  }
}

// Maps a case study's own existing tags (casesData.ts) to the Service(s) it
// demonstrates — the graph connection section 10 of the brief asks for,
// built entirely from tags that already exist rather than any new taxonomy.
const TAG_TO_SERVICE: Record<string, ServiceKey> = {
  'Website Institucional': 'websites',
  'Digital Menu': 'websites',
  'Portfolio Website': 'websites',
  'Internal Tool': 'systems',
  CRM: 'systems',
  Ticketing: 'systems',
  'Sales Intelligence': 'systems',
  Automation: 'automation',
  Audiovisual: 'drone',
}

export function serviceIdsForTags(tags: string[]): string[] {
  const keys = new Set<ServiceKey>()
  for (const tag of tags) {
    const key = TAG_TO_SERVICE[tag]
    if (key) keys.add(key)
  }
  return [...keys].map((k) => SERVICE_IDS[k])
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
