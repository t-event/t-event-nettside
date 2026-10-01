# Plan: «Opplevelsen» – 3D gjennom hele siden

Vedtatt retning (Mathias, 2026-10-01): 3D-effekter på hele siden, ikke bare
heroen. Ingen manuelle brytere – scenen styres av scroll og peker. Det skal
være en opplevelse å booke eller ta kontakt. **Bygges én etappe av gangen**,
én PR per etappe, Mathias vurderer i nettleser mellom etappene.

## Prinsipper (gjelder alle etapper)

- **Én scene, én historie.** 3D-riggen ligger fast bak hele siden. Scrolling
  flytter kameraet og endrer lysstemningen – som akter i et show. Ingen
  seksjon «starter på nytt».
- **Ingen pynteknapper.** Alt som endrer scenen skjer automatisk (scroll,
  pekerposisjon, hvor du er på siden). Knapper finnes bare der de gjør noe
  ekte (navigasjon, send forespørsel).
- **Reserve alltid.** Uten WebGL eller med `prefers-reduced-motion` vises en
  rolig CSS-versjon. Siden er aldri tom, og tekst har alltid lesbar kontrast
  (mørke scrims bak tekstflater).
- **Egenverifisering.** Hver etappe skjermdumpes med Playwright på flere
  scrollpunkter (desktop + mobilbredde) og konsollen sjekkes **før** Mathias
  får lenken.

## Etappene

### Etappe 1 – Scroll-regien (bygges nå)
Scenen blir et fast bakteppe bak hele siden. Fem akter styrt av scroll:
1. **Hero:** korall-stråler, rolige sveip, kamera i publikumshøyde.
2. **Tjenester:** lyset skifter til hvitt arbeidslys, kamera trekker seg
   skrått opp – «bak scenen»-følelse.
3. **Galleri:** røyken tetner, strålene dempes – bildene får lyset.
4. **Book/kontakt:** fullt show – alle stråler på, raskere sveip, kamera
   lavt og ser opp i riggen.
5. **Footer:** lyset dør rolig ut.
Lysbord-bryterne fjernes. Pekerfølging beholdes (dempet).

### Etappe 2 – Tjenestelisten reagerer på deg
Peker du på en tjeneste, svarer riggen: «DJ» → pulserende takt i strålene,
«Lyd og lys» → full bredde, «Showlaser» → strålene snevres til skarpe
laserlinjer, «Effekter» → røyksjokk. Ingen klikk nødvendig – bare peker/
scrollposisjon. På mobil: raden som er i midten av skjermen styrer.

### Etappe 3 – Galleriet inn i rommet
Bildene henger som «bannere» med dybde og parallax i/over scenen i stedet
for flat filmstripe; lysgulvet reflekterer svakt. Scroll driver bevegelsen.

### Etappe 4 – Bookingopplevelsen («Planlegg kvelden»)
Kontakt/booking blir en reise, ikke et skjema: mens du svarer på hva du
trenger (DJ? lyd? lys? utleie?), bygges showet ditt live i riggen bak –
velger du lys, tennes flere lamper; velger du DJ, ruller DJ-bordet inn.
Slutten er et ferdig utfylt forespørselsskjema. (Valgene her er ekte input,
ikke pynteknapper.) Teknisk skjema-backend (Turnstile + Brevo) kommer i
fase 3-overføringen.

### Etappe 5 – Mobil, ytelse og ro
Mobiltilpasning av alle akter, ytelsesbudsjett (pixelratio, antall lamper,
pause når fanen er skjult), full reduced-motion-gjennomgang, Lighthouse-
måling og tiltak.

### Etappe 6 – Overføring til Astro (fase 3)
Konseptet flyttes inn i Astro-komponenter: BaseLayout, alle undersider,
juridiske UTKAST-sider, skjema med Turnstile + Brevo, innhold fra content
collections.

## Status

| Etappe | Status |
|---|---|
| 1 Scroll-regien | Under bygging |
| 2 Tjenestelisten | Venter |
| 3 Galleriet | Venter |
| 4 Bookingopplevelsen | Venter |
| 5 Mobil/ytelse | Venter |
| 6 Astro-overføring | Venter |
