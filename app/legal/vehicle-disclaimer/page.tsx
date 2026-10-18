import type { Metadata } from "next";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = { title: "Vehicle Features & Forward-Looking Statements" };

export default function VehicleDisclaimer() {
  return (
    <article className="legal-doc">
      <h1>Vehicle Features &amp; Forward-Looking Statements</h1>
      <p className="legal-updated">Last updated: {LEGAL.updated}</p>

      <p className="legal-lead">
        {LEGAL.brand} vehicles are in development. Please read this notice before relying on anything described
        on this website.
      </p>

      <h2>1. Features in development</h2>
      <p>
        Tykarko One and the features described on this website, including AI pickup, recognition-based door
        opening, self-parking, self-charging, the cabin assistant, over-the-air updates, and fully autonomous
        driving, are under development. They are <strong>not currently available</strong> and may change, be
        delayed, or never be released.
      </p>

      <h2>2. Autonomous operation</h2>
      <ul>
        <li>
          Autonomous driving depends on regulatory approval, which varies by country, state, and city. Features
          may be limited to specific areas, roads, weather, and conditions.
        </li>
        <li>
          Until a feature is approved and released for your location, no Tykarko feature should be treated as
          able to drive without human supervision.
        </li>
        <li>
          Statistics shown on this website, such as sensor coverage and availability, describe design goals,
          not tested or certified performance.
        </li>
      </ul>

      <h2>3. Illustrations</h2>
      <p>
        Vehicle images, animations, and descriptions on this website are illustrative concepts. Production
        vehicles may differ in design, equipment, and specification.
      </p>

      <h2>4. Forward-looking statements</h2>
      <p>
        This website contains forward-looking statements about our plans, products, features, timelines, and
        availability. Words such as &ldquo;will,&rdquo; &ldquo;plan,&rdquo; &ldquo;expect,&rdquo; and
        &ldquo;designed to&rdquo; identify these statements. They are based on our current expectations and
        involve risks and uncertainties, including technology development, testing results, regulatory
        approvals, supply chains, and funding. Actual results may differ materially. We undertake no obligation
        to update these statements except as required by law.
      </p>

      <h2>5. Contact us</h2>
      <p>Questions about this notice can be sent to {LEGAL.email}.</p>
    </article>
  );
}
