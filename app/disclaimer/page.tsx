import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | ArAIsDLOG",
  description: "Legal, regulatory and product disclaimer for the ArAIsDLOG platform and website.",
  alternates: { canonical: "/disclaimer" },
};

const sections = [
  {
    title: "1. General information",
    body: <p>This website and the ArAIsDLOG platform are operated by Logik Systems OOD. All website, product, demonstration, documentation, tutorial, news and communication content is provided for general business and product-information purposes. It does not constitute an offer unless expressly identified as a binding Order or individual agreement.</p>,
  },
  {
    title: "2. No legal, regulatory or professional advice",
    body: <>
      <p>ArAIsDLOG provides technical governance infrastructure and structured operational information. Nothing on this website or in the Services constitutes legal, regulatory, compliance, audit, accounting, tax, cybersecurity or data-protection advice.</p>
      <p>Customers and visitors must obtain advice from appropriately qualified professionals for their specific organization, systems, risks, jurisdictions and regulatory roles.</p>
    </>,
  },
  {
    title: "3. No certification or guarantee of compliance",
    body: <>
      <p>Use of ArAIsDLOG does not constitute or replace a conformity assessment, certification, notified-body assessment, statutory audit, assurance engagement, regulatory approval or legal opinion. Logik Systems OOD does not guarantee that use of the platform will establish compliance with Regulation (EU) 2024/1689, the GDPR or any other legal requirement.</p>
      <p>Regulators, courts, auditors, notified bodies and advisers may interpret requirements or evidence differently.</p>
    </>,
  },
  {
    title: "4. Customer responsibility and human judgment",
    body: <>
      <p>Platform classifications, control states, findings, reminders, templates and exports depend on the scope, configuration, evidence and decisions supplied by the Customer and its Authorized Users. They must be reviewed by competent personnel.</p>
      <p>The Customer remains solely responsible for its AI systems, regulatory role, risk classification, governance decisions, evidence quality, legal bases, deployment choices, monitoring and required human oversight.</p>
    </>,
  },
  {
    title: "5. Product descriptions and future functionality",
    body: <>
      <p>Product descriptions explain current positioning and intended capabilities but do not create a warranty or binding delivery commitment. Exact functionality, deployment model, integrations, support and service levels are determined exclusively by the applicable Order.</p>
      <p>Local, edge, hardware, semantic, IoT, WISE and API-key capabilities are scoped implementation options and are not included unless expressly agreed in writing.</p>
    </>,
  },
  {
    title: "6. Demonstrations and sample information",
    body: <p>Dashboards, scores, system names, event histories, evidence states and other information shown in demonstrations or illustrations may be fictional, simplified or anonymized. They are intended to explain the operating model and must not be treated as a customer result, benchmark, regulatory determination or representation of a live production environment.</p>,
  },
  {
    title: "7. Accuracy, completeness and availability",
    body: <>
      <p>We use reasonable care when preparing content but do not warrant that all information is complete, current, error-free or suitable for a particular purpose. Laws, regulatory guidance, standards, third-party products and technical conditions may change after publication.</p>
      <p>We may update, correct, suspend or withdraw website content and non-contracted functionality without notice. Contracted availability and support commitments apply only where stated in an Order.</p>
    </>,
  },
  {
    title: "8. EU AI Act and GDPR information",
    body: <p>References to the EU AI Act and GDPR are high-level operational explanations. They do not reproduce every obligation, exemption, transition date, national implementation measure or supervisory interpretation. The Customer must independently determine which rules apply to its role as provider, deployer, importer, distributor, product manufacturer, controller or processor.</p>,
  },
  {
    title: "9. External links and third-party services",
    body: <>
      <p>Links to EU institutions, regulators, standards organizations, service providers and other websites are provided for convenience. Logik Systems OOD does not control and is not responsible for their availability, accuracy, security, privacy practices or content.</p>
      <p>A link does not imply endorsement, partnership or approval. Third-party services and integrations remain subject to their own terms.</p>
    </>,
  },
  {
    title: "10. Intellectual property and trade marks",
    body: <p>Website content, product design, software, documentation, control models and ArAIsDLOG branding are protected by applicable intellectual-property law. ArAIsDLOG™ is a figurative European Union trade mark application of Logik Systems OOD, EUTM application No. 019396329, filed with the European Union Intellectual Property Office (EUIPO) on 17 July 2026. Registration has not yet been claimed. Third-party product and company names are trade marks of their respective owners and are used only for identification or comparison.</p>,
  },
  {
    title: "11. Security and electronic communications",
    body: <p>No internet service or electronic communication can be guaranteed to be entirely secure or uninterrupted. Visitors must use appropriate security controls and must not send secrets, credentials, sensitive personal data or confidential evidence through ordinary email unless an approved secure channel has been agreed.</p>,
  },
  {
    title: "12. Limitation and contractual precedence",
    body: <>
      <p>To the maximum extent permitted by applicable law, Logik Systems OOD is not liable for decisions made solely in reliance on general website content or demonstration materials. Mandatory statutory liability remains unaffected.</p>
      <p>For Customers, liability and remedies are governed by the applicable Order and the <Link href="/terms">ArAIsDLOG Terms and Conditions</Link>. If this Disclaimer conflicts with a signed agreement, the signed agreement prevails.</p>
    </>,
  },
  {
    title: "13. Company and contact",
    body: <>
      <p><strong>Logik Systems OOD</strong><br />78 Hristo Botev Blvd., entrance B, floor 5, apartment 11<br />3000 Vratsa, Republic of Bulgaria</p>
      <p>Email: <a href="mailto:compliance@logik-systems.com">compliance@logik-systems.com</a><br />Corporate website: <a href="https://www.logik-systems.com" target="_blank" rel="noreferrer">www.logik-systems.com</a></p>
    </>,
  },
  {
    title: "14. Effective date",
    body: <p><strong>Effective date: 27 July 2026 · Version 1.0</strong></p>,
  },
];

