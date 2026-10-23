export default defineEventHandler((event) => {
  if (event.path.startsWith('/_')) return
  const start = Date.now()
  event.node.res.on('finish', () => {
    console.log(
      JSON.stringify({
        message: 'request',
        method: event.method,
        path: event.path,
        statusCode: getResponseStatus(event),
        durationMs: Date.now() - start,
      }),
    )
  })
})
