import { FaqAccordion } from '@/components/FaqAccordion'
import { flyFaq } from '../../fly/flyServices'

export default function FlyFaq() {
  return <FaqAccordion items={flyFaq} />
}
