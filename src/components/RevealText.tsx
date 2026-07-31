import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { viewportOnce } from '../lib/reveal'

// wraps a line of text in a mask box with a solid bar sitting on top of it —
// the bar starts covering the full line, then wipes away to the right on
// scroll-into-view, revealing the text underneath instead of just fading it in
export default function RevealText({
  children,
  className = 'inline-block',
  barClassName = 'bg-lime',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  barClassName?: string
  delay?: number
}) {
  return (
    <span className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1], delay }}
        style={{ transformOrigin: '100% 50%' }}
        className={`absolute inset-0 ${barClassName}`}
      />
    </span>
  )
}
