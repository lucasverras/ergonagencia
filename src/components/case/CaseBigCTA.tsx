import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { revealUp, viewportOnce } from '@/lib/reveal'
import MagicBentoCard from '@/components/ui/MagicBentoCard'

export function CaseBigCTA({
  label,
  href,
  eyebrow,
}: {
  label: string
  href: string
  eyebrow?: string
}) {
  const external = !href.startsWith('/')

  const card = (
    <MagicBentoCard className="group flex items-center justify-between gap-6 rounded-3xl border border-line bg-surface/60 px-7 py-9 backdrop-blur-md transition-colors duration-300 hover:border-lime/40 md:px-12 md:py-12">
      <span className="font-display text-[clamp(1.75rem,5vw,3.75rem)] leading-[1.02] text-ink transition-colors group-hover:text-lime">
        {label}
      </span>
      <ArrowUpRight className="h-9 w-9 shrink-0 text-lime transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:h-14 md:w-14" />
    </MagicBentoCard>
  )

  return (
    <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={revealUp}>
      {eyebrow && (
        <span className="mb-4 block text-xs tracking-[0.25em] text-graphite-dim uppercase">{eyebrow}</span>
      )}
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {card}
        </a>
      ) : (
        <Link to={href} className="block">
          {card}
        </Link>
      )}
    </motion.div>
  )
}
