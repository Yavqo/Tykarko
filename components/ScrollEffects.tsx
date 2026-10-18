"use client";

import { useEffect } from "react";

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function countUp(el: HTMLElement) {
  const from = Number(el.dataset.from ?? 0);
  const to = Number(el.dataset.to);
  const suffix = el.dataset.suffix ?? "";
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / 1600, 1);
    el.textContent = Math.round(from + (to - from) * easeOutExpo(t)) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * All scroll- and pointer-driven effects in one place:
 * reveal-on-scroll, active panels, count-up stats, scroll progress, parallax,
 * hide-on-scroll nav, 3D card tilt and magnetic buttons.
 */
export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: (() => void)[] = [];

    // Reveal once, and track which panels are on screen
    const counters = [...document.querySelectorAll<HTMLElement>("[data-to]")];
    if (!reduce) counters.forEach((el) => (el.textContent = (el.dataset.from ?? "0") + (el.dataset.suffix ?? "")));

    const revealer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          el.classList.toggle("is-active", e.isIntersecting);
          if (!e.isIntersecting || el.classList.contains("in-view")) return;
          el.classList.add("in-view");
          if (!reduce) el.querySelectorAll<HTMLElement>("[data-to]").forEach(countUp);
        }),
      { threshold: 0.3 }
    );
    document.querySelectorAll(".panel, .reveal").forEach((el) => revealer.observe(el));
    cleanups.push(() => revealer.disconnect());

    // Scroll progress, parallax and nav visibility, batched per frame
    const panels = [...document.querySelectorAll<HTMLElement>(".panel")];
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = root.scrollHeight - innerHeight;
      root.style.setProperty("--progress", String(max > 0 ? y / max : 0));

      if (!reduce) {
        for (const p of panels) {
          const r = p.getBoundingClientRect();
          if (r.bottom < 0 || r.top > innerHeight) continue;
          const offset = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
          p.style.setProperty("--p", Math.max(-1, Math.min(1, offset)).toFixed(3));
        }
      }

      if (y > lastY + 4 && y > 200) root.dataset.navHidden = "";
      else if (y < lastY - 4 || y <= 200) delete root.dataset.navHidden;
      lastY = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    });

    // Pointer effects: 3D tilt with spotlight on cards, magnetic pull on buttons
    if (finePointer && !reduce) {
      const bind = (selector: string, move: (el: HTMLElement, x: number, y: number) => void, reset: string[]) =>
        document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
          const onMove = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            move(el, (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
          };
          const onLeave = () => reset.forEach((prop) => el.style.removeProperty(prop));
          el.addEventListener("pointermove", onMove);
          el.addEventListener("pointerleave", onLeave);
          cleanups.push(() => {
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerleave", onLeave);
          });
        });

      bind(
        ".tilt",
        (el, x, y) => {
          el.style.setProperty("--rx", `${(0.5 - y) * 10}deg`);
          el.style.setProperty("--ry", `${(x - 0.5) * 10}deg`);
          el.style.setProperty("--mx", `${x * 100}%`);
          el.style.setProperty("--my", `${y * 100}%`);
        },
        ["--rx", "--ry", "--mx", "--my"]
      );
      bind(
        ".btn",
        (el, x, y) => {
          el.style.setProperty("--tx", `${(x - 0.5) * 10}px`);
          el.style.setProperty("--ty", `${(y - 0.5) * 8}px`);
        },
        ["--tx", "--ty"]
      );
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
