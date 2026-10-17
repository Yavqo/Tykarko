type CarProps = { color: string; className?: string };

/** Side-profile placeholder silhouette until real vehicle renders are available. */
export function Car({ color, className = "car" }: CarProps) {
  return (
    <svg className={className} viewBox="0 0 620 210" aria-hidden="true">
      <ellipse cx="310" cy="186" rx="280" ry="12" fill="rgba(0,0,0,.35)" />
      <path
        fill={color}
        d="M38 146c0-20 18-32 52-37l104-12c40-28 100-46 172-46 62 0 112 18 154 46l46 9c22 5 34 18 34 36v14c0 6-4 10-10 10H48c-6 0-10-4-10-10z"
      />
      <path fill="rgba(10,14,20,.78)" d="M222 97c36-24 86-35 146-35 46 0 82 12 112 35z" />
      <path fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="2" d="M60 128h500" />
      <rect x="548" y="118" width="26" height="6" rx="3" fill="#fff" opacity=".85" />
      <rect x="42" y="122" width="18" height="6" rx="3" fill="#e31937" opacity=".9" />
      {[150, 474].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="160" r="34" fill="#111" />
          <circle cx={cx} cy="160" r="20" fill="#3a3f47" />
          <circle cx={cx} cy="160" r="6" fill="#9aa1ab" />
        </g>
      ))}
    </svg>
  );
}
