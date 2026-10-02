# HAFANOF.cz — Blueprint nového webu

**Projekt:** nový veřejný web Hafanof z.s.  
**Repozitář:** `Ucitel-navodu/Hafanof`  
**Cíl:** nahradit stávající hafanof.cz moderním, rychlým, důvěryhodným a snadno spravovatelným webem bez ztráty relevantního obsahu současného webu.

> Tento dokument je výchozí blueprint. Implementace začne až po potvrzení klíčových rozhodnutí uvedených v sekci „Rozhodovací otázky“.

---

## 1. Výchozí stav

- GitHub repozitář je nyní prázdný; tento blueprint je jeho první projektový dokument.
- Stávající hafanof.cz obsahuje mimo jiné:
  - úvodní stránku,
  - příběh a tým,
  - charitativní obchůdek,
  - psy k adopci a podmínky adopce,
  - patronství / virtuální adopci,
  - Psí přání,
  - příběhy z nových domovů,
  - možnosti pomoci,
  - sponzory a dary,
  - média,
  - aktuality,
  - příjem psů,
  - kontakt,
  - soubory ke stažení.
- Současný web má historický obsah, který je potřeba zachovat, ale ne vše musí zůstat stejně prominentní.
- Před migrací se vytvoří obsahový inventář a každá položka dostane stav: **převést / aktualizovat / archivovat / sloučit / odstranit po schválení**.
- Aktuální právní, kontaktní a platební údaje se nebudou slepě kopírovat ze starého webu; budou ověřeny proti autoritativním podkladům projektu.

---

## 2. Hlavní cíle

### Primární
1. Zvýšit počet kvalitních adopčních poptávek.
2. Zjednodušit finanční a materiální podporu.
3. Důvěryhodně prezentovat Hafanof, tým, historii a transparentnost.
4. Výrazně zlepšit mobilní UX.
5. Zrychlit web a zlepšit SEO.
6. Umožnit jednoduchou budoucí správu obsahu bez nutnosti zásahu programátora do každé změny.

### Sekundární
- prezentace projektu nového azylu / pozemku,
- patronství a Psí přání,
- charitativní merch,
- sponzoring,
- média a reference,
- dlouhodobý archiv příběhů,
- budoucí integrace s interní aplikací Hafanof.

---

## 3. Designový směr

Web má působit jako profesionální moderní nezisková organizace, nikoli jako katalog útulku nebo generická šablona.

### Principy
- emocionální, ale ne manipulativní komunikace,
- reálné fotografie psů; žádné AI náhrady reálných svěřenců,
- dostatek bílého prostoru,
- velká fotografie + krátké sdělení + jasná CTA,
- důraz na důvěru, transparentnost a konkrétní dopad pomoci,
- přirozené mikroanimace, nikoli efekty pro efekt,
- mobile-first.

### Značka
Výchozí vizuální identita:
- primární titulkové písmo: **EB Garamond Bold**,
- sekundární / UI písmo: **Open Sans Regular**,
- zlatý akcent: **#D1AD3B**,
- taupe text/linie: **#5F574D**,
- nude pozadí: **#FBF3E7**,
- bílá: **#FFFFFF**.

Při implementaci zachovat ochranné zóny a správné varianty loga.

### Vizuální charakter
„Moderní editorial × premium charity × skutečný psí azyl.“

Ne sterilní korporát. Ne přeplácaná „tlapková“ grafika. Ne dětský vzhled.

---

## 4. Navrhovaná informační architektura

### Hlavní navigace
- **Domů**
- **Psi**
  - Tlapky k adopci
  - Jak probíhá adopce
  - Příjem psa
  - Příběhy z domovů
- **Pomáhám**
  - Darovat
  - Staň se patronem
  - Psí přání
  - Dobrovolnictví / dočasná péče
  - Sponzorství
- **O Hafanofu**
  - Náš příběh
  - Tým
  - Nový azyl / pozemek
  - Sponzoři
  - Média
  - Transparentnost
- **Aktuality**
- **Obchůdek**
- **Kontakt**

### Footer
- kompletní kontaktní a identifikační údaje,
- sociální sítě,
- bankovní / darovací CTA,
- dokumenty ke stažení,
- ochrana osobních údajů,
- cookies,
- případně obchodní podmínky.

---

## 5. Klíčové stránky

### Domů
1. hero s reálnou silnou fotografií,
2. CTA „Chci adoptovat“ + „Chci pomoct“,
3. psi hledající domov,
4. projekt nového azylu,
5. konkrétní možnosti pomoci,
6. Psí přání / patronství,
7. důvěryhodnost a dopad,
8. poslední příběhy / aktuality,
9. partneři,
10. závěrečné CTA.

