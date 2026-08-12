# ERGON — PORTFÓLIO / 9 CASE STUDIES
## Fonte editorial para implementação das páginas individuais

Este arquivo é a **fonte de verdade de conteúdo** para as páginas individuais de portfólio da Ergon.

## Estrutura editorial obrigatória

Todos os cases seguem a mesma jornada:

**01. O projeto → 02. O desafio → 03. A solução → 04. A experiência → 05. Tecnologia → 06. O resultado**

A estrutura é consistente, mas o layout não precisa ser uma cópia mecânica entre os cases. A composição visual pode responder à personalidade e ao tipo de projeto, mantendo o mesmo sistema de design da Ergon.

## Regras

- Não inventar métricas.
- Não inventar tecnologias.
- Não assumir escopo que não foi realizado pela Ergon.
- Não reduzir os cases a três parágrafos genéricos.
- O texto deve ter espaço para respirar e ser tratado como parte do design.
- A fonte **Agharti** deve ser usada somente em títulos/display.
- Corpo de texto, labels, navegação e UI devem continuar usando a fonte já definida no website atual da Ergon.
- Sempre que houver informação marcada como **PENDENTE**, verificar o repositório/projeto. Se não for possível confirmar, omitir a informação pública em vez de adivinhar.
- Tags aparecem no começo e no final do case.

---

# Índice, rotas sugeridas e referências visuais

| # | Projeto | Rota sugerida | Referência pública |
|---|---|---|---|
| 01 | GBC / Green Bay Car | `/portfolio/green-bay-car` | `https://www.gbccar.com.br/` |
| 02 | Ergon Fly | `/portfolio/ergon-fly` | `https://www.ergonagencia.com.br/` |
| 03 | Garagi | `/portfolio/garagi` | `https://garagifunilaria.lovable.app/` |
| 05 | Soccer Station | `/portfolio/soccer-station` | `https://soccerstation.com.br/` |
| 06 | Radar Navegando | `/portfolio/radar-navegando` | Produto interno / usar assets locais |
| 07 | Navegando MKT | `/portfolio/navegando-mkt` | `https://www.navegandomkt.com.br/` |
| 08 | Franco Gastrobar | `/portfolio/franco-gastrobar` | `https://francogastrobar.com.br/` quando acessível |
| 09 | 3WS Moldes e Equipamentos | `/portfolio/3ws-moldes` | `https://neto3ws.vercel.app/` |

## Taxonomia de tags

No início e no fim de cada case, mostrar tags relevantes em grupos ou em uma única linha bem desenhada.

### Tipo de projeto
Exemplos:
`Website Institucional` `Internal Tool` `CRM` `Digital Menu` `Ticketing` `Portfolio Website` `Audiovisual`

### Expertise
Exemplos:
`UX/UI` `SEO` `Development` `Content Strategy` `Lead Generation` `Automation` `Responsive Design` `Sales Intelligence`

### Tecnologia
Exemplos:
`Next.js` `React` `TypeScript` `Tailwind CSS` `Framer Motion` `Supabase`

### Integrações e ferramentas
Exemplos:
`Webmotors API` `OpenAI API` `Google Places API` `Mercado Pago` `Vercel`

Mostrar somente o que estiver confirmado no respectivo case ou no código real.


---

# ERGON — CASES DE PORTFÓLIO
## Documento-mestre

> Estrutura padrão dos cases:
> **01. O projeto · 02. O desafio · 03. A solução · 04. A experiência · 05. Tecnologia · 06. O resultado**
>
> Este documento deve refletir somente o escopo efetivamente realizado pela Ergon. Tecnologias ou resultados ainda não confirmados ficam sinalizados como pendentes.

---

# 01 — GBC / GREEN BAY CAR

**Website · Integração · SEO · Desenvolvimento**

Green Bay Car é uma loja de veículos localizada na Mooca, em São Paulo.

## 01. O projeto

A Green Bay Car procurou a Ergon para reconstruir sua presença digital e transformar o website em um canal realmente útil para a operação da loja.

O objetivo principal era criar um site próprio capaz de apresentar todo o estoque disponível, melhorar a presença da GBC nas buscas e manter as informações sempre atualizadas, sem criar mais uma etapa operacional para a equipe.

## 02. O desafio

O site anterior praticamente não gerava tráfego orgânico.

Além de uma estrutura pouco preparada para mecanismos de busca, existia uma camada de CAPTCHA que dificultava o acesso de crawlers como o Google e outras ferramentas de pesquisa, reduzindo a capacidade das páginas de serem descobertas e indexadas.

