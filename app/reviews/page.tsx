import Link from "next/link";

import { ArticleLayout } from "@/components/article-layout";
import { CardGrid } from "@/components/ui";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Reviews",
  description:
    "Read practical reviews of AI SEO automation tools for small businesses and agencies.",
  path: "/reviews",
});

export default function ReviewsIndexPage() {
  return (
    <ArticleLayout
      eyebrow="Reviews"
      title="Tool reviews with a practical lens"
      intro="Reviews here are meant to help smaller teams understand where a tool fits, where it falls short, and how it should be used inside a broader SEO workflow."
    >
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
        <p className="text-base leading-7 text-slate-700">
          Before choosing a tool, it helps to read{" "}
          <Link href="/ai-seo-automation-for-small-businesses" className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4">
            the main automation guide
          </Link>{" "}
          and browse{" "}
          <Link href="/guides" className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4">
            the full guides hub
          </Link>
          . That context makes it easier to judge whether a product improves your workflow or just adds another drafting layer.
        </p>
      </section>
      <CardGrid
        items={[
          {
            title:
              "Outrank.so Review: Is It a Good AI SEO Automation Tool for Small Businesses?",
            description:
              "A balanced review covering fit, benefits, limitations, and a sensible workflow.",
            href: "/outrank-so-review",
          },
        ]}
      />
    </ArticleLayout>
  );
}
