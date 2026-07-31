import { useEffect, useState } from 'react'

/** Reads the live --grid-columns value (4 / 8 / 12) so anything that needs
 * to render one element per column stays in sync with the CSS breakpoints
 * instead of duplicating the 768px/1280px thresholds in JS. */
export function useGridColumns() {
  const [columns, setColumns] = useState(12)

  useEffect(() => {
    const read = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue(
        '--grid-columns',
      )
      const n = parseInt(raw, 10)
      if (!Number.isNaN(n)) setColumns(n)
    }
    read()
    window.addEventListener('resize', read)
    return () => window.removeEventListener('resize', read)
  }, [])

  return columns
}
