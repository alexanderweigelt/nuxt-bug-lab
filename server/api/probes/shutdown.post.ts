// Nur zum Ueben: schaltet das Flag fuer 01.shutdown-guard um.
export default defineEventHandler(() => {
  const g = globalThis as { __isShuttingDown?: boolean }
  g.__isShuttingDown = !g.__isShuttingDown
  return { isShuttingDown: g.__isShuttingDown }
})