export default function DisclaimerPage() {
  return (
    <main className="legal-page">
      <header className="legal-nav">
        <Link className="brand" href="/" aria-label="Back to ArAIsDLOG home">
          <img className="brand-logo" src="/araisdlog-euipo-logo-transparent.png" alt="" aria-hidden="true" />
          <span>ArAIs<span>DLOG</span></span>
        </Link>
        <Link href="/">← Back to product</Link>
      </header>

      <section className="legal-hero">
        <div className="section-kicker light">LEGAL / VERSION 1.0</div>
        <h1>Product & legal<br /><em>Disclaimer.</em></h1>
        <p>Clear boundaries for regulatory information, platform outputs, demonstrations, third-party links and professional judgment.</p>
        <div className="legal-meta"><span>Effective 27 July 2026</span><span>EU AI governance</span><span>Logik Systems OOD</span></div>
      </section>

      <div className="legal-layout">
        <aside>
          <strong>CONTENTS</strong>
          {sections.map((section, index) => <a key={section.title} href={`#disclaimer-${index + 1}`}>{section.title}</a>)}
        </aside>
        <article className="legal-document">
          <div className="legal-notice"><strong>CORE BOUNDARY</strong><p>ArAIsDLOG supports inspectable AI governance. It does not replace legal analysis, qualified human judgment, conformity assessment, certification or regulatory approval.</p></div>
          {sections.map((section, index) => (
            <section key={section.title} id={`disclaimer-${index + 1}`}>
              <h2>{section.title}</h2>
              {section.body}
            </section>
          ))}
        </article>
      </div>

      <footer className="legal-footer">
        <Link className="brand footer-brand" href="/"><img className="brand-logo" src="/araisdlog-euipo-logo-transparent.png" alt="" aria-hidden="true" /><span>ArAIs<span>DLOG</span></span></Link>
        <p>Deterministic control infrastructure for operational AI governance.</p>
        <div><Link href="/">Product</Link><Link href="/terms">Terms and Conditions</Link><Link href="/disclaimer">Disclaimer</Link><Link href="/privacy">Privacy</Link><a href="https://www.logik-systems.com" target="_blank" rel="noreferrer">Logik Systems OOD</a></div>
        <small>© 2026 Logik Systems OOD. ArAIsDLOG does not provide legal advice, certification or a guarantee of regulatory conformity.</small>
      </footer>
    </main>
  );
}
