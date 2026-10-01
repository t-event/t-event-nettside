# preferences.md – hvordan Mathias vil at det jobbes

## Arbeidsform

- Faser med godkjenning mellom hver fase (0 oppsett → 1 innhold → 2 design →
  3 bygg → 4 revisjon → 5 lansering). Stopp ved faseslutt og vis status.
- Alle beslutninger logges umiddelbart i `memory/decisions.md`.
- Aldri finne på fakta; `TODO:` + spørsmål ved manglende informasjon.
- Avhengigheter/tjenester godkjennes som én samlet liste; ikke spør på nytt om
  uendrede, godkjente valg.
- Små commits, endringer til `main` via pull request.

## Språk og stil

- Norsk bokmål overalt: innhold, dokumentasjon, commits-beskrivelser kan være
  korte norske setninger.
- Knappetekster sier hva som skjer («Send forespørsel», aldri «Klikk her»).

## Teknikk

- Astro SSG + TypeScript, ikke SPA. All tekst i HTML ved bygging.
- Innhold i content collections/JSON slik at Mathias kan endre uten å røre
  komponenter.
- CSS-animasjon først; Motion (vanilla) kun ved tydelig merverdi. Ikke React
  bare for animasjon. Respekter `prefers-reduced-motion`.
- Fonter lokalt, ingen Google Fonts-CDN. Ingen Google Maps-embed.
- Navigasjon, innhold og galleri skal fungere uten JavaScript.
- Cookiefri statistikk; mål: ingen samtykkebanner.
- Mobil først (kunder kommer fra Instagram/Facebook på telefon).

## Rangering ved motstridende råd

1. Profilhåndboken → 2. WCAG → 3. oppdragsprompten → 4. skills.
Ved skill-uenighet: minst JavaScript og best tilgjengelighet; nevn konflikten.

## Profil (fra docs/profilhandbok/Designhandbok.pdf v1.0 2026, lest 2026-10-01)

Kort oppsummert (håndbokens egne ord): «Mørk flate, to farger, én skrift til
overskrift og én til tekst. Korall brukes til én ting av gangen.»

**Farger:**
- Midnatt `#2A1840` (bærer flaten) · Korall `#FE5757` (signalfarge, sparsomt –
  én ting av gangen)
- Nøytraler: Natt `#1A0F28` · Skifer `#6B6275` · Tåke `#EBE6ED` · Hvit `#FFFFFF`
- Fordeling: 60 % mørk flate · 30 % lys/nøytral · 10 % korall
- Kontrastregler i håndboken: korall på midnatt og hvit på midnatt er trygt.
  Korall på hvit kun til store tall og overskrifter – **aldri brødtekst**.

**Typografi:**
- Jost (geometrisk, som logoen): alt som skal legges merke til.
  Overskrift: Jost Light 300, 34–60 px, linjeavstand 1,1.
  Etikett: Jost Regular 400, 11–13 px, versaler, 0,22 em sperring.
- Karla: brødtekst Regular 400, 14–16 px, linjeavstand 1,7.
  Detalj: Karla 11–12 px i Skifer.
- Begge oppgitt som gratis via Google Fonts (vi selvhoster, jf. teknikkregel).
  Fallback uten Jost/Karla: Century Gothic og Arial. Aldri mer enn to skrifter
  på samme flate.

**Logo:**
- T-symbol av rette flater, diagonaler på 41° – skal aldri endres.
- Fire varianter: primær (lys bakgrunn: Tåke eller hvit – førstevalg),
  negativ (mørk bakgrunn – standard på sosialt/bilder), ensfarget midnatt,
  ensfarget hvit. Kun symbol der navnet allerede står eller flaten er liten
  (favicon, profilbilde).
- Frisone = høyden på symbolets tverrbjelke (x). Minstestørrelse: symbol
  24 px / 8 mm, full logo 38 px / 14 mm – under det brukes symbolet alene.
- Forbudt: strekke/klemme, rotere, bytte farger, lavkontrast-flater, skygge/
  glød/kontur, navnetrekk i annen skrift.
- Filer: SVG til web (`tevent-logo.svg`, `tevent-logo-negativ.svg`),
  PNG til sosiale medier. Aldri hente logoen fra et skjermbilde.

**Tone («Rolig, konkret, trygt»):**
- Konkret: si hva som leveres (antall høyttalere, riggetid, hva som inngår).
- Rolig: korte setninger, ingen utropstegn, ingen emoji, ingen store
  bokstaver for å rope.
- Lokal: nevn stedet; Helgeland/Nordland er del av tilbudet.
- Faste formuleringer: «Lyd, lys og DJ på Helgeland» · «Vi tar hele jobben –
  rigg, teknikk og nedrigg» · «DJ · lyd · lys» · «Nytt: showlaser klasse 4».
- Eksempler på forbudt stil: «TIDENES FEST!!! Book nå!!», «Vi er Norges
  beste…», «opplevelser utover det ordinære».

**Bildestil:** logo på rolig del av bildet eller på mørk flate lagt over;
aldri midt i ansiktet på folk. Mørk flate er standard på sosiale medier.
