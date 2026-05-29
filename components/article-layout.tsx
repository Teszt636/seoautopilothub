import Link from "next/link";
import type { ReactNode } from "react";

type ArticleLayoutProps = {
  title: string;
  intro: string;
  eyebrow: string;
  children: ReactNode;
};

export function ArticleLayout({
  title,
  intro,
  eyebrow,
  children,
}: ArticleLayoutProps) {
  return (
    <main className="flex-1">
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(38,132,255,0.16),_transparent_45%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
            <Link href="/ai-seo-automation-for-small-businesses" className="text-slate-900 underline decoration-slate-300 underline-offset-4">
              Pillar guide
            </Link>
            <Link href="/outrank-so-review" className="text-slate-900 underline decoration-slate-300 underline-offset-4">
              Outrank.so review
            </Link>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-4xl gap-8 px-4 py-12 sm:px-6 lg:px-8">{children}</div>
    </main>
  );
}
