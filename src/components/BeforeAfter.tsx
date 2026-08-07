import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import { ImageComparison } from './ui/image-comparison-slider'
import { GradientBars } from './ui/gradient-bars-background'
import { GradualSpacing } from './ui/gradual-spacing'
import { TextReveal } from './ui/text-reveal'

export default function BeforeAfter() {
  return (
    <section id="antes-depois" className="relative overflow-hidden">
      <GradientBars
        numBars={15}
        gradientFrom="var(--color-violet)"
        gradientTo="transparent"
        animationDuration={3.5}
        className="opacity-[0.12]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[65%]"
        style={{
          background:
            'radial-gradient(700px circle at 85% 0%, rgba(139,92,246,0.18), transparent 65%)',
        }}
      />

      <div className="grid-shell relative z-10 section-pad text-center">
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mb-3 block text-xs tracking-[0.25em] text-graphite-dim uppercase"
        >
          Transformação
        </motion.span>

        <h2 className="mx-auto max-w-2xl text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
          <GradualSpacing
            as="span"
            text="O antes não sobrevive ao depois."
            className="w-full justify-center"
            highlight={{ word: 'depois.', variant: 'circle', delay: 0.4 }}
          />
        </h2>

        <TextReveal
          as="p"
          per="line"
          preset="fade-in-blur"
          className="mx-auto mt-3 max-w-md text-base text-graphite"
        >
          Passe o mouse para comparar. Mesma marca, mesmo produto — outra
          experiência de usar.
        </TextReveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mt-10 md:mt-14"
        >
          <span className="mb-4 block font-mono text-xs tracking-[0.2em] text-graphite-dim uppercase">
            GBC
          </span>
          <ImageComparison
            media="video"
            beforeImage="/videos/gbc-antes.mp4"
            afterImage="/videos/gbc-depois.mp4"
            altBefore="Versão anterior do site da GBC"
            altAfter="Site atual da GBC, desenvolvido pela Ergon"
            beforeLabel="Antes"
            afterLabel="Depois"
            className="mx-auto aspect-[16/10] max-w-4xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
