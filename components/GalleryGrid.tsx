"use client";

import { useEffect, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  category: string;
};

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const filtered = filter === "All" ? items : items.filter((item) => item.category === filter);

  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [active]);

  return (
    <>
      <div className="gallery-filter-wrap">
        <span className="gallery-filter-label">FILTER</span>
        <div className="gallery-filter" aria-label="Gallery filters">
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? "is-active" : ""}
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
        </div>
      </div>

      <div className="portfolio-grid">
        {filtered.map((item, index) => (
          <button
            key={item.src + index}
            className={"portfolio-item portfolio-item-" + ((index % 5) + 1)}
            onClick={() => setActive(item)}
            data-cursor="VIEW"
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span><small>{item.category}</small><strong>{item.label}</strong></span>
          </button>
        ))}
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.alt} onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Close image" autoFocus onClick={() => setActive(null)}>×</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            <figcaption><span>{active.category}</span><strong>{active.label}</strong></figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