### Psi k adopci
- vizuální karty,
- filtry,
- stav psa,
- výrazný detail každého psa,
- zdravotní a behaviorální informace,
- vhodnost k dětem / psům / kočkám pouze pokud je údaj ověřený,
- adopční CTA,
- propojení na adopční formulář.

### Detail psa
- fotografie,
- příběh,
- základní fakta,
- povaha,
- zdravotní stav,
- ideální domov,
- adopční proces,
- možnost patronství,
- sdílení.

### Pomoc
Jedna silná vstupní stránka s volbou:
- jednorázový dar,
- pravidelný dar,
- pozemek / nový azyl,
- patronství,
- Psí přání,
- materiální pomoc,
- dočasná péče,
- dobrovolnictví,
- firemní spolupráce.

### Transparentnost
Nová důvěryhodnostní stránka:
- oficiální údaje,
- bankovní účet,
- výroční / finanční dokumenty, pokud jsou zveřejnitelné,
- jak jsou dary používány,
- přehled partnerů,
- odkazy na veřejné rejstříky.

---

## 6. Obsahový model

Obsah nebude natvrdo rozházený v komponentách.

Navržené datové kolekce:
- `dogs`
- `team`
- `articles`
- `success-stories`
- `sponsors`
- `media`
- `downloads`
- `shop-products`
- `wishes`
- `site-settings`

V první verzi budou data verzovaná v GitHubu jako MDX/JSON/YAML. Architektura bude připravena na budoucí CMS nebo propojení s aplikací Hafanof.

---

## 7. Doporučený technologický stack

### Frontend
- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- komponentový design systém
- optimalizace obrázků přes Next Image
- animace pouze střídmě (Motion / CSS)

### Obsah
- MDX + strukturovaná data v repozitáři
- později možnost připojit headless CMS nebo interní Hafanof API

### Formuláře
- validace přes Zod
- ochrana proti spamu
- formuláře budou připravené tak, aby šly později napojit na interní systém / e-mail / databázi.

### Hosting
Preferovaný cíl: **Vercel**.

### Kvalita
- ESLint
- Prettier
- TypeScript strict
- Lighthouse kontrola
- základní automatické testy
- GitHub Actions pro build/lint

---

## 8. SEO a dohledatelnost

- zachovat důležité URL nebo vytvořit 301 redirect mapu,
- title + description pro každou stránku,
- Open Graph / sociální náhledy,
- sitemap.xml,
- robots.txt,
- canonical URL,
- strukturovaná data,
- optimalizované fotografie a alt texty,
- správná hierarchie H1–H3,
- lokální témata: Litvínov / Most / Ústecký kraj jen tam, kde jsou fakticky relevantní.

Před přepnutím domény vznikne **redirect-manifest** ze starého webu na nový, aby nedošlo ke zbytečné ztrátě SEO.

---

## 9. Přístupnost

Cíl: prakticky dodržet WCAG 2.2 AA:
- kontrast,
- klávesová navigace,
- focus states,
- alt texty,
- formulářové labely a chyby,
- reduced motion,
- čitelná typografie,
- dostatečně velké dotykové cíle.

---

## 10. GDPR, cookies a právní minimum

- analytické / marketingové skripty nespouštět bez odpovídajícího souhlasu,
- jednoduchý cookie consent,
- zásady ochrany osobních údajů,
- bezpečné formuláře,
- minimalizace sbíraných osobních údajů,
- e-shopové dokumenty podle skutečného budoucího způsobu prodeje a plateb.

Před go-live bude proveden samostatný právní checklist.

---

## 11. Fotografie a média

Zdroje v pořadí priority:
1. originály v projektových úložištích,
2. originály / kvalitní zdroje v Hafanof materiálech,
3. fotografie ze současného hafanof.cz, pokud originál není dostupný.

Při migraci se vytvoří manifest:
- zdroj,
- původní URL,
- nový název souboru,
- použití,
- autor / licence, pokud je známa,
- alt text.

Fotky psů nebudou retušovány způsobem, který mění jejich skutečný vzhled.

---

## 12. Google Drive — pracovní prostor

V rámci `HAFANOF z.s./00_Web` bude pracovní struktura:

