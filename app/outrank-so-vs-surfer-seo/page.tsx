import { ArticleLayout } from "@/components/article-layout";
import { ProseBlock } from "@/components/ui";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Outrank.so vs Surfer SEO",
  description:
    "A comparison placeholder for small businesses and agencies evaluating Outrank.so vs Surfer SEO.",
  path: "/outrank-so-vs-surfer-seo",
  type: "article",
  noIndex: true,
});

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="Comparison"
      title="Outrank.so vs Surfer SEO"
      intro="This comparison page is set up as an SEO-ready scaffold for a fuller editorial breakdown of workflow fit, optimization depth, and which type of team benefits most from each tool."
    >
      <ProseBlock
        title="What this comparison will cover"
        paragraphs={[
          "The final version should compare positioning, workflow design, content optimization depth, pricing value, and where each tool is strongest for small teams.",
        ]}
      />
      <ProseBlock
        title="Key angles to evaluate"
        paragraphs={["This page is ready to expand with first-hand testing and feature validation."]}
        bullets={[
          "Automation workflow vs optimization-first workflow",
          "Small business fit",
          "Agency process fit",
          "Editorial review requirements",
        ]}
      />
    </ArticleLayout>
  );
}
