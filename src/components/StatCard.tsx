import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import MagicBentoCard from './ui/MagicBentoCard'
import { TextReveal } from './ui/text-reveal'

export interface StatCardData {
  prefix: string
  value: number
  decimals: number
  suffix: string
  desc: string
  source: string
}

export default function StatCard({ stat }: { stat: StatCardData }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(stat.value)
      return
    }
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, reduced, stat.value])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealUp}
    >
      <MagicBentoCard className="group rounded-2xl border border-line bg-surface/60 p-5 transition-colors duration-300 hover:border-lime/30">
        <p className="relative z-10 text-3xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-lime md:text-4xl">
          {stat.prefix}
          {display.toFixed(stat.decimals).replace('.', ',')}
          {stat.suffix}
        </p>

        <div className="relative z-10 mt-3 h-px w-8 bg-lime/40 transition-all duration-300 group-hover:w-14 group-hover:bg-lime" />

        <TextReveal
          as="p"
          per="word"
          preset="fade"
          className="relative z-10 mt-3 text-xs text-graphite md:text-sm"
        >
          {stat.desc}
        </TextReveal>

        <p className="relative z-10 mt-3 font-mono text-[10px] text-graphite-dim">
          {stat.source}
        </p>
      </MagicBentoCard>
    </motion.div>
  )
}
