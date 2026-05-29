import { ArticleLayout } from "@/components/article-layout";
import { ProseBlock } from "@/components/ui";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Outrank.so vs Koala Writer",
  description:
    "A comparison placeholder for teams evaluating Outrank.so against Koala Writer for SEO content workflows.",
  path: "/outrank-so-vs-koala-writer",
  type: "article",
  noIndex: true,
});

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="Comparison"
      title="Outrank.so vs Koala Writer"
      intro="This scaffolded page is designed to grow into a focused comparison for users deciding between a workflow-oriented SEO automation tool and a more writing-centric content tool."
    >
      <ProseBlock
        title="Planned comparison structure"
        paragraphs={[
          "The fuller article should compare speed, workflow depth, editorial flexibility, and how each tool fits solo operators versus agencies.",
        ]}
      />
      <ProseBlock
        title="Sections prepared for expansion"
        paragraphs={["The page already establishes the topic and can be expanded with validated research."]}
        bullets={[
          "Who each tool is best for",
          "SEO workflow coverage",
          "Drafting and review fit",
          "Limitations for scale",
        ]}
      />
    </ArticleLayout>
  );
}
