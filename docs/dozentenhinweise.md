# Dozentenhinweise – nicht als Aufgabenlösung ausgeben

## Vor dem Unterricht
- Gelieferte ZIP hat kein Git-Repository. Die ursprüngliche Behauptung einer committeten Baseline ist nicht belegt. Keine destruktiven Reset-Kommandos verwenden.
- Alle acht Patches lassen sich statisch anwenden. Das belegt keine Laufzeitwirkung. Laufzeit bei der jeweiligen Übung prüfen.
- Nicht alle Quellen breit lesen und dabei Lösungen zeigen. Unterricht zuerst an wenigen Zeilen ausrichten.

## Technische und didaktische Stolperstellen
1. `NavMenu` ist eine normale Vue-Komponente. Kein `app/web-components/`, keine `.ce.vue`, keine Custom-Element-Registrierung vorhanden. Diese Lücke offen benennen. Nicht behaupten, die Web-Component-Einbindung sei geprüft.
2. Kommentar „URL wissen wir nur im Client“ ist verkürzt: `useRoute().path` ist auch beim SSR verfügbar. Browserglobal `window` ist browsergebunden; URL-Information allgemein nicht. onMounted ist hier das Lehrbeispiel, nicht zwangsläufig die beste Lösung für SSR-Navigationsmarkierung.
3. `usePosts(initialCategory)` übernimmt `toValue(initialCategory)` einmalig in einen Ref. Eine spätere Änderung des Eingangs-Getters wird dadurch nicht automatisch synchronisiert. Nicht als durchgängig reaktive Prop-Anbindung unterrichten. Als offenen Baseline-Punkt führen; nicht unaufgefordert beheben.
4. `new Date().toLocaleTimeString()` garantiert keinen Mismatch: Ausgabe kann im selben Sekundenintervall identisch sein. Unterschiedliche Zeitzonen oder bewusst verzögerte Hydration können ihn sichtbar machen. Ausbleibende Warnung ist ein gültiges Ergebnis. Nur im isolierten Übungsstand eine reproduzierbare Variante vorbereiten und Abweichung dokumentieren.
5. Payload-Transfer, Request-Schlüssel/geteilter AsyncData-Zustand und Deduplizierung laufender Requests sind drei verschiedene Dinge. Ein fester Key in useSiteConfig ist nicht grundsätzlich notwendig, wenn generierter Key und Optionen bereits identisch sind. Nicht „genau ein Request unter allen Umständen“ versprechen.
6. Gleiche URL plus andere Query ist nicht pauschal eine Key-Kollision. Ticket 04 erzwingt einen gleichen Key. Ergebnis kann von Optionen, Timing und Framework-Version abhängen; „erster Fetch gewinnt“ ist keine allgemeine Garantie.
7. Relative interne useFetch-Aufrufe reichen beim SSR geeignete eingehende Header weiter; nacktes $fetch nicht automatisch. Der Übergang von Server-Route zu Upstream muss separat behandelt werden. Keine pauschale Weitergabe aller Header an externe Ziele empfehlen.
8. Für Ticket 06 die Injektion deaktivieren (`NUXT_INJECT_CLUB_HEADER=false`) und initialen Request mit `x-club-id: fernblick` senden. Client-Navigation ohne Gateway ist ein anderer Fall: curl zeigt keine Hydration. SiteConfig und Page-Datenpfad separat beobachten.
9. Browser-Network zeigt keinen eigenständigen serverseitigen Upstream-Request. Bei Direktaufruf SSR-Ausgabe und Server-Logs nutzen, bei Client-Navigation interne Browseranfragen. Middleware 00 protokolliert Abschluss, nicht jeden Middleware-Schritt. Für Reihenfolgenbeleg temporär einzelne Schrittausgaben ergänzen und danach gezielt entfernen.
10. Ticket 07 betrifft insbesondere API-Aufrufe; nicht ohne Beobachtung behaupten, jeder Dokumentrequest liefere direkt 400. Redirects, Header-Änderungen und frühe Rückgaben jeweils am tatsächlichen Request verfolgen.
11. Ticket 08 kann zusätzlich anfangs leere Liste zeigen, da data bei Setup noch Defaultdaten enthält. Nicht nur den Suchfilter betrachten.
12. Ticket 09: Unbekannter Block ist technisch belegt, aber die Einordnung als Feature oder Bug hängt von vereinbartem Verhalten und Datenvertrag ab. Nicht automatisch „kein Bug“ behaupten. Vorhandenen Scope einhalten.
13. Page prüft error.value einmal nach initialem await. Spätere Fehler bei Client-Navigation werden durch diesen Setup-Check nicht automatisch erneut geworfen. Separater offener Baseline-Punkt, keine vorschnelle Umbaumaßnahme.
14. Mock-API startet im Nitro-Prozess auf festem Port 4010. EADDRINUSE warnt lediglich; Antwort könnte von anderem Prozess stammen. Portbesitzer prüfen, niemals fremden Prozess blind stoppen.
15. Nuxt-/Vue-Laufzeitverhalten mit gelockten Versionen prüfen. Kein Upgrade auf Projektversionen aus früheren Gesprächen.

## Vorbereitung ohne Lernlösungen vorwegzunehmen
npm ci und optional npm run build, danach Baseline manuell prüfen: Startseite, /verein, /touren/gipfelweg, /news/saisonstart, unbekannter Pfad, /wandern-Redirect, preview=true Cache-Control. Server-/Browserfehler erfassen. Bei fehlendem Browser nicht „keine Hydration-Warnung“ behaupten. Keine Test-Suite hinzufügen.
