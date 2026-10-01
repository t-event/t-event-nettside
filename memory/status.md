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

### Gjenstår i fase 0 (venter på Mathias)
- Godkjenning av den samlede verktøy-/tjenestelisten (presentert 2026-10-01).
- Valg: branch protection (GitHub Pro / offentlig / kun PR-rutine).
- Avklaring: hvilken Figma-plan har Mathias? Evt. godkjenne HTML-designutkast
  som alternativ leveranse i fase 2.
- Mathias må gjøre Cloudflare-oppsettet (docs/oppsett-cloudflare.md) og oppgi
  den faktiske `<PROSJEKT>.pages.dev`-adressen.
- Profilhåndboken (0.4): ikke mottatt – må leveres før fase 2.

## Åpne spørsmål til Mathias
- Se «Gjenstår i fase 0» over.
- Bekreft at mathias@t-event.no eksisterer og mottar e-post (risiko 10).

## Neste fase
Fase 1 – innhold fra gammel side. Starter først etter Mathias' godkjenning
av fase 0-status og godkjenningslisten.
