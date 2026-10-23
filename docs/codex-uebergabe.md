# Übergabe – Nuxt Bug Lab

## Auftrag und Ausgangslage
Der Lernende ist Webentwickler mit Erfahrung in Vue-Templates, Block-Komponenten, Server-Middleware, Web-Components und Test-Infrastruktur. Lücken: Rendering-Lifecycle, Hydration, Nuxt-Datenladen und systematische Fehlersuche. Kein vollständiges Onboarding. Unterricht an diesem erfundenen Wandervereinsportal; keine echten Produktionsdaten.

Das Projekt wurde am 23.10.2026 als ZIP bereitgestellt. Der Unterricht hat noch NICHT begonnen. Es gibt keine belegten bestandenen Einheiten.

## Einstieg
Technische Vorbereitung kurz erledigen: Instruktionen lesen, Verzeichnis/Repository-Grenze prüfen, Node-Version prüfen, mit Lockfile installieren und Baseline starten, soweit Umgebung das erlaubt. Ports 3000 (Nuxt), 4010 (Mock-API) berücksichtigen. Keine automatische Dependency-Aktualisierung. Vorhandene Prozesse nicht blind beenden.

Danach kurz den Prüfstatus berichten und mit 1.1 beginnen. Erste Lernfrage: „Wenn du `/verein` direkt im Browser öffnest: Wo erwartest du die Ausführung des Codes oben in `NavMenu.vue` – auf dem Server, im Browser oder an beiden Orten?“ Noch keine Lösung zeigen.

## Akzeptanzkriterien
- Setup-Ausführung bei SSR, Hydration und Client-Navigation erklären; `onMounted` einordnen.
- Hydration-Warnung erkennen, Komponente bestimmen, erste abweichende Ausgabe lokalisieren.
- `$fetch`, `useAsyncData`, `useFetch`, Payload-Transfer, parallele Deduplizierung und Header-Forwarding unterscheiden.
- Catch-All: URL-Parsing → Typ-Erkennung → API-Auswahl → Block-Rendering verfolgen.
- Sechs Server-Middlewares und ihre Abhängigkeiten erklären.
- `ref`, `computed`, `watch` in einem vorhandenen Composable verfolgen.
- Einen gemeldeten Bug anhand des Datenpfads eingrenzen und einen gezielten Fix begründen.

## Nicht beauftragt
Feature-Entwicklung, Lexical/RichText, CI/CD/Helm, State-Management-Frameworks, neue Test-Suites, Veröffentlichung oder Repository-Upload.

## Vorrang der Unterlagen
`AGENTS.md` regelt das Verhalten. `docs/lehrplan.md` ersetzt den alten Lernpfad für den Unterricht. Ursprüngliche Unterlagen bleiben unter `docs/original/` erhalten. Dozentenhinweise korrigieren Verkürzungen in alten Kommentaren und Lösungen; tatsächliches Laufzeitverhalten geht Behauptungen der Dokumentation vor.

## Geprüft bei der Übergabe
- Quellcode, Konfiguration, Übungsbeschreibungen und Lösungshinweise statisch gelesen.
- Alle acht Patches separat mit `git apply --check` gegen die gelieferte Baseline geprüft: erfolgreich.
- Lockfile-Versionen: Nuxt 4.6.2, Vue 3.5.44, Vue Router 5.4.0. package.json enthält teils flexible Versionsangaben; deshalb `npm ci` verwenden.
- Keine Installation, kein Build, keine Server-/Browser-Laufzeitprüfung durchgeführt. Nicht als laufzeitgeprüft darstellen.
- Anwendungscode, Konfiguration, Abhängigkeiten und Fehlerpatches gegenüber dem Upload unverändert.

## Referenzen
Versionen im installierten Projekt berücksichtigen; bei Unklarheit offizielle Dokumentation und passenden Quellcode nutzen.
- https://nuxt.com/docs/4.x/guide/concepts/rendering
- https://nuxt.com/docs/4.x/getting-started/data-fetching
- https://nuxt.com/docs/4.x/api/composables/use-fetch
- https://nuxt.com/docs/4.x/directory-structure/server
- https://vuejs.org/guide/scaling-up/ssr.html
- https://vuejs.org/guide/extras/reactivity-in-depth.html
- https://learn.chatgpt.com/docs/agent-configuration/agents-md
