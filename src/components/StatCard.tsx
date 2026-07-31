import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'

export interface StatCardData {
  n: string
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealUp}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-5"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(320px circle at var(--mx) var(--my), rgba(227,255,12,0.08), transparent 70%)',
        }}
      />

      <div className="relative z-10">
        <span className="font-mono text-[10px] text-graphite-dim uppercase">
          Card {stat.n}
        </span>

        <p className="mt-1 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {stat.prefix}
          {display.toFixed(stat.decimals).replace('.', ',')}
          {stat.suffix}
        </p>

        <p className="mt-2 text-xs text-graphite md:text-sm">{stat.desc}</p>

        <p className="mt-3 font-mono text-[10px] text-graphite-dim">
          {stat.source}
        </p>
      </div>
    </motion.div>
  )
}
