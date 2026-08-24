import Hero from '../components/Hero'
import WhatWeBuild from '../components/WhatWeBuild'
import WhatItBecomes from '../components/WhatItBecomes'
import SelectedProjects from '../components/SelectedProjects'
import ClientsMarquee from '../components/ClientsMarquee'
import Process from '../components/Process'
import ErgonFlyTeaser from '../components/ErgonFlyTeaser'
import FinalCTA from '../components/FinalCTA'
import { useSEO } from '../lib/seo'
import { SITE_URL, ORGANIZATION_ID, webPageSchema } from '../lib/schema'

const CANONICAL = `${SITE_URL}/`

export default function Home() {
  useSEO({
    title: 'Ergon Product Studio — Sites, Sistemas e Automações',
    description:
      'A Ergon é um product studio: entendemos problemas de negócio e construímos sites, sistemas internos, plataformas e automações para resolvê-los.',
    canonical: CANONICAL,
    ogImage: `${SITE_URL}/favicon.png`,
    jsonLd: [
      webPageSchema({
        id: `${SITE_URL}/#webpage`,
        url: CANONICAL,
        name: 'Ergon Product Studio — Sites, Sistemas e Automações',
        description:
          'A Ergon é um product studio: entendemos problemas de negócio e construímos sites, sistemas internos, plataformas e automações para resolvê-los.',
        about: [ORGANIZATION_ID],
      }),
    ],
  })

  return (
    <main>
      <Hero />
      <WhatWeBuild />
      <WhatItBecomes />
      <SelectedProjects />
      <ClientsMarquee />
      <Process />
      <ErgonFlyTeaser />
      <FinalCTA />
    </main>
  )
}
