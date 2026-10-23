export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  // Nur serverseitig sichtbar (nicht unter `public`).
  // Ueberschreibbar per Env: NUXT_UPSTREAM_URL, NUXT_INJECT_CLUB_HEADER, NUXT_CLUB_ID, NUXT_REDIRECTS_ENABLED
  runtimeConfig: {
    upstreamUrl: 'http://127.0.0.1:4010',
    injectClubHeader: 'true',
    clubId: 'fernblick',
    redirectsEnabled: 'true',
  },
})
