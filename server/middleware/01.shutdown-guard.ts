// Waehrend eines Shutdowns keine neuen Requests mehr annehmen.
// Ausprobieren: POST /api/probes/shutdown schaltet das Flag um.
export default defineEventHandler((event) => {
  if (event.path.startsWith('/api/probes/')) return
  if ((globalThis as { __isShuttingDown?: boolean }).__isShuttingDown) {
    setResponseStatus(event, 503)
    setResponseHeader(event, 'Connection', 'close')
    setResponseHeader(event, 'Retry-After', 30)
    return { error: 'Server faehrt herunter.' }
  }
})
