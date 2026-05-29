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
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow"
      data-affiliate-tool={toolName}
      data-affiliate-placement={placement}
      className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
    >
      {label}
    </a>
  );
}
