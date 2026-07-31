import { useGridColumns } from '../lib/useGridColumns'

/**
 * The one and only background grid for the whole site — rendered once at
 * the app root, spanning the full document height. Its vertical lines sit
 * exactly on the same column boundaries as every section's content (same
 * --grid-columns / --grid-gutter / --grid-margin), so it reads as guides
 * for the layout itself rather than a decorative texture layered per
 * section.
 */
export default function LayoutGrid() {
  const columns = useGridColumns()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[var(--z-background)] overflow-hidden"
    >
      <div className="grid-shell grid-cols h-full">
        {Array.from({ length: columns }).map((_, i) => (
          <div key={i} className="h-full border-x border-white/[0.035]" />
        ))}
      </div>
    </div>
  )
}
