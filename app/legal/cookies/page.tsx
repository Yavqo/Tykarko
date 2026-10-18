import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicy() {
  return (
    <article className="legal-doc">
      <h1>Cookie Policy</h1>
      <p className="legal-updated">Last updated: {LEGAL.updated}</p>

      <p className="legal-lead">
        This policy explains how the {LEGAL.brand} website uses cookies and similar technologies.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files that a website stores on your device. Similar technologies include local
        storage and pixels. They can be used to make a site work, remember preferences, or measure how a site
        is used.
      </p>

      <h2>2. Cookies we use</h2>
      <p>
        This website currently does <strong>not</strong> use advertising, analytics, or social media tracking
        cookies. Our fonts are served from our own website, so loading a page does not send your information to
        a font provider.
      </p>
      <table className="legal-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Purpose</th>
            <th>In use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strictly necessary</td>
            <td>Security and core site delivery by our hosting provider</td>
            <td>Only if required by the host</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>Measuring visits and site performance</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Advertising</td>
            <td>Personalized ads and cross-site tracking</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Changes</h2>
      <p>
        If we add analytics or other non-essential cookies in the future, we will update this policy and, where
        required by law, ask for your consent before setting them.
      </p>

      <h2>4. Managing cookies</h2>
      <p>
        You can block or delete cookies in your browser settings. Blocking strictly necessary cookies may stop
        parts of the website from working.
      </p>

      <h2>5. More information</h2>
      <p>
        For more about how we handle personal information, see our <Link href="/legal/privacy">Privacy Policy</Link>,
        or contact us at {LEGAL.privacyEmail}.
      </p>
    </article>
  );
}
