// API-Requests ohne x-club-id werden abgelehnt. Setzt voraus, dass 02 vorher gelaufen ist.
export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname
  if (!path.startsWith('/api/') || path.startsWith('/api/probes/')) return

  if (!getHeader(event, 'x-club-id')) {
    throw createError({ statusCode: 400, statusMessage: 'Header x-club-id fehlt' })
  }
})
