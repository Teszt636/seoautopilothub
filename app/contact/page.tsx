import { ArticleLayout } from "@/components/article-layout";
import { ProseBlock } from "@/components/ui";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact placeholder page for SEOAutopilotHub.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <ArticleLayout
      eyebrow="Contact"
      title="Contact"
      intro="This is a placeholder contact page that can later be replaced with a form, email address, or newsletter signup workflow."
    >
      <ProseBlock
        title="Contact placeholder"
        paragraphs={[
          "If you plan to add outreach, newsletter capture, or consulting inquiries later, this page is ready to be extended with the preferred contact method.",
        ]}
      />
    </ArticleLayout>
  );
}
