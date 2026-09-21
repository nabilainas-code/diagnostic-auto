import type { MetadataRoute } from "next";
import { codes, categories } from "@/data/codes";
import { pannes } from "@/data/pannes";

const BASE_URL = "https://panne-resolue.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/vehicule`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/pannes`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const categorieRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE_URL}/codes/categorie/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const codeRoutes: MetadataRoute.Sitemap = codes.map((c) => ({
    url: `${BASE_URL}/codes/${c.code.toLowerCase()}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const panneRoutes: MetadataRoute.Sitemap = pannes.map((p) => ({
    url: `${BASE_URL}/pannes/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...categorieRoutes, ...codeRoutes, ...panneRoutes];
}
