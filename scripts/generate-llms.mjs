// Generates /llms.txt and /llms-full.txt from the same editorial data the
// pages render (servicesData.ts, casesData.ts, flyServices.ts), so the
// files can never describe a service or case the site doesn't actually
// have. Nothing is added here that isn't already visible on the site —
// no invented clients, dates, prices, metrics or team.

import { writeFileSync } from 'node:fs'
import { readDates } from './content-dates.mjs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const { services, cases, SERVICES, flyFaq, DISCOVER_PROCESS, SITE_URL } =
  await import(join(dist, 'server', 'entry-server.js'))

// Real date of the last content change, not the build clock. Resolved from
// git on a developer machine and committed (see scripts/content-dates.mjs);
// the Vercel build has no .git to ask.
const { site: lastUpdated } = readDates()
if (!lastUpdated) {
  console.error('content-dates.json has no site date — run: node scripts/content-dates.mjs')
  process.exit(1)
}

const drone = SERVICES.find((s) => s.key === 'drone')
const u = (path) => `${SITE_URL}${path}`

// ---------------------------------------------------------------- llms.txt
const short = `# Ergon Studio

> Digital product studio em São Paulo (SP), Brasil. A Ergon projeta e
> desenvolve sites, landing pages, sistemas internos, plataformas, produtos
> digitais, aplicativos e automações sob medida para empresas, além de
> captação aérea com drone pela marca Ergon Fly.

Idioma: português do Brasil. Domínio canônico: ${SITE_URL}

A Ergon Studio não é uma agência de publicidade nem uma revenda de temas
prontos: cada entrega é software feito sob medida a partir do processo que
já existe no negócio do cliente. O estúdio trabalha em quatro frentes de
serviço mais uma vertente audiovisual própria.

## Serviços

${services
  .map((s) => `- [${s.name}](${u(`/servicos/${s.slug}`)}): ${s.homeDescription}`)
  .join('\n')}
- [${drone.name}](${u('/fly')}): ${drone.description}

## Portfólio

${cases.map((c) => `- [${c.name} — ${c.solution}](${u(`/portfolio/${c.slug}`)}): ${c.headline}`).join('\n')}

## Páginas principais

- [Home](${u('/')}): posicionamento, serviços e projetos em destaque.
- [Serviços](${u('/servicos')}): as quatro frentes de serviço, lado a lado.
- [Portfólio](${u('/portfolio')}): todos os cases publicados.
- [Ergon Fly](${u('/fly')}): filmagem e captação aérea com drone em São Paulo.

## Contato

- WhatsApp (estúdio): https://wa.me/5511988162883
- WhatsApp (Ergon Fly / drone): https://wa.me/5511967206875
- E-mail: agenciaergon0@gmail.com

## Complementar

- [sitemap.xml](${u('/sitemap.xml')})
- [llms-full.txt](${u('/llms-full.txt')})

Última atualização: ${lastUpdated}
`

// ----------------------------------------------------------- llms-full.txt
const serviceSections = services
  .map((s) => {
    const cs = s.relatedCaseSlugs
      .map((slug) => cases.find((c) => c.slug === slug))
      .filter(Boolean)
    return `### ${s.name}

URL: ${u(`/servicos/${s.slug}`)}

${s.heroBlurb}

**Problema que resolve:** ${s.problemHeadline} ${s.problemBody}

**O que a Ergon entrega nesta frente:**

${s.whatWeCreate.map((w) => `- ${w.title}${w.desc ? ` — ${w.desc}` : ''}`).join('\n')}

**Cases que comprovam este trabalho:** ${
      cs.map((c) => `[${c.name}](${u(`/portfolio/${c.slug}`)})`).join(', ') || '—'
    }`
  })
  .join('\n\n')

const caseSections = cases
  .map(
    (c) => `### ${c.name}

URL: ${u(`/portfolio/${c.slug}`)}

${c.headline}

- Solução principal: ${c.solution}
- Serviços aplicados: ${c.servicos.join(', ')}
- Tecnologias confirmadas: ${c.tecnologias.join(', ')}
- Formato de entrega: ${c.entrega}
${c.result ? `- Resultado registrado: ${c.result.metric} — ${c.result.desc}\n` : ''}
**Desafio:** ${c.challenge}`,
  )
  .join('\n\n')

const full = `# Ergon Studio — referência completa

> Documento factual sobre a Ergon Studio, mantido no próprio site e gerado
> a partir do conteúdo publicado nas páginas. Última atualização: ${lastUpdated}.

- Nome: Ergon Studio (também citada como "Ergon")
- Posicionamento: digital product studio
- Localização: São Paulo, SP, Brasil
- Atuação: Brasil, com base em São Paulo
- Idioma: português do Brasil
- Domínio canônico: ${SITE_URL}
- Marca audiovisual: Ergon Fly (captação aérea com drone)

## O que a Ergon Studio é

A Ergon Studio desenha e constrói produtos digitais sob medida. O trabalho
começa pelo entendimento do processo de negócio e termina em software em
produção: sites e landing pages, sistemas internos e painéis, CRMs,
plataformas, aplicativos, cardápios digitais e automações que conectam as
ferramentas que a empresa já usa.

O estúdio se diferencia de uma agência tradicional em três pontos visíveis
no próprio portfólio: as entregas são construídas sobre o processo real do
cliente em vez de templates; site e sistema interno costumam ser tratados
como um único produto (como no case Garagi); e integrações — estoque, APIs,
IA — fazem parte do escopo, não de um projeto separado.

## Como a Ergon trabalha

${DISCOVER_PROCESS.map((p) => `${p.n}. **${p.title}** (${p.tag}) — ${p.desc}`).join('\n')}

## Serviços

${serviceSections}

### ${drone.name}

URL: ${u('/fly')}

${drone.description} Área de atendimento: ${drone.areaServed}.

## Cases

${caseSections}

## Perguntas frequentes sobre captação com drone

${flyFaq.map((f) => `**${f.question}**\n\n${f.answer}`).join('\n\n')}

## Contato

- WhatsApp (estúdio): https://wa.me/5511988162883
- WhatsApp (Ergon Fly / drone): https://wa.me/5511967206875
- E-mail: agenciaergon0@gmail.com
- Site: ${SITE_URL}

## Observações sobre este documento

Preço, prazo e escopo não estão listados porque variam por projeto e não são
publicados no site. Números de clientes, avaliações e datas de projeto também
não constam: só entram aqui informações que estão publicadas nas páginas.
`

for (const [name, content] of [
  ['llms.txt', short],
  ['llms-full.txt', full],
]) {
  writeFileSync(join(root, 'public', name), content)
  writeFileSync(join(dist, name), content)
  console.log(`${name} — ${content.length} bytes`)
}
