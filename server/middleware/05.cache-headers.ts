export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  if (url.searchParams.get('preview') === 'true') {
    setResponseHeader(event, 'Cache-Control', 'no-store')
  }
})
