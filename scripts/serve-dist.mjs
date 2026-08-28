// Static server that mirrors the production routing rules in vercel.json —
// directory-index resolution, one trailing-slash policy, and a real 404 for
// anything unmatched. Used so `npm run audit:seo` tests the same behaviour
// locally that the deployment will have, instead of a SPA fallback that
// answers 200 for every URL.

import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { createBrotliCompress, createGzip } from 'node:zlib'
import { extname, join, normalize, resolve } from 'node:path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const port = Number(process.argv[2] || 4179)

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.webmanifest': 'application/manifest+json',
}

// Vercel compresses text responses; measuring locally without it makes
// every JS/CSS/HTML byte count against LCP in a way production never does.
const COMPRESSIBLE = new Set(['.html', '.js', '.css', '.json', '.xml', '.txt', '.svg', '.webmanifest'])

const send = (res, status, file, accept = '') => {
  const type = TYPES[extname(file)] || 'application/octet-stream'
  const stream = createReadStream(file)
  if (!COMPRESSIBLE.has(extname(file))) {
    res.writeHead(status, { 'Content-Type': type })
    return stream.pipe(res)
  }
  const br = accept.includes('br')
  res.writeHead(status, {
    'Content-Type': type,
    'Content-Encoding': br ? 'br' : 'gzip',
    Vary: 'Accept-Encoding',
  })
  stream.pipe(br ? createBrotliCompress() : createGzip()).pipe(res)
}

createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`)
  let path = decodeURIComponent(url.pathname)

  if (path.length > 1 && path.endsWith('/')) {
    res.writeHead(308, { Location: path.slice(0, -1) + url.search })
    return res.end()
  }

  const target = join(dist, normalize(path))
  if (!target.startsWith(dist)) {
    res.writeHead(403)
    return res.end()
  }

  const accept = req.headers['accept-encoding'] || ''
  if (existsSync(target) && statSync(target).isFile()) return send(res, 200, target, accept)
  const index = join(target, 'index.html')
  if (existsSync(index)) return send(res, 200, index, accept)

  return send(res, 404, join(dist, '404.html'), accept)
}).listen(port, () => console.log(`serving dist on http://localhost:${port}`))
