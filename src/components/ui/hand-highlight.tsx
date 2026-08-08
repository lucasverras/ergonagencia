import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { viewportOnce } from '../../lib/reveal'

export type HandHighlightVariant = 'circle' | 'underline'
export type HandHighlightColor = 'lime' | 'bg'
type Variant = HandHighlightVariant
type Color = HandHighlightColor

// pencil-thin, hand-drawn marks — never a single clean pass. A circle loops
// loosely around the word with a gap where the hand lifted, an underline is
// two or three redrawn strokes of slightly different weight. Both stay
// outside the letterforms so they never fight legibility.
export function HandHighlight({
  children,
  variant = 'underline',
  color = 'lime',
  delay = 0.6,
}: {
  children: ReactNode
  variant?: Variant
  // 'bg' for sections with an inverted (lime background) palette, where a
  // lime stroke would be invisible against the lime backdrop
  color?: Color
  // seconds to hold before drawing — the mark should read as a reaction to
  // the word, not something arriving at the same time as it. Tune this up
  // for a longer heading whose own letter-reveal takes longer to finish.
  delay?: number
}) {
  const colorClass = color === 'lime' ? 'text-lime' : 'text-bg'

  return (
    <span className="relative inline-block px-1.5">
      <span className="relative z-10">{children}</span>

      {variant === 'circle' ? (
        <svg
          viewBox="0 0 220 90"
          preserveAspectRatio="none"
          aria-hidden="true"
          // em-based offsets (not the fixed px a Tailwind inset scale gives
          // you) so the mark scales down with the heading's own font-size
          // instead of reading proportionally oversized on a smaller
          // mobile heading — this was tuned against a much bigger desktop
          // heading, so any fixed-px inset in this file the underline
          // variant below included overwhelms the smaller mobile letters.
          style={{ left: '-0.17em', right: '-0.17em', top: '-0.17em', bottom: '-0.42em' }}
          className={`pointer-events-none absolute ${colorClass}`}
          fill="none"
        >
          <motion.path
            d="M190,22 C160,4 100,2 55,5 C15,10 5,29 9,49 C13,67 45,81 92,84 C138,87 180,77 196,59 C204,49 201,33 194,26"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.92 }}
            viewport={viewportOnce}
            transition={{ duration: 0.85, delay, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 200 26"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ left: '-0.17em', bottom: '-0.25em', height: '0.33em', width: 'calc(100% + 0.34em)' }}
          className={`pointer-events-none absolute ${colorClass}`}
          fill="none"
        >
          <g transform="rotate(-1 100 13)">
            {/* main pass — straight, with only the faint bow a real hand
                leaves, not a wavy line */}
            <motion.path
              d="M4,14 C50,10.5 100,13.5 150,10.5 C170,9 185,11.5 196,10"
              stroke="currentColor"
              strokeWidth={4}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.95 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay, ease: [0.65, 0, 0.35, 1] }}
            />
            {/* shorter reinforcing pass, thinner, doesn't reach the tips —
                also straight, redrawn slightly below the first */}
            <motion.path
              d="M16,18 C55,15.5 100,17.5 145,15"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: delay + 0.35, ease: [0.65, 0, 0.35, 1] }}
            />
          </g>
        </svg>
      )}
    </span>
  )
}
