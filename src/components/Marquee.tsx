import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import StatCard, { type StatCardData } from './StatCard'
import { GradualSpacing } from './ui/gradual-spacing'

const stats: StatCardData[] = [
  {
    prefix: '+',
    value: 39,
    decimals: 0,
    suffix: '%',
    desc: 'de buscas pelo nome da empresa no Google',
    source: 'Google Search Console · maio 24',
  },
  {
    prefix: '+',
    value: 50,
    decimals: 0,
    suffix: '%',
    desc: 'em solicitações de orçamento pelo site',
    source: 'Google Analytics · novembro 25',
  },
  {
    prefix: '+',
    value: 30,
    decimals: 0,
    suffix: '%',
    desc: 'de páginas indexadas após a reestruturação',
    source: 'Google Search Console · fevereiro 26',
  },
  {
    prefix: '+',
    value: 40,
    decimals: 0,
    suffix: '%',
    desc: 'de cliques nas páginas de produto',
    source: 'Google Analytics · janeiro 26',
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
        <div className="xl:[grid-column:1/9]">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="block font-mono text-xs tracking-[0.25em] text-graphite-dim uppercase"
          >
            [ resultados ]
          </motion.span>
          <h2 className="mt-4 max-w-2xl text-2xl leading-[1.1] font-semibold tracking-tight md:text-4xl">
            <GradualSpacing as="span" text="Projetos feitos para funcionar e" className="w-full" />
            <GradualSpacing
              as="span"
              text="gerar resultados."
              className="mt-1 w-full text-lime"
              delayMultiple={0.025}
            />
          </h2>
        </div>

        <div className="col-span-full mt-8 grid grid-cols-2 gap-4 xl:mt-10 xl:[grid-column:5/13]">
          {stats.map((stat) => (
            <StatCard key={stat.source} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
