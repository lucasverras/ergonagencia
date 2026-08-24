import { motion } from 'framer-motion'
import { revealUp, revealContainer, viewportOnce } from '@/lib/reveal'

function InfoColumn({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null
  return (
    <div>
      <span className="block text-xs tracking-[0.25em] text-graphite-dim uppercase">{label}</span>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line px-3 py-1 text-xs text-graphite-dim"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function CaseQuickInfo({
  servicos,
  tecnologias,
  entrega,
}: {
  servicos: string[]
  tecnologias: string[]
  entrega: string
}) {
  return (
    <section className="border-t border-line py-10 md:py-12">
      <div className="grid-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealContainer(0.08)}
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          <motion.div variants={revealUp}>
            <InfoColumn label="Serviços" items={servicos} />
          </motion.div>
          <motion.div variants={revealUp}>
            <InfoColumn label="Tecnologias" items={tecnologias} />
          </motion.div>
          <motion.div variants={revealUp}>
            <span className="block text-xs tracking-[0.25em] text-graphite-dim uppercase">Entrega</span>
            <p className="mt-3 text-sm text-graphite md:text-base">{entrega}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
