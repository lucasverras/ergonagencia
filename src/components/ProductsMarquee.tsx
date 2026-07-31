import { motion, useReducedMotion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'

const products = [
  'Digital Products',
  'Landing Pages',
  'Custom Software',
  'Internal Tools',
  'SaaS Products',
  'Digital Catalogs',
  'Digital Menus',
  'Event Pages',
  'Booking Systems',
  'Admin Dashboards',
  'Mini CRMs',
]

export default function ProductsMarquee() {
  const reduced = useReducedMotion()
  const loop = [...products, ...products]

  return (
    <motion.section
      id="produtos"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealUp}
      className="border-y border-line py-10"
    >
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]"
          style={
            reduced
              ? undefined
              : { animation: 'marquee 48s linear infinite' }
          }
        >
          {loop.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="flex shrink-0 items-center gap-10 text-lg font-medium tracking-tight text-graphite transition-colors hover:text-lime md:text-2xl"
            >
              {p}
              <span className="text-violet/60" aria-hidden="true">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
