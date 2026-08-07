# Mapa de URLs — ergonagencia.com.br → /fly

Mapeamento de cada URL atual do site de drone para o equivalente futuro dentro da seção `/fly` deste projeto. Servirá de base para os redirects 301 quando o site antigo for desativado. Nenhum redirect foi criado nesta etapa — apenas o mapeamento.

| URL atual | Nova URL em `/fly` |
|---|---|
| `https://www.ergonagencia.com.br/` | `/fly` |
| `https://www.ergonagencia.com.br/imagens-aereas` | `/fly/imagens-aereas` |
| `https://www.ergonagencia.com.br/filmagem-com-drone` | `/fly/filmagem-com-drone` |
| `https://www.ergonagencia.com.br/drone-profissional` | `/fly/drone-profissional` |
| `https://www.ergonagencia.com.br/drone-para-imobiliarias` | `/fly/drone-para-imobiliarias` |
| `https://www.ergonagencia.com.br/drone-para-restaurantes` | `/fly/drone-para-restaurantes` |
| `https://www.ergonagencia.com.br/drone-para-hoteis` | `/fly/drone-para-hoteis` |
| `https://www.ergonagencia.com.br/drone-para-eventos` | `/fly/drone-para-eventos` |
| `https://www.ergonagencia.com.br/drone-sao-paulo` | `/fly/drone-sao-paulo` |
| `https://www.ergonagencia.com.br/captacao-aerea` | `/fly/captacao-aerea` |
| `https://www.ergonagencia.com.br/video-aereo-drone` | `/fly/video-aereo-drone` |
| `https://www.ergonagencia.com.br/guia-filmagem-com-drone` | `/fly/guia-filmagem-com-drone` |

Notas para quando os redirects forem implementados:
- Domínio muda de `ergonagencia.com.br` (site próprio da operação de drone) para uma rota dentro do domínio institucional principal da Ergon Agência — os 301 precisarão ser configurados no DNS/hosting do domínio antigo apontando cross-domain para o novo, não apenas como rewrite interno.
- `sitemap.xml` do site atual (checado nesta captura) lista exatamente estas 12 URLs, com prioridades de 1.0 (home) a 0.6 — útil para não esquecer nenhuma ao registrar os redirects.
- `og:url` e `canonical` de cada página atual apontam para a própria URL antiga — precisam ser atualizados para a nova URL `/fly/...` no rebuild, não copiados como estão.
