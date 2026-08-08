import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '@/lib/reveal'
import { renderRichText } from '@/lib/richText'
import { GradientBars } from '@/components/ui/gradient-bars-background'
import type { CaseStudy } from '@/cases/casesData'
import { CaseTags } from './CaseTags'
import { CaseMedia } from './CaseMedia'

export function CaseHero({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <header className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
      <GradientBars
        numBars={15}
        gradientFrom="var(--color-violet)"
        gradientTo="transparent"
        animationDuration={2.6}
        className="opacity-[0.14]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70%]"
        style={{
          background: 'radial-gradient(720px circle at 85% 0%, rgba(227,255,12,0.1), transparent 65%)',
        }}
      />

      <div className="relative z-10 grid-shell">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={revealContainer()}>
          <motion.div variants={revealUp}>
            <Link
              to="/#portfolio"
              className="group mb-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-graphite-dim uppercase transition-colors hover:text-ink"
            >
              <ChevronLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Portfólio
            </Link>
          </motion.div>

          <motion.span
            variants={revealUp}
            className="mb-4 flex items-center gap-2 text-xs tracking-[0.25em] text-lime uppercase"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_10px_2px_rgba(227,255,12,0.6)]"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {caseStudy.kicker}
          </motion.span>

          <motion.h1
            variants={revealUp}
            className="font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.98] text-ink"
          >
            {caseStudy.name}
          </motion.h1>

          <motion.p variants={revealUp} className="mt-6 max-w-2xl text-base text-graphite md:text-lg">
            {renderRichText(caseStudy.summary)}
          </motion.p>

          <motion.div variants={revealUp} className="mt-8 flex flex-wrap items-center gap-4">
            <CaseTags groups={caseStudy.tagGroups} />
          </motion.div>

          {caseStudy.siteUrl && (
            <motion.div variants={revealUp} className="mt-8">
              {caseStudy.siteUrl.startsWith('/') ? (
                <Link
                  to={caseStudy.siteUrl}
                  className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105 active:scale-95"
                >
                  Ver Ergon Fly
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ) : (
                <a
                  href={caseStudy.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105 active:scale-95"
                >
                  Visitar projeto
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mt-14"
        >
          <CaseMedia asset={caseStudy.heroMedia} eager aspect="aspect-[16/9]" />
        </motion.div>
      </div>
    </header>
  )
}
