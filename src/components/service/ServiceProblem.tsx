import { GradualSpacing } from '@/components/ui/gradual-spacing'
import { TextReveal } from '@/components/ui/text-reveal'
import type { ServiceStudy } from '@/services/servicesData'

export function ServiceProblem({ service }: { service: ServiceStudy }) {
  return (
    <section className="border-t border-line py-14 md:py-20">
      <div className="grid-shell">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl leading-[1.15] font-semibold tracking-tight md:text-4xl">
            <GradualSpacing as="span" text={service.problemHeadline} className="w-full justify-center" />
          </h2>
          <TextReveal
            as="p"
            per="line"
            preset="fade-in-blur"
            className="mt-4 text-base text-graphite md:text-lg"
          >
            {service.problemBody}
          </TextReveal>
        </div>
      </div>
    </section>
  )
}
