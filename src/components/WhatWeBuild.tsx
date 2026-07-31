import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import ProductStep, { type ProductStepData } from './ProductStep'
import RevealText from './RevealText'
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
    desc: 'Para quem precisa existir digitalmente com clareza — e rápido.',
    detail: 'Landing pages, sites institucionais, páginas de evento e MVPs.',
  },
  {
    n: '02',
    tag: 'sistemas internos',
    title: 'Operar',
    desc: 'Para quem hoje controla o negócio no WhatsApp, na planilha e na memória.',
    detail: 'Internal tools, dashboards, mini CRMs, reservas e catálogos.',
  },
  {
    n: '03',
    tag: 'redes e atendimento',
    title: 'Automatizar',
    desc: 'Seu Instagram responde sozinho às 23h — e o lead não se perde no direct.',
    detail:
      'Fluxos de Instagram e WhatsApp, captura e qualificação de leads, respostas automáticas, integração com agenda e checkout.',
  },
  {
    n: '04',
    tag: 'produto existente',
    title: 'Evoluir',
    desc: 'Para quem já tem produto no ar, mas ele não acompanha mais o negócio.',
    detail: 'Redesign, UX review, arquitetura de informação, performance e SEO.',
  },
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

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={revealUp}
        className="grid-shell relative z-10 flex justify-center pt-20"
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

      <div className="grid-shell grid-cols section-pad">
        <div className="col-label">
          <div className="xl:sticky xl:top-28">
            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={revealUp}
              className="mb-6 block font-mono text-xs tracking-[0.25em] text-graphite-dim uppercase"
            >
              [ o que construímos ]
            </motion.span>
            <h2 className="text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              <RevealText className="block w-fit">Da intenção</RevealText>
              <RevealText className="block w-fit" delay={0.08}>
                ao produto.
              </RevealText>
              <RevealText className="block w-fit" delay={0.16}>
                Do produto
              </RevealText>
              <RevealText className="block w-fit" delay={0.24}>
                à operação.
              </RevealText>
            </h2>
          </div>
        </div>

        <div className="col-body">
          {steps.map((step, i) => (
            <ProductStep key={step.n} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
