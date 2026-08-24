import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '@/lib/reveal'
import { GradualSpacing } from '@/components/ui/gradual-spacing'
import type { WhatWeCreateItem } from '@/services/servicesData'

export function ServiceWhatWeCreate({ items }: { items: WhatWeCreateItem[] }) {
  return (
    <section className="border-t border-line py-14 md:py-20">
      <div className="grid-shell">
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mb-4 block text-xs tracking-[0.25em] text-graphite-dim uppercase"
        >
          O que criamos
        </motion.span>
        <h2 className="max-w-lg text-2xl leading-[1.15] font-semibold tracking-tight md:text-4xl">
          <GradualSpacing as="span" text="Dentro desse serviço." highlight={{ word: 'serviço.', variant: 'circle', delay: 0.35 }} />
        </h2>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealContainer(0.06)}
          className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2"
        >
          {items.map((item) => (
            <motion.li
              key={item.title}
              variants={revealUp}
              className="flex items-start gap-3 border-b border-line pb-5"
            >
              <Check className="mt-1 h-4 w-4 shrink-0 text-lime" strokeWidth={2.5} />
              <div>
                <span className="block text-base font-medium text-ink md:text-lg">{item.title}</span>
                {item.desc && <span className="mt-1 block text-sm text-graphite">{item.desc}</span>}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
