import { useState } from 'react'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../../lib/reveal'
import { GradualSpacing } from '../ui/gradual-spacing'
import { flyFaq } from '../../fly/flyServices'

export default function FlyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative section-pad border-t border-line">
      <div className="grid-shell">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="text-2xl leading-[1.1] font-semibold tracking-tight md:text-4xl"
        >
          <GradualSpacing as="span" text="Perguntas frequentes" highlight={{ word: 'frequentes', variant: 'circle', delay: 0.35 }} />
        </motion.h2>

        <div className="mt-10 md:mt-14">
          {flyFaq.map((item, i) => {
            const open = openIndex === i
            return (
              <motion.div
                key={item.question}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={revealUp}
                className="overflow-hidden border-b border-line"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-lime"
                >
                  <h3
                    className={`text-base font-semibold md:text-lg ${open ? 'text-lime' : 'text-ink'}`}
                  >
                    {item.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 text-lime"
                    aria-hidden="true"
                  >
                    <Plus size={20} strokeWidth={2} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="max-w-2xl pb-6 text-sm leading-relaxed text-graphite">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
