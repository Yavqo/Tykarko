import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsOfUse() {
  return (
    <article className="legal-doc">
      <h1>Terms of Use</h1>
      <p className="legal-updated">Last updated: {LEGAL.updated}</p>

      <p className="legal-lead">
        These Terms of Use govern your use of the {LEGAL.brand} website, operated by {LEGAL.entity}. By using
        the website or joining the waitlist, you agree to these terms. If you do not agree, please do not use
        the website.
      </p>

      <h2>1. About this website</h2>
      <p>
        This website provides information about {LEGAL.brand} and vehicles we are developing. It is
        informational only. Nothing on the website is an offer to sell a vehicle or a service.
      </p>

      <h2>2. Waitlist and reservations</h2>
      <ul>
        <li>Joining the waitlist is free and does not create a purchase agreement or require a deposit.</li>
        <li>
          A place on the waitlist does not guarantee that a vehicle or service will be offered to you, in your
          area, or by any particular date.
        </li>
        <li>
          Features, specifications, pricing, availability, and timelines may change. Any future sale will be
          governed by a separate written agreement.
        </li>
        <li>You must give a valid email address that belongs to you, and you can leave the waitlist at any time.</li>
      </ul>

      <h2>3. Vehicle features</h2>
      <p>
        Features shown on this website, including AI pickup, automatic door opening, and autonomous driving, are
        in development and are not yet available. Please read our{" "}
        <Link href="/legal/vehicle-disclaimer">Vehicle Features &amp; Forward-Looking Statements</Link> notice.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        The website and its content, including the {LEGAL.brand} name, logo, designs, text, and graphics, are
        owned by or licensed to {LEGAL.entity} and are protected by intellectual property laws. You may view the
        website for personal, non-commercial use. You may not copy, modify, distribute, or use our trademarks
        without our written permission.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the website in violation of any law or regulation.</li>
        <li>Submit false information or sign up on behalf of someone else without permission.</li>
        <li>Interfere with the website&rsquo;s security or operation, or attempt to gain unauthorized access.</li>
        <li>Scrape, crawl, or harvest content or data by automated means without our consent.</li>
      </ul>

      <h2>6. Third-party links</h2>
      <p>
        The website may link to third-party sites. We are not responsible for their content or practices, and
        your use of them is at your own risk.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        The website is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the fullest extent
        permitted by law, we disclaim all warranties, express or implied, including warranties of
        merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the
        website will be uninterrupted, error-free, or free of harmful components.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {LEGAL.entity} will not be liable for any indirect, incidental,
        special, consequential, or punitive damages, or any loss of data, profits, or goodwill, arising from your
        use of the website. Nothing in these terms limits liability that cannot be limited by law.
      </p>

      <h2>9. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless {LEGAL.entity} from claims arising out of your misuse of the
        website or violation of these terms.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These terms are governed by the laws of {LEGAL.jurisdiction}, without regard to conflict-of-law rules.
        If you are a consumer, you keep any protections given to you by the mandatory laws of your country of
        residence.
      </p>

      <h2>11. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The &ldquo;Last updated&rdquo; date shows when they last
        changed. Continuing to use the website after changes means you accept the updated terms.
      </p>

      <h2>12. Contact us</h2>
      <p>
        {LEGAL.entity}
        <br />
        {LEGAL.address}
        <br />
        {LEGAL.email}
      </p>
    </article>
  );
}
