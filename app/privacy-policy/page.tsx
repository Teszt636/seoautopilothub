import { ArticleLayout } from "@/components/article-layout";
import { ProseBlock } from "@/components/ui";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the privacy policy for SEOAutopilotHub.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <ArticleLayout
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This privacy policy is a placeholder foundation for the site and should be reviewed before launch if analytics, email capture, or third-party scripts are added."
    >
      <ProseBlock
        title="What this policy currently covers"
        paragraphs={[
          "SEOAutopilotHub may collect basic information that users voluntarily provide through future contact or newsletter forms.",
          "The site may also use standard analytics or affiliate tracking technologies in the future to understand usage and link activity.",
          "Before launch, this policy should be updated to reflect the exact analytics, email, cookie, and tracking tools that are installed.",
        ]}
      />
    </ArticleLayout>
  );
}
