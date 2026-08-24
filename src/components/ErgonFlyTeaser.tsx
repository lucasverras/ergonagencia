import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '../lib/reveal'

// a complementary capability, not a fifth pillar — deliberately smaller
// and quieter than the four services cards above it. Real drone photo,
// but low-opacity and gradient-faded rather than a loud full-strength
// stock shot — the drone itself sits in the left portion of the crop.
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
              <div className="relative min-h-[360px] sm:aspect-[5/2] sm:min-h-0">
                <img
                  src="/images/fly-drone.jpg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-35"
                  style={{ objectPosition: '20% center', transform: 'scaleX(-1)' }}
                />
                {/* left (text area) fades to surface, right shows photo */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-surface from-30% via-surface/50 to-transparent"
                />
                {/* bottom fade for text contrast — the copy sits bottom-left,
                    exactly where the sweep above leaves the photo most
                    visible, so this keeps it readable regardless */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"
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
                      'radial-gradient(420px circle at 15% 90%, rgba(227,255,12,0.14), transparent 70%)',
                  }}
                />
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={revealContainer(0.08)}
                className="absolute inset-0 flex flex-col justify-center p-6 md:p-10"
              >
                <motion.span
                  variants={revealUp}
                  className="mb-3 block text-xs tracking-[0.25em] text-lime uppercase"
                >
                  [ Ergon Fly ]
                </motion.span>
                <motion.h2
                  variants={revealUp}
                  className="text-3xl leading-[1.05] font-semibold tracking-tight text-ink md:text-5xl"
                >
                  Captação aérea que valoriza sua marca.
                </motion.h2>
                <motion.p variants={revealUp} className="mt-3 max-w-sm text-sm text-graphite md:text-base">
                  Produção profissional com drones para marcas, imóveis, indústria, eventos e projetos que precisam de uma nova perspectiva.
                </motion.p>
                <motion.span
                  variants={revealUp}
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-lime"
                >
                  <span className="relative">
                    Ver projetos com drones
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-0 bg-lime transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                    />
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.span>
              </motion.div>
            </div>

          </motion.div>
        </Link>
      </div>
    </section>
  )
}
