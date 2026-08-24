// Case-study content — compact "case study + product showcase" format.
// Every fact here (URLs, stack, deliverables) is grounded in the real
// project: verified live sites, this repo's own /fly route, the actual
// Green Bay Car codebase, or client-provided screenshots. Where evidence
// was thin (e.g. no confirmed framework), the tecnologias list stays
// short rather than guessing.

export type CaseMediaAsset = {
  kind: 'real' | 'placeholder'
  src?: string
  alt: string
  note?: string
}

export type CaseBuilt =
  | { kind: 'single'; text: string }
  | { kind: 'dual'; intro?: string; website: string; internal: string }

/** only set when there's a real, defensible number or outcome behind it —
 * never populated just to fill the section */
export type CaseResult = { metric: string; desc: string }

export type CaseStudy = {
  slug: string
  name: string
  /** 2-3 line hero blurb — what Ergon built, not the client's life story */
  headline: string
  servicos: string[]
  tecnologias: string[]
  entrega: string
  /** omit both when there's no public destination (internal-only tools) */
  ctaLabel?: string
  ctaUrl?: string
  result?: CaseResult
  challenge: string
  built: CaseBuilt
  deliverables: string[]
  heroMedia: CaseMediaAsset
  gallery: CaseMediaAsset[]
}