Outro problema estava na forma como o estoque era apresentado. Os veículos ficavam concentrados em uma estrutura genérica de estoque, limitando o potencial de cada automóvel aparecer individualmente em pesquisas específicas.

Antes:

`gbccar.com.br/estoque`

A nova arquitetura precisava transformar cada veículo em uma página própria e indexável.

## 03. A solução

A solução começou pela integração do website diretamente ao estoque já administrado pela Green Bay Car na Webmotors.

Em vez de criar dois processos diferentes, conectamos a API da Webmotors ao novo site.

A lógica operacional passa a ser simples:

**Veículo publicado na Webmotors → entra no site.**

**Veículo removido da Webmotors → sai do site.**

Nenhum estoque precisa ser atualizado manualmente em dois lugares.

A Webmotors continua fazendo parte da rotina operacional da loja, enquanto o website próprio passa a funcionar como uma plataforma independente de apresentação, aquisição e pesquisa.

## 04. A experiência

Além de reconstruir a estrutura técnica, o projeto foi pensado para facilitar a descoberta dos veículos.

Cada automóvel passou a possuir sua própria página e endereço individual.

Antes:

`gbccar.com.br/estoque`

Agora:

`gbccar.com.br/nome-do-carro`

Isso transforma cada veículo em uma página independente, capaz de apresentar suas próprias informações e de ser encontrada por buscas relacionadas àquele modelo.

O resultado é uma navegação mais clara para o usuário e uma arquitetura muito mais preparada para SEO.

## 05. Tecnologia

**API Webmotors · Integração de estoque · Páginas dinâmicas · SEO técnico · URLs individuais por veículo · Website responsivo**

A arquitetura conecta o estoque da Webmotors ao website da Green Bay Car, permitindo a criação e remoção automática das páginas dos veículos de acordo com as alterações realizadas na plataforma.

**PENDENTE:** confirmar framework, infraestrutura e stack completa antes da publicação final do case.

## 06. O resultado

A Green Bay Car deixou de ter apenas uma página institucional com uma listagem de veículos e passou a possuir uma estrutura digital conectada diretamente à sua operação.

O estoque é atualizado automaticamente, cada carro possui uma página própria e o site passa a ter muito mais possibilidades de ser encontrado a partir de pesquisas específicas por marca, modelo e veículo.

**Sem duplicar trabalho.  
Sem manter dois estoques.  
Com a operação da Webmotors conectada diretamente ao canal próprio da marca.**

### Direção visual do resultado

Inserir a foto do cliente enviada para o case, acompanhada de um balão com a frase:

**“Cliente feliz, contrato fechado e mimo recebido!”**

---

# 02 — ERGON FLY

**Website · SEO · Audiovisual · Drone**

## 01. O projeto

Ergon Fly é a vertente audiovisual da Ergon dedicada à captação profissional com drones para empresas, marcas, eventos, imóveis, turismo e produções.

O projeto precisava criar uma presença digital própria para apresentar a qualidade das filmagens, mostrar o portfólio realizado e transformar pesquisas por serviços de drone em novas oportunidades comerciais.

## 02. O desafio

O objetivo não era apenas criar uma página visualmente impactante.

O site precisava comunicar a qualidade do equipamento e das filmagens, funcionar como portfólio e, ao mesmo tempo, possuir uma estrutura preparada para SEO.

A missão era fazer com que a Ergon Fly pudesse ser encontrada por pessoas e empresas que já estivessem pesquisando por captação aérea e serviços profissionais de drone.

## 03. A solução

Estruturamos o projeto para unir três funções dentro da mesma experiência:

**apresentar o serviço, provar a qualidade do trabalho e gerar descoberta orgânica.**

O conteúdo foi organizado para explicar aplicações da captação aérea, apresentar os equipamentos utilizados e criar uma estrutura de páginas e conteúdos capaz de trabalhar pesquisas relacionadas ao serviço.

O website também funciona como uma extensão comercial da Ergon Fly, permitindo que potenciais clientes entendam rapidamente o tipo de produção oferecida e visualizem trabalhos anteriores.

## 04. A experiência

O audiovisual é o protagonista.

A experiência foi construída para dar espaço às imagens e filmagens, utilizando o próprio trabalho realizado pela Ergon Fly como principal argumento comercial.

O portfólio ocupa uma posição central na navegação e é acompanhado por conteúdos que explicam aplicações, diferenciais e possibilidades de produção.

