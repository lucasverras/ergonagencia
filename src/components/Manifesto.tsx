import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import { GradualSpacing } from './ui/gradual-spacing'
import { TextReveal } from './ui/text-reveal'

export default function Manifesto() {
  return (
    <section className="bg-lime text-bg">
      <div className="grid-shell grid-cols section-pad">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="col-prose"
        >
          <p className="text-4xl leading-[1.05] font-semibold tracking-tight md:text-7xl">
            <GradualSpacing as="span" text="Digital não é vitrine." className="w-full" />
            <GradualSpacing
              as="span"
              text="É operação."
              className="w-full"
              delayMultiple={0.03}
            />
          </p>
          <TextReveal
            as="p"
            per="word"
            preset="fade-in-blur"
            className="mt-10 text-base leading-relaxed font-medium md:text-lg"
          >
            Criamos produtos digitais para empresas que precisam vender melhor,
            organizar processos, reduzir improvisos e lançar novas experiências.
          </TextReveal>
          <TextReveal
            as="p"
            per="word"
            preset="fade-in-blur"
            delay={0.15}
            className="mt-6 text-base leading-relaxed font-semibold md:text-lg"
          >
            A ideia não é apenas aparecer. É funcionar melhor.
          </TextReveal>
        </motion.div>
      </div>
    </section>
  )
}
