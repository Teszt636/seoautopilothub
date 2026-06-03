import "server-only";

import { cache } from "react";
import sanitizeHtml from "sanitize-html";
import { BlogClient, OutrankBlogRequestError } from "outrank-next-js-blog";
import type { Article, ArticleSummary } from "outrank-next-js-blog";

import type { FaqItem, LinkItem } from "@/lib/content";

const OUTRANK_ARTICLE_LIMIT = 100;
const CLEAN_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type OutrankGuideArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  tags: string[];
  imageUrl?: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  html: string;
  faqs: FaqItem[];
  recommendedReads: LinkItem[];
};

export type OutrankGuideSummary = {
  slug: string;
  title: string;
  description: string;
  href: string;
  updatedAt: string;
};

function hasOutrankApiKey() {
  return Boolean(process.env.OUTRANK_API_KEY?.trim());
}

function getClient() {
  const apiKey = process.env.OUTRANK_API_KEY?.trim();

  if (!apiKey) {
    return null;
  }

  return new BlogClient(apiKey, { timeoutMs: 15000 });
}

function isCleanGuideSlug(slug: string) {
  return CLEAN_SLUG_PATTERN.test(slug);
}

function toSafeDescription(description: string | undefined) {
  return sanitizeHtml(description || "", { allowedTags: [], allowedAttributes: {} }).trim();
}

function sanitizeArticleHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      "p",
      "br",
      "strong",
      "b",
      "em",
      "i",
      "u",
      "s",
      "blockquote",
      "code",
      "pre",
      "h2",
      "h3",
      "h4",
      "ul",
      "ol",
      "li",
      "a",
      "img",
      "figure",
      "figcaption",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
    ],
    allowedAttributes: {
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading"],
      th: ["colspan", "rowspan"],
      td: ["colspan", "rowspan"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: {
      img: ["http", "https"],
    },
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", {
        rel: "noopener noreferrer",
      }),
      img: sanitizeHtml.simpleTransform("img", {
        loading: "lazy",
      }),
    },
  });
}

function logSafeOutrankError(context: string, error: unknown) {
  if (error instanceof OutrankBlogRequestError) {
    console.warn(
      `[outrank] ${context} failed${error.status ? ` with status ${error.status}` : ""}.`,
    );
    return;
  }

  console.warn(`[outrank] ${context} failed.`);
}

function mapSummary(article: ArticleSummary): OutrankGuideSummary | null {
  if (!isCleanGuideSlug(article.slug)) {
    return null;
  }

  return {
    slug: article.slug,
    title: article.title,
    description: toSafeDescription(article.meta_description),
    href: `/guides/${article.slug}`,
    updatedAt: article.updated_at,
  };
}

function mapArticle(article: Article): OutrankGuideArticle | null {
  if (!isCleanGuideSlug(article.slug)) {
    return null;
  }

  const metaDescription = toSafeDescription(article.meta_description);

  return {
    slug: article.slug,
    title: article.title,
    metaDescription,
    intro: metaDescription,
    tags: article.tags || [],
    imageUrl: article.image_url || undefined,
    publishedAt: article.created_at,
    updatedAt: article.updated_at,
    readingTimeMinutes: article.reading_time_minutes,
    html: sanitizeArticleHtml(article.html),
    faqs: [],
    recommendedReads: [
      {
        title: "Outrank.so Review",
        description: "Review how Outrank.so fits into a controlled AI SEO publishing workflow.",
        href: "/outrank-so-review",
      },
      {
        title: "AI SEO Automation for Small Businesses",
        description: "Use the broader framework to keep automated publishing reviewed and useful.",
        href: "/ai-seo-automation-for-small-businesses",
      },
    ],
  };
}

export const getPublishedOutrankGuideSummaries = cache(async () => {
  if (!hasOutrankApiKey()) {
    return [] satisfies OutrankGuideSummary[];
  }

  const client = getClient();

  if (!client) {
    return [] satisfies OutrankGuideSummary[];
  }

  try {
    const articles = await client.getAllArticles(OUTRANK_ARTICLE_LIMIT);

    return articles
      .map(mapSummary)
      .filter((article): article is OutrankGuideSummary => Boolean(article));
  } catch (error) {
    logSafeOutrankError("article list request", error);
    return [] satisfies OutrankGuideSummary[];
  }
});

export const getPublishedOutrankGuideArticle = cache(async (slug: string) => {
  if (!hasOutrankApiKey() || !isCleanGuideSlug(slug)) {
    return null;
  }

  const client = getClient();

  if (!client) {
    return null;
  }

  try {
    const article = await client.getArticle(slug);

    return article ? mapArticle(article) : null;
  } catch (error) {
    logSafeOutrankError(`article request for slug "${slug}"`, error);
    return null;
  }
});
