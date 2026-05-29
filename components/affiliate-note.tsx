type AffiliateNoteProps = {
  className?: string;
};

export function AffiliateNote({ className = "" }: AffiliateNoteProps) {
  return (
    <p
      className={`text-sm font-medium leading-6 text-slate-500 ${className}`.trim()}
    >
      Promo code: <span className="text-slate-700">LEADSTART</span>
    </p>
  );
}

export function AffiliateDisclosureNote({
  className = "",
}: AffiliateNoteProps) {
  return (
    <p
      className={`text-sm leading-6 text-slate-500 ${className}`.trim()}
    >
      Disclosure: This page may contain affiliate links. If you sign up through
      our link, we may earn a commission at no extra cost to you.
    </p>
  );
}
