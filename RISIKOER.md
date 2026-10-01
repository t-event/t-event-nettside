# RISIKOER.md – risikorapport for T-Event-nettsiden

Holdes løpende oppdatert. Alvorlighet: høy / middels / lav.
Sist oppdatert: 2026-10-01.

---

## 1. Mva-vurderingen for DJ-tjenester er uavklart
- Beskrivelse: Om DJ-tjenester er avgiftsunntatt er en uavklart vurdering.
  Nettsiden skal ikke ta stilling til den. Foretaket er ikke mva-registrert;
  priser vises som endelige, med teksten «Foretaket er ikke mva-registrert»
  nederst på prissiden. Aldri «eks. mva» / «inkl. mva».
- Alvorlighet: Høy (feil fremstilling kan gi avgifts- og markedsføringsproblem)
- Kilde/bestemmelse: Prosjektpolicy fastsatt av Mathias (2026-10-01). Selve
  avgiftsspørsmålet er ikke kontrollert mot kilde – skal ikke vurderes her.
- Lovkrav eller policy: Policy (bygger på uavklart lovspørsmål)
- Tiltak: Prisside uten mva-formuleringer; tekstkontroll i fase 4.
- Oppfølging: Regnskapsfører (vurderingen), Claude (tekstkontroll)

## 2. Materiale med gjenkjennelige personer, særlig mulige mindreårige
- Beskrivelse: Bilder/video fra gamle siden kan vise gjenkjennelige personer
  (f.eks. russearrangementer) uten dokumentert samtykke.
- Alvorlighet: Høy
- Kilde/bestemmelse: Åndsverkloven § 104 (retten til eget bilde) – ikke
  kontrollert mot lovdata.no ennå; kontrolldato settes i fase 1.
- Lovkrav eller policy: Lovkrav + prosjektpolicy (ingen gjenkjennelige
  personer uten dokumentert avklaring; mindreårige krever særskilt avklaring)
- Tiltak: Full gjennomgang gjort i fase 1 (RETTIGHETER.md). Beslutning
  2026-10-01: skoleball-serien (mulige mindreårige) brukes ikke. Fire bilder
  med gjenkjennelige voksne står i AVKLARING. Teambildet er avisfoto –
  skriftlig bekreftelse fra avisen skal innhentes før lansering.
- Oppfølging: Mathias (dokumentasjon), Claude (kontroll før fase 5)

## 3. Musikk- og opptaksrettigheter i video
- Beskrivelse: Video fra arrangementer inneholder normalt musikk med egne
  rettigheter. YouTube-publisering dokumenterer ikke lovlig bruk.
- Alvorlighet: Middels–høy
- Kilde/bestemmelse: Åndsverkloven – kontrolleres i fase 1.
- Lovkrav eller policy: Lovkrav + policy (selvhostede klipp får lydsporet
  fjernet fra selve filen, ikke bare `muted`)
- Tiltak: Rettighetsgjennomgang per klipp i fase 1 før publisering/innbygging.
- Oppfølging: Claude (kartlegging), Mathias (avklaringer)

## 4. Juridiske tekster er utkast
- Beskrivelse: Personvernerklæring, cookieerklæring, vilkår, avbestilling og
  angrerettsvurdering skrives som utkast av Claude, som ikke er jurist.
- Alvorlighet: Middels
- Kilde/bestemmelse: Kilder oppgis per vurdering (lovdata.no, datatilsynet.no,
  forbrukertilsynet.no m.fl.) med kontrolldato når tekstene skrives.
- Lovkrav eller policy: Policy: utkast til Mathias (og evt. fagperson) har
  godkjent; hva som bør sjekkes av fagperson merkes i hver tekst.
- Tiltak: `UTKAST`-merking; aldri synlig i produksjon uten godkjenning.
- Oppfølging: Mathias / jurist

## 5. Avhengighet av gratis tredjepartstjenester
- Beskrivelse: Cloudflare Pages/Turnstile/Web Analytics og e-posttjeneste
  (forslag: Resend) brukes på gratisnivå. Vilkår, priser eller gratisnivå kan
  endres og kan stoppe skjema eller deploy.
