import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'

export interface Step {
  n: string
  title: string
  tag: string
  desc: string
  tags: string[]
}

export default function ProcessStep({ step }: { step: Step }) {
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
      className="border-b border-line py-10 first:pt-0 last:border-b-0 md:py-12"
    >
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 md:gap-x-8">
        <span
          className={`font-mono text-sm transition-colors duration-500 md:text-base ${
            active ? 'text-lime' : 'text-violet'
          }`}
        >
          {step.n}
        </span>
        <h3
          className={`text-2xl leading-tight font-semibold tracking-tight transition-all duration-500 md:text-4xl ${
            active ? 'translate-x-0 text-ink' : 'text-graphite'
          }`}
        >
          {step.title}
        </h3>
        <span className="font-mono text-xs text-graphite-dim uppercase">
          [ {step.tag} ]
        </span>
      </div>
      <p className="mt-4 max-w-xl pl-[2.1rem] text-sm text-graphite md:pl-[3.25rem] md:text-base">
        {step.desc}
      </p>
      <div className="mt-5 flex flex-wrap gap-2 pl-[2.1rem] md:pl-[3.25rem]">
        {step.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-3 py-1 text-xs text-graphite-dim"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
