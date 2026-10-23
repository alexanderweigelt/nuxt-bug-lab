# Bug-Tickets

Einspielen: `git apply exercises/patches/<datei>.patch`. Danach `npm run dev` (Nitro-Änderungen brauchen ein paar Sekunden).
Zurücksetzen nur gezielt nach Diff-Prüfung und Sicherung eigener Arbeit; siehe `AGENTS.md`. Die ZIP enthält kein committetes Git-Repository.

Nicht in die Patches schauen. Die Tickets beschreiben nur Symptome. Lösungen: `loesungen.md`.

| Nr | Patch | Ticket |
|---|---|---|
| 01 | `01-window-im-setup` | "Nach dem Deploy liefert jede Seite 500. Lokal im Browser nach Hot-Reload alles gut." |
| 02 | `02-date-im-template` | "Auf der Startseite steht in der Konsole eine rote Meldung. Optisch ist nichts kaputt." |
| 03 | `03-fetch-statt-usefetch` | "Im Nitro-Log taucht pro Seitenaufruf mehr als ein Aufruf derselben Route auf." |
| 04 | `04-key-kollision` | "Auf der Startseite zeigen 'Neue Touren' und 'Aktuelles' dieselben Einträge." |
| 05 | `05-content-type-falsch` | "Alle Tour- und News-Detailseiten liefern 404, obwohl der Inhalt existiert." |
| 06 | `06-header-nicht-weitergeleitet` | "Hinter dem Gateway (Header kommt von außen, `NUXT_INJECT_CLUB_HEADER=false`) liefern Seiten 400. Testen mit curl und Header." |
| 07 | `07-middleware-reihenfolge` | "Nach einer Umbenennung liefert jede API-Route 400, obwohl der Header-Mechanismus unverändert ist." |
| 08 | `08-reaktivitaet-verloren` | "Das Filterfeld in der Teaser-Liste tut nichts." |

Ohne Patch (Baseline-Eigenheit):

| Nr | Ticket |
|---|---|
| 09 | "Auf der Tour 'Gipfelweg' fehlt die Wetter-Box." |

Pro Ticket aufschreiben: reproduziert wie, welche Schicht, Beleg (Log/Konsole/Network), Ursache, Fix, Prüfung.
