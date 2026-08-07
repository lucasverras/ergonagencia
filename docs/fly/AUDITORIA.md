# Auditoria de conteúdo — ergonagencia.com.br (origem do /fly)

Capturado em 2026-08-06 via Playwright (renderização completa, SPA React/Lovable). Fonte bruta: `refs/fly/html/*.html`, `refs/fly/_summary.json`.

12 rotas confirmadas por scraping de links + cross-check com `sitemap.xml` (nenhuma rota oculta).

## Estrutura do site

- 1 home (`/`) + 10 landing pages de serviço/vertical (SEO programático) + 1 página de guia/conteúdo (`/guia-filmagem-com-drone`).
- Todas as páginas de serviço compartilham o mesmo layout: header fixo (Portfólio / Equipamento / Contato / CTA "Quero orçamento") → H1 + intro → 2-4 blocos H2 → bloco "Por que escolher a Ergon Agência?" (lista) → CTA de orçamento → "Serviços relacionados" (links cruzados) → footer.
- A página de guia (`/guia-filmagem-com-drone`) quebra esse padrão: sem o header de navegação padrão, formato editorial (FAQ), footer mais simples. Ver "Inconsistências" abaixo.

---

## 1. `/` (home)

**Meta**
- title: "Filmagem com Drone São Paulo | Imagens Aéreas 4K - Ergon Agência" (66 caracteres)
- description: "Filmagem com drone profissional em São Paulo. Imagens aéreas e vídeos em 4K para imobiliárias, restaurantes, eventos e empresas. Piloto certificado ANAC. Orçamento grátis." (~175 caracteres)
- canonical: `/` · og:type: website · og:image: `/og-image.jpg` (genérico, igual em todas as páginas) · robots: index, follow

**Headings (ordem)**
1. H1 — Filmagem aérea com drone profissional em São Paulo *(ver bug de texto abaixo)*
2. H2 — Mais que imagens aéreas.
   - H3 × 4 — Captura em 4K / Vídeo Cinematográfico / Edição Profissional / Piloto Certificado ANAC
3. H2 — Drone profissional para cada segmento
   - H3 × 4 — Imobiliárias & Construtoras / Hotéis & Resorts / Restaurantes & Gastronomia / Eventos & Casamentos
4. H2 — Portfólio
   - H3 × 4 — Imagens Rurais / Natureza / Logística / Avenidas
5. H2 — Equipamentos DJI de última geração
6. H2 — O que nossos clientes dizem
7. H2 — Perguntas frequentes
8. H2 — Solicite seu orçamento grátis
   - H3 × 3 — Serviços / Segmentos / Contato *(footer)*

**Texto, na ordem em que aparece**

> Portfólio · Equipamento · Contato · Quero orçamento
>
> **Filmagem aérea com drone profissional em São Paulo** — Imagens aéreas e vídeos em 4K para empresas, imobiliárias, restaurantes e eventos. Piloto certificado ANAC, equipamentos DJI e entrega em até 3 dias úteis. Gravamos em formato horizontal e vertical. [Quero orçamento] [Ver portfólio]
>
> **Mais que imagens aéreas.** Drone profissional em São Paulo. Imagens aéreas com drone profissional ajudam empresas em São Paulo a apresentar seus espaços com mais impacto. Captação aérea em 4K para imobiliárias, construtoras, restaurantes, hotéis e eventos. Sessão média de 2 horas com entrega em até 3 dias úteis. Podemos viajar para qualquer região do Brasil.
> - Captura em 4K — imagens em altíssima definição para campanhas, redes sociais e portais imobiliários.
> - Vídeo Cinematográfico — movimentos suaves que valorizam arquitetura, paisagens e eventos.
> - Edição Profissional — tratamento de cor e edição estratégica, formatos horizontal/vertical.
> - Piloto Certificado ANAC — operação segura, seguro RETA, autorização de voo em SP e região.
>
> **Drone profissional para cada segmento** — atendemos diferentes segmentos em SP e região.
> - Imobiliárias & Construtoras — fotos e vídeos de imóveis, loteamentos, acompanhamento de obras.
> - Hotéis & Resorts — valorize localização, estrutura e paisagem para Booking e Airbnb.
> - Restaurantes & Gastronomia — destaque ambiente, vista e localização.
> - Eventos & Casamentos — momentos com perspectiva cinematográfica.
>
> **Portfólio** — Confira nossos últimos voos: Imagens Rurais / Natureza / Logística / Avenidas (cada card com descrição curta de 1 linha).
>
> **Equipamentos DJI de última geração** — drones DJI com câmeras até 48MP e gravação 4K. Piloto certificado ANAC, seguro RETA obrigatório. Atendimento em SP, Campinas, Santos, viagens para todo o Brasil. Lista de 7 diferenciais (gravação 4K DJI Mini 4 Pro, fotos até 48MP, slow motion, formato horizontal/vertical, piloto ANAC + RETA, sessão de 2h/entrega em 3 dias, atendimento SP + Brasil).
>
> **O que nossos clientes dizem** — 3 depoimentos (João Pedro / Sólida Transportes; Leonardo Oliveira / Fama Limousines; Lucas Mendes / Gerente de Marketing, Fazenda).
>
> **Perguntas frequentes** — 9 perguntas (preço a partir de R$800, formato vertical/horizontal, duração da sessão ~2h, prazo de entrega 3 dias úteis, certificação ANAC/RETA, área de atendimento SP + Brasil, equipamento DJI Mini 4 Pro, segmentos atendidos).
>
> **Solicite seu orçamento grátis** — CTA final + telefone/e-mail + resposta em até 2h.
>
> Footer: descrição curta + 3 colunas (Serviços / Segmentos / Contato) com todos os 10 links internos + copyright.

