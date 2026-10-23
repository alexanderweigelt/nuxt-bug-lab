import type { PageDoc } from '../../shared/types/content'

// Einzelner Inhalt (Tour, News) ueber Typ + Slug.
export default defineEventHandler((event) => {
  const { type, slug } = getQuery<{ type?: string; slug?: string }>(event)
  if (!type || !slug) {
    throw createError({ statusCode: 400, statusMessage: 'type und slug sind Pflicht' })
  }
  return upstreamFetch<PageDoc>(event, `/content/${type}/${slug}`)
})
