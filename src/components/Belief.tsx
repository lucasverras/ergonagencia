import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import { GradualSpacing } from './ui/gradual-spacing'
import { TextReveal } from './ui/text-reveal'

export default function Belief() {
  return (
    <section id="sobre" className="relative overflow-hidden">
      <div className="full-bleed border-y border-line bg-surface/40">
        <div className="grid-shell section-pad grid grid-cols-1 items-start gap-x-12 gap-y-10 md:grid-cols-2">
          <div>
            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={revealUp}
              className="mb-4 block text-xs tracking-[0.25em] text-lime uppercase"
            >
              Sobre
            </motion.span>
            <h2 className="text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              <GradualSpacing as="span" text="Damos ordem" className="w-full" />
              <GradualSpacing
                as="span"
                text="ao possível."
                className="w-full"
                delayMultiple={0.03}
                highlight={{ word: 'possível.', variant: 'circle', delay: 0.4 }}
              />
            </h2>
            <motion.a
              href="#processo"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={revealUp}
              className="group mt-8 inline-flex items-center gap-2 text-sm text-graphite transition-colors hover:text-ink"
            >
              Conheça o estúdio
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          </div>

          <TextReveal
            as="p"
            per="line"
            preset="fade-in-blur"
            className="mt-10 max-w-lg text-base text-graphite md:mt-8"
          >
            A Ergon é um Digital Product Studio que desenha, desenvolve e
            lança produtos digitais para empresas que querem vender melhor,
            operar com mais eficiência e criar novas experiências.
          </TextReveal>
        </div>
      </div>
    </section>
  )
}
