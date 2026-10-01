# Cloudflare Pages – oppsett (kun forhåndsvisning, fase 0)

Dette gjør du i Cloudflare-dashbordet. **Ikke koble t-event.no** – det skjer
først i fase 5 etter uttrykkelig godkjenning.

## 1. Opprett Pages-prosjektet

1. Logg inn på https://dash.cloudflare.com
2. Gå til **Workers & Pages → Create → Pages → Connect to Git**.
3. Autoriser Cloudflare mot GitHub-kontoen `t-event` hvis du ikke har gjort
   det, og gi tilgang til repoet **t-event/t-event-nettside** (du kan gi
   tilgang kun til dette repoet).
4. Velg repoet og klikk **Begin setup**.
5. Innstillinger:
   - **Project name:** `t-event-nettside` (eller det Cloudflare foreslår –
     noter hva det blir, adressen blir `<prosjektnavn>.pages.dev`)
   - **Production branch:** `main`
   - **Build command:** `npm run build` (kan stå tomt til fase 3 – repoet har
     ingen byggbar kode ennå; da velger du «None»/tomt og vi fyller inn senere)
   - **Build output directory:** `dist` (Astro sin standard; settes i fase 3
     hvis du hopper over det nå)
6. Klikk **Save and Deploy**.

> Automatisk deploy fra `main` og forhåndsvisninger («Preview deployments»)
> for pull requests er standard på – sjekk under
> **Settings → Builds & deployments** at «Preview deployments» står på
> «All non-Production branches».

## 2. Noter prosjektadressen

Skriv ned den faktiske adressen (`<PROSJEKT>.pages.dev`) og si den til Claude,
slik at den logges i `memory/decisions.md`.

## 3. Miljøvariabler (Settings → Environment variables)

Settes først når skjemafunksjonen bygges i fase 3, men strukturen er:

| Variabel | Production | Preview |
|---|---|---|
| `BOOKING_MOTTAKER` | `mathias@t-event.no` | `mathias@t-event.no` (testmeldinger merkes `[TEST]` i emnet av koden) |
| `RESEND_API_KEY` (el.l.) | (prod-nøkkel) | (test-/samme nøkkel) |
| `TURNSTILE_SECRET` | (prod-secret) | (test-secret) |

API-nøkler legges **kun** her – aldri i repoet.

## 4. noindex på forhåndsvisning og pages.dev

Dette gjøres i koden (fase 3), ikke i dashbordet: bygget legger
`X-Robots-Tag: noindex` i `_headers` og i alle Pages Function-svar så lenge
deployet ikke er produksjonsdomenet t-event.no. Frem til fase 5 får dermed
**alle** deploys noindex. Nevnt her så du vet at det er planlagt.

## 5. Det du IKKE skal gjøre nå

- Ikke legg til «Custom domain» (t-event.no) – fase 5.
- Ikke endre DNS for t-event.no – fase 5.
- Ikke slå på/av Cloudflares AI-bot-blokkering ennå – vurderes mot
  robots.txt i fase 5.
