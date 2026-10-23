# Lernpfad

Ziel: Bugs in einer Nuxt-Codebase selbst triagieren, debuggen und fixen. Kein Feature-Bau. Keine Tests nötig.
Pro Modul: erst Dateien lesen, dann die Fragen schriftlich beantworten, dann die Aufgabe.

## Modul 1: Rendering & Hydration

Dateien: `app/components/NavMenu.vue`, `app/components/blocks/StatsBlock.vue`

Theorie in Kürze:
- `<script setup>` läuft auf dem Server **und** im Client. `onMounted` nur im Client.
- Der Server rendert HTML, der Client "übernimmt" den DOM (Hydration). Weicht das erste Client-Render vom Server-HTML ab: Mismatch.
- Typische Ursachen: `window`/`document` im Setup, `new Date()`/`Math.random()` im Template, invalides HTML-Nesting.

Fragen:
1. Warum liest `NavMenu` `window.location.pathname` in `onMounted` und nicht im Setup?
2. Was ist beim ersten Render von `NavMenu` im Server-HTML und im Client identisch, und was ändert sich erst danach?
3. Warum braucht `NavMenu` zusätzlich einen `watch` auf `route.path`?

Aufgabe: Bugs 01 und 02 (siehe `exercises/`). Mismatch in der Konsole finden, Komponente benennen, Ursache eingrenzen.

## Modul 2: useFetch / useAsyncData

Dateien: `app/pages/[...slug].vue`, `app/composables/useSiteConfig.ts`

Theorie in Kürze:
- `useFetch` läuft auf dem Server, legt das Ergebnis in den Payload, der Client nutzt es ohne neuen Request.
- Nacktes `$fetch` im Setup läuft auf beiden Seiten: zwei Requests.
- Der Key entscheidet über Deduplizierung. Gleicher Key = gleicher Request. Standardmäßig aus URL + Optionen gebildet.
- Header: `useFetch` reicht auf dem Server die Header des eingehenden Requests an interne Routes durch. `$fetch` und `useAsyncData(..., () => $fetch(...))` tun das **nicht**. Dort `useRequestFetch()` oder `useRequestHeaders()` nehmen.

Fragen:
1. Wie entscheidet die Catch-all-Route zwischen `/api/content` und `/api/sitemap/...`?
2. Was passiert bei `/touren` (nur ein Segment)? Bei `/touren/gibtsnicht`? Bei `/`?
3. Warum braucht `useSiteConfig` einen festen `key`, und warum ist der Aufruf in zwei Komponenten kein Problem?

Aufgabe: Bugs 03 und 06.

## Modul 3: Reactivity

Dateien: `app/composables/usePosts.ts`, `app/components/blocks/TeaserListBlock.vue`

- `ref` für Werte, `computed` ist lazy und gecacht, `watch` für Seiteneffekte.
- Zeichne den Datenfluss: Wo entsteht `search`? Wo wird es gelesen? Was triggert den Re-Render der Liste?

Fragen:
1. Welche Werte sind State, welche abgeleitet?
2. Was passiert, wenn man `usePosts` zweimal mit verschiedenen Kategorien aufruft? Warum bleiben die Daten getrennt?
3. Warum steht der Reset von `search` in einem `watch` und nicht in einem `computed`?

Optional: `reactive` destrukturieren verliert Reaktivität (`toRefs`), `watchEffect` mit Cleanup.
Aufgabe: Bugs 04 und 08.

## Modul 4: Architektur lesen

Dateien: `[...slug].vue` → `PageComponent.vue` → `Block.vue` → `blocks/*`, `server/middleware/*`, `server/api/*`

- Catch-all: Segmente → `contentType` (vorletztes Segment) → bedingter Call.
- Block-Pipeline: `componentMap[blockType]`. Unbekannter Typ = leerer Platzhalter, kein Fehler.
- Middleware läuft alphabetisch nach Dateiname. Reihenfolge ist Teil der Logik.

Fragen:
1. Zeichne die Middleware-Kette für `GET /touren/gipfelweg`. Wo wird der Header gesetzt, wo geprüft, wo wird er verbraucht?
2. Läuft die Kette auch für den internen SSR-Call auf `/api/content`? Beleg: Nitro-Log.
3. Warum braucht `/` eine eigene Datei `server/api/sitemap/index.get.ts`?

Aufgabe: Fiktiver Bug "Seite zeigt falschen Inhalt": Datenpfad URL → Middleware → Server-Route → Upstream → Page → Block aufschreiben. Bugs 05 und 07.

## Modul 5: Bug-Hunting

| Symptom | Zuerst schauen |
|---|---|
| `[Vue warn]` Hydration | Browser-Konsole, Komponentenstack in der Warnung |
| 500 beim Seitenaufruf | Nitro-Log im Terminal, nicht nur Browser |
| UI reagiert nicht | Vue DevTools: Component Inspector, State |
| Falsche/fehlende Daten | Network-Tab: `/api/*`, dann Upstream-Antwort. Zwei Stellen, wo es brechen kann |
| Leerer Bereich | DOM prüfen: `data-unknown-block` |

Methode: reproduzieren → Schicht eingrenzen (Client, SSR, Server-Route, Upstream) → Beleg sichern → kleinsten Fix → Baseline-Check (keine Warnung, 200).
