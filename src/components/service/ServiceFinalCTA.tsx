import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { revealUp, viewportOnce } from '@/lib/reveal'
import { GradualSpacing } from '@/components/ui/gradual-spacing'
import { WHATSAPP_URL } from '@/lib/schema'

export function ServiceFinalCTA({ headline }: { headline: string }) {
  return (
    <section className="relative overflow-hidden border-t border-line section-pad text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%]"
        style={{
          background: 'radial-gradient(600px circle at 50% 0%, rgba(227,255,12,0.1), transparent 65%)',
        }}
      />
      <div className="grid-shell">
        <h2 className="mx-auto max-w-2xl text-2xl leading-[1.15] font-semibold tracking-tight md:text-4xl">
          <GradualSpacing as="span" text={headline} className="w-full justify-center" />
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mt-8 flex justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 text-sm font-medium text-bg shadow-[0_0_0_0_rgba(227,255,12,0)] transition-shadow duration-300 hover:shadow-[0_0_32px_4px_rgba(227,255,12,0.4)]"
          >
            Falar com a Ergon
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
