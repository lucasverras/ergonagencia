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
  /** Real questions this service gets asked, answered with what the studio
   * can honestly state. Where price or duration genuinely varies, the
   * answer names the factors instead of inventing a range — no figure
   * appears here that isn't already true elsewhere on the site. */
  faq: { question: string; answer: string }[]
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
    metaTitle: 'Criação de Sites Profissionais e Landing Pages | Ergon Studio',
    metaDescription:
      'Sites institucionais, landing pages e produtos web com SEO técnico e UX pensados pra converter, não só pra existir.',
    faq: [
      {
        question: 'Qual a diferença entre um site institucional e uma landing page?',
        answer:
          'Um site institucional apresenta a empresa inteira — quem é, o que faz, para quem, com várias páginas e navegação. Uma landing page existe para uma única ação: um lançamento, uma campanha, um serviço específico. Na prática, a escolha vem do objetivo: se a pessoa precisa entender o negócio antes de decidir, é site; se ela já chegou decidida por um anúncio, é landing page. A Ergon constrói os dois, e às vezes o projeto tem site institucional com landing pages de campanha por cima.',
      },
      {
        question: 'Quanto tempo leva para desenvolver um site?',
        answer:
          'Depende de três coisas: quantas páginas e seções o site tem, se o conteúdo (textos, fotos, catálogo) já existe ou precisa ser produzido, e se há integração com algum sistema — estoque, agendamento, cardápio. Um site de apresentação com conteúdo pronto é bem mais rápido que um site conectado em tempo real a um estoque, como o da Green Bay Car. O prazo é definido depois da etapa de Discover, quando já se sabe o escopo real.',
      },
      {
        question: 'O cliente consegue atualizar o conteúdo depois?',
        answer:
          'Sim, quando isso faz parte do escopo. No Franco Gastrobar, por exemplo, a equipe do restaurante atualiza o cardápio por um painel próprio, sem depender da Ergon. Em sites cujo conteúdo quase não muda, às vezes não compensa construir um painel — e isso é conversado antes, não depois.',
      },
      {
        question: 'O site já vem preparado para aparecer no Google?',
        answer:
          'Sim. A estrutura de conteúdo e o SEO técnico são definidos antes de qualquer tela ser desenhada: hierarquia de títulos, URLs legíveis, metadados por página, dados estruturados, HTML que o buscador lê sem precisar executar a página inteira, e performance. Foi assim no 3WS Moldes, onde um acervo industrial grande precisou virar uma estrutura navegável e indexável.',
      },
    ],
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
    metaTitle: 'Desenvolvimento de Sistemas Sob Medida | Ergon Studio',
    metaDescription:
      'CRM, controle de estoque, orçamentos, painéis administrativos e agendamento — sistemas sob medida, construídos sobre o processo que já existe na sua empresa.',
    faq: [
      {
        question: 'Quanto custa desenvolver um sistema sob medida?',
        answer:
          'Não existe tabela, porque o custo acompanha o escopo: quantos fluxos o sistema cobre, quantos perfis de usuário existem, se precisa integrar com ferramentas que a empresa já usa e se há migração de dados. O caminho é sempre o mesmo — entender o processo, desenhar o escopo e só então orçar em cima de algo concreto. Orçamento feito antes de entender a operação é chute.',
      },
      {
        question: 'Dá para integrar o sistema com as ferramentas que já usamos?',
        answer:
          'Sim, quando a ferramenta oferece API ou algum outro meio de integração. O site da Green Bay Car é conectado em tempo real ao estoque publicado na Webmotors; o Radar Navegando usa Google Places e OpenAI dentro do próprio fluxo de prospecção. A pergunta prática não é se dá para integrar, e sim se aquela ferramenta específica permite — o que se verifica na etapa de Discover.',
      },
      {
        question: 'Por que não usar um CRM pronto do mercado?',
        answer:
          'Muitas vezes vale usar. Um sistema sob medida faz sentido quando o processo da empresa não cabe no que a ferramenta pronta assume — quando a equipe preenche campos com significado diferente do rótulo, mantém uma planilha paralela ou usa metade do produto. Aí a ferramenta genérica vira custo de adaptação permanente, e um sistema construído sobre o processo real sai na frente.',
      },
      {
        question: 'Onde o sistema fica hospedado?',
        answer:
          'Nos projetos publicados aqui, na Vercel — é a infraestrutura que a Ergon usa e mantém. O acesso e a propriedade do que foi construído ficam com o cliente.',
      },
    ],
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
    metaTitle: 'Automação de Processos e Atendimento | Ergon Studio',
    metaDescription:
      'Automação de atendimento, social selling e processos internos com integrações via API. Menos operação manual, mais coisa acontecendo sozinha.',
    faq: [
      {
        question: 'Como funciona uma automação de atendimento?',
        answer:
          'A automação assume a parte repetível da conversa: responder um comentário, iniciar o direct, fazer as perguntas de qualificação, registrar o lead e avisar quem precisa continuar. O que ela não faz é substituir a conversa humana — ela entrega uma pessoa já qualificada para quem vai fechar. É o fluxo que roda no Vamo Nessa SP: comentário, resposta, direct, conversa, lead.',
      },
      {
        question: 'Que tipo de tarefa vale a pena automatizar?',
        answer:
          'A que acontece muitas vezes da mesma maneira e tem regra clara: follow-up que segue sempre o mesmo roteiro, qualificação com as mesmas perguntas, geração de proposta a partir dos mesmos campos, relatório recorrente, notificação de status. Tarefa cujo critério muda a cada caso normalmente não deve ser automatizada — deve ser simplificada antes.',
      },
      {
        question: 'A automação funciona com WhatsApp e Instagram?',
        answer:
          'Sim, esses são os dois canais mais frequentes nos projetos da Ergon, tanto em atendimento quanto em social selling. A automação também liga esses canais ao que vem depois: um CRM, um painel, uma planilha ou o sistema interno da própria empresa.',
      },
      {
        question: 'Precisamos trocar as ferramentas que já usamos?',
        answer:
          'Normalmente não. O ponto da automação é justamente conectar o que já existe via API, para que a informação pare de ser copiada de um lugar para outro à mão. Trocar de ferramenta só entra na conversa se a atual não permitir integração nenhuma.',
      },
    ],
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
    metaTitle: 'Desenvolvimento de Produtos Digitais e Aplicativos | Ergon Studio',
    metaDescription:
      'MVPs, aplicativos e plataformas sob medida, da validação ao lançamento — desenvolvidos pela Ergon Studio, product studio em São Paulo.',
    faq: [
      {
        question: 'O que é um MVP e por que começar por ele?',
        answer:
          'É a menor versão do produto que já resolve o problema de verdade para alguém — não um protótipo de demonstração. Começar por ele encurta o caminho entre a ideia e o uso real, e o uso real é o que mostra o que deve ser construído em seguida. O Radar Navegando nasceu assim: uma plataforma interna resolvendo prospecção antes de virar qualquer coisa maior.',
      },
      {
        question: 'Vocês desenvolvem aplicativos?',
        answer:
          'Sim — aplicativos e plataformas mobile fazem parte desta frente, junto com MVPs, SaaS interno e a evolução de produtos que já estão em produção. A escolha entre app, web app ou plataforma responsiva sai do Discover, a partir de como as pessoas vão realmente usar o produto.',
      },
      {
        question: 'O que acontece depois do lançamento?',
        answer:
          'Evolve é uma etapa do processo, não um extra: o produto continua sendo melhorado com base no uso real. Um produto digital que para de mudar depois do lançamento normalmente para de ser usado logo em seguida.',
      },
      {
        question: 'De quem é a propriedade do que foi construído?',
        answer:
          'Do cliente. O que a Ergon desenvolve pertence a quem contratou — código, dados e acessos.',
      },
    ],
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