A intenção é que o usuário consiga entender a qualidade do serviço antes mesmo de entrar em contato.

## 05. Tecnologia

**SEO técnico · Arquitetura de páginas · Conteúdo indexável · Design responsivo · Portfólio audiovisual**

**PENDENTE:** confirmar stack exata. Hipótese mencionada internamente: React/Vite, ainda não tratar como informação publicada.

## 06. O resultado

A Ergon Fly ganhou uma presença digital própria, preparada não apenas para apresentar trabalhos realizados, mas também para ser encontrada por quem já procura esse tipo de serviço.

O website transforma **portfólio, informação técnica e SEO** em um único canal de aquisição.

**PENDENTE FUTURO:** adicionar dados de Search Console quando houver uma janela relevante de medição.

---

# 03 — GARAGI

**Website Institucional · Internal Tool · CRM · UX/UI · Development**

## 01. O projeto

A Garagi é uma oficina familiar especializada em funilaria e serviços automotivos.

O projeto nasceu a partir de duas necessidades complementares: melhorar a presença digital da empresa para quem chega de fora e organizar melhor uma parte importante da operação para quem trabalha dentro dela.

A Ergon desenvolveu tanto o **website institucional da Garagi** quanto um **sistema interno de orçamentos e acompanhamento comercial**, criando duas experiências diferentes conectadas ao mesmo negócio.

O site institucional apresenta a empresa, seus serviços e sua identidade de forma muito mais atual, enquanto a ferramenta interna organiza a rotina de orçamentos, tarefas e follow-ups.

## 02. O desafio

Externamente, a Garagi precisava de uma presença digital que transmitisse melhor a qualidade do trabalho realizado pela oficina e facilitasse o entendimento dos serviços.

Internamente, existia outro problema.

O orçamento é uma etapa central da operação de uma oficina. Quando cada orçamento é criado de uma forma diferente e não existe um ambiente central para acompanhar clientes, pendências e retornos, informações importantes passam a depender de controles dispersos e da memória de quem administra o negócio.

O desafio era resolver as duas pontas sem criar complexidade desnecessária:

**apresentar melhor a empresa para o cliente e organizar melhor a operação para o dono.**

## 03. A solução

A Ergon trabalhou o projeto em duas frentes.

### Presença digital

Criamos um website institucional para apresentar a Garagi de maneira mais contemporânea, visual e profissional.

A experiência organiza os principais serviços da oficina, reforça sua identidade e cria um ponto digital próprio para clientes que procuram conhecer melhor a empresa antes de entrar em contato.

O website público pode ser utilizado como referência visual do case:

`https://garagifunilaria.lovable.app/`

### Sistema interno

Antes de desenvolver a ferramenta, estudamos como a Garagi trabalhava.

A partir desse processo, desenhamos um sistema interno no qual o responsável preenche um formulário com as informações necessárias e consegue manter um padrão para os orçamentos enviados aos clientes.

Em vez de obrigar a oficina a adaptar sua operação a um CRM genérico, a ferramenta foi construída ao redor da rotina real da empresa.

O sistema também passou a concentrar informações comerciais e operacionais relacionadas aos orçamentos.

## 04. A experiência

As duas interfaces possuem objetivos diferentes.

No website institucional, a prioridade é transmitir confiança, apresentar os serviços e tornar a Garagi mais fácil de entender e contactar.

No sistema interno, a prioridade é reduzir etapas.

O responsável consegue registrar as informações necessárias para cada orçamento e visualizar o andamento das oportunidades em um único ambiente.

A experiência prioriza rapidez, clareza e poucos passos para as ações mais frequentes.

### Direção visual sugerida para o case

O case pode alternar entre as duas camadas do projeto:

**website institucional → presença da marca → sistema interno → formulário → orçamento → controle → follow-up**

Isso ajuda a mostrar que a Ergon não resolveu apenas uma tela, mas diferentes pontos da jornada da empresa.

## 05. Tecnologia

**Website responsivo · Sistema web · Formulários estruturados · Dashboard · CRM interno · Gestão de tarefas · UX/UI**

O website institucional está publicado atualmente em:

`https://garagifunilaria.lovable.app/`

**PENDENTE:** confirmar a stack técnica completa do website e do sistema interno diretamente no projeto/repositório antes de publicar tecnologias nominais no case.

**PENDENTE:** confirmar como o orçamento final é enviado ao cliente: PDF, WhatsApp, impressão ou outro fluxo.

## 06. O resultado

