import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { revealUp, revealContainer, viewportOnce } from '@/lib/reveal'
import { CaseMedia } from '@/components/case/CaseMedia'
import { getCaseBySlug } from '@/cases/casesData'
import type { VisualExample } from '@/services/servicesData'

// A real screenshot from an actual project, or a short labeled flow — no
// invented mockups or generic stock UI. What each service actually looks
// like in practice, not an illustration of the idea of it.
export function ServiceVisualExample({ example }: { example: VisualExample }) {
  if (example.kind === 'flow') {
    return (
      <section className="border-t border-line py-14 md:py-20">
        <div className="grid-shell">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealContainer(0.08)}
            className="flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-line bg-surface/40 px-6 py-12 md:gap-4 md:px-10"
          >
            {example.steps.map((step, i) => (
              <motion.div key={step} variants={revealUp} className="flex items-center gap-3 md:gap-4">
                <span className="rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium tracking-wide text-ink uppercase md:px-5 md:py-2.5 md:text-sm">
                  {step}
                </span>
                {i < example.steps.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-lime" strokeWidth={2} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
  }

  const study = getCaseBySlug(example.caseSlug)
  if (!study) return null

  return (
    <section className="border-t border-line py-14 md:py-20">
      <div className="grid-shell">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={revealUp}>
          <CaseMedia asset={study.heroMedia} aspect="aspect-[16/9]" className="mx-auto max-w-4xl" />
          <p className="mt-3 text-center text-sm text-graphite-dim">{example.caption}</p>
        </motion.div>
      </div>
    </section>
  )
}
