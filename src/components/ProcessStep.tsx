import { useRef, type ComponentType } from 'react'
import { motion, useInView } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'

export interface Step {
  n: string
  title: string
  tag: string
  desc: string
  tags?: string[]
}

export default function ProcessStep({
  step,
  Visual,
  compact = false,
}: {
  step: Step
  Visual?: ComponentType
  /** side-by-side grid card instead of a full-width row — smaller type,
   * no reserved space for a Visual, description isn't width-clamped
   * since the grid column already constrains it */
  compact?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  // retriggerable (not "once") — this is what lets one step read as
  // "active" while it's centered in view, distinct from the one-shot
  // entrance reveal every other section uses
  const active = useInView(ref, { amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealUp}
      className={compact ? 'h-full' : 'flex items-center justify-between gap-6 py-6'}
    >
      <div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span
            className={`font-mono text-sm transition-colors duration-500 ${
              active ? 'text-lime' : 'text-violet'
            }`}
          >
            {step.n}
          </span>
          <h3
            className={`leading-tight font-semibold tracking-tight transition-all duration-500 ${
              active ? 'translate-x-0 text-ink' : 'text-graphite'
            } ${compact ? 'text-lg' : 'text-xl md:text-2xl'}`}
          >
            {step.title}
          </h3>
          <span className="font-mono text-xs text-lime uppercase">[ {step.tag} ]</span>
        </div>
        <p
          className={`mt-3 pl-[1.6rem] text-graphite ${compact ? 'text-xs' : 'max-w-xs text-sm'}`}
        >
          {step.desc}
        </p>
        {step.tags && step.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 pl-[1.6rem]">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-xs text-graphite-dim"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {Visual && !compact && (
        <div
          className={`hidden shrink-0 scale-75 text-graphite transition-opacity duration-500 md:block ${
            active ? 'opacity-100' : 'opacity-40'
          }`}
        >
          <Visual />
        </div>
      )}
    </motion.div>
  )
}