A Garagi passou a ter uma presença digital mais alinhada à qualidade do seu trabalho e, ao mesmo tempo, uma ferramenta interna construída para a própria rotina.

Do lado de fora, clientes encontram uma empresa mais bem apresentada, com seus serviços organizados em uma experiência digital própria.

Do lado de dentro, o que começou como uma ferramenta para padronizar orçamentos evoluiu para um pequeno sistema de gestão comercial.

Hoje o responsável consegue controlar:

- orçamentos enviados;
- tarefas da semana;
- oportunidades em andamento;
- follow-ups;
- clientes que precisam de retorno.

Na prática, o projeto atua nas duas extremidades do negócio:

**melhor presença para quem chega e melhor controle para quem opera.**

### Frase de destaque sugerida

**“Uma experiência para o cliente. Outra para quem faz a operação acontecer.”**

---

# 05 — SOCCER STATION

**Website · UX/UI · Ticketing · Development · Mercado Pago**

## 01. O projeto

A Soccer Station chegou até a Ergon com um site antigo, construído majoritariamente a partir de imagens e que já não acompanhava a operação da empresa.

O novo projeto precisava cumprir duas funções muito claras:

**explicar melhor as principais experiências da Soccer Station e transformar o website em uma ferramenta de venda.**

## 02. O desafio

A Soccer Station recebe um volume relevante de tráfego, então uma simples modernização visual não resolveria o problema.

Era necessário criar uma experiência rápida e intuitiva, capaz de fazer com que alguém que ainda não conhecesse a empresa entendesse em poucos segundos o que ela oferece e encontrasse facilmente o caminho para contratar ou comprar.

A arquitetura também precisava explicar com clareza os **dois produtos principais** da operação, evitando misturar jornadas e objetivos diferentes.

**Soccer Corp não é o foco principal deste case.**

## 03. A solução

Reestruturamos o website para apresentar os principais produtos da Soccer Station de forma muito mais clara, criando jornadas específicas para cada tipo de usuário.

Conteúdo, hierarquia e pontos de conversão foram reorganizados para levar o visitante da descoberta até a ação com o mínimo possível de fricção.

Mas o projeto não terminou no website.

A Ergon também desenvolveu uma **plataforma própria de ticketing**, permitindo que a Soccer Station comercialize ingressos diretamente em seu próprio ecossistema digital.

O cliente consegue acessar a experiência e concluir a compra na plataforma, reduzindo a dependência de empresas terceirizadas para intermediar a venda.

## 04. A experiência

Como o website é destino de tráfego comercial, UX e conversão foram partes centrais do projeto.

A lógica da experiência é:

**entender → escolher → comprar**

Informação, navegação e chamadas para ação foram organizadas para reduzir dúvidas e encurtar o caminho até a conversão.

No mobile, essa prioridade se torna ainda mais importante: menos fricção entre descobrir a Soccer Station e realizar a ação desejada.

A interface precisava transmitir o universo visual e experiencial da empresa sem competir com o objetivo comercial.

## 05. Tecnologia

**Website responsivo · Plataforma própria de ticketing · Vercel · Mercado Pago · Checkout online · UX de conversão · SEO técnico**

A plataforma própria de ingressos está hospedada na **Vercel** e utiliza **Mercado Pago** para processamento dos pagamentos.

**IMPORTANTE:** a ticketing desenvolvida pela Ergon ainda está em ambiente Vercel e não deve ser confundida com estruturas públicas de venda atualmente encontradas em outros domínios.

**PENDENTE:** confirmar framework e demais componentes da stack.

## 06. O resultado

A Soccer Station deixou de ter um website essencialmente informativo e passou a possuir uma estrutura digital conectada diretamente ao negócio.

O novo site apresenta melhor seus produtos principais, conduz usuários por jornadas mais claras e foi pensado para receber tráfego com foco em conversão.

Com a criação da ticketing própria, a empresa também passa a ter maior controle sobre a experiência de venda e reduz a dependência de plataformas terceirizadas e dos custos associados à intermediação.

**De apresentar a experiência a vender a experiência dentro do mesmo ecossistema.**

**PENDENTE:** confirmar exatamente os dois produtos que serão tratados como protagonistas no texto final.

---

# 06 — RADAR NAVEGANDO

**Internal Tool · CRM · AI · Sales Intelligence · Development**

## 01. O projeto

A Navegando MKT é uma agência especializada em produção de conteúdo e crescimento orgânico para restaurantes.

