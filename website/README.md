# HAFANOF.cz — nový web

Pracovní implementace nového veřejného webu Hafanof z.s.

## Stav
- pracovní větev: `website-v1`
- produkční web zatím zůstává beze změny
- cílový deployment: GitHub → Cloudflare preview → po schválení hafanof.cz
- tato složka je oddělená od původního Webnode webu

## Technologie
- Next.js
- React
- TypeScript
- vlastní design systém podle brand manuálu Hafanof

## Základ značky
- EB Garamond — titulky
- Open Sans — běžný text
- Gold: `#D1AD3B`
- Taupe: `#5F574D`
- Nude: `#FBF3E7`
- White: `#FFFFFF`

## Lokální spuštění

```bash
cd website
npm install
npm run dev
```

Potom otevřít `http://localhost:3000`.

## Pravidlo pro obsah
Do veřejné verze nepoužívat vymyšlené psy, čísla, partnery ani fotografie. Reálný obsah bude doplňován z ověřených podkladů Hafanof.
