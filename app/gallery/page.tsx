import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  alternates: { canonical: "https://revathi.karthikraja826.workers.dev/gallery/" },
  title: "Gallery | Bridal Makeup & Academy",
  description: "Explore the Revathi Blush visual direction for bridal artistry, makeup training, student work and styling.",
};

const items = [
  { src: "https://images.unsplash.com/photo-1779253688787-7d860ad39fe0?auto=format&fit=crop&w=1400&q=82", alt: "Bridal makeup inspiration", label: "Bridal portrait", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1773688189374-17ba02d6b1b4?auto=format&fit=crop&w=1400&q=82", alt: "Makeup artist at work", label: "Artist at work", category: "Academy" },
  { src: "https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=1400&q=82", alt: "Bridal finishing detail", label: "Finishing detail", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1773688189408-f8f8c12c5ae9?auto=format&fit=crop&w=1400&q=82", alt: "Makeup training session", label: "Practice session", category: "Academy" },
  { src: "https://images.unsplash.com/photo-1781187009755-0cbc0c4cd2b3?auto=format&fit=crop&w=1400&q=82", alt: "Beauty portrait", label: "Occasion look", category: "Portfolio" },
  { src: "https://images.unsplash.com/photo-1773688199710-040ad7ddac18?auto=format&fit=crop&w=1400&q=82", alt: "Makeup technique session", label: "Technique", category: "Academy" },
  { src: "https://images.unsplash.com/photo-1779253688787-7d860ad39fe0?auto=format&fit=crop&w=1100&q=76", alt: "Bridal beauty look", label: "Bridal finish", category: "Portfolio" },
  { src: "https://images.unsplash.com/photo-1781077126479-437220427c93?auto=format&fit=crop&w=1100&q=76", alt: "Bridal styling detail", label: "Detail study", category: "Portfolio" },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="PORTFOLIO"
        title="A closer look at the aesthetic."
        copy="Bridal beauty, academy practice and finishing details that reflect the visual direction of Revathi Blush."
        hideGallery
      />
      <section className="inner-section gallery-page-section">
        <GalleryGrid items={items} />
      </section>
    </main>
  );
}
