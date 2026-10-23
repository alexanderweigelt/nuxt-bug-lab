import type { Post } from '../../shared/types/content'

export default defineEventHandler((event) => {
  const { category } = getQuery<{ category?: string }>(event)
  return upstreamFetch<Post[]>(event, '/posts', { category })
})
