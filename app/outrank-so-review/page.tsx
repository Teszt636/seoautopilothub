import { AffiliateButton } from "@/components/affiliate-button";
import { ArticleLayout } from "@/components/article-layout";
import { JsonLd } from "@/components/json-ld";
import { ProseBlock } from "@/components/ui";
import { buildBreadcrumbs } from "@/lib/content";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Outrank.so Review: Is It a Good AI SEO Automation Tool for Small Businesses?",
  description:
    "A balanced review of Outrank.so for small businesses, solo founders, and agencies exploring AI-assisted SEO automation.",
  path: "/outrank-so-review",
  type: "article",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Outrank.so enough on its own for SEO growth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not usually. It can support research-to-draft workflows, but results still depend on topic strategy, internal linking, technical SEO, and editorial review.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Outrank.so best suited for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It appears best suited to lean teams such as small businesses, solo founders, and agencies that need a more repeatable content workflow.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Outrank.so Review: Is It a Good AI SEO Automation Tool for Small Businesses?",
  description:
    "A balanced review of Outrank.so for small businesses, solo founders, and agencies exploring AI-assisted SEO automation.",
  mainEntityOfPage: siteConfig.domain + "/outrank-so-review",
  author: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
};

export default function OutrankReviewPage() {
  return (
    <ArticleLayout
      eyebrow="Review"
      title="Outrank.so Review: Is It a Good AI SEO Automation Tool for Small Businesses?"
      intro="Outrank.so looks most relevant for teams that want to reduce the friction between keyword planning and publishable SEO content. The key question is whether that workflow matches the needs, constraints, and review standards of a smaller business or agency."
    >
      <JsonLd data={articleSchema} />
      <JsonLd
        data={buildBreadcrumbs([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
          { name: "Outrank.so Review", path: "/outrank-so-review" },
        ])}
      />
      <JsonLd data={faqSchema} />

      <ProseBlock
        title="Quick verdict"
        paragraphs={[
          "Outrank.so appears to be a promising fit for small businesses, solo founders, and smaller agencies that want a lean AI SEO automation workflow rather than a sprawling enterprise platform.",
          "Its strongest use case is helping teams publish more consistently. Its weakest use case is expecting the tool alone to replace strategy, editorial review, or broader SEO execution.",
        ]}
      />
      <ProseBlock
        title="What Outrank.so is"
        paragraphs={[
          "Outrank.so is positioned as an AI SEO automation tool designed to make content production more repeatable. In practice, that means supporting teams as they move from content ideas and keyword targets toward publishable drafts and a steadier publishing cadence.",
          "This can be especially useful for companies that do not have a dedicated content team but still need ongoing SEO coverage.",
        ]}
      />
      <ProseBlock
        title="Who it is best for"
        paragraphs={[
          "The strongest fit appears to be local businesses, small agencies, and solo founders that need more output from a small operating team.",
        ]}
        bullets={[
          "Local businesses building service and supporting content",
          "Agencies managing recurring SEO execution for several clients",
          "Solo founders who need a system, not just a writing assistant",
        ]}
      />
      <ProseBlock
        title="Key features"
        paragraphs={[
          "Exact product capabilities should always be verified against the current product site, but the value proposition points toward a workflow that supports planning, draft creation, and a more structured path to publishing.",
        ]}
        bullets={[
          "AI-assisted draft generation",
          "Workflow support for ongoing SEO publishing",
          "Faster content throughput for small teams",
          "A simpler system than building a full in-house content operation",
        ]}
      />
      <ProseBlock
        title="Benefits for small businesses"
        paragraphs={[
          "Small businesses usually benefit most from reduced writing bottlenecks. When the hard part is getting from idea to draft, automation can create enough momentum to keep a content plan alive.",
          "That matters most for businesses that need steady publishing to build topical authority over time.",
        ]}
      />
      <ProseBlock
        title="Benefits for agencies"
        paragraphs={[
          "Agencies can benefit from process consistency and improved production capacity. A more repeatable draft workflow can make it easier to standardize content operations across multiple clients while keeping review steps centralized.",
          "That said, agencies still need client-specific positioning, fact checks, and clear quality control before publication.",
        ]}
      />
      <ProseBlock
        title="Limitations and risks"
        paragraphs={[
          "The main risk with any AI SEO automation tool is assuming content production equals SEO success. It does not. Rankings depend on a much broader system that includes keyword selection, topical depth, internal linking, technical performance, and content usefulness.",
          "Another risk is publishing generic drafts without adding business-specific expertise or local context.",
        ]}
      />
      <ProseBlock
        title="When Outrank.so may not be enough"
        paragraphs={[
          "It may not be enough when the site has poor technical SEO, weak service pages, no topical map, or no human capacity for review. In those cases, more output can just create more clutter.",
          "It is also not a complete substitute for SEO strategy when a business is entering a competitive market or trying to build authority in a complex niche.",
        ]}
      />
      <ProseBlock
        title="Suggested workflow"
        paragraphs={[
          "A sensible workflow is to start with topic clusters, define target pages, use Outrank.so to accelerate drafting, then review every piece for factual accuracy, conversion intent, and internal link fit.",
        ]}
        bullets={[
          "Map keywords to service clusters or funnel stages",
          "Create briefs and generate first drafts",
          "Review for brand voice, accuracy, and local detail",
          "Publish with internal links and update older pages regularly",
        ]}
      />
      <section className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-lg shadow-slate-300/70">
        <h2 className="text-2xl font-semibold tracking-tight">Final verdict</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
          Outrank.so looks like a worthwhile tool to evaluate if your biggest
          SEO problem is publishing consistency. It makes the most sense inside a
          broader workflow that includes strategy, review, internal linking, and
          technical SEO rather than as a standalone shortcut.
        </p>
        <div className="mt-6">
          <AffiliateButton
            href={siteConfig.affiliateUrl}
            label="Visit Outrank.so"
            placement="review-final-verdict"
            toolName="Outrank.so"
          />
        </div>
      </section>
    </ArticleLayout>
  );
}