**SEO / conteúdo**
- ⚠️ **Bug de conteúdo**: o H1 e o texto de abertura concatenam "drone" + "profissional" sem espaço (`droneprofissional`) no `innerText` capturado — no fonte HTML provavelmente há uma quebra de linha estilizada (`<br>`/flex) que perde o espaço em texto puro. Vale conferir visualmente no screenshot e não repetir o padrão no rebuild.
- Title com 66 caracteres — no limite do que o Google normalmente exibe sem truncar (~60).
- Description com ~175 caracteres — passa do limite recomendado (~155-160), risco de truncamento no SERP.
- Nenhum dado estruturado (JSON-LD/schema.org) foi verificado nesta auditoria — checar manualmente em `refs/fly/html/home.html` antes de assumir ausência.
- `lang` do `<html>` não foi capturado — confirmar `lang="pt-BR"` ao inspecionar o HTML bruto.

---

## 2–11. Páginas de serviço/vertical (padrão idêntico de estrutura)

Todas seguem o mesmo esqueleto de 6-7 seções: H1 → intro → 2-3 blocos H2 com 1 parágrafo cada → "Por que escolher a Ergon Agência?" (lista de 6 bullets) → CTA de orçamento → "Serviços relacionados" (6 links, sempre excluindo a própria página) → footer idêntico ao da home.

| Rota | Title | H1 |
|---|---|---|
| `/imagens-aereas` | Imagens Aéreas Profissionais \| Fotos com Drone - Ergon Agência | Imagens Aéreas Profissionais com Drone |
| `/filmagem-com-drone` | Filmagem com Drone Profissional em 4K \| Ergon Agência | Filmagem com Drone Profissional em 4K |
| `/drone-profissional` | Drone Profissional para Empresas \| Serviço de Drone - Ergon Agência | Serviço de Drone Profissional para Empresas |
| `/drone-para-imobiliarias` | Drone para Imobiliárias \| Fotos e Vídeos Aéreos de Imóveis - Ergon | Drone para Imobiliárias e Construtoras |
| `/drone-para-restaurantes` | Drone para Restaurantes \| Imagens Aéreas Gastronômicas - Ergon | Drone para Restaurantes e Gastronomia |
| `/drone-para-hoteis` | Drone para Hotéis e Resorts \| Imagens Aéreas de Hospedagem - Ergon | Drone para Hotéis, Resorts e Pousadas |
| `/drone-para-eventos` | Drone para Eventos \| Filmagem Aérea de Eventos - Ergon Agência | Drone para Eventos e Filmagem Aérea |
| `/drone-sao-paulo` | Drone São Paulo \| Filmagem Aérea em SP - Ergon Agência | Serviço de Drone em São Paulo |
| `/captacao-aerea` | Captação Aérea Profissional \| Drone para Captação - Ergon Agência | Captação Aérea Profissional com Drone |
| `/video-aereo-drone` | Vídeo Aéreo com Drone em 4K \| Filmagem Aérea - Ergon Agência | Vídeo Aéreo com Drone em 4K |

