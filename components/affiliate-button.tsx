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
      className="cta-affiliate inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold shadow-sm transition focus:outline-none"
    >
      <span className="cta-button-label">{label}</span>
    </a>
  );
}
