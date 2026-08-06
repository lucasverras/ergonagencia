import { useCallback, useEffect, useRef, useState, type MouseEvent, type TouchEvent } from 'react'
import { ChevronsLeftRight } from 'lucide-react'

export interface ImageComparisonProps {
  beforeImage: string
  afterImage: string
  altBefore?: string
  altAfter?: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
  // 'video' renders both sides as looping, muted <video> instead of <img> —
  // same clip-path mechanics either way
  media?: 'image' | 'video'
}

// desktop: the slider just follows the mouse the moment it's over the
// component — no click-and-drag, moving left/right is enough. Touch has no
// hover concept, so it stays a real drag there (touchstart → move → end).
export function ImageComparison({
  beforeImage,
  afterImage,
  altBefore = 'Antes',
  altAfter = 'Depois',
  beforeLabel,
  afterLabel,
  className = '',
  media = 'image',
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isTouchDragging, setIsTouchDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    let newPosition = ((clientX - rect.left) / rect.width) * 100
    newPosition = Math.max(0, Math.min(100, newPosition))
    setSliderPosition(newPosition)
  }, [])

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX)
  const handleTouchMove = (e: TouchEvent) => {
    if (isTouchDragging) handleMove(e.touches[0].clientX)
  }

  // a touch-drag that ends outside the component still needs to release —
  // a window-level listener catches what onTouchEnd alone would miss
  useEffect(() => {
    if (!isTouchDragging) return
    const stop = () => setIsTouchDragging(false)
    window.addEventListener('touchend', stop)
    return () => window.removeEventListener('touchend', stop)
  }, [isTouchDragging])

  const mediaClass = 'block h-full w-full object-cover object-top'

  return (
    <div
      ref={containerRef}
      data-hide-cursor="true"
      className={`group relative w-full cursor-none touch-none overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl select-none ${className}`}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsTouchDragging(true)}
      onTouchMove={handleTouchMove}
    >
      {/* before */}
      {media === 'video' ? (
        <video
          src={beforeImage}
          className={mediaClass}
          autoPlay
          muted
          loop
          playsInline
          aria-label={altBefore}
        />
      ) : (
        <img src={beforeImage} alt={altBefore} className={mediaClass} draggable="false" />
      )}

      {/* after, revealed from the right as the handle moves left — "before"
          stays the always-visible base layer on the left of the handle */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        {media === 'video' ? (
          <video
            src={afterImage}
            className="h-full w-full object-cover object-top"
            autoPlay
            muted
            loop
            playsInline
            aria-label={altAfter}
          />
        ) : (
          <img
            src={afterImage}
            alt={altAfter}
            className="h-full w-full object-cover object-top"
            draggable="false"
          />
        )}
      </div>

      {/* side labels */}
      {beforeLabel && (
        <span className="absolute bottom-4 left-4 z-10 rounded-full border border-line bg-bg/70 px-3 py-1 font-mono text-xs text-graphite uppercase backdrop-blur-sm">
          {beforeLabel}
        </span>
      )}
      {afterLabel && (
        <span className="absolute right-4 bottom-4 z-10 rounded-full border border-lime/40 bg-bg/70 px-3 py-1 font-mono text-xs text-lime uppercase backdrop-blur-sm">
          {afterLabel}
        </span>
      )}

      {/* handle */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 z-20 w-0.5 bg-lime"
        style={{ left: `calc(${sliderPosition}% - 1px)` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lime/40 bg-bg text-lime shadow-lg transition-transform duration-200 group-hover:scale-105">
          <ChevronsLeftRight className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
