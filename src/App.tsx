import { MotionConfig } from 'framer-motion'
import { SmoothCursor } from './components/ui/smooth-cursor'
import GridDebugOverlay from './components/GridDebugOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Belief from './components/Belief'
import WhatWeBuild from './components/WhatWeBuild'
import Marquee from './components/Marquee'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Manifesto from './components/Manifesto'
import WhyErgon from './components/WhyErgon'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    // reducedMotion="user" is a global safety net on top of the manual
    // useReducedMotion() checks already in individual components —
    // it dampens any whileHover/whileTap/animate transform we add later
    // without having to thread a check through every new interaction.
    <MotionConfig reducedMotion="user">
      <div className="relative isolate min-h-svh bg-bg text-ink">
        <GridDebugOverlay />
        <SmoothCursor />
        <Navbar />
        <main>
          <Hero />
          <Belief />
          <WhatWeBuild />
          <Marquee />
          <Process />
          <Portfolio />
          <Manifesto />
          <WhyErgon />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
