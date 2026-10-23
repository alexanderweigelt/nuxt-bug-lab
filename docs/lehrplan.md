# Lehrplan – Maintenance mit Nuxt und Vue

15 Einheiten à ca. 20–30 Minuten, insgesamt 5–7,5 Stunden zuzüglich technischer Einrichtung und optionaler Vertiefung. Das sind Richtwerte, kein Leistungsziel. Eine Einheit verteilt sich auf mehrere Nachrichten. Eine Frage oder Aufgabe pro Nachricht.

| Einheit | Inhalt / Dateien | Aufgabe und beobachtbarer Nachweis |
|---|---|---|
| 1.1 | SSR, Hydration, Client-Navigation; NavMenu.vue | Ausführungsorte vorhersagen und anhand von Server-/Browser-Logs unterscheiden. |
| 1.2 | Erstes Render und onMounted; NavMenu.vue | Initialen Wert und spätere DOM-Änderung erklären. window-Fehler von Mismatch unterscheiden; Ticket 01. |
| 1.3 | Hydration-Warnung; StatsBlock.vue | Ticket 02 untersuchen, Component-Trace nennen, Ursache und Fix begründen. Reproduktion eventuell gezielt verlangsamen. |
| 2.1 | ref und computed; usePosts.ts | State, abgeleitete Werte und Template-Konsum kennzeichnen. Vorhersage bei geändertem Suchtext. |
| 2.2 | watch und Seiteneffekte; usePosts.ts / NavMenu.vue | Watch-Quelle, Callback und Auslöser erklären. Kategorieänderung gezielt über den zurückgegebenen Ref beobachten. |
| 2.3 | Composable-Datenfluss; TeaserListBlock.vue | Ticket 08: erste unterbrochene reaktive Verbindung lokalisieren. Danach ähnliche Stelle ohne Hilfe erklären. |
| 3.1 | useFetch / useAsyncData / $fetch; useSiteConfig.ts | Ticket 03: SSR-Payload und Request-Anzahl getrennt erklären. Baseline und Fehlerfall anhand von Logs vergleichen. |
| 3.2 | Schlüssel, geteilte Daten, Deduplizierung; usePosts.ts | Ticket 04: zwei Kategorien vergleichen. Tatsächliches Ergebnis beobachten, keine pauschale „erster gewinnt“-Regel. |
| 3.3 | Header über mehrere Übergänge; Page / server/utils/upstream.ts | Ticket 06 mit deaktivierter Injektion und bewusstem Header reproduzieren. Fehlenden Übergang belegen. |
| 4.1 | Catch-All, Segmente, Endpunkt, Query | `/`, `/touren`, `/touren/gipfelweg`, `/news/saisonstart` und unbekannten Pfad vorhersagen; Ticket 05. |
| 4.2 | Server-Middleware 00–05 | Pro Schritt Eingang, Veränderung, Abbruch erklären; Ticket 07. Reihenfolge mit temporären Logs belegen. |
| 4.3 | API → PageComponent → Block → componentMap | Ticket 09: Daten und Auswahl prüfen. Anforderungen klären, dann Bug, Datenproblem oder Feature einordnen; keinen Weather-Block bauen. |
| 5.1 | Reproduktion und Triage | Einen bisherigen Fall in URL, Ausgangszustand, Direktaufruf/Navigation und Soll/Ist beschreiben. |
| 5.2 | Hypothese und Gegenbeweis | Einen weiteren Fall mit einer Hypothese und einer passenden Beobachtung pro Schritt untersuchen. |
| 5.3 | Selbstständiger Abschluss | Drei kurze Transferfälle zu Hydration, Datenladen und Verarbeitungskette ohne Lösungsrezept bearbeiten. |

## Lernkontrolle
Bestanden heißt: Verhalten vorhersagen, tatsächliche Beobachtung erklären, Begründung auf ähnlichen Fall übertragen. Bei Lücken gezielt diese Verbindung üben. Die ersten acht Fehlerfälle sind begleitet; die Abschlussfälle müssen eine neue Aufgabenform oder andere Beispieldaten verwenden, statt nur eine Lösung abzufragen. Keine neuen Features implementieren.

## Abschlussfälle (Vorbereitung durch Lehrperson)
1. Ein kleiner bisher nicht gezeigter SSR-/Client-Codeausschnitt: Ausführung und mögliche erste Renderabweichung erklären.
2. Zwei Request-Konfigurationen mit anderer Query/Schlüsselwahl: Verhalten begründen und notwendige Beobachtung benennen.
3. Ein Symptom mit kurzen Logs entlang URL → Middleware → Server-Route → Upstream → Page → Block: erste Abweichung finden und kleinsten Fix vorschlagen.

## Optional nach Pflichtteil
reactive vs. ref, differenzierte Destructuring-Fälle, toRefs, watchEffect und Cleanup. Web-Component-Integration als konzeptioneller Transfer; für echten Codevergleich fehlt ein Beispiel im Upload.
