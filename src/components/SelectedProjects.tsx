import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '../lib/reveal'
import { GradualSpacing } from './ui/gradual-spacing'
import { getCaseBySlug, type CaseMediaAsset } from '../cases/casesData'

// Every project carries the same weight, so the count has to close evenly
// with the columns: 8 in two columns is four full rows with nothing stranded
// alone (the old 7-in-three-columns left the last card by itself). Two
// columns also buys noticeably larger images than the old grid. The complete
// archive lives at /portfolio.
const SLUGS = [
  'vamo-nessa-sp',
  'garagi',
  'green-bay-car',
  'green-bay-car-estetica',
  '3ws-moldes',
  'franco-gastrobar',
  'navegando-mkt',
  'radar-navegando',
]

const CATEGORY: Record<string, string> = {
  'vamo-nessa-sp': 'Plataforma · Dados · Automação',
  garagi: 'Website · CRM · Sistema',
  'green-bay-car': 'Website · UX/UI',
  'green-bay-car-estetica': 'Website · Catálogo · UX/UI',
  '3ws-moldes': 'Website · Catálogo · SEO',
  'franco-gastrobar': 'Cardápio Digital · UX/UI',
  'navegando-mkt': 'Website · Marketing Digital',
  'radar-navegando': 'Sistema Interno · CRM · Automação',
}

const BLURB: Record<string, string> = {
  'vamo-nessa-sp': 'Conteúdo, performance, aquisição e operação em uma plataforma própria.',
  garagi: 'Uma nova presença digital conectada a uma ferramenta comercial interna.',
  'green-bay-car': 'Uma experiência digital premium para transformar a presença online da marca.',
  'green-bay-car-estetica': 'Site próprio para o estúdio de estética com catálogo técnico e comparação antes e depois.',
  '3ws-moldes': 'Um grande acervo industrial transformado em uma experiência digital organizada e navegável.',
  'franco-gastrobar': 'Cardápio digital para substituir o impresso e facilitar pedidos diretos no balcão.',
  'navegando-mkt': 'Presença digital estruturada para uma agência de marketing em crescimento.',
  'radar-navegando': 'Prospecção ativa em plataforma própria: descoberta por região e qualificação com apoio de IA.',
}

// The work carries the section — no card border, no background panel, no
// glow. Just the image, rounded, with a restrained hover scale. Client
// material is never tinted or filtered.
function ProjectImage({ asset }: { asset: CaseMediaAsset }) {
  if (asset.kind !== 'real' || !asset.src) {
    return <div className="aspect-[4/3] rounded-2xl bg-surface-2" />
  }
  return (
    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface-2">
      <img
        src={asset.src}
        alt={asset.alt}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="h-full w-full object-cover object-top transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
      />
    </div>
  )
}

export default function SelectedProjects() {
  const projects = SLUGS.map((s) => getCaseBySlug(s)).filter((c) => c !== undefined)

  return (
    <section id="portfolio" className="border-t border-line py-16 md:py-24">
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
              <GradualSpacing
                as="span"
                text="Produtos que a Ergon criou"
                highlight={{ word: 'Ergon', variant: 'circle', delay: 0.35 }}
              />
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
          viewport={{ once: true, amount: 0.05 }}
          variants={revealContainer(0.06)}
          className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:mt-16 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={revealUp}>
              <Link to={`/portfolio/${project.slug}`} className="group block">
                <ProjectImage asset={project.heroMedia} />
                <div className="mt-5 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-lime md:text-xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-graphite">{BLURB[project.slug]}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 pt-1">
                    {/* category labels, it doesn't shout */}
                    <span className="hidden text-xs tracking-[0.12em] text-graphite-dim uppercase sm:block">
                      {CATEGORY[project.slug]}
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-graphite-dim transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
