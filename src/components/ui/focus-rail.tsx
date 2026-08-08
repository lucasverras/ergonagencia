import * as React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type FocusRailItem = {
  id: string | number
  title: string
  description?: string
  imageSrc: string
  href?: string
  meta?: string
  tags?: string[]
}

interface FocusRailProps {
  items: FocusRailItem[]
  initialIndex?: number
  loop?: boolean
  autoPlay?: boolean
  interval?: number
  className?: string
  // lets a parent render its own ambient background (behind the whole
  // composition, not just this component's own box) instead of — or in
  // addition to — the contained glow this component draws internally
  onActiveChange?: (item: FocusRailItem, index: number) => void
}

/**
 * Helper to wrap indices (e.g., -1 becomes length-1)
 */
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

/**
 * Physics Configuration
 * Base spring for spatial movement (x/z)
 */
const BASE_SPRING = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 1,
} as const

/**
 * Scale Spring
 * Bouncier spring specifically for the visual "Click/Tap" feedback on the center card
 */
const TAP_SPRING = {
  type: 'spring',
  stiffness: 450,
  damping: 18, // Lower damping = subtle overshoot/wobble "tap"
  mass: 1,
} as const

export function FocusRail({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = false,
  interval = 4000,
  className,
  onActiveChange,
}: FocusRailProps) {
  const [active, setActive] = React.useState(initialIndex)
  const [isHovering, setIsHovering] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const count = items.length
  const activeIndex = wrap(0, count, active)
  const activeItem = items[activeIndex]

  React.useEffect(() => {
    onActiveChange?.(activeItem, activeIndex)
  }, [activeItem, activeIndex, onActiveChange])

  // --- NAVIGATION HANDLERS ---
  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return
    setActive((p) => p - 1)
  }, [loop, active])

  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return
    setActive((p) => p + 1)
  }, [loop, active, count])

  // Autoplay logic
  React.useEffect(() => {
    if (!autoPlay || isHovering) return
    const timer = setInterval(() => handleNext(), interval)
    return () => clearInterval(timer)
  }, [autoPlay, isHovering, handleNext, interval])

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev()
    if (e.key === 'ArrowRight') handleNext()
  }

  // --- SWIPE / DRAG LOGIC ---
  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const onDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      handleNext()
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev()
    }
  }

  const visibleIndices = [-2, -1, 0, 1, 2]

  return (
    <div
      ref={containerRef}
      className={cn(
        // fixed height only from md: up, where it bounds the 3D carousel's
        // perspective math — on mobile the info block + tags + CTA can run
        // longer than that budget, and a fixed height + overflow-hidden
        // was clipping the CTA button off the bottom instead of letting
        // the box grow to fit
        'group relative flex h-auto w-full flex-col overflow-x-hidden text-ink outline-none select-none md:h-[490px] md:overflow-hidden lg:h-[530px]',
        className,
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* Main Stage */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 md:px-8">
        {/* DRAGGABLE RAIL CONTAINER */}
        <motion.div
          className="relative mx-auto flex h-[240px] w-full max-w-6xl items-center justify-center [perspective:1200px] md:h-[320px] lg:h-[360px]"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset
            const index = wrap(0, count, absIndex)
            const item = items[index]

            if (!loop && (absIndex < 0 || absIndex >= count)) return null

            const isCenter = offset === 0
            const dist = Math.abs(offset)

            // Dynamic transforms
            const xOffset = offset * 600
            const zOffset = -dist * 270
            const scale = isCenter ? 1 : 0.85
            const rotateY = offset * -20

            const opacity = isCenter ? 1 : Math.max(0.1, 1 - dist * 0.5)
            const blur = isCenter ? 0 : dist * 6
            const brightness = isCenter ? 1 : 0.5

            return (
              <motion.div
                key={absIndex}
                className={cn(
                  // landscape, matching a real browser screenshot instead of
                  // a portrait frame that cropped most of each site away
                  'absolute aspect-[16/10] w-[300px] rounded-2xl border-t border-line bg-surface shadow-2xl transition-shadow duration-300 md:w-[560px] lg:w-[600px]',
                  isCenter ? 'z-20 shadow-lime/10' : 'z-10',
                )}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                  filter: `blur(${blur}px) brightness(${brightness})`,
                }}
                transition={{ scale: TAP_SPRING, default: BASE_SPRING }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => {
                  if (offset !== 0) setActive((p) => p + offset)
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="pointer-events-none h-full w-full rounded-2xl object-cover object-top"
                />

                {/* Lighting layers */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/10 mix-blend-multiply" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Info & Controls */}
        <div className="pointer-events-auto mx-auto mt-6 flex w-full max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex min-h-24 flex-1 flex-col items-center justify-center text-center md:items-start md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                {activeItem.meta && (
                  <span className="text-xs font-medium tracking-wider text-lime uppercase">
                    {activeItem.meta}
                  </span>
                )}
                {/* h3, not h2: this rail's only real usage is nested inside
                    Portfolio's own h2 ("O que já colocamos no ar") — each
                    project name is a sub-item of that section, not a
                    sibling section heading */}
                <h3 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  {activeItem.title}
                </h3>
                {activeItem.description && (
                  <p className="max-w-md text-graphite">{activeItem.description}</p>
                )}
                {activeItem.tags && activeItem.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 pt-1 md:justify-start">
                    {activeItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs text-graphite-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4">
            {/* prev/next + counter — hidden on mobile, where it was crowding
                the single CTA button into overflowing the card's width;
                swipe/drag already covers navigation at that size */}
            <div className="hidden items-center gap-1 rounded-full bg-surface/80 p-1 ring-1 ring-line backdrop-blur-md sm:flex">
              <button
                onClick={handlePrev}
                className="rounded-full p-3 text-graphite transition hover:bg-white/10 hover:text-ink active:scale-95"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-[40px] text-center font-mono text-xs text-graphite-dim">
                {activeIndex + 1} / {count}
              </span>
              <button
                onClick={handleNext}
                className="rounded-full p-3 text-graphite transition hover:bg-white/10 hover:text-ink active:scale-95"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {activeItem.href && (
              activeItem.href.startsWith('/') ? (
                <Link
                  to={activeItem.href}
                  className="group flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105 active:scale-95"
                >
                  Conferir
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ) : (
                <a
                  href={activeItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105 active:scale-95"
                >
                  Conferir
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
