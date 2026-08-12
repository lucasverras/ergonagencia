import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { SmoothCursor } from './components/ui/smooth-cursor'
import GridDebugOverlay from './components/GridDebugOverlay'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import FlyPage from './fly/FlyPage'
import CaseStudy from './pages/CaseStudy'
import NotFound from './pages/NotFound'
import { useGlobalSchema } from './lib/seo'
import { organizationSchema, websiteSchema, servicesSchema, offerCatalogSchema } from './lib/schema'

// react-router doesn't touch scroll position on its own. A route change
// with no hash goes to the top of the new page, like a normal navigation
// would; a route change ending in a hash (e.g. the case pages' "← Portfólio"
// link to "/#portfolio") jumps to that section once it's actually mounted —
// a plain <a href="#portfolio"> only scrolls within the current document,
// so it can't do this on its own after a route change.
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.slice(1)
    // one frame isn't always enough — the target route's own layout
    // (images, fonts, reveal-on-scroll wrappers) can still be settling
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' })
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])

  return null
}

function App() {
  // Organization/WebSite/Service/OfferCatalog describe the entity as a
  // whole, not any one route — injected once here so every page shares the
  // same @ids instead of each route re-describing "who is Ergon" on its own.
  useGlobalSchema([organizationSchema(), websiteSchema(), ...servicesSchema(), offerCatalogSchema()])

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
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fly" element={<FlyPage />} />
          <Route path="/portfolio/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
