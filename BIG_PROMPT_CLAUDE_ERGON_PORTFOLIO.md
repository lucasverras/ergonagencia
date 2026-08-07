# BIG PROMPT — IMPLEMENTE AS 9 PÁGINAS DE CASE DO PORTFÓLIO ERGON

Você está trabalhando **dentro do repositório atual do website da Ergon**.

Sua tarefa é implementar de ponta a ponta as páginas individuais de case study para os 9 projetos do portfólio.

Existe um arquivo no projeto chamado:

`ERGON_PORTFOLIO_9_CASES.md`

Leia esse arquivo **inteiro** antes de alterar qualquer coisa. Ele é a **fonte de verdade editorial**.

Quero execução, não brainstorming.

Não pare para me devolver wireframe, plano ou checklist. Inspecione o projeto atual, entenda a arquitetura, implemente as páginas, faça as conexões no portfólio, busque os materiais públicos quando possível, valide tudo e só então volte com um resumo final objetivo.

---

# 0. AUTORIZAÇÃO DE EXECUÇÃO

Para cumprir esta tarefa, você está autorizado a:

- ler todo o repositório atual;
- localizar e reutilizar componentes existentes;
- criar novos componentes;
- criar novas rotas e páginas;
- editar o componente atual de portfólio;
- criar estruturas de dados para os cases;
- reorganizar código local quando isso melhorar a implementação sem quebrar outras páginas;
- usar terminal;
- rodar o projeto localmente;
- rodar lint, typecheck e build;
- usar navegador/browser tools;
- acessar as URLs públicas listadas neste prompt;
- inspecionar os sites públicos para obter contexto visual;
- gerar screenshots dos sites públicos quando a ferramenta disponível permitir;
- salvar screenshots/assets dentro do projeto em diretórios adequados;
- instalar uma dependência pequena somente quando ela for realmente necessária e compatível com a stack;
- reaproveitar bibliotecas já instaladas antes de adicionar novas;
- ajustar metadata, canonical, Open Graph e estrutura SEO das novas páginas;
- corrigir bugs diretamente relacionados à implementação;
- criar placeholders elegantes quando uma imagem real não puder ser obtida.

Não fique me pedindo autorização para cada arquivo.

Ao mesmo tempo:

- não apague conteúdo ou páginas não relacionadas;
- não altere secrets;
- não exponha chaves;
- não faça deploy destrutivo;
- não troque a stack principal do website;
- não reescreva o site inteiro;
- não invente métricas, stack ou resultados;
- não introduza uma biblioteca pesada para resolver algo simples.

Preserve tudo que já funciona.

---

# 1. OBJETIVO

Hoje a aba/seção de portfólio da Ergon mostra os projetos.

Agora cada item precisa ser clicável e abrir uma **página individual completa**, com profundidade suficiente para funcionar como um case study real.

Essas páginas devem mostrar não apenas “o que fizemos”, mas a jornada:

1. quem era o cliente;
2. qual era o contexto;
3. qual problema existia;
4. como a Ergon pensou;
5. qual solução foi criada;
6. como a UX foi resolvida;
7. quais tecnologias e ferramentas entraram;
8. qual foi o resultado;
9. quais partes reais do produto podem ser vistas.

A sensação precisa ser:

**Digital Product Studio + design editorial + produto real.**

Não quero template genérico de agência.

Não quero Dribbble sem conteúdo.

Não quero blocos gigantes de texto jogados em uma coluna.

Quero **cases editoriais, visuais, respirados e sofisticados**.

---

# 2. PROJETOS E ROTAS

Implemente os 9 cases:

1. GBC / Green Bay Car
2. Ergon Fly
3. Garagi
4. Mosaiclab
5. Soccer Station
6. Radar Navegando
7. Navegando MKT
8. Franco Gastrobar / Cardápio Digital
9. 3WS Moldes e Equipamentos

Rotas sugeridas:

- `/portfolio/green-bay-car`
- `/portfolio/ergon-fly`
- `/portfolio/garagi`
- `/portfolio/mosaiclab`
- `/portfolio/soccer-station`
- `/portfolio/radar-navegando`
- `/portfolio/navegando-mkt`
- `/portfolio/franco-gastrobar`
- `/portfolio/3ws-moldes`

