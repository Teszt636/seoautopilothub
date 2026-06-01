import type { MetadataRoute } from "next";

import { articles } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

const staticRoutes = [
  "/",
  "/guides",
  "/reviews",
  "/outrank-so-review",
  "/ai-seo-automation-for-small-businesses",
  "/best-ai-seo-automation-tools-for-small-businesses",
  "/best-seo-autopilot-tools-for-agencies",
  "/about",
  "/affiliate-disclosure",
  "/privacy-policy",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/${article.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
