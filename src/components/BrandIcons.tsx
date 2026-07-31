// small monochrome glyphs standing in for each tool's mark — simplified so
// they read cleanly at 16px inside a dark badge, kept single-color to match
// the site's restrained black/lime palette instead of each app's real brand
// colors

export function FigmaMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <path
        d="M6 1h2.5a2.5 2.5 0 0 1 0 5H6V1Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M3.5 3.5A2.5 2.5 0 0 1 6 1v5a2.5 2.5 0 0 1-2.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M3.5 8.5A2.5 2.5 0 0 1 6 6h0v5h0a2.5 2.5 0 0 1-2.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="8.5" cy="11" r="2" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

export function ClaudeMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
      {Array.from({ length: 6 }).map((_, i) => (
        <rect
          key={i}
          x="7.3"
          y="1.5"
          width="1.4"
          height="5.5"
          rx="0.7"
          transform={`rotate(${i * 30} 8 8)`}
        />
      ))}
    </svg>
  )
}

export function LovableMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <path
        d="M8 13.5S2 9.8 2 5.9A2.9 2.9 0 0 1 8 5a2.9 2.9 0 0 1 6 .9c0 3.9-6 7.6-6 7.6Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FramerMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
      <path d="M3 1h10v5H8L3 1Z" />
      <path d="M3 6h5l5 5H8v4L3 10V6Z" />
    </svg>
  )
}

export function PhotoshopMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.1" />
      <text
        x="8"
        y="11.2"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="currentColor"
        fontFamily="monospace"
      >
        Ps
      </text>
    </svg>
  )
}

export function IllustratorMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.1" />
      <text
        x="8"
        y="11.2"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="currentColor"
        fontFamily="monospace"
      >
        Ai
      </text>
    </svg>
  )
}
