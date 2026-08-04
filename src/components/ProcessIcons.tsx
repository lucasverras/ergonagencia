import { motion } from 'framer-motion'

// four abstract, line-art loops — one per step, sharing a frame (a faint
// r=40 ring) and a stroke language so they read as one family:
// understand = a single radar line sweeping inside the frame,
// clarify = scattered points settling into a single aligned line,
// design = a core pulsing outward into radiating spokes,
// build = a shipped node lighting up connected pieces one by one

function Frame() {
  return <circle cx="60" cy="60" r="40" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
}

export function UnderstandVisual() {
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
      <Frame />
      {[0, 1].map((i) => (
        <motion.circle
          key={i}
          cx="60"
          cy="60"
          r="8"
          stroke="var(--color-lime)"
          strokeWidth="1.5"
          initial={{ r: 8, opacity: 0.7 }}
          animate={{ r: 40, opacity: 0 }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: 'easeOut',
            delay: i * 1.8,
          }}
        />
      ))}
      {/* plain CSS animation, not Framer Motion — motion.g recalculates
          transform-origin from the element's own (near-zero-width) bounding
          box and ignores a manually set one, which sends the sweep's pivot
          off-center and the tip swinging outside the frame at some angles */}
      <g
        style={{
          transformBox: 'view-box',
          transformOrigin: '60px 60px',
          animation: 'radar-spin 3.6s linear infinite',
        }}
      >
        <line x1="60" y1="60" x2="60" y2="22" stroke="var(--color-lime)" strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="60" cy="60" r="3.5" fill="currentColor" />
    </svg>
  )
}

export function ClarifyVisual() {
  const scattered = [
    { x: 26, y: 34 },
    { x: 36, y: 76 },
    { x: 24, y: 60 },
    { x: 42, y: 28 },
    { x: 32, y: 88 },
  ]
  const aligned = [28, 44, 60, 76, 92]

  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
      <Frame />
      <line x1="24" y1="60" x2="96" y2="60" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      {scattered.map((p, i) => (
        <motion.circle
          key={i}
          r={i === 2 ? 4 : 3}
          fill={i === 2 ? 'var(--color-lime)' : 'currentColor'}
          fillOpacity={i === 2 ? 1 : 0.6}
          initial={{ cx: p.x, cy: p.y }}
          animate={{
            cx: [p.x, p.x, aligned[i], aligned[i], p.x],
            cy: [p.y, p.y, 60, 60, p.y],
          }}
          transition={{
            duration: 3.6,
            times: [0, 0.15, 0.5, 0.8, 1],
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.1,
          }}
        />
      ))}
    </svg>
  )
}

export function DesignVisual() {
  const count = 8
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
      <Frame />
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2
        const x1 = 60 + Math.cos(angle) * 14
        const y1 = 60 + Math.sin(angle) * 14
        const x2 = 60 + Math.cos(angle) * 38
        const y2 = 60 + Math.sin(angle) * 38
        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-lime)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.15,
            }}
          />
        )
      })}
      <motion.circle
        cx="60"
        cy="60"
        r="9"
        fill="var(--color-lime)"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ originX: '60px', originY: '60px' }}
      />
    </svg>
  )
}

export function BuildVisual() {
  const nodes = [
    { x: 92, y: 36 },
    { x: 98, y: 60 },
    { x: 92, y: 84 },
  ]
  // one shared 3.6s cycle split into three equal 1.2s slots, one per node —
  // each slot draws its connector then fills its node before handing off to
  // the next, so the row reads as one signal moving left to right, not three
  // independent blinkers running out of phase
  const cycle = nodes.length * 1.2

  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
      <Frame />
      <motion.rect
        x="20"
        y="50"
        width="20"
        height="20"
        rx="6"
        fill="#e3ff0c"
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{ duration: cycle, repeat: Infinity, ease: 'easeInOut' }}
      />
      {nodes.map((n, i) => {
        const start = i * 1.2
        const t = (v: number) => (start + v) / cycle
        return (
          <g key={i}>
            <motion.path
              d={`M40,60 L${n.x - 8},${n.y}`}
              stroke="#e3ff0c"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              animate={{
                strokeDashoffset: [0, -18, -18, -18],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: cycle,
                repeat: Infinity,
                ease: 'linear',
                times: [t(0), t(0.5), t(1), t(1)],
              }}
            />
            <motion.rect
              x={n.x - 8}
              y={n.y - 8}
              width="16"
              height="16"
              rx="5"
              stroke="currentColor"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              animate={{
                fill: [
                  'rgba(227,255,12,0)',
                  'rgba(227,255,12,0)',
                  'rgba(227,255,12,1)',
                  'rgba(227,255,12,0)',
                ],
              }}
              transition={{
                duration: cycle,
                repeat: Infinity,
                ease: 'easeInOut',
                times: [t(0), t(0.5), t(0.75), t(1)],
              }}
            />
          </g>
        )
      })}
    </svg>
  )
}
