# Lösungen (Spoiler)

Erst eigene Analyse, dann hier vergleichen.

**01 window im Setup.** `NavMenu.vue` liest `window.location.pathname` im Setup. Das läuft auch beim SSR, dort gibt es kein `window`: `ReferenceError`, Nitro antwortet 500. Im Browser fällt es bei Client-Navigation nicht auf, weil dort nur der Client rendert. Beleg: Nitro-Log. Fix: Lesen in `onMounted` (Original).

**02 Date im Template.** `StatsBlock.vue` rendert `new Date().toLocaleTimeString()`. Server und Client rendern zu verschiedenen Zeitpunkten: `Hydration text content mismatch`, Komponentenstack nennt `StatsBlock`. Fix: statischen Wert aus den Daten nehmen, oder Zeit erst in `onMounted` setzen.

**03 `$fetch` statt `useFetch`.** `useSiteConfig` holt mit `$fetch` im Setup, und es wird in zwei Komponenten aufgerufen. Ergebnis: je Aufruf ein Request auf dem Server, plus Requests im Client beim Hydrieren, kein Payload-Transfer, kein Dedupe. Fix: `useFetch` mit festem `key`.

**04 Key-Kollision.** In `usePosts` steht `key: 'posts'`. Beide Teaser-Listen teilen sich damit denselben Cache-Eintrag, der erste Fetch gewinnt. Fix: Key weglassen (aus URL + `query` abgeleitet) oder die Kategorie in den Key aufnehmen.

**05 contentType falsch.** `segments.value.at(-1)` statt `at(-2)`: für `/touren/gipfelweg` ist der "Typ" dann `gipfelweg`, nicht in `CONTENT_TYPES`, also Sitemap-Call, dort 404. Beleg: Network-Tab zeigt `/api/sitemap/touren/gipfelweg` statt `/api/content?type=...`.

**06 Header nicht weitergeleitet.** Seite nutzt `useAsyncData` + nacktes `$fetch`. Das reicht die Request-Header auf dem Server nicht durch, `x-club-id` fehlt, Middleware 03 antwortet 400. Fix: `useFetch` oder `useRequestFetch()` statt `$fetch`. Nur reproduzierbar mit `NUXT_INJECT_CLUB_HEADER=false` und curl-Header, weil sonst Middleware 02 den Header in jedem Request setzt.

**07 Middleware-Reihenfolge.** `02.inject-…` wurde zu `03b.inject-…`. Reihenfolge ist alphabetisch: `03.require-…` läuft vor `03b.inject-…`, der Header fehlt noch, 400. Fix: Name zurück vor `03`.

**08 Reaktivität verloren.** In `usePosts` sind `posts` und `count` keine `computed` mehr, sondern einmalig berechnete Werte beim Setup-Lauf. Die Eingabe ändert `search`, aber nichts rechnet neu. Fix: `computed`.

**09 Wetter-Box fehlt.** Kein Code-Bug: Der Inhalt enthält einen Block `weather`, `componentMap` in `Block.vue` kennt ihn nicht. Unbekannter Typ rendert einen leeren Platzhalter mit `data-unknown-block="weather"`. Einordnung: Das ist Feature-Arbeit (neue Block-Komponente) oder ein Datenproblem, kein Bugfix. Ticket zurückgeben bzw. umklassifizieren.
