import { ArticleLayout } from "@/components/article-layout";
import { CardGrid } from "@/components/ui";
import { comparisonLinks } from "@/lib/content";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Comparisons",
  description:
    "Explore comparison pages for AI SEO automation tools and workflow-focused content systems.",
  path: "/comparisons",
});

export default function ComparisonsIndexPage() {
  return (
    <ArticleLayout
      eyebrow="Comparisons"
      title="Comparison pages ready for expansion"
      intro="These pages are structured to grow into deeper comparisons over time while already giving search engines and visitors a clear topical map."
    >
      <CardGrid items={comparisonLinks} />
    </ArticleLayout>
  );
}