Se o projeto atual já usar outro padrão de rotas, respeite a arquitetura existente. Não crie inconsistência só para seguir estes slugs literalmente.

O card atual de cada projeto na página de portfólio deve passar a apontar para a página individual correspondente.

---

# 3. AUDITORIA OBRIGATÓRIA ANTES DE IMPLEMENTAR

Antes de codar, investigue o projeto atual e descubra:

- framework;
- router;
- estrutura de pastas;
- componentes existentes;
- estrutura atual da página/aba de portfólio;
- tokens de cor;
- grid;
- largura máxima de conteúdo;
- breakpoints;
- header;
- footer;
- comportamento de scroll;
- animações já usadas;
- bibliotecas instaladas;
- sistema de ícones;
- fonte padrão do corpo;
- como a fonte **Agharti** está ou pode ser carregada a partir dos assets já existentes;
- tratamento atual de imagens;
- convenção de metadata;
- estrutura SEO.

A nova área precisa parecer parte do mesmo website.

Não crie um segundo design system dentro do projeto.

---

# 4. TIPOGRAFIA

## Agharti

Use **Agharti somente para títulos/display**.

Ela deve aparecer, por exemplo, em:

- nome do projeto;
- títulos principais;
- títulos das grandes seções;
- frases editoriais de impacto;
- números `01`, `02`, `03` quando fizer sentido.

Quero uma presença mais **condensada, vertical e editorial**.

Não use Agharti em:

- parágrafos;
- descrições longas;
- menus;
- botões pequenos;
- labels;
- tags;
- metadata;
- textos auxiliares.

## Corpo

Todo corpo de texto deve usar **a fonte que o website da Ergon já utiliza atualmente**.

Não introduza uma nova fonte para parágrafos.

Preserve pesos, tracking e personalidade visual do website.

---

# 5. LAYOUT BASE DO CASE

Todos os cases compartilham uma lógica, mas não precisam parecer clones.

Crie um sistema reutilizável de case study.

Sugestão de composição:

## HERO

No topo:

- breadcrumb ou retorno discreto para Portfólio;
- nome do projeto;
- descrição curta;
- ano, se houver informação real;
- categorias;
- tags;
- uma grande mídia/visual;
- opcionalmente link “Visitar projeto” quando houver URL pública relevante.

Exemplo conceitual:

`PORTFÓLIO / WEBSITE`

# Green Bay Car

Website conectado ao estoque da Webmotors para transformar cada veículo em uma oportunidade de descoberta.

`Website Institucional` `UX/UI` `SEO` `Development` `Webmotors API`

[ VISITAR PROJETO ↗ ]

Não use exatamente esse texto se o arquivo editorial disser outra coisa.

## INTRO VISUAL

Depois do hero, dê espaço para uma grande screenshot/mockup.

Pode ser:
- browser frame;
- imagem full bleed;
- composição de desktop + mobile;
- detalhe recortado da interface;
- grid de telas;
- vídeo se já existir como asset.

Evite mockups genéricos de notebook 3D se isso destoar do site.

Prefira mostrar o produto real.

---

# 6. JORNADA EDITORIAL OBRIGATÓRIA

Todo projeto precisa conter integralmente:

## 01. O projeto
## 02. O desafio
## 03. A solução
## 04. A experiência
## 05. Tecnologia
## 06. O resultado

O conteúdo de cada seção está em:

`ERGON_PORTFOLIO_9_CASES.md`

Use esse conteúdo como base.

Não transforme os parágrafos em um paredão.

Quebre o conteúdo através de:

- grids;
- colunas assimétricas;
- títulos laterais;
- frases grandes;
- imagens;
- números;
- pequenas legendas;
- screenshots;
- cards técnicos;
- sticky sections quando fizer sentido;
- blocos de comparação;
- linhas divisórias;
- bastante espaço negativo.

O usuário precisa conseguir **escanear** a página e também conseguir **ler profundamente**.

---

# 7. TAGS NO COMEÇO E NO FINAL

