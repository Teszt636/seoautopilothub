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
