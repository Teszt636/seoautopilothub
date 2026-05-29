"use client";

import { event as trackEvent } from "@/lib/gtag";

type AffiliateButtonProps = {
  href: string;
  label: string;
  placement: string;
  toolName: string;
};

export function AffiliateButton({
  href,
  label,
  placement,
  toolName,
}: AffiliateButtonProps) {
  function handleClick() {
    trackEvent("affiliate_click", {
      tool_name: toolName,
      placement,
      affiliate_url: href,
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow"
      data-affiliate-tool={toolName}
      data-affiliate-placement={placement}
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full border border-emerald-900 bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 active:bg-emerald-900"
    >
      {label}
    </a>
  );
}
