import Link from "next/link";

import { AffiliateButton } from "@/components/affiliate-button";
import { AffiliateNote } from "@/components/affiliate-note";
import { CardGrid, PageSection } from "@/components/ui";
import { articleCards, comparisonLinks, guideLinks } from "@/lib/content";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "AI SEO Automation for Small Businesses and Agencies",
  description:
    "Learn how to build automated SEO content systems that help local businesses, small agencies and solo founders publish optimized content consistently.",
  path: "/",
});

const audienceCards = [
  {
    title: "Local service businesses",
    description:
      "Build publishing systems for service pages, service-area content, FAQs, and supporting topical articles.",
  },
  {
    title: "Small marketing agencies",
    description:
      "Use AI-assisted workflows to increase output capacity while protecting review standards and client context.",
  },
  {
    title: "Solo founders",
    description:
      "Create a realistic content engine without hiring a full in-house SEO team from day one.",
  },
  {
    title: "Website and landing page creators",
    description:
      "Support client launches with stronger search-focused content systems, not just static brochure pages.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_28%),linear-gradient(180deg,#f5fbfa_0%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                AI SEO workflows for lean teams
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                AI SEO Automation for Small Businesses and Agencies
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Learn how to build automated SEO content systems that help local
                businesses, small agencies and solo founders publish optimized
                content consistently.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ai-seo-automation-for-small-businesses"
                className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                Read the practical guide
              </Link>
              <Link
                href="/outrank-so-review"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              >
                See the Outrank.so review
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-xl shadow-slate-200/80">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              What the site covers
            </p>
            <div className="mt-6 grid gap-5">
              {[
                "Keyword planning and topic clustering",
                "AI-assisted outlining and draft workflows",
                "Internal linking and on-page optimization habits",
                "Balanced reviews of SEO automation tools",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-600">
              The goal is not to promise rankings. It is to help smaller teams
              build a better publishing system around strategy, review, and
              consistency.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <PageSection
          eyebrow="Problem"
          title="Why small businesses struggle with SEO content"
          intro="Publishing useful SEO content is rarely blocked by motivation alone. It is usually blocked by bandwidth, process, and the lack of a repeatable system."
        >
          <CardGrid
            items={[
              {
                title: "No dedicated content team",
                description:
                  "Owners and account managers often handle content on top of sales, service delivery, and operations.",
              },
              {
                title: "Inconsistent publishing",
                description:
                  "Content gets pushed aside when other priorities spike, which weakens momentum and topical coverage.",
              },
              {
                title: "Fragmented SEO work",
                description:
                  "Keyword research, writing, internal linking, and technical cleanup happen separately instead of as one system.",
              },
            ]}
          />
        </PageSection>

        <PageSection
          eyebrow="Solution"
          title="AI SEO automation workflows that support consistency"
          intro="Good automation reduces repetitive work. It does not replace editorial judgment, search intent alignment, or site strategy."
        >
          <CardGrid
            items={[
              {
                title: "Plan topics in clusters",
                description:
                  "Group keywords by service, audience, and local intent so each article fits a larger SEO structure.",
              },
              {
                title: "Generate drafts with guardrails",
                description:
                  "Use AI to build first drafts, outlines, FAQs, and meta elements while keeping a clear review checklist.",
              },
              {
                title: "Publish on a steady cadence",
                description:
                  "Create a process that makes four, eight, or even thirty articles per month realistic for a lean team.",
              },
            ]}
          />
        </PageSection>

        <PageSection
          eyebrow="Audience"
          title="Who this is for"
          intro="The site is built for teams that need stronger SEO output without adding a full content department."
        >
          <CardGrid items={audienceCards} />
        </PageSection>

        <PageSection
          eyebrow="Recommended Tool"
          title="A practical starting point: Outrank.so"
          intro="Outrank.so is featured here as one useful option inside a broader content operations system. It is not presented as a magic fix or a substitute for strategy."
        >
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/80">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Best fit for businesses that need a lean SEO content workflow
                </h3>
                <p className="text-base leading-7 text-slate-600">
                  Outrank.so appears best suited to small businesses, solo
                  founders, and smaller agencies that want help turning keyword
                  plans into publishable SEO content with less manual overhead.
                </p>
                <p className="text-base leading-7 text-slate-600">
                  It works best when paired with topic planning, internal
                  linking, technical SEO, and human review before publishing.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/outrank-so-review"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
                >
                  Read the full review
                </Link>
                <AffiliateButton
                  href={siteConfig.affiliateUrl}
                  label="Visit Outrank.so"
                  placement="homepage-recommended-tool"
                  toolName="Outrank.so"
                />
                <AffiliateNote />
              </div>
            </div>
          </div>
        </PageSection>

        <PageSection
          eyebrow="Content Hub"
          title="Start with these guides"
          intro="The initial hub combines a foundational guide, a balanced tool review, and comparison pages that can expand into deeper editorial coverage."
        >
          <CardGrid items={[...guideLinks, ...articleCards.slice(0, 3), ...comparisonLinks.slice(0, 2)]} />
        </PageSection>

        <PageSection
          eyebrow="CTA"
          title="Build a publishing system that your team can actually maintain"
          intro="If your team wants more SEO output without a bloated content operation, start with the guide, review the recommended workflow, and choose tools that fit your real process."
        >
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Explore the guides
            </Link>
            <Link
              href="/comparisons"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
            >
              Compare tools
            </Link>
          </div>
        </PageSection>
      </div>
    </main>
  );
}
