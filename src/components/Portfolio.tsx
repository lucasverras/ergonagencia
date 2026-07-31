import { motion } from 'framer-motion'
import { revealUp, viewportOnce } from '../lib/reveal'
import PortfolioCard, { type Project } from './PortfolioCard'
import RevealText from './RevealText'

const projects: Project[] = [
  {
    name: 'GBC',
    category: 'Website & Digital Experience',
    description:
      'Experiência digital para apresentar veículos com mais clareza, desejo e confiança.',
    tags: ['Web', 'UX', 'Automotivo'],
  },
  {
    name: 'Ergon',
    category: 'Brand Website & Studio Presence',
    description:
      'Presença digital da própria marca, conectando serviços, portfólio e conversão.',
    tags: ['Branding', 'Web'],
  },
  {
    name: 'Garagi',
    category: 'Automotive Digital Experience',
    description:
      'Identidade e experiência digital para um projeto do universo automotivo.',
    tags: ['Identidade', 'Web'],
  },
  {
    name: 'Mosaiclab',
    category: 'Corporate Website',
    description:
      'Site institucional corporativo para organizar serviços, setores e autoridade.',
    tags: ['Institucional', 'Web'],
  },
  {
    name: 'Soccer Station',
    category: 'Campaign & Experience Pages',
    description:
      'Páginas e experiências digitais para eventos, campanhas e operação comercial.',
    tags: ['Campanha', 'Landing Page'],
  },
  {
    name: 'Navegando CRM',
    category: 'Internal Tool',
    description:
      'Ferramenta interna para organizar leads, clientes e oportunidades comerciais.',
    tags: ['CRM', 'Internal Tool'],
  },
  {
    name: 'Navegando Site',
    category: 'Website & Content Platform',
    description: 'Presença digital para conteúdo, audiência e posicionamento.',
    tags: ['Conteúdo', 'Web'],
  },
  {
    name: 'Cardápio Franco',
    category: 'Digital Menu',
    description:
      'Cardápio digital mobile para organizar produtos e facilitar a experiência do cliente.',
    tags: ['Mobile', 'Cardápio'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative">
      <div className="grid-shell grid-cols section-pad">
        <div className="col-label">
          <div className="xl:sticky xl:top-28">
            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={revealUp}
              className="mb-6 block text-xs tracking-[0.25em] text-graphite-dim uppercase"
            >
              Portfólio
            </motion.span>
            <h2 className="text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              <RevealText className="block w-fit">O QUE JÁ</RevealText>
              <RevealText className="block w-fit" delay={0.1}>
                COLOCAMOS
              </RevealText>
              <RevealText className="block w-fit" delay={0.2}>
                NO AR
              </RevealText>
            </h2>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={revealUp}
              className="mt-6 max-w-xs text-sm text-graphite md:text-base"
            >
              Projetos, marcas e experiências digitais construídas pela Ergon.
            </motion.p>
          </div>
        </div>

        <div className="col-body flex flex-col gap-8 xl:gap-0">
          {projects.map((project, i) => (
            <PortfolioCard
              key={project.name}
              project={project}
              index={i}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
