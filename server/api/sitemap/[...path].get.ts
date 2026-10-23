import type { PageDoc } from '../../../shared/types/content'

// Statische Seiten aus dem Sitemap-Baum: /api/sitemap/verein -> Upstream path=/verein
export default defineEventHandler((event) => {
  const path = getRouterParam(event, 'path') ?? ''
  return upstreamFetch<PageDoc>(event, '/sitemap', { path: `/${path}` })
})
