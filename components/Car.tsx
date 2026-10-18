type CarProps = {
  color: string;
  className?: string;
  /** Scissor door that opens while the panel is active, with a puddle light underneath. */
  door?: boolean;
  /** Headlight beams (only one instance per page: the gradient id is fixed). */
  lights?: boolean;
};

const BODY =
  "M38 146c0-20 18-32 52-37l104-12c40-28 100-46 172-46 62 0 112 18 154 46l46 9c22 5 34 18 34 36v14c0 6-4 10-10 10H48c-6 0-10-4-10-10z";

/** Side-profile placeholder silhouette until real vehicle renders are available. */
export function Car({ color, className = "car", door, lights }: CarProps) {
  return (
    <svg className={className} viewBox="0 0 620 210" overflow="visible" aria-hidden="true">
      {lights && (
        <>
          <defs>
            <linearGradient id="beam-grad" x1="0" x2="1">
              <stop offset="0" stopColor="#fff" stopOpacity=".55" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon className="beam" points="572,116 960,70 960,190 572,128" fill="url(#beam-grad)" />
        </>
      )}
      <ellipse cx="310" cy="186" rx="280" ry="12" fill="rgba(0,0,0,.35)" />
      {door && <ellipse className="puddle" cx="300" cy="188" rx="90" ry="10" fill="#7fb2ff" />}
      <path fill={color} d={BODY} />
      <path fill="rgba(10,14,20,.78)" d="M222 97c36-24 86-35 146-35 46 0 82 12 112 35z" />
      <path fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="2" d="M60 128h500" />
      <rect className="headlight" x="548" y="118" width="26" height="6" rx="3" fill="#fff" opacity=".85" />
      <rect x="42" y="122" width="18" height="6" rx="3" fill="#e31937" opacity=".9" />
      {door && (
        <g className="door">
          <path fill="#1a1f27" d="M244 97C268 80 300 68 340 64L368 63L370 97Z" />
          <path
            fill={color}
            stroke="rgba(0,0,0,.28)"
            strokeWidth="1.5"
            d="M236 99H370c4 0 6 3 6 7l2 40c0 4-3 6-7 6H242c-4 0-6-3-6-7z"
          />
          <rect x="344" y="110" width="20" height="4" rx="2" fill="rgba(0,0,0,.35)" />
        </g>
      )}
      {[150, 474].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="160" r="34" fill="#111" />
          <g className="wheel">
            <circle cx={cx} cy="160" r="21" fill="#3a3f47" />
            {[0, 72, 144, 216, 288].map((deg) => (
              <rect
                key={deg}
                x={cx - 2.5}
                y="141"
                width="5"
                height="19"
                rx="2"
                fill="#9aa1ab"
                transform={`rotate(${deg} ${cx} 160)`}
              />
            ))}
            <circle cx={cx} cy="160" r="6" fill="#c4c9d0" />
          </g>
        </g>
      ))}
    </svg>
  );
}
