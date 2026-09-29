# Bordly export manifest

Exportert 29. september 2026 fra den nyeste Bordly-masteren i prosjektbiblioteket.

## Innhold
- 1 komplett Bordly HTML-app
- 104 WebP-bilder
- 2 PNG-logo/wordmark-filer
- 1 JPEG-eksempelbilde
- 1 SVG-favicon
- 6 WOFF-fonter
- 2 PDF-eksempler
- Instagram profilmerke + profiltekst

Totalt kontrollert i Git-tree etter eksport: **124 filer**.

Den opprinnelige standalone-masteren inneholdt 116 data-URI-er. De er eksternalisert uten regenerering: binærinnholdet er skrevet direkte fra originalens base64-data til Git-blobs. HTML-en peker deretter på de tilsvarende filene under `/assets/` og `/print/`.

Den statiske masteren finnes både som `index.html` og `public/bordly/index.html`.
