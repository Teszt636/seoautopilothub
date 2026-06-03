import type { MetadataRoute } from "next";

import { articles, publishedGuideArticles } from "@/lib/content";
import { getPublishedOutrankGuideSummaries } from "@/lib/outrank";
import { absoluteUrl } from "@/lib/site";

export const revalidate = 86400;

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
  "/outrank-so-vs-surfer-seo",
  "/outrank-so-vs-koala-writer",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const manualGuideSlugs = new Set(publishedGuideArticles.map((article) => article.slug));
  const outrankGuideArticles = (await getPublishedOutrankGuideSummaries()).filter(
    (article) => !manualGuideSlugs.has(article.slug),
  );

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
    ...publishedGuideArticles.map((article) => ({
      url: absoluteUrl(`/guides/${article.slug}`),
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
    ...outrankGuideArticles.map((article) => ({
      url: absoluteUrl(`/guides/${article.slug}`),
      lastModified: new Date(article.updatedAt),
      changeFrequency: "daily" as const,
      priority: 0.7,
    })),
  ];
}
