import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import RevealText from './RevealText'

export default function Manifesto() {
  return (
    <section className="bg-lime text-bg">
      <div className="grid-shell grid-cols section-pad">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="col-prose"
        >
          <p className="text-4xl leading-[1.05] font-semibold tracking-tight md:text-7xl">
            <RevealText className="block w-fit" barClassName="bg-bg">
              Digital não é vitrine.
            </RevealText>
            <RevealText className="block w-fit" barClassName="bg-bg" delay={0.12}>
              É operação.
            </RevealText>
          </p>
          <p className="mt-10 text-base leading-relaxed font-medium md:text-lg">
            Criamos produtos digitais para empresas que precisam vender melhor,
            organizar processos, reduzir improvisos e lançar novas experiências.
          </p>
          <p className="mt-6 text-base leading-relaxed font-semibold md:text-lg">
            A ideia não é apenas aparecer. É funcionar melhor.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
