import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '../../lib/reveal'
import { GradualSpacing } from '../ui/gradual-spacing'

const bullets = [
  'Gravação em 4K com drone DJI Mini 4 Pro',
  'Fotografias aéreas em altíssima resolução (até 48MP)',
  'Slow motion para cenas especiais de eventos e imóveis',
  'Captação em formato horizontal e vertical para redes sociais',
  'Piloto certificado ANAC com seguro RETA incluso',
  'Sessão média de 2 horas com entrega em até 3 dias úteis',
  'Atendimento em São Paulo, Grande SP e viagens para todo o Brasil',
]

export default function FlyEquipment() {
  return (
    <section id="equipamento" className="relative section-pad border-t border-line">
      <div className="grid-shell grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="text-2xl leading-[1.1] font-semibold tracking-tight md:text-4xl"
          >
            <GradualSpacing
              as="span"
              text="Equipamentos DJI de última geração"
              highlight={{ word: 'geração', variant: 'circle', delay: 0.45 }}
            />
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="mt-4 max-w-md text-base leading-relaxed text-graphite"
          >
            Utilizamos drones profissionais DJI com câmeras de até 48MP e gravação em 4K para
            garantir imagens aéreas com máxima precisão e qualidade. Nosso piloto é certificado
            pela ANAC e cada voo conta com seguro RETA obrigatório.
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealContainer(0.06)}
            className="mt-8 grid grid-cols-1 gap-3"
          >
            {bullets.map((bullet) => (
              <motion.li
                key={bullet}
                variants={revealUp}
                className="flex items-start gap-2.5 text-sm text-graphite"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-lime" strokeWidth={1.75} />
                {bullet}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="order-1 overflow-hidden rounded-2xl border border-line md:order-2"
        >
          <img
            src="/fly/images/drone-controller.webp"
            alt="Controle remoto de drone DJI em uso"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
