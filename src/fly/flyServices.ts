export interface FlyServiceData {
  id: string
  title: string
  intro: string
  blocks: { heading: string; body: string }[]
  bullets: string[]
}

// content ported from the 10 old landing pages (docs/fly/AUDITORIA.md) —
// kept as full paragraphs rather than summarized, since this is the copy
// that has to carry each keyword's ranking on the merged /fly page
export const flyServices: FlyServiceData[] = [
  {
    id: 'imagens-aereas',
    title: 'Imagens Aéreas Profissionais com Drone',
    intro:
      'Somos especialistas em imagens aéreas profissionais. Utilizamos drones de última geração para capturar fotografias e vídeos aéreos em alta resolução, proporcionando uma nova perspectiva para o seu negócio. Nossas imagens de drone são ideais para empresas que desejam destacar seus espaços, projetos e eventos.',
    blocks: [
      {
        heading: 'Fotografias aéreas em alta resolução',
        body: 'Nossas imagens aéreas são capturadas com câmeras de até 48MP, garantindo detalhes impressionantes para materiais de marketing, redes sociais e apresentações corporativas. Cada imagem de drone é planejada para valorizar o que torna seu projeto único.',
      },
      {
        heading: 'Imagens de drone para diferentes segmentos',
        body: 'Atendemos construtoras, incorporadoras, hotéis, restaurantes, eventos e propriedades rurais. As imagens aéreas profissionais revelam ângulos impossíveis de alcançar com fotografias convencionais, criando um impacto visual que conecta e converte.',
      },
      {
        heading: 'Processo de captação aérea',
        body: 'Cada voo é planejado com antecedência, considerando iluminação, composição e objetivo da captação. Nossos pilotos são certificados e operam equipamentos DJI de última geração, garantindo segurança e qualidade em cada imagem produzida.',
      },
    ],
    bullets: [
      'Imagens aéreas em resolução até 48MP',
      'Drones DJI de última geração',
      'Pilotos certificados ANAC',
      'Edição profissional e tratamento de cor',
      'Entrega rápida em formatos otimizados',
      'Atendimento em São Paulo e região',
    ],
  },
  {
    id: 'filmagem-com-drone',
    title: 'Filmagem com Drone Profissional em 4K',
    intro:
      'A filmagem com drone é a forma mais impactante de apresentar seu negócio. Produzimos vídeos aéreos cinematográficos em 4K, com movimentos suaves e composições estratégicas que valorizam cada detalhe do seu projeto.',
    blocks: [
      {
        heading: 'Vídeos aéreos cinematográficos',
        body: 'Nossa filmagem com drone utiliza técnicas cinematográficas avançadas, incluindo movimentos de câmera suaves, slow motion e transições fluidas. Cada filmagem aérea é pensada para contar a história do seu negócio de forma envolvente e profissional.',
      },
      {
        heading: 'Filmagem aérea para marketing e publicidade',
        body: 'Vídeos com drone são ferramentas poderosas de marketing. Seja para campanhas publicitárias, vídeos institucionais ou conteúdo para redes sociais, a filmagem aérea profissional garante resultados que impressionam e convertem.',
      },
      {
        heading: 'Qualidade 4K e edição profissional',
        body: 'Todas as filmagens com drone são realizadas em resolução 4K, com tratamento de cor cinematográfico e edição profissional. Entregamos o material finalizado em formatos otimizados para cada plataforma, de redes sociais a apresentações corporativas.',
      },
    ],
    bullets: [
      'Filmagem aérea em resolução 4K',
      'Edição cinematográfica profissional',
      'Slow motion e técnicas avançadas',
      'Formatos para redes sociais e TV',
      'Planejamento de voo personalizado',
      'Cobertura em São Paulo e região',
    ],
  },
  {
    id: 'drone-profissional',
    title: 'Serviço de Drone Profissional para Empresas',
    intro:
      'O drone profissional é uma ferramenta indispensável para empresas que buscam imagens e vídeos aéreos de alta qualidade. Oferecemos serviço completo de captação aérea com equipamentos DJI de última geração e pilotos certificados pela ANAC.',
    blocks: [
      {
        heading: 'Equipamentos de última geração',
        body: 'Utilizamos drones profissionais DJI com câmeras de até 48MP e gravação em 4K. Nossos equipamentos garantem estabilidade, precisão e qualidade de imagem incomparável para cada projeto de captação aérea.',
      },
      {
        heading: 'Pilotos certificados e operação segura',
        body: 'Todos os nossos pilotos são certificados pela ANAC e seguem rigorosos protocolos de segurança. A operação segura do drone profissional é prioridade em cada voo, garantindo resultados excelentes com total conformidade regulatória.',
      },
      {
        heading: 'Soluções completas de drone para empresas',
        body: 'Oferecemos desde a captação aérea até a edição final do material: planejamento de voo, captação de imagens e vídeos, tratamento de cor e entrega em formatos otimizados para cada necessidade.',
      },
    ],
    bullets: [
      'Drone DJI Mini 4 Pro',
      'Pilotos certificados ANAC',
      'Seguro de responsabilidade civil',
      'Planejamento de voo personalizado',
      'Entrega em múltiplos formatos',
      'Suporte em todo o processo',
    ],
  },
  {
    id: 'drone-para-imobiliarias',
    title: 'Drone para Imobiliárias e Construtoras',
    intro:
      'Imagens aéreas com drone são essenciais para o mercado imobiliário. Produzimos fotos e vídeos aéreos que valorizam imóveis, empreendimentos e loteamentos, ajudando imobiliárias e construtoras a vender mais com apresentações visuais de impacto.',
    blocks: [
      {
        heading: 'Fotos aéreas de imóveis e empreendimentos',
        body: 'O drone para imobiliárias permite apresentar a localização, entorno e dimensões do imóvel de forma impressionante. Imagens aéreas revelam a vista, proximidade de comércios, parques e vias de acesso — informações que valorizam o imóvel e aceleram a decisão de compra.',
      },
      {
        heading: 'Acompanhamento de obras com drone',
        body: 'Para construtoras, oferecemos acompanhamento fotográfico e em vídeo da evolução de obras. O drone profissional captura o progresso em diferentes ângulos, gerando relatórios visuais para investidores, clientes e documentação interna.',
      },
      {
        heading: 'Vídeos aéreos para lançamentos imobiliários',
        body: 'Vídeos com drone em 4K são ideais para campanhas de lançamento imobiliário. Combinamos filmagem aérea cinematográfica com edição profissional para criar apresentações que encantam e vendem.',
      },
    ],
    bullets: [
      'Valorização visual do imóvel',
      'Fotos aéreas de alta resolução',
      'Vídeos cinematográficos em 4K',
      'Acompanhamento de obras',
      'Material para portais e redes sociais',
      'Atendimento especializado para o setor',
    ],
  },
  {
    id: 'drone-para-restaurantes',
    title: 'Drone para Restaurantes e Gastronomia',
    intro:
      'Imagens aéreas com drone transformam a forma como restaurantes apresentam seus espaços. Capturamos fotos e vídeos que destacam a ambientação, vista, localização privilegiada e a experiência gastronômica oferecida pelo seu restaurante.',
    blocks: [
      {
        heading: 'Valorize seu restaurante com imagens aéreas',
        body: 'O drone para restaurantes permite mostrar a vista, terraço, área externa e entorno do estabelecimento. Imagens aéreas profissionais criam uma primeira impressão memorável que atrai novos clientes e destaca seu restaurante da concorrência.',
      },
      {
        heading: 'Conteúdo visual para redes sociais',
        body: 'Vídeos aéreos cinematográficos e fotos de drone são conteúdos de alto engajamento em redes sociais. Ajudamos restaurantes a criar material visual impactante que gera curtidas, compartilhamentos e reservas.',
      },
      {
        heading: 'Captação aérea planejada',
        body: 'Cada voo é planejado para o horário ideal de iluminação, capturando o restaurante no seu melhor momento. A filmagem aérea profissional inclui edição de cor e entrega em formatos otimizados para Google, Instagram e site.',
      },
    ],
    bullets: [
      'Destaque a localização e vista do restaurante',
      'Fotos para Google Meu Negócio',
      'Vídeos para Instagram e TikTok',
      'Material para site e cardápio digital',
      'Captação no melhor horário de luz',
      'Entrega rápida e profissional',
    ],
  },
  {
    id: 'drone-para-hoteis',
    title: 'Drone para Hotéis, Resorts e Pousadas',
    intro:
      'Hotéis e resorts que utilizam imagens aéreas com drone profissional se destacam na decisão de reserva dos hóspedes. Produzimos fotos e vídeos aéreos que revelam toda a grandiosidade, estrutura e beleza natural ao redor do seu empreendimento hoteleiro.',
    blocks: [
      {
        heading: 'Imagens aéreas que vendem hospedagem',
        body: 'O drone para hotéis captura a estrutura completa, piscinas, áreas de lazer, jardins e a paisagem ao redor. Essas imagens aéreas profissionais são decisivas em plataformas como Booking, Airbnb e no site do hotel.',
      },
      {
        heading: 'Vídeos aéreos de resorts e pousadas',
        body: 'Filmagens com drone em 4K mostram a experiência completa que o hóspede terá. Desde a chegada até as vistas dos quartos, cada momento é capturado com qualidade cinematográfica para encantar e converter visitantes em reservas.',
      },
      {
        heading: 'Material para marketing hoteleiro',
        body: 'Produzimos conteúdo aéreo otimizado para sites de reserva, redes sociais, apresentações para operadoras de turismo e material publicitário impresso. Cada entrega é pensada para maximizar reservas e valorizar o empreendimento.',
      },
    ],
    bullets: [
      'Fotos aéreas para Booking e Airbnb',
      'Vídeos cinematográficos em 4K',
      'Cobertura completa da estrutura',
      'Imagens da paisagem ao redor',
      'Material para redes sociais',
      'Atendimento em todo o Brasil',
    ],
  },
  {
    id: 'drone-para-eventos',
    title: 'Drone para Eventos e Filmagem Aérea',
    intro:
      'Registre seus eventos com uma perspectiva única usando drone profissional. Oferecemos filmagem aérea e captação de imagens de drone para eventos corporativos, casamentos, shows, festivais e inaugurações.',
    blocks: [
      {
        heading: 'Filmagem aérea de eventos corporativos',
        body: 'O drone para eventos corporativos captura a dimensão, público e energia do evento de um ângulo impossível com câmeras convencionais. Imagens aéreas profissionais de eventos são ideais para vídeos institucionais, relatórios e divulgação.',
      },
      {
        heading: 'Drone para casamentos e celebrações',
        body: 'Momentos especiais merecem uma perspectiva especial. A filmagem com drone em casamentos e celebrações cria registros cinematográficos emocionantes que eternizam a grandiosidade e beleza do evento.',
      },
      {
        heading: 'Cobertura aérea de shows e festivais',
        body: 'Shows e festivais ganham uma dimensão épica quando filmados com drone profissional. Capturamos a multidão, o palco e toda a atmosfera do evento com imagens aéreas em 4K e edição cinematográfica.',
      },
    ],
    bullets: [
      'Captação durante todo o evento',
      'Filmagem em 4K com estabilização',
      'Edição profissional inclusa',
      'Piloto certificado ANAC',
      'Operação segura em eventos',
      'Entrega rápida do material',
    ],
  },
  {
    id: 'drone-sao-paulo',
    title: 'Serviço de Drone em São Paulo',
    intro:
      'Somos referência em serviço de drone em São Paulo. Oferecemos filmagem aérea, captação de imagens com drone e produção de vídeos aéreos em toda a região metropolitana de SP, com pilotos certificados e equipamentos profissionais.',
    blocks: [
      {
        heading: 'Filmagem aérea em São Paulo e região',
        body: 'Atendemos São Paulo capital, Grande SP e interior com serviço completo de drone profissional. Nossa equipe conhece as regulamentações locais e obtém todas as autorizações necessárias para voos seguros e legais em SP.',
      },
      {
        heading: 'Drone para empresas em São Paulo',
        body: 'Empresas de São Paulo contam com a Ergon para imagens aéreas de empreendimentos, eventos corporativos, canteiros de obras e material institucional. O drone profissional revela São Paulo de uma perspectiva única e impactante.',
      },
      {
        heading: 'Cobertura em toda São Paulo',
        body: 'Atuamos em todas as regiões de São Paulo: zona sul, zona norte, zona leste, zona oeste e centro, além da Grande SP e litoral paulista. Cada projeto inclui planejamento de voo, captação aérea e edição profissional.',
      },
    ],
    bullets: [
      'Atendimento em toda Grande São Paulo',
      'Autorizações ANAC e DECEA',
      'Equipe local com conhecimento da região',
      'Orçamento rápido e sem compromisso',
      'Entrega expressa disponível',
      'Experiência com regulamentações de SP',
    ],
  },
  {
    id: 'captacao-aerea',
    title: 'Captação Aérea Profissional com Drone',
    intro:
      'A captação aérea é o processo de produção de fotos e vídeos utilizando drones profissionais. Oferecemos serviço completo de captação aérea com equipamentos DJI de última geração, pilotos certificados e edição profissional incluída.',
    blocks: [
      {
        heading: 'O que é captação aérea?',
        body: 'A captação aérea com drone consiste na produção de imagens e vídeos a partir de perspectivas elevadas, utilizando aeronaves remotamente pilotadas. Diferente da fotografia convencional, revela dimensões, contextos e belezas impossíveis de capturar do nível do solo.',
      },
      {
        heading: 'Captação aérea para agências e produtoras',
        body: 'Oferecemos serviço de captação aérea terceirizado para agências de publicidade e produtoras de vídeo. Integramos nossa equipe ao seu projeto, fornecendo pilotagem, equipamentos e material bruto ou editado conforme a necessidade da produção.',
      },
      {
        heading: 'Planejamento e execução de voo',
        body: 'Cada captação aérea começa com planejamento detalhado: definição de ângulos, rota de voo, horário ideal de luz e checklist de segurança. Nosso processo garante eficiência, segurança e material de altíssima qualidade em cada voo.',
      },
    ],
    bullets: [
      'Captação em 4K e fotos até 48MP',
      'Planejamento profissional de voo',
      'Equipamentos DJI certificados',
      'Serviço para agências e produtoras',
      'Edição e tratamento inclusos',
      'Orçamento personalizado por projeto',
    ],
  },
  {
    id: 'video-aereo-drone',
    title: 'Vídeo Aéreo com Drone em 4K',
    intro:
      'O vídeo aéreo com drone é uma das ferramentas mais poderosas de comunicação visual. Produzimos vídeos aéreos cinematográficos em resolução 4K, combinando movimentos de câmera suaves, composições estratégicas e edição profissional.',
    blocks: [
      {
        heading: 'Vídeos aéreos para marketing digital',
        body: 'Vídeos com drone geram até 3x mais engajamento em redes sociais. Produzimos vídeos aéreos otimizados para Instagram, YouTube, TikTok e LinkedIn, com formatos verticais e horizontais que maximizam o alcance e impacto da sua marca.',
      },
      {
        heading: 'Produção cinematográfica com drone',
        body: 'Nossos vídeos aéreos utilizam técnicas cinematográficas profissionais: reveal shots, orbit shots, tracking e flyover. Cada movimento de drone é planejado para contar a história do seu negócio com impacto visual e emocional.',
      },
      {
        heading: 'Edição profissional e entrega otimizada',
        body: 'Cada vídeo aéreo passa por edição profissional com color grading, estabilização avançada e trilha sonora. Entregamos em formatos otimizados para cada plataforma, garantindo qualidade máxima em qualquer tela.',
      },
    ],
    bullets: [
      'Vídeos em resolução 4K e slow motion',
      'Técnicas cinematográficas avançadas',
      'Color grading profissional',
      'Formatos para todas as plataformas',
      'Trilha sonora licenciada disponível',
      'Revisões incluídas no projeto',
    ],
  },
]

