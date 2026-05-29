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
      <CardGrid items={[...guideLinks, ...articleCards]} />
    </ArticleLayout>
  );
}
