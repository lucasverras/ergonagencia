import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { revealUp, revealContainer, viewportOnce } from '@/lib/reveal'
import { renderRichText } from '@/lib/richText'
import type { CaseContentBlock } from '@/cases/casesData'
import { CaseQuote } from './CaseQuote'

function Block({ block }: { block: CaseContentBlock }) {
  switch (block.kind) {
    case 'p':
      return (
        <p className="text-base leading-relaxed text-graphite md:text-lg">
          {renderRichText(block.text)}
        </p>
      )
    case 'heading':
      return (
        <h4 className="font-sans text-base font-bold tracking-wide text-ink uppercase md:text-lg">
          {block.text}
        </h4>
      )
    case 'quote':
      return <CaseQuote text={block.text} className="my-2" />
    case 'list':
      return (
        <ul className="space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-graphite md:text-lg">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
              <span>{renderRichText(item)}</span>
            </li>
          ))}
        </ul>
      )
    default:
      return null
  }
}

export function CaseSection({
  index,
  title,
  blocks,
  children,
}: {
  index: string
  title: string
  blocks: CaseContentBlock[]
  children?: ReactNode
}) {
  // an editorial spread rather than one long stacked column — the section's
  // blocks split left/right in reading order, one paragraph settling on
  // each side instead of piling underneath a single margin
  const mid = Math.ceil(blocks.length / 2)
  const left = blocks.slice(0, mid)
  const right = blocks.slice(mid)

  return (
    <section className="group relative overflow-hidden border-t border-line py-14 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -top-24 -z-10 h-64 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(480px circle at 10% 0%, rgba(139,92,246,0.16), transparent 70%)',
        }}
      />

      <div className="grid-shell">
        <div className="grid-cols">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="col-label"
          >
            <span className="font-display block text-[clamp(3.5rem,7vw,6rem)] leading-none text-lime/70 transition-colors duration-500 group-hover:text-lime">
              {index}
            </span>
            <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.75rem)] leading-[1.02] text-ink">
              {title}
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealContainer(0.12)}
            className="col-body grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2"
          >
            <div className="space-y-5">
              {left.map((block, i) => (
                <motion.div key={i} variants={revealUp}>
                  <Block block={block} />
                </motion.div>
              ))}
            </div>
            <div className="space-y-5">
              {right.map((block, i) => (
                <motion.div key={i} variants={revealUp}>
                  <Block block={block} />
                </motion.div>
              ))}
            </div>
            {children && <div className="md:col-span-2">{children}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
