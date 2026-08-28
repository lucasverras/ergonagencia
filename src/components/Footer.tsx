import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { revealUp, viewportOnce } from '../lib/reveal'
import logo from '../assets/logo.svg'
import { TextReveal } from './ui/text-reveal'
import { services } from '../services/servicesData'
import { WHATSAPP_URL } from '../lib/schema'

const ergonLinks = [
  { label: 'Projetos', href: '/portfolio' },
  { label: 'Método', href: '/#processo' },
  { label: 'Ergon Fly', href: '/fly' },
  { label: 'Contato', href: WHATSAPP_URL },
]

// "/..." and hash anchors need client-side routing (Link); a full external
// URL (the WhatsApp contact link) stays a plain <a> that opens in a new tab
function FooterLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

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
              per="line"
              preset="fade"
              className="mt-6 max-w-sm text-sm text-graphite md:text-base"
            >
              Digital product studio dedicado a tirar ideias do papel — da
              estratégia à operação.
            </TextReveal>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-lime md:text-4xl"
          >
            Falar sobre um projeto
            <ArrowUpRight className="h-6 w-6 text-lime transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:h-8 md:w-8" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-line pt-10 sm:grid-cols-2 md:mt-16">
          <div>
            <span className="block text-xs tracking-[0.25em] text-graphite-dim uppercase">Serviços</span>
            <nav className="mt-4 flex flex-col gap-2.5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicos/${s.slug}`}
                  className="text-sm text-graphite transition-colors hover:text-ink"
                >
                  {s.categoryLabel}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="block text-xs tracking-[0.25em] text-graphite-dim uppercase">Ergon</span>
            <nav className="mt-4 flex flex-col gap-2.5">
              {ergonLinks.map((l) => (
                <FooterLink
                  key={l.label}
                  href={l.href}
                  className="text-sm text-graphite transition-colors hover:text-ink"
                >
                  {l.label}
                </FooterLink>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-6 border-t border-line pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-graphite-dim">
            © {new Date().getFullYear()} Ergon Product Studio ·{' '}
            <a
              href="https://www.ergonstudio.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-lime"
            >
              www.ergonstudio.com.br
            </a>
          </p>

          <Link
            to="/#top"
            className="-my-3 px-1 py-3 text-xs text-graphite transition-colors hover:text-lime"
          >
            Voltar ao topo
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}
