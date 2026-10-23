# nuxt-bug-lab

Übungsprojekt für Nuxt 4 / Vue 3: Rendering, Hydration, `useFetch`, Reactivity, Server-Middleware und methodisches Bug-Hunting.

Fachlich komplett erfunden: Frontend eines Wandervereins. Keine Bezüge zu echten Projekten, Systemen oder Daten.

## Start

```bash
npm install
npm run dev        # http://localhost:3000
```

Die "externe API" (Upstream) startet als Nitro-Plugin im selben Prozess auf Port 4010. Mehr braucht es nicht.

## Aufbau

```
app/pages/[...slug].vue      Catch-all: URL -> Typ erkennen -> API-Call -> Rendering
app/components/PageComponent.vue -> Block.vue -> blocks/*   Block-Pipeline (componentMap)
app/components/NavMenu.vue   Client-only-Logik (window in onMounted)
app/composables/             useSiteConfig, usePosts
server/middleware/00..05     Kette: Log, Shutdown-Guard, Header-Injektion, Header-Pflicht, Redirects, Cache
server/api/                  Eigene Server-Routes (BFF), sprechen mit dem Upstream
server/utils/upstream.ts     Einziger Weg zum Upstream
server/plugins/00.mock-upstream.ts + server/mock-upstream/data.ts   Die fake API
```

Der Upstream verlangt den Header `x-club-id`. Lokal setzt ihn Middleware 02. Zum Ausprobieren ohne Injektion:

```bash
NUXT_INJECT_CLUB_HEADER=false npm run dev
curl -H 'x-club-id: fernblick' localhost:3000/verein     # 200
curl localhost:3000/verein                                  # 400 (Browser kann den Header nicht setzen)
```

## Weiter

- `docs/lernpfad.md`: Module 1–5, jeweils Dateien, Fragen, Aufgaben
- `exercises/README.md`: Bug-Tickets (nur Symptome) und wie man sie einspielt
- `exercises/loesungen.md`: Spoiler. Erst nach dem eigenen Versuch.

## Regeln für sauberes Üben

Vor jedem Bug zurücksetzen: `git checkout -- . && git clean -fd app server`.
Die Baseline ist committet und sauber (keine Hydration-Warnungen, kein Fehler im Nitro-Log).
