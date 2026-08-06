import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import logo from '../assets/logo.svg'
import { TextReveal } from './ui/text-reveal'

const links = [
  { label: 'Produtos', href: '#produtos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Portfólio', href: '#portfolio' },
]

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealUp}
      className="relative overflow-hidden border-t border-line bg-surface/40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(227,255,12,0.4), transparent)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            'radial-gradient(680px circle at 50% 0%, rgba(227,255,12,0.08), transparent 70%)',
        }}
      />

      <div className="grid-shell section-pad relative z-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <img src={logo} alt="Ergon" className="h-9 w-auto md:h-11" />
            <TextReveal
              as="p"
              per="word"
              preset="fade"
              className="mt-6 max-w-sm text-sm text-graphite md:text-base"
            >
              Digital product studio dedicado a tirar ideias do papel — da
              estratégia à operação.
            </TextReveal>
          </div>

          <a
            href="mailto:contato@ergon.studio"
            className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-lime md:text-4xl"
          >
            contato@ergon.studio
            <span className="text-lime transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center gap-6 border-t border-line pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-graphite-dim">
            © {new Date().getFullYear()} Ergon Digital Product Studio.
          </p>

          <nav className="flex items-center gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="-my-3 px-1 py-3 text-xs text-graphite transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#top"
              className="-my-3 px-1 py-3 text-xs text-graphite transition-colors hover:text-lime"
            >
              Voltar ao topo
            </a>
          </nav>
        </div>
      </div>
    </motion.footer>
  )
}
