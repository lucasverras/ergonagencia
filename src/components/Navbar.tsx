import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const links = [
  { label: 'Produtos', href: '#produtos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Portfólio', href: '#portfolio' },
]

// once scrolled, the header detaches from the hero and becomes an inset
// floating bar — toggled by a single boolean and animated purely with CSS
// transitions, since the properties involved (backdrop-filter, box-shadow,
// border-radius) aren't things Framer Motion interpolates natively
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60)
        ticking.current = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-[var(--z-navbar)]"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div
        className={`mx-auto transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? 'mt-3 max-w-3xl rounded-2xl border border-line bg-bg/70 px-2 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)] backdrop-blur-md'
            : 'mt-0 max-w-none rounded-none border border-transparent bg-transparent px-0 shadow-none'
        }`}
        style={{ width: scrolled ? 'calc(100% - 24px)' : '100%' }}
      >
        <nav
          className={`flex items-center justify-between transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled ? 'h-12 px-2' : 'grid-shell h-16 py-4'
          }`}
        >
          <a href="#top" className="flex items-center">
            <img
              src={logo}
              alt="Ergon"
              className={`w-auto transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                scrolled ? 'h-4' : 'h-5 md:h-6'
              }`}
            />
          </a>

          <ul
            className={`hidden items-center md:flex transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled ? 'gap-5' : 'gap-8'
            }`}
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-graphite transition-colors hover:text-ink ${
                    scrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <motion.a
            href="#cta"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className={`group flex items-center gap-2 rounded-full bg-lime font-medium text-bg shadow-[0_0_0_0_rgba(227,255,12,0)] transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_0_24px_2px_rgba(227,255,12,0.35)] ${
              scrolled ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'
            }`}
          >
            Começar um projeto
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </motion.a>
        </nav>
      </div>
    </motion.header>
  )
}