As tags são parte importante da página.

Devem existir no hero e voltar no encerramento do case.

Divida mentalmente as tags em quatro tipos:

### Tipo de projeto
Exemplos:
- Website Institucional
- Internal Tool
- CRM
- Digital Menu
- Ticketing
- Audiovisual
- Portfolio Website

### Expertise
Exemplos:
- UX/UI
- SEO
- Development
- Content Strategy
- Lead Generation
- Automation
- Responsive Design
- Sales Intelligence

### Tecnologia
Exemplos:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase

### Integrações/Ferramentas
Exemplos:
- Webmotors API
- OpenAI API
- Google Places API
- Mercado Pago
- Vercel

Não é obrigatório colocar headings “Tipo / Expertise / Tecnologia” se isso piorar o design.

Pode ser uma coleção única de pills/chips, desde que visualmente bem resolvida.

REGRA: **não invente tecnologia para preencher tag**.

---

# 8. IMAGENS E SCREENSHOTS

Quero cada página visualmente rica.

Você pode e deve buscar material nos sites públicos.

## URLs autorizadas como referência visual

### GBC / Green Bay Car
`https://www.gbccar.com.br/`

### Ergon Fly
`https://www.ergonagencia.com.br/`

Use especificamente a frente de drone / Ergon Fly disponível no ecossistema do site.

### Garagi
`https://garagifunilaria.lovable.app/`

Importante: o case da Garagi possui **duas frentes**:
1. site institucional;
2. sistema interno de orçamentos/CRM.

Use o site público para a camada institucional e assets locais/placeholders para o sistema interno quando não houver material acessível.

### Mosaiclab
`https://mosaiclab.com.br/`

### Soccer Station
`https://soccerstation.com.br/`

IMPORTANTE:
A ticketing desenvolvida pela Ergon ainda está em ambiente próprio/Vercel e não deve ser confundida com qualquer ticketing pública de terceiros encontrada no site.
Use imagens públicas apenas para representar o website/identidade da Soccer Station.
Para a ticketing própria, procure assets no repositório. Se não existirem, deixe placeholder planejado.

### Navegando MKT
`https://www.navegandomkt.com.br/`

### Franco Gastrobar
`https://francogastrobar.com.br/`

Se o domínio não estiver disponível ou não contiver o projeto correto, procure assets locais.
Não substitua por imagens aleatórias de restaurante.

### 3WS Moldes e Equipamentos
`https://neto3ws.vercel.app/`

### Radar Navegando
Produto interno.
Não procurar imagens aleatórias na web.
Procure screenshots/assets do produto dentro do projeto/repositório.
Se não houver, crie espaços de imagem elegantes e identificáveis para inserção posterior.

---

# 9. COMO CAPTURAR AS IMAGENS

Se possuir browser automation ou ferramenta de screenshot:

1. abra o site;
2. aguarde carregar;
3. capture trechos relevantes;
4. prefira screenshots limpos;
5. capture desktop e mobile quando isso enriquecer o case;
6. evite banners de cookies ou estados quebrados;
7. salve os arquivos com nomes semânticos.

Exemplo:

`/public/portfolio/gbc/gbc-home.webp`
`/public/portfolio/gbc/gbc-vehicle-page.webp`
`/public/portfolio/garagi/garagi-home.webp`

Otimize imagens sem destruir qualidade.

Não faça hotlink direto para screenshots externas se puder salvar assets locais legalmente acessíveis como screenshot de referência do próprio projeto do cliente.

Se não conseguir capturar:

- NÃO BLOQUEIE A IMPLEMENTAÇÃO;
- crie o container;
- mantenha aspect ratio correto;
- use um placeholder refinado;
- identifique no código de forma óbvia onde a mídia deve entrar depois.

Exemplo de comentário:

`// TODO case asset: screenshot do painel de orçamento Garagi`

O placeholder deve parecer parte do layout, não um quadrado cinza quebrado.

---

# 10. DIREÇÃO VISUAL

O site atual da Ergon é a referência principal.

Mantenha:

