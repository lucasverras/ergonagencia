import { Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { SmoothCursor } from './components/ui/smooth-cursor'
import GridDebugOverlay from './components/GridDebugOverlay'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import FlyPage from './fly/FlyPage'
import CaseStudy from './pages/CaseStudy'

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fly" element={<FlyPage />} />
          <Route path="/portfolio/:slug" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
