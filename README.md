# Bordly

Bordly er prosjektet for personlige bordkort, menyer, skilt, invitasjoner og festdetaljer.

## Kjør lokalt

```bash
npm install
npm run dev
```

Produksjonsbuild:

```bash
npm run build
```

## Struktur

- `index.html` – hovedappen / den eksporterte Bordly-masteren
- `public/assets/` – logo, fonter og produkt-/miljøbilder
- `public/print/` – PDF-eksempler brukt i løsningen
- `public/bordly/index.html` – samme komplette Bordly-master tilgjengelig som statisk kopi
- `brand/` – profilmerke og Instagram-oppsett

Den store standalone-filen fra arbeidsprosessen er eksportert tapsfritt på innholdsnivå: innebygde data-URI-er er lagt ut som ordinære filer, og HTML-en peker på de samme originale byte-dataene.

## Videre utvikling

GitHub `main` er nå source of truth for videre arbeid. Endringer kan gjøres uten Lovable-kreditter.
