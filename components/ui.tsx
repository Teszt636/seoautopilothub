import Link from "next/link";
import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function PageSection({ eyebrow, title, intro, children }: SectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h2>
        {intro ? <p className="max-w-3xl text-base leading-7 text-slate-600">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function CardGrid({
  items,
}: {
  items: Array<{ title: string; description: string; href?: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const content = (
          <article className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </article>
        );

        return item.href ? (
          <Link key={item.href} href={item.href} className="transition hover:-translate-y-0.5">
            {content}
          </Link>
        ) : (
          <div key={item.title}>{content}</div>
        );
      })}
    </div>
  );
}

export function ProseBlock({
  title,
  paragraphs,
  bullets,
}: {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {bullets ? (
          <ul className="space-y-2 pl-5 text-slate-700">
            {bullets.map((bullet) => (
              <li key={bullet} className="list-disc">
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
