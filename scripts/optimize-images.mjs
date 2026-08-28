// One-off-able image optimiser for public/. Converts oversized PNG/JPG
// screenshots to WebP next to the original and caps their width at what
// the layout actually renders, then rewrites source references.
//
// Originals are kept: a few are referenced from places this script does
// not rewrite (og/social, the manifest), and deleting source material is
// not something a build script should do on its own.
//
//   node scripts/optimize-images.mjs          # report only
//   node scripts/optimize-images.mjs --write  # actually convert

import { readdirSync, statSync, existsSync, writeFileSync } from 'node:fs'
import { extname, join, relative } from 'node:path'
import sharp from 'sharp'

const write = process.argv.includes('--write')
const ROOT = 'public'
// Screenshots never render wider than the page shell; 1600 is generous for
// a full-bleed case image on a 2x display.
const MAX_WIDTH = 1600
const MIN_BYTES = 120 * 1024
// Responsive variants for the case/portfolio screenshots. A phone renders
// these into a ~360px slot; without a srcset it downloads the 1600px file.
const WIDTHS = [640, 1024, 1600]

// Records which widths actually exist for each image. srcSetFor() reads
// this instead of assuming every variant was generated — an assumed
// variant that isn't on disk becomes a 404 inside a srcset, which is both
// a console error and a wasted request.
function writeManifest() {
  const map = {}
  ;(function collect(dir) {
    for (const e of readdirSync(dir)) {
      const p = join(dir, e)
      if (statSync(p).isDirectory()) {
        collect(p)
        continue
      }
      const m = p.match(/^(.*)-(\d+)w\.webp$/)
      if (!m) continue
      const key = '/' + relative(ROOT, `${m[1]}.webp`)
      ;(map[key] ||= []).push(Number(m[2]))
    }
  })(ROOT)
  for (const k of Object.keys(map)) map[k].sort((a, b) => a - b)
  writeFileSync(
    'src/lib/imageVariants.json',
    JSON.stringify(Object.fromEntries(Object.entries(map).sort()), null, 2) + '\n',
  )
  console.log(`manifest: ${Object.keys(map).length} images with variants`)
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry)
    const st = statSync(p)
    if (st.isDirectory()) walk(p, out)
    else if (['.png', '.jpg', '.jpeg'].includes(extname(p).toLowerCase()) && st.size >= MIN_BYTES)
      out.push({ path: p, size: st.size })
  }
  return out
}

// second pass: every already-converted .webp gets its narrow variants, so
// srcset works for images this run doesn't re-encode
async function makeVariants(file) {
  const meta = await sharp(file).metadata()
  for (const w of WIDTHS) {
    if (meta.width <= w) continue
    const out = file.replace(/\.webp$/, `-${w}w.webp`)
    if (existsSync(out)) continue
    await sharp(file).resize({ width: w }).webp({ quality: 82, effort: 5 }).toFile(out)
  }
}

if (process.argv.includes('--variants')) {
  const all = []
  ;(function collect(dir) {
    for (const e of readdirSync(dir)) {
      const p = join(dir, e)
      statSync(p).isDirectory() ? collect(p) : p.endsWith('.webp') && !/-\d+w\.webp$/.test(p) && all.push(p)
    }
  })(ROOT)
  let n = 0
  for (const f of all) {
    if (statSync(f).size < 40 * 1024) continue
    await makeVariants(f)
    n++
  }
  writeManifest()
  console.log(`variants generated for ${n} images`)
  process.exit(0)
}

const files = walk(ROOT).sort((a, b) => b.size - a.size)
let before = 0
let after = 0

for (const f of files) {
  // the social card and the favicon must stay in their original format —
  // several scrapers still don't take WebP for og:image
  if (f.path.includes('/og/') || f.path.includes('favicon')) continue

  const out = f.path.replace(/\.(png|jpe?g)$/i, '.webp')
  before += f.size

  if (!write) {
    after += f.size
    console.log(`${(f.size / 1024).toFixed(0).padStart(6)}KB  ${relative(ROOT, f.path)}`)
    continue
  }

  const img = sharp(f.path)
  const meta = await img.metadata()
  const pipeline = meta.width > MAX_WIDTH ? img.resize({ width: MAX_WIDTH }) : img
  await pipeline.webp({ quality: 82, effort: 5 }).toFile(out)
  const newSize = statSync(out).size
  after += newSize
  console.log(
    `${(f.size / 1024).toFixed(0).padStart(6)}KB -> ${(newSize / 1024).toFixed(0).padStart(5)}KB  ${relative(ROOT, out)}`,
  )
}

console.log(
  `\n${files.length} files · ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB`,
)
if (!write) console.log('(dry run — pass --write to convert)')
