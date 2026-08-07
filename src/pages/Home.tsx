import Hero from '../components/Hero'
import Belief from '../components/Belief'
import WhatWeBuild from '../components/WhatWeBuild'
import Marquee from '../components/Marquee'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import BeforeAfter from '../components/BeforeAfter'
import Manifesto from '../components/Manifesto'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
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
