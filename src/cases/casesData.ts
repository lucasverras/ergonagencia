// Case-study content, sourced verbatim/near-verbatim from
// ERGON_PORTFOLIO_9_CASES.md — the single editorial source of truth for the
// 9 portfolio case pages. Do not add metrics, stack items or scope that
// aren't stated there; where the doc says "PENDENTE" the corresponding claim
// is simply omitted below rather than invented.

export type CaseTagGroup = {
  label: string
  tags: string[]
}

export type CaseParagraphBlock = {
  kind: 'p'
  text: string
}

export type CaseQuoteBlock = {
  kind: 'quote'
  text: string
}

export type CaseHeadingBlock = {
  kind: 'heading'
  text: string
}

export type CaseListBlock = {
  kind: 'list'
  items: string[]
}

export type CaseContentBlock = CaseParagraphBlock | CaseQuoteBlock | CaseHeadingBlock | CaseListBlock

export type CaseSectionContent = {
  title: string
  blocks: CaseContentBlock[]
}

export type CaseMediaAsset = {
  kind: 'real' | 'placeholder'
  src?: string
  alt: string
  note?: string
}

export type CaseStudy = {
  slug: string
  name: string
  kicker: string
  category: string
  summary: string
  siteUrl?: string
  siteLabel?: string
  tagGroups: CaseTagGroup[]
  heroMedia: CaseMediaAsset
  galleryMedia: CaseMediaAsset[]
  sections: {
    projeto: CaseSectionContent
    desafio: CaseSectionContent
    solucao: CaseSectionContent
    experiencia: CaseSectionContent
    tecnologia: CaseSectionContent
    resultado: CaseSectionContent
  }
  closingQuote?: string
  twoTrack?: boolean
}

const p = (text: string): CaseParagraphBlock => ({ kind: 'p', text })
const q = (text: string): CaseQuoteBlock => ({ kind: 'quote', text })
const h = (text: string): CaseHeadingBlock => ({ kind: 'heading', text })
const list = (items: string[]): CaseListBlock => ({ kind: 'list', items })

