import { type ComponentType } from 'react'
import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import MagicBentoCard from './ui/MagicBentoCard'
import { GradualSpacing } from './ui/gradual-spacing'
import { TextReveal } from './ui/text-reveal'

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
    >
      <MagicBentoCard className="flex flex-col justify-between rounded-2xl border border-line bg-surface/70 p-6 transition-colors duration-300 hover:border-lime/30">
        <div className="relative z-10">
          <span className="font-mono text-[10px] text-graphite-dim uppercase">
            {step.n} · [ {step.tag} ]
          </span>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
            <GradualSpacing as="span" text={step.title} duration={0.35} delayMultiple={0.025} />
          </h3>
          <TextReveal as="p" per="word" preset="fade" className="mt-2 text-sm text-graphite">
            {step.desc}
          </TextReveal>
        </div>

        <div className="relative z-10 my-8 flex justify-center text-graphite">
          <Visual />
        </div>

        <a
          href="#portfolio"
          className="group relative z-10 flex items-center gap-2 text-xs text-graphite-dim transition-colors hover:text-lime"
        >
          Ver na prática
          <span className="flex h-4 w-4 items-center justify-center rounded border border-line transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </MagicBentoCard>
    </motion.div>
  )
}
