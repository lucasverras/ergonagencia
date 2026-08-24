import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '../lib/reveal'
import { GradualSpacing } from './ui/gradual-spacing'
import MagicBentoCard from './ui/MagicBentoCard'
import { getCaseBySlug, type CaseMediaAsset } from '../cases/casesData'

// Only the projects that best prove current capability — Vamo Nessa and
// Garagi lead because they show systems/dashboards, not just websites.
// The full list lives at /portfolio. All four render at the same size —
// no single project dominates the section.
const SLUGS = ['vamo-nessa-sp', 'garagi', 'green-bay-car', 'green-bay-car-estetica', '3ws-moldes']

const CATEGORY: Record<string, string> = {
  'vamo-nessa-sp': 'Plataforma · Dados · Automação',
  garagi: 'Website · CRM · Sistema',
  'green-bay-car': 'Website · UX/UI',
  'green-bay-car-estetica': 'Website · Catálogo · UX/UI',
  '3ws-moldes': 'Website · Catálogo · SEO',
}

const BLURB: Record<string, string> = {
  'vamo-nessa-sp': 'Conteúdo, performance, aquisição e operação em uma plataforma própria.',
  garagi: 'Uma nova presença digital conectada a uma ferramenta comercial interna.',
  'green-bay-car': 'Uma experiência digital premium para transformar a presença online da marca.',
  'green-bay-car-estetica': 'Site próprio para o estúdio de estética com catálogo técnico e comparação antes e depois.',
  '3ws-moldes': 'Um grande acervo industrial transformado em uma experiência digital organizada e navegável.',
}

// bleeds to the card's own edge/corners — CaseMedia's own bordered,
// independently-rounded wrapper would nest a second border inside this
// card's border, so the image is rendered plain here instead
function ProjectImage({ asset }: { asset: CaseMediaAsset }) {
  if (asset.kind !== 'real' || !asset.src) return <div className="aspect-[4/3] bg-surface-2" />
  return (
    <div className="overflow-hidden aspect-[4/3]">
      <img
        src={asset.src}
        alt={asset.alt}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  )
}

export default function SelectedProjects() {
  const projects = SLUGS.map((s) => getCaseBySlug(s)).filter((c) => c !== undefined)

  return (
    <section id="portfolio" className="border-t border-line py-14 md:py-20">
      <div className="grid-shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={revealUp}
              className="mb-4 block text-xs tracking-[0.25em] text-graphite-dim uppercase"
            >
              [ projetos ]
            </motion.span>
            <h2 className="text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              <GradualSpacing as="span" text="Produtos que a Ergon Criou" highlight={{ word: 'Ergon', variant: 'circle', delay: 0.35 }} />
            </h2>
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={revealUp}>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-xs tracking-[0.15em] text-graphite uppercase transition-colors hover:border-lime/40 hover:text-lime"
            >
              Ver todos os projetos
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealContainer(0.06)}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-14"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={revealUp}>
              <Link to={`/portfolio/${project.slug}`} className="block h-full">
                <MagicBentoCard className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 transition-colors duration-300 hover:border-lime/30">
                  <ProjectImage asset={project.heroMedia} />
                  <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                    <div>
                      <span className="font-mono text-[11px] tracking-[0.12em] text-lime uppercase">
                        {CATEGORY[project.slug]}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">{project.name}</h3>
                      <p className="mt-1 text-sm text-graphite">{BLURB[project.slug]}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 self-end text-graphite-dim transition-colors group-hover:text-lime" />
                  </div>
                </MagicBentoCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
