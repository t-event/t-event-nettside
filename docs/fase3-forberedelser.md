# Fase 3-forberedelser: tjenestevalg og tidlige juridiske avklaringer

Skrevet 2026-10-01. Forslagene under krever Mathias' godkjenning (harde
regler nr. 3). Juridiske vurderinger er utkast (regel 4).

## 1. E-posttjeneste for bookingskjemaet [FORSLAG – til godkjenning]

Skjemaet sendes via en Cloudflare Pages Function som kaller en e-post-API.
To reelle kandidater, begge med gratisnivå som dekker behovet (noen
forespørsler per dag, ikke tusenvis):

### Alternativ A: Resend (anbefalt av oppdraget som eksempel)
- Gratis: 3 000 e-poster/mnd, 100/dag, 1 verifisert domene
  (kilde: wpmailsmtp.com/resend-review og costbench.com, kontrollert
  2026-10-01 – verifiseres mot resend.com/pricing før avtale inngås).
- Enkel API, god leveringsevne, krever DNS-verifisering av t-event.no
  (SPF/DKIM) – passer sammen med DNS-jobben i fase 5.
- **Personvern-ulempe:** Resend lagrer kontodata, e-postmetadata og logger i
  USA; EU-region styrer bare utsendingsrute. Overføringsgrunnlag: SCC
  (kilde: resend.com/security/gdpr via søk 2026-10-01). Må i så fall stå i
  personvernerklæringen som overføring til tredjeland, og DPA må signeres.

### Alternativ B: EU-basert tjeneste (f.eks. Brevo eller Mailjet, EU-servere)
- Unngår tredjelandsoverføring helt → enklere personvernerklæring.
- Gratisnivåene er romslige nok (Brevo ca. 300 e-post/dag per
  markedsføring – verifiseres hvis valgt).
- Noe mer oppsett/mindre utviklervennlig API enn Resend.

**Anbefaling:** Alternativ A (Resend) hvis du er komfortabel med dokumentert
USA-overføring av navn/e-post/forespørselstekst; ellers B. Innholdet i en
bookingforespørsel er begrenset (kontaktinfo + arrangementsdetaljer), og SCC
er lovlig grunnlag, men B gir færrest forbehold. **Valget er ditt.**

## 2. Spambeskyttelse og rate limiting [FORSLAG – til godkjenning]

Lagdelt, ingen enkeltmekanisme alene:
1. **Cloudflare Turnstile** (gratis) verifisert på serveren. Manglende/
   ugyldig token avvises alltid. Uten JavaScript vises tydelig melding med
   e-post/telefon som alternativ kontaktvei.
2. **Honeypot-felt** (gratis, usynlig for mennesker).
3. **Cloudflare rate limiting-regel** på produksjonsdomenet (fase 5):
   gratisplanen inkluderer regler basert på IP med 10-sekunders vindu,
   f.eks. maks 5 POST mot skjema-endepunktet per IP per 10 s (kilde:
   developers.cloudflare.com learning path, kontrollert 2026-10-01).
   Merk: kan først settes opp når t-event.no ligger i Cloudflare (fase 5) –
   gjelder ikke *.pages.dev.
4. **KV-basert teller i Pages Function** (gratisnivå: 1 000 skrivinger/dag –
   mer enn nok): maks N innsendinger per IP per time også på pages.dev og
   som andre forsvarslinje. **Personopplysning:** IP-adressen lagres da
   hashet med kort levetid (TTL 1 time) kun for dette formålet – tas inn i
   personvernerklæringen.

Kostnad: 0 kr. Begrensninger: gratis rate limiting teller per datasenter og
kun IP-basert; Turnstile er derfor primærforsvaret.

## 3. Angrerett – vurdering (UTKAST, ikke juridisk rådgivning)

- Kilde: angrerettloven § 22 bokstav m (lovdata.no/lov/2014-06-20-27/§22,
  kontrollert 2026-10-01): angreretten gjelder ikke «tjenester knyttet til
  fritidsaktiviteter når det i avtalen er fastsatt en bestemt dato eller et
  bestemt tidsrom for utførelsen».
- **DJ/lyd/lys/laser til et arrangement på avtalt dato (forbrukerkunde):**
  faller etter ordlyden trolig inn under unntaket → ingen angrerett. Dette
  bør likevel opplyses uttrykkelig i vilkårene og før bestilling
  (opplysningsplikten i § 8 gjelder uansett – kontrolleres når vilkårene
  skrives).
- **Ren utstyrsutleie uten betjening:** mer usikkert om det er en «tjeneste
  knyttet til fritidsaktiviteter» – bilutleie er særskilt nevnt i loven,
  utstyrsutleie er ikke. TVIL → det lages tekst for begge utfall i fase 3,
  og fagperson bør vurdere. (Jf. oppdragets instruks.)
- Konsekvens for vilkår/avbestilling: selv uten angrerett står partene
  fritt til å avtale avbestillingsvilkår – Mathias' depositumsmodell står
  på egne ben.

## Svar mottatt 2026-10-01 (se decisions.md)

- E-post: **EU-tjeneste valgt** → Brevo er kandidaten (verifisert: Paris,
  EU-lagring, gratis 300/dag, transaksjons-API).
- Depositum: **ingen som hovedregel** – avbestillingsfrister i stedet.
  Frister (endelig 2026-10-01): >14 dager: gratis · 14 dager–48 timer:
  50 % · <48 timer: 100 %. Gjelder fra oppdraget er bekreftet med avtale.
- Databehandler innboks: **proffhosting.no** (norsk leverandør).
- TikTok: **med** på ny side.
- Pakkepriser: utvikles sammen med Mathias fra Tripletex-prisene.
- Bildesamtykker: muntlig OK, skriftlig mangler → docs/samtykke-meldinger.md.

## 4. Spørsmål som fortsatt står åpne

1. **Design:** godkjenner du fase 2-utkastene (med de 10 merkede valgene i
   design-fase2.md), eller hva skal endres?
2. **Priser:** Tripletex-prisene + km tur/retur? kjøretid-beregning og
   avrunding? hvilken rigging inngår i pakkeprisene?
3. **Bindende avtale:** når blir en forespørsel bindende (skriftlig
   bekreftelse + depositum, jf. ditt grunnprinsipp)? Depositumets størrelse
   og frister (TODO i avbestillingsteksten)?
4. **Lagringstider:** hvor lenge skal (a) forespørsler som ikke blir noe av,
   (b) gjennomførte bookinger, (c) regnskapsmateriale lagres? (c) styres av
   bokføringsloven (5 år – verifiseres); (a) og (b) er ditt valg og skal inn
   i personvernerklæringen.
5. **Databehandlere:** hvem drifter innboksen til mathias@t-event.no
   (Domeneshop? Google Workspace? Microsoft 365?)? Leverandøren er en
   databehandler og skal navngis i personvernerklæringen. + valget i pkt. 1
   (e-posttjeneste).
6. **TikTok:** skal @tevent.no-kontoen med i footer/JSON-LD på ny side?
7. **Dokumentasjon:** Rana Blad-godkjenningen og Daniel I-samtykket – har du
   dem skriftlig (melding/e-post er nok)?
