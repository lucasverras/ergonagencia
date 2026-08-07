# Design system capturado — ergonagencia.com.br (origem do /fly)

Extraído via `getComputedStyle` em todos os elementos das 12 páginas renderizadas (Playwright, viewport 1440×900). Valores originais em `rgb()/rgba()` (é como o browser normaliza `getComputedStyle`), convertidos para hex abaixo. Fonte bruta: `refs/fly/_summary.json` (`routes[].design`).

## Paleta de cores

| Hex | rgb/rgba original | Uso aparente |
|---|---|---|
| `#05000f` | rgb(5, 0, 15) | Background principal (roxo quase-preto) |
| `#0d0915` | rgb(13, 9, 21) | Background secundário / seção alternada |
| `#24212c` | rgb(36, 33, 44) | Superfície de card |
| `#8a8792` | rgb(138, 135, 146) | Texto secundário / graphite |
| `#f1f1f1` | rgb(241, 241, 241) | Texto principal (quase-branco) |
| `#ffffff` | rgb(255, 255, 255) | Branco puro (poucos usos) |
| `#000000` | rgb(0, 0, 0) | Preto puro (poucos usos) |
| `#e3ff0f` | rgb(227, 255, 15) | **Cor de destaque (lime)** — CTAs, highlights |
| `#25d366` | rgb(37, 211, 102) | Verde WhatsApp (ícone/CTA de contato) |

**Variações com opacidade** (overlays, bordas, glass):
`rgba(5,0,15,.8)` · `rgba(241,241,241,.9)` · `rgba(241,241,241,.8)` · `rgba(241,241,241,.2)` · `rgba(255,255,255,.1)` · `rgba(255,255,255,.04)` · `rgba(227,255,15,.1)` · `rgba(138,135,146,.5)`

## Tipografia

- **Família principal**: `Outfit, sans-serif` (Google Fonts, carregada via `fonts.gstatic.com`, arquivos woff2 — ver `refs/fly/assets/`).
- **Fallback observado**: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", ...` — stack padrão do Tailwind, aparece em elementos que não herdam a fonte explicitamente (provavelmente não intencional, herança de reset).
- **Pesos usados**: 300, 400, 500, 600, 700.
- **Escala de tamanhos observada** (todas as páginas combinadas): `11px · 12px · 14px · 16px · 18px · 20px · 24px · 30px · 48px · 60px · 72px`
  - Home usa a escala mais ampla (H1 em 72px). Landing pages de serviço usam H1 em 60px. Página de guia usa H1 em 48px — **inconsistência de escala entre tipos de página**.
- **Letter-spacing**: `-1.8px` (títulos grandes, tracking negativo) · `-1.5px` · `-1.2px` · `0.35px` · `0.4px` · `0.5px` · `0.7px` · `0.8px` (uppercase/labels, tracking positivo).

## Espaçamento, radius, sombra

- **Border-radius**: `10px` · `12px` · `16px` · `9999px` (pill, usado em botões/badges).
- **Sombras**:
  - Glow de destaque: `rgba(227,255,15,.3) 0 0 40px 0` — usado no CTA principal/lime.
  - Sombra de card padrão (estilo Tailwind `shadow-lg`): `0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)`.
- Espaçamento/gutter/margens não foram amostrados numericamente por este script (exigiria leitura de `margin`/`padding`/`gap` computados elemento a elemento, não coletado nesta passada) — inspecionar visualmente nos screenshots (`refs/fly/desktop/*.png`, `refs/fly/mobile/*.png`) e no HTML bruto ao portar componentes.

## Componentes visuais recorrentes

- **Header fixo/sticky**: logo + nav (Portfólio / Equipamento / Contato) + botão lime "Quero orçamento" — presente em 11 das 12 páginas (ausente na página de guia).
- **Cards de feature/segmento**: grid de cards com ícone (PNG, não SVG inline) + título H3 + descrição curta — reaproveitado na home ("Mais que imagens aéreas", "Drone profissional para cada segmento") e como bloco "Por que escolher a Ergon Agência?" (lista com bullet/check) em todas as landing pages.
- **Cards de portfólio com vídeo**: thumbnails em `.mov` (H.264, ver Passo 4 — arquivos pesados, 12-26MB cada) com overlay de título.
- **Bloco de depoimentos**: 3 cards com aspas, nome e empresa — só na home.
- **Acordeão de FAQ**: só na home (9 perguntas) — a página de guia usa H2 simples em vez de acordeão para conteúdo similar.
- **CTA final "Solicite orçamento"**: bloco lime ou com glow lime, telefone + e-mail + "resposta em até 2 horas" — repetido em todas as páginas.
- **Footer de 3 colunas** (Serviços / Segmentos / Contato) com todos os 10 links internos — repetido em 11 das 12 páginas; a página de guia usa uma versão simplificada.

---

## Conflitos com o design system atual do projeto (`src/index.css`)

Apenas lista — **nenhuma resolução aplicada aqui**, por instrução explícita.

Tokens atuais do projeto (`src/index.css`, `@theme`):
```
--color-bg: #05000f
--color-lime: #e3ff0c
--color-violet: #8b5cf6
--color-violet-deep: #7c3aed
--color-ink: #ffffff
--color-graphite: #9a97a6
--color-graphite-dim: #807d8a
--color-line: rgba(255, 255, 255, 0.1)
--color-surface: #111018
--color-surface-2: #17121f
--font-sans: 'Host Grotesk', system-ui, sans-serif
--font-display: 'Agharti-DemiUltraWide', 'Host Grotesk', system-ui, sans-serif
--font-mono: 'Host Grotesk', system-ui, sans-serif
```

| Token/valor | Projeto atual (`ergonagencia`) | Site capturado (`/fly` origem) | Conflito |
|---|---|---|---|
| Background base | `--color-bg: #05000f` | `#05000f` | **Idêntico** — coincidência útil, não é conflito. |
| Cor de destaque (lime) | `--color-lime: #e3ff0c` | `#e3ff0f` | Praticamente o mesmo tom, **valor hex diferente no último dígito** (`0c` vs `0f`) — mesmo nome de intenção ("lime"), valor não é bit-a-bit igual. |
| Linha/borda translúcida | `--color-line: rgba(255,255,255,0.1)` | `rgba(255,255,255,.1)` | **Idêntico**. |
| Superfície de card | `--color-surface: #111018` / `--color-surface-2: #17121f` | `#24212c` (card) / `#0d0915` (bg secundário) | Nenhum dos dois valores capturados coincide com os tons de superfície já definidos no projeto — paletas de "camada 2" divergem. |
| Texto secundário | `--color-graphite: #9a97a6` | `#8a8792` | Tons próximos, **não idênticos**. |
| Fonte principal | `--font-sans: 'Host Grotesk'` | `Outfit` | **Fontes completamente diferentes** — o site atual não usa Outfit em nenhum lugar; decisão de manter/trocar fonte dentro de `/fly` fica pendente. |
| Verde de contato (WhatsApp) | não existe token equivalente no projeto | `#25d366` | Cor nova, sem token correspondente no design system atual. |
| Roxo/violeta (`--color-violet`, `--color-violet-deep`) | `#8b5cf6` / `#7c3aed` | não aparece na paleta capturada | Token existente no projeto sem equivalente no site de origem. |
