# IØ — Forstå. Husk. Bestå.

Byggefrit dansk øvelokale til International økonomi B. Åbn `index.html` lokalt eller udgiv filerne på GitHub Pages.

Indhold: 124 begreber med forklaringer og eksempler, 124 flashcards, skriv-selv-øvelser og 161 mulige spørgsmål (124 begrebsspørgsmål og 37 anvendelses-/regnespørgsmål).

En prøvetest udvælger 50 unikke spørgsmål fordelt over alle syv kapitler (7, 6, 8, 9, 6, 7, 7). Svar låses straks ved valg, og der vises feedback efter hvert svar. Træning giver feedback undervejs. Forkerte svar kan gentages. Lokal fremgang gemmes i browseren. Ingen backend, persondataindsamling eller eksterne biblioteker.

## GitHub Pages

1. Opret et repository og upload hjemmesidens filer til roden, inklusive `.nojekyll`.
2. Vælg Settings → Pages → Deploy from a branch → main → / (root).
3. Gem. GitHub viser adressen, når udgivelsen er færdig.

## Fagligt grundlag

Brugerens vedlagte “Kapitel 1 - 8.docx” indeholder kapitel 1–7 og appendikset om BNI. Kapitel 8 mangler og er ikke opdigtet. Forklaringer og spørgsmål er nyformulerede øvelser, ikke lærerens test. Samfundsøkonomiske modeller anvendes alt andet lige. Historiske kriser forklares som historie. Eventuelle regelhenvisninger mærkes som materialets indhold, ikke som en opdateret juridisk vejledning.

## Kontrol

`node --check data.js` og `node --check script.js`. Kontroller desuden søgning, flashcard-vending, prøvens 50 spørgsmål, aflevering, fejltræning og lokal lagring i browseren.



## Design og brugervenlighed (v2)

- Minimalistisk systemtypografi, blå accent, afrundede kort, glasnavigation og systemstyret lys/mørk tilstand med manuelt valg.
- Tre hovedvisninger: Test, Flashcards og Begreber. Overblik, kapitler og historik findes via logoet.
- 3D-flashcards, korte overgange, animeret fremdrift og optælling af score. Alle bevægelser respekterer prefers-reduced-motion.
- Prøvetesten har 50 spørgsmål med direkte feedback. Det gælder også træning og fejltræning. Valg af svar låser spørgsmålet; Næste spørgsmål vises derefter.
- Igangværende test, kortplacering og begrebskladde gemmes i samme lokale datastruktur som tidligere resultater. Tid i en gemt pause tæller ikke med.
- Fortryd ved ændring af lærte begreber og nulstilling; tilgængelige dialoger, synligt fokus, store knapper og tastaturnavigation.
- De 124 begreber og 37 anvendelses-/regnespørgsmål er bevaret. Ingen frameworks, netværkskald eller eksterne fonts.

## Verifikation

JavaScript-syntaks kontrolleret med Node. Testet i browser: start med 50 spørgsmål, øjeblikkelig låsning og feedback, pause/genindlæsning/genoptagelse, aflevering af delvist besvaret prøve, resultat pr. kapitel, optælling af score, 3D-flip, begrebssøgning og gendannelse af kladde. Mobil-layout og reduceret bevægelse er implementeret med CSS-medieforespørgsler.


### Forklaringer i datasættet
`data.js` indeholder 124 faste begrebsforklaringer i `conceptExplanations`, forklaringer til alle 37 cases i `scenarioRaw`, samt ekstra fejlbegrundelser og relevante begreber i `scenarioWrongReasons` og `scenarioConcepts`. Hvert af de 50 udvalgte spørgsmål har derfor en forklaring. Begrebsspørgsmål forklarer også, hvilket andet begreb et forkert svar beskriver. Svaret markeres med tekst, ✓/✕ og farve. Tidligere svar kan genbesøges, men ikke ændres.

## Samlet øveforløb (v3)

- Navigation: Hjem, Øv begreber, Flashcards, Test.
- Øv begreber viser ét begreb ad gangen med søgning, kapitelfilter, filter for ikke-lærte, forrige/næste, blanding, egen forklaring, Vis facit og markeringerne Kan det / Skal øves mere. Kladder gemmes pr. begreb.
- Forsidens klar-bar beregnes som 30 % testmål + 30 % begrebsmål + 40 % scoremål. Hver del er begrænset til sit maksimum. Målene er fem 50-spørgsmålsprøver, 80 % lærte begreber og 80 % gennemsnit på de seneste fem prøver. Træning og fejltræning påvirker ikke prøvetælleren eller prøvegennemsnittet.
- Scoreudvikling vises i en tilgængelig SVG-graf med en tabel over alle prøver. Grafen viser de seneste 20; den fulde historik bevares.
- A, B, C og D besvarer aktive spørgsmål. Enter eller højrepil går videre efter et svar; venstrepil går tilbage. Genvejene er slået fra ved tekstindtastning og åbne dialoger.
- Afslut test følger med under scroll og beder om bekræftelse. Ubesvarede tæller som forkerte. Den oprindelige mulighed for at kassere et forsøg uden resultat er stadig tilgængelig som en separat handling.
- Resultatet viser procentbar, alle svar, det rigtige svar og forklaringer. Tag testen igen blander de samme spørgsmål og deres svarmuligheder. Nye prøver udvælges fortsat fra hele banken.
- Nye afsluttede forsøg gemmes med spørgsmål, egne svar og forklaringer. De kan genåbnes fra historikken. Tidligere resultatposter uden svararkiv bevares som scoreoversigter.
- Alt gemmes under den eksisterende localStorage-nøgle, så tidligere lærte begreber og scorer bevares. Ingen data sendes fra appen.

Valideret: JavaScript-syntaks; klar-barens grænser, træningsafgrænsning og tre delmål; tastatursvar, næste/forrige, tidlig aflevering med ubesvarede, 50 resultatrækker, genåbning af gemt resultat samt kladder ved skift frem og tilbage mellem begreber.
