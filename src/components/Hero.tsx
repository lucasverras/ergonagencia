import { useReducedMotion, motion, type Variants } from 'framer-motion'
import TypewriterWord from './TypewriterWord'
import RevealText from './RevealText'
import { DarkVeil } from './ui/dark-veil'

const words = [
  'vivo',
  'lançado',
  'vendável',
  'funcional',
  'no ar',
  'em operação',
  'afiado',
]

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-bg pt-14"
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
          Headline and support copy are real grid columns (1/8 and 8/13) — no
          absolute positioning or percentage offsets — so both start/end on
          the same lines as every other section. At 4/8-column breakpoints
          both spans collapse to full width and stack in DOM order. */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="grid-shell grid-cols relative z-[var(--z-content)]"
      >
        {/* headline: smaller and wider than before — each fixed line now
            comfortably fits more text, so it reads as long confident lines
            rather than a stacked wall of giant type. The dynamic word still
            gets its own line (unconstrained width, whitespace-nowrap) so
            "em operação" never wraps or reflows the line above it. */}
        <h1 className="col-headline text-[clamp(1.9rem,4.08vw,4rem)] leading-[1.08] font-semibold tracking-tight">
          <RevealText className="block w-fit text-balance" barClassName="bg-bg">
            Menos ideia parada.
          </RevealText>
          <RevealText
            className="mt-1 block w-fit"
            barClassName="bg-bg"
            delay={0.12}
          >
            Mais produto
          </RevealText>
          <RevealText
            className="block w-fit whitespace-nowrap"
            barClassName="bg-bg"
            delay={0.2}
          >
            <TypewriterWord words={words} />
          </RevealText>
        </h1>

        {/* support copy: sits in columns 8–12, aligned to the bottom of the
            headline row so it reads as lower and to the right on desktop —
            achieved with grid alignment, not translate or percentage offsets */}
        <motion.p
          variants={item}
          className="col-support mt-7 max-w-[72%] self-end text-sm text-graphite xl:mt-0 xl:text-base"
        >
          Somos um digital product studio dedicado a tirar ideias do papel.
          Da estratégia de UX à interface final, desenhamos e construímos
          produtos digitais pensados para o ritmo de transformação que a
          tecnologia impõe hoje.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="pointer-events-none absolute bottom-8 z-[var(--z-decorative)] flex items-center gap-2 font-mono text-[10px] tracking-widest text-graphite-dim uppercase"
        style={{ right: 'var(--grid-margin)' }}
      >
        scroll
        <motion.span
          animate={reduced ? undefined : { y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  )
}
