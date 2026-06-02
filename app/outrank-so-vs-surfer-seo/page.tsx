import { AffiliateButton } from "@/components/affiliate-button";
import { AffiliateDisclosureNote, AffiliateNote } from "@/components/affiliate-note";
import { ArticleLayout } from "@/components/article-layout";
import { JsonLd } from "@/components/json-ld";
import { ProseBlock, RecommendedReads } from "@/components/ui";
import { buildBreadcrumbs } from "@/lib/content";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Outrank.so vs Surfer SEO: Which SEO Workflow Fits Better?",
  description:
    "A balanced editorial comparison of Outrank.so vs Surfer SEO for teams choosing between publishing automation and content optimization workflows.",
  path: "/outrank-so-vs-surfer-seo",
  type: "article",
});

const faqItems = [
  {
    question: "Is Outrank.so better than Surfer SEO?",
    answer:
      "Not universally. Outrank.so may fit better when the main need is a more structured AI-assisted publishing workflow, while Surfer SEO may fit better when the team wants optimization guidance and content scoring around drafts.",
  },
  {
    question: "Is Surfer SEO mainly for optimization workflows?",
    answer:
      "In general, Surfer SEO is more closely associated with content optimization, SERP-informed writing guidance, and improving drafts against on-page recommendations.",
  },
  {
    question: "Can a team use both Outrank.so and Surfer SEO together?",
    answer:
      "Yes. A team could use one tool to improve publishing throughput and the other to add an optimization review layer before content goes live.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Outrank.so vs Surfer SEO: Which SEO Workflow Fits Better?",
  description:
    "A balanced editorial comparison of Outrank.so vs Surfer SEO for teams choosing between publishing automation and content optimization workflows.",
  mainEntityOfPage: siteConfig.domain + "/outrank-so-vs-surfer-seo",
  author: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
};

const comparisonRows = [
  [
    "Main use case",
    "AI-assisted publishing workflow and content throughput support.",
    "Content optimization, SERP-informed writing guidance, and score-driven refinement.",
  ],
  [
    "Content planning",
    "More useful when a team wants structure around repeatable content operations.",
    "More useful when planning is tied closely to optimization and draft improvement.",
  ],
  [
    "Draft creation",
    "May appeal more to teams that want help moving from topics toward publishable drafts.",
    "Often fits teams that already have drafts and want clearer optimization direction.",
  ],
  [
    "Optimization workflow",
    "Not the main reason most teams would evaluate it.",
    "A stronger fit when optimization guidance is central to the workflow.",
  ],
  [
    "Publishing workflow",
    "May fit teams that care about a broader publishing system, not just a score.",
    "Usually depends on surrounding tools or manual processes after optimization.",
  ],
  [
    "Human review needed",
    "Still necessary for accuracy, positioning, and final quality control.",
    "Still necessary to judge content usefulness and avoid overfitting to recommendations.",
  ],
  [
    "Best for agencies",
    "Agencies that want more repeatable draft and publishing operations.",
    "Agencies that already have writing capacity and want stronger optimization controls.",
  ],
  [
    "Best for small businesses",
    "Small teams that want fewer moving parts between idea and published article.",
    "Small teams that already write content and want help refining it for search intent.",
  ],
  [
    "Main limitation",
    "A workflow tool still does not replace strategy, editing, or technical SEO.",
    "Optimization guidance alone does not solve publishing consistency or broader content operations.",
  ],
];

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="Comparison"
      title="Outrank.so vs Surfer SEO"
      intro="Outrank.so and Surfer SEO can sit in very different parts of an SEO content workflow. The practical decision is less about picking a winner in the abstract and more about whether your team needs stronger publishing automation or stronger optimization guidance around content drafts."
    >
      <JsonLd data={articleSchema} />
      <JsonLd
        data={buildBreadcrumbs([
          { name: "Home", path: "/" },
          { name: "Comparisons", path: "/comparisons" },
          { name: "Outrank.so vs Surfer SEO", path: "/outrank-so-vs-surfer-seo" },
        ])}
      />
      <JsonLd data={faqSchema} />

      <ProseBlock
        title="Quick verdict"
        paragraphs={[
          "Outrank.so may fit better for teams that want a more structured AI-assisted SEO publishing workflow with less friction between planning, drafting, and getting content ready to publish.",
          "Surfer SEO may fit better for teams that already have a writing process and want stronger content optimization guidance based on SERP-oriented recommendations. Neither tool removes the need for human review.",
        ]}
      />
      <ProseBlock
        title="What Outrank.so is generally built for"
        paragraphs={[
          "Editorially, Outrank.so appears better aligned with teams trying to make ongoing SEO content production more repeatable. The value proposition is less about a single optimization score and more about supporting a broader publishing rhythm.",
          "That can matter for small businesses, solo founders, and agencies that struggle more with output consistency than with draft-level optimization decisions.",
        ]}
      />
      <ProseBlock
        title="What Surfer SEO is generally built for"
        paragraphs={[
          "Surfer SEO is better known for content optimization workflows, SERP-based writing guidance, and helping teams refine pages against on-page recommendations.",
          "That makes it easier to understand why some teams use it later in the workflow, after topic selection and drafting are already under control.",
        ]}
      />
      <ProseBlock
        title="Key difference: publishing automation vs content optimization workflow"
        paragraphs={[
          "The clearest distinction is workflow orientation. Outrank.so may be the more natural choice when your bottleneck is producing and publishing content consistently. Surfer SEO may be the more natural choice when your bottleneck is improving a draft with optimization feedback.",
          "A team that confuses those two problems can easily buy the wrong category of tool.",
        ]}
      />
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Comparison table</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-3 text-sm font-semibold text-slate-900">Category</th>
                <th className="px-4 py-3 text-sm font-semibold text-slate-900">Outrank.so</th>
                <th className="px-4 py-3 text-sm font-semibold text-slate-900">Surfer SEO</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([label, outrank, surfer]) => (
                <tr key={label} className="border-b border-slate-200 last:border-b-0">
                  <td className="px-4 py-4 text-sm font-medium text-slate-900">{label}</td>
                  <td className="px-4 py-4 text-sm leading-6 text-slate-700">{outrank}</td>
                  <td className="px-4 py-4 text-sm leading-6 text-slate-700">{surfer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <ProseBlock
        title="When Outrank.so may fit better"
        paragraphs={[
          "Outrank.so may be the better fit if your team needs more structure around publishing, wants to reduce manual friction between ideas and drafts, or is trying to keep content production moving with a small operating team.",
        ]}
        bullets={[
          "You care more about workflow consistency than draft scoring",
          "You want AI assistance inside a broader publishing system",
          "You run a small business, local service site, or lean agency workflow",
        ]}
      />
      <ProseBlock
        title="When Surfer SEO may fit better"
        paragraphs={[
          "Surfer SEO may fit better if your team already produces drafts consistently and wants a more optimization-focused layer for refining content before publishing.",
        ]}
        bullets={[
          "You want stronger draft optimization guidance",
          "You already have writers or a stable drafting process",
          "You are comfortable adding another review layer before publication",
        ]}
      />
      <ProseBlock
        title="Can you use both?"
        paragraphs={[
          "Yes. Some teams may prefer to use a workflow-oriented tool to support content production and then use an optimization-oriented tool as part of the editorial review process.",
          "That approach only makes sense if the team has enough process discipline to benefit from both layers without adding unnecessary complexity.",
        ]}
      />
      <section className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-lg shadow-slate-300/70">
        <h2 className="text-2xl font-semibold tracking-tight">Final recommendation</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
          Choose Outrank.so if your core problem is building a more reliable SEO publishing
          workflow. Choose Surfer SEO if your core problem is improving drafts with more explicit
          optimization guidance. If needed, a mature team could use both, but most smaller teams
          should start by solving their biggest bottleneck first.
        </p>
        <div className="mt-6">
          <AffiliateButton
            href={siteConfig.affiliateUrl}
            label="Explore Outrank.so"
            placement="comparison-surfer-final"
            toolName="Outrank.so"
          />
        </div>
        <AffiliateNote className="mt-4 text-slate-300" />
        <AffiliateDisclosureNote className="mt-2 text-slate-400" />
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">FAQ</h2>
        <div className="mt-6 space-y-6">
          {faqItems.map((item) => (
            <div key={item.question}>
              <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
              <p className="mt-2 text-base leading-7 text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <RecommendedReads
        items={[
          {
            title: "Outrank.so Review",
            description: "See the broader editorial take on where Outrank.so may fit for lean teams.",
            href: "/outrank-so-review",
          },
          {
            title: "AI SEO Automation for Small Businesses",
            description: "Use the pillar guide to decide what should be automated and what should stay manual.",
            href: "/ai-seo-automation-for-small-businesses",
          },
          {
            title: "How to Publish 30 SEO Articles per Month",
            description: "A practical follow-up if your main issue is keeping a publishing cadence alive.",
            href: "/how-to-publish-30-seo-articles-per-month",
          },
        ]}
      />
    </ArticleLayout>
  );
}
