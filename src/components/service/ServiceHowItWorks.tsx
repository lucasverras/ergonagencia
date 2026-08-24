import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '@/lib/reveal'
import { GradualSpacing } from '@/components/ui/gradual-spacing'
import ProcessStep from '@/components/ProcessStep'
import { DISCOVER_PROCESS, type ProcessStepDef } from '@/services/servicesData'

// reuses the exact ProcessStep component/visual language Process.tsx
// already established sitewide for "how we work" — same numbered
// list-with-active-state pattern, fed the same Discover→Design→Build→
// Evolve process every service page shares (it's genuinely one process,
// not per-service content)
export function ServiceHowItWorks({ steps = DISCOVER_PROCESS }: { steps?: ProcessStepDef[] }) {
  return (
    <section className="border-t border-line py-14 md:py-20">
      <div className="grid-shell">
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mb-4 block text-xs tracking-[0.25em] text-graphite-dim uppercase"
        >
          Como fazemos
        </motion.span>
        <h2 className="max-w-lg text-2xl leading-[1.15] font-semibold tracking-tight md:text-4xl">
          <GradualSpacing as="span" text="Da ideia ao produto." highlight={{ word: 'produto.', variant: 'circle', delay: 0.35 }} />
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:mt-10 lg:grid-cols-4 lg:divide-x lg:divide-line">
          {steps.map((step) => (
            <div key={step.n} className="lg:pl-8 lg:first:pl-0">
              <ProcessStep step={step} compact />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