- paleta atual;
- linguagem de grid;
- comportamento de cursor quando já existir;
- header;
- footer;
- identidade de motion;
- estilo de bordas;
- ritmo tipográfico;
- personalidade digital da marca.

As novas páginas podem aprofundar a linguagem.

Quero:

- títulos grandes em Agharti;
- Agharti mais condensada;
- grids editoriais;
- números de seção marcantes;
- bastante respiro;
- texto com largura confortável;
- screenshots grandes;
- elementos que saem do grid em momentos pontuais;
- assimetria controlada;
- divisórias finas;
- tags pequenas e refinadas;
- microinterações;
- motion sutil;
- transições ao entrar na viewport;
- detalhes de hover;
- navegação fluida.

Não quero:

- excesso de glow;
- excesso de glassmorphism;
- efeitos 3D gratuitos;
- blobs;
- gradientes genéricos de IA;
- cards por toda parte;
- 15 elementos competindo na mesma viewport;
- animações que prejudiquem leitura;
- cara de template SaaS;
- cara de site feito por IA.

A regra é:

**conteúdo primeiro, direção de arte depois, efeito por último.**

---

# 11. RESPONSIVIDADE

Trate mobile como produto, não como versão encolhida.

Validar ao menos:

- desktop grande;
- laptop;
- tablet;
- mobile comum;
- mobile estreito.

No mobile:

- títulos Agharti podem reduzir bastante sem perder presença;
- não permitir overflow horizontal;
- tags devem quebrar naturalmente;
- screenshots devem preservar legibilidade;
- grids assimétricos devem virar uma sequência coerente;
- sticky sections devem ser desativadas se atrapalharem;
- conteúdo precisa manter boa largura de linha;
- botões precisam continuar clicáveis;
- nenhuma imagem pode ficar cortada sem intenção.

---

# 12. MOTION

Use a linguagem de animação já existente.

Se houver Framer Motion no projeto, reaproveite.

Se não houver, não instale automaticamente só para fazer fade.

Priorize:

- fade/translate discreto;
- reveal de imagem;
- pequenas mudanças de escala;
- stagger muito leve;
- linhas que se expandem;
- mudanças sutis de opacidade;
- hover inteligente em tags e links;
- transição entre cases quando já houver infraestrutura.

Respeite `prefers-reduced-motion`.

---

# 13. COMPONENTIZAÇÃO

Não crie nove páginas gigantes totalmente independentes com código duplicado.

Crie uma arquitetura de case reutilizável.

Exemplo conceitual:

- `CaseHero`
- `CaseTags`
- `CaseSection`
- `CaseMedia`
- `CaseQuote`
- `CaseTechStack`
- `CaseResult`
- `CaseNextProject`

Pode haver componentes especiais para um case quando necessário.

O conteúdo pode ser movido para uma estrutura de dados ou arquivos separados se isso estiver alinhado à arquitetura existente.

Não force uma abstração ruim só para dizer que está componentizado.

---

# 14. PÁGINA DE PORTFÓLIO EXISTENTE

Não esqueça da origem da navegação.

Na página atual de Portfólio:

- todos os 9 projetos devem estar presentes;
- card/linha/projeto deve ser clicável;
- hover deve indicar que existe um case completo;
- manter a estética atual;
- não quebrar filtros, animações ou grid existente;
- inserir a 3WS, que estava no comparativo mas não estava necessariamente listada no website;
- garantir que Garagi reflita agora tanto **Website Institucional** quanto **Internal Tool**;
- manter Radar Navegando e Navegando MKT como projetos diferentes.

Caso hoje haja um modal ou interação que apenas mostra preview, transforme a CTA principal em acesso ao case completo sem destruir uma interação útil existente.

---

# 15. SEO DAS PÁGINAS DE CASE

Cada case precisa possuir metadata própria.

Criar:

- title;
- meta description;
- canonical;
- Open Graph;
- Twitter metadata se já houver padrão;
- heading structure correta;
- URL limpa;
- texto indexável;
- alt text real nas imagens;
- links externos com atributos adequados;
- structured data quando fizer sentido e já houver infraestrutura para isso.

Não keyword-stuff.

