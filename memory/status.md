# status.md – hvor prosjektet står

Sist oppdatert: 2026-10-01

## Fase: 0 – Oppsett (pågår)

### Gjort
- Gammel side klonet til `../t-event-gammel` (kun innholdskilde, røres ikke).
- Nytt repo `t-event/t-event-nettside` opprettet som privat, med første
  commit (.gitignore, README.md, CLAUDE.md) og minnesystem.
- Plassholdere avklart med Mathias (repoer og e-postadresser), se decisions.md.

- Branch protection verifisert utilgjengelig: GitHub Free + privat repo gir
  403 på både branch protection og rulesets (testet 2026-10-01).
- Verktøy (0.5) verifisert: Playwright MCP v0.0.83 (Microsoft, Apache-2.0),
  Figma MCP (offisiell; skriveverktøy i beta, men gratisplan har svært lav
  kvote), og de fem skillsene (kilder/lisenser i godkjenningslisten).
- `RISIKOER.md` opprettet med 10 risikoer.
- Cloudflare-instruks skrevet: `docs/oppsett-cloudflare.md`.

### Fase 0 lukket 2026-10-01 (med ett unntak)
- Verktøyliste godkjent, repo gjort offentlig, ruleset «Beskytt main» aktiv.
- Fase 2-leveranse endret til HTML/CSS-designutkast (ingen Figma-plan).
- Profilhåndbok mottatt, committet og oppsummert i preferences.md.
- mathias@t-event.no bekreftet av Mathias.

### Eneste gjenstående fra fase 0
- **Cloudflare-oppsettet ser ikke ut til å være fullført:** ingen
  pages.dev-adresse svarer på DNS og ingen deploy-statuser på GitHub
  (sjekket 2026-10-01 etter PR #1). Mathias må fullføre
  `docs/oppsett-cloudflare.md` steg 1–2 og oppgi prosjektadressen.
  Blokkerer ikke fase 1–2, men må være klart før fase 3-skjemaet testes.

## Fase 1 – innhold fra gammel side: kartlegging ferdig, venter på godkjenning

- `INNHOLD-FRA-GAMMEL-SIDE.md`: alle tekster, 4 URL-er, bildeliste med
  vurderinger, video. Flagget: påstander («erfarne DJ-er», «vi har alt»),
  merkenavn på innleid utstyr, Park22/Eprod-navngiving, feil domene i
  canonical (t-events.no), TikTok-konto ikke i faste opplysninger.
- `RETTIGHETER.md`: ingen filer har dokumentert bruksrett ennå. Hovedfunn:
  skoleball-serien har mulige mindreårige (5 bilder), teambilde krever
  Marius' samtykke, 4 bilder mistenkt stock, «DANIEL I»-bilder viser trolig
  annen artist.
- Gammel side ligger trolig allerede på Cloudflare Pages-prosjektet
  `t-events` (OG-url t-events.pages.dev) – relevant for fase 5.
- Mathias svarte 2026-10-01: egne bilder bekreftet, skoleball-serien droppes
  (mulige mindreårige), teambildet er avisfoto (godkjent iflg. Mathias –
  skriftlig bekreftelse TODO), Daniel I har samtykket, PolarCode-bildene
  droppes, Eprod/Park22 kan omtales. Figma-plan kjøpes ikke.
- GJENSTÅR FØR/UNDER FASE 2: Cloudflare-oppsettet (gjennomgås med Mathias),
  original-SVG av logoen fra profilpakken, skriftlig dokumentasjon av
  avis-/Daniel I-samtykker, person-avklaring for 4 bilder i AVKLARING.
- Fase 2 (HTML/CSS-designutkast) kan starte.

## Neste fase
Fase 1 – innhold fra gammel side. Starter først etter Mathias' godkjenning
av fase 0-status og godkjenningslisten.
