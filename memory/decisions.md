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

## 2026-10-01 – Design v4 «Lysriggen» – 1-av-1-konsept
- Beslutning: Mathias underkjente v3 («effektene føles billig… vil at siden
  skal føles som 1 av 1»). v4 bygget rundt ett eget konsept: siden ER
  T-Events lysrigg. Besøkeren styrer en lyskjegle som avslører scenen i
  heroen (eneste skript på siden, ~15 linjer vanilje-JS, dekorativt, med
  automatisk lyssveip som CSS-fallback uten JS/på mobil – TIL GODKJENNING
  som unntak fra «CSS først»), overskriften lyssettes som en projeksjon
  (background-clip), T-merket står som svak scenografi-kontur, strålene er
  låst til logoens 41°, galleriet «skrur på lyset» ved scrolling, og
  filmkorn ligger over hele flaten.
- Begrunnelse: «1 av 1» krever et konsept konkurrentene ikke kan kopiere
  uten å kopiere T-Events identitet; lysstyring er bokstavelig talt
  produktet deres.
- Forventet resultat: v4 til vurdering; hvis godkjent overføres konseptet
  til Astro-komponentene i fase 3.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Design v3 «scenen», priser lages sammen, bygging starter
- Beslutning: (1) Mathias: v2 fortsatt for lik gammel side; ønsker «mer
  proff, med effekter» → v3 bygget som scene: animerte CSS-laserstråler,
  scenerøyk-glød, sticky glassmeny, duotone-bildebehandling, scroll-
  avsløringer med CSS scroll-driven animations (uten JavaScript; statisk i
  nettlesere uten støtte), CTA med scenelys-glød. Alt slås av ved
  prefers-reduced-motion. (2) Tripletex-prisene hentes ikke inn – pakker og
  priser settes sammen av Mathias og Claude i en egen økt senere;
  prissiden bygges med TODO-plassholdere. (3) Fase 3-byggingen starter nå,
  uten å vente på skriftlige bildesamtykker – de SKAL foreligge før
  publisering (føyd til fase 5-sperren sammen med skoleball-byttet).
- Begrunnelse: Mathias' beskjed 2026-10-01 kveld.
- Forventet resultat: v3 til vurdering; Astro-prosjektet etableres.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Avbestillingsfrister fastsatt
- Beslutning (endelig per 2026-10-01 kveld): Avbestilling mer enn 14 dager
  før arrangementet: kostnadsfritt. 14 dager til 48 timer før: 50 % av
  avtalt pris. Mindre enn 48 timer før: 100 % av avtalt pris. Reglene
  gjelder fra oppdraget er bekreftet med en avtale (= bindingspunktet).
  Ingen depositum.
- Begrunnelse: Mathias' praktiserte regler; 72–48-timershullet tettet med
  Claudes forslag, godkjent av Mathias samme dag.
- Forventet resultat: Komplett grunnlag for «Avbestilling og refusjon»- og
  vilkårssidene i fase 3. Frister regnes mot arrangementets starttidspunkt
  (presiseres i vilkårsteksten).
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Fase 3-avklaringer fra Mathias (e-post, priser, avtaler, m.m.)
- Beslutning: (1) **E-posttjeneste: EU-basert** – kandidat Brevo (Paris,
  EU-datalagring, gratis 300/dag, transaksjons-API; verifisert mot
  brevo.com 2026-10-01). Resend er ute. (2) **Ingen depositum som
  hovedregel** – avbestillingsfrister brukes i stedet; bindingspunkt og
  frister konkretiseres (TODO fra Mathias). Dette erstatter oppdragets
  opprinnelige depositum-grunnprinsipp. (3) **proffhosting.no** drifter
  @t-event.no-innboksen → navngis som databehandler i personvernerklæringen.
  (4) **TikTok (@tevent.no) skal med** på ny side (footer + JSON-LD sameAs).
  (5) **Pakkepriser må utvikles** – ingen oppdrag er like; pakker med
  «fra»-priser settes sammen med utgangspunkt i Tripletex-produktprisene
  når Mathias sender dem. (6) **Bildesamtykker:** Marius/Daniel/Rana Blad er
  informert muntlig, skriftlig dokumentasjon mangler – ferdige meldingsutkast
  laget i docs/samtykke-meldinger.md som Mathias kan sende.
- Begrunnelse: Mathias' svar 2026-10-01. EU-valget fjerner
  tredjelandsoverføring for skjemadata.
- Forventet resultat: Skjemafunksjonen bygges mot Brevo i fase 3;
  vilkår/avbestilling skrives rundt frister, ikke depositum.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Designretning: tydeligere avstand fra gammel side
- Beslutning: Mathias synes v1-utkastet «ligner veldig på den gamle siden»
  (foto-hero med mørkt overlegg). Ny retning: typografidrevet, plakatlik
  hero i håndbokens stil – flat Midnatt-flate med stor Jost Light-tittel og
  asymmetrisk fotopanel med diagonalt snitt; tjenestene som plakatens
  kolonnemotiv (s. 13) i stedet for kort-bokser.
- Begrunnelse: Håndbokens egen estetikk er flat og typografisk, ikke
  foto-overlegg; gir tydelig avstand fra gammel side.
- Forventet resultat: Design v2 til ny vurdering.
- Reviewdato: 2026-10-31
- Status: Aktiv

## 2026-10-01 – Cloudflare Web Analytics aktivert + designprosess
- Beslutning: (1) Mathias har aktivert Cloudflare Web Analytics for
  Pages-prosjektet (cookiefri statistikk, jf. statistikkbeslutningen).
  (2) Design lages av Claude selv i HTML/CSS med de godkjente skillsene
  installert og i bruk – ikke Figma, ikke egen ekstern designtjeneste.
  Ambisjon fra Mathias: designet skal være «sinnsykt bra»; flere
  polish-runder med hans tilbakemeldinger.
- Begrunnelse: Web Analytics er del av godkjent tjenesteliste. Skillsene
  var godkjent i fase 0 nettopp for designkvalitet.
- Forventet resultat: Beacon-skriptet verifiseres i cookie-kartleggingen
  (fase 4) og CSP må tillate static.cloudflareinsights.com (fase 3).
- Reviewdato: 2026-10-31
- Status: Aktiv

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
