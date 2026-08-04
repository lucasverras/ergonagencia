import { motion, useReducedMotion, useTransform, type MotionValue } from 'framer-motion'

export interface Project {
  name: string
  category: string
  description: string
  tags: string[]
}

// each settled card rests a little lower than the one before it (a fixed
// step) so once the next card finishes its turn and covers it, its own top
// strip (index/category row) keeps peeking out above — a fanned deck, not
// a hard swap. Idle cards before their turn are glued in a plain vertical
// line, waiting below.
export const PEEK_STEP = 72
const RISE_FROM = 640

export default function PortfolioCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const reduced = useReducedMotion()
  const restY = index * PEEK_STEP

  // slides up from below (glued in line with the others, waiting its turn)
  // and settles at restY partway through its slot in the shared progress,
  // then holds there while later cards slide over it. Mapped across the
  // full 0–1 domain explicitly (not just [start,end]) because relying on
  // useTransform's implicit clamp-outside-range left not-yet-risen cards
  // sitting at y=0 instead of parked below at RISE_FROM.
  const start = Math.max(index / total, 0.0001)
  const end = start + 0.5 / total
  const y = useTransform(
    progress,
    [0, start, end, 1],
    [RISE_FROM, RISE_FROM, restY, restY],
  )

  // while a card is still rising it sits *behind* every already-settled
  // card (so it visibly emerges from underneath the one on top, instead of
  // covering it the instant it appears from below); only once it finishes
  // settling does it take its place above the others
  const zIndexRaw = useTransform(
    progress,
    [0, start, end, 1],
    [index - total - 1, index - total - 1, index, index],
  )
  const zIndex = useTransform(zIndexRaw, (v) => `calc(var(--z-content) + ${v})`)

  return (
    <motion.div
      style={{
        zIndex: index === 0 || reduced ? `calc(var(--z-content) + ${index})` : zIndex,
        y: index === 0 || reduced ? restY : y,
      }}
      className="absolute inset-x-0 top-0 h-full"
    >
      <div className="relative flex h-full min-h-[520px] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-8 md:p-12">
        <div className="relative z-10 flex items-start justify-between">
          <span className="font-mono text-xs text-graphite-dim">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="rounded-full border border-line px-3 py-1 text-xs text-graphite">
            {project.category}
          </span>
        </div>

        <div
          aria-hidden="true"
          className="relative z-10 my-8 flex-1 overflow-hidden rounded-xl border border-line/70 bg-gradient-to-br from-white/[0.04] via-transparent to-violet/10"
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

        <div className="relative z-10">
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
      </div>
    </motion.div>
  )
}