- `01_Audit` — inventář starého webu, SEO, redirecty
- `02_Content` — pracovní texty a migrace
- `03_Assets` — získané fotografie / grafika
- `04_Design` — wireframy, vizuální návrhy, reference
- `05_Legal` — GDPR, cookies, obchodní podmínky, právní checklist
- `06_Archive` — původní / nepoužité podklady

GitHub zůstává zdrojem pravdy pro výsledný web. Drive je mezisklad a pracovní archiv.

---

## 13. Navržená struktura repozitáře

```
/
├─ app/
│  ├─ psi/
│  ├─ pomaham/
│  ├─ o-nas/
│  ├─ aktuality/
│  ├─ obchod/
│  └─ kontakt/
├─ components/
│  ├─ ui/
│  ├─ layout/
│  ├─ dogs/
│  └─ sections/
├─ content/
│  ├─ dogs/
│  ├─ articles/
│  ├─ stories/
│  └─ site/
├─ public/
│  ├─ brand/
│  ├─ dogs/
│  ├─ team/
│  └─ media/
├─ lib/
├─ styles/
├─ docs/
│  ├─ content-inventory.md
│  ├─ redirects.md
│  ├─ design-system.md
│  └─ legal-checklist.md
└─ README.md
```

---

## 14. Implementační plán

### Fáze 0 — Discovery / audit
- projít celý starý web,
- vytvořit seznam URL a obsahu,
- stáhnout dostupné fotografie a dokumenty,
- zachytit staré SEO metadata,
- označit duplicity / zastaralý obsah / nejasnosti,
- zkontrolovat projektové podklady.

**Výstup:** content inventory + asset manifest + redirect draft.

### Fáze 1 — Foundation
- inicializace Next.js projektu,
- TypeScript / Tailwind / lint,
- základní design tokens,
- fonty a loga,
- layout,
- header / footer,
- responsive navigace,
- CI build.

**Výstup:** funkční skeleton webu.

### Fáze 2 — Design system + homepage
- komponenty,
- karty,
- tlačítka,
- typografie,
- formulářové prvky,
- hero,
- homepage.

**Výstup:** první vizuálně reprezentativní verze.

### Fáze 3 — Adopce
- datový model psa,
- seznam psů,
- filtry,
- detail psa,
- adopční proces a CTA.

### Fáze 4 — Pomoc a fundraising
- dary,
- nový azyl / pozemek,
- patronství,
- Psí přání,
- dobrovolnictví / dočasky,
- sponzoring.

### Fáze 5 — Obsah a historie
- tým a příběh,
- příběhy z domovů,
- aktuality / blog,
- sponzoři,
- média,
- dokumenty,
- příjem psů,
- kontakt.

### Fáze 6 — Obchůdek
- migrace produktového obsahu,
- katalog,
- košík / objednávkový proces podle potvrzeného obchodního modelu.

### Fáze 7 — SEO / GDPR / QA
- metadata,
- structured data,
- sitemap,
- redirecty,
- cookies,
- právní stránky,
- Lighthouse,
- přístupnost,
- test formulářů,
- kontrola mobilu/tabletu/desktopu.

### Fáze 8 — Preview
- Vercel preview,
- kontrola týmem Hafanof,
- issue list,
- opravy.

### Fáze 9 — Go-live
- finální záloha Webnode,
- DNS/doména,
- redirecty,
- produkční build,
- kontrola indexace,
- monitoring po spuštění.

---

## 15. Git workflow

Po inicializačním commitu:
- `main` = stabilní stav,
- implementace přes pracovní větev `website-v1`,
- logické commity po jednotlivých fázích,
- před významnými změnami pull request,
- žádné tajné klíče nebo osobní data do repozitáře,
- `.env.example` bez skutečných secretů.

---

## 16. Definition of Done

Web je připraven k nahrazení hafanof.cz, když:

- všechny relevantní stránky starého webu mají cílové umístění,
- není ztracen důležitý obsah,
- aktuální právní a kontaktní údaje jsou ověřené,
- fungují adopční a kontaktní cesty,
- fungují platné formy podpory,
- mobilní verze je plnohodnotná,
- Lighthouse nemá zásadní chyby,
- nejsou rozbité odkazy,
- jsou připravené redirecty,
- GDPR/cookies odpovídají skutečně nasazeným službám,
- tým schválí preview,
- existuje záloha původního webu před změnou DNS.

---

# Rozhodovací otázky — /grill-me

Než začnu stavět produkční podobu, potřebuji potvrdit následující. U většiny mám doporučenou výchozí volbu; pokud odpovíš „ber doporučení“, použiji ji.

