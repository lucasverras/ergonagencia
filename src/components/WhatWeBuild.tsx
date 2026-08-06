import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import ProductStep, { type ProductStepData } from './ProductStep'
import { GradualSpacing } from './ui/gradual-spacing'
import { GradientBars } from './ui/gradient-bars-background'
import {
  FigmaMark,
  ClaudeMark,
  LovableMark,
  FramerMark,
  PhotoshopMark,
  IllustratorMark,
} from './BrandIcons'

// tools we actually work with day to day
const stack = [
  { Icon: FigmaMark, name: 'Figma' },
  { Icon: ClaudeMark, name: 'Claude' },
  { Icon: LovableMark, name: 'Lovable' },
  { Icon: FramerMark, name: 'Framer' },
  { Icon: PhotoshopMark, name: 'Photoshop' },
  { Icon: IllustratorMark, name: 'Illustrator' },
]

const steps: ProductStepData[] = [
  {
    n: '01',
    tag: 'sites e páginas',
    title: 'Lançar',
    blurb:
      'Sites, landing pages e primeiras versões de produto no ar — com a estrutura definida antes de qualquer tela ser desenhada.',
    badge: 'REACT · NEXT.JS',
    image: '/images/produtos/lancar.png',
  },
  {
    n: '02',
    tag: 'sistemas internos',
    title: 'Operar',
    blurb:
      'Painéis administrativos, mini CRMs, reservas e catálogos — construídos em cima do processo que já existe na empresa.',
    badge: 'PAINEL PRÓPRIO · SEM PLUGIN',
    image: '/images/produtos/operar.png',
  },
  {
    n: '03',
    tag: 'redes e atendimento',
    title: 'Automatizar',
    blurb:
      'Conectamos os pontos onde alguém ainda copia e cola: atendimento, follow-up, qualificação de lead, agenda e cobrança rodando sozinhos.',
    badge: 'N8N · WHATSAPP · INSTAGRAM',
    image: '/images/produtos/automatizar.png',
  },
  {
    n: '04',
    tag: 'produto existente',
    title: 'Evoluir',
    blurb:
      'Redesign, UX, performance e novas funcionalidades sobre o que já existe — avaliando o que dá para salvar antes de reconstruir.',
    badge: 'SOBRE A BASE ATUAL',
    image: '/images/produtos/evoluir.png',
  },
]

// asymmetric bento layout, matching the reference: two small boxes up top,
// one tall box on the right spanning both rows, one wide box on the bottom
const boxSpans = [
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-1',
  'sm:col-span-1 sm:row-span-2',
  'sm:col-span-2 sm:row-span-1',
]

export default function WhatWeBuild() {
  return (
    <section id="produtos" className="relative">
      <GradientBars
        numBars={15}
        gradientFrom="var(--color-violet)"
        gradientTo="transparent"
        animationDuration={3}
        className="opacity-[0.12]"
      />

      <div className="grid-shell relative z-10 pt-16 pb-[var(--section-gap)] text-center">
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="block font-mono text-xs tracking-[0.25em] text-graphite-dim uppercase"
        >
          [ o que construímos ]
        </motion.span>

        <h2 className="mt-4 text-3xl leading-[1.05] font-semibold tracking-tight text-balance md:text-5xl">
          <GradualSpacing
            as="span"
            text="Da intenção ao produto."
            className="w-full justify-center"
            highlight={{ word: 'produto.', delay: 0.35 }}
          />
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mt-8 flex justify-center"
        >
          <div className="flex items-center gap-3 rounded-full border border-line bg-surface/80 py-2 pr-5 pl-2 shadow-2xl shadow-black/40 backdrop-blur-sm">
            <div className="flex -space-x-2.5">
              {stack.map((tool) => (
                <span
                  key={tool.name}
                  title={tool.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface-2 text-graphite ring-2 ring-bg"
                >
                  <tool.Icon />
                </span>
              ))}
            </div>
            <span className="text-xs text-graphite md:text-sm">
              Ferramentas e integrações que já dominamos
            </span>
          </div>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 text-left sm:grid-cols-3 sm:auto-rows-[260px]">
          {steps.map((step, i) => (
            <ProductStep key={step.n} step={step} className={boxSpans[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
