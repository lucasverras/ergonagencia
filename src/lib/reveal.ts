import type { Variants } from 'framer-motion'

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export const revealContainer = (stagger = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger },
  },
})

export const viewportOnce = { once: true, amount: 0.3 } as const
