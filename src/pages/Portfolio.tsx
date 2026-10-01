import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useSEO } from '@/lib/seo'
import { SITE_URL, breadcrumbSchema, collectionPageSchema } from '@/lib/schema'
import { Breadcrumb } from '@/components/Breadcrumb'
import { revealUp, revealContainer, viewportOnce } from '@/lib/reveal'
import { GradualSpacing } from '@/components/ui/gradual-spacing'
import { TextReveal } from '@/components/ui/text-reveal'
import { GradientBars } from '@/components/ui/gradient-bars-background'
import { getCaseBySlug, type CaseMediaAsset } from '@/cases/casesData'
import { srcSetFor } from '@/lib/responsiveImage'

// In the order that best shows range of capability. This list is also the
// only internal path to each case page, so it has to cover every slug the
// sitemap publishes — Radar Navegando and Ergon Fly were already indexed
// but unreachable from the navigation, which made them orphan pages.
const PORTFOLIO_SLUGS = [
  'vamo-nessa-sp',
  'garagi',
  'green-bay-car',
  'green-bay-car-estetica',
  '3ws-moldes',
  'franco-gastrobar',
  'navegando-mkt',
  'radar-navegando',
  'ergon-fly',
]

const CATEGORY: Record<string, string> = {
  'vamo-nessa-sp': 'Plataforma · Dados · Automação',
  garagi: 'Website · CRM · Sistema',
  'green-bay-car': 'Website · UX/UI',
  'green-bay-car-estetica': 'Website · Catálogo de Serviços',
  '3ws-moldes': 'Website · Catálogo · SEO',
  'franco-gastrobar': 'Cardápio Digital · UX/UI',
  'navegando-mkt': 'Website · Portfólio · Leads',
  'radar-navegando': 'Sistema Interno · CRM · Automação',
  'ergon-fly': 'Website · Audiovisual · SEO',
}

const BLURB: Record<string, string> = {
  'vamo-nessa-sp': 'Conteúdo, performance, aquisição e operação em uma plataforma própria.',
  garagi: 'Uma nova presença digital conectada a uma ferramenta comercial interna.',
  'green-bay-car': 'Uma experiência digital premium para transformar a presença online da marca.',
  'green-bay-car-estetica': 'Presença digital própria para a vertente de estética automotiva do grupo.',
  '3ws-moldes': 'Um grande acervo industrial transformado em uma experiência digital organizada e navegável.',
  'franco-gastrobar': 'Cardápio digital em formato de site — para dentro e fora do restaurante.',
  'navegando-mkt': 'Presença digital para transformar audiência em portfólio, metodologia e leads.',
  'radar-navegando': 'Prospecção ativa em plataforma própria: descoberta por região e qualificação com apoio de IA.',
  'ergon-fly': 'A vertente audiovisual da Ergon, com site próprio para portfólio e captação de demanda.',
}

function ProjectImage({
  asset,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  asset: CaseMediaAsset
  className?: string
  /** the first cards are above the fold — lazy-loading them delays the LCP
   * they're responsible for */
  priority?: boolean
  sizes?: string
}) {
  if (asset.kind !== 'real' || !asset.src) return <div className={`bg-surface-2 ${className ?? ''}`} />
  return (
    <img
      src={asset.src}
      srcSet={srcSetFor(asset.src)}
      sizes={sizes}
      alt={asset.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={`h-full w-full object-cover object-top transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] ${className ?? ''}`}
    />
  )
}

// Caption block sized for a three-column row: the title and arrow share the
// top line, the category sits quietly underneath instead of fighting the
// title for horizontal space.
function ProjectMeta({
  slug,
  name,
  category,
  blurb,
}: {
  slug: string
  name: string
  category: Record<string, string>
  blurb: Record<string, string>
}) {
  return (
    <div className="mt-5">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-lime">
          {name}
        </h2>
        <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-graphite-dim transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
      </div>
      <p className="mt-2 text-sm text-graphite">{blurb[slug]}</p>
      <span className="mt-3 block text-xs tracking-[0.12em] text-graphite-dim uppercase">
        {category[slug]}
      </span>
    </div>
  )
}

export default function Portfolio() {
  const canonical = `${SITE_URL}/portfolio`
  const title = 'Projetos de Sites, Sistemas e Automação | Portfólio Ergon'
  const description =
    'Cases reais da Ergon Studio: sites institucionais, cardápio digital, CRM, painéis internos e plataformas de dados que colocamos para funcionar.'

  const projects = PORTFOLIO_SLUGS.map((slug) => getCaseBySlug(slug)).filter((c) => c !== undefined)

  useSEO({
    title,
    description,
    canonical,
    // deliberately kept out of Google: the portfolio renders for visitors
    // and stays linkable as proof from the service pages, but a search for a
    // client's name should never surface our case work.
    noindex: true,
    jsonLd: [
      // CollectionPage + ItemList: one entry per card actually rendered
      // below, in the same order a visitor reads them.
      collectionPageSchema({
        id: `${canonical}/#webpage`,
        url: canonical,
        name: title,
        description,
        items: projects.map((c) => ({
          name: c.name,
          url: `${SITE_URL}/portfolio/${c.slug}`,
        })),
      }),
      breadcrumbSchema([
        { name: 'Ergon', url: `${SITE_URL}/` },
        { name: 'Portfólio', url: canonical },
      ]),
    ],
  })

  return (
    <main>
      <div className="grid-shell pt-8">
        <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Projetos', url: '/portfolio' }]} />
      </div>
      <header className="relative overflow-hidden pt-20 pb-14 md:pt-40 md:pb-20">
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
          {/* every case carries the same weight — nine in three columns is
              three full rows, so none is ever stranded alone on a final row */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            variants={revealContainer(0.06)}
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, i) => (
              <motion.div key={project.slug} variants={revealUp}>
                <Link to={`/portfolio/${project.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface-2">
                    <ProjectImage
                      asset={project.heroMedia}
                      priority={i === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <ProjectMeta
                    slug={project.slug}
                    name={project.name}
                    category={CATEGORY}
                    blurb={BLURB}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
