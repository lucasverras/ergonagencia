import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Drone } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '../lib/reveal'

// a complementary capability, not a fifth pillar — deliberately smaller
// and quieter than the four services cards above it. Abstract background
// (no stock-feeling photo) with a single drone mark breaking past the
// card's own edge, rather than a literal aerial photograph.
export default function ErgonFlyTeaser() {
  return (
    <section className="border-t border-line py-14 md:py-20">
      <div className="grid-shell">
        <Link to="/fly" className="group block">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="relative overflow-visible rounded-3xl border border-line bg-surface/60 transition-colors duration-300 group-hover:border-lime/30"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[21/9] sm:aspect-[3/1]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.25]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(640px circle at 85% 30%, rgba(139,92,246,0.28), transparent 70%)',
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(420px circle at 15% 90%, rgba(227,255,12,0.12), transparent 70%)',
                  }}
                />
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={revealContainer(0.08)}
                className="absolute inset-0 flex flex-col justify-end p-6 md:p-10"
              >
                <motion.span
                  variants={revealUp}
                  className="mb-2 block text-xs tracking-[0.25em] text-lime uppercase"
                >
                  [ Ergon Fly ]
                </motion.span>
                <motion.h2
                  variants={revealUp}
                  className="max-w-md text-2xl leading-[1.1] font-semibold tracking-tight text-ink md:text-4xl"
                >
                  Também produzimos no mundo físico.
                </motion.h2>
                <motion.p variants={revealUp} className="mt-2 max-w-sm text-sm text-graphite md:text-base">
                  Captação aérea para marcas, imóveis, indústria, eventos e produções.
                </motion.p>
                <motion.span
                  variants={revealUp}
                  className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-lime"
                >
                  Conhecer Ergon Fly
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.span>
              </motion.div>
            </div>

            {/* the "recorte extra" — half inside the card, half breaking
                past its top-right corner, not clipped by the card's own
                overflow-hidden (that's scoped to the inner wrapper above) */}
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-6 -right-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-line bg-bg text-lime shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:-translate-y-1 md:h-24 md:w-24"
            >
              <Drone className="h-9 w-9 md:h-11 md:w-11" strokeWidth={1.5} />
            </motion.span>
          </motion.div>
        </Link>
      </div>
    </section>
  )
}
