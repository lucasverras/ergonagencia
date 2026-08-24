import type { ServiceKey } from '@/lib/schema'

// Editorial source of truth for /servicos and /servicos/:slug.
//
// Four categories, not nine or thirty: sites, plataformas (CRM/estoque/
// orçamento/agendamento/painéis — all the same underlying capability),
// automação (process + social selling + integrations), and produtos
// digitais (MVP/SaaS framing). Every deliverable listed under
// whatWeCreate is real — grounded in WhatWeBuild.tsx's four product steps
// and casesData.ts's actual project tags — never a name invented to pad
// a list. Drone/audiovisual keeps living at its own established /fly
// route rather than being duplicated here.
//
// English category labels (Sites & Experiences, Digital Platforms,
// Intelligent Operations, Product Launch) are a deliberate brand choice —
// the studio positioning, not a translation exercise — while H1s, meta,
// and body copy stay in Portuguese for comprehension/SEO.
export interface ProcessStepDef {
  n: string
  title: string
  tag: string
  desc: string
}

export interface WhatWeCreateItem {
  title: string
  desc?: string
}

export type VisualExample =
  | { kind: 'flow'; steps: string[] }
  | { kind: 'case'; caseSlug: string; caption: string }

export interface ServiceStudy {
  slug: string
  serviceKey: ServiceKey
  categoryLabel: string
  eyebrow: string
  name: string
  heroBlurb: string
  /** one-line summary + short concrete nouns, for the Home services card —
   * distinct from heroBlurb/whatWeCreate, which are written for the fuller
   * /servicos/:slug page */
  homeDescription: string
  homeExamples: string[]
  problemHeadline: string
  problemBody: string
  whatWeCreate: WhatWeCreateItem[]
  visualExample: VisualExample
  relatedCaseSlugs: string[]
  finalCtaHeadline: string
  metaTitle: string
  metaDescription: string
}

// One process, reused as-is across every service page — Discover → Design
// → Build → Evolve is genuinely how the studio works regardless of what's
// being built, so repeating it isn't duplicate content, it's the same
// real fact stated on each relevant page.
export const DISCOVER_PROCESS: ProcessStepDef[] = [
  { n: '01', title: 'Discover', tag: 'entender', desc: 'Entendemos o problema, o processo e o negócio antes de propor qualquer resposta.' },
  { n: '02', title: 'Design', tag: 'desenhar', desc: 'Desenhamos a solução — fluxo, telas e regras — antes de escrever a primeira linha de código.' },
  { n: '03', title: 'Build', tag: 'construir', desc: 'Colocamos para funcionar: desenvolvimento, integrações e publicação.' },
  { n: '04', title: 'Evolve', tag: 'evoluir', desc: 'Continuamos melhorando com o uso real, não paramos no lançamento.' },
]

