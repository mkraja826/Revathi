import PageHero from "./PageHero";

export default function SimplePage({ eyebrow, title, copy, cards }: { eyebrow: string; title: string; copy: string; cards?: { title: string; copy: string }[] }) {
  return (
    <main>
      <PageHero eyebrow={eyebrow} title={title} copy={copy} />
      <section className="content-section">
        <p className="page-copy">This page is wired into the production structure. Final photography, verified course details, founder information and testimonials will replace current placeholders as approved assets are supplied.</p>
        {cards && <div className="content-grid" style={{marginTop:40}}>{cards.map((c) => <article className="content-card" key={c.title}><h3>{c.title}</h3><p>{c.copy}</p></article>)}</div>}
      </section>
    </main>
  );
}
