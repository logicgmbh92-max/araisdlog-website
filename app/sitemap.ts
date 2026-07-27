import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.araisdlog.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/terms`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/privacy`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/disclaimer`, changeFrequency: "monthly", priority: 0.4 },
  ];
}
