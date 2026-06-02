import { ArticleLayout } from "@/components/article-layout";
import { ProseBlock } from "@/components/ui";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description:
    "Read how SEOAutopilotHub handles affiliate links, recommendations, and editorial independence.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <ArticleLayout
      eyebrow="Disclosure"
      title="Affiliate Disclosure"
      intro="SEOAutopilotHub may earn commissions from some recommended tools and services, including selected affiliate links that support the site."
    >
      <ProseBlock
        title="How affiliate links work"
        paragraphs={[
          "Some links on this site are affiliate links. If you choose to sign up or purchase through one of those links, SEOAutopilotHub may earn a commission.",
          "Using an affiliate link does not increase the price you pay. It is simply one of the ways this site can be supported.",
        ]}
      />
      <ProseBlock
        title="How recommendations are approached"
        paragraphs={[
          "Affiliate relationships may influence how the site is monetized, but they do not change the editorial goal of giving practical, honest guidance for smaller teams evaluating AI SEO workflows.",
          "Outrank.so may be one of the tools recommended on this site when it appears relevant to the workflow being discussed, but readers should still evaluate any tool based on their own needs, budget, and review process.",
          "No recommendation should be interpreted as a guarantee of rankings, traffic growth, or business results.",
        ]}
      />
      <ProseBlock
        title="Link attributes and disclosures"
        paragraphs={[
          "Affiliate links may be marked with attributes such as sponsored or nofollow where appropriate.",
          "When a page includes affiliate-supported recommendations, the goal is to keep that relationship clear without turning the content into a sales pitch.",
        ]}
      />
    </ArticleLayout>
  );
}