export const cases: CaseStudy[] = [
  {
    slug: 'vamo-nessa-sp',
    name: 'Vamo Nessa SP',
    headline:
      'Painel próprio que transforma conteúdo, audiência e comentários em uma operação com dados — pra um creator não precisar abrir cinco telas pra entender o que está acontecendo com o próprio conteúdo.',
    servicos: ['Painel / Dashboard', 'Automação de redes sociais', 'Social selling', 'Integração com IA'],
    tecnologias: ['Vercel', 'Integração com Instagram/Meta', 'IA para respostas assistidas'],
    entrega: 'Painel próprio, de uso privado do creator — sem URL pública.',
    result: { metric: '+40%', desc: 'de seguidores em apenas 30 dias' },
    challenge:
      'Acompanhar o desempenho do conteúdo, os comentários e as oportunidades de contato significava abrir várias telas diferentes — sem um lugar único pra entender o que estava funcionando e o que precisava de resposta.',
    built: {
      kind: 'single',
      text: 'Criamos um painel próprio que centraliza desempenho por publicação e por canal, crescimento da conta e comentários com potencial comercial, além de uma camada de automação assistida por IA — respostas sugeridas que podem ser revisadas, editadas ou aprovadas antes do envio.',
    },
    deliverables: [
      'Painel de desempenho por publicação e por canal',
      'Acompanhamento de crescimento da conta',
      'Fila de comentários com potencial comercial (aquisição)',
      'Campanhas de contato com fila, envios e erros',
      'Aprovação assistida por IA para respostas',
    ],
    heroMedia: { kind: 'real', src: '/portfolio/vamo-nessa-sp/hero.png', alt: 'Visão geral do painel Vamo Nessa SP' },
    gallery: [
      { kind: 'real', src: '/portfolio/vamo-nessa-sp/conteudos.png', alt: 'Desempenho de conteúdos por canal no painel Vamo Nessa SP' },
      { kind: 'real', src: '/portfolio/vamo-nessa-sp/campanhas.png', alt: 'Campanhas de contato e envio no painel Vamo Nessa SP' },
      { kind: 'real', src: '/portfolio/vamo-nessa-sp/aprovacoes-ia.png', alt: 'Aprovação de respostas assistidas por IA no painel Vamo Nessa SP' },
    ],
  },

  {
    slug: 'garagi',
    name: 'Garagi — CRM + Website',
    headline:
      'Website institucional e sistema interno de orçamentos — duas ferramentas pro mesmo negócio: uma pra quem chega de fora, outra pra quem toca a operação por dentro.',
    servicos: ['Website institucional', 'Sistema interno', 'CRM', 'UX/UI'],
    tecnologias: ['Lovable'],
    entrega: 'Website institucional publicado + sistema interno de orçamentos e CRM comercial (uso interno, sem URL pública).',
    result: { metric: 'Retenção ↑ Conversão ↑', desc: 'mais retenção de clientes e mais conversões na operação' },
    ctaLabel: 'CONHECER A GARAGI ↗',
    ctaUrl: 'https://garagifunilaria.lovable.app/',
    challenge:
      'Por fora, a Garagi precisava de uma presença digital que transmitisse melhor a qualidade do trabalho da oficina. Por dentro, cada orçamento era montado de um jeito diferente, sem um lugar central pra acompanhar clientes, pendências e retornos.',
    built: {
      kind: 'dual',
      intro: 'Por fora, uma nova presença digital. Por dentro, uma ferramenta pra fazer a operação funcionar melhor.',
      website: 'Site institucional mais atual, organizando os principais serviços da oficina e a identidade da marca.',
      internal: 'Sistema pra criar orçamentos padronizados e acompanhar oportunidades, tarefas e follow-ups em um único lugar.',
    },
    deliverables: [
      'Website institucional',
      'Sistema interno de orçamentos',
      'CRM para oportunidades e follow-ups',
      'Painel de tarefas da semana',
      'UX/UI para as duas experiências',
    ],
    heroMedia: { kind: 'real', src: '/portfolio/garagi/desktop-hero.png', alt: 'Home do site institucional da Garagi' },
    gallery: [
      { kind: 'real', src: '/portfolio/garagi/desktop-detail.png', alt: 'Página de serviços do site institucional da Garagi' },
      { kind: 'real', src: '/portfolio/garagi/mobile-hero.png', alt: 'Home da Garagi em um dispositivo móvel' },
      {
        kind: 'placeholder',
        alt: 'Sistema interno de orçamentos da Garagi (uso interno, sem URL pública)',
        note: 'Sistema interno de orçamentos/CRM sem URL pública — placeholder no lugar de uma captura real.',
      },
    ],
  },

  {
    slug: 'green-bay-car-estetica',
    name: 'Green Bay Car Estética',
    headline:
      'Site próprio para a vertente de estética automotiva do grupo Green Bay Car — catálogo de serviços, comparação de antes e depois e agendamento direto por WhatsApp.',
    servicos: ['Website institucional', 'Catálogo de serviços', 'UX/UI'],
    tecnologias: ['Next.js', 'Vercel'],
    entrega: 'Site institucional publicado, com catálogo de serviços e agendamento via WhatsApp.',
    ctaLabel: 'CONHECER A GBC ESTÉTICA ↗',
    ctaUrl: 'https://gbc-estetica.vercel.app/',
    challenge:
      'A Green Bay Car precisava de uma presença digital própria para a vertente de estética automotiva — separada do site principal da loja, mas com o mesmo padrão premium, capaz de apresentar um catálogo técnico de serviços e gerar confiança para trabalhos de maior valor, como correção de pintura.',
    built: {
      kind: 'single',
      text: 'Desenvolvemos um site dedicado com um catálogo completo de serviços organizado em categorias — lavagem e cuidado externo, cuidado interno, correção e polimento, e restauração —, uma seção de comparação antes e depois da pintura, e agendamento direto via WhatsApp.',
    },
    deliverables: [
      'Site institucional dedicado à vertente de estética',
      'Catálogo de serviços organizado por categoria',
      'Seção de comparação antes e depois',
      'Agendamento direto via WhatsApp',
      'Localização e horário de atendimento',
    ],
    heroMedia: { kind: 'real', src: '/portfolio/green-bay-car-estetica/hero.jpg', alt: 'Estúdio da GBC Estética Automotiva' },
    gallery: [
      { kind: 'real', src: '/portfolio/green-bay-car-estetica/servico.jpg', alt: 'Serviço de lavagem técnica na GBC Estética' },
      { kind: 'real', src: '/portfolio/green-bay-car-estetica/resultado.jpg', alt: 'Resultado de polimento na GBC Estética' },
      { kind: 'real', src: '/portfolio/green-bay-car-estetica/showroom.jpg', alt: 'Estúdio de estética automotiva da GBC' },
      { kind: 'real', src: '/portfolio/green-bay-car-estetica/detalhe.jpg', alt: 'Detalhe de acabamento na GBC Estética' },
    ],
  },

  {
    slug: 'green-bay-car',
    name: 'Green Bay Car',
    headline:
      'Site institucional conectado em tempo real ao estoque da loja — cada veículo publicado na Webmotors ganha automaticamente sua própria página, indexável pelo Google.',
    servicos: ['Website institucional', 'Integração de estoque', 'SEO técnico'],
    tecnologias: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Webmotors API'],
    entrega: 'Site institucional publicado, com sincronização automática do estoque via API da Webmotors.',
    result: { metric: '+300%', desc: 'de visitas ao site' },
    ctaLabel: 'CONHECER A GREEN BAY CAR ↗',
    ctaUrl: 'https://www.gbccar.com.br/',
    challenge:
      'O site anterior praticamente não gerava tráfego orgânico: um CAPTCHA dificultava o acesso de crawlers como o Google, e o estoque ficava concentrado em uma página genérica, sem cada veículo ter sua própria URL indexável.',
    built: {
      kind: 'single',
      text: 'Conectamos o site diretamente à API da Webmotors: veículo publicado na Webmotors entra automaticamente no site, veículo removido sai — sem precisar atualizar dois lugares. Cada carro passou a ter sua própria página, com URL e SEO específicos pro modelo.',
    },
    deliverables: [
      'Site institucional responsivo',
      'Integração automática com o estoque da Webmotors',
      'Página própria e indexável para cada veículo',
      'Arquitetura de URLs por veículo (antes: /estoque — agora: /nome-do-carro)',
      'SEO técnico',
    ],
    heroMedia: { kind: 'real', src: '/portfolio/green-bay-car/desktop-hero.png', alt: 'Home do site da Green Bay Car' },
    gallery: [
      { kind: 'real', src: '/portfolio/green-bay-car/desktop-detail.png', alt: 'Página de detalhe de um veículo da Green Bay Car' },
      { kind: 'real', src: '/portfolio/green-bay-car/mobile-hero.png', alt: 'Home da Green Bay Car em um dispositivo móvel' },
    ],
  },

  {
    slug: '3ws-moldes',
    name: '3WS Moldes e Equipamentos',
    headline:
      'Site que transforma um acervo industrial de mais de 1,5 milhão de kg em ferramentas em uma experiência digital técnica, organizada e indexável.',
    servicos: ['Website institucional', 'Arquitetura de informação', 'SEO técnico', 'UX/UI'],
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    entrega: 'Site institucional e comercial com catálogo técnico organizado, publicado na Vercel.',
    ctaLabel: 'CONHECER A 3WS ↗',
    ctaUrl: 'https://neto3ws.vercel.app/',
    challenge:
      'O site anterior era institucional demais: dedicava muito espaço à história da empresa e pouco às oportunidades comerciais, sem destacar o estoque de mais de 1,5 milhão de kg em ferramentas nem a compra e venda por quilo.',
    built: {
      kind: 'single',
      text: 'Reorganizamos a arquitetura colocando serviços e oportunidades comerciais antes do institucional. Categorias como moldes automotivos, linha branca, porta-moldes e bases para estampos ganharam espaço próprio, com uma nova direção visual técnica e premium.',
    },
    deliverables: [
      'Nova arquitetura de informação priorizando serviços',
      'Catálogo de categorias organizado por tipo de molde/equipamento',
      'Identidade visual técnica e premium',
      'SEO técnico e dados estruturados',
      'Animações e microinterações com Framer Motion',
    ],
    heroMedia: { kind: 'real', src: '/portfolio/3ws-moldes/desktop-hero.png', alt: 'Home do site da 3WS Moldes e Equipamentos' },
    gallery: [
      { kind: 'real', src: '/portfolio/3ws-moldes/desktop-detail.png', alt: 'Página de categorias/serviços da 3WS' },
      { kind: 'real', src: '/portfolio/3ws-moldes/mobile-hero.png', alt: 'Home da 3WS em um dispositivo móvel' },
    ],
  },

  {
    slug: 'franco-gastrobar',
    name: 'Franco Gastrobar',
    headline:
      'Cardápio digital em formato de site — acessível pelo QR Code na mesa e por quem ainda está decidindo onde comer, com painel próprio pra equipe atualizar tudo sem depender da Ergon.',
    servicos: ['Cardápio digital', 'UX/UI', 'SEO', 'Painel administrativo'],
    tecnologias: ['Lovable'],
    entrega: 'Cardápio digital publicado + painel administrativo para a equipe gerenciar o conteúdo.',
    ctaLabel: 'CONHECER O FRANCO ↗',
    ctaUrl: 'https://www.francogastrobar.com.br/',
    challenge:
      'Cardápios físicos exigem manutenção constante: placas quebram, preços mudam, e cada ajuste depende de uma nova impressão. Um cardápio pensado só pra dentro do restaurante também desperdiça quem já pesquisa o Franco antes de chegar.',
    built: {
      kind: 'single',
      text: 'Desenvolvemos um cardápio digital em formato de site, acessível pelo QR Code na mesa e também como página própria, navegável e indexável. O conteúdo foi organizado por categorias e âncoras, com um painel administrativo pra equipe atualizar preços, pratos e disponibilidade sem depender da Ergon.',
    },
    deliverables: [
      'Cardápio digital responsivo (mobile-first)',
      'Navegação por categorias e âncoras',
      'Painel administrativo para a equipe',
      'SEO técnico para buscas pelo restaurante',
    ],
    heroMedia: { kind: 'real', src: '/images/portfolio/cardapio-franco.png', alt: 'Cardápio digital do Franco Gastrobar' },
    gallery: [
      {
        kind: 'placeholder',
        alt: 'Painel administrativo do cardápio digital do Franco Gastrobar',
        note: 'Painel administrativo é uso interno do restaurante, sem captura pública disponível — placeholder no lugar de imagem real.',
      },
    ],
  },

  {
    slug: 'navegando-mkt',
    name: 'Navegando MKT',
    headline:
      'Site que transforma a audiência que a Navegando já construiu nas redes em um ativo de marca — portfólio, metodologia e geração de leads em um só lugar.',
    servicos: ['Website institucional', 'Portfólio digital', 'UX/UI', 'Geração de leads'],
    tecnologias: ['Lovable'],
    entrega: 'Site institucional e de portfólio publicado, com formulário de geração de leads.',
    ctaLabel: 'CONHECER A NAVEGANDO ↗',
    ctaUrl: 'https://www.navegandomkt.com.br/',
    challenge:
      'A Navegando já tinha reconhecimento pelas redes sociais, mas esse reconhecimento estava preso ao Instagram e ao TikTok — faltava um ambiente próprio pra reunir clientes, metodologia e resultados e transformar audiência em oportunidade comercial.',
    built: {
      kind: 'single',
      text: 'Desenvolvemos um site institucional e de portfólio que reúne o método de trabalho da Navegando, uma galeria de conteúdos com métricas reais de audiência, mais de 60 clientes atendidos e um formulário de contato que qualifica leads pela faixa de faturamento.',
    },
    deliverables: [
      'Site institucional e de portfólio',
      'Galeria de cases com métricas reais de performance',
      'Apresentação do método de trabalho',
      'Formulário de geração e qualificação de leads',
      'SEO técnico',
    ],
    heroMedia: { kind: 'real', src: '/portfolio/navegando-mkt/desktop-hero.png', alt: 'Home do site da Navegando MKT' },
    gallery: [
      { kind: 'real', src: '/portfolio/navegando-mkt/desktop-detail.png', alt: 'Página de portfólio/cases da Navegando MKT' },
      { kind: 'real', src: '/portfolio/navegando-mkt/mobile-hero.png', alt: 'Home da Navegando MKT em um dispositivo móvel' },
    ],
  },

  {
    slug: 'ergon-fly',
    name: 'Ergon Fly',
    headline:
      'Vertente audiovisual da Ergon dedicada à captação profissional com drone — site próprio pra apresentar o portfólio e ser encontrado por quem já procura esse serviço.',
    servicos: ['Website institucional', 'Audiovisual', 'SEO'],
    tecnologias: ['React', 'Vite', 'Tailwind CSS'],
    entrega: 'Página própria publicada em ergonagencia.com.br/fly.',
    ctaLabel: 'CONHECER A ERGON FLY ↗',
    ctaUrl: '/fly',
    challenge:
      'O site precisava comunicar a qualidade do equipamento e das filmagens, funcionar como portfólio e, ao mesmo tempo, ser encontrado por quem já pesquisa captação aérea profissional.',
    built: {
      kind: 'single',
      text: 'Unimos três funções na mesma experiência: apresentar o serviço, provar a qualidade do trabalho com o portfólio audiovisual e gerar descoberta orgânica através de SEO técnico e arquitetura de conteúdo.',
    },
    deliverables: [
      'Site institucional e de portfólio audiovisual',
      'Arquitetura de páginas indexável',
      'SEO técnico',
      'Design responsivo',
    ],
    heroMedia: { kind: 'real', src: '/fly/images/aerial-beach.jpg', alt: 'Captação aérea de drone da Ergon Fly' },
    gallery: [
      { kind: 'real', src: '/fly/images/portfolio-avenidas-poster.jpg', alt: 'Portfólio audiovisual Ergon Fly — avenidas' },
      { kind: 'real', src: '/fly/images/portfolio-logistica-poster.jpg', alt: 'Portfólio audiovisual Ergon Fly — logística' },
    ],
  },

  {
    slug: 'radar-navegando',
    name: 'Radar Navegando',
    headline:
      'Plataforma interna de prospecção ativa que separa descoberta de oportunidade — encontrando estabelecimentos por região e qualificando leads com apoio de IA.',
    servicos: ['Sistema interno', 'CRM', 'Sales intelligence', 'Automação'],
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Supabase', 'OpenAI API', 'Google Places API', 'Vercel', 'Tailwind CSS'],
    entrega: 'Sistema interno de uso privado da Navegando MKT, sem URL pública.',
    challenge:
      'A prospecção de restaurantes dependia de uma sequência extensa de tarefas manuais — pesquisar estabelecimentos, avaliar potencial, achar o decisor — e uma busca ampla podia retornar centenas de resultados sem relevância comercial.',
    built: {
      kind: 'single',
      text: 'Estruturamos o produto por etapas: descoberta de estabelecimentos via Google Places, triagem manual antes de consumir IA, preparação da abordagem com OpenAI, e um pipeline comercial próprio pra acompanhar contato, follow-up e fechamento.',
    },
    deliverables: [
      'Descoberta de estabelecimentos por região (Google Places)',
      'Camada de triagem antes da IA',
      'Geração de abordagem personalizada com OpenAI',
      'Pipeline comercial em Kanban',
      'Central de tarefas e follow-ups',
    ],
    heroMedia: {
      kind: 'placeholder',
      alt: 'Radar Navegando — produto interno de prospecção, sem URL pública',
      note: 'Produto de uso interno sem URL pública — placeholder no lugar de captura real.',
    },
    gallery: [],
  },
]

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}

export function getNextCase(slug: string): CaseStudy {
  const idx = cases.findIndex((c) => c.slug === slug)
  const nextIdx = (idx + 1) % cases.length
  return cases[nextIdx]
}
