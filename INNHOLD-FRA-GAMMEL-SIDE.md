# Innhold fra gammel side (t-event/website)

Kartlagt 2026-10-01 fra klonen i `../t-event-gammel` (React-SPA bygget på
Material Kit 2-malen, utviklet av PolarCode Solutions). Alt under er
**observert i koden** – hva som tas videre avgjøres av Mathias.

## URL-er på gammel side (grunnlag for redirects i fase 5)

| URL | Side | Merknad |
|---|---|---|
| `/` | Hjem | |
| `/utleie` | Utleie | |
| `/om-oss` | Om oss | |
| `/kontakt-oss` | Kontakt | Tar query-param `?type=dj`, `?type=eventutstyr` m.fl. som forhåndsvelger skjematype |
| alt annet | → redirect til `/` | React Router `path="*"` |

Metadata-observasjoner:
- `<title>`: «T-Event» (index.html), men Hjem-siden setter «T-Events – Lyd,
  Lys, Stemning | Profesjonelle Eventtjenester» via react-helmet.
- Canonical på Hjem peker på **https://t-events.no/** (med s – trolig feil
  eller gammelt domene). OG-url peker på **https://t-events.pages.dev/** –
  gamle siden ligger altså trolig allerede i et Cloudflare Pages-prosjekt
  kalt `t-events`.
- Skrifter: Montserrat (Google Fonts) – erstattes av Jost/Karla fra håndboken.

## Tekster per side

### Hjem (`/`)
- Hero: «LYD. LYS. STEMNING.» / «Vi skaper minnerike øyeblikk for ditt
  arrangement!»
- Roterende kort: «Lei lyd, lys eller DJ?» – «Vi tilbyr profesjonell utleie
  av lyd- og lysutstyr til arrangementer på Helgeland, samt DJ-tjenester som
  skaper den perfekte stemningen.» / Bakside «Oppdag mer»: «Enten du trenger
  utstyr til russefest, skoleball, bryllup eller firmaevent – vi har det du
  trenger. Vi leverer også DJ-tjenester!»
- Fire infokort:
  - «Profesjonell lyd» – «Fra små fester til store konserter – vårt utstyr
    sikrer topp lydkvalitet.» ⚠ «vårt utstyr» + «store konserter»: T-Event
    eier ikke eget PA-anlegg; omformuleres.
  - «Fantastisk lys» – «Lys skaper stemning! Vi har alt fra enkle festlys til
    avanserte lysshow.»
  - «Passer alle events» – «Russefester, skoleball, bryllup, julebord,
    firmaevent – vi har utstyret og folkene for deg.» ⚠ «folkene» (flertall)
    – enkeltpersonforetak; vurder formulering.
  - «DJ-tjenester» – «Erfarne DJ-er med lang fartstid – vi spiller musikken
    som passer perfekt til ditt arrangement.» ⚠ Udokumentert påstand («lang
    fartstid») + flertall «DJ-er».
- Midtseksjon «Egne Events»: «I tillegg til utleie og oppdrag for andre,
  hoster T-Event egne arrangementer. Fra takeover på uteplasser til
  Halloween-rave på Park22 – vi vet hva som skal til for å skape en kveld
  folk snakker om lenge etterpå.» + lenke «Se kommende events» (Facebook).
  ⚠ «Park22» er stedsnavn/virksomhet – avklar om det kan nevnes (policy:
  ingen kundenavn uten tillatelse).
- Booking-kort: «Book Event» / «Lei DJ» / «Utleie av utstyr» med lenker til
  kontakt med `?type=`.

### Utleie (`/utleie`)
- Hero: «UTLEIE AV LYD, LYS OG EVENTUTSTYR» / «Lag et uforglemmelig
  arrangement med T-Event.»
