# Nuxt Bug Lab – Unterricht mit Codex

Fertige Projektvorlage eines erfundenen Wandervereinsportals mit acht einspielbaren Fehlerfällen. Ziel: Nuxt-/Vue-Maintenance verstehen und Bugs eigenständig eingrenzen.

## Übergabe starten
1. Diesen Ordner entpacken und als Projektordner in deiner Codex-Arbeitsumgebung öffnen. Codex benötigt tatsächlichen Zugriff auf die Dateien; derselbe Account überträgt den Ordner oder diesen Chat nicht automatisch.
2. Eine neue Sitzung im Projektordner starten.
3. Den Auftrag aus `CODEX-START.md` kopieren und absenden.

`AGENTS.md` enthält die Unterrichtsregeln. `docs/lehrplan.md` enthält 15 kurze Einheiten. `docs/lernfortschritt.md` hält den Wiedereinstieg fest. Technische Hinweise für Codex stehen in `docs/dozentenhinweise.md`.

## Technischer Start
`npm ci`, danach `npm run dev`. Nuxt nutzt üblicherweise Port 3000; die lokale Mock-API startet im selben Prozess auf 4010. Node-Kompatibilität vorher aus den gelockten Paketanforderungen prüfen. Die Datei package-lock.json unverändert verwenden.

Die Baseline wurde hier statisch geprüft, nicht installiert oder im Browser ausgeführt. Codex soll den Laufzeitcheck vor dem ersten Unterrichtsschritt vornehmen. Die ZIP enthält kein `.git`; keinen Git-Ausgangsstand voraussetzen.

## Übungen
Jeweils genau einen Patch aktivieren; vorab `git apply --check exercises/patches/<datei>.patch`. Erst Arbeitsstand prüfen und sichern. Keine pauschalen Reset-/Clean-Befehle. Lösungen nicht vor dem eigenen Versuch lesen.

Anwendungscode, Lockfile und acht Patches sind unverändert übernommen. Ursprüngliche Anleitungen liegen als Referenz unter `docs/original/`; deren Reset-Befehle nicht verwenden. Diese Ergänzungen sind kein Deployment und keine Übertragung in eine bereits laufende Codex-Sitzung.
