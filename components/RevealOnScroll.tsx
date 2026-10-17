"use client";

import { useEffect } from "react";

/** Adds `in-view` to each `.panel` the first time it scrolls into view. */
export function RevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.35 }
    );
    document.querySelectorAll(".panel").forEach((p) => observer.observe(p));
    return () => observer.disconnect();
  }, []);

  return null;
}
