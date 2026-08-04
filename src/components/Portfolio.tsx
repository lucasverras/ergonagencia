import { useMemo, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import PortfolioCard, { PEEK_STEP, type Project } from './PortfolioCard'
import { GradualSpacing } from './ui/gradual-spacing'
import { TextReveal } from './ui/text-reveal'

const projects: Project[] = [
  {
    name: 'GBC',
    category: 'Website & Digital Experience',
    description:
      'Experiência digital para apresentar veículos com mais clareza, desejo e confiança.',
    tags: ['Web', 'UX', 'Automotivo'],
  },
  {
    name: 'Ergon',
    category: 'Brand Website & Studio Presence',
    description:
      'Presença digital da própria marca, conectando serviços, portfólio e conversão.',
    tags: ['Branding', 'Web'],
  },
  {
    name: 'Garagi',
    category: 'Automotive Digital Experience',
    description:
      'Identidade e experiência digital para um projeto do universo automotivo.',
    tags: ['Identidade', 'Web'],
  },
  {
    name: 'Mosaiclab',
    category: 'Corporate Website',
    description:
      'Site institucional corporativo para organizar serviços, setores e autoridade.',
    tags: ['Institucional', 'Web'],
  },
  {
    name: 'Soccer Station',
    category: 'Campaign & Experience Pages',
    description:
      'Páginas e experiências digitais para eventos, campanhas e operação comercial.',
    tags: ['Campanha', 'Landing Page'],
  },
  {
    name: 'Navegando CRM',
    category: 'Internal Tool',
    description:
      'Ferramenta interna para organizar leads, clientes e oportunidades comerciais.',
    tags: ['CRM', 'Internal Tool'],
  },
  {
    name: 'Navegando Site',
    category: 'Website & Content Platform',
    description: 'Presença digital para conteúdo, audiência e posicionamento.',
    tags: ['Conteúdo', 'Web'],
  },
  {
    name: 'Cardápio Franco',
    category: 'Digital Menu',
    description:
      'Cardápio digital mobile para organizar produtos e facilitar a experiência do cliente.',
    tags: ['Mobile', 'Cardápio'],
  },
]

export default function Portfolio() {
  // one shared tall scroll track for the whole deck — each card reads its
  // own slice of this single progress value to slide up and settle, instead
  // of each card owning an independent position:sticky (two sticky elements
  // can never be pinned at once: one always releases before the next
  // engages, so overlap between them is mathematically impossible)
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })
  // smoothed once here, shared by every card — a per-card useSpring wrapping
  // a per-card useTransform doesn't work for this: a spring only animates
  // once its source *changes*, so a card whose derived value sits constant
  // at its "parked below" position (not yet its turn) never fires a change
  // event, and the spring stays stuck at its own stale default (0) instead
  // of that value, until the moment it finally starts moving
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    mass: 0.6,
  })

  // the sticky "stage" climbs by the same amount the active card has sunk
  // (mirrors each card's own rest curve — see PortfolioCard) so the two
  // cancel out and the arriving card's full body always lands back in the
  // same framed spot, instead of creeping further down the viewport with
  // every card and eventually pushing its title/description off-screen
  const total = projects.length
  const { breakpoints, values } = useMemo(() => {
    const bp: number[] = [0]
    const vals: number[] = [0]
    for (let i = 0; i < total; i++) {
      const start = Math.max(i / total, 0.0001)
      const end = start + 0.5 / total
      const restY = i * PEEK_STEP
      bp.push(start, end)
      vals.push(vals[vals.length - 1], restY)
    }
    bp.push(1)
    vals.push(vals[vals.length - 1])
    return { breakpoints: bp, values: vals }
  }, [total])
  const stageYRaw = useTransform(smoothProgress, breakpoints, values)
  const stageTop = useTransform(stageYRaw, (v) => `calc(7rem - ${v}px)`)

  return (
    <section id="portfolio" className="relative pb-32 md:pb-48">
      <div className="grid-shell grid-cols section-pad">
        <div className="col-label">
          <div className="xl:sticky xl:top-28">
            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={revealUp}
              className="mb-6 block text-xs tracking-[0.25em] text-graphite-dim uppercase"
            >
              Portfólio
            </motion.span>
            <h2 className="text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              <GradualSpacing as="span" text="O QUE JÁ" className="w-full" duration={0.35} />
              <GradualSpacing
                as="span"
                text="COLOCAMOS"
                className="w-full"
                duration={0.35}
                delayMultiple={0.025}
              />
              <GradualSpacing
                as="span"
                text="NO AR"
                className="w-full"
                duration={0.35}
                delayMultiple={0.025}
              />
            </h2>
            <TextReveal
              as="p"
              per="word"
              preset="fade-in-blur"
              className="mt-6 max-w-xs text-sm text-graphite md:text-base"
            >
              Projetos, marcas e experiências digitais construídas pela Ergon.
            </TextReveal>
          </div>
        </div>

        <div
          ref={trackRef}
          className="col-body relative"
          style={{ height: `${projects.length * 90}vh` }}
        >
          <motion.div className="sticky h-[70vh]" style={{ top: stageTop }}>
            {projects.map((project, i) => (
              <PortfolioCard
                key={project.name}
                project={project}
                index={i}
                total={projects.length}
                progress={smoothProgress}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