export const services: ServiceStudy[] = [
  {
    slug: 'sites',
    serviceKey: 'websites',
    categoryLabel: 'Sites & Experiences',
    eyebrow: 'Serviço / Ergon',
    name: 'Sites e experiências digitais',
    heroBlurb:
      'Não fazemos apenas uma página bonita. Criamos uma experiência digital que ajuda a empresa a ser entendida, percebida e escolhida.',
    homeDescription: 'Sites e experiências digitais para apresentar melhor uma empresa, produto ou serviço.',
    homeExamples: ['Website', 'Landing Page', 'Catálogo', 'Site B2B', 'Restaurante', 'Lançamento'],
    problemHeadline: 'Um site bonito que não converte é só uma imagem cara.',
    problemBody: 'Cada página existe pra fazer alguém agir — entender, confiar e entrar em contato.',
    whatWeCreate: [
      { title: 'Sites institucionais' },
      { title: 'Landing pages e páginas de lançamento' },
      { title: 'Portfólios e catálogos digitais' },
      { title: 'Páginas comerciais e de eventos' },
      { title: 'Cardápios digitais' },
      { title: 'SEO técnico e performance' },
    ],
    visualExample: { kind: 'case', caseSlug: '3ws-moldes', caption: 'Site da 3WS Moldes e Equipamentos, no ar.' },
    relatedCaseSlugs: [
      'green-bay-car',
      'green-bay-car-estetica',
      'ergon-fly',
      'garagi',
      'navegando-mkt',
      'franco-gastrobar',
      '3ws-moldes',
    ],
    finalCtaHeadline: 'Tem algo na sua operação que poderia funcionar melhor?',
    metaTitle: 'Criação de Sites e Experiências Digitais | Ergon',
    metaDescription:
      'Sites institucionais, landing pages e produtos web com SEO técnico e UX pensados pra converter, não só pra existir.',
  },
  {
    slug: 'plataformas',
    serviceKey: 'systems',
    categoryLabel: 'Digital Platforms',
    eyebrow: 'Serviço / Ergon',
    name: 'Plataformas e sistemas sob medida',
    heroBlurb:
      'Quando planilhas, WhatsApp e ferramentas diferentes começam a controlar a operação, provavelmente existe espaço para uma plataforma própria.',
    homeDescription: 'Sistemas e ferramentas próprias para organizar operações específicas.',
    homeExamples: ['CRM', 'Dashboard', 'Estoque', 'Orçamentos', 'Agendamento', 'Portal'],
    problemHeadline: 'Se sua empresa depende de cinco planilhas e três grupos de WhatsApp para funcionar,',
    problemBody: 'provavelmente já existe um sistema esperando para ser criado.',
    whatWeCreate: [
      { title: 'CRM', desc: 'Organize contatos, oportunidades, histórico e etapas comerciais.' },
      { title: 'Controle de estoque', desc: 'Centralize produtos, movimentações e informações em um único lugar.' },
      { title: 'Orçamentos', desc: 'Crie, organize, acompanhe e envie propostas através de um sistema próprio.' },
      { title: 'Painel de gestão', desc: 'Transforme informações espalhadas em uma visão única da operação.' },
      { title: 'Agendamento', desc: 'Disponibilidade, reservas, clientes e gestão em um mesmo fluxo.' },
      { title: 'Área do cliente', desc: 'Um lugar próprio pra quem já compra acompanhar o que importa.' },
    ],
    visualExample: { kind: 'case', caseSlug: 'vamo-nessa-sp', caption: 'Painel Vamo Nessa SP, criado pela Ergon.' },
    relatedCaseSlugs: ['garagi', 'vamo-nessa-sp', 'radar-navegando'],
    finalCtaHeadline: 'Sua operação ainda roda em planilha e grupo de WhatsApp?',
    metaTitle: 'Plataformas e Sistemas Internos | Ergon',
    metaDescription:
      'CRM, controle de estoque, orçamentos, painéis e agendamento — plataformas sob medida, construídas sobre o processo que já existe na sua empresa.',
  },
  {
    slug: 'automacoes',
    serviceKey: 'automation',
    categoryLabel: 'Intelligent Operations',
    eyebrow: 'Serviço / Ergon',
    name: 'Automação e operações inteligentes',
    heroBlurb:
      'Se uma tarefa acontece várias vezes da mesma maneira, provavelmente não deveria continuar sendo feita manualmente.',
    homeDescription: 'Automações e integrações para reduzir tarefas manuais e conectar operações.',
    homeExamples: ['Social Selling', 'WhatsApp', 'Direct', 'Integrações', 'IA', 'n8n'],
    problemHeadline: 'Você não precisa de mais uma ferramenta.',
    problemBody: 'Precisa parar de repetir tarefas que um sistema já poderia fazer sozinho.',
    whatWeCreate: [
      { title: 'Social selling e Direct automático' },
      { title: 'Automação de atendimento (WhatsApp e Instagram)' },
      { title: 'Qualificação de leads' },
      { title: 'Integrações entre sistemas via API' },
      { title: 'Geração automática de propostas' },
      { title: 'Relatórios e notificações automáticas' },
    ],
    visualExample: { kind: 'flow', steps: ['Comentário', 'Resposta', 'Direct', 'Conversa', 'Lead'] },
    relatedCaseSlugs: ['radar-navegando', 'vamo-nessa-sp'],
    finalCtaHeadline: 'Tem uma operação que ainda depende demais de trabalho manual?',
    metaTitle: 'Automação para Empresas | Ergon',
    metaDescription:
      'Automação de atendimento, social selling e processos internos com integrações via API. Menos operação manual, mais coisa acontecendo sozinha.',
  },
  {
    slug: 'produtos-digitais',
    serviceKey: 'digitalProducts',
    categoryLabel: 'Product Launch',
    eyebrow: 'Serviço / Ergon',
    name: 'Produtos digitais, do conceito ao lançamento',
    heroBlurb:
      'Não construímos tecnologia por construir. Pensamos, desenhamos e colocamos produtos digitais pra funcionar — da ideia até uma versão que alguém realmente consegue usar.',
    homeDescription: 'Da ideia até uma primeira versão funcional de um novo produto digital.',
    homeExamples: ['MVP', 'App', 'SaaS', 'Plataforma', 'Portal', 'Produto Digital'],
    problemHeadline: 'Software só faz sentido quando começa a economizar tempo.',
    problemBody: 'Criamos ferramentas que entram na operação, não apresentações que ficam no Drive.',
    whatWeCreate: [
      { title: 'MVPs validados' },
      { title: 'Aplicativos e plataformas mobile' },
      { title: 'SaaS interno' },
      { title: 'Novos canais de atendimento' },
      { title: 'Evolução de produtos existentes' },
    ],
    visualExample: { kind: 'case', caseSlug: 'vamo-nessa-sp', caption: 'Vamo Nessa SP — produto interno criado do zero pela Ergon.' },
    relatedCaseSlugs: ['radar-navegando', 'vamo-nessa-sp'],
    finalCtaHeadline: 'Tem uma ideia que já devia estar em produção?',
    metaTitle: 'Desenvolvimento de Produtos Digitais | Ergon',
    metaDescription:
      'MVPs, plataformas e ferramentas sob medida — da validação ao lançamento. Ergon, product studio.',
  },
]

export function getServiceBySlug(slug: string): ServiceStudy | undefined {
  return services.find((s) => s.slug === slug)
}

// reverse lookup used by CaseStudy.tsx's "Serviços utilizados" section —
// keeps the case↔service relationship defined once, here, instead of
// duplicated in both directions
export function servicesForCase(caseSlug: string): ServiceStudy[] {
  return services.filter((s) => s.relatedCaseSlugs.includes(caseSlug))
}
