import { useEffect, useState } from 'react'

/** SSR-safe viewport check. Starts `false` so the prerendered HTML and the
 * client's first render agree (no hydration mismatch); the real value lands
 * in an effect, before the WebGL shader below it ever paints a frame. */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const read = () => setIsMobile(mq.matches)
    read()
    mq.addEventListener('change', read)
    return () => mq.removeEventListener('change', read)
  }, [breakpoint])

  return isMobile
}
