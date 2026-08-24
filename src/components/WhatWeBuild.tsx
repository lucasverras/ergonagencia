import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { revealUp, viewportOnce } from '../lib/reveal'
import { ServiceTabCard } from './ServiceTabCard'
import { GradualSpacing } from './ui/gradual-spacing'
import { GradientBars } from './ui/gradient-bars-background'
import { services } from '../services/servicesData'
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

      <div className="grid-shell relative z-10 pt-16 pb-[var(--section-gap)]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={revealUp}
              className="block font-mono text-xs tracking-[0.25em] text-graphite-dim uppercase"
            >
              [ o que construímos ]
            </motion.span>

            <h2 className="mt-4 max-w-xl text-3xl leading-[1.05] font-semibold tracking-tight text-balance md:text-5xl">
              <GradualSpacing
                as="span"
                text="Da intenção ao produto."
                highlight={{ word: 'produto.', delay: 0.35 }}
              />
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
          >
            <Link
              to="/servicos"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-xs tracking-[0.15em] text-graphite uppercase transition-colors hover:border-lime/40 hover:text-lime"
            >
              Ver serviços
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mt-8 flex justify-start"
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceTabCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
