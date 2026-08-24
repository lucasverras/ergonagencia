import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import { GradualSpacing } from './ui/gradual-spacing'
import { TextReveal } from './ui/text-reveal'

// Real clients only — every entry has its own case at /portfolio/:slug.
// No Soccer Station (fully removed from the site), no Ergon Fly (that's
// Ergon's own sub-brand, not a client), no invented names to pad the count.
// Logos are real files pulled from each client's own site — garagi and
// vamo-nessa-sp have none yet (Garagi's onboarding wasn't authorized;
// Vamo Nessa SP has no public site/logo of its own), so those render as
// blank slots rather than falling back to a text name.
const clients = [
  { name: 'Vamo Nessa SP', slug: 'vamo-nessa-sp', logo: null },
  { name: 'Garagi', slug: 'garagi', logo: null },
  { name: 'Green Bay Car', slug: 'green-bay-car', logo: '/logos/green-bay-car.png' },
  { name: '3WS Moldes', slug: '3ws-moldes', logo: '/logos/3ws-moldes.png' },
  { name: 'Franco Gastrobar', slug: 'franco-gastrobar', logo: '/logos/franco-gastrobar.png' },
  { name: 'Navegando MKT', slug: 'navegando-mkt', logo: '/logos/navegando-mkt.png' },
]

export default function ClientsMarquee() {
  const reduced = useReducedMotion()
  // tripled, not doubled — with only 6 real clients, two copies repeat
  // noticeably fast at a deliberately slow speed; three keeps the loop
  // reading as continuous rather than "starting over"
  const loop = [...clients, ...clients, ...clients]

  return (
    <section id="clientes" className="relative overflow-hidden border-y border-line py-14 md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-80"
        style={{
          backgroundImage: 'url(/images/results-grid.png)',
          maskImage:
            'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/10 to-bg" />

      <div className="grid-shell grid-cols relative z-10">
        <div className="col-span-full xl:[grid-column:1/9]">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="block font-mono text-xs tracking-[0.25em] text-graphite-dim uppercase"
          >
            [ clientes ]
          </motion.span>
          <h2 className="mt-4 max-w-4xl text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
            <GradualSpacing as="span" text="Empresas que colocaram projetos" className="w-full" />
            <GradualSpacing
              as="span"
              text="para funcionar com a Ergon."
              className="mt-1 w-full"
              delayMultiple={0.025}
              highlight={{ word: 'a Ergon.', variant: 'circle', delay: 0.35 }}
            />
          </h2>
          <TextReveal
            as="p"
            per="line"
            preset="fade-in-blur"
            className="mt-4 max-w-md text-base text-graphite"
          >
            Projetos digitais para operações, marcas e negócios em diferentes estágios.
          </TextReveal>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={revealUp}
        className="relative z-10 mt-12 md:mt-16"
      >
        <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div
            className="flex shrink-0 items-center gap-14 pr-14 group-hover:[animation-play-state:paused] md:gap-20 md:pr-20"
            style={reduced ? undefined : { animation: 'marquee 42s linear infinite' }}
          >
            {loop.map((client, i) =>
              client.logo ? (
                <Link
                  key={`${client.slug}-${i}`}
                  to={`/portfolio/${client.slug}`}
                  title={client.name}
                  className="flex h-10 shrink-0 items-center md:h-14"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </Link>
              ) : (
                <span
                  key={`${client.slug}-${i}`}
                  aria-hidden="true"
                  className="h-10 w-28 shrink-0 rounded-md border border-dashed border-line/60 md:h-14 md:w-36"
                />
              ),
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
