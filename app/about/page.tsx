import { ArticleLayout } from "@/components/article-layout";
import { ProseBlock } from "@/components/ui";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn what SEOAutopilotHub covers and who it is built for.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <ArticleLayout
      eyebrow="About"
      title="About SEOAutopilotHub"
      intro="SEOAutopilotHub is an independent educational content hub focused on practical AI SEO automation for small businesses, local service companies, solo founders, and small agencies."
    >
      <ProseBlock
        title="What this site covers"
        paragraphs={[
          "The site focuses on practical SEO automation workflows, tool comparisons, review-driven content planning, and the limits of using AI to support ongoing publishing.",
          "The goal is to help smaller teams understand where automation can reduce friction without pretending that software replaces strategy, editorial review, or technical SEO.",
        ]}
      />
      <ProseBlock
        title="Who it is for"
        paragraphs={[
          "Most content is written for businesses and operators who need a lean publishing system rather than a large in-house SEO department.",
        ]}
        bullets={[
          "Small businesses trying to publish more consistently",
          "Local service companies building topical coverage around real services",
          "Solo founders balancing SEO with limited time and budget",
          "Small agencies improving repeatability across client content workflows",
        ]}
      />
      <ProseBlock
        title="How recommendations are handled"
        paragraphs={[
          "Recommendations are editorial and practical in intent. Some pages may include affiliate-supported recommendations where clearly disclosed, but the aim is still to explain workflow fit, tradeoffs, and likely limitations in plain language.",
          "SEOAutopilotHub does not claim that AI tools guarantee rankings. Better tools can support execution, but results still depend on topic selection, site quality, internal linking, competition, and human review.",
        ]}
      />
      <ProseBlock
        title="How the site may evolve"
        paragraphs={[
          "Over time, the site may test tools, compare workflows, and publish practical observations as more examples and editorial research are added.",
          "The emphasis stays on realistic implementation rather than exaggerated promises.",
        ]}
      />
    </ArticleLayout>
  );
}
