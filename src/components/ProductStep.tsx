import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'

export interface ProductStepData {
  n: string
  tag: string
  title: string
  desc: string
  detail: string
}

// two abstract, code-only "product" visuals standing in for real screenshots —
// alternated by index so consecutive cards don't read as the same image
// both visuals are confined to the card's upper region and fade out before
// reaching the text zone at the bottom, so the description never fights the
// decoration for legibility — mirroring how the reference keeps copy on a
// clean strip below the artwork
const fadeMask = {
  maskImage: 'linear-gradient(to bottom, black, black 55%, transparent 90%)',
  WebkitMaskImage:
    'linear-gradient(to bottom, black, black 55%, transparent 90%)',
}

function GridVisual() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[70%] overflow-hidden rounded-t-3xl opacity-60"
      style={fadeMask}
    >
      <div className="grid h-full grid-cols-4 gap-3 p-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`rounded-2xl border ${
              i === 6
                ? 'border-lime/50 bg-lime/5'
                : 'border-line/40 bg-white/[0.02]'
            }`}
          />
        ))}
      </div>
      <motion.div
        animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[42%] left-[56%] h-2 w-2 rounded-full bg-ink/70"
      />
    </div>
  )
}

function DashboardVisual() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 flex h-[70%] flex-col justify-end gap-3 overflow-hidden rounded-t-3xl p-6 opacity-70"
      style={fadeMask}
    >
      <div className="h-8 w-32 rounded-full bg-white/[0.05]" />
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="flex h-11 items-center justify-between rounded-full border border-lime/30 bg-lime/5 px-4 shadow-[0_0_30px_-5px_rgba(227,255,12,0.25)]"
      >
        <div className="h-1.5 w-24 rounded-full bg-white/20" />
        <div className="h-1.5 w-10 rounded-full bg-lime/60" />
      </motion.div>
      <div className="flex items-center gap-3 rounded-2xl border border-line/40 bg-white/[0.02] px-4 py-3">
        <div className="h-6 w-6 rounded-full bg-white/10" />
        <div className="h-1.5 w-28 rounded-full bg-white/10" />
      </div>
    </div>
  )
}

export default function ProductStep({
  step,
  index,
}: {
  step: ProductStepData
  index: number
}) {
  const Visual = index % 2 === 0 ? GridVisual : DashboardVisual

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealUp}
      className="relative mb-8 min-h-[380px] overflow-hidden rounded-3xl border border-line bg-surface/60 p-8 backdrop-blur-md last:mb-0 md:p-10"
    >
      <Visual />

      <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-between gap-10">
        <div>
          <span className="font-mono text-xs text-graphite-dim uppercase">
            {step.n} · [ {step.tag} ]
          </span>
          <h3 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-ink md:text-5xl">
            {step.title}
          </h3>
        </div>

        <div className="max-w-md">
          <p className="text-sm text-graphite md:text-base">{step.desc}</p>
          <p className="mt-2 text-sm text-graphite-dim md:text-base">
            {step.detail}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
