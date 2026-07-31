import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import ProcessCard, { type ProcessCardData } from './ProcessCard'
import RevealText from './RevealText'
import {
  UnderstandVisual,
  ClarifyVisual,
  DesignVisual,
  BuildVisual,
} from './ProcessIcons'

const steps: ProcessCardData[] = [
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
            <RevealText className="block w-fit">Clareza antes da interface.</RevealText>
          </h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="mt-6 text-base font-medium text-ink md:text-lg"
          >
            A gente não recebe briefing. A gente constrói um.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <ProcessCard key={step.n} step={step} Visual={visuals[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