Corpo de texto completo de cada uma (na ordem em que aparece) está preservado em `refs/fly/_summary.json` (`routes[].bodyText`) e no HTML renderizado em `refs/fly/html/{slug}.html` — não duplicado aqui para não inflar este documento, mas totalmente disponível para o rebuild.

**SEO / conteúdo — comum às 10 páginas**
- ⚠️ **Boilerplate quase idêntico**: a seção "Por que escolher a Ergon Agência?" e o footer completo são reaproveitados palavra por palavra (ou quase) em todas as 10 páginas. Combinado com H1/H2 muito parecidos entre si ("Drone para X", "Por que escolher..."), isso é um padrão clássico de SEO programático com risco real de conteúdo duplicado/thin content aos olhos do Google — cada página tem pouco texto verdadeiramente único (2-3 parágrafos curtos por página).
- og:image idêntico (`/og-image.jpg`) em todas as páginas — nenhuma diferenciação de imagem social por vertical/serviço.
- Todas com `robots: index, follow` e canonical auto-referenciado corretamente.
- `imagesWithoutAlt` retornou 0 em todas as páginas capturadas, mas boa parte dos ícones do site é `background-image` via CSS (não `<img>`) — esses elementos não têm texto alternativo algum e não aparecem nessa métrica; ao reconstruir, usar `<img alt="">` real ou `aria-label` para ícones informativos.

---

## 12. `/guia-filmagem-com-drone`

**Meta**: title "Guia de filmagem com drone em São Paulo | Ergon Agência" · description "Guia completo de filmagem com drone: preços, autorizações ANAC, formatos de vídeo aéreo e como contratar imagens aéreas profissionais em São Paulo e no Brasil."

**Headings**: H1 único + 8 H2 (formato FAQ/editorial): Quanto custa / Preciso de autorização / Que tipo de imagem funciona melhor / Vídeo vertical para redes sociais / Como é o processo / Atendemos SP e Brasil / Por que contratar / Solicite orçamento / Serviços relacionados.

**Conteúdo**: página de guia completa, mais longa e com informação genuinamente única (preços, regras ANAC/SISANT/SARPAS/RETA, processo de 5 passos, recomendações por segmento) — é a página com melhor potencial de ranqueamento orgânico por ter conteúdo não-duplicado.

**Inconsistências em relação às demais páginas**
- ⚠️ Não tem o header padrão de navegação (Portfólio/Equipamento/Contato) presente nas outras 11 páginas — abre direto em "Ergon Agência · Conteúdo de apoio".
- Footer reduzido: sem as colunas "Serviços"/"Segmentos"/"Contato" com H3, apenas uma lista simples de links + copyright em linha única.
- Único lugar do site com uma "assinatura" de rodapé diferente: `© 2026 Ergon Agência · São Paulo, SP — ergonagencia.com.br`.

---

## Achados de SEO consolidados (site inteiro)

1. **Conteúdo quase-duplicado entre as 10 landing pages de vertical** — maior risco de SEO do site atual. No rebuild em `/fly`, cada página precisa de texto realmente único (casos reais, números específicos do segmento) em vez de reaproveitar os mesmos 6 bullets e o mesmo footer.
2. **Bug de espaçamento no H1 da home** ("droneprofissional") — corrigir a origem (provavelmente `<br>` estilizado) para não herdar o bug.
3. **Meta description da home passa do limite recomendado** (~175 vs ~155-160 chars) — revisar todas as descriptions para o novo site.
4. **og:image genérico e repetido** — considerar imagem social específica por página/segmento no rebuild.
5. **Ícones decorativos sem alternativa textual** (background-image, não `<img>`) — não é capturado como "imagem sem alt" mas é uma lacuna de acessibilidade real.
6. **Página de guia com estrutura de header/footer diferente do resto do site** — decidir intencionalmente no rebuild se o `/fly` mantém essa divergência ou unifica.
7. Dados estruturados (JSON-LD) e atributo `lang` **não foram verificados** nesta auditoria — checar `refs/fly/html/*.html` diretamente antes de tirar conclusões.
