# Bordly

Bordly er prosjektet for personlige bordkort, menyer, skilt, invitasjoner og festdetaljer.

## Kjør lokalt

```bash
npm install
npm run dev
```

## Verifiser før endringer merges

```bash
npm run verify:static
npm run build
```

`verify:static` kontrollerer at:

- `index.html` finnes som eneste Bordly-master
- den gamle duplikatkopien under `public/bordly/` ikke kommer tilbake
- konkrete referanser til `/assets/*` og `/print/*` faktisk finnes i `public/`

Den samme kontrollen kjøres automatisk i GitHub Actions før produksjonsbuild.

## Struktur

- `index.html` – hovedappen og eneste Bordly-master
- `public/assets/` – logo, fonter og produkt-/miljøbilder
- `public/print/` – PDF-eksempler brukt i løsningen
- `brand/` – profilmerke og Instagram-oppsett
- `scripts/verify-static.mjs` – integritetskontroll for den statiske eksporten
- `.github/workflows/build.yml` – CI-verifisering og produksjonsbuild

Den opprinnelige standalone-filen fra arbeidsprosessen er eksportert tapsfritt på innholdsnivå: innebygde data-URI-er er lagt ut som ordinære filer, og HTML-en peker på de samme originale byte-dataene.

## Videre utvikling

GitHub `main` er source of truth for videre arbeid. Nye endringer bør gå via branch og pull request slik at integritetskontroll og build kjøres før merge.
