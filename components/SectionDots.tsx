"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

/** Fixed right-hand section indicator; the active dot follows the scroll position. */
export function SectionDots({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="dots" aria-label="Sections">
      {sections.map((s) => (
        <a key={s.id} href={`#${s.id}`} className={s.id === active ? "active" : undefined} aria-label={s.label}>
          <span className="dot-label">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}
