import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Plus, Globe, LayoutDashboard, Workflow, Rocket, type LucideIcon } from 'lucide-react'
import { revealUp, viewportOnce } from '../lib/reveal'
import MagicBentoCard from './ui/MagicBentoCard'
import type { ServiceKey } from '@/lib/schema'
import type { ServiceStudy } from '@/services/servicesData'

// one small, literal motif per category — no generic AI-illustration
// stand-ins, just the plainest real icon for what each service actually is
const ICONS: Partial<Record<ServiceKey, LucideIcon>> = {
  websites: Globe,
  systems: LayoutDashboard,
  automation: Workflow,
  digitalProducts: Rocket,
}

export function ServiceTabCard({ service, index }: { service: ServiceStudy; index: number }) {
  const tags = service.whatWeCreate.slice(0, 3).map((item) => item.title)
  const Icon = ICONS[service.serviceKey]

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealUp}
      className="h-full"
    >
      <Link to={`/servicos/${service.slug}`} className="block h-full">
        <MagicBentoCard className="group flex h-full min-h-[380px] flex-col justify-between rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-md transition-colors duration-300 hover:border-lime/30 md:p-7">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.2em] text-graphite-dim">
              {String(index + 1).padStart(2, '0')}
            </span>
            {Icon && (
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-graphite transition-colors duration-300 group-hover:border-lime/40 group-hover:text-lime">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
            )}
          </div>

          <h3 className="mt-8 text-2xl leading-[1.12] font-semibold tracking-tight text-ink transition-colors group-hover:text-lime md:text-[1.75rem]">
            {service.categoryLabel}
          </h3>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-[11px] text-graphite-dim"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="mt-8 flex h-9 w-9 items-center justify-center rounded-full border border-line text-graphite transition-all duration-300 group-hover:rotate-45 group-hover:border-lime/50 group-hover:text-lime">
            <Plus className="h-4 w-4" />
          </span>
        </MagicBentoCard>
      </Link>
    </motion.div>
  )
}
