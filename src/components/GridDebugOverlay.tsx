import { useEffect, useState } from 'react'
import { useGridColumns } from '../lib/useGridColumns'

/**
 * Dev-only grid overlay — toggle with Ctrl+G (Cmd+G on macOS). Shows the
 * 12/8/4-column grid plus the single start/end line every section's
 * content must respect. Never rendered in production builds.
 */
export default function GridDebugOverlay() {
  const [visible, setVisible] = useState(false)
  const columns = useGridColumns()

  useEffect(() => {
    if (!import.meta.env.DEV) return
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'g') {
        e.preventDefault()
        setVisible((v) => !v)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  if (!import.meta.env.DEV || !visible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[var(--z-modal)]">
      <div className="grid-shell grid-cols h-full">
        {Array.from({ length: columns }).map((_, i) => (
          <div
            key={i}
            className="h-full bg-lime/[0.08] outline outline-1 -outline-offset-1 outline-lime/40"
          />
        ))}
      </div>
      <div className="fixed top-2 left-1/2 -translate-x-1/2 rounded-full border border-lime/40 bg-bg/90 px-3 py-1 font-mono text-[10px] text-lime">
        grid: {columns} col · Ctrl/Cmd+G to toggle
      </div>
    </div>
  )
}
