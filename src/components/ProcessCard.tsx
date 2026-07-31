import { type ComponentType } from 'react'
import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'

export interface ProcessCardData {
  n: string
  tag: string
  title: string
  desc: string
}

export default function ProcessCard({
  step,
  Visual,
}: {
  step: ProcessCardData
  Visual: ComponentType
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealUp}
      className="flex flex-col justify-between rounded-2xl border border-line bg-surface/70 p-6"
    >
      <div>
        <span className="font-mono text-[10px] text-graphite-dim uppercase">
          {step.n} · [ {step.tag} ]
        </span>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
          {step.title}
        </h3>
        <p className="mt-2 text-sm text-graphite">{step.desc}</p>
      </div>

      <div className="my-8 flex justify-center text-graphite">
        <Visual />
      </div>

      <a
        href="#portfolio"
        className="group flex items-center gap-2 text-xs text-graphite-dim transition-colors hover:text-lime"
      >
        Ver na prática
        <span className="flex h-4 w-4 items-center justify-center rounded border border-line transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </a>
    </motion.div>
  )
}
