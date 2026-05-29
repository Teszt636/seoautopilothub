import { ArticleLayout } from "@/components/article-layout";
import { ProseBlock } from "@/components/ui";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description:
    "Read the affiliate disclosure for SEOAutopilotHub.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <ArticleLayout
      eyebrow="Disclosure"
      title="Affiliate Disclosure"
      intro="SEOAutopilotHub may earn commissions from some recommended tools and services."
    >
      <ProseBlock
        title="How affiliate relationships are handled"
        paragraphs={[
          "Some links on this site are affiliate links, which means the site may earn a commission if you choose to purchase through them.",
          "That does not change the goal of the site, which is to make recommendations that are practical, honest, and useful for smaller teams trying to improve their SEO content operations.",
          "No tool is presented as a guaranteed ranking solution. Decisions should be based on workflow fit, budget, and the broader SEO needs of the business.",
        ]}
      />
    </ArticleLayout>
  );
}
