import Link from "next/link";

import { footerNav } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-slate-900">SEOAutopilotHub</p>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Practical education for small businesses, agencies, and solo founders
            building consistent AI-assisted SEO publishing systems.
          </p>
        </div>
        <nav aria-label="Footer" className="grid gap-3">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
