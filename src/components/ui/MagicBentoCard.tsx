import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import './MagicBentoCard.css'

// local re-implementation of React Bits' MagicBento hover interaction
// (spotlight + border glow + tilt + magnetism + click ripple) on top of
// framer-motion + CSS instead of gsap — the project already has
// framer-motion for exactly this kind of spring-driven pointer effect
// (see StatCard), so a second animation library isn't worth the weight
// for the same result.
export default function MagicBentoCard({
  children,
  className = '',
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
}: {
  children: ReactNode
  className?: string
  enableTilt?: boolean
  enableMagnetism?: boolean
  clickEffect?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const tiltSpring = { stiffness: 300, damping: 26, mass: 0.6 } as const
  const magnetSpring = { stiffness: 200, damping: 20 } as const
  const springRotateX = useSpring(rotateX, tiltSpring)
  const springRotateY = useSpring(rotateY, tiltSpring)
  const springX = useSpring(x, magnetSpring)
  const springY = useSpring(y, magnetSpring)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2

    ref.current.style.setProperty('--glow-x', `${(px / rect.width) * 100}%`)
    ref.current.style.setProperty('--glow-y', `${(py / rect.height) * 100}%`)
    ref.current.style.setProperty('--glow-intensity', '1')

    if (enableTilt) {
      rotateX.set(((py - cy) / cy) * -6)
      rotateY.set(((px - cx) / cx) * 6)
    }
    if (enableMagnetism) {
      x.set((px - cx) * 0.04)
      y.set((py - cy) * 0.04)
    }
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.setProperty('--glow-intensity', '0')
    rotateX.set(0)
    rotateY.set(0)
    x.set(0)
    y.set(0)
  }

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !clickEffect || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    const maxDistance = Math.max(
      Math.hypot(px, py),
      Math.hypot(px - rect.width, py),
      Math.hypot(px, py - rect.height),
      Math.hypot(px - rect.width, py - rect.height),
    )

    const ripple = document.createElement('span')
    ripple.className = 'bento-ripple'
    ripple.style.width = ripple.style.height = `${maxDistance * 2}px`
    ripple.style.left = `${px - maxDistance}px`
    ripple.style.top = `${py - maxDistance}px`
    ref.current.appendChild(ripple)
    ripple.addEventListener('animationend', () => ripple.remove())
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        rotateX: reduced ? 0 : springRotateX,
        rotateY: reduced ? 0 : springRotateY,
        x: reduced ? 0 : springX,
        y: reduced ? 0 : springY,
        transformPerspective: 800,
      }}
      className={`magic-bento-card relative ${className}`}
    >
      {children}
    </motion.div>
  )
}
