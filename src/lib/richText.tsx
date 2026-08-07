// Minimal **bold** markdown parser for case-study body copy. Content is
// authored in casesData.ts with manually chosen "**phrase**" spans — an
// editorial decision about which words carry the case's story, not a
// generic keyword highlighter — so this only ever needs to handle bold.
const BOLD_PATTERN = /\*\*(.+?)\*\*/g

export function renderRichText(text: string) {
  const parts: (string | { bold: string })[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  BOLD_PATTERN.lastIndex = 0
  while ((match = BOLD_PATTERN.exec(text))) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    parts.push({ bold: match[1] })
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))

  return parts.map((part, i) =>
    typeof part === 'string' ? (
      part
    ) : (
      <strong key={i} className="font-semibold text-ink">
        {part.bold}
      </strong>
    ),
  )
}
