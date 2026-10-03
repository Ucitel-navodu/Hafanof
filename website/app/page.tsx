const nav = ["Psi k adopci", "Jak pomoci", "O nás", "Aktuality", "Kontakt"];

export default function HomePage() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#" aria-label="Hafanof – domů">
          <span className="brandMark" aria-hidden="true">♡</span>
          <span>
            <strong>HAFANOF</strong>
            <small>Láska, co vrtí ocasem</small>
          </span>
        </a>

        <nav className="nav" aria-label="Hlavní navigace">
          {nav.map((item) => (
            <a href="#" key={item}>{item}</a>
          ))}
        </nav>

        <a className="button buttonGold buttonSmall" href="#pomoc">
          Chci pomoct
        </a>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <span className="eyebrow">HAFANOF z.s.</span>
          <h1>Každý pes má svůj příběh. Pomáháme mu napsat další kapitolu.</h1>
          <p>
            Zachraňujeme psy v nouzi, poskytujeme jim péči a hledáme nové,
            bezpečné domovy.
          </p>
          <div className="actions">
            <a className="button buttonGold" href="#adopce">Poznat naše psy</a>
            <a className="button buttonOutline" href="#pomoc">Pomoci Hafanofu</a>
          </div>
        </div>

        <div className="heroVisual" aria-label="Místo pro reálnou fotografii psa">
          <div className="photoPlaceholder">
            <span>Reálná fotografie svěřence</span>
          </div>
        </div>
      </section>

      <section className="journey" aria-label="Jak pomáháme">
        {[
          ["01", "Záchrana", "Pomáháme psům v těžkých životních situacích."],
          ["02", "Bezpečí", "Poskytujeme dočasnou péči a klidné zázemí."],
          ["03", "Péče", "Veterinární péče, socializace a příprava na nový život."],
          ["04", "Nový domov", "Hledáme rodinu, kde může pes skutečně zůstat."]
        ].map(([n, title, text]) => (
          <article className="journeyItem" key={n}>
            <span>{n}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section" id="adopce">
        <div className="sectionIntro">
          <span className="eyebrow">Tlapky k adopci</span>
          <h2>Psi, kteří čekají na svůj domov</h2>
          <p>
            Tady budou načítané skutečné profily aktuálních svěřenců Hafanofu.
          </p>
        </div>

        <div className="cards">
          {["Pes 01", "Pes 02", "Pes 03"].map((name) => (
            <article className="dogCard" key={name}>
              <div className="dogPhoto">Fotografie</div>
              <div className="dogBody">
                <span className="status">K adopci</span>
                <h3>{name}</h3>
                <a href="#">Poznat příběh →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="help" id="pomoc">
        <div>
          <span className="eyebrow">Pomoc, která má smysl</span>
          <h2>Pomozte nám dávat psům druhou šanci.</h2>
          <p>
            Nová verze webu zde nabídne jednoduchou cestu k darování,
            patronství, Psím přáním, dočasné péči i dobrovolnictví.
          </p>
        </div>
        <div className="donationCard">
          <span>Bankovní účet</span>
          <strong>2003564038 / 2010</strong>
          <p>QR platba a transparentní informace doplníme z ověřených podkladů.</p>
        </div>
      </section>

      <footer className="footer">
        <strong>HAFANOF z.s.</strong>
        <span>Láska, co vrtí ocasem.</span>
        <span>Pracovní prototyp nového hafanof.cz</span>
      </footer>
    </main>
  );
}