Com uma operação comercial cada vez mais ativa, a empresa precisava transformar uma prospecção baseada em pesquisas e abordagens manuais em um processo mais organizado, rápido e orientado por dados.

A Ergon desenvolveu o **Radar Navegando**, uma plataforma interna de prospecção ativa capaz de encontrar estabelecimentos por região, organizar oportunidades, qualificar potenciais clientes e apoiar a abordagem comercial com inteligência artificial.

O objetivo principal foi **reduzir o trabalho operacional da equipe comercial e aumentar a qualidade dos leads abordados**.

## 02. O desafio

A prospecção de restaurantes envolvia uma sequência extensa de tarefas manuais: escolher uma região, pesquisar estabelecimentos, identificar quais realmente tinham potencial, encontrar informações comerciais, analisar a presença digital, procurar o decisor e construir uma abordagem personalizada.

Além do tempo gasto, havia outro problema: uma busca ampla pode retornar centenas de estabelecimentos, muitos deles sem relevância comercial para a Navegando.

O desafio não era simplesmente gerar uma lista maior de contatos.

Era criar um sistema capaz de **separar descoberta de oportunidade**, permitindo que a equipe concentrasse esforço apenas nos negócios que realmente valessem uma abordagem.

## 03. A solução

A Ergon estruturou o produto de acordo com as diferentes etapas da prospecção comercial.

Primeiro, o sistema permite criar campanhas por região e pesquisar estabelecimentos utilizando dados do Google Places.

Os resultados passam por filtros objetivos para eliminar categorias indesejadas, duplicidades e negócios fora do perfil definido.

Em seguida, a plataforma cria uma camada de **triagem**, na qual a equipe consegue aprovar, descartar ou revisar rapidamente cada oportunidade antes de consumir recursos de inteligência artificial.

Somente os leads aprovados seguem para preparação.

Nessa etapa, o sistema pode reunir informações adicionais, analisar a oportunidade comercial, apoiar a identificação do decisor e gerar uma abordagem personalizada utilizando OpenAI.

Por fim, os leads selecionados entram em um pipeline comercial próprio, permitindo acompanhar contato, follow-up, reunião, proposta e fechamento.

A lógica central é:

**um estabelecimento encontrado não é automaticamente um lead comercial.**

## 04. A experiência

A interface foi construída como uma ferramenta operacional, seguindo a identidade visual da Navegando MKT e evitando a aparência convencional de CRMs genéricos.

O produto utiliza direção visual escura, contrastes em laranja e uma hierarquia voltada para a leitura rápida de grandes volumes de informação.

A experiência foi organizada em áreas específicas para cada momento da prospecção:

### Descoberta
Pesquisa de novos estabelecimentos por região.

### Seleção
Aprovação ou descarte rápido das oportunidades encontradas.

### Preparação
Análise do lead, informações relevantes, decisor e construção da abordagem comercial.

### Pipeline
Visualização em Kanban e movimentação dos leads entre as etapas.

### Hoje
Central de tarefas, follow-ups e oportunidades que precisam de atenção.

A prioridade de UX foi reduzir fricção:

**menos telas abertas, menos confirmações desnecessárias e mais ações realizadas diretamente no contexto do lead.**

### Direção visual sugerida para o case

Apresentar o produto em sequência:

**região → descoberta → seleção → preparação → pipeline**

Frase de destaque sugerida:

**“Encontrar empresas é fácil. Encontrar oportunidades é outra história.”**

## 05. Tecnologia

`Next.js` `React` `TypeScript` `Supabase` `OpenAI API` `Google Places API` `Vercel` `Tailwind CSS` `Responsive Design`

A plataforma foi construída em **Next.js e TypeScript**, publicada pela Vercel e utiliza Supabase como base para autenticação, persistência dos leads, histórico e estrutura comercial.

A integração com **Google Places API** permite descobrir estabelecimentos a partir das regiões escolhidas pela equipe.

A **OpenAI API** é utilizada apenas nas etapas em que inteligência artificial agrega valor, como análise qualitativa e criação de abordagens personalizadas.

A arquitetura separa tarefas determinísticas, como filtros e deduplicação, das tarefas de IA.

Isso reduz custo operacional e torna o sistema mais previsível e escalável.

**A IA não entra simplesmente porque está disponível. Ela entra onde melhora a decisão.**

## 06. O resultado

O Radar Navegando transformou uma rotina de prospecção fragmentada em um **processo comercial centralizado**, conectando descoberta, triagem, preparação e acompanhamento dentro de uma única plataforma.

