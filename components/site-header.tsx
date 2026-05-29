import Link from "next/link";

import { primaryNav } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[rgba(247,250,252,0.82)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          SEOAutopilotHub
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