O foco é indexabilidade + semântica + conteúdo real.

---

# 16. ACESSIBILIDADE

Garantir:

- contraste;
- foco visível;
- navegação por teclado;
- links identificáveis;
- alt text;
- headings em ordem lógica;
- buttons vs links semanticamente corretos;
- `aria` apenas onde necessário;
- reduced motion;
- sem texto importante exclusivamente dentro de imagem.

---

# 17. CASOS ESPECÍFICOS

## GBC / Green Bay Car

Destaque especialmente:

- problema do site anterior;
- indexação;
- integração Webmotors;
- estoque sincronizado;
- URLs individuais por veículo;
- SEO.

No resultado, existe uma orientação editorial importante:

usar a foto fornecida do cliente, se ela estiver disponível no repositório/assets, com um balão contendo:

**“Cliente feliz, contrato fechado e mimo recebido!”**

Se a foto não estiver disponível no projeto, crie o espaço correto e um TODO claro.

---

## Ergon Fly

O audiovisual precisa dominar a página.

Priorize:

- takes;
- frames;
- imagens grandes;
- equipamentos;
- portfólio;
- SEO;
- diferentes aplicações de captação.

Evite tornar o case um catálogo técnico de drone.

---

## Garagi

Este case agora possui DUAS FRENTES.

### 1. Website institucional
Referência:
`https://garagifunilaria.lovable.app/`

### 2. Sistema interno
Orçamentos, controle, tarefas e follow-up.

A página deve aproveitar isso visualmente.

Uma boa narrativa de composição é:

**fora da empresa → dentro da operação**

ou

**presença digital → ferramenta operacional**

Frase editorial disponível no arquivo de conteúdo:

**“Uma experiência para o cliente. Outra para quem faz a operação acontecer.”**

---

## Mosaiclab

Este case deve ter sensação mais editorial.

Valorize:

- nova identidade;
- organização da narrativa;
- conteúdo;
- blog;
- serviços apresentados por valor/insight;
- relação entre website e apresentações.

Não atribua à Ergon uma etapa do rebranding que não esteja confirmada no arquivo ou repositório.

---

## Soccer Station

O case precisa mostrar:

- site anterior pouco funcional/antigo;
- clareza dos produtos principais;
- UX para alto volume de tráfego;
- conversão;
- ticketing própria;
- Mercado Pago;
- Vercel.

**Soccer Corp não é o protagonista.**

A ticketing própria ainda não deve ser buscada em sites públicos de terceiros.

---

## Radar Navegando

Trate como produto digital real.

Quero, visualmente, uma progressão como:

**região → descoberta → seleção → preparação → pipeline**

Tecnologias já informadas:

- Next.js
- React
- TypeScript
- Supabase
- OpenAI API
- Google Places API
- Vercel
- Tailwind CSS

Frase disponível:

**“Encontrar empresas é fácil. Encontrar oportunidades é outra história.”**

---

## Navegando MKT

A narrativa central é forte:

a empresa fazia seus clientes aparecerem nas redes sociais, mas ainda precisava construir sua própria autoridade fora delas.

Destaque:

- presença digital;
- portfólio;
- cases;
- clientes;
- formulário;
- geração de leads;
- mobile;
- tráfego vindo do Instagram.

Frase disponível:

**“A empresa que fazia seus clientes serem encontrados também precisava ser encontrada.”**

---

## Franco Gastrobar

Não trate como “QR Code”.

É um **produto digital de cardápio**.

Destaque:

- problema de cardápio físico;
- uso dentro e fora do restaurante;
- SEO;
- navegação por âncoras;
- fotos;
- categorias;
- experiência mobile;
- painel administrativo;
- adicionar/remover/editar itens.

Frase disponível:

**“Não colocamos o cardápio na internet. Transformamos o cardápio em parte da presença digital do restaurante.”**

---

## 3WS Moldes e Equipamentos

Referência:
`https://neto3ws.vercel.app/`

Este case precisa comunicar:

- escala industrial;
- mais de 1.500.000 kg em ferramentas, conforme conteúdo fornecido;
- compra;
- venda;
- intermediação;
- consultoria;
- SEO;
- direção visual industrial/editorial;
- motion;
- arquitetura comercial.

