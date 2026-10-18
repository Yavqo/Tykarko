import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageShell } from "@/components/PageShell";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Support",
  description: "Answers to common questions about Tykarko One and the waitlist, and how to contact us.",
};

const FAQ: [string, ReactNode][] = [
  [
    "What is Tykarko One?",
    "Tykarko One is a fully autonomous AI vehicle we are developing. It is designed to come to you when summoned, recognize you and open the door as you approach, and drive you door to door without a steering wheel.",
  ],
  [
    "Can I buy or ride in a Tykarko today?",
    <>
      Not yet. Tykarko One is in development, and its features are not available today. Read our{" "}
      <Link href="/legal/vehicle-disclaimer">Vehicle Features &amp; Forward-Looking Statements</Link> notice for
      details.
    </>,
  ],
  [
    "When and where will it be available?",
    "We have not announced a launch date or launch cities. Autonomous vehicles need regulatory approval, which varies by location. Waitlist members will be the first to hear when Tykarko is coming to their area.",
  ],
  ["How much will it cost?", "Pricing has not been announced yet. We will share it with the waitlist first."],
  [
    "Does joining the waitlist cost anything?",
    <>
      No. Joining is free, needs no deposit, and does not commit you to anything. See our{" "}
      <Link href="/legal/terms">Terms of Use</Link>.
    </>,
  ],
  [
    "How do I leave the waitlist or delete my data?",
    <>
      Use the unsubscribe link in any email from us, or email {LEGAL.privacyEmail} and we will remove your
      information. Our <Link href="/legal/privacy">Privacy Policy</Link> explains your rights.
    </>,
  ],
  [
    "How does Tykarko approach safety?",
    <>
      Safety comes before launch dates. Read <Link href="/safety">Our Approach to Safety</Link> for the principles
      we are designing to.
    </>,
  ],
];

const CONTACTS = [
  { title: "General questions", body: "Questions about Tykarko or the waitlist.", email: LEGAL.supportEmail },
  { title: "Privacy requests", body: "Access, correct, or delete your information.", email: LEGAL.privacyEmail },
  { title: "Press & partnerships", body: "Media inquiries and partnership opportunities.", email: LEGAL.pressEmail },
];

export default function SupportPage() {
  return (
    <PageShell>
      <header className="page-hero">
        <p className="legal-eyebrow">Support</p>
        <h1>How can we help?</h1>
        <p>Answers to the most common questions about Tykarko One and the waitlist.</p>
      </header>

      <section className="page-section" aria-labelledby="faq">
        <h2 id="faq">Frequently asked questions</h2>
        <div className="faq">
          {FAQ.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>{q}</summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="page-section" aria-labelledby="contact">
        <h2 id="contact">Contact us</h2>
        <div className="contact-grid">
          {CONTACTS.map((c) => (
            <div key={c.title} className="contact-card">
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <span>{c.email}</span>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
