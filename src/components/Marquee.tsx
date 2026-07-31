import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import StatCard, { type StatCardData } from './StatCard'
import RevealText from './RevealText'

const stats: StatCardData[] = [
  {
    n: '01',
    prefix: '+',
    value: 8.4,
    decimals: 1,
    suffix: '%',
    desc: 'em conversão a cada 0,1s de ganho de velocidade',
    source: 'Google + Deloitte Digital · 37 marcas · 30M sessões',
  },
  {
    n: '02',
    prefix: '+',
    value: 35,
    decimals: 0,
    suffix: '%',
    desc: 'de aumento em conversão apenas corrigindo usabilidade de checkout',
    source: 'Baymard Institute · meta-análise de 50 estudos',
  },
  {
    n: '03',
    prefix: '',
    value: 70,
    decimals: 0,
    suffix: '%',
    desc: 'dos carrinhos são abandonados antes da compra ser concluída',
    source: 'Baymard Institute · média global',
  },
  {
    n: '04',
    prefix: '',
    value: 80,
    decimals: 0,
    suffix: '%',
    desc: 'é a taxa de abandono no mobile, contra 68% no desktop',
    source: 'Dynamic Yield · últimos 12 meses',
  },
]

export default function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-line py-14">
      <div className="grid-shell grid-cols">
        <div className="xl:[grid-column:1/9]">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={revealUp}
            className="block font-mono text-xs tracking-[0.25em] text-graphite-dim uppercase"
          >
            [ resultados ]
          </motion.span>
          <h2 className="mt-4 max-w-2xl text-2xl leading-[1.1] font-semibold tracking-tight md:text-4xl">
            <RevealText className="block w-fit">
              Projetos feitos para funcionar e{' '}
              <span className="text-lime">gerar resultados</span>.
            </RevealText>
          </h2>
        </div>

        <div className="col-span-full mt-8 grid grid-cols-2 gap-4 xl:mt-10 xl:[grid-column:5/13]">
          {stats.map((stat) => (
            <StatCard key={stat.n} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
