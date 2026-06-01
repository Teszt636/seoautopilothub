import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/article-layout";
import { JsonLd } from "@/components/json-ld";
import { ProseBlock, RecommendedReads } from "@/components/ui";
import { articles, buildBreadcrumbs } from "@/lib/content";
import { buildMetadata, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const explicitArticleRoutes = new Set([
  "seo-autopilot-for-local-service-businesses",
]);

export async function generateStaticParams() {
  return articles
    .filter((article) => !explicitArticleRoutes.has(article.slug))
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);

  if (!article) {
    return {};
  }

  return buildMetadata({
    title: article.title,
    description: article.metaDescription,
    path: `/${article.slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout eyebrow="Article" title={article.title} intro={article.intro}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.metaDescription,
          mainEntityOfPage: `${siteConfig.domain}/${article.slug}`,
          author: { "@type": "Organization", name: siteConfig.name },
          publisher: { "@type": "Organization", name: siteConfig.name },
        }}
      />
      <JsonLd
        data={buildBreadcrumbs([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: article.title, path: `/${article.slug}` },
        ])}
      />
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
      {article.sections.map((section) => (
        <ProseBlock
          key={section.title}
          title={section.title}
          paragraphs={section.paragraphs}
          bullets={section.bullets}
        />
      ))}
      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
        <p className="text-base leading-7 text-slate-700">
          {article.contextText}{" "}
          {article.contextLinks.map((link, index) => (
            <span key={link.href}>
              <Link
                href={link.href}
                className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4"
              >
                {link.title}
              </Link>
              {index < article.contextLinks.length - 2
                ? ", "
                : index === article.contextLinks.length - 2
                  ? ", and "
                  : "."}
            </span>
          ))}
        </p>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">FAQ</h2>
        <div className="mt-6 space-y-6">
          {article.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-base leading-7 text-slate-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <RecommendedReads items={article.relatedReads} />
    </ArticleLayout>
  );
}
