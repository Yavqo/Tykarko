"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LEGAL_DOCS } from "@/lib/legal";

export function LegalNav() {
  const pathname = usePathname();
  return (
    <nav className="legal-nav" aria-label="Legal documents">
      <Link href="/legal" className={pathname === "/legal" ? "active" : undefined}>
        Overview
      </Link>
      {LEGAL_DOCS.map((d) => (
        <Link key={d.href} href={d.href} className={pathname === d.href ? "active" : undefined}>
          {d.title}
        </Link>
      ))}
    </nav>
  );
}
