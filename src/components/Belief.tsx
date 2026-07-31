import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import RevealText from './RevealText'

export default function Belief() {
  return (
    <section id="sobre" className="relative overflow-hidden">
      <div className="full-bleed border-y border-line bg-surface/40">
        <div className="grid-shell grid-cols section-pad items-center">
          <div className="col-headline">
            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={revealUp}
              className="mb-4 block text-xs tracking-[0.25em] text-lime uppercase"
            >
              Sobre
            </motion.span>
            <h2 className="text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
              <RevealText className="block w-fit">Damos ordem</RevealText>
              <RevealText className="block w-fit" delay={0.12}>
                ao possível.
              </RevealText>
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

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="col-support mt-10 text-sm text-graphite xl:mt-0 xl:text-base"
          >
            A Ergon é um Digital Product Studio que desenha, desenvolve e
            lança produtos digitais para empresas que querem vender melhor,
            operar com mais eficiência e criar novas experiências.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