Stack já informada:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

Frase:

**“De um site que apresentava a empresa para uma plataforma que apresenta o negócio.”**

---

# 18. NAVEGAÇÃO ENTRE CASES

No final de cada página:

1. repetir as tags de projeto/tecnologia de maneira elegante;
2. oferecer CTA para contato quando estiver alinhado ao site atual;
3. mostrar **Próximo projeto**;
4. permitir continuar navegando pelo portfólio sem voltar obrigatoriamente à listagem.

Sugestão:

`PRÓXIMO PROJETO  →`

Nome grande em Agharti.

Pode incluir preview visual do próximo case.

Crie uma ordem circular entre os 9 projetos.

---

# 19. PERFORMANCE

Não destrua a performance para deixar o portfólio bonito.

Validar:

- imagens otimizadas;
- lazy loading quando adequado;
- prioridade somente para hero;
- bundle;
- fontes;
- animações;
- hydration;
- layout shifts;
- console;
- links quebrados.

Se Next.js estiver sendo usado, utilize as ferramentas nativas apropriadas de imagem e metadata.

Se for Vite/React, siga a melhor prática equivalente.

Não force APIs de Next em projeto Vite.

Primeiro descubra a stack.

---

# 20. VALIDAÇÃO FINAL

Antes de considerar concluído:

## Navegação
- os 9 cards abrem;
- nenhuma rota retorna 404;
- back/forward funciona;
- próximo projeto funciona.

## Conteúdo
- todos os 9 cases existem;
- todas as 6 seções existem;
- nenhuma parte importante do arquivo editorial foi perdida;
- não há lorem ipsum;
- não há métrica inventada;
- não há stack inventada.

## Visual
- títulos Agharti;
- corpo com fonte atual do site;
- alinhamentos;
- espaçamento;
- imagens;
- placeholders intencionais;
- desktop;
- mobile.

## Técnico
- sem erro no console;
- sem erro de TypeScript;
- lint;
- build;
- links;
- metadata;
- imagens;
- imports;
- sem dependência quebrada.

Rode os comandos reais do projeto.

Corrija qualquer problema decorrente da implementação.

---

# 21. QUALIDADE ESPERADA

Faça uma última revisão visual como designer, não apenas como desenvolvedor.

Pergunte ao próprio resultado:

- parece uma página feita especificamente para a Ergon?
- o texto é agradável de ler?
- existe respiro?
- as imagens são protagonistas quando deveriam?
- cada case tem identidade própria sem quebrar o sistema?
- as tags ajudam ou viraram ruído?
- existe hierarquia?
- Agharti está sendo usada com intenção?
- os cases parecem profundos?
- um possível cliente entende o problema que resolvemos?
- existe algo com “cara de IA”?
- existe componente repetido demais?
- existe card demais?
- o mobile parece pensado?

Se alguma resposta for ruim, corrija antes de finalizar.

---

# 22. NÃO FAÇA

- não entregue apenas proposta;
- não pare no meio pedindo para eu escolher entre A ou B;
- não remova conteúdo para facilitar o layout;
- não use texto fake;
- não invente depoimentos;
- não invente métricas;
- não invente stack;
- não use screenshots sem relação com o cliente;
- não busque foto genérica para produto interno;
- não deixe links quebrados;
- não crie nove layouts completamente desconectados;
- não transforme tudo em cards;
- não use Agharti em textos longos;
- não mude o design global da Ergon sem necessidade;
- não publique segredos;
- não altere integrações de produção apenas para montar o case.

---

# 23. ENTREGA

Implemente tudo.

Ao terminar, volte apenas com:

1. resumo do que foi criado;
2. rotas dos 9 cases;
3. componentes principais criados/reutilizados;
4. quais screenshots reais conseguiu capturar;
5. quais espaços ficaram como placeholder e por quê;
6. qualquer informação técnica que não conseguiu confirmar;
7. resultado de lint/build/typecheck.

Não me devolva um novo prompt.

Não me devolva uma ideia.

**Volte com o portfólio funcionando.**