A Navegando passou a ter uma base própria para mapear diferentes regiões, organizar centenas de estabelecimentos encontrados, descartar rapidamente oportunidades irrelevantes e direcionar análise aprofundada apenas aos leads selecionados.

Mais do que automatizar uma lista de contatos, o projeto criou uma infraestrutura interna para que a prospecção possa crescer de forma estruturada, com histórico, critérios de qualificação, inteligência artificial e acompanhamento de cada oportunidade até o fechamento.

Como o produto ainda está em evolução e é de uso interno, o case não depende de KPIs artificiais.

O principal resultado é a criação de **um processo que antes era manual e disperso e agora pode ser operado, medido e continuamente aprimorado dentro de um único sistema**.

**PENDENTE:** confirmar se a plataforma já está em uso operacional pela equipe comercial ou ainda em fase de desenvolvimento/testes.


---

# 07 — NAVEGANDO MKT

**Website · UX/UI · Portfólio · Lead Generation · Brand Presence**

## 01. O projeto

A Navegando MKT é uma agência especializada em produção de conteúdo e crescimento orgânico para restaurantes.

Apesar de já atender uma base relevante de clientes e gerar visibilidade para diversas marcas nas redes sociais, a própria Navegando ainda possuía uma presença digital limitada fora desses canais.

A Ergon entrou no projeto com o objetivo de transformar essa presença em um ativo de marca: um website capaz de apresentar a empresa, seus trabalhos, sua metodologia e seus resultados de forma clara e profissional.

O objetivo principal foi unir **autoridade, portfólio e geração de novos leads** dentro de uma única experiência.

## 02. O desafio

A Navegando já possuía reconhecimento por meio das redes sociais e do trabalho realizado para seus clientes, mas esse reconhecimento estava concentrado principalmente em plataformas como Instagram e TikTok.

Faltava um ambiente próprio que organizasse e apresentasse tudo aquilo que a empresa já havia construído.

Para uma agência que trabalha justamente com presença digital, não possuir um website estruturado, uma base própria de conteúdo e uma experiência clara para potenciais clientes criava uma lacuna entre a qualidade do trabalho entregue e a percepção institucional da marca.

O desafio era transformar audiência em **credibilidade, contexto e oportunidade comercial**.

## 03. A solução

A Ergon desenvolveu um website institucional e de portfólio capaz de apresentar a Navegando de forma muito mais completa.

A nova estrutura reúne:

- principais clientes;
- serviços oferecidos;
- metodologia de trabalho;
- cases de sucesso;
- resultados alcançados;
- formulário de contato e geração de leads.

Como grande parte da audiência da Navegando já chega por meio das redes sociais, o site foi pensado como uma continuação natural dessa jornada.

O usuário descobre a marca em um conteúdo, acessa o perfil, entra no website e encontra um ambiente preparado para explicar com mais profundidade **quem é a Navegando, o que ela faz e por que seus resultados são relevantes**.

## 04. A experiência

O site foi desenvolvido para funcionar como uma extensão da identidade já construída pela Navegando nas redes sociais.

A linguagem visual mantém a personalidade da marca e leva essa estética para uma experiência mais institucional, sem transformar a empresa em uma agência genérica.

O portfólio ocupa um papel central.

Em vez de depender apenas de uma descrição institucional, o website utiliza clientes, projetos e resultados reais como argumento comercial.

A experiência também foi organizada para reduzir o caminho entre interesse e contato, utilizando chamadas para ação e formulário integrado para transformar visitas em oportunidades comerciais.

A lógica é simples:

**descobrir → entender → confiar → entrar em contato**

## 05. Tecnologia

**Website responsivo · Formulário de leads · Portfólio digital · SEO técnico · UX de conversão · Arquitetura de conteúdo**

O projeto foi estruturado para funcionar bem em dispositivos móveis, considerando que uma parcela importante do tráfego chega diretamente das redes sociais.

O formulário integrado transforma o website em um ponto ativo de captação, enquanto a estrutura de portfólio e cases permite ampliar progressivamente a presença orgânica da marca e criar novas páginas indexáveis.

**PENDENTE:** confirmar framework, hospedagem e stack técnica completa antes da publicação final do case.

## 06. O resultado

A Navegando deixou de depender exclusivamente das redes sociais para apresentar sua própria marca.

O novo website criou um ponto central para reunir clientes, metodologia, serviços e cases de sucesso, transformando o trabalho já realizado pela agência em **prova de autoridade**.

