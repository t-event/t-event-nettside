# decisions.md – beslutningslogg

Format (nyeste øverst):

```
## ÅÅÅÅ-MM-DD – Kort tittel
- Beslutning: …
- Begrunnelse: …
- Forventet resultat: …
- Reviewdato: (beslutningsdato + 30 dager)
- Status: Aktiv / Revidert / Omgjort (med dato og hvorfor)
```

---

## 2026-10-01 – Cloudflare Pages-prosjektet er live
- Beslutning: Pages-prosjektet heter `t-event-nettside`, adresse
  **https://t-event-nettside.pages.dev**. Mathias slettet det feilopprettede
  Workers-prosjektet og satte build output directory til `public`.
  t-event.no er IKKE koblet (fase 5).
- Begrunnelse: Fase 0.6; Workers-sporet var feil for oppsettet vårt.
- Forventet resultat: Automatisk deploy fra main, forhåndsvisninger for
  PR-er, noindex på alt frem til fase 5.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Persongodkjenninger, Rana Blad og midlertidig skoleball-bruk
- Beslutning: (1) Teambildet er tatt av Rana Blad; bruk godkjent iflg.
  Mathias – skriftlig bekreftelse skal arkiveres. (2) De fire bildene som
  sto i AVKLARING (julebord, FOH, Halloween, MASKINERIET-DJ) er godkjent av
  de avbildede: Mathias, Marius og Daniel. (3) Skoleball-bildene brukes
  MIDLERTIDIG som plassholdere i utvikling/forhåndsvisning og byttes ut før
  lansering – lagt inn som sperre i fase 5-sjekklisten. Claude frarådet
  offentlig bruk; Mathias besluttet midlertidig bruk. (4) Logo-SVG-er og
  mediefiler mottatt i docs/logoer-og-media/.
- Begrunnelse: Mathias' svar 2026-10-01; behov for godt nok bildemateriale
  til å designe og bygge siden nå.
- Forventet resultat: Fase 2 kan bruke fullt bildesett; lanseringssjekk
  stopper skoleball-bildene fra produksjon.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Rettigheter og innhold fra gammel side (fase 1-svar)
- Beslutning: (1) Egne arrangementsbilder: opphavsrett bekreftet (tatt av
  T-Event selv). (2) Skoleball-bildene brukes IKKE – kan vise mindreårige og
  mangler dokumentert avklaring. (3) Teambildet: tatt av avis, bruk oppgitt
  godkjent – skriftlig dokumentasjon skal innhentes. (4) Daniel I har
  samtykket til bildebruk – dokumenteres skriftlig. (5) De fire PolarCode-
  innlagte kortbildene (lyd/lys/effekt/mikser): opphav ukjent → brukes ikke.
  (6) Lyd- og lysutstyret tilhører Eprod; T-Event samarbeider med Eprod og
  bruker deres utstyr – tekst skal beskrive dette ærlig, ikke som eget
  utstyr. Eprod kan omtales som samarbeidspartner. (7) Park22 var stedet for
  Halloween-arrangementet og kan nevnes som faktaopplysning.
- Begrunnelse: Mathias' svar 2026-10-01; policy om mindreårige og
  udokumentert opphav.
- Forventet resultat: Trygt bildegrunnlag: hero, «W»-projeksjon, makro,
  drinkglass, Daniel I, teambildet (m/TODO). Galleriet trenger påfyll.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Figma-plan kjøpes ikke
- Beslutning: Mathias tilbød å kjøpe Figma-plan «om det er verdt det».
  Claudes anbefaling: ikke verdt det – fase 2 leveres som HTML/CSS-utkast
  med design-tokens rett fra håndboken, vist som skjermbilder. Det gir
  samme godkjenningspunkt uten ekstra kostnad og uten konverteringssteg
  fra Figma til kode.
- Begrunnelse: Tokens og komponenter gjenbrukes direkte i fase 3; Figma-seat
  gir merverdi først hvis Mathias selv vil tegne/iterere i Figma.
- Forventet resultat: Fase 2 starter uten nye kostnader. Kan omgjøres hvis
  behovet endrer seg.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Fase 0-godkjenninger fra Mathias