- Seks roterende kort (forside → bakside):
  - Lydutstyr: «Klar lyd, uansett arrangement.» → «Lydutstyr fra d&b,
    L-Acoustics og mer. Vi sørger for perfekt lyd til ditt event!»
    ⚠ Merkenavn d&b/L-Acoustics: utstyret er ikke T-Events eget (leies inn
    via samarbeidspartner). Må ikke gi inntrykk av eget eierskap.
  - Lysutstyr: «Skap magiske lyssettinger!» → «Lysutstyr fra Martin, Chauvet
    og andre kjente merker. Fra enkle lyssettinger til storslåtte lysshow!»
    ⚠ Samme forbehold om merkenavn.
  - Effekter: «Gi eventet det lille ekstra!» → «Røykmaskiner, konfetti,
    lasere og mer – for et arrangement som virkelig setter seg fast.»
  - DJ-tjenester: «Skap stemningen med erfarne DJ-er.» → «Vi stiller med DJ
    på russefester, skoleball, bryllup, julebord og mer – og sørger for at
    dansegulvet alltid er fullt.» ⚠ «alltid fullt» – løfte/overdrivelse.
  - Rigging & teknisk utføring: «Vi tar oss av det tekniske.» → «Fra oppsett
    og rigging til teknisk gjennomføring på dagen – vi håndterer det, så du
    kan nyte arrangementet.»
  - Annet utstyr: «Alt du trenger til et vellykket event.» → «Eventutstyr
    tilpasset ditt arrangement. Vi har alt du trenger!» ⚠ «Vi har alt» –
    overdrivelse.
- Avslutning: «Ta kontakt for mer informasjon og prisoverslag» / «Send oss en
  melding eller ring oss – vi setter opp et tilbud tilpasset ditt
  arrangement.» (god, gjenbrukbar formulering)
- ⚠ Ingen priser fantes på gammel side – ingen gamle priser å videreføre.

### Om oss (`/om-oss`)
- Hero: «OM OSS» / «Vi er T-Event – din samarbeidspartner for lyd, lys og
  uforglemmelig stemning på Helgeland!»
- Teamkort «Mathias & Marius»: «To engasjerte folk med lidenskap for gode
  arrangement.»
  - Mathias Tustervatn: «…grunnleggeren av T-Event og tar seg av alt fra
    kundekontakt og planlegging til DJ-ing, rigging og teknisk utføring. Med
    bred erfaring innen lyd, lys og arrangement er han garantisten for at alt
    går som det skal…» ⚠ «garantisten» – løftespråk.
  - Marius Hågensen: «…fast og viktig del av T-Event og bidrar på de fleste
    oppdrag. Han er DJ, rigger og tar seg av det tekniske…»
    ⚠ Krever Marius' samtykke (navn + bilde) for videreføring.
- Videoseksjon «Møt Vårt Team»: «Vi er to engasjerte folk …
  alt fra store produksjoner til intime fester.»
- «Vår Visjon»: «Vi ønsker å være den foretrukne leverandøren av lyd, lys og
  DJ-tjenester på Helgeland – …» (formulert som ønske – OK, men gjennomgås)
- «Vår Historie»: «T-Event ble etablert for å tilby profesjonelt lyd- og
  lysutstyr … Vi samarbeider tett med Eprod Mo i Rana for å sikre tilgang
  til topp utstyr, og har over tid bygget et godt rykte for pålitelig
  levering og høy kvalitet …»
  ⚠ «Eprod Mo i Rana» nevnes som samarbeidspartner – krever deres aksept.
  ⚠ «godt rykte … høy kvalitet» – udokumentert påstand.

### Kontakt (`/kontakt-oss`)
- Hero: «KONTAKT OSS» / «Ta gjerne kontakt – vi hjelper deg med spørsmål og
  prisoverslag!»
- Skjema (sendes til tredjeparten **Web3Forms**, access-key ligger åpent i
  koden): Navn*, E-post*, Type forespørsel* (Lydutstyr/Lysutstyr/
  Spesialeffekter/DJ & Musikere/Eventutstyr/Generelt), Melding*. Knapp:
  «Send». ⚠ Erstattes helt i fase 3 (egen Pages Function, Turnstile osv.).
