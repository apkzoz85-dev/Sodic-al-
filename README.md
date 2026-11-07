# SODIC Projects — Hub + Project Extensions

Static Next.js 16 / React 19 / Tailwind 4 landing site.

## Routes
| Route | Page |
|---|---|
| `/` | Hub — all 5 projects (West + East), comparison table, lead form |
| `/vye` | VYE — New Zayed |
| `/karmell` | Karmell — New Zayed |
| `/the-estates` | The Estates / Residences — New Zayed |
| `/villette` | Villette — New Cairo |
| `/sodic-east` | SODIC East — New Heliopolis |
| `/thank-you` | noindex, form redirect target |
| `/about` `/privacy` `/disclaimer` | compliance pages |

## Before launch — edit `lib/site.ts`
- `web3formsKey` — Web3Forms access key
- `gtagId` + `conversions.form / whatsapp / call`
- `domain`, `agencyUrl`

## Prices — edit `lib/projects.ts`
All prices are indicative; update from the latest price list.

## Images (optional — gradient fallback if missing)
```
public/images/hero.jpg               (hub hero)
public/images/<slug>/hero.jpg        (project hero)
public/images/<slug>/card.jpg        (project card)
public/images/<slug>/about.jpg       (about section)
```
slugs: vye, karmell, the-estates, villette, sodic-east

## Run
```
npm install
npm run dev
npm run build
```
