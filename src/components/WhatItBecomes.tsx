import { motion } from 'framer-motion'
import {
  Globe,
  Users,
  Settings,
  LayoutDashboard,
  Workflow,
  Calendar,
  UtensilsCrossed,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '../lib/reveal'
import { GradualSpacing } from './ui/gradual-spacing'

// concrete, literal outcomes — not a feature list. Every line is something
// a visitor can immediately picture inside their own operation.
const examples: { title: string; desc: string; Icon: LucideIcon }[] = [
  { title: 'Website', desc: 'Uma nova presença digital.', Icon: Globe },
  { title: 'CRM', desc: 'Clientes, oportunidades e histórico organizados.', Icon: Users },
  { title: 'Sistema interno', desc: 'Um processo manual transformado em ferramenta própria.', Icon: Settings },
  { title: 'Painel', desc: 'Informações importantes em uma única visão.', Icon: LayoutDashboard },
  { title: 'Automação', desc: 'Processos acontecendo sem alguém executar cada etapa.', Icon: Workflow },
  { title: 'Agendamento', desc: 'O cliente agenda. Sua equipe administra.', Icon: Calendar },
  { title: 'Cardápio digital', desc: 'Um cardápio próprio, visual e atualizável.', Icon: UtensilsCrossed },
  { title: 'Social selling', desc: 'Comentários e DMs transformados em oportunidades.', Icon: MessageCircle },
]

export default function WhatItBecomes() {
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
          [ o que isso pode virar ]
        </motion.span>
        <h2 className="max-w-xl text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
          <GradualSpacing as="span" text="O que isso pode virar?" highlight={{ word: 'virar?', delay: 0.35 }} />
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealContainer(0.05)}
          className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {examples.map((item) => (
            <motion.div key={item.title} variants={revealUp} className="border-t border-line pt-4">
              <item.Icon className="h-5 w-5 text-lime" strokeWidth={1.75} />
              <span className="mt-3 block text-base font-medium text-ink">{item.title}</span>
              <span className="mt-1 block text-sm text-graphite">{item.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
