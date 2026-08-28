import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '@/lib/reveal'
import { GradualSpacing } from '@/components/ui/gradual-spacing'

export interface FaqItem {
  question: string
  answer: string
}

/** Accordion FAQ shared by /fly and the service pages.
 *
 * Answers stay mounted and are collapsed with height/opacity rather than
 * unmounted, for two reasons: every answer is then present in the
 * prerendered HTML (the FAQPage JSON-LD on these pages must describe text
 * that's really in the document), and the panel keeps a stable id for
 * aria-controls instead of appearing and disappearing under the button.
 */
export function FaqAccordion({
  items,
  heading = 'Perguntas frequentes',
  highlightWord = 'frequentes',
  id,
}: {
  items: FaqItem[]
  heading?: string
  highlightWord?: string
  id?: string
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const base = useId()

  return (
    <section id={id ?? 'faq'} className="relative section-pad border-t border-line">
      <div className="grid-shell">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="text-2xl leading-[1.1] font-semibold tracking-tight md:text-4xl"
        >
          <GradualSpacing
            as="span"
            text={heading}
            highlight={{ word: highlightWord, variant: 'circle', delay: 0.35 }}
          />
        </motion.h2>

        <div className="mt-10 md:mt-14">
          {items.map((item, i) => {
            const open = openIndex === i
            const panelId = `${base}-panel-${i}`
            const buttonId = `${base}-button-${i}`
            return (
              <motion.div
                key={item.question}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={revealUp}
                className="overflow-hidden border-b border-line"
              >
                <h3 className="text-base font-semibold md:text-lg">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className={`flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-lime ${
                      open ? 'text-lime' : 'text-ink'
                    }`}
                  >
                    {item.question}
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 text-lime"
                      aria-hidden="true"
                    >
                      <Plus size={20} strokeWidth={2} />
                    </motion.span>
                  </button>
                </h3>
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={false}
                  animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-sm leading-relaxed text-graphite">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
