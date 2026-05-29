import { ArticleLayout } from "@/components/article-layout";
import { ProseBlock } from "@/components/ui";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Best AI SEO Automation Tools for Small Businesses",
  description:
    "An SEO-ready scaffold for evaluating the best AI SEO automation tools for small businesses.",
  path: "/best-ai-seo-automation-tools-for-small-businesses",
  type: "article",
  noIndex: true,
});

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="Roundup"
      title="Best AI SEO Automation Tools for Small Businesses"
      intro="This page is structured to become a practical roundup focused on real workflow fit for small business teams rather than a generic list of software names."
    >
      <ProseBlock
        title="How the final roundup should be framed"
        paragraphs={[
          "The strongest version of this page should compare tools based on how well they support planning, drafting, review, internal linking, and repeatable publishing for small teams.",
        ]}
      />
      <ProseBlock
        title="Suggested evaluation criteria"
        paragraphs={["Each future tool entry can be expanded with direct testing and updated product details."]}
        bullets={[
          "Ease of use for non-enterprise teams",
          "Workflow support from idea to draft",
          "Quality control and review needs",
          "Value for small business budgets",
        ]}
      />
    </ArticleLayout>
  );
}
