import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import MagicBentoCard from './ui/MagicBentoCard'
import { GradualSpacing } from './ui/gradual-spacing'
import { TextReveal } from './ui/text-reveal'

export interface ProductStepData {
  n: string
  tag: string
  title: string
  blurb: string
  badge: string
  image: string
}

// artwork sits behind everything, strongest in the top-right corner (away
// from the label and title, which anchor top-left and bottom-left) and
// fades out toward those text zones so it reads as texture, not a fight
// for attention
const imageMask = {
  maskImage:
    'radial-gradient(130% 130% at 100% 0%, black 0%, black 35%, transparent 75%)',
  WebkitMaskImage:
    'radial-gradient(130% 130% at 100% 0%, black 0%, black 35%, transparent 75%)',
}

export default function ProductStep({
  step,
  className = '',
}: {
  step: ProductStepData
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealUp}
      className={`h-full ${className}`}
    >
      <MagicBentoCard className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-md transition-colors duration-300 hover:border-lime/30 md:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={imageMask}
        >
          <img
            src={step.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-70"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-surface via-surface/30 to-transparent" />

        <span className="relative z-10 text-sm text-graphite md:text-base">
          {step.tag}
        </span>

        <div className="relative z-10">
          <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            <GradualSpacing as="span" text={step.title} duration={0.35} delayMultiple={0.025} />
          </h3>
          <TextReveal as="p" per="line" preset="fade" className="mt-1.5 text-sm text-graphite">
            {step.blurb}
          </TextReveal>
          <p className="mt-3 font-mono text-[10px] tracking-[0.2em] text-lime uppercase">
            {step.badge}
          </p>
        </div>
      </MagicBentoCard>
    </motion.div>
  )
}
