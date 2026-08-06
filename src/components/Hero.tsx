import { useEffect, useState } from 'react'
import {
  useReducedMotion,
  motion,
  AnimatePresence,
  type Variants,
} from 'framer-motion'
import { DarkVeil } from './ui/dark-veil'
import MagicBentoCard from './ui/MagicBentoCard'
import { GradualSpacing } from './ui/gradual-spacing'
import { TextReveal } from './ui/text-reveal'

// small preview loop for the hero slideshow — kept local and short (not the
// full case-study data from Portfolio.tsx) since this is a glance, not the
// portfolio section itself
const previews = [
  { name: 'GBC', category: 'Website & Digital Experience' },
  { name: 'Garagi', category: 'Automotive Digital Experience' },
  { name: 'Mosaiclab', category: 'Corporate Website' },
  { name: 'Cardápio Franco', category: 'Digital Menu' },
]

const circularLabel = '— ERGON STUDIO · DIGITAL PRODUCT STUDIO '

function PortfolioSlideshow() {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % previews.length)
    }, 3200)
    return () => clearInterval(id)
  }, [reduced])

  const project = previews[active]

  return (
    <a
      href="#portfolio"
      className="block h-40 w-60 sm:h-44 sm:w-72"
    >
    <MagicBentoCard className="group relative h-full w-full overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur-md transition-colors hover:border-lime/30">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={project.name}
          initial={reduced ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-4xl font-semibold tracking-tighter text-white/[0.08] sm:text-5xl">
            {project.name.slice(0, 2).toUpperCase()}
          </span>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3 font-mono text-[10px] tracking-widest text-graphite-dim uppercase">
        <span>({String(active + 1).padStart(2, '0')}) Portfólio</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-line text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-3">
        <AnimatePresence mode="wait">
          <motion.p
            key={project.category}
            initial={reduced ? undefined : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium text-ink"
          >
            {project.name}
            <span className="mt-0.5 block text-xs font-normal text-graphite">
              {project.category}
            </span>
          </motion.p>
        </AnimatePresence>
      </div>
    </MagicBentoCard>
    </a>
  )
}

// rotating circular wordmark — a placeholder ring while the icon-only logo
// mark isn't ready yet (per Lucas: "ainda vamos adicionar"). Swap the lime
// dot in the center for the real mark once it exists; the ring/text stay.
function CircularBadge() {
  return (
    <div className="relative h-28 w-28 sm:h-32 sm:w-32">
      <svg viewBox="0 0 200 200" className="h-full w-full animate-[radar-spin_24s_linear_infinite]">
        <defs>
          <path
            id="hero-circular-path"
            d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
          />
        </defs>
        <text
          fill="var(--color-graphite)"
          className="font-mono text-[10.5px] tracking-[0.15em] uppercase"
        >
          <textPath href="#hero-circular-path">{circularLabel.repeat(2)}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-3 w-3 rounded-full bg-lime shadow-[0_0_16px_2px_rgba(227,255,12,0.5)]" />
      </div>
    </div>
  )
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}


export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden bg-bg pt-24 md:pt-28"
    >
      {/* WebGL shader background, scoped to the hero only. Kept subtle
          (no scanlines/noise, slow speed, low opacity) so it reads as
          ambient depth behind the headline rather than the protagonist —
          DarkVeil itself no-ops under prefers-reduced-motion. */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-70">
        <DarkVeil
          hueShift={0}
          speed={0.4}
          warpAmount={0.25}
          resolutionScale={window.innerWidth < 768 ? 0.6 : 1}
        />
      </div>

      {/* real content sits on its own explicit stacking layer above decoration/background.
          Headline lives in the top-left, right under the navbar — a real
          grid column (1/8), not absolute/percentage offsets, so it starts on
          the same line as every other section. */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="grid-shell grid-cols relative z-[var(--z-content)] pt-10 sm:pt-16"
      >
        {/* headline: smaller and wider than before — each fixed line now
            comfortably fits more text, so it reads as long confident lines
            rather than a stacked wall of giant type. The dynamic word still
            gets its own line (unconstrained width, whitespace-nowrap) so
            "em operação" never wraps or reflows the line above it. */}
        <h1 className="col-headline font-display text-[clamp(3rem,6.5vw,6.875rem)] leading-[1.02] tracking-[0.02em] uppercase">
          <GradualSpacing as="span" text="Ergon Digital" className="w-full text-lime" />
          <GradualSpacing as="span" text="Product Studio" className="mt-1 w-full" delayMultiple={0.03} />
        </h1>
      </motion.div>

      {/* rotating circular wordmark, top-right corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-24 z-[var(--z-content)] hidden md:block"
        style={{ right: 'var(--grid-margin)' }}
      >
        <CircularBadge />
      </motion.div>

      {/* portfolio slideshow preview, bottom-left corner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-12 z-[var(--z-content)] hidden sm:block"
        style={{ left: 'calc(var(--grid-margin) + 2.5rem)' }}
      >
        <PortfolioSlideshow />
      </motion.div>

      {/* support copy, bottom-right corner — in the CTA's old spot */}
      <div
        className="absolute bottom-12 z-[var(--z-content)] max-w-[85%] sm:max-w-xs"
        style={{ right: 'calc(var(--grid-margin) + 2.5rem)' }}
      >
        <TextReveal
          as="p"
          per="word"
          preset="fade-in-blur"
          delay={0.9}
          className="text-right text-sm text-graphite sm:text-base"
        >
          Somos um digital product studio dedicado a tirar ideias do papel. Da
          estratégia de UX à interface final, desenhamos e construímos
          produtos digitais pensados para o ritmo de transformação que a
          tecnologia impõe hoje.
        </TextReveal>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="pointer-events-none absolute bottom-10 left-1/2 z-[var(--z-decorative)] hidden -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-surface/60 py-2 pr-3 pl-4 font-mono text-[10px] tracking-widest text-graphite-dim uppercase backdrop-blur-sm lg:flex"
      >
        scroll
        <motion.span
          animate={reduced ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-5 w-5 items-center justify-center rounded-full bg-lime/10 text-lime"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  )
}
