import { motion, type Variants } from 'framer-motion'
import type { ElementType } from 'react'

import { cn } from '@/lib/utils'

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
}: GradualSpacingProps) {
  return (
    <Tag className={cn('inline-flex flex-wrap', className)}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={framerProps}
          transition={{ duration, delay: i * delayMultiple }}
          className="drop-shadow-sm"
        >
          {char === ' ' ? <span>&nbsp;</span> : char}
        </motion.span>
      ))}
    </Tag>
  )
}