export const cases: CaseStudy[] = [
  {
    slug: 'green-bay-car',
    name: 'GBC / Green Bay Car',
    kicker: '01 · Automotivo',
    category: 'Website · Integração · SEO · Desenvolvimento',
    summary:
      'Green Bay Car é uma loja de veículos localizada na Mooca, em São Paulo. A Ergon reconstruiu sua presença digital, **conectando o site diretamente ao estoque administrado na Webmotors**.',
    siteUrl: 'https://www.gbccar.com.br/',
    siteLabel: 'gbccar.com.br',
    tagGroups: [
      { label: 'Tipo de projeto', tags: ['Website Institucional'] },
      { label: 'Expertise', tags: ['SEO', 'Development'] },
      { label: 'Integrações', tags: ['Webmotors API'] },
    ],
    heroMedia: { kind: 'real', src: '/portfolio/green-bay-car/desktop-hero.png', alt: 'Home do site da Green Bay Car' },
    galleryMedia: [
      { kind: 'real', src: '/portfolio/green-bay-car/desktop-detail.png', alt: 'Página de detalhe de um veículo da Green Bay Car' },
      { kind: 'real', src: '/portfolio/green-bay-car/mobile-hero.png', alt: 'Home da Green Bay Car em um dispositivo móvel' },
    ],
    sections: {
      projeto: {
        title: 'O projeto',
        blocks: [
          p('A Green Bay Car procurou a Ergon para reconstruir sua presença digital e **transformar o website em um canal realmente útil para a operação da loja**.'),
          p('O objetivo principal era criar um site próprio capaz de **apresentar todo o estoque disponível**, melhorar a presença da GBC nas buscas e manter as informações sempre atualizadas, **sem criar mais uma etapa operacional para a equipe**.'),
        ],
      },
      desafio: {
        title: 'O desafio',
        blocks: [
          p('O site anterior praticamente não gerava tráfego orgânico.'),
          p('Além de uma estrutura pouco preparada para mecanismos de busca, existia **uma camada de CAPTCHA que dificultava o acesso de crawlers** como o Google e outras ferramentas de pesquisa, reduzindo a capacidade das páginas de serem descobertas e indexadas.'),
          p('Outro problema estava na forma como o estoque era apresentado. Os veículos ficavam concentrados em uma estrutura genérica de estoque, limitando o potencial de cada automóvel aparecer individualmente em pesquisas específicas.'),
          p('Antes: gbccar.com.br/estoque'),
          p('A nova arquitetura precisava **transformar cada veículo em uma página própria e indexável**.'),
        ],
      },
      solucao: {
        title: 'A solução',
        blocks: [
          p('A solução começou pela integração do website diretamente ao estoque já administrado pela Green Bay Car na Webmotors.'),
          p('Em vez de criar dois processos diferentes, conectamos **a API da Webmotors ao novo site**.'),
          h('A lógica operacional passa a ser simples:'),
          p('Veículo publicado na Webmotors → entra no site. Veículo removido da Webmotors → sai do site.'),
          p('Nenhum estoque precisa ser atualizado manualmente em dois lugares.'),
          p('A Webmotors continua fazendo parte da rotina operacional da loja, enquanto o website próprio passa a funcionar como **uma plataforma independente de apresentação, aquisição e pesquisa**.'),
        ],
      },
      experiencia: {
        title: 'A experiência',
        blocks: [
          p('Além de reconstruir a estrutura técnica, o projeto foi pensado para facilitar a descoberta dos veículos.'),
          p('Cada automóvel passou a possuir **sua própria página e endereço individual**.'),
          p('Antes: gbccar.com.br/estoque — Agora: gbccar.com.br/nome-do-carro'),
          p('Isso transforma cada veículo em uma página independente, capaz de apresentar suas próprias informações e de ser encontrada por buscas relacionadas àquele modelo.'),
          p('O resultado é uma navegação mais clara para o usuário e uma arquitetura **muito mais preparada para SEO**.'),
        ],
      },
      tecnologia: {
        title: 'Tecnologia',
        blocks: [
          p('API Webmotors · Integração de estoque · Páginas dinâmicas · SEO técnico · URLs individuais por veículo · Website responsivo'),
          p('A arquitetura conecta o estoque da Webmotors ao website da Green Bay Car, permitindo **a criação e remoção automática das páginas dos veículos** de acordo com as alterações realizadas na plataforma.'),
        ],
      },
      resultado: {
        title: 'O resultado',
        blocks: [
          p('A Green Bay Car deixou de ter apenas uma página institucional com uma listagem de veículos e passou a possuir **uma estrutura digital conectada diretamente à sua operação**.'),
          p('**O estoque é atualizado automaticamente**, cada carro possui uma página própria e o site passa a ter muito mais possibilidades de ser encontrado a partir de pesquisas específicas por marca, modelo e veículo.'),
          q('Sem duplicar trabalho. Sem manter dois estoques. Com a operação da Webmotors conectada diretamente ao canal próprio da marca.'),
        ],
      },
    },
    closingQuote: 'Cliente feliz, contrato fechado e mimo recebido!',
  },

  {
    slug: 'ergon-fly',
    name: 'Ergon Fly',
    kicker: '02 · Audiovisual',
    category: 'Website · SEO · Audiovisual · Drone',
    summary:
      'Ergon Fly é a vertente audiovisual da Ergon dedicada à captação profissional com drones para empresas, marcas, eventos, imóveis, turismo e produções.',
    siteUrl: '/fly',
    siteLabel: 'ergonagencia.com.br/fly',
    tagGroups: [
      { label: 'Tipo de projeto', tags: ['Website Institucional', 'Audiovisual'] },
      { label: 'Expertise', tags: ['SEO', 'Content Strategy'] },
    ],
    heroMedia: { kind: 'real', src: '/fly/images/aerial-beach.jpg', alt: 'Captação aérea de drone da Ergon Fly' },
    galleryMedia: [
      { kind: 'real', src: '/fly/images/portfolio-avenidas-poster.jpg', alt: 'Portfólio audiovisual Ergon Fly — avenidas' },
      { kind: 'real', src: '/fly/images/portfolio-logistica-poster.jpg', alt: 'Portfólio audiovisual Ergon Fly — logística' },
    ],
    sections: {
      projeto: {
        title: 'O projeto',
        blocks: [
          p('Ergon Fly é a vertente audiovisual da Ergon dedicada à captação profissional com drones para empresas, marcas, eventos, imóveis, turismo e produções.'),
          p('O projeto precisava criar uma presença digital própria para apresentar a qualidade das filmagens, mostrar o portfólio realizado e **transformar pesquisas por serviços de drone em novas oportunidades comerciais**.'),
        ],
      },
      desafio: {
        title: 'O desafio',
        blocks: [
          p('O objetivo não era apenas criar uma página visualmente impactante.'),
          p('O site precisava comunicar a qualidade do equipamento e das filmagens, funcionar como portfólio e, ao mesmo tempo, **possuir uma estrutura preparada para SEO**.'),
          p('A missão era fazer com que a Ergon Fly pudesse **ser encontrada por pessoas e empresas que já estivessem pesquisando por captação aérea** e serviços profissionais de drone.'),
        ],
      },
      solucao: {
        title: 'A solução',
        blocks: [
          h('Estruturamos o projeto para unir três funções dentro da mesma experiência:'),
          p('apresentar o serviço, provar a qualidade do trabalho e **gerar descoberta orgânica**.'),
          p('O conteúdo foi organizado para explicar aplicações da captação aérea, apresentar os equipamentos utilizados e criar uma estrutura de páginas e conteúdos capaz de trabalhar pesquisas relacionadas ao serviço.'),
          p('O website também funciona como **uma extensão comercial da Ergon Fly**, permitindo que potenciais clientes entendam rapidamente o tipo de produção oferecida e visualizem trabalhos anteriores.'),
        ],
      },
      experiencia: {
        title: 'A experiência',
        blocks: [
          p('O audiovisual é o protagonista.'),
          p('A experiência foi construída para dar espaço às imagens e filmagens, utilizando o próprio trabalho realizado pela Ergon Fly como **principal argumento comercial**.'),
          p('O portfólio ocupa uma posição central na navegação e é acompanhado por conteúdos que explicam aplicações, diferenciais e possibilidades de produção.'),
          p('A intenção é que o usuário consiga entender a qualidade do serviço antes mesmo de entrar em contato.'),
        ],
      },
      tecnologia: {
        title: 'Tecnologia',
        blocks: [
          p('SEO técnico · Arquitetura de páginas · Conteúdo indexável · Design responsivo · Portfólio audiovisual'),
        ],
      },
      resultado: {
        title: 'O resultado',
        blocks: [
          p('A Ergon Fly ganhou uma presença digital própria, preparada não apenas para apresentar trabalhos realizados, mas também para **ser encontrada por quem já procura esse tipo de serviço**.'),
          q('O website transforma portfólio, informação técnica e SEO em um único canal de aquisição.'),
        ],
      },
    },
  },

  {
    slug: 'garagi',
    name: 'Garagi',
    kicker: '03 · Automotivo',
    category: 'Website Institucional · Internal Tool · CRM · UX/UI · Development',
    summary:
      'A Garagi é uma oficina familiar especializada em funilaria e serviços automotivos. A Ergon desenvolveu tanto o website institucional quanto **um sistema interno de orçamentos e acompanhamento comercial**.',
    siteUrl: 'https://garagifunilaria.lovable.app/',
    siteLabel: 'garagifunilaria.lovable.app',
    twoTrack: true,
    tagGroups: [
      { label: 'Tipo de projeto', tags: ['Website Institucional', 'Internal Tool', 'CRM'] },
      { label: 'Expertise', tags: ['UX/UI', 'Development'] },
    ],
    heroMedia: { kind: 'real', src: '/portfolio/garagi/desktop-hero.png', alt: 'Home do site institucional da Garagi' },
    galleryMedia: [
      { kind: 'real', src: '/portfolio/garagi/desktop-detail.png', alt: 'Página de serviços do site institucional da Garagi' },
      { kind: 'real', src: '/portfolio/garagi/mobile-hero.png', alt: 'Home da Garagi em um dispositivo móvel' },
      {
        kind: 'placeholder',
        alt: 'Sistema interno de orçamentos da Garagi (uso interno, sem URL pública)',
        note: 'Sistema interno de orçamentos/CRM sem URL pública — placeholder no lugar de uma captura real.',
      },
    ],
    sections: {
      projeto: {
        title: 'O projeto',
        blocks: [
          p('A Garagi é uma oficina familiar especializada em funilaria e serviços automotivos.'),
          p('O projeto nasceu a partir de **duas necessidades complementares**: melhorar a presença digital da empresa para quem chega de fora e organizar melhor uma parte importante da operação para quem trabalha dentro dela.'),
          p('A Ergon desenvolveu tanto o website institucional da Garagi quanto um sistema interno de orçamentos e acompanhamento comercial, criando **duas experiências diferentes conectadas ao mesmo negócio**.'),
          p('O site institucional apresenta a empresa, seus serviços e sua identidade de forma muito mais atual, enquanto a ferramenta interna organiza a rotina de orçamentos, tarefas e follow-ups.'),
        ],
      },
      desafio: {
        title: 'O desafio',
        blocks: [
          p('Externamente, a Garagi precisava de uma presença digital que transmitisse melhor a qualidade do trabalho realizado pela oficina e facilitasse o entendimento dos serviços.'),
          p('Internamente, existia outro problema.'),
          p('O orçamento é uma etapa central da operação de uma oficina. Quando cada orçamento é criado de uma forma diferente e **não existe um ambiente central para acompanhar clientes, pendências e retornos**, informações importantes passam a depender de controles dispersos e da memória de quem administra o negócio.'),
          h('O desafio era resolver as duas pontas sem criar complexidade desnecessária:'),
          p('apresentar melhor a empresa para o cliente e organizar melhor a operação para o dono.'),
        ],
      },
      solucao: {
        title: 'A solução',
        blocks: [
          p('A Ergon trabalhou o projeto em duas frentes.'),
          h('Presença digital'),
          p('Criamos um website institucional para apresentar a Garagi de maneira mais contemporânea, visual e profissional.'),
          p('A experiência organiza os principais serviços da oficina, reforça sua identidade e cria um ponto digital próprio para clientes que procuram conhecer melhor a empresa antes de entrar em contato.'),
          h('Sistema interno'),
          p('Antes de desenvolver a ferramenta, estudamos como a Garagi trabalhava.'),
          p('A partir desse processo, desenhamos um sistema interno no qual o responsável preenche um formulário com as informações necessárias e consegue manter um padrão para os orçamentos enviados aos clientes.'),
          p('Em vez de obrigar a oficina a adaptar sua operação a um CRM genérico, a ferramenta foi construída **ao redor da rotina real da empresa**.'),
          p('O sistema também passou a **concentrar informações comerciais e operacionais** relacionadas aos orçamentos.'),
        ],
      },
      experiencia: {
        title: 'A experiência',
        blocks: [
          p('As duas interfaces possuem objetivos diferentes.'),
          p('No website institucional, a prioridade é transmitir confiança, apresentar os serviços e tornar a Garagi mais fácil de entender e contactar.'),
          p('No sistema interno, a prioridade é **reduzir etapas**.'),
          p('O responsável consegue registrar as informações necessárias para cada orçamento e visualizar o andamento das oportunidades em um único ambiente.'),
          p('A experiência prioriza rapidez, clareza e poucos passos para as ações mais frequentes.'),
        ],
      },
      tecnologia: {
        title: 'Tecnologia',
        blocks: [
          p('Website responsivo · Sistema web · Formulários estruturados · Dashboard · CRM interno · Gestão de tarefas · UX/UI'),
        ],
      },
      resultado: {
        title: 'O resultado',
        blocks: [
          p('A Garagi passou a ter uma presença digital mais alinhada à qualidade do seu trabalho e, ao mesmo tempo, uma ferramenta interna construída para a própria rotina.'),
          p('Do lado de fora, clientes encontram uma empresa mais bem apresentada, com seus serviços organizados em uma experiência digital própria.'),
          p('Do lado de dentro, o que começou como uma ferramenta para padronizar orçamentos **evoluiu para um pequeno sistema de gestão comercial**.'),
          h('Hoje o responsável consegue controlar:'),
          list(['orçamentos enviados', 'tarefas da semana', 'oportunidades em andamento', 'follow-ups', 'clientes que precisam de retorno']),
          q('Melhor presença para quem chega e melhor controle para quem opera.'),
        ],
      },
    },
    closingQuote: 'Uma experiência para o cliente. Outra para quem faz a operação acontecer.',
  },

  {
    slug: 'soccer-station',
    name: 'Soccer Station',
    kicker: '04 · Esporte & Entretenimento',
    category: 'Website · UX/UI · Ticketing · Development · Mercado Pago',
    summary:
      'A Soccer Station chegou até a Ergon com um site antigo, construído majoritariamente a partir de imagens. O novo projeto precisava explicar melhor as experiências da empresa e transformar o website em uma ferramenta de venda.',
    siteUrl: 'https://soccerstation.com.br/',
    siteLabel: 'soccerstation.com.br',
    tagGroups: [
      { label: 'Tipo de projeto', tags: ['Website Institucional', 'Ticketing'] },
      { label: 'Expertise', tags: ['UX/UI', 'Development'] },
      { label: 'Integrações', tags: ['Mercado Pago', 'Vercel'] },
    ],
    heroMedia: { kind: 'real', src: '/portfolio/soccer-station/desktop-hero.png', alt: 'Home do site da Soccer Station' },
    galleryMedia: [
      { kind: 'real', src: '/portfolio/soccer-station/desktop-detail.png', alt: 'Seção de produtos/experiências da Soccer Station' },
      { kind: 'real', src: '/portfolio/soccer-station/mobile-hero.png', alt: 'Home da Soccer Station em um dispositivo móvel' },
      {
        kind: 'placeholder',
        alt: 'Plataforma própria de ticketing da Soccer Station (ambiente privado, sem URL pública)',
        note: 'Ticketing própria hospedada em ambiente privado na Vercel — não deve ser confundida com estruturas de venda de terceiros; placeholder no lugar de captura real.',
      },
    ],
    sections: {
      projeto: {
        title: 'O projeto',
        blocks: [
          p('A Soccer Station chegou até a Ergon com um site antigo, construído majoritariamente a partir de imagens e que já não acompanhava a operação da empresa.'),
          h('O novo projeto precisava cumprir duas funções muito claras:'),
          p('explicar melhor as principais experiências da Soccer Station e **transformar o website em uma ferramenta de venda**.'),
        ],
      },
      desafio: {
        title: 'O desafio',
        blocks: [
          p('A Soccer Station recebe um volume relevante de tráfego, então uma simples modernização visual não resolveria o problema.'),
          p('Era necessário criar uma experiência rápida e intuitiva, capaz de fazer com que alguém que ainda não conhecesse a empresa **entendesse em poucos segundos o que ela oferece** e encontrasse facilmente o caminho para contratar ou comprar.'),
          p('A arquitetura também precisava explicar com clareza **os dois produtos principais da operação**, evitando misturar jornadas e objetivos diferentes.'),
        ],
      },
      solucao: {
        title: 'A solução',
        blocks: [
          p('Reestruturamos o website para apresentar os principais produtos da Soccer Station de forma muito mais clara, criando jornadas específicas para cada tipo de usuário.'),
          p('Conteúdo, hierarquia e pontos de conversão foram reorganizados para levar o visitante da descoberta até a ação com o mínimo possível de fricção.'),
          p('Mas o projeto não terminou no website.'),
          p('A Ergon também desenvolveu **uma plataforma própria de ticketing**, permitindo que a Soccer Station comercialize ingressos diretamente em seu próprio ecossistema digital.'),
          p('O cliente consegue acessar a experiência e concluir a compra na plataforma, **reduzindo a dependência de empresas terceirizadas** para intermediar a venda.'),
        ],
      },
      experiencia: {
        title: 'A experiência',
        blocks: [
          p('Como o website é destino de tráfego comercial, UX e conversão foram partes centrais do projeto.'),
          h('A lógica da experiência é:'),
          p('entender → escolher → comprar'),
          p('Informação, navegação e chamadas para ação foram organizadas para reduzir dúvidas e encurtar o caminho até a conversão.'),
          p('No mobile, essa prioridade se torna ainda mais importante: menos fricção entre descobrir a Soccer Station e realizar a ação desejada.'),
          p('A interface precisava transmitir o universo visual e experiencial da empresa **sem competir com o objetivo comercial**.'),
        ],
      },
      tecnologia: {
        title: 'Tecnologia',
        blocks: [
          p('Website responsivo · Plataforma própria de ticketing · Vercel · Mercado Pago · Checkout online · UX de conversão · SEO técnico'),
          p('A plataforma própria de ingressos está **hospedada na Vercel e utiliza Mercado Pago** para processamento dos pagamentos.'),
        ],
      },
      resultado: {
        title: 'O resultado',
        blocks: [
          p('A Soccer Station deixou de ter um website essencialmente informativo e passou a possuir uma estrutura digital conectada diretamente ao negócio.'),
          p('O novo site apresenta melhor seus produtos principais, conduz usuários por jornadas mais claras e foi pensado para receber tráfego com foco em conversão.'),
          p('Com a criação da ticketing própria, a empresa também passa a ter **maior controle sobre a experiência de venda** e reduz a dependência de plataformas terceirizadas e dos custos associados à intermediação.'),
          q('De apresentar a experiência a vender a experiência dentro do mesmo ecossistema.'),
        ],
      },
    },
  },

  {
    slug: 'radar-navegando',
    name: 'Radar Navegando',
    kicker: '05 · Sales Intelligence',
    category: 'Internal Tool · CRM · AI · Sales Intelligence · Development',
    summary:
      'A Ergon desenvolveu o Radar Navegando, uma plataforma interna de prospecção ativa capaz de encontrar estabelecimentos por região, organizar oportunidades, **qualificar potenciais clientes e apoiar a abordagem comercial com inteligência artificial**.',
    tagGroups: [
      { label: 'Tipo de projeto', tags: ['Internal Tool', 'CRM'] },
      { label: 'Expertise', tags: ['Sales Intelligence', 'Automation'] },
      { label: 'Tecnologia', tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'] },
      { label: 'Integrações', tags: ['OpenAI API', 'Google Places API', 'Vercel'] },
    ],
    heroMedia: {
      kind: 'placeholder',
      alt: 'Radar Navegando — produto interno de prospecção, sem URL pública',
      note: 'Produto de uso interno sem URL pública — placeholder no lugar de captura real.',
    },
    galleryMedia: [],
    sections: {
      projeto: {
        title: 'O projeto',
        blocks: [
          p('A Navegando MKT é uma agência especializada em produção de conteúdo e crescimento orgânico para restaurantes.'),
          p('Com uma operação comercial cada vez mais ativa, a empresa precisava transformar uma prospecção baseada em pesquisas e abordagens manuais em **um processo mais organizado, rápido e orientado por dados**.'),
          p('A Ergon desenvolveu o Radar Navegando, uma plataforma interna de prospecção ativa capaz de encontrar estabelecimentos por região, organizar oportunidades, qualificar potenciais clientes e apoiar a abordagem comercial com inteligência artificial.'),
          p('O objetivo principal foi **reduzir o trabalho operacional da equipe comercial e aumentar a qualidade dos leads** abordados.'),
        ],
      },
      desafio: {
        title: 'O desafio',
        blocks: [
          p('A prospecção de restaurantes envolvia uma sequência extensa de tarefas manuais: escolher uma região, pesquisar estabelecimentos, identificar quais realmente tinham potencial, encontrar informações comerciais, analisar a presença digital, procurar o decisor e construir uma abordagem personalizada.'),
          p('Além do tempo gasto, havia outro problema: uma busca ampla pode retornar centenas de estabelecimentos, muitos deles sem relevância comercial para a Navegando.'),
          p('O desafio não era simplesmente gerar uma lista maior de contatos.'),
          p('Era criar um sistema capaz de **separar descoberta de oportunidade**, permitindo que a equipe concentrasse esforço apenas nos negócios que realmente valessem uma abordagem.'),
        ],
      },
      solucao: {
        title: 'A solução',
        blocks: [
          p('A Ergon estruturou o produto de acordo com as diferentes etapas da prospecção comercial.'),
          p('Primeiro, o sistema permite criar campanhas por região e pesquisar estabelecimentos **utilizando dados do Google Places**.'),
          p('Os resultados passam por filtros objetivos para eliminar categorias indesejadas, duplicidades e negócios fora do perfil definido.'),
          p('Em seguida, a plataforma cria **uma camada de triagem**, na qual a equipe consegue aprovar, descartar ou revisar rapidamente cada oportunidade antes de consumir recursos de inteligência artificial.'),
          p('Somente os leads aprovados seguem para preparação.'),
          p('Nessa etapa, o sistema pode reunir informações adicionais, analisar a oportunidade comercial, apoiar a identificação do decisor e **gerar uma abordagem personalizada utilizando OpenAI**.'),
          p('Por fim, os leads selecionados entram em um pipeline comercial próprio, permitindo acompanhar contato, follow-up, reunião, proposta e fechamento.'),
          q('Um estabelecimento encontrado não é automaticamente um lead comercial.'),
        ],
      },
      experiencia: {
        title: 'A experiência',
        blocks: [
          p('A interface foi construída como uma ferramenta operacional, seguindo a identidade visual da Navegando MKT e evitando a aparência convencional de CRMs genéricos.'),
          p('O produto utiliza direção visual escura, contrastes em laranja e uma hierarquia voltada para **a leitura rápida de grandes volumes de informação**.'),
          h('A experiência foi organizada em áreas específicas para cada momento da prospecção:'),
          list([
            'Descoberta — pesquisa de novos estabelecimentos por região',
            'Seleção — aprovação ou descarte rápido das oportunidades encontradas',
            'Preparação — análise do lead, informações relevantes, decisor e construção da abordagem comercial',
            'Pipeline — visualização em Kanban e movimentação dos leads entre as etapas',
            'Hoje — central de tarefas, follow-ups e oportunidades que precisam de atenção',
          ]),
          p('A prioridade de UX foi reduzir fricção: menos telas abertas, menos confirmações desnecessárias e mais ações realizadas diretamente no contexto do lead.'),
        ],
      },
      tecnologia: {
        title: 'Tecnologia',
        blocks: [
          p('Next.js · React · TypeScript · Supabase · OpenAI API · Google Places API · Vercel · Tailwind CSS · Responsive Design'),
          p('A plataforma foi construída em **Next.js e TypeScript**, publicada pela Vercel e utiliza **Supabase como base para autenticação, persistência dos leads**, histórico e estrutura comercial.'),
          p('A integração com Google Places API permite descobrir estabelecimentos a partir das regiões escolhidas pela equipe.'),
          p('A OpenAI API é utilizada apenas nas etapas em que inteligência artificial agrega valor, como análise qualitativa e criação de abordagens personalizadas.'),
          p('A arquitetura separa tarefas determinísticas, como filtros e deduplicação, das tarefas de IA. Isso **reduz custo operacional e torna o sistema mais previsível e escalável**.'),
          q('A IA não entra simplesmente porque está disponível. Ela entra onde melhora a decisão.'),
        ],
      },
      resultado: {
        title: 'O resultado',
        blocks: [
          p('O Radar Navegando transformou uma rotina de prospecção fragmentada em **um processo comercial centralizado**, conectando descoberta, triagem, preparação e acompanhamento dentro de uma única plataforma.'),
          p('A Navegando passou a ter uma base própria para mapear diferentes regiões, organizar centenas de estabelecimentos encontrados, descartar rapidamente oportunidades irrelevantes e direcionar análise aprofundada apenas aos leads selecionados.'),
          p('Mais do que automatizar uma lista de contatos, o projeto criou uma infraestrutura interna para que a prospecção possa crescer de forma estruturada, com histórico, critérios de qualificação, inteligência artificial e acompanhamento de cada oportunidade até o fechamento.'),
          p('Como o produto ainda está em evolução e é de uso interno, o case não depende de KPIs artificiais.'),
          p('O principal resultado é a criação de um processo que antes era manual e disperso e agora pode ser **operado, medido e continuamente aprimorado dentro de um único sistema**.'),
        ],
      },
    },
    closingQuote: 'Encontrar empresas é fácil. Encontrar oportunidades é outra história.',
  },

  {
    slug: 'navegando-mkt',
    name: 'Navegando MKT',
    kicker: '06 · Marketing de Conteúdo',
    category: 'Website · UX/UI · Portfólio · Lead Generation · Brand Presence',
    summary:
      'A Navegando MKT é uma agência especializada em produção de conteúdo e crescimento orgânico para restaurantes. A Ergon transformou sua presença em um ativo de marca: um website capaz de apresentar a empresa, seus trabalhos, sua metodologia e seus resultados.',
    siteUrl: 'https://www.navegandomkt.com.br/',
    siteLabel: 'navegandomkt.com.br',
    tagGroups: [
      { label: 'Tipo de projeto', tags: ['Website Institucional', 'Portfolio Website'] },
      { label: 'Expertise', tags: ['UX/UI', 'Lead Generation'] },
    ],
    heroMedia: { kind: 'real', src: '/portfolio/navegando-mkt/desktop-hero.png', alt: 'Home do site da Navegando MKT' },
    galleryMedia: [
      { kind: 'real', src: '/portfolio/navegando-mkt/desktop-detail.png', alt: 'Página de portfólio/cases da Navegando MKT' },
      { kind: 'real', src: '/portfolio/navegando-mkt/mobile-hero.png', alt: 'Home da Navegando MKT em um dispositivo móvel' },
    ],
    sections: {
      projeto: {
        title: 'O projeto',
        blocks: [
          p('A Navegando MKT é uma agência especializada em produção de conteúdo e crescimento orgânico para restaurantes.'),
          p('Apesar de já atender uma base relevante de clientes e gerar visibilidade para diversas marcas nas redes sociais, a própria Navegando ainda possuía **uma presença digital limitada fora desses canais**.'),
          p('A Ergon entrou no projeto com o objetivo de **transformar essa presença em um ativo de marca**: um website capaz de apresentar a empresa, seus trabalhos, sua metodologia e seus resultados de forma clara e profissional.'),
          p('O objetivo principal foi **unir autoridade, portfólio e geração de novos leads** dentro de uma única experiência.'),
        ],
      },
      desafio: {
        title: 'O desafio',
        blocks: [
          p('A Navegando já possuía reconhecimento por meio das redes sociais e do trabalho realizado para seus clientes, mas esse reconhecimento estava concentrado principalmente em plataformas como Instagram e TikTok.'),
          p('Faltava um ambiente próprio que organizasse e apresentasse tudo aquilo que a empresa já havia construído.'),
          p('Para uma agência que trabalha justamente com presença digital, não possuir um website estruturado, uma base própria de conteúdo e uma experiência clara para potenciais clientes criava uma lacuna entre a qualidade do trabalho entregue e a percepção institucional da marca.'),
          p('O desafio era transformar audiência em **credibilidade, contexto e oportunidade comercial**.'),
        ],
      },
      solucao: {
        title: 'A solução',
        blocks: [
          p('A Ergon desenvolveu um website institucional e de portfólio capaz de apresentar a Navegando de forma muito mais completa.'),
          h('A nova estrutura reúne:'),
          list(['principais clientes', 'serviços oferecidos', 'metodologia de trabalho', 'cases de sucesso', 'resultados alcançados', 'formulário de contato e geração de leads']),
          p('Como grande parte da audiência da Navegando já chega por meio das redes sociais, o site foi pensado como **uma continuação natural dessa jornada**.'),
          p('O usuário descobre a marca em um conteúdo, acessa o perfil, entra no website e encontra um ambiente preparado para explicar com mais profundidade quem é a Navegando, o que ela faz e por que seus resultados são relevantes.'),
        ],
      },
      experiencia: {
        title: 'A experiência',
        blocks: [
          p('O site foi desenvolvido para funcionar como uma extensão da identidade já construída pela Navegando nas redes sociais.'),
          p('A linguagem visual mantém a personalidade da marca e leva essa estética para uma experiência mais institucional, sem transformar a empresa em uma agência genérica.'),
          p('O portfólio ocupa um papel central.'),
          p('Em vez de depender apenas de uma descrição institucional, o website utiliza **clientes, projetos e resultados reais como argumento comercial**.'),
          p('A experiência também foi organizada para reduzir o caminho entre interesse e contato, utilizando chamadas para ação e formulário integrado para transformar visitas em oportunidades comerciais.'),
          h('A lógica é simples:'),
          p('descobrir → entender → confiar → entrar em contato'),
        ],
      },
      tecnologia: {
        title: 'Tecnologia',
        blocks: [
          p('Website responsivo · Formulário de leads · Portfólio digital · SEO técnico · UX de conversão · Arquitetura de conteúdo'),
          p('O projeto foi estruturado para funcionar bem em dispositivos móveis, considerando que uma parcela importante do tráfego chega diretamente das redes sociais.'),
          p('O formulário integrado transforma o website em **um ponto ativo de captação**, enquanto a estrutura de portfólio e cases permite ampliar progressivamente a presença orgânica da marca e criar novas páginas indexáveis.'),
        ],
      },
      resultado: {
        title: 'O resultado',
        blocks: [
          p('A Navegando deixou de depender exclusivamente das redes sociais para apresentar sua própria marca.'),
          p('O novo website criou um ponto central para reunir clientes, metodologia, serviços e cases de sucesso, **transformando o trabalho já realizado pela agência em prova de autoridade**.'),
          p('Ao mesmo tempo, o site passou a funcionar como parte do funil comercial.'),
          p('Quem chega pelas redes sociais encontra uma experiência capaz de aprofundar o interesse, apresentar resultados e conduzir o visitante diretamente para um formulário de contato.'),
          p('Mais do que criar uma presença institucional, o projeto deu à Navegando um ambiente próprio para **transformar audiência em oportunidade**.'),
        ],
      },
    },
    closingQuote: 'A empresa que fazia seus clientes serem encontrados também precisava ser encontrada.',
  },

  {
    slug: 'franco-gastrobar',
    name: 'Franco Gastrobar',
    kicker: '07 · Gastronomia',
    category: 'Digital Menu · UX/UI · SEO · Admin Panel · Development',
    summary:
      'O Franco Gastrobar chegou até a Ergon com um problema recorrente: cardápios físicos que exigiam manutenção constante. A Ergon transformou o cardápio em **uma experiência digital própria**.',
    siteUrl: 'https://francogastrobar.com.br/',
    siteLabel: 'francogastrobar.com.br',
    tagGroups: [
      { label: 'Tipo de projeto', tags: ['Digital Menu'] },
      { label: 'Expertise', tags: ['UX/UI', 'SEO'] },
    ],
    heroMedia: { kind: 'real', src: '/images/portfolio/cardapio-franco.png', alt: 'Cardápio digital do Franco Gastrobar' },
    galleryMedia: [
      {
        kind: 'placeholder',
        alt: 'Painel administrativo do cardápio digital do Franco Gastrobar',
        note: 'Painel administrativo é uso interno do restaurante, sem captura pública disponível — placeholder no lugar de imagem real.',
      },
    ],
    sections: {
      projeto: {
        title: 'O projeto',
        blocks: [
          p('O Franco Gastrobar chegou até a Ergon com um problema simples, mas recorrente na operação: os cardápios físicos exigiam manutenção constante.'),
          p('Placas quebravam, informações precisavam ser atualizadas e qualquer alteração de preço, prato ou disponibilidade acabava **dependendo de uma nova impressão ou substituição física**.'),
          p('A ideia inicial poderia ter terminado em um QR Code apontando para um PDF.'),
          p('A Ergon propôs algo diferente: transformar o cardápio em uma experiência digital própria, **acessível tanto para quem já está dentro do restaurante quanto para quem ainda está decidindo onde comer**.'),
        ],
      },
      desafio: {
        title: 'O desafio',
        blocks: [
          p('Um cardápio de restaurante normalmente é pensado apenas para o momento em que o cliente já está sentado à mesa.'),
          p('Isso desperdiça uma oportunidade importante.'),
          p('Antes mesmo de chegar ao local, muitas pessoas pesquisam o restaurante, procuram o menu, querem entender a faixa de preço, conhecer os pratos ou simplesmente decidir se aquela experiência faz sentido para elas.'),
          h('O desafio era criar uma solução que funcionasse nos dois momentos:'),
          p('**dentro do restaurante, como cardápio; fora do restaurante, como presença digital.**'),
          p('Além disso, o conteúdo precisava continuar fácil de atualizar pela própria equipe, sem depender da Ergon para cada alteração de prato ou disponibilidade.'),
        ],
      },
      solucao: {
        title: 'A solução',
        blocks: [
          p('Em vez de criar um arquivo estático, desenvolvemos **um cardápio digital em formato de website**.'),
          p('O acesso pode acontecer pelo QR Code no restaurante, mas o produto existe como uma página própria, navegável e indexável.'),
          p('O conteúdo foi organizado por **categorias e âncoras**, permitindo que o usuário avance rapidamente entre diferentes partes do menu sem precisar percorrer uma página extensa.'),
          p('Cada seção foi construída para combinar informação e apelo visual, utilizando nomes, descrições, preços e fotografias dos produtos para tornar a escolha mais simples.'),
          p('Ao mesmo tempo, a estrutura do website permite que o Franco seja encontrado por pessoas que estão pesquisando o restaurante ou procurando informações sobre o cardápio antes da visita.'),
        ],
      },
      experiencia: {
        title: 'A experiência',
        blocks: [
          p('A experiência foi pensada primeiro para o celular.'),
          p('Dentro de um restaurante, ninguém quer ampliar PDF, procurar página ou esperar um arquivo pesado carregar.'),
          h('Por isso, o cardápio utiliza uma navegação visual e direta, com:'),
          list(['categorias acessíveis por âncoras', 'menu organizado por seções', 'fotografias dos pratos', 'leitura rápida de nome, descrição e preço', 'navegação contínua sem troca desnecessária de telas']),
          p('A interface permite que o cliente vá diretamente ao que procura e, ao mesmo tempo, explore outros itens de forma natural.'),
          p('O objetivo não era simplesmente digitalizar o cardápio físico. Era **projetar uma experiência de escolha para o ambiente digital**.'),
        ],
      },
      tecnologia: {
        title: 'Tecnologia',
        blocks: [
          p('Website responsivo · Cardápio dinâmico · Painel administrativo · SEO técnico · Navegação por âncoras · Gestão de conteúdo'),
          p('Além da experiência pública, o projeto possui uma camada administrativa. Por meio do painel, os responsáveis pelo Franco conseguem **gerenciar o conteúdo do cardápio sem depender de uma alteração direta no código** ou de uma nova publicação manual pela Ergon.'),
          p('Itens podem ser adicionados, removidos ou atualizados de acordo com a operação do restaurante.'),
        ],
      },
      resultado: {
        title: 'O resultado',
        blocks: [
          p('O Franco deixou de depender de um cardápio físico como única referência para apresentar seus produtos.'),
          p('Hoje, o mesmo ambiente digital atende dois públicos diferentes: quem já está no restaurante e precisa escolher o que pedir; e quem ainda está fora e quer conhecer o que o Franco oferece.'),
          p('A equipe também **ganhou autonomia para manter o conteúdo atualizado** através do painel administrativo, reduzindo a dependência de impressões, substituições físicas e alterações técnicas para tarefas simples.'),
          q('Mais do que substituir uma placa por um QR Code, o projeto transformou o cardápio em um novo ponto de contato digital entre o restaurante e seus clientes.'),
        ],
      },
    },
    closingQuote:
      'Não colocamos o cardápio na internet. Transformamos o cardápio em parte da presença digital do restaurante.',
  },

  {
    slug: '3ws-moldes',
    name: '3WS Moldes e Equipamentos',
    kicker: '08 · Industrial',
    category: 'Website · UX/UI · SEO · Development · Industrial',
    summary:
      'A 3WS Moldes e Equipamentos atua na **compra, venda, intermediação e consultoria técnica** de moldes para injeção plástica, porta-moldes, bases para estampos e equipamentos industriais.',
    siteUrl: 'https://neto3ws.vercel.app/',
    siteLabel: 'neto3ws.vercel.app',
    tagGroups: [
      { label: 'Tipo de projeto', tags: ['Website Institucional'] },
      { label: 'Expertise', tags: ['UX/UI', 'SEO', 'Development'] },
      { label: 'Tecnologia', tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { label: 'Integrações', tags: ['Vercel'] },
    ],
    heroMedia: { kind: 'real', src: '/portfolio/3ws-moldes/desktop-hero.png', alt: 'Home do site da 3WS Moldes e Equipamentos' },
    galleryMedia: [
      { kind: 'real', src: '/portfolio/3ws-moldes/desktop-detail.png', alt: 'Página de categorias/serviços da 3WS' },
      { kind: 'real', src: '/portfolio/3ws-moldes/mobile-hero.png', alt: 'Home da 3WS em um dispositivo móvel' },
    ],
    sections: {
      projeto: {
        title: 'O projeto',
        blocks: [
          p('A 3WS Moldes e Equipamentos atua na compra, venda, intermediação e consultoria técnica de moldes para injeção plástica, porta-moldes, bases para estampos e equipamentos industriais.'),
          p('A Ergon foi responsável por repensar a presença digital da empresa, transformando um site com abordagem predominantemente institucional em **uma experiência mais comercial, técnica e alinhada à dimensão da operação** da 3WS.'),
          p('O objetivo foi criar um site capaz de gerar autoridade, apresentar melhor os serviços e **transformar o grande volume de ferramentas e oportunidades disponíveis em um diferencial percebido pelo mercado**.'),
        ],
      },
      desafio: {
        title: 'O desafio',
        blocks: [
          p('A 3WS já possuía presença digital, mas o site anterior não traduzia a força da operação.'),
          p('A comunicação dedicava muito espaço à história e ao institucional, enquanto informações importantes para potenciais compradores e vendedores tinham pouco protagonismo.'),
          p('Diferenciais como **o estoque superior a 1.500.000 kg em ferramentas**, a compra e venda por quilo, a variedade de moldes e a possibilidade de reaproveitamento de ferramentas não apareciam com a força necessária.'),
          p('Além disso, a estrutura visual e a experiência de navegação precisavam evoluir para transmitir uma empresa mais sólida, técnica e contemporânea, além de criar uma base melhor para SEO e geração de contatos.'),
        ],
      },
      solucao: {
        title: 'A solução',
        blocks: [
          p('A Ergon reorganizou a arquitetura do site **colocando serviços e oportunidades comerciais antes do conteúdo institucional**.'),
          p('Compra, venda, intermediação e consultoria passaram a ter uma apresentação mais clara, enquanto categorias como moldes automotivos, linha branca, utilidades domésticas, porta-moldes e bases para estampos ganharam espaço próprio.'),
          p('Também trabalhamos estrategicamente termos importantes para o negócio, como moldes usados, moldes de segunda mão, porta-moldes, compra e venda por quilo e lotes industriais, aproximando a linguagem do site da maneira como potenciais clientes realmente procuram essas oportunidades.'),
          p('O resultado é uma estrutura que explica rapidamente o que a 3WS faz, o que compra, o que vende e por que vale a pena falar com ela.'),
        ],
      },
      experiencia: {
        title: 'A experiência',
        blocks: [
          p('A nova direção visual abandona a aparência de um site industrial convencional para construir **uma experiência mais editorial, técnica e premium**.'),
          p('A Ergon trabalhou uma identidade baseada em tons metálicos e industriais, tipografia de alto impacto, grandes fotografias, hierarquia mais forte e maior uso de espaço negativo.'),
          p('O conteúdo ganhou diferentes ritmos ao longo da navegação, combinando composições assimétricas, imagens em escala, textos laterais, seções interativas, movimentos durante o scroll e microinterações.'),
          p('As animações foram pensadas como parte da experiência, ajudando a apresentar informações e conduzir a navegação sem transformar o site em uma vitrine de efeitos.'),
        ],
      },
      tecnologia: {
        title: 'Tecnologia',
        blocks: [
          p('Next.js · React · TypeScript · Tailwind CSS · Framer Motion · Vercel · SEO · Responsive Design'),
          p('O novo site foi estruturado com uma stack moderna, permitindo **maior controle sobre performance, responsividade, animações** e evolução futura da plataforma.'),
          p('A estrutura também foi preparada com atenção especial a SEO técnico, incluindo hierarquia semântica de conteúdo, metadados, sitemap, dados estruturados e otimização de imagens e performance.'),
          p('O Framer Motion foi utilizado para construir interações e movimentos diretamente integrados à interface, mantendo a experiência leve e consistente.'),
        ],
      },
      resultado: {
        title: 'O resultado',
        blocks: [
          p('Mais do que uma mudança estética, o projeto reposiciona digitalmente a 3WS.'),
          p('A empresa passa a ter um site que comunica melhor o tamanho da operação, **a especialização técnica e as oportunidades comerciais existentes em seu estoque**, ao mesmo tempo em que facilita o entendimento dos serviços e o contato de quem deseja comprar ou vender.'),
          q('A nova presença digital cria uma base mais preparada para autoridade, SEO, geração de leads e crescimento, aproximando a percepção da marca no ambiente digital da dimensão que a 3WS já possui no mercado industrial.'),
        ],
      },
    },
    closingQuote: 'De um site que apresentava a empresa para uma plataforma que apresenta o negócio.',
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
