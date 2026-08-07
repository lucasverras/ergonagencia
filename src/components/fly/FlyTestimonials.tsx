import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '../../lib/reveal'
import { GradualSpacing } from '../ui/gradual-spacing'
import MagicBentoCard from '../ui/MagicBentoCard'

const testimonials = [
  {
    quote:
      'As imagens aéreas da Ergon transformaram nossos materiais de divulgação. Os vídeos em 4K mostram nossa frota e estrutura de uma forma que nenhuma foto convencional consegue. Resultado: mais credibilidade e novos contratos.',
    name: 'João Pedro',
    role: 'Sólida Transportes',
  },
  {
    quote:
      'Contratamos a Ergon para captar imagens dos nossos veículos e eventos e o resultado superou todas as expectativas. As fotos e vídeos aéreos geram muito mais engajamento nas redes e mais clientes diretos.',
    name: 'Leonardo Oliveira',
    role: 'Fama Limousines',
  },
  {
    quote:
      'As filmagens com drone mostraram nossa propriedade de um ângulo incrível. Usamos nos anúncios e o retorno foi imediato. Profissionalismo e qualidade impressionantes.',
    name: 'Lucas Mendes',
    role: 'Gerente de Marketing — Fazenda',
  },
]

export default function FlyTestimonials() {
  return (
    <section id="depoimentos" className="relative section-pad border-t border-line text-center">
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
            text="O que nossos clientes dizem"
            className="w-full justify-center"
            highlight={{ word: 'clientes', variant: 'circle', delay: 0.4 }}
          />
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealContainer(0.12)}
          className="mt-10 grid grid-cols-1 gap-6 text-left md:mt-14 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={revealUp}>
              <MagicBentoCard className="h-full rounded-2xl border border-line p-6 transition-colors hover:border-lime/40">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-lime">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <Quote size={18} className="text-graphite-dim" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-graphite">“{t.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-graphite-dim">{t.role}</p>
              </MagicBentoCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
