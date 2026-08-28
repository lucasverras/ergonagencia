import { useSEO } from '../lib/seo'
import { SITE_URL } from '../lib/schema'
import { NotFoundContent } from '../components/NotFoundContent'

export default function NotFound() {
  useSEO({
    title: 'Página não encontrada | Ergon Studio',
    description: 'Esta página não existe ou foi movida. Volte para a home da Ergon Studio.',
    // self-referencing rather than pointing at the home page: a canonical
    // to "/" on an error page is the classic soft-404 signal.
    canonical: `${SITE_URL}/404`,
    noindex: true,
  })

  return <NotFoundContent />
}
