import Link from "next/link";

import { ArticleLayout } from "@/components/article-layout";
import { CardGrid, PageSection } from "@/components/ui";
import { articleCards, guideArticleCards, guideLinks } from "@/lib/content";
import { getPublishedOutrankGuideSummaries } from "@/lib/outrank";
import { buildMetadata } from "@/lib/site";

export const revalidate = 86400;

export const metadata = buildMetadata({
  title: "Guides",
  description:
    "Browse practical AI SEO automation guides for small businesses, agencies, and solo founders.",
  path: "/guides",
});

export default async function GuidesIndexPage() {
  const outrankGuideCards = await getPublishedOutrankGuideSummaries();

  return (
    <ArticleLayout
      eyebrow="Guides"
      title="Practical guides for AI SEO automation"
      intro="This guide hub brings together cornerstone pages and reviewed workflow articles so the site can grow in a structured way instead of becoming a random blog archive."
    >
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
        <p className="text-base leading-7 text-slate-700">
          If you are new to the topic, start with{" "}
          <Link href="/ai-seo-automation-for-small-businesses" className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4">
            the practical guide to AI SEO automation
          </Link>
          . From there, the{" "}
          <Link href="/outrank-so-review" className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4">
            Outrank.so review
          </Link>{" "}
          and{" "}
          <Link href="/how-to-publish-30-seo-articles-per-month" className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4">
            the publishing cadence guide
          </Link>{" "}
          help connect strategy, workflow, and output planning.
        </p>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Guide hub
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          Use the main pages for broader strategy, then move into the dedicated guide articles
          under <span className="font-medium text-slate-900">/guides/[slug]</span> for focused,
          review-ready publishing tests.
        </p>
      </section>
      <PageSection
        eyebrow="Core guides"
        title="Main guide pages"
        intro="These are the existing cornerstone pages that should stay as clean top-level URLs."
      >
        <CardGrid items={guideLinks} />
      </PageSection>
      <PageSection
        eyebrow="Guide articles"
        title="Dedicated guide articles"
        intro="These indexable guide URLs are designed for reviewed Outrank-style publishing tests and future expansion."
      >
        <CardGrid items={guideArticleCards} />
      </PageSection>
      {outrankGuideCards.length ? (
        <PageSection
          eyebrow="Published from Outrank"
          title="Latest published guide articles"
          intro="These published Outrank articles are loaded server-side and rendered under the same `/guides/[slug]` URL structure."
        >
          <CardGrid items={outrankGuideCards} />
        </PageSection>
      ) : null}
      <PageSection
        eyebrow="Supporting reads"
        title="Existing long-tail articles"
        intro="These top-level pages remain available while the new `/guides/[slug]` structure is introduced."
      >
        <CardGrid items={articleCards} />
      </PageSection>
    </ArticleLayout>
  );
}
