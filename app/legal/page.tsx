import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL, LEGAL_DOCS } from "@/lib/legal";

export const metadata: Metadata = { title: "Legal" };

export default function LegalIndex() {
  return (
    <article className="legal-doc">
      <h1>Legal</h1>
      <p className="legal-lead">
        The policies and notices that apply when you visit this website or join the {LEGAL.brand} waitlist.
      </p>
      <div className="legal-cards">
        {LEGAL_DOCS.map((d) => (
          <Link key={d.href} href={d.href} className="legal-card">
            <h2>{d.title}</h2>
            <p>{d.summary}</p>
            <span aria-hidden="true">Read &rarr;</span>
          </Link>
        ))}
      </div>
      <p>
        Questions about any of these documents? Contact us at {LEGAL.email}.
      </p>
    </article>
  );
}
