import { motion } from 'framer-motion'
import { Building2, Hotel, PartyPopper, UtensilsCrossed } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '../../lib/reveal'
import { GradualSpacing } from '../ui/gradual-spacing'
import MagicBentoCard from '../ui/MagicBentoCard'

const segments = [
  {
    Icon: Building2,
    title: 'Imobiliárias & Construtoras',
    body: 'Drone para imobiliárias em São Paulo. Fotos e vídeos aéreos de imóveis, loteamentos e acompanhamento de obras.',
  },
  {
    Icon: Hotel,
    title: 'Hotéis & Resorts',
    body: 'Filmagem aérea para hotéis e pousadas. Valorize localização, estrutura e paisagem para Booking e Airbnb.',
  },
  {
    Icon: UtensilsCrossed,
    title: 'Restaurantes & Gastronomia',
    body: 'Imagens aéreas para restaurantes em SP. Destaque ambiente, vista e localização privilegiada.',
  },
  {
    Icon: PartyPopper,
    title: 'Eventos & Casamentos',
    body: 'Drone para eventos corporativos, casamentos e festivais. Registre momentos com perspectiva cinematográfica.',
  },
]

export default function FlySegments() {
  return (
    <section id="segmentos" className="relative section-pad border-t border-line text-center">
      <div className="grid-shell">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mx-auto max-w-2xl text-2xl leading-[1.1] font-semibold tracking-tight md:text-4xl"
        >
          <GradualSpacing
            as="span"
            text="Drone profissional para cada segmento"
            className="w-full justify-center"
            highlight={{ word: 'segmento', variant: 'circle', delay: 0.45 }}
          />
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mx-auto mt-4 max-w-xl text-base text-graphite"
        >
          Atendemos diferentes segmentos em São Paulo e região com filmagem aérea e imagens de
          drone profissional, cada projeto com captação personalizada em 4K.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealContainer(0.1)}
          className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 md:mt-14 md:grid-cols-4"
        >
          {segments.map((s) => (
            <motion.div key={s.title} variants={revealUp}>
              <MagicBentoCard className="h-full rounded-2xl border border-line p-6 transition-colors hover:border-violet/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-violet/15 text-violet">
                  <s.Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{s.body}</p>
              </MagicBentoCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
