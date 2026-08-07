import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '@/lib/reveal'

// Agharti is reserved for true titles (hero name, section index/title,
// next-project name) — a quote sits inside the reading flow, so it speaks
// in the body face too, just pushed to caps + bold for the same weight of
// attention Agharti would otherwise carry.
const sizeClasses = {
  md: 'text-xl md:text-2xl',
  lg: 'text-3xl md:text-5xl',
} as const

export function CaseQuote({
  text,
  className,
  size = 'md',
  accent = true,
}: {
  text: string
  className?: string
  size?: keyof typeof sizeClasses
  /** the growing lime accent line + left indent — turned off for a centered/standalone quote */
  accent?: boolean
}) {
  return (
    <motion.blockquote
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealUp}
      className={`relative font-sans font-bold uppercase leading-[1.15] tracking-tight text-ink ${accent ? 'pl-6' : ''} ${sizeClasses[size]} ${className ?? ''}`}
    >
      {accent && (
        <motion.span
          aria-hidden="true"
          className="absolute top-0 left-0 h-full w-0.5 origin-top bg-lime shadow-[0_0_16px_2px_rgba(227,255,12,0.5)]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      &ldquo;{text}&rdquo;
    </motion.blockquote>
  )
}
