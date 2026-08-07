import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import { FocusRail, type FocusRailItem } from './ui/focus-rail'
import { GradualSpacing } from './ui/gradual-spacing'
import { TextReveal } from './ui/text-reveal'

interface Project {
  name: string
  description: string
  tags: string[]
  href?: string
  image?: string
}

const projects: Project[] = [
  {
    name: 'GBC',
    description:
      'Experiência digital para apresentar veículos com mais clareza, desejo e confiança.',
    tags: ['Web', 'UX', 'Automotivo'],
    href: 'https://www.gbccar.com.br',
    image: '/images/portfolio/gbc.png',
  },
  {
    name: 'Ergon',
    description:
      'Presença digital da própria marca, conectando serviços, portfólio e conversão.',
    tags: ['Branding', 'Web'],
    href: 'https://www.ergonagencia.com.br',
    image: '/images/portfolio/ergon.png',
  },
  {
    name: 'Garagi',
    description:
      'Identidade e experiência digital para um projeto do universo automotivo.',
    tags: ['Identidade', 'Web'],
  },
  {
    name: 'Mosaiclab',
    description:
      'Site institucional corporativo para organizar serviços, setores e autoridade.',
    tags: ['Institucional', 'Web'],
    href: 'https://www.mosaiclab.com.br',
    image: '/images/portfolio/mosaiclab.png',
  },
  {
    name: 'Soccer Station',
    description:
      'Páginas e experiências digitais para eventos, campanhas e operação comercial.',
    tags: ['Campanha', 'Landing Page'],
    href: 'https://www.soccerstation.com.br',
    image: '/images/portfolio/soccer-station.png',
  },
  {
    name: 'Navegando CRM',
    description:
      'Ferramenta interna para organizar leads, clientes e oportunidades comerciais.',
    tags: ['CRM', 'Internal Tool'],
    href: 'https://navegandocrm.vercel.app/',
    image: '/images/portfolio/navegando-crm.png',
  },
  {
    name: 'Navegando Site',
    description: 'Presença digital para conteúdo, audiência e posicionamento.',
    tags: ['Conteúdo', 'Web'],
    href: 'https://www.navegandomkt.com.br',
    image: '/images/portfolio/navegando-site.png',
  },
  {
    name: 'Cardápio Franco',
    description:
      'Cardápio digital mobile para organizar produtos e facilitar a experiência do cliente.',
    tags: ['Mobile', 'Cardápio'],
    href: 'https://www.francogastrobar.com.br',
    image: '/images/portfolio/cardapio-franco.png',
  },
]

// case-study photography isn't shot yet — a monogram-on-grid placeholder in
// the site's own surface/line colors, same language as every other
// placeholder on the page, rather than borrowing unrelated stock photos for
// a real client's portfolio
function placeholderImage(name: string) {
  const initials = name.slice(0, 2).toUpperCase()
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000">
    <rect width="100%" height="100%" fill="#111018" />
    <defs>
      <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
        <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <text x="50%" y="52%" font-family="sans-serif" font-size="320" font-weight="700" fill="rgba(255,255,255,0.08)" text-anchor="middle" dominant-baseline="middle">${initials}</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const railItems: FocusRailItem[] = projects.map((project) => ({
  id: project.name,
  title: project.name,
  description: project.description,
  tags: project.tags,
  href: project.href,
  imageSrc: project.image ?? placeholderImage(project.name),
}))

export default function Portfolio() {
  const [ambient, setAmbient] = useState({
    id: railItems[0].id,
    imageSrc: railItems[0].imageSrc,
  })

  // stable identity across renders — FocusRail's effect depends on this
  // callback, so a fresh inline function here would re-fire it (and this
  // setState) every render, looping forever
  const handleActiveChange = useCallback((item: FocusRailItem) => {
    setAmbient((prev) => (prev.id === item.id ? prev : { id: item.id, imageSrc: item.imageSrc }))
  }, [])

  return (
    <section id="portfolio" className="relative section-pad">
      {/* a tall track under a sticky stage pinned near the top of the
          viewport — normal scroll carries the whole thing (section title,
          card title, image, description, button) fully into view and holds
          it there *before* the wheel-lock takes over, so browsing through
          projects never traps the page mid-scroll with anything cut off
          below the fold. Anchored to a fixed top offset rather than
          viewport-center: centering would "catch" the sticky content as
          soon as it crosses the screen's middle, which — now that Process
          above it is short — happens while Process's tail is still visible,
          overlapping it. Anchoring near the top only engages once Process
          has actually scrolled out of the way. */}
      <div className="relative" style={{ height: '200vh' }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="sticky top-24"
        >
          {/* ambient glow for the whole stage — deliberately larger than the
              rail's own box and behind everything (heading included), faded
              out with a radial mask instead of a hard rectangular edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -inset-y-32 z-0 overflow-hidden md:-inset-x-24 md:-inset-y-48"
            style={{
              maskImage:
                'radial-gradient(ellipse 55% 65% at 50% 55%, black 0%, transparent 70%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 55% 65% at 50% 55%, black 0%, transparent 70%)',
            }}
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={ambient.id}
                src={ambient.imageSrc}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-0 h-full w-full object-cover blur-3xl saturate-200"
              />
            </AnimatePresence>
          </div>

          <div className="relative z-10 grid-shell text-center">
            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={revealUp}
              className="mb-3 block text-xs tracking-[0.25em] text-graphite-dim uppercase"
            >
              Portfólio
            </motion.span>

            <h2 className="mx-auto max-w-2xl text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              <GradualSpacing
                as="span"
                text="O que já colocamos no ar"
                className="w-full justify-center"
                duration={0.35}
                highlight={{ word: 'no ar', variant: 'circle', delay: 0.45 }}
              />
            </h2>

            <TextReveal
              as="p"
              per="line"
              preset="fade-in-blur"
              className="mx-auto mt-3 max-w-xl text-base text-graphite"
            >
              Projetos, marcas e experiências digitais construídas pela Ergon.
            </TextReveal>
          </div>

          <div className="relative z-10 mt-6 md:mt-8">
            <FocusRail
              items={railItems}
              loop={false}
              autoPlay={false}
              onActiveChange={handleActiveChange}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
