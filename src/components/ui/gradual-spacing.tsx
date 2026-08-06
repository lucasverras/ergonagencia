import { motion, type Variants } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { HandHighlight, type HandHighlightVariant, type HandHighlightColor } from './hand-highlight'

interface GradualSpacingProps {
  text: string
  duration?: number
  delayMultiple?: number
  framerProps?: Variants
  className?: string
  // which tag wraps the whole line — the original component put every
  // single character in its own <h1>, which is an SEO/accessibility
  // problem (one page should have exactly one <h1>, and a heading
  // shouldn't wrap a single letter). Here the tag wraps the full text
  // once; only the per-character <motion.span>s stagger in.
  as?: ElementType
  // marks one word (or a short phrase, e.g. "no ar") with a hand-drawn
  // accent *inside* this same word-loop — wrapping it in a separate outer
  // flex sibling instead (an earlier approach) breaks line-wrapping: when
  // that sibling lands alone on a trailing row, a justify-center on the
  // outer flex centers it across the whole width instead of continuing
  // the paragraph's left-aligned flow.
  highlight?: {
    word: string
    variant?: HandHighlightVariant
    color?: HandHighlightColor
    delay?: number
  }
}

export function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  as: Tag = 'span',
  highlight,
}: GradualSpacingProps) {
  // wrapping happens between words, never inside one — each word's letters
  // sit in their own non-wrapping unit so a narrow viewport can't split
  // "resultados" into "resul" + "tados" on separate lines
  const words = text.split(' ')
  const highlightWords = highlight ? highlight.word.split(' ') : []

  // per-word starting character index, precomputed so the highlight-phrase
  // grouping below doesn't have to juggle a running counter while it skips
  // ahead by more than one word at a time
  let running = 0
  const wordStarts = words.map((word) => {
    const start = running
    running += word.length + 1
    return start
  })

  function renderLetters(word: string, wi: number) {
    const startIndex = wordStarts[wi]
    return word.split('').map((char, ci) => (
      <motion.span
        key={ci}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={framerProps}
        transition={{ duration, delay: (startIndex + ci) * delayMultiple }}
        className="drop-shadow-sm"
      >
        {char}
      </motion.span>
    ))
  }

  const nodes: ReactNode[] = []
  for (let wi = 0; wi < words.length; ) {
    const isHighlightStart =
      !!highlight && words.slice(wi, wi + highlightWords.length).join(' ') === highlight.word
    const span = isHighlightStart ? highlightWords.length : 1
    const groupEnd = wi + span

    const group = (
      <span className="inline-flex flex-wrap">
        {words.slice(wi, groupEnd).map((word, gi) => (
          <span key={gi} className="inline-flex whitespace-nowrap">
            {renderLetters(word, wi + gi)}
            {wi + gi < groupEnd - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </span>
    )

    nodes.push(
      <span key={wi} className="inline-flex whitespace-nowrap">
        {isHighlightStart ? (
          <HandHighlight variant={highlight!.variant} color={highlight!.color} delay={highlight!.delay}>
            {group}
          </HandHighlight>
        ) : (
          group
        )}
        {groupEnd < words.length && <span>&nbsp;</span>}
      </span>,
    )

    wi = groupEnd
  }

  return <Tag className={cn('inline-flex flex-wrap', className)}>{nodes}</Tag>
}