Ao mesmo tempo, o site passou a funcionar como parte do funil comercial.

Quem chega pelas redes sociais encontra uma experiência capaz de aprofundar o interesse, apresentar resultados e conduzir o visitante diretamente para um formulário de contato.

Mais do que criar uma presença institucional, o projeto deu à Navegando um ambiente próprio para transformar audiência em oportunidade.

**A empresa que fazia seus clientes serem encontrados também precisava ser encontrada.**


---

# 08 — FRANCO GASTROBAR / CARDÁPIO DIGITAL

**Digital Menu · UX/UI · SEO · Admin Panel · Development**

## 01. O projeto

O Franco Gastrobar chegou até a Ergon com um problema simples, mas recorrente na operação: os cardápios físicos exigiam manutenção constante.

Placas quebravam, informações precisavam ser atualizadas e qualquer alteração de preço, prato ou disponibilidade acabava dependendo de uma nova impressão ou substituição física.

A ideia inicial poderia ter terminado em um QR Code apontando para um PDF.

A Ergon propôs algo diferente: transformar o cardápio em uma **experiência digital própria**, acessível tanto para quem já está dentro do restaurante quanto para quem ainda está decidindo onde comer.

## 02. O desafio

Um cardápio de restaurante normalmente é pensado apenas para o momento em que o cliente já está sentado à mesa.

Isso desperdiça uma oportunidade importante.

Antes mesmo de chegar ao local, muitas pessoas pesquisam o restaurante, procuram o menu, querem entender a faixa de preço, conhecer os pratos ou simplesmente decidir se aquela experiência faz sentido para elas.

O desafio era criar uma solução que funcionasse nos dois momentos:

**dentro do restaurante, como cardápio;  
fora do restaurante, como presença digital.**

Além disso, o conteúdo precisava continuar fácil de atualizar pela própria equipe, sem depender da Ergon para cada alteração de prato ou disponibilidade.

## 03. A solução

Em vez de criar um arquivo estático, desenvolvemos um **cardápio digital em formato de website**.

O acesso pode acontecer pelo QR Code no restaurante, mas o produto existe como uma página própria, navegável e indexável.

O conteúdo foi organizado por categorias e âncoras, permitindo que o usuário avance rapidamente entre diferentes partes do menu sem precisar percorrer uma página extensa.

Cada seção foi construída para combinar informação e apelo visual, utilizando nomes, descrições, preços e fotografias dos produtos para tornar a escolha mais simples.

Ao mesmo tempo, a estrutura do website permite que o Franco seja encontrado por pessoas que estão pesquisando o restaurante ou procurando informações sobre o cardápio antes da visita.

## 04. A experiência

A experiência foi pensada primeiro para o celular.

Dentro de um restaurante, ninguém quer ampliar PDF, procurar página ou esperar um arquivo pesado carregar.

Por isso, o cardápio utiliza uma navegação visual e direta, com:

- categorias acessíveis por âncoras;
- menu organizado por seções;
- fotografias dos pratos;
- leitura rápida de nome, descrição e preço;
- navegação contínua sem troca desnecessária de telas.

A interface permite que o cliente vá diretamente ao que procura e, ao mesmo tempo, explore outros itens de forma natural.

O objetivo não era simplesmente digitalizar o cardápio físico.

Era **projetar uma experiência de escolha para o ambiente digital**.

## 05. Tecnologia

**Website responsivo · Cardápio dinâmico · Painel administrativo · SEO técnico · Navegação por âncoras · Gestão de conteúdo**

Além da experiência pública, o projeto possui uma camada administrativa.

Por meio do painel, os responsáveis pelo Franco conseguem gerenciar o conteúdo do cardápio sem depender de uma alteração direta no código ou de uma nova publicação manual pela Ergon.

Itens podem ser adicionados, removidos ou atualizados de acordo com a operação do restaurante.

Essa arquitetura transforma o cardápio em um produto vivo, capaz de acompanhar mudanças de disponibilidade, novos pratos e atualizações comerciais.

**PENDENTE:** confirmar stack técnica completa, framework, banco de dados e infraestrutura do painel administrativo.

## 06. O resultado

O Franco deixou de depender de um cardápio físico como única referência para apresentar seus produtos.

Hoje, o mesmo ambiente digital atende dois públicos diferentes:

**quem já está no restaurante e precisa escolher o que pedir;  
e quem ainda está fora e quer conhecer o que o Franco oferece.**

