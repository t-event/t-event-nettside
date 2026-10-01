# Designutkast fase 2 – grunnlag og valg

Skrevet 2026-10-01. Leveransen ligger i `public/design/` og kan ses på
`https://t-event-nettside.pages.dev/design/` (noindex). HTML/CSS-utkast
erstatter Figma-leveransen (beslutning 2026-10-01: ingen Figma-plan).

## Hentet direkte fra designhåndboken (v1.0)

- Farger, fordeling 60/30/10 og kontrastregler (s. 7)
- Jost (overskrift/etikett) og Karla (brødtekst/detalj) med nivåene fra s. 8;
  selvhostet som variable woff2 (latin-subsett, 51 kB totalt), fallback
  Century Gothic/Arial
- Logoregler: negativ variant på mørk flate, kun symbol på små flater,
  frisone respektert i toppfeltet (s. 3–5)
- Tone i all utkasttekst: rolig, konkret, trygt – faste formuleringer brukt
  («Lyd, lys og DJ på Helgeland», «Vi tar hele jobben – rigg, teknikk og
  nedrigg», «DJ · lyd · lys», «Nytt: showlaser klasse 4») (s. 9)
- Koral-strek under overskrifter fra plakatmalene (s. 13)
- Korall til én ting av gangen per flate (s. 7, 16)

## Valg håndboken ikke dekker [til godkjenning]

1. **Subtile lysstråler i hero** – svake skrå gradienter med langsom puls
   (9 s). Fra oppdraget, ikke håndboken. Slås helt av ved
   `prefers-reduced-motion`.
2. **Primærknapp: Natt-tekst på korallflate** – fordi hvit tekst på korall
   bare gir 3,13:1. Natt på korall gir 5,88:1 (AA). Hover: kun lysstyrke
   (+8 %), ingen ny farge.
3. **Sekundærknapp**: transparent med skifer-ramme.
4. **Skarpe hjørner (radius 0)** – speiler logoens rette flater.
5. **Spacing-skala, maksbredde 1120 px, brekkpunkter** (40/48/64 rem).
6. **Mellomtittel-størrelse** (22–28 px) – interpolert mellom håndbokens
   nivåer.
7. **Navigasjon uten JavaScript**: lenkene vises alltid (brytes over flere
   linjer på mobil) – ingen hamburger. Enkleste løsning som oppfyller
   «navigasjon skal fungere uten JavaScript».
8. **Hero-bildet tones mot Natt nederst** slik at tekst alltid leser –
   følger prinsippet «logo/tekst på rolig del av bildet» (s. 5).

## Kontrast

Full tabell i `public/design/komponenter.html`. Alle tekstkombinasjoner i
utkastet består AA (4,5:1 / 3:1 stor tekst). Ingen profilfarger er endret;
kombinasjoner som ikke består (hvit på korall, skifer på mørk, korall på
tåke) er unngått og dokumentert. Verifiseres maskinelt med axe i fase 4.

## Innholdsnotater i utkastet

- All tekst er UTKAST og bruker kun dokumenterte fakta (faste opplysninger +
  Mathias' avklaringer). Laser-teksten har TODO om DSA-terminologikontroll
  før publisering (fase 3-juridisk).
- «Halloween på Park22» og Eprod-omtalen følger Mathias' avklaring
  2026-10-01.
- Priser-, galleri- og kontakt-sidene er bare menylenker ennå – bygges i
  fase 3.
- Bildene ligger i `public/design/bilder/` med navn etter innhold;
  `MIDLERTIDIG-skoleball.jpg` er med i mappen, men er ikke brukt i
  utkastene ennå (kun KLAR-bilder er i bruk).

## Teknisk (for fase 3)

- Nyeste versjoner per 2026-10-01: Astro 7.3.5, TypeScript 7.0.2 (sjekket
  mot npm). Låses i lockfile ved fase 3-oppstart.
- tokens.css er skrevet slik at den kan flyttes rett inn i Astro-prosjektet.
