import { motion } from 'framer-motion'
import { Camera, Film, ShieldCheck, Wand2 } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '../../lib/reveal'
import { GradualSpacing } from '../ui/gradual-spacing'
import MagicBentoCard from '../ui/MagicBentoCard'

const features = [
  {
    Icon: Camera,
    title: 'Captura em 4K',
    body: 'Imagens aéreas em altíssima definição para campanhas, redes sociais e portais imobiliários em São Paulo.',
  },
  {
    Icon: Film,
    title: 'Vídeo Cinematográfico',
    body: 'Filmagem com drone profissional com movimentos suaves que valorizam arquitetura, paisagens e eventos.',
  },
  {
    Icon: Wand2,
    title: 'Edição Profissional',
    body: 'Tratamento de cor e edição estratégica. Entrega em formatos horizontal e vertical para redes sociais.',
  },
  {
    Icon: ShieldCheck,
    title: 'Piloto Certificado ANAC',
    body: 'Operação segura com piloto certificado, seguro RETA e autorização de voo em São Paulo e região.',
  },
]

export default function FlyIntro() {
  return (
    <section id="sobre" className="relative section-pad border-t border-line">
      <div className="grid-shell grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="overflow-hidden rounded-2xl border border-line"
        >
          <img
            src="/fly/images/aerial-beach.jpg"
            alt="Vista aérea de costão rochoso e piscinas naturais em São Paulo"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <div>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="text-2xl leading-[1.1] font-semibold tracking-tight md:text-4xl"
          >
            <GradualSpacing
              as="span"
              text="Mais que imagens aéreas."
              highlight={{ word: 'aéreas.', variant: 'circle', delay: 0.4 }}
            />
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="mt-4 max-w-md text-base leading-relaxed text-graphite"
          >
            Imagens aéreas com drone profissional ajudam empresas em São Paulo a apresentar seus
            espaços com mais impacto. Captação em 4K para imobiliárias, construtoras,
            restaurantes, hotéis e eventos. Sessão média de 2 horas com entrega em até 3 dias
            úteis.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealContainer(0.08)}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={revealUp}>
                <MagicBentoCard className="h-full rounded-xl border border-line p-5 transition-colors hover:border-lime/40">
                  <f.Icon className="text-lime" size={22} strokeWidth={1.75} />
                  <h3 className="mt-3 text-sm font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-graphite">{f.body}</p>
                </MagicBentoCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
