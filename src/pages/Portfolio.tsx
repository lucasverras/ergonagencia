import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { SITE_URL, ORGANIZATION_ID, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import { revealUp, revealContainer, viewportOnce } from '@/lib/reveal'
import { GradualSpacing } from '@/components/ui/gradual-spacing'
import { TextReveal } from '@/components/ui/text-reveal'
import { GradientBars } from '@/components/ui/gradient-bars-background'
import MagicBentoCard from '@/components/ui/MagicBentoCard'
import { getCaseBySlug, type CaseMediaAsset } from '@/cases/casesData'

// Selective, in the order that best shows range of capability — not every
// case Ergon has ever shipped. Green Bay Car Estética is a real, planned
// 7th entry with no source material yet (no URL, no local project, no
// screenshots) — it isn't listed here rather than being invented.
const PORTFOLIO_SLUGS = [
  'vamo-nessa-sp',
  'garagi',
  'green-bay-car',
  'green-bay-car-estetica',
  '3ws-moldes',
  'franco-gastrobar',
  'navegando-mkt',
]

const CATEGORY: Record<string, string> = {
  'vamo-nessa-sp': 'Plataforma · Dados · Automação',
  garagi: 'Website · CRM · Sistema',
  'green-bay-car': 'Website · UX/UI',
  'green-bay-car-estetica': 'Website · Catálogo de Serviços',
  '3ws-moldes': 'Website · Catálogo · SEO',
  'franco-gastrobar': 'Cardápio Digital · UX/UI',
  'navegando-mkt': 'Website · Portfólio · Leads',
}

const BLURB: Record<string, string> = {
  'vamo-nessa-sp': 'Conteúdo, performance, aquisição e operação em uma plataforma própria.',
  garagi: 'Uma nova presença digital conectada a uma ferramenta comercial interna.',
  'green-bay-car': 'Uma experiência digital premium para transformar a presença online da marca.',
  'green-bay-car-estetica': 'Presença digital própria para a vertente de estética automotiva do grupo.',
  '3ws-moldes': 'Um grande acervo industrial transformado em uma experiência digital organizada e navegável.',
  'franco-gastrobar': 'Cardápio digital em formato de site — para dentro e fora do restaurante.',
  'navegando-mkt': 'Presença digital para transformar audiência em portfólio, metodologia e leads.',
}

function ProjectImage({ asset, className }: { asset: CaseMediaAsset; className?: string }) {
  if (asset.kind !== 'real' || !asset.src) return <div className={`bg-surface-2 ${className ?? ''}`} />
  return (
    <img
      src={asset.src}
      alt={asset.alt}
      loading="lazy"
      className={`h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] ${className ?? ''}`}
    />
  )
}

export default function Portfolio() {
  const canonical = `${SITE_URL}/portfolio`
  const title = 'Portfólio — Ergon Digital Product Studio'
  const description =
    'Sites, sistemas, plataformas e produtos digitais reais que a Ergon colocou para funcionar — prova do que construímos, não uma lista de clientes.'

  useSEO({
    title,
    description,
    canonical,
    jsonLd: [
      webPageSchema({
        id: `${canonical}/#webpage`,
        url: canonical,
        name: title,
        description,
        about: [ORGANIZATION_ID],
      }),
      breadcrumbSchema([
        { name: 'Ergon', url: `${SITE_URL}/` },
        { name: 'Portfólio', url: canonical },
      ]),
    ],
  })

  const projects = PORTFOLIO_SLUGS.map((slug) => getCaseBySlug(slug)).filter((c) => c !== undefined)

  return (
    <main>
      <header className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
        <GradientBars
          numBars={15}
          gradientFrom="var(--color-violet)"
          gradientTo="transparent"
          animationDuration={2.6}
          className="opacity-[0.12]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%]"
          style={{
            background: 'radial-gradient(700px circle at 15% 0%, rgba(227,255,12,0.1), transparent 65%)',
          }}
        />
        <div className="relative z-10 grid-shell">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="mb-4 block text-xs tracking-[0.25em] text-graphite-dim uppercase"
          >
            Portfólio
          </motion.span>
          <h1 className="max-w-2xl text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
            <GradualSpacing
              as="span"
              text="Produtos que já colocamos"
              className="w-full"
              duration={0.35}
            />
            <GradualSpacing
              as="span"
              text="para funcionar."
              className="mt-1 w-full"
              duration={0.35}
              delayMultiple={0.025}
              highlight={{ word: 'funcionar.', variant: 'circle', delay: 0.45 }}
            />
          </h1>
          <TextReveal
            as="p"
            per="line"
            preset="fade-in-blur"
            className="mt-4 max-w-xl text-base text-graphite md:text-lg"
          >
            Uma seleção do que já construímos — sites, sistemas e produtos digitais em operação.
          </TextReveal>
        </div>
      </header>

      <section className="border-t border-line py-14 md:py-20">
        <div className="grid-shell">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealContainer(0.06)}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={revealUp}>
                <Link to={`/portfolio/${project.slug}`} className="block h-full">
                  <MagicBentoCard className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/60 transition-colors duration-300 hover:border-lime/30">
                    <div className="overflow-hidden aspect-[4/3]">
                      <ProjectImage asset={project.heroMedia} />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                      <div>
                        <span className="font-mono text-[11px] tracking-[0.12em] text-lime uppercase">
                          {CATEGORY[project.slug]}
                        </span>
                        <h2 className="mt-2 text-lg font-semibold tracking-tight text-ink">{project.name}</h2>
                        <p className="mt-1 text-sm text-graphite">{BLURB[project.slug]}</p>
                      </div>
                      <span className="flex items-center gap-1.5 self-end text-xs tracking-[0.1em] text-graphite-dim uppercase transition-colors group-hover:text-lime">
                        Ver case
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </MagicBentoCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
