import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Our Approach to Safety",
  description: "The safety principles Tykarko One is being designed to, and how we plan to report on them.",
};

const PRINCIPLES = [
  {
    title: "Redundant sensing",
    body: "Cameras and radar are designed to overlap, so the vehicle can still see around it if one sensor is blocked or fails.",
  },
  {
    title: "Fail-safe by design",
    body: "If a critical system fails, the vehicle is designed to reach a safe state, such as slowing down and pulling over, rather than continuing to drive.",
  },
  {
    title: "Proven before release",
    body: "Features are planned to move through simulation, closed-course testing, and supervised road testing before they are offered to anyone.",
  },
  {
    title: "Only where approved",
    body: "We plan to operate autonomously only in places and conditions where regulators have approved it, and to work closely with them along the way.",
  },
  {
    title: "Privacy built in",
    body: "Features like recognizing you at the door are being designed to use as little personal data as possible and to keep you in control of it.",
  },
  {
    title: "Open about results",
    body: "We intend to publish safety data from road testing so that riders, regulators, and the public can judge our progress for themselves.",
  },
];

export default function SafetyPage() {
  return (
    <PageShell>
      <header className="page-hero">
        <p className="legal-eyebrow">Safety</p>
        <h1>Safety comes first.</h1>
        <p>
          Tykarko One is in development. This page sets out the principles we are designing to. These are goals,
          not test results.
        </p>
      </header>

      <section className="page-section" aria-labelledby="principles">
        <h2 id="principles">Our principles</h2>
        <div className="principles">
          {PRINCIPLES.map((p, i) => (
            <article key={p.title}>
              <span className="principle-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-callout">
        <h2>Safety Report</h2>
        <p>
          We will publish our first safety report once road testing begins. Join the waitlist to be notified when
          it is available.
        </p>
        <Link className="btn btn-primary" href="/#reserve">
          Join the Waitlist
        </Link>
      </section>

      <p className="page-note">
        Features described on this site are not yet available. See our{" "}
        <Link href="/legal/vehicle-disclaimer">Vehicle Features &amp; Forward-Looking Statements</Link>.
      </p>
    </PageShell>
  );
}
