import { ArticleLayout } from "@/components/article-layout";
import { ProseBlock } from "@/components/ui";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the privacy policy for SEOAutopilotHub, including how analytics and affiliate tracking may be used.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <ArticleLayout
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This policy explains the limited types of data SEOAutopilotHub may collect as an informational affiliate content site."
    >
      <ProseBlock
        title="What the site does not currently do"
        paragraphs={[
          "SEOAutopilotHub does not currently use contact forms, account registration, comments, or newsletter signup forms on this website.",
          "Because of that, the site does not intentionally collect names, email addresses, phone numbers, or other personal information that users would normally submit through on-site forms.",
        ]}
      />
      <ProseBlock
        title="Technical and usage data"
        paragraphs={[
          "The site may still collect limited technical or usage data through analytics tools such as Google Analytics. This can include information such as pages viewed, general device or browser information, approximate location data, referral source data, and interactions with the site.",
          "This kind of data is typically used to understand site performance, traffic patterns, and which content is most useful to readers.",
        ]}
      />
      <ProseBlock
        title="Affiliate links and third-party tracking"
        paragraphs={[
          "Some pages may include affiliate links. Those links may use tracking parameters, cookies, or similar technologies, often on third-party websites rather than directly on SEOAutopilotHub itself.",
          "If you click an affiliate link, you may be taken to a third-party site with its own privacy practices and policies. SEOAutopilotHub does not control how those third parties collect or process data after you leave this site.",
        ]}
      />
      <ProseBlock
        title="Cookies and user control"
        paragraphs={[
          "Your browser may allow you to control or block cookies through its settings. You can also clear existing cookies there if you prefer.",
          "Disabling some cookies may affect how analytics or affiliate attribution works, but you can still browse the site content.",
        ]}
      />
      <ProseBlock
        title="Data sales and policy updates"
        paragraphs={[
          "SEOAutopilotHub does not sell personal data.",
          "If analytics tools, tracking technologies, or other data collection features change in the future, this policy may be updated to reflect those changes more accurately.",
        ]}
      />
    </ArticleLayout>
  );
}
