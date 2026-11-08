import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.neocle.in",
      lastModified: new Date("2026-11-08"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