- Footer (alle sider): logo, sosiale lenker (Facebook: teventservice,
  TikTok: @tevent.no, Instagram: teventno, e-post), kontaktinfo: E-post
  mathias@t-event.no, Telefon +47 929 63 907, Adresse Myravegen 1j, 8640
  Hemnesberget, Org.nr 931 764 632. ⚠ TikTok-kontoen står ikke i faste
  opplysninger – avklar om den skal med på ny side.

## Bilder (brukt på sidene)

Kvalitet: ✅ = god nok for web, ⚠ = begrenset, ❌ = for liten/dårlig.
Personer: 👤 = gjenkjennelige personer, 🔞 = mulige mindreårige.

| Fil | Oppløsning | Viser | Vurdering |
|---|---|---|---|
| backgrounds/t-event-home-bg-cropped.jpg | 2853×1185 | Scene med lasere/moving heads, silhuetter (ikke gjenkjennbare) | ✅ Sterk hero-kandidat, on-brand |
| backgrounds/t-event-home-bg.jpg | 3024×4032 | Ubeskåret variant (stående) | ✅ |
| hjem/midsection/t-event-midsection-whole.jpg | 4032×3024 | Pyntet gymsal/skoleball, blått lys, folkemengde | ✅ teknisk 👤🔞 |
| hjem/t-event-rotate-card-front.jpg | 1242×2208 | Industribygg lyssatt med rosa «W»-projeksjon og blå silo | ✅ Ingen personer |
| hjem/t-event-rotate-card-back.jpg | 3644×4906 | To DJ-er med nisselue bak Pioneer-rigg, publikum | ✅ teknisk 👤 (tydelige ansikter) |
| leie/t-event-leie-bg.jpg | 4032×3024 | FOH-telt utendørsscene (Avolites, Yamaha DM7, Soundcraft Vi1), crew | ✅ 👤 (flere voksne) ⚠ utstyret er neppe T-Events eget |
| leie/T-event-utleie-mid-section.jpg | 4288×2848 | Nærbilde mikserknotter, moody | ✅ ⚠ ser ut som stockfoto |
| leie/cards/fronts/t-event-sound-gear-card-front.jpg | 1199×1342 | Utendørsscene, høyttalerkasser, mann med cowboyhatt bakfra | ⚠ ser ut som stockfoto (utenlandsk setting) |
| leie/cards/backs/t-event-sound-gear-card-back.jpg | 2502×2961 | Makro av høyttalergrill | ✅ |
| leie/cards/fronts/t-event-lighting-gear-card-front.jpg | 1398×2002 | Abstrakte laserstråler, blått | ✅ ⚠ mulig stockfoto |
| leie/cards/backs/t-event-lighting-gear-card-back.jpg | 1517×1746 | Skoleball ovenfra, dansegulv | ✅ teknisk 👤🔞 |
| leie/cards/fronts/t-event-effects-gear-card-front.jpg | 2818×3532 | Arm opp gjennom røyk, rosa/lilla | ✅ ⚠ mulig stockfoto |
| leie/cards/backs/t-event-effects-gear-card-back.jpg | 2416×2803 | Halloween-rave, kostymer, grønt lys, DJ i hettegenser | ✅ 👤 |
| leie/cards/fronts/t-event-dj-card-front-cropped.jpg | 3022×2622 | DJ med hodetelefoner i rødt lys («MASKINERIET»-t-skjorte) | ✅ 👤 (delvis skjult) |
| leie/cards/backs/t-event-dj-card-back-cropped-2.jpg | 3206×2929 | DJ bakfra med «DANIEL I»-t-skjorte, rød klubbscene | ✅ 👤 ⚠ annen artist (Daniel I?) – avklar |
| leie/cards/fronts/t-event-rigging-card-front.jpg | 4032×3024 | Skoleball ovenfra med DJ-bord i hjørnet | ✅ teknisk 👤🔞 |
| leie/cards/backs/t-event-rigging-card-back.jpg | 4032×3024 | Samme sal i rosa lys, mange tydelige ansikter | ✅ teknisk 👤🔞 (sterkest flagg) |
| leie/cards/fronts/t-event-other-gear-card-front.jpg | 429×588 | Scene med LED-kube | ❌ For liten |
| leie/cards/backs/t-event-other-gear-card-back.jpg | 1021×1077 | «W»-projeksjonen (kvadratisk utsnitt) | ⚠ Litt liten til stor flate |
| backgrounds/t-event-kontakt-oss-bg-cropped.jpg | 3739×1871 | Skoleball, ballonger, mange unge | ✅ teknisk 👤🔞 |
| backgrounds/t-event-kontakt-oss-bg-mobile.jpg | 380×557 | Mobilutsnitt av samme | ❌ For liten |
| om-oss/t-event-om-oss-bg.jpg | 7360×4912 | Halloween-rave, grønt lys (proff kamera) | ✅ 👤 |
| om-oss/team/t-event-boss-img.jpg | 1792×1196 | Portrett Mathias (T-Event-genser) og Marius | ✅ 👤 (krever samtykke fra Marius; fotograf ukjent) |
| om-oss/t-event-vaar-visjon.jpg | 6742×4744 | DJ bakfra med «DANIEL I»-t-skjorte, rød scene | ✅ 👤 ⚠ annen artist |
| om-oss/t-event-vaar-historie.jpg | 7360×4912 | Drinkglass i rødt lys, silhuetter | ✅ |
| logos/T-event/fulllogo_transparent.png m.fl. | 1280×1024 / 486×450 / 331×339 | Gammel logo (hvit/transparent) | Erstattes av ny profil (SVG fra håndboken) |

