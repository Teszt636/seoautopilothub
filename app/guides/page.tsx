import Link from "next/link";

import { ArticleLayout } from "@/components/article-layout";
import { CardGrid } from "@/components/ui";
import { articleCards, guideLinks } from "@/lib/content";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Guides",
  description:
    "Browse practical AI SEO automation guides for small businesses, agencies, and solo founders.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <ArticleLayout
      eyebrow="Guides"
      title="Practical guides for AI SEO automation"
      intro="These guides focus on usable workflows for smaller teams that need to publish more consistently without relying on hype or fully automated shortcuts."
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
      <CardGrid items={[...guideLinks, ...articleCards]} />
    </ArticleLayout>
  );
}
