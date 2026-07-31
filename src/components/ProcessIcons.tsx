import { motion } from 'framer-motion'

// four abstract, line-art loops — one per step, each echoing what that
// step actually does rather than a generic icon:
// understand = a radar beam sweeping and pinging outward as it picks up signal,
// clarify = scattered points settling into a single aligned line,
// design = a core idea drawing outward into radiating flows,
// build = a shipped node lighting up connected pieces one by one

export function UnderstandVisual() {
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx="60"
          cy="60"
          r="10"
          stroke="var(--color-lime)"
          strokeWidth="1.5"
          initial={{ r: 10, opacity: 0.8 }}
          animate={{ r: 48, opacity: 0 }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: 'easeOut',
            delay: i * 0.9,
          }}
        />
      ))}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '60px', originY: '60px' }}
      >
        <path d="M60,60 L60,14 A46,46 0 0 1 92,27 Z" fill="var(--color-lime)" fillOpacity="0.18" />
        <line x1="60" y1="60" x2="60" y2="14" stroke="var(--color-lime)" strokeWidth="2" />
      </motion.g>
      {[44, 32].map((r) => (
        <circle
          key={r}
          cx="60"
          cy="60"
          r={r}
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeWidth="1"
        />
      ))}
      <circle cx="60" cy="60" r="3.5" fill="currentColor" />
    </svg>
  )
}

export function ClarifyVisual() {
  const scattered = [
    { x: 22, y: 30 },
    { x: 34, y: 78 },
    { x: 20, y: 60 },
    { x: 40, y: 24 },
    { x: 30, y: 92 },
  ]
  const aligned = [24, 42, 60, 78, 96]

  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
      <line x1="16" y1="60" x2="104" y2="60" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
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
  const count = 14
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '60px', originY: '60px' }}
      >
        {Array.from({ length: count }).map((_, i) => {
          const angle = (i / count) * Math.PI * 2
          const x1 = 60 + Math.cos(angle) * 14
          const y1 = 60 + Math.sin(angle) * 14
          const x2 = 60 + Math.cos(angle) * 46
          const y2 = 60 + Math.sin(angle) * 46
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0.3, opacity: 0.15 }}
              animate={{ pathLength: [0.3, 1, 0.3], opacity: [0.15, 0.7, 0.15] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.09,
              }}
            />
          )
        })}
      </motion.g>
      <motion.circle
        cx="60"
        cy="60"
        r="9"
        fill="var(--color-lime)"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ originX: '60px', originY: '60px' }}
      />
    </svg>
  )
}

export function BuildVisual() {
  const nodes = [
    { x: 98, y: 34 },
    { x: 104, y: 60 },
    { x: 98, y: 86 },
  ]
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
      <motion.rect
        x="16"
        y="50"
        width="22"
        height="22"
        rx="6"
        fill="var(--color-lime)"
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {nodes.map((n, i) => (
        <g key={i}>
          <motion.path
            d={`M38,61 L${n.x - 9},${n.y}`}
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
            x={n.x - 9}
            y={n.y - 9}
            width="18"
            height="18"
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
