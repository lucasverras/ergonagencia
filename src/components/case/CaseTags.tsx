import type { CaseTagGroup } from '@/cases/casesData'

export function CaseTags({ groups, className }: { groups: CaseTagGroup[]; className?: string }) {
  if (groups.length === 0) return null
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2">
        {groups.flatMap((group) => group.tags).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-3 py-1 text-xs text-graphite-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-lime/50 hover:text-lime"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
