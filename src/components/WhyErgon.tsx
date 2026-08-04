import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'

interface WhyItem {
  n: string
  before: string
  strong: string
  after: string
}

const items: WhyItem[] = [
  {
    n: '01',
    before: 'Construímos em código com ',
    strong: 'React e Next.js',
    after:
      ' — nada de construtor, nada de plugin para o que deveria ser feito direito.',
  },
  {
    n: '02',
    before: 'Hospedamos em infraestrutura de borda com ',
    strong: 'Vercel e Cloudflare',
    after:
      ', sobre os mesmos datacenters da AWS que sustentam produtos globais.',
  },
  {
    n: '03',
    before: 'Continuamos disponíveis ',
    strong: 'depois do lançamento',
    after: ', pelo tempo em que o produto for nosso também.',
  },
  {
    n: '04',
    before: 'Definimos ',
    strong: 'o que não vai ser construído',
    after: ' agora — escopo enxuto no ar vale mais que escopo completo no papel.',
  },
  {
    n: '05',
    before: 'Você fala ',
    strong: 'com quem constrói',
    after: ', do primeiro diagnóstico ao deploy.',
  },
]

export default function WhyErgon() {
  return (
    <section aria-label="Por que a Ergon" className="relative">
      <div className="grid-shell section-pad">
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={revealUp}
          className="mb-10 block font-mono text-xs tracking-[0.25em] text-graphite-dim uppercase md:mb-14"
        >
          [ por que a ergon ]
        </motion.span>

        <ol className="divide-y divide-line">
          {items.map((item, i) => (
            <motion.li
              key={item.n}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={revealUp}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-start sm:gap-6 md:py-8"
            >
              <span className="text-sm font-bold text-lime sm:w-12 sm:shrink-0 sm:pt-0.5">
                {item.n}
              </span>
              <p className="max-w-3xl text-base leading-relaxed text-ink/85 md:text-lg">
                {item.before}
                <strong className="font-bold text-lime">{item.strong}</strong>
                {item.after}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
