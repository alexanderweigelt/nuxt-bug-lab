// Startet die "externe API" (Upstream) im selben Prozess, damit `npm run dev` reicht.
// Sie verlangt den Header `x-club-id` – genau wie ein echtes Backend hinter einem Gateway.
import { createServer } from 'node:http'
import { content, pages, posts, redirects, site } from '../mock-upstream/data'

const PORT = 4010
const DELAY_MS = 150

export default defineNitroPlugin((nitroApp) => {
  const server = createServer((req, res) => {
    const url = new URL(req.url ?? '/', `http://${req.headers.host}`)
    const send = (status: number, body: unknown) => {
      res.writeHead(status, { 'content-type': 'application/json' })
      res.end(JSON.stringify(body))
    }

    setTimeout(() => {
      if (req.headers['x-club-id'] !== 'fernblick') {
        return send(400, { statusMessage: 'Header x-club-id fehlt oder ist unbekannt' })
      }
      const path = url.pathname

      if (path === '/site') return send(200, site)

      if (path === '/posts') {
        const category = url.searchParams.get('category')
        return send(200, category ? posts.filter((p) => p.category === category) : posts)
      }

      if (path === '/sitemap') {
        const page = pages[url.searchParams.get('path') ?? '/']
        return page ? send(200, page) : send(404, { statusMessage: 'Seite nicht im Sitemap-Baum' })
      }

      if (path.startsWith('/content/')) {
        const doc = content[path.replace('/content/', '')]
        return doc ? send(200, doc) : send(404, { statusMessage: 'Inhalt nicht gefunden' })
      }

      if (path === '/redirects') {
        const hit = redirects[url.searchParams.get('from') ?? '']
        return hit ? send(200, hit) : send(404, { statusMessage: 'Kein Redirect' })
      }

      send(404, { statusMessage: 'Unbekannte Upstream-Route' })
    }, DELAY_MS)
  })

  server.on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EADDRINUSE') console.warn(`[mock-upstream] Port ${PORT} belegt – laeuft evtl. schon.`)
    else console.error('[mock-upstream]', err)
  })
  server.listen(PORT, '127.0.0.1', () => console.log(`[mock-upstream] http://127.0.0.1:${PORT}`))
  nitroApp.hooks.hook('close', () => server.close())
})
