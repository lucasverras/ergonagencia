import { Link, useParams } from 'react-router-dom'
import { getCaseBySlug, getNextCase } from '@/cases/casesData'
import { servicesForCase } from '@/services/servicesData'
import { useSEO } from '@/lib/seo'
import { SITE_URL, breadcrumbSchema, webPageSchema, serviceIdsForTags } from '@/lib/schema'
import { CaseHero } from '@/components/case/CaseHero'
import { CaseSection } from '@/components/case/CaseSection'
import { CaseMedia } from '@/components/case/CaseMedia'
import { CaseTags } from '@/components/case/CaseTags'
import { CaseQuote } from '@/components/case/CaseQuote'
import { CaseNextProject } from '@/components/case/CaseNextProject'
import { NotFoundContent } from '@/components/NotFoundContent'

const sectionOrder: { key: keyof ReturnType<typeof sectionsOf>; index: string }[] = [
  { key: 'projeto', index: '01' },
  { key: 'desafio', index: '02' },
  { key: 'solucao', index: '03' },
  { key: 'experiencia', index: '04' },
  { key: 'tecnologia', index: '05' },
  { key: 'resultado', index: '06' },
]

function sectionsOf(study: NonNullable<ReturnType<typeof getCaseBySlug>>) {
  return study.sections
}

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
  const description = study ? study.summary : 'Este case não existe ou foi movido.'
  const serviceIds = study ? serviceIdsForTags(study.tagGroups.flatMap((g) => g.tags)) : []
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
            about: serviceIds,
          }),
          breadcrumbSchema([
            { name: 'Ergon', url: `${SITE_URL}/` },
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
  const sections = study.sections
  const relatedServices = servicesForCase(study.slug)

  return (
    <main>
      <CaseHero caseStudy={study} />

      {sectionOrder.map(({ key, index }) => {
        const content = sections[key]
        // Garagi's two-track narrative gets its gallery placeholder inside
        // "A solução"; other cases surface their gallery media in
        // "A experiência" — both stay inside the shared CaseSection rather
        // than a bespoke page-level layout.
        const showGalleryHere =
          (study.twoTrack && key === 'solucao') || (!study.twoTrack && key === 'experiencia')

        return (
          <CaseSection key={key} index={index} title={content.title} blocks={content.blocks}>
            {showGalleryHere && study.galleryMedia.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {study.galleryMedia.map((asset, i) => (
                  <CaseMedia key={i} asset={asset} />
                ))}
              </div>
            )}
          </CaseSection>
        )
      })}

      {study.closingQuote && (
        <section className="border-t border-line py-14 md:py-20">
          <div className="grid-shell">
            <CaseQuote
              text={study.closingQuote}
              size="lg"
              accent={false}
              className="mx-auto max-w-3xl text-center"
            />
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

      <section className="border-t border-line py-10">
        <div className="grid-shell">
          <CaseTags groups={study.tagGroups} />
        </div>
      </section>

      <CaseNextProject next={next} />
    </main>
  )
}