export const flyFaq: { question: string; answer: string }[] = [
  {
    question: 'Quanto custa uma filmagem com drone em São Paulo?',
    answer:
      'O valor de uma filmagem com drone profissional varia conforme a duração da captação, o número de locações e o nível de edição. A sessão padrão dura cerca de 2 horas, inclui imagens aéreas em 4K nos formatos horizontal e vertical e entrega em até 3 dias úteis. O orçamento é gratuito e sem compromisso.',
  },
  {
    question: 'Preciso de autorização para voar de drone?',
    answer:
      'Sim. Toda operação aérea comercial no Brasil exige cadastro do equipamento no SISANT (ANAC), autorização de voo pelo SARPAS (DECEA) e seguro de responsabilidade civil (RETA). Operamos com piloto certificado ANAC e toda a documentação regularizada.',
  },
  {
    question: 'Vocês gravam em formato vertical e horizontal?',
    answer:
      'Sim. Captamos em formato horizontal (16:9) para sites, YouTube e apresentações, e também em formato vertical (9:16) otimizado para Instagram Reels, TikTok e Stories, na mesma sessão e sem custo adicional de retorno.',
  },
  {
    question: 'Em quanto tempo recebo as imagens e vídeos?',
    answer:
      'A entrega padrão é de até 3 dias úteis após a captação, incluindo edição profissional, tratamento de cor e exportação em formatos otimizados para cada plataforma.',
  },
  {
    question: 'Vocês atendem apenas São Paulo ou viajam para outras cidades?',
    answer:
      'Atendemos São Paulo capital, Grande São Paulo (Campinas, Santos, ABC, Guarulhos) e viajamos para qualquer cidade do Brasil.',
  },
  {
    question: 'Quais equipamentos vocês utilizam?',
    answer:
      'Utilizamos o drone DJI Mini 4 Pro com câmera de até 48MP e gravação em resolução 4K, um equipamento de última geração que garante estabilidade, precisão e qualidade de imagem superior.',
  },
]
