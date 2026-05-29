type AffiliateNoteProps = {
  className?: string;
};

export function AffiliateNote({ className = "" }: AffiliateNoteProps) {
  return (
    <div
      className={`space-y-2 text-sm leading-6 text-slate-500 ${className}`.trim()}
    >
      <p>Use promo code LEADSTART if available.</p>
      <p>
        We may earn a commission if you sign up through our link, at no extra
        cost to you.
      </p>
    </div>
  );
}
