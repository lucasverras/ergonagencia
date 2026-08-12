import { useSEO } from '../lib/seo'
import { SITE_URL } from '../lib/schema'
import { NotFoundContent } from '../components/NotFoundContent'

export default function NotFound() {
  useSEO({
    title: 'Página não encontrada — Ergon Agência',
    description: 'Esta página não existe ou foi movida. Volte para a home da Ergon Agência.',
    canonical: `${SITE_URL}/`,
    noindex: true,
  })

  return <NotFoundContent />
}
