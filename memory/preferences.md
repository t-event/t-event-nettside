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

## Profil

TODO: Profilhåndboken er ikke mottatt ennå. Når den legges i
`docs/profilhandbok/`: les den i sin helhet og oppsummer her
(farger, fonter, logoregler, tone, bildestil) før fase 2.
