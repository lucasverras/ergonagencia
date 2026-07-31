import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const TYPE_SPEED = 65
const DELETE_SPEED = 38
const PAUSE_AFTER_TYPE = 1300
const PAUSE_AFTER_DELETE = 250

export default function TypewriterWord({ words }: { words: string[] }) {
  const reduced = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [display, setDisplay] = useState(reduced ? words[0] : '')

  useEffect(() => {
    if (reduced) {
      setDisplay(words[0])
      return
    }

    const word = words[wordIndex]
    let charIndex = 0
    let phase: 'typing' | 'pausing' | 'deleting' = 'typing'
    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      if (phase === 'typing') {
        charIndex += 1
        setDisplay(word.slice(0, charIndex))
        if (charIndex >= word.length) {
          phase = 'pausing'
          timeout = setTimeout(tick, PAUSE_AFTER_TYPE)
        } else {
          timeout = setTimeout(tick, TYPE_SPEED)
        }
      } else if (phase === 'pausing') {
        phase = 'deleting'
        timeout = setTimeout(tick, DELETE_SPEED)
      } else {
        charIndex -= 1
        setDisplay(word.slice(0, Math.max(charIndex, 0)))
        if (charIndex <= 0) {
          timeout = setTimeout(() => {
            setWordIndex((i) => (i + 1) % words.length)
          }, PAUSE_AFTER_DELETE)
        } else {
          timeout = setTimeout(tick, DELETE_SPEED)
        }
      }
    }

    timeout = setTimeout(tick, TYPE_SPEED)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordIndex, reduced])

  return (
    <span className="text-lime">
      {display}
      <span
        aria-hidden="true"
        className="animate-[blink_1.1s_steps(1)_infinite] text-lime"
      >
        _
      </span>
    </span>
  )
}