**Ubrukte filer** (ikke referert fra noen rutet side – tas ikke videre):
`brands/*` (placeholder-bilder fra malen, bl.a. «bass-for-life»),
`logos/gray-logos/*` (Apple/NASA/Netflix – malrester),
`om-oss/om-oss-*.jpg/png`, `om-oss/team/mathias.png`, `marius.png`,
`teamphoto.jpg` (225×225 ❌ / utkommentert i koden),
`backgrounds/T-Events-index-bg.webp`, `T-event-index-bg-2.webp`,
`om-oss-placeholder.jpg`, `cards/rotating-card-t-event-1/2.webp`,
`hjem/midsection/t-event-hjem-midsection-cropped.jpg`,
`leie/T-Event-utleie-speakers-placeholder.jpg`,
`leie/cards/fronts/t-event-dj-card-front.jpg` (ubeskåret variant),
`leie/cards/backs/t-event-dj-card-back-cropped.jpg` (variant).

## Video

| Fil | Detaljer | Vurdering |
|---|---|---|
| assets/videos/video-compressed.mp4 | 360×640 (stående), 8,4 s, 743 kB, autoplay/muted bakgrunn på Om oss | ❌ For lav oppløsning for ny side. Metadata viser ingen lydkanal (verifiseres med ffprobe før ev. bruk). Innhold/rettigheter ikke avklart. |

Ingen YouTube-lenker eller andre eksterne videoinnbygginger funnet.

## Ting som IKKE skal videreføres

- Canonical/OG mot `t-events.no` / `t-events.pages.dev` og tittelen
  «T-Events» (feil navn).
- Web3Forms-skjemaet (tredjepart, key i koden) – erstattes i fase 3.
- Montserrat-fonten og hele React/MUI/GSAP-stakken.
- Malrester (Brands-siden, gray-logos, ubrukte seksjoner Counters/
  Testimonials/Download m.m.).
- Gamle priser: fantes ikke på siden – ingenting å fjerne.
- Utstyr vi ikke har lenger: ukjent – ingen utstyrsliste fantes på siden;
  tekstenes merkenavn (d&b, L-Acoustics, Martin, Chauvet) må uansett
  omformuleres (innleid utstyr, ikke eget).