- Alvorlighet: Middels
- Kilde/bestemmelse: Tjenestenes egne vilkår; kontrolleres ved valg (fase 3).
- Lovkrav eller policy: Policy
- Tiltak: Innhold og kode ligger i eget repo (flyttbart); e-posttjeneste byttes
  bak én Pages Function; skjemaet har alltid synlig e-post/telefon som
  alternativ kontaktvei.
- Oppfølging: Mathias (varsler fra tjenestene), Claude (arkitektur)

## 6. Branch protection utilgjengelig på GitHub Free (privat repo)
- Beskrivelse: Verken branch protection eller rulesets kan aktiveres på
  `t-event/t-event-nettside` (verifisert 2026-10-01: API ga 403 «Upgrade to
  GitHub Pro»). `main` kan derfor teknisk sett endres direkte.
- Alvorlighet: Lav
- Kilde/bestemmelse: GitHub-API-svar 2026-10-01 (observert), docs.github.com.
- Lovkrav eller policy: Policy (harde regler: endringer via PR)
- Tiltak: Arbeidsrutine: alt via PR uansett. Alternativ: GitHub Pro (betalt)
  eller offentlig repo – Mathias velger.
- Oppfølging: Mathias (valg), Claude (rutine)

## 7. Figma-leveransen i fase 2 kan være upraktisk på gratisplan
- Beskrivelse: Figmas offisielle MCP-server har skriveverktøy (beta), men
  gratis-/Starter-plan er iflg. Figmas dokumentasjon begrenset til svært få
  tool-kall per måned (ca. 6). Full sidedesign via MCP krever i praksis
  Dev-/Full-sete på betalt plan.
- Alvorlighet: Middels (blokkerer fase 2-leveransen slik den er beskrevet)
- Kilde/bestemmelse: help.figma.com «Guide to the Dev Mode MCP Server» og
  developers.figma.com, kontrollert 2026-10-01.
- Lovkrav eller policy: Praktisk begrensning
- Tiltak: LØST 2026-10-01: Mathias har ingen Figma-plan; fase 2 leveres som
  HTML/CSS-designutkast (godkjent). Kjøp av Figma-plan vurdert og frarådet.
- Oppfølging: Ingen (lukket)

## 8. Skills fra tredjepart kjører skript
- Beskrivelse: «impeccable» (JS-skript for nettleserkjøring) og «UI UX Pro
  Max» (Python-søkeskript) inneholder kjørbare skript. «taste»-repoet har
  byggeskript. Skript fra tredjepart kan i prinsippet gjøre hva som helst
  lokalt.
- Alvorlighet: Lav–middels
- Kilde/bestemmelse: Repo-innhold kontrollert 2026-10-01 (filtrelisting).
- Lovkrav eller policy: Policy (sikkerhet)
- Tiltak: Skriptene gjennomgås av Claude før første kjøring; skills pinnes til
  gjennomgått commit; ingen hemmeligheter lokalt som skript kan lekke.
- Oppfølging: Claude

## 9. Test- og produksjonsforespørsler går til samme innboks
- Beskrivelse: Mathias valgte samme adresse (mathias@t-event.no) for test og
  produksjon. Testinnsendinger kan forveksles med ekte forespørsler.
- Alvorlighet: Lav
- Kilde/bestemmelse: Beslutning 2026-10-01.
- Lovkrav eller policy: Policy
- Tiltak: Testmeldinger fra preview merkes tydelig i emnefeltet
  (f.eks. «[TEST – forhåndsvisning]»).
- Oppfølging: Claude (implementasjon i fase 3)

## 10. mathias@t-event.no må eksistere og ha fungerende mottak
- Beskrivelse: Bookingmottaket forutsetter at adressen på eget domene finnes
  og fungerer. Ikke verifisert. Domenebrukt e-post krever også SPF/DKIM/DMARC
  (se sikkerhetskapitlet i oppdraget).
- Alvorlighet: Middels (skjema uten fungerende mottak = tapte oppdrag)
- Kilde/bestemmelse: Ikke verifisert; testes ende-til-ende i fase 4.
- Lovkrav eller policy: Praktisk
- Tiltak: Ende-til-ende-test av skjema i fase 4; DNS-anbefalinger i fase 5.
- Oppfølging: Mathias (bekrefte at adressen finnes), Claude (test)
