# Bordly export manifest

Eksportert 29. september 2026 fra den nyeste Bordly-masteren i prosjektbiblioteket.

## Innhold

- 1 komplett Bordly HTML-app: `index.html`
- 104 WebP-bilder
- 2 PNG-logo/wordmark-filer
- 1 JPEG-eksempelbilde
- 1 SVG-favicon
- 6 WOFF-fonter
- 2 PDF-eksempler
- Instagram profilmerke + profiltekst

Den opprinnelige standalone-masteren inneholdt 116 data-URI-er. De er eksternalisert uten regenerering: binærinnholdet ble skrevet direkte fra originalens base64-data til Git-blobs. HTML-en peker deretter på tilsvarende filer under `/assets/` og `/print/`.

## Stabilisering

`index.html` er eneste master. Den tidligere identiske kopien `public/bordly/index.html` er fjernet for å unngå at to versjoner kan drive fra hverandre.

Automatisk kontroll ligger i `scripts/verify-static.mjs` og kjøres i GitHub Actions før hver build på pull requests og pushes til `main`.

## Verifisering

- 104 WebP, 2 PNG, 1 JPEG, 2 SVG, 6 WOFF og 2 PDF ligger i repoet
- konkrete `/assets/*`- og `/print/*`-referanser i Bordly-masteren må matche filer under `public/`
- dynamiske template-referanser valideres ikke som bokstavelige filnavn
- gjenværende tekst `data:font/woff;base64,` er runtime-kode for PDF/SVG-rasterisering, ikke en innebygd asset
