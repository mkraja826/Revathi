import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://revathi.karthikraja826.workers.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/academy",
    "/courses",
    "/courses/professional-makeup",
    "/courses/bridal-makeup",
    "/courses/hair-styling",
    "/courses/saree-draping",
    "/courses/masterclasses",
    "/bridal-studio",
    "/gallery",
    "/student-stories",
    "/testimonials",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/courses" || route === "/bridal-studio" ? 0.9 : 0.7,
  }));
}
