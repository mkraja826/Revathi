import PageHero from "./PageHero";

export default function SimplePage({ eyebrow, title, copy, cards }: { eyebrow: string; title: string; copy: string; cards?: { title: string; copy: string }[] }) {
  return (
    <main>
      <PageHero eyebrow={eyebrow} title={title} copy={copy} />
      {cards && (
        <section className="content-section">
          <div className="content-grid">
            {cards.map((card, index) => (
              <article className="content-card" key={card.title}>
                <span className="content-index">0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
