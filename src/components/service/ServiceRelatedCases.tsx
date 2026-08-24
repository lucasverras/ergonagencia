import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '@/lib/reveal'
import { GradualSpacing } from '@/components/ui/gradual-spacing'
import { CaseMedia } from '@/components/case/CaseMedia'
import { getCaseBySlug } from '@/cases/casesData'

export function ServiceRelatedCases({ caseSlugs }: { caseSlugs: string[] }) {
  const cases = caseSlugs.map((slug) => getCaseBySlug(slug)).filter((c) => c !== undefined)
  if (cases.length === 0) return null

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
          Cases relacionados
        </motion.span>
        <h2 className="max-w-lg text-2xl leading-[1.15] font-semibold tracking-tight md:text-4xl">
          <GradualSpacing as="span" text="Prova, não promessa." highlight={{ word: 'promessa.', variant: 'circle', delay: 0.35 }} />
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealContainer(0.08)}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cases.map((c) => (
            <motion.div key={c.slug} variants={revealUp}>
              <Link to={`/portfolio/${c.slug}`} className="group block">
                <CaseMedia asset={c.heroMedia} aspect="aspect-[16/10]" />
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-base font-semibold text-ink transition-colors group-hover:text-lime">
                    {c.name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-graphite-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
