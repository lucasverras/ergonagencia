import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import ProcessStep, { type Step } from './ProcessStep'
import { GradualSpacing } from './ui/gradual-spacing'
import { TextReveal } from './ui/text-reveal'
import {
  UnderstandVisual,
  ClarifyVisual,
  DesignVisual,
  BuildVisual,
} from './ProcessIcons'

const steps: Step[] = [
  {
    n: '01',
    title: 'Entender',
    tag: 'discover',
    desc: 'Mergulhamos no negócio, no público e no problema que precisa ser resolvido — antes de propor qualquer resposta.',
  },
  {
    n: '02',
    title: 'Dar clareza',
    tag: 'define',
    desc: 'Organizamos prioridades, conteúdos e caminhos. Tiramos a ideia do abstrato e definimos o que realmente precisa ser construído.',
  },
  {
    n: '03',
    title: 'Projetar a experiência',
    tag: 'design',
    desc: 'Desenhamos fluxos, interfaces e interações que fazem sentido para quem usa e para quem administra o produto.',
  },
  {
    n: '04',
    title: 'Tornar real',
    tag: 'build',
    desc: 'Transformamos a estratégia em um produto funcional, testado e preparado para evoluir depois do lançamento.',
  },
]

const visuals = [UnderstandVisual, ClarifyVisual, DesignVisual, BuildVisual]

export default function Process() {
  return (
    <section id="processo" className="relative">
      <div className="grid-shell section-pad">
        <div className="max-w-xl">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="mb-6 block text-xs tracking-[0.25em] text-graphite-dim uppercase"
          >
            Como pensamos
          </motion.span>
          <h2 className="text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
            <GradualSpacing
              as="span"
              text="Clareza antes da interface."
              highlight={{ word: 'Clareza', delay: 0.3 }}
            />
          </h2>
          <TextReveal
            as="p"
            per="line"
            preset="fade-in-blur"
            className="mt-6 text-base font-medium text-ink"
          >
            A gente não recebe briefing. A gente constrói um.
          </TextReveal>
        </div>

        <div className="relative mt-4 grid grid-cols-1 gap-x-12 gap-y-2 sm:grid-cols-2 md:mt-8">
          {/* a hairline cross running the full width/height of the grid,
              crossing exactly where the four quadrants meet */}
          <div aria-hidden="true" className="absolute inset-0 hidden sm:block">
            <span className="absolute top-1/2 right-0 left-0 h-px origin-center -translate-y-1/2 scale-y-50 bg-gradient-to-r from-white/50 to-graphite-dim/50" />
            <span className="absolute top-0 bottom-0 left-1/2 w-px origin-center -translate-x-1/2 scale-x-50 bg-gradient-to-b from-white/50 to-graphite-dim/50" />
          </div>

          {steps.map((step, i) => (
            <ProcessStep key={step.n} step={step} Visual={visuals[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
