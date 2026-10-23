import type { H3Event } from 'h3'

// Einziger Weg zum Upstream. Leitet den Header x-club-id aus dem eingehenden Request weiter.
export async function upstreamFetch<T>(event: H3Event, path: string, query?: Record<string, string | undefined>) {
  const config = useRuntimeConfig(event)
  try {
    return await $fetch<T>(path, {
      baseURL: config.upstreamUrl,
      query,
      headers: { 'x-club-id': getHeader(event, 'x-club-id') ?? '' },
    })
  } catch (err: any) {
    throw createError({
      statusCode: err?.response?.status ?? 502,
      statusMessage: err?.data?.statusMessage ?? 'Upstream nicht erreichbar',
    })
  }
}
