"use client";

import { useEffect, useRef, useState } from "react";
import { TykarkoMark, TykarkoWordmark } from "./Logo";

const LINKS = [
  { href: "/#one", label: "Tykarko One" },
  { href: "/#pickup", label: "AI Pickup" },
  { href: "/#doors", label: "Smart Doors" },
  { href: "/#autonomy", label: "Autonomy" },
  { href: "/#features", label: "Features" },
];

export function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [onDark, setOnDark] = useState(false);
  const [open, setOpen] = useState(false);

  // Switch nav to white over dark panels
  useEffect(() => {
    const update = () => {
      const probe = (navRef.current?.offsetHeight ?? 56) / 2;
      const current = [...document.querySelectorAll<HTMLElement>(".panel")].find((p) => {
        const r = p.getBoundingClientRect();
        return r.top <= probe && r.bottom > probe;
      });
      setOnDark(Boolean(current?.hasAttribute("data-dark")));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header ref={navRef} className={`nav${onDark ? " on-dark" : ""}`}>
        <a className="logo" href="/" aria-label="Tykarko home">
          <TykarkoMark className="logo-mark" />
          <TykarkoWordmark className="logo-word" />
        </a>
        <nav className="nav-center" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a href="#support" className="hide-sm">
            Support
          </a>
          <a href="#support" className="hide-sm">
            Account
          </a>
          <button className="menu-btn" aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(true)}>
            Menu
          </button>
        </div>
      </header>

      <aside id="drawer" className={`drawer${open ? " open" : ""}`} aria-hidden={!open} inert={!open}>
        <button className="drawer-close" aria-label="Close menu" onClick={close}>
          &times;
        </button>
        {[...LINKS, { href: "/#reserve", label: "Reserve" }, { href: "#support", label: "Support" }].map((l) => (
          <a key={l.label} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
      </aside>
      <div className={`scrim${open ? " open" : ""}`} onClick={close} />
    </>
  );
}
