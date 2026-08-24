import { Link, useParams } from 'react-router-dom'
import { getCaseBySlug, getNextCase, type CaseContentBlock } from '@/cases/casesData'
import { servicesForCase } from '@/services/servicesData'
import { useSEO } from '@/lib/seo'
import { SITE_URL, SERVICE_IDS, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import { CaseHero } from '@/components/case/CaseHero'
import { CaseQuickInfo } from '@/components/case/CaseQuickInfo'
import { CaseBigCTA } from '@/components/case/CaseBigCTA'
import { CaseSection } from '@/components/case/CaseSection'
import { CaseMedia } from '@/components/case/CaseMedia'
import { CaseNextProject } from '@/components/case/CaseNextProject'
import { NotFoundContent } from '@/components/NotFoundContent'

const p = (text: string): CaseContentBlock => ({ kind: 'p', text })
const h = (text: string): CaseContentBlock => ({ kind: 'heading', text })
const list = (items: string[]): CaseContentBlock => ({ kind: 'list', items })

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseBySlug(slug) : undefined

  // hook must run unconditionally on every render (rules of hooks) — an
  // unresolved slug is a real 404 (noindex), not silently redirected to
  // home, which would otherwise read as a soft-404 to crawlers
  const canonical = `${SITE_URL}/portfolio/${slug ?? ''}`
  const title = study
    ? `${study.name} — Case Ergon Digital Product Studio`
    : 'Página não encontrada — Ergon Digital Product Studio'
  const description = study ? study.headline : 'Este case não existe ou foi movido.'
  const relatedServices = study ? servicesForCase(study.slug) : []
  const ogImage = study?.heroMedia.kind === 'real' ? `${SITE_URL}${study.heroMedia.src}` : undefined

  useSEO({
    title,
    description,
    canonical: study ? canonical : `${SITE_URL}/`,
    ogImage,
    noindex: !study,
    jsonLd: study
      ? [
          webPageSchema({
            id: `${canonical}/#webpage`,
            url: canonical,
            name: title,
            description,
            primaryImage: ogImage,
            about: relatedServices.map((s) => SERVICE_IDS[s.serviceKey]),
          }),
          breadcrumbSchema([
            { name: 'Ergon', url: `${SITE_URL}/` },
            { name: 'Serviços', url: `${SITE_URL}/servicos` },
            { name: 'Portfólio', url: `${SITE_URL}/#portfolio` },
            { name: study.name, url: canonical },
          ]),
        ]
      : [],
  })

  if (!study) {
    return <NotFoundContent />
  }

  const next = getNextCase(study.slug)
  const hasCta = Boolean(study.ctaLabel && study.ctaUrl)

  const builtBlocks: CaseContentBlock[] =
    study.built.kind === 'dual'
      ? [
          ...(study.built.intro ? [h(study.built.intro)] : []),
          p(`Website — ${study.built.website}`),
          p(`Sistema interno — ${study.built.internal}`),
        ]
      : [p(study.built.text)]

  return (
    <main>
      <CaseHero study={study} />
      <CaseQuickInfo servicos={study.servicos} tecnologias={study.tecnologias} entrega={study.entrega} />

      {hasCta && (
        <section className="border-t border-line py-10 md:py-12">
          <div className="grid-shell">
            <CaseBigCTA label={study.ctaLabel!} href={study.ctaUrl!} />
          </div>
        </section>
      )}

      <CaseSection index="01" title="O desafio" blocks={[p(study.challenge)]} />
      <CaseSection index="02" title="O que construímos" blocks={builtBlocks} />
      <CaseSection index="03" title="Principais entregas" blocks={[list(study.deliverables)]} />

      {study.gallery.length > 0 && (
        <CaseSection index="04" title="Visual" blocks={[]}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {study.gallery.map((asset, i) => (
              <CaseMedia key={i} asset={asset} />
            ))}
          </div>
        </CaseSection>
      )}

      {hasCta && (
        <section className="border-t border-line py-10 md:py-14">
          <div className="grid-shell">
            <CaseBigCTA eyebrow="Produto" label={study.ctaLabel!} href={study.ctaUrl!} />
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="border-t border-line py-10">
          <div className="grid-shell">
            <span className="mb-3 block text-xs tracking-[0.25em] text-graphite-dim uppercase">
              Serviços utilizados neste projeto
            </span>
            <div className="flex flex-wrap gap-2">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicos/${s.slug}`}
                  className="rounded-full border border-line px-3 py-1 text-xs text-graphite-dim transition-colors hover:border-lime/40 hover:text-lime"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CaseNextProject next={next} />
    </main>
  )
}
