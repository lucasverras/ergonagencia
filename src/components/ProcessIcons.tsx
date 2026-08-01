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
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeOut',
            delay: i * 1.4,
          }}
        />
      ))}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '60px', originY: '60px' }}
      >
        <line x1="60" y1="60" x2="60" y2="20" stroke="var(--color-lime)" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
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
            duration: 4,
            times: [0, 0.15, 0.5, 0.8, 1],
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.12,
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
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.1,
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
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
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
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
      <Frame />
      <motion.rect
        x="20"
        y="50"
        width="20"
        height="20"
        rx="6"
        fill="var(--color-lime)"
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {nodes.map((n, i) => (
        <g key={i}>
          <motion.path
            d={`M40,61 L${n.x - 8},${n.y}`}
            stroke="var(--color-lime)"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            initial={{ strokeDashoffset: 0, opacity: 0 }}
            animate={{ strokeDashoffset: -18, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
              times: [0, 0.1, 0.8, 1],
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
            animate={{ fill: ['rgba(0,0,0,0)', 'var(--color-lime)', 'rgba(0,0,0,0)'] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5 + 0.9,
            }}
          />
        </g>
      ))}
    </svg>
  )
}
