import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { revealUp, revealContainer, viewportOnce } from '../lib/reveal'

// a complementary capability, not a fifth pillar — deliberately smaller
// and quieter than the four services cards above it: one banner, one
// image, one CTA, none of the four-pillar grid's visual weight
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
            className="relative overflow-hidden rounded-3xl border border-line"
          >
            <div className="relative aspect-[21/9] sm:aspect-[3/1]">
              <img
                src="/fly/images/aerial-beach.jpg"
                alt="Captação aérea com drone pela Ergon Fly"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-transparent" />
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
          </motion.div>
        </Link>
      </div>
    </section>
  )
}
