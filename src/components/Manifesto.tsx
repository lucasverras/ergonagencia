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
          <h2 className="text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
            <GradualSpacing
              as="span"
              text="Ideias ganham valor quando começam a funcionar."
              className="w-full"
              highlight={{ word: 'funcionar.', color: 'bg', delay: 0.5 }}
            />
          </h2>
          <TextReveal
            as="p"
            per="line"
            preset="fade-in-blur"
            className="mt-10 text-base leading-relaxed font-medium md:text-lg"
          >
            Criamos produtos digitais para transformar boas ideias em
            experiências, sistemas e ferramentas que realmente fazem diferença
            no negócio.
          </TextReveal>
        </motion.div>
      </div>
    </section>
  )
}
