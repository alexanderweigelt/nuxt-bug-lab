// Lokal/Dev: es gibt kein Gateway, das den Header setzt – also setzen wir ihn selbst.
export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  if (config.injectClubHeader === 'true') {
    event.node.req.headers['x-club-id'] = config.clubId
  }
})
