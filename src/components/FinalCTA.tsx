import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import RevealText from './RevealText'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden text-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={revealUp}
        className="grid-shell section-pad"
      >
        <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
          <RevealText>Tem uma ideia parada?</RevealText>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-graphite">
          Vamos transformar em produto digital.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a
            href="mailto:contato@ergon.studio"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 text-sm font-medium text-bg shadow-[0_0_0_0_rgba(227,255,12,0)] transition-shadow duration-300 hover:shadow-[0_0_32px_4px_rgba(227,255,12,0.4)]"
          >
            Começar um projeto
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </motion.a>
          <motion.a
            href="mailto:contato@ergon.studio"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="rounded-full border border-line px-8 py-3.5 text-sm text-ink transition-colors hover:border-violet hover:text-violet"
          >
            Enviar mensagem
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
