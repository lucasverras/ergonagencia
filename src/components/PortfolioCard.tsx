import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

export interface Project {
  name: string
  category: string
  description: string
  tags: string[]
}

const hoverSpring = { type: 'spring', stiffness: 300, damping: 26, mass: 0.6 } as const

const cardVariants = {
  rest: {
    borderColor: 'rgba(255,255,255,0.1)',
    y: 0,
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)',
  },
  hover: {
    borderColor: 'rgba(227,255,12,0.35)',
    y: -6,
    boxShadow: '0 25px 60px -12px rgba(227,255,12,0.15)',
  },
}

export default function PortfolioCard({
  project,
  index,
  total,
}: {
  project: Project
  index: number
  total: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  })

  // raw scroll progress ticks in discrete steps on trackpad/wheel input —
  // springing it smooths that into a continuous, less mechanical motion
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [0.92, 1])
  const opacityRaw = useTransform(scrollYProgress, [0, 1], [0.45, 1])
  const scale = useSpring(scaleRaw, { stiffness: 300, damping: 40, mass: 0.5 })
  const opacity = useSpring(opacityRaw, { stiffness: 300, damping: 40, mass: 0.5 })

  return (
    <div ref={ref} className="mb-8 xl:mb-0 xl:h-[140vh]">
      {/* z-index only affects positioned elements — this is the sticky one,
          so it's the one that needs the content-tier offset, not the wrapper.
          Stays on the shared token scale (index.css) instead of a bare number. */}
      <motion.div
        variants={cardVariants}
        initial="rest"
        whileHover={reduced ? undefined : 'hover'}
        transition={hoverSpring}
        style={{
          zIndex: `calc(var(--z-content) + ${index})`,
          ...(reduced ? undefined : { scale, opacity }),
        }}
        className="relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-8 md:p-12 xl:sticky xl:top-28 xl:h-[70vh]"
      >
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs text-graphite-dim">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="rounded-full border border-line px-3 py-1 text-xs text-graphite">
            {project.category}
          </span>
        </div>

        <div
          aria-hidden="true"
          className="relative my-8 flex-1 overflow-hidden rounded-xl border border-line/70 bg-gradient-to-br from-white/[0.04] via-transparent to-violet/10"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-semibold tracking-tighter text-white/[0.06] md:text-8xl">
              {project.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            {project.name}
          </h3>
          <p className="mt-3 max-w-md text-sm text-graphite md:text-base">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-xs text-graphite-dim"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
