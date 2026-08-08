import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import { GradualSpacing } from './ui/gradual-spacing'
import { TextReveal } from './ui/text-reveal'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden section-pad text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%]"
        style={{
          background:
            'radial-gradient(600px circle at 50% 0%, rgba(227,255,12,0.1), transparent 65%)',
        }}
      />

      <div className="grid-shell">
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mb-8 inline-block rounded-full border border-lime/30 px-4 py-2 font-mono text-xs tracking-[0.25em] text-lime uppercase"
        >
          [ vamos trabalhar juntos ]
        </motion.span>
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          <GradualSpacing
            as="span"
            text="O mercado não espera sua ideia ficar perfeita."
            className="w-full justify-center"
            highlight={{ word: 'perfeita.', delay: 0.5 }}
          />
        </h2>
        <TextReveal
          as="p"
          per="line"
          preset="fade-in-blur"
          className="mx-auto mt-5 max-w-[52ch] text-base text-graphite"
        >
          Do primeiro pixel ao lançamento — e depois dele. Conte o que
          você precisa construir e a gente responde com o caminho, o
          prazo e o que faz sentido priorizar.
        </TextReveal>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a
            href="mailto:agenciaergon0@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 text-sm font-medium text-bg shadow-[0_0_0_0_rgba(227,255,12,0)] transition-shadow duration-300 hover:shadow-[0_0_32px_4px_rgba(227,255,12,0.4)]"
          >
            Iniciar um projeto
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </motion.a>
          <motion.a
            // TODO: substituir pelo número de WhatsApp oficial da Ergon
            href="https://wa.me/SEU_NUMERO_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="rounded-full border border-line px-8 py-3.5 text-sm text-ink transition-colors hover:border-violet hover:text-violet"
          >
            WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  )
}
