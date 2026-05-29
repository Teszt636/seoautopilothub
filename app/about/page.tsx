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
      intro="SEOAutopilotHub is an educational site focused on practical AI SEO automation workflows for small businesses, local service providers, solo founders, and small agencies."
    >
      <ProseBlock
        title="What this site is trying to do"
        paragraphs={[
          "The goal is to help lean teams publish useful SEO content more consistently without pretending that AI replaces strategy, editorial review, or technical SEO.",
          "Content here focuses on systems, realistic workflows, and where tools fit into the broader SEO process.",
        ]}
      />
    </ArticleLayout>
  );
}
