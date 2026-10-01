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