A equipe também ganhou autonomia para manter o conteúdo atualizado através do painel administrativo, reduzindo a dependência de impressões, substituições físicas e alterações técnicas para tarefas simples.

Mais do que substituir uma placa por um QR Code, o projeto transformou o cardápio em **um novo ponto de contato digital entre o restaurante e seus clientes**.

### Frase de destaque sugerida

**“Não colocamos o cardápio na internet. Transformamos o cardápio em parte da presença digital do restaurante.”**


---

# 09 — 3WS MOLDES E EQUIPAMENTOS

**Website · UX/UI · SEO · Development · Industrial**

## 01. O projeto

A 3WS Moldes e Equipamentos atua na **compra, venda, intermediação e consultoria técnica de moldes para injeção plástica, porta-moldes, bases para estampos e equipamentos industriais**.

A Ergon foi responsável por repensar a presença digital da empresa, transformando um site com abordagem predominantemente institucional em uma experiência mais comercial, técnica e alinhada à dimensão da operação da 3WS.

O objetivo foi criar um site capaz de **gerar autoridade, apresentar melhor os serviços e transformar o grande volume de ferramentas e oportunidades disponíveis em um diferencial percebido pelo mercado**.

## 02. O desafio

A 3WS já possuía presença digital, mas o site anterior não traduzia a força da operação.

A comunicação dedicava muito espaço à história e ao institucional, enquanto informações importantes para potenciais compradores e vendedores tinham pouco protagonismo.

Diferenciais como o estoque superior a **1.500.000 kg em ferramentas**, a compra e venda por quilo, a variedade de moldes e a possibilidade de reaproveitamento de ferramentas não apareciam com a força necessária.

Além disso, a estrutura visual e a experiência de navegação precisavam evoluir para transmitir uma empresa **mais sólida, técnica e contemporânea**, além de criar uma base melhor para SEO e geração de contatos.

## 03. A solução

A Ergon reorganizou a arquitetura do site colocando **serviços e oportunidades comerciais antes do conteúdo institucional**.

Compra, venda, intermediação e consultoria passaram a ter uma apresentação mais clara, enquanto categorias como moldes automotivos, linha branca, utilidades domésticas, porta-moldes e bases para estampos ganharam espaço próprio.

Também trabalhamos estrategicamente termos importantes para o negócio, como **moldes usados, moldes de segunda mão, porta-moldes, compra e venda por quilo e lotes industriais**, aproximando a linguagem do site da maneira como potenciais clientes realmente procuram essas oportunidades.

O resultado é uma estrutura que explica rapidamente **o que a 3WS faz, o que compra, o que vende e por que vale a pena falar com ela**.

## 04. A experiência

A nova direção visual abandona a aparência de um site industrial convencional para construir uma experiência mais **editorial, técnica e premium**.

A Ergon trabalhou uma identidade baseada em tons metálicos e industriais, tipografia de alto impacto, grandes fotografias, hierarquia mais forte e maior uso de espaço negativo.

O conteúdo ganhou diferentes ritmos ao longo da navegação, combinando **composições assimétricas, imagens em escala, textos laterais, seções interativas, movimentos durante o scroll e microinterações**.

As animações foram pensadas como parte da experiência, ajudando a apresentar informações e conduzir a navegação sem transformar o site em uma vitrine de efeitos.

## 05. Tecnologia

`Next.js` `React` `TypeScript` `Tailwind CSS` `Framer Motion` `Vercel` `SEO` `Responsive Design`

O novo site foi estruturado com uma stack moderna, permitindo maior controle sobre **performance, responsividade, animações e evolução futura da plataforma**.

A estrutura também foi preparada com atenção especial a SEO técnico, incluindo hierarquia semântica de conteúdo, metadados, sitemap, dados estruturados e otimização de imagens e performance.

O Framer Motion foi utilizado para construir interações e movimentos diretamente integrados à interface, mantendo a experiência leve e consistente.

## 06. O resultado

Mais do que uma mudança estética, o projeto reposiciona digitalmente a 3WS.

A empresa passa a ter um site que comunica melhor **o tamanho da operação, a especialização técnica e as oportunidades comerciais existentes em seu estoque**, ao mesmo tempo em que facilita o entendimento dos serviços e o contato de quem deseja comprar ou vender.

A nova presença digital cria uma base mais preparada para **autoridade, SEO, geração de leads e crescimento**, aproximando a percepção da marca no ambiente digital da dimensão que a 3WS já possui no mercado industrial.

**De um site que apresentava a empresa para uma plataforma que apresenta o negócio.**
