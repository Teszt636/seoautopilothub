import { ArticleLayout } from "@/components/article-layout";
import { ProseBlock } from "@/components/ui";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact information and support expectations for SEOAutopilotHub.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <ArticleLayout
      eyebrow="Contact"
      title="Contact"
      intro="SEOAutopilotHub is currently an informational affiliate content site and does not offer direct consulting, support, or custom SEO services through this website."
    >
      <ProseBlock
        title="How to use this page"
        paragraphs={[
          "No contact form is provided on this site, and the website is not set up as a lead generation or client intake channel.",
          "SEOAutopilotHub is also not the official support channel for Outrank.so or any other third-party tool mentioned in the content.",
          "If you need product-specific support, billing help, or account assistance, please contact the tool provider directly through its official website or support channels.",
          "For additional transparency information, see the Affiliate Disclosure, Privacy Policy, and About pages linked in the footer.",
        ]}
      />
    </ArticleLayout>
  );
}
