import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import ResultCard, { type ProjectResult } from './ResultCard'
import { GradualSpacing } from './ui/gradual-spacing'

const featuredResult: ProjectResult = {
  metric: ['+40%'],
  metricDesc: 'de seguidores em apenas 30 dias',
  project: 'VAMO NESSA SP',
  category: 'PLATAFORMA · DADOS · SOCIAL SELLING',
  context:
    'Uma plataforma própria para transformar conteúdo, audiência e interações em dados e oportunidades.',
  href: '/portfolio/vamo-nessa-sp',
  bgImage: '/portfolio/vamo-nessa-sp/hero.png',
}

const secondaryResults: ProjectResult[] = [
  {
    metric: ['+300%'],
    metricDesc: 'de visitas ao site',
    project: 'GREEN BAY CAR',
    category: 'WEBSITE · UX/UI · PRESENÇA DIGITAL',
    context: 'Uma nova experiência digital para transformar a presença online da marca.',
    href: '/portfolio/green-bay-car',
  },
  {
    metric: ['RETENÇÃO ↑', 'CONVERSÃO ↑'],
    metricDesc: 'mais retenção de clientes e mais conversões na operação',
    project: 'GARAGI',
    category: 'WEBSITE · CRM · SISTEMA INTERNO',
    context: 'Website por fora. Ferramenta comercial por dentro.',
    href: '/portfolio/garagi',
  },
]

export default function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-line py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-80"
        style={{
          backgroundImage: 'url(/images/results-grid.png)',
          maskImage:
            'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/10 to-bg" />

      <div className="grid-shell grid-cols relative z-10">
        <div className="col-span-full xl:[grid-column:1/9]">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="block font-mono text-xs tracking-[0.25em] text-graphite-dim uppercase"
          >
            [ resultados ]
          </motion.span>
          <h2 className="mt-4 max-w-2xl text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
            <GradualSpacing as="span" text="Produtos digitais." className="w-full" />
            <GradualSpacing
              as="span"
              text="Impacto no mundo real."
              className="mt-1 w-full text-lime"
              delayMultiple={0.025}
              highlight={{ word: 'real.', variant: 'circle', delay: 0.35 }}
            />
          </h2>
        </div>

        <div className="col-span-full mt-8 flex flex-col gap-4 xl:mt-10 xl:[grid-column:5/13]">
          <ResultCard result={featuredResult} featured />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {secondaryResults.map((result) => (
              <ResultCard key={result.project} result={result} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