- Beslutning: (1) Hele verktøy-/tjenestelisten godkjent: Playwright MCP,
  Figma MCP, skillsene emil-design-eng, impeccable, taste, UI UX Pro Max,
  Motion AI Kit (gratisdelen), samt Cloudflare Pages/Turnstile/Web Analytics
  på gratisnivå. (2) Repoet gjøres offentlig for å få branch protection
  gratis. (3) Mathias har ingen Figma-plan → fase 2-leveransen blir statiske
  HTML/CSS-designutkast med design-tokens, vist som skjermbilder.
  (4) mathias@t-event.no bekreftet fungerende av Mathias.
  (5) Mathias ga stående tillatelse til at Claude merger PR-er for ham.
- Begrunnelse: Svar på fase 0-godkjenningslisten. Offentlig repo gir ruleset
  på GitHub Free uten kostnad; Figma-kvoten på gratisplan (ca. 6 kall/mnd) er
  ubrukelig for reell design.
- Forventet resultat: Fase 1 kan starte; ruleset «Beskytt main» aktiv
  (deletion, non-fast-forward, PR-krav, 0 godkjenninger).
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Profilhåndbok mottatt og lagt i repoet
- Beslutning: Designhåndbok v1.0 (2026) ligger som
  `docs/profilhandbok/Designhandbok.pdf` og er designfasit. Oppsummert i
  `memory/preferences.md` under «Profil».
- Begrunnelse: Fase 0.4-krav.
- Forventet resultat: Design-tokens genereres direkte fra håndboken i fase 2.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Plassholdere i oppdraget fastsatt
- Beslutning: Gammelt repo = `t-event/website`. Nytt repo =
  `t-event/t-event-nettside` (privat). Bookingforespørsler sendes til
  mathias@t-event.no. Testinnsendinger fra forhåndsvisning går til samme
  adresse (ingen egen testadresse).
- Begrunnelse: `t-event/website` er bekreftet som den gamle siden; Mathias
  valgte repo-navn og adresser.
- Forventet resultat: Entydig kilde for fase 1, og skjemaet i fase 3 får
  riktige mottakere i preview- og produksjonsmiljø.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Hosting: Cloudflare Pages
- Beslutning: Cloudflare Pages koblet til privat GitHub-repo.
- Begrunnelse: GitHub-integrasjon, forhåndsvisninger per pull request, støtte
  for skjemafunksjon (Pages Functions) og kontroll over sikkerhetsheadere.
- Forventet resultat: Automatisk deploy fra `main`, preview-URL-er for PR-er,
  t-event.no kobles først i fase 5.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Statistikk: cookiefri
- Beslutning: Cookiefri statistikk. Mål: ingen samtykkebanner.
- Begrunnelse: Enklere personvern og bedre brukeropplevelse; faktisk oppsett
  (Cloudflare Web Analytics m.m.) skal verifiseres med Playwright-kartlegging
  før cookieerklæringen konkluderer.
- Forventet resultat: Ingen samtykkepliktig lagring/tilgang på brukerens enhet.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Design: profilhåndboken er fasit
- Beslutning: Profilhåndboken styrer farger, fonter, logo, tone og bildestil.
  Valg utenfor håndboken merkes «ikke fra håndboken» og godkjennes særskilt.
  Profilfargene endres aldri av Claude; kontrastproblemer flagges i stedet.
- Begrunnelse: Konsistent profil; håndboken er bestilt som designgrunnlag.
- Forventet resultat: Design-tokens (CSS-variabler) genereres direkte fra
  håndboken i fase 2.
- Reviewdato: 2026-10-31
- Status: Aktiv (håndboken er ennå ikke levert – må på plass før fase 2)

## 2026-10-01 – Skills: alle fem fra oppdraget, med rangering
- Beslutning: Ønsker skillsene Emil Kowalski design-skill, impeccable, taste,
  UI UX Pro Max og Framer Motion/Motion i `.claude/skills/`. Rangering ved
  motstridende råd: 1) profilhåndboken, 2) WCAG, 3) oppdragsprompten,
  4) skillsene. Ved skill-uenighet: minst JavaScript og best tilgjengelighet.
- Begrunnelse: Oppgitt av Mathias i oppdraget.
- Forventet resultat: Skillsene verifiseres (kilde, forfatter, lisens,
  kostnad) og inngår i den samlede godkjenningslisten før installasjon.
- Reviewdato: 2026-10-31
- Status: Aktiv
