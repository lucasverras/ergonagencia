import { useParams } from 'react-router-dom'
import { getServiceBySlug } from '@/services/servicesData'
import { useSEO } from '@/lib/seo'
import { SITE_URL, SERVICE_IDS, breadcrumbSchema, webPageSchema } from '@/lib/schema'
import { ServiceHero } from '@/components/service/ServiceHero'
import { ServiceProblem } from '@/components/service/ServiceProblem'
import { ServiceWhatWeCreate } from '@/components/service/ServiceWhatWeCreate'
import { ServiceVisualExample } from '@/components/service/ServiceVisualExample'
import { ServiceHowItWorks } from '@/components/service/ServiceHowItWorks'
import { ServiceRelatedCases } from '@/components/service/ServiceRelatedCases'
import { ServiceFinalCTA } from '@/components/service/ServiceFinalCTA'
import { NotFoundContent } from '@/components/NotFoundContent'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  // hook must run unconditionally (rules of hooks) — an unresolved slug
  // is a real 404 (noindex), matching CaseStudy.tsx's own pattern
  const canonical = `${SITE_URL}/servicos/${slug ?? ''}`
  const title = service ? service.metaTitle : 'Página não encontrada — Ergon Product Studio'
  const description = service ? service.metaDescription : 'Este serviço não existe ou foi movido.'

  useSEO({
    title,
    description,
    canonical: service ? canonical : `${SITE_URL}/`,
    noindex: !service,
    jsonLd: service
      ? [
          webPageSchema({
            id: `${canonical}/#webpage`,
            url: canonical,
            name: service.metaTitle,
            description: service.metaDescription,
            about: [SERVICE_IDS[service.serviceKey]],
          }),
          breadcrumbSchema([
            { name: 'Ergon', url: `${SITE_URL}/` },
            { name: 'Serviços', url: `${SITE_URL}/servicos` },
            { name: service.name, url: canonical },
          ]),
        ]
      : [],
  })

  if (!service) {
    return <NotFoundContent />
  }

  return (
    <main>
      <ServiceHero service={service} />
      <ServiceProblem service={service} />
      <ServiceWhatWeCreate items={service.whatWeCreate} />
      <ServiceVisualExample example={service.visualExample} />
      <ServiceHowItWorks />
      <ServiceRelatedCases caseSlugs={service.relatedCaseSlugs} />
      <ServiceFinalCTA headline={service.finalCtaHeadline} />
    </main>
  )
}
