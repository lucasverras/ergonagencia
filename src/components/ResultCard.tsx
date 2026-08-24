import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { revealUp, viewportOnce } from '../lib/reveal'
import MagicBentoCard from './ui/MagicBentoCard'
import { TextReveal } from './ui/text-reveal'

export interface ProjectResult {
  /** one or two short lines — a single "+40%"-style number, or a two-line
   * headline like "RETENÇÃO ↑ / CONVERSÃO ↑" for a project with no metric */
  metric: string[]
  metricDesc: string
  project: string
  category: string
  context: string
  href: string
  /** subtle background texture — the featured card only */
  bgImage?: string
}

export default function ResultCard({
  result,
  featured = false,
}: {
  result: ProjectResult
  featured?: boolean
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealUp}
      className="h-full"
    >
      <Link to={result.href} className="block h-full">
        <MagicBentoCard
          className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/60 backdrop-blur-md transition-colors duration-300 hover:border-lime/30 ${
            featured ? 'min-h-[280px] p-7 md:p-9' : 'min-h-[220px] p-5 md:p-6'
          }`}
        >
          {result.bgImage && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `url(${result.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                maskImage: 'linear-gradient(to bottom, black, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
              }}
            />
          )}

          <div className="relative z-10">
            <p
              className={`font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-lime ${
                featured
                  ? 'text-5xl leading-[1.02] md:text-7xl'
                  : 'text-2xl leading-[1.05] md:text-3xl'
              }`}
            >
              {result.metric.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <div className="mt-3 h-px w-8 bg-lime/40 transition-all duration-300 group-hover:w-14 group-hover:bg-lime" />

            <TextReveal
              as="p"
              per="line"
              preset="fade"
              className={`mt-3 text-graphite ${featured ? 'max-w-xs text-sm md:text-base' : 'text-xs md:text-sm'}`}
            >
              {result.metricDesc}
            </TextReveal>
          </div>

          <div className="relative z-10 mt-6 flex items-end justify-between gap-3">
            <div>
              <p className={`font-semibold tracking-tight text-ink ${featured ? 'text-base md:text-lg' : 'text-sm'}`}>
                {result.project}
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-graphite-dim uppercase">
                {result.category}
              </p>
              <p
                className={`text-graphite-dim ${featured ? 'mt-3 max-w-sm text-xs md:text-sm' : 'mt-2 max-w-[22ch] text-[11px]'}`}
              >
                {result.context}
              </p>
            </div>

            <span className="flex shrink-0 items-center gap-1 text-[10px] tracking-[0.15em] text-graphite-dim uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Ver case
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </MagicBentoCard>
      </Link>
    </motion.div>
  )
}
