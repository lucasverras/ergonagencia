import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import ProcessStep, { type Step } from './ProcessStep'
import { GradientBars } from './ui/gradient-bars-background'
import { GradualSpacing } from './ui/gradual-spacing'

// same four stages named the same way across the whole site (/servicos'
// DISCOVER_PROCESS) — Home's version just says less per step, since this
// section only needs to answer "how does a project happen?", not restate
// the fuller service-page description
const steps: Step[] = [
  {
    n: '01',
    title: 'Discover',
    tag: 'entender',
    desc: 'Entendemos o problema.',
    tags: ['negócio', 'processos', 'oportunidades', 'escopo'],
  },
  {
    n: '02',
    title: 'Design',
    tag: 'desenhar',
    desc: 'Desenhamos a solução.',
    tags: ['UX', 'UI', 'protótipo', 'conteúdo'],
  },
  {
    n: '03',
    title: 'Build',
    tag: 'construir',
    desc: 'Colocamos para funcionar.',
    tags: ['desenvolvimento', 'dados', 'integrações', 'automações'],
  },
  {
    n: '04',
    title: 'Evolve',
    tag: 'evoluir',
    desc: 'Continuamos melhorando.',
    tags: ['suporte', 'melhorias', 'novas funcionalidades'],
  },
]

export default function Process() {
  return (
    <section id="processo" className="relative overflow-hidden">
      <GradientBars
        numBars={15}
        gradientFrom="var(--color-violet)"
        gradientTo="transparent"
        animationDuration={3}
        className="opacity-[0.12]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%]"
        style={{
          background:
            'radial-gradient(650px circle at 15% 0%, rgba(139,92,246,0.18), transparent 65%)',
        }}
      />

      <div className="grid-shell relative z-10 section-pad">
        <div className="max-w-xl">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="mb-6 block text-xs tracking-[0.25em] text-graphite-dim uppercase"
          >
            Método
          </motion.span>
          <h2 className="text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
            <GradualSpacing
              as="span"
              text="Da ideia ao produto."
              highlight={{ word: 'produto.', variant: 'circle', delay: 0.3 }}
            />
          </h2>
        </div>

        <div className="relative mt-8 grid grid-cols-1 gap-x-12 gap-y-2 sm:grid-cols-2 md:mt-12">
          {/* a hairline cross running the full width/height of the grid,
              crossing exactly where the four quadrants meet */}
          <div aria-hidden="true" className="absolute inset-0 hidden sm:block">
            <span className="absolute top-1/2 right-0 left-0 h-px origin-center -translate-y-1/2 scale-y-50 bg-gradient-to-r from-white/50 to-graphite-dim/50" />
            <span className="absolute top-0 bottom-0 left-1/2 w-px origin-center -translate-x-1/2 scale-x-50 bg-gradient-to-b from-white/50 to-graphite-dim/50" />
          </div>

          {steps.map((step) => (
            <ProcessStep key={step.n} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}
