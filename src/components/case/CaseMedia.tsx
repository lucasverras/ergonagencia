import type { CaseMediaAsset } from '@/cases/casesData'

function initialsOf(alt: string) {
  const words = alt.split(' ').filter(Boolean)
  return (words[0]?.[0] ?? 'E').toUpperCase()
}

function placeholderSrc(alt: string) {
  const initials = initialsOf(alt)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000">
    <rect width="100%" height="100%" fill="#111018" />
    <defs>
      <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
        <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <text x="50%" y="52%" font-family="sans-serif" font-size="320" font-weight="700" fill="rgba(255,255,255,0.08)" text-anchor="middle" dominant-baseline="middle">${initials}</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export function CaseMedia({
  asset,
  eager = false,
  className,
  aspect = 'aspect-[16/10]',
}: {
  asset: CaseMediaAsset
  eager?: boolean
  className?: string
  aspect?: string
}) {
  const src = asset.kind === 'real' && asset.src ? asset.src : placeholderSrc(asset.alt)

  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-2xl border border-line bg-surface ${aspect}`}>
        <img
          src={src}
          alt={asset.alt}
          loading={eager ? 'eager' : 'lazy'}
          className="h-full w-full object-cover object-top"
        />
        {asset.kind === 'placeholder' && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-4">
            <span className="text-[11px] tracking-[0.15em] text-graphite-dim uppercase">
              Sem captura pública disponível
            </span>
          </div>
        )}
      </div>
      {asset.note && <p className="mt-2 text-xs text-graphite-dim">{asset.note}</p>}
      {/* TODO case asset: replace placeholder with real screenshot once available */}
    </figure>
  )
}
