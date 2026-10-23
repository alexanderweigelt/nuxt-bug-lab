// Fragt fuer jede Seitenanfrage den Upstream, ob es einen Redirect gibt.
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  if (config.redirectsEnabled !== 'true') return

  const pathname = getRequestURL(event).pathname
  if (pathname.startsWith('/_') || pathname.startsWith('/api/') || pathname.includes('.')) return

  try {
    const hit = await $fetch<{ to: string; status: number }>('/redirects', {
      baseURL: config.upstreamUrl,
      query: { from: pathname },
      headers: { 'x-club-id': getHeader(event, 'x-club-id') ?? '' },
    })
    return sendRedirect(event, hit.to, hit.status)
  } catch {
    // Kein Redirect (404) oder Upstream down: Request normal weiterlaufen lassen.
  }
})
