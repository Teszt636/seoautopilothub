import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/article-layout";
import { JsonLd } from "@/components/json-ld";
import { PageSection, ProseBlock, RecommendedReads } from "@/components/ui";
import {
  buildBreadcrumbs,
  getGuideArticle,
  isGuideArticlePublic,
  publishedGuideArticles,
} from "@/lib/content";
import {
  getPublishedOutrankGuideArticle,
  getPublishedOutrankGuideSummaries,
} from "@/lib/outrank";
import { absoluteUrl, buildMetadata, siteConfig } from "@/lib/site";

export const revalidate = 86400;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const manualParams = publishedGuideArticles.map((article) => ({ slug: article.slug }));
  const manualSlugs = new Set(manualParams.map((article) => article.slug));
  const outrankParams = (await getPublishedOutrankGuideSummaries())
    .filter((article) => !manualSlugs.has(article.slug))
    .map((article) => ({ slug: article.slug }));

  return [...manualParams, ...outrankParams];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getGuideArticle(slug);

  if (article && isGuideArticlePublic(article)) {
    return buildMetadata({
      title: article.metaTitle,
      description: article.metaDescription,
      path: `/guides/${article.slug}`,
      type: "article",
    });
  }

  const outrankArticle = await getPublishedOutrankGuideArticle(slug);

  if (!outrankArticle) {
    return {};
  }

  return buildMetadata({
    title: outrankArticle.title,
    description: outrankArticle.metaDescription,
    path: `/guides/${outrankArticle.slug}`,
    type: "article",
  });
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getGuideArticle(slug);

  if (!article || !isGuideArticlePublic(article)) {
    return <OutrankGuideArticlePage slug={slug} />;
  }

  const articleUrl = absoluteUrl(`/guides/${article.slug}`);

  return (
    <ArticleLayout eyebrow={article.eyebrow} title={article.title} intro={article.intro}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.metaDescription,
          articleSection: article.category,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          mainEntityOfPage: articleUrl,
          author: { "@type": "Organization", name: siteConfig.name },
          publisher: { "@type": "Organization", name: siteConfig.name },
        }}
      />
      <JsonLd
        data={buildBreadcrumbs([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: article.title, path: `/guides/${article.slug}` },
        ])}
      />
      {article.faqs.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }}
        />
      ) : null}

      {article.quickAnswer ? (
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Quick answer
          </p>
          <p className="mt-4 text-base leading-7 text-slate-700">{article.quickAnswer}</p>
        </section>
      ) : null}

      {article.sections.map((section) => (
        <ProseBlock
          key={section.title}
          title={section.title}
          paragraphs={section.paragraphs}
          bullets={section.bullets}
        />
      ))}

      {article.tableBlocks?.map((table) => (
        <section
          key={table.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{table.title}</h2>
          {table.intro ? (
            <p className="mt-4 text-base leading-7 text-slate-700">{table.intro}</p>
          ) : null}
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-slate-700">
              <thead>
                <tr className="border-b border-slate-200">
                  {table.columns.map((column) => (
                    <th key={column} className="px-4 py-3 font-semibold text-slate-950">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row.join("-")} className="border-b border-slate-100 last:border-b-0">
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {article.checklistBlocks?.map((checklist) => (
        <section
          key={checklist.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            {checklist.title}
          </h2>
          {checklist.intro ? (
            <p className="mt-4 text-base leading-7 text-slate-700">{checklist.intro}</p>
          ) : null}
          <ul className="mt-4 space-y-3 pl-5 text-base leading-7 text-slate-700">
            {checklist.items.map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {article.internalLinks.length ? (
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
          <PageSection
            eyebrow="Internal links"
            title="Keep the guide connected to the main site"
            intro="These supporting pages help the guide sit inside a deliberate topic cluster instead of acting like a standalone blog post."
          >
            <div className="grid gap-4 md:grid-cols-3">
              {article.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60 transition hover:-translate-y-0.5"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {link.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{link.description}</p>
                </Link>
              ))}
            </div>
          </PageSection>
        </section>
      ) : null}

      {article.affiliateCta ? (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Workflow note
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
            {article.affiliateCta.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            {article.affiliateCta.description}
          </p>
          <Link
            href={article.affiliateCta.href}
            className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {article.affiliateCta.label}
          </Link>
        </section>
      ) : null}

      {article.faqs.length ? (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
          <PageSection title="FAQ">
            <div className="space-y-6">
              {article.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </PageSection>
        </section>
      ) : null}

      <RecommendedReads
        items={article.recommendedReads}
        intro="Use these pages to connect the guide to the main review, workflow, and comparison content on the site."
      />
    </ArticleLayout>
  );
}

async function OutrankGuideArticlePage({ slug }: { slug: string }) {
  const article = await getPublishedOutrankGuideArticle(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = absoluteUrl(`/guides/${article.slug}`);

  return (
    <ArticleLayout eyebrow="Guide" title={article.title} intro={article.intro}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.metaDescription,
          articleSection: article.tags.join(", ") || "Guides",
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          mainEntityOfPage: articleUrl,
          image: article.imageUrl,
          author: { "@type": "Organization", name: siteConfig.name },
          publisher: { "@type": "Organization", name: siteConfig.name },
        }}
      />
      <JsonLd
        data={buildBreadcrumbs([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: article.title, path: `/guides/${article.slug}` },
        ])}
      />
      {article.faqs.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }}
        />
      ) : null}

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          {article.readingTimeMinutes ? <span>{article.readingTimeMinutes} min read</span> : null}
          <span>Updated {new Date(article.updatedAt).toLocaleDateString("en-US")}</span>
        </div>
        {article.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.imageUrl}
            alt=""
            className="mt-6 aspect-[16/9] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        ) : null}
        <div
          className="outrank-article-content mt-6"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </section>

      <RecommendedReads
        items={article.recommendedReads}
        intro="Use these pages to connect the article to the main review and SEO automation strategy content."
      />
    </ArticleLayout>
  );
}
