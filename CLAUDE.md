# CLAUDE.md – arbeidsinstruks for T-Event-nettsiden

Alt innhold og all kommunikasjon er på norsk (bokmål).

## Ved start av hver økt

1. Les **alle** filer i `memory/` før noe annet.
2. Sjekk `memory/decisions.md`: minn Mathias på beslutninger med reviewdato
   i dag eller tidligere.

## Underveis

- Logg hver beslutning Mathias tar **umiddelbart** i `memory/decisions.md`
  (format står øverst i filen; nyeste øverst, reviewdato = beslutningsdato + 30 dager).

## Ved slutt av økt (eller når Mathias sier «avslutt» / «ferdig for i dag»)

1. Oppdater `memory/status.md` (hvor vi er, hva som gjenstår, åpne spørsmål).
2. Oppdater `memory/user.md`, `memory/preferences.md`, `memory/people.md`
   hvis noe nytt er lært.
3. Vis en kort oppsummering av hva som ble endret.

## Harde regler (sammendrag – full versjon i oppdragsprompten)

1. **Ikke finn på noe**: ingen oppdiktede priser, anmeldelser, tall,
   sertifiseringer eller superlativer. Mangler fakta → `TODO:` og spør.
2. Skill mellom: fakta fra Mathias / kontrollert mot dokumentasjon (med kilde) /
   forslag som trenger godkjenning. Merk forslag tydelig.
3. Avhengigheter, verktøy, tjenester og kostnader godkjennes som én samlet
   liste. Nye tjenester eller vesentlige endringer krever ny godkjenning.
4. Juridiske tekster er **utkast** til Mathias har godkjent dem. Skill lovkrav
   fra prosjektpolicy; anbefal fagperson der det trengs.
5. Påstå aldri at noe er ferdig/riktig uten verifisering. Si eksplisitt hva som
   ikke er verifisert.
6. Ingen hemmeligheter i repoet – API-nøkler kun som miljøvariabler i Cloudflare.
7. `TODO`/`UTKAST` kan finnes i repo og forhåndsvisning, men **aldri synlig i
   produksjon**.
8. Små commits med beskrivende meldinger. Endringer til `main` via pull request.
9. **Ingen endringer som påvirker eksisterende t-event.no før fase 5 og
   uttrykkelig godkjenning.**

## Rangering ved motstridende råd

1. Profilhåndboken (`docs/profilhandbok/`)
2. Tilgjengelighetskrav (WCAG 2.1 AA)
3. Oppdragsprompten
4. Skills. Ved uenighet mellom skills: velg minst JavaScript og best
   tilgjengelighet, og nevn konflikten for Mathias.

## Hvor ting ligger

- `memory/` – user.md, preferences.md, people.md, decisions.md, status.md
- `docs/profilhandbok/` – profilhåndboken (designfasit)
- `RISIKOER.md` – risikorapport (holdes løpende oppdatert)
- `RETTIGHETER.md` – rettighetsstatus for bilder/video (lages i fase 1)
- `../t-event-gammel/` – klon av gammel side (t-event/website).
  **Kun innholdskilde: skal aldri endres, koden gjenbrukes ikke.**
- Innholdsfiler (fra fase 3): `src/content/` og `src/data/`
- Juridiske sider (fra fase 3): personvern, cookies, vilkår, avbestilling

## Minnefilene

Skal aldri inneholde passord, API-nøkler, personnummer, kontonummer eller
private opplysninger om andre enn det prosjektet trenger.
