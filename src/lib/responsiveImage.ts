import variants from './imageVariants.json'

/** Builds a srcset from the width variants that were actually generated
 * (`scripts/optimize-images.mjs --variants` writes imageVariants.json).
 *
 * Reading the manifest rather than assuming a fixed ladder matters: small
 * images get no variants at all, and a srcset entry pointing at a file
 * that was never written is a 404 on every page view.
 */
const map = variants as Record<string, number[]>

export function srcSetFor(src: string | undefined): string | undefined {
  if (!src) return undefined
  const widths = map[src]
  if (!widths?.length) return undefined
  const base = src.replace(/\.webp$/, '')
  // the untouched original is the widest candidate; its real width isn't
  // in the manifest, so describe it one step above the largest variant
  return [
    ...widths.map((w) => `${base}-${w}w.webp ${w}w`),
    `${src} ${widths[widths.length - 1] * 2}w`,
  ].join(', ')
}
