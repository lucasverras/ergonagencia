import './fly-tokens.css'
import FlyHero from '../components/fly/FlyHero'
import FlyIntro from '../components/fly/FlyIntro'
import FlySegments from '../components/fly/FlySegments'
import FlyPortfolio from '../components/fly/FlyPortfolio'
import FlyEquipment from '../components/fly/FlyEquipment'
import FlyTestimonials from '../components/fly/FlyTestimonials'
import FlyFaq from '../components/fly/FlyFaq'
import FlyCTA from '../components/fly/FlyCTA'
import { useFlyHead } from './useFlyHead'

const CANONICAL = 'https://www.ergonagencia.com.br/fly'

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ergon Agência — Fly',
  description:
    'Filmagem com drone profissional em São Paulo. Imagens aéreas e vídeos em 4K para imobiliárias, restaurantes, eventos e empresas.',
  url: CANONICAL,
  telephone: '+5511967206875',
  email: 'contato@ergonagencia.com.br',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  areaServed: 'São Paulo e todo o Brasil',
}

export default function FlyPage() {
  useFlyHead({
    title: 'Filmagem com Drone em São Paulo | Imagens Aéreas 4K — Ergon Fly',
    description:
      'Filmagem com drone profissional em São Paulo: imagens aéreas 4K, piloto certificado ANAC, entrega em até 3 dias úteis.',
    canonical: CANONICAL,
    jsonLd: [localBusinessJsonLd],
  })

  return (
    <main className="fly-page">
      <FlyHero />
      <FlyIntro />
      <FlySegments />
      <FlyPortfolio />
      <FlyEquipment />
      <FlyTestimonials />
      <FlyFaq />
      <FlyCTA />
    </main>
  )
}