### A. Směr projektu
1. Má být nový web jen vizuálně modernější náhrada, nebo může výrazně změnit strukturu a UX, pokud zachováme všechen relevantní obsah?  
   **Doporučení:** výrazně přepracovat UX, obsah zachovat.

2. Chceš zachovat název a hlavní slogan **„Láska, co vrtí ocasem“** jako dominantní značku?  
   **Doporučení:** ano.

3. Má web působit více **prémiově/elegantně**, nebo více **útulkově/emocionálně**?  
   **Doporučení:** 70 % elegantní/profesionální, 30 % emoční.

### B. Adopce
4. Má být seznam psů spravovaný zatím ručně z GitHub dat, nebo už v první verzi vytvořit jednoduchou administraci?  
   **Doporučení:** v1 data v repu, architekturu připravit na budoucí administraci / Hafanof app.

5. Má adopční formulář zůstat externí Google Form, nebo ho převést přímo do webu?  
   **Doporučení:** v první iteraci může zůstat externí, poté nativní formulář.

6. Chceš u psů stavový workflow např. **k adopci / v léčbě / rezervovaný / adoptovaný / dlouhodobý svěřenec**?  
   **Doporučení:** ano.

### C. Dary
7. Má mít hlavní CTA přímou možnost zobrazit QR kód a číslo účtu bez odchodu ze stránky?  
   **Doporučení:** ano.

8. Chceš připravit i jednoduchý „generátor daru“ — částka → QR platba se zprávou/VS?  
   **Doporučení:** ano, pokud bude potvrzen způsob párování.

9. Má mít projekt nového azylu vlastní výraznou landing page s progressem, milníky a historií?  
   **Doporučení:** jednoznačně ano.

### D. E-shop
10. Má nový web skutečně provozovat vlastní košík a objednávky, nebo může obchůdek v první fázi používat jednodušší externí prodejní/objednávkový mechanismus?  
    **Nutné rozhodnutí před fází 6.**

11. Jaké platební metody mají být podporovány? Převod / QR / karta / dobírka?

12. Má být sklad a produkty spravován ručně, nebo má být připravená budoucí administrace?

### E. Obsah
13. Chceš opravdu převést **všechny staré články**, nebo kompletní historii archivovat a na hlavním webu zobrazit jen významné články?  
    **Doporučení:** vše migrovat kvůli historii/SEO, ale starší obsah vizuálně oddělit jako archiv.

14. Staré názvy a historické označení organizace/depozita: zachovat v historických článcích přesně, nebo doplnit kontextovou poznámku?  
    **Doporučení:** historický text neměnit bez důvodu, ale doplnit kontext tam, kde by mohl mást.

### F. Fotografie
15. Mám při migraci automaticky stáhnout použitelné fotografie ze současného webu a uložit je do Drive/GitHubu?  
    **Doporučení:** ano, s manifestem původu.

16. Chceš přednostně použít autentické fotky i tehdy, když nejsou technicky dokonalé?  
    **Doporučení:** ano.

### G. Správa webu
17. Kdo bude po spuštění nejčastěji přidávat psy a aktuality: ty, Niki, Tereza, nebo všichni? To ovlivní návrh budoucí administrace.

18. Potřebujete, aby se změny daly dělat z mobilu bez GitHubu?  
    **Doporučení:** dlouhodobě ano.

### H. Nasazení
19. Souhlasíš s Vercel jako hostingem a GitHubem jako zdrojem deploye?  
    **Doporučení:** ano.

20. Má být první verze nasazená na preview URL ještě dlouho před změnou hafanof.cz?  
    **Doporučení:** ano.

### I. Jazyk
21. Jen čeština, nebo připravit architekturu na CZ/EN?  
    **Doporučení:** CZ nyní, kód připravit tak, aby EN šlo přidat bez přestavby.

### J. Míra autonomie
22. Při implementaci chceš:
   - **A:** každý větší vizuální krok schválit,
   - **B:** nechat mě samostatně dokončit jednotlivé fáze a vždy ti předložit výsledek,
   - **C:** maximální autonomie až do funkčního preview.

   **Doporučení:** B.

---

## Výchozí pracovní pravidlo

Dokud nebude rozhodnuto jinak:
- nic ze stávajícího veřejného webu nebude považováno za „zbytečné“ bez evidence v migračním inventáři,
- aktuální identifikační a platební údaje se ověří před publikací,
- živá doména se nebude měnit bez explicitního schválení,
- práce bude průběžně ukládána do GitHubu a pracovní podklady do `HAFANOF z.s./00_Web`.
