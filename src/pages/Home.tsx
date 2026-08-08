import Hero from '../components/Hero'
import Belief from '../components/Belief'
import WhatWeBuild from '../components/WhatWeBuild'
import Marquee from '../components/Marquee'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import BeforeAfter from '../components/BeforeAfter'
import Manifesto from '../components/Manifesto'
import FinalCTA from '../components/FinalCTA'
import { useSEO } from '../lib/seo'
import { SITE_URL, ORGANIZATION_ID, webPageSchema } from '../lib/schema'

const CANONICAL = `${SITE_URL}/`

export default function Home() {
  useSEO({
    title: 'Ergon Agência — Automação, Sistemas e Produtos Digitais',
    description:
      'A Ergon desenvolve automações, sistemas internos, produtos digitais e websites para empresas que precisam transformar processos manuais em ferramentas que funcionam — do primeiro fluxo ao produto no ar.',
    canonical: CANONICAL,
    ogImage: `${SITE_URL}/favicon.png`,
    jsonLd: [
      webPageSchema({
        id: `${SITE_URL}/#webpage`,
        url: CANONICAL,
        name: 'Ergon Agência — Automação, Sistemas e Produtos Digitais',
        description:
          'A Ergon desenvolve automações, sistemas internos, produtos digitais e websites para empresas que precisam transformar processos manuais em ferramentas que funcionam.',
        about: [ORGANIZATION_ID],
      }),
    ],
  })

  return (
    <main>
      <Hero />
      <Belief />
      <WhatWeBuild />
      <Marquee />
      <Process />
      <BeforeAfter />
      <Portfolio />
      <Manifesto />
      <FinalCTA />
    </main>
  )
}
