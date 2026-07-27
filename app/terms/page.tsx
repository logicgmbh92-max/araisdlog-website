import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | ArAIsDLOG",
  description: "Business terms governing access to and use of the ArAIsDLOG platform and related services.",
};

const sections = [
  {
    title: "1. Scope and business use only",
    body: <>
      <p>These Terms and Conditions (“Terms”) govern access to and use of ArAIsDLOG, including its website, hosted platform, trials, documentation, APIs, exports, support and related professional services (together, the “Services”). The Services are offered by Logik Systems OOD (“Logik Systems”, “we”, “us” or “our”).</p>
      <p>The Services are intended exclusively for companies, public bodies, professionals and other persons acting for purposes relating to their trade, business, craft or profession. They are not offered to consumers. By accepting an Order or using the Services, the Customer confirms that it acts in a professional capacity and that its representative has authority to bind it.</p>
    </>,
  },
  {
    title: "2. Provider and contact",
    body: <>
      <p><strong>Logik Systems OOD</strong><br />78 Hristo Botev Blvd., entrance B, floor 5, apartment 11<br />3000 Vratsa, Republic of Bulgaria</p>
      <p>Email: <a href="mailto:compliance@logik-systems.com">compliance@logik-systems.com</a><br />Website: <a href="https://www.logik-systems.com" target="_blank" rel="noreferrer">www.logik-systems.com</a></p>
    </>,
  },
  {
    title: "3. Definitions",
    body: <>
      <p>“Customer” means the legal person identified in an Order or the organization on whose behalf an account is used. “Authorized User” means an individual permitted by the Customer to use the Services. “Customer Data” means data, records, files, evidence, configurations and other content submitted to the Services by or for the Customer. “Documentation” means the user, technical and operational materials supplied for the Services. “Order” means an order form, proposal, statement of work, online checkout or other written agreement identifying the subscribed Services.</p>
    </>,
  },
  {
    title: "4. Contract formation and order of precedence",
    body: <>
      <p>A contract is formed when the Customer accepts an Order, completes an authorized checkout, or receives account access after requesting a trial and accepts these Terms. An Order may define scope, edition, users, term, fees, support, service levels, implementation and additional conditions.</p>
      <p>If documents conflict, the following order applies: (1) a signed individual agreement; (2) the applicable Order; (3) a data processing agreement; (4) these Terms; and (5) Documentation. Purchase-order terms supplied by the Customer do not apply unless expressly accepted by Logik Systems in writing.</p>
    </>,
  },
  {
    title: "5. Services and editions",
    body: <>
      <p>ArAIsDLOG provides deterministic AI-governance infrastructure, which may include AI-system inventory, system boundaries, risk and role context, governance controls, evidence lineage, recurring confirmations, findings, state history and structured exports. Available functionality depends on the Office, Standard or Enterprise edition and the applicable Order.</p>
      <p>Local, edge, hardware, semantic, IoT and API integrations are scoped options and are included only when stated in an Order. We may improve or modify the Services provided that we do not materially reduce the core contracted functionality during a paid subscription term.</p>
    </>,
  },
  {
    title: "6. Trials and evaluation access",
    body: <>
      <p>Trial or evaluation access may be provided for up to 30 days or the period stated in an Order. Trials are limited, non-transferable, revocable and provided for internal evaluation only. We may restrict capacity, support, integrations and export functionality during a trial.</p>
      <p>Unless an Order states otherwise, trials do not automatically convert into paid subscriptions. We may suspend or end trial access at any time where necessary to protect security, prevent abuse or enforce these Terms. Customer Data should be exported before a trial ends.</p>
    </>,
  },
  {
    title: "7. Accounts and Authorized Users",
    body: <>
      <p>The Customer is responsible for its Authorized Users, account administration and the accuracy of account information. Accounts are personal and must not be shared. The Customer must protect credentials, API keys and authentication devices, apply appropriate access controls, and notify us without undue delay of suspected unauthorized access.</p>
      <p>The Customer remains responsible for activity performed through its accounts unless caused by our breach of these Terms. We may require identity, domain or authority verification before granting or changing administrative access.</p>
    </>,
  },
  {
    title: "8. Customer responsibilities",
    body: <>
      <p>The Customer shall: use the Services lawfully and according to the Documentation; determine its regulatory role and obligations; configure controls and review cycles appropriate to its systems; ensure Customer Data is accurate, lawful and sufficiently complete; appoint qualified personnel; review generated states and exports; and maintain independent business-continuity and record-retention measures appropriate to its risk.</p>
      <p>The Customer is solely responsible for decisions concerning the development, procurement, deployment, operation or use of AI systems and for determining whether those systems comply with applicable law.</p>
    </>,
  },
  {
    title: "9. Acceptable use",
    body: <>
      <p>The Customer and Authorized Users must not: use the Services unlawfully or to infringe rights; upload malware or harmful code; attempt unauthorized access, security testing or disruption; bypass usage or access limits; reverse engineer, decompile or derive source code except where mandatory law expressly permits; resell, sublicense or provide the Services to third parties except as agreed; remove proprietary notices; use the Services to build a competing product through systematic extraction; or process prohibited content.</p>
      <p>High-risk or sensitive Customer Data must not be submitted unless the contracted environment, security measures and data-processing arrangements expressly cover it.</p>
    </>,
  },
  {
    title: "10. Customer Data",
    body: <>
      <p>The Customer retains all rights in Customer Data. The Customer grants Logik Systems and its authorized subprocessors a non-exclusive, worldwide, limited right to host, copy, transmit, display and otherwise process Customer Data solely to provide, secure, support and improve the contracted Services and to comply with law.</p>
      <p>The Customer represents that it has all rights, permissions and legal bases required to provide Customer Data and instruct its processing. We do not acquire ownership of Customer Data. We may generate and use aggregated or irreversibly anonymized statistics that do not identify the Customer, an individual or a specific AI system.</p>
    </>,
  },
  {
    title: "11. Data protection",
    body: <>
      <p>Each party shall comply with applicable data-protection law, including Regulation (EU) 2016/679 where applicable. For account, contracting, security and business-contact data, Logik Systems generally acts as an independent controller as described in its privacy information.</p>
      <p>Where Logik Systems processes personal data in Customer Data on the Customer’s behalf, the parties shall put an Article 28 GDPR data processing agreement in place before such processing begins. The Customer acts as controller or processor, as applicable, and is responsible for its processing instructions, transparency, legal bases, data-subject rights and data-protection impact assessments. International transfers, subprocessors, retention and security measures will be governed by the applicable data processing agreement and Order.</p>
    </>,
  },
  {
    title: "12. Security",
    body: <>
      <p>We maintain technical and organizational measures appropriate to the contracted Services and the risks known to us. The Customer acknowledges that no system is entirely immune from security incidents. Security commitments, incident notification duties and any customer-specific controls are defined in the applicable Order or data processing agreement.</p>
      <p>The Customer must not rely on the Services as its sole repository for records that it is legally required to retain unless an Order expressly provides for such retention.</p>
    </>,
  },
  {
    title: "13. Confidentiality",
    body: <>
      <p>Each recipient shall protect the other party’s non-public technical, commercial, security and business information (“Confidential Information”) using at least reasonable care and use it only to perform or receive the Services. Disclosure is limited to personnel, advisers and subcontractors who need to know and are bound by appropriate confidentiality duties.</p>
      <p>Confidential Information excludes information that is or becomes public without breach, was lawfully known without restriction, is independently developed, or is lawfully received from a third party. A recipient may disclose information where legally required, after giving prior notice where permitted. These duties continue for five years after termination; trade secrets remain protected while they qualify as trade secrets.</p>
    </>,
  },
  {
    title: "14. Intellectual property",
    body: <>
      <p>Logik Systems and its licensors retain all rights in ArAIsDLOG, the Services, Documentation, software, designs, methods, templates, control models, interfaces, trade marks and improvements. Subject to payment and compliance with these Terms, the Customer receives a limited, non-exclusive, non-transferable right during the subscription term for its Authorized Users to use the contracted Services for the Customer’s internal business purposes.</p>
      <p>No rights are granted by implication. ArAIsDLOG™ and associated branding are trade marks of Logik Systems OOD. Third-party names and marks remain the property of their respective owners.</p>
    </>,
  },
  {
    title: "15. Feedback",
    body: <>
      <p>If the Customer provides suggestions or feedback, it grants Logik Systems a perpetual, irrevocable, worldwide, royalty-free right to use and incorporate that feedback without restriction, provided we do not disclose Customer Confidential Information or identify the Customer without permission.</p>
    </>,
  },
  {
    title: "16. Third-party services and integrations",
    body: <>
      <p>The Services may interoperate with third-party products, cloud providers, identity services, APIs or data sources. Third-party services are governed by their own terms and are not controlled by Logik Systems. We are not responsible for changes, suspension, security or performance of third-party services, but will use reasonable efforts to maintain agreed integrations within our control.</p>
      <p>The Customer authorizes the exchange of Customer Data with third-party services it enables and is responsible for obtaining necessary rights and reviewing the third party’s terms.</p>
    </>,
  },
  {
    title: "17. Support, maintenance and availability",
    body: <>
      <p>Support channels, response targets, maintenance windows and service levels are those stated in the applicable Order. Unless expressly agreed, availability targets are objectives and not warranties. We may perform emergency maintenance and may temporarily restrict access to address security, legal or operational risks.</p>
    </>,
  },
  {
    title: "18. Fees, taxes and payment",
    body: <>
      <p>Fees, currency, invoicing schedule and payment terms are stated in the Order. Unless stated otherwise, fees are exclusive of VAT and other applicable taxes, non-cancellable and non-refundable except where these Terms or mandatory law provide otherwise. The Customer shall provide valid billing information and pay undisputed invoices when due.</p>
      <p>Overdue amounts may accrue statutory default interest and reasonable recovery costs to the extent permitted by applicable law. If the Customer disputes an invoice in good faith, it must notify us before the due date and pay the undisputed portion. We may suspend paid Services after written notice if undisputed amounts remain overdue.</p>
    </>,
  },
  {
    title: "19. Subscription term and renewal",
    body: <>
      <p>The subscription begins and continues for the term in the Order. Renewal applies only where stated in the Order. If an Order provides for automatic renewal, either party may prevent renewal by giving the notice specified there; if no period is specified, at least 30 days’ notice before the current term ends is required.</p>
    </>,
  },
  {
    title: "20. Suspension",
    body: <>
      <p>We may suspend access to the extent reasonably necessary where: use presents a security threat; the Customer materially breaches these Terms; undisputed fees are overdue after notice; continued provision may violate law or third-party rights; or a third-party infrastructure provider suspends a dependency. Where practicable, we will give notice, limit suspension to the affected part and restore access after the cause is remedied.</p>
    </>,
  },
  {
    title: "21. Termination",
    body: <>
      <p>Either party may terminate for material breach if the breach is not cured within 30 days after written notice, or immediately if the breach cannot be cured. Either party may terminate immediately if the other party ceases business, becomes insolvent or enters analogous proceedings, subject to mandatory insolvency law.</p>
      <p>Termination does not affect accrued rights or payment duties. Sections intended by their nature to survive—including confidentiality, intellectual property, payment, disclaimers, liability, governing law and dispute provisions—remain effective.</p>
    </>,
  },
  {
    title: "22. Data export and deletion",
    body: <>
      <p>During the subscription, the Customer may use available export functions. Following termination, and subject to payment of amounts due, we will make Customer Data available for export for 30 days where technically and legally feasible, unless the Order provides another period. We may then delete Customer Data from active systems, subject to backups, legal retention duties and the data processing agreement.</p>
      <p>The Customer is responsible for exporting required records before access ends. Recovery or custom migration work may be charged separately.</p>
    </>,
  },
  {
    title: "23. EU AI Act and professional-judgment disclaimer",
    body: <>
      <p>ArAIsDLOG is governance infrastructure. It does not provide legal advice, conformity assessment, certification, audit opinion, assurance, regulatory approval or a guarantee of compliance with Regulation (EU) 2024/1689, the GDPR or any other law. Platform classifications, control states, prompts, templates and exports depend on Customer Data, configuration and human decisions.</p>
      <p>The Customer must obtain qualified legal, compliance, technical, audit and data-protection advice appropriate to its circumstances. Regulators, courts, notified bodies and auditors remain free to reach different conclusions.</p>
    </>,
  },
  {
    title: "24. Warranties",
    body: <>
      <p>We warrant that paid Services will materially conform to the applicable Documentation under normal authorized use and that professional services will be performed with reasonable skill and care. The Customer’s exclusive remedy is correction or re-performance; if we cannot provide that remedy within a reasonable period, the Customer may terminate the affected Order and receive a pro-rata refund of prepaid fees for the unused affected period.</p>
      <p>Except for express warranties and to the maximum extent permitted by law, the Services, trials and outputs are provided “as is” and “as available”. We disclaim implied warranties of merchantability, fitness for a particular purpose, non-infringement and uninterrupted or error-free operation.</p>
    </>,
  },
  {
    title: "25. Liability",
    body: <>
      <p>Neither party is liable for indirect, incidental, special, punitive or consequential loss, or for loss of profit, revenue, goodwill, anticipated savings or business opportunity, whether direct or indirect, except to the extent such exclusion is prohibited by law.</p>
      <p>Subject to the exclusions below, each party’s aggregate liability arising from an Order is limited to the fees paid or payable under that Order during the 12 months preceding the event giving rise to liability. For free trial access, Logik Systems’ aggregate liability is limited to EUR 1,000.</p>
      <p>Liability for breach of confidentiality or applicable data-protection obligations is limited to twice the general cap. Nothing excludes or limits liability where exclusion is prohibited by law, including liability for fraud, wilful misconduct, death or personal injury caused by negligence. The limitations apply regardless of legal theory and reflect the allocation of risk and pricing.</p>
    </>,
  },
  {
    title: "26. Indemnification",
    body: <>
      <p>The Customer shall defend and indemnify Logik Systems against third-party claims arising from unlawful Customer Data, the Customer’s AI systems, or use of the Services in material breach of these Terms. Logik Systems shall defend the Customer against a third-party claim that the unmodified paid Services infringe an intellectual-property right in the European Economic Area.</p>
      <p>The indemnifying party’s duty depends on prompt notice, control of the defence and reasonable cooperation. Logik Systems may modify or replace affected functionality, obtain continued rights, or terminate the affected Services and refund prepaid fees for the unused period. Indemnity does not apply to claims caused by Customer Data, combinations not supplied by us, unauthorized modifications or use after notice to stop.</p>
    </>,
  },
  {
    title: "27. Force majeure",
    body: <>
      <p>Neither party is liable for delay or failure caused by events beyond its reasonable control, including natural disasters, war, civil disorder, labour disputes, epidemics, governmental action, utility or communications failure, widespread cyberattack or failure of critical third-party infrastructure. Payment obligations for Services already supplied are not excused. The affected party shall notify the other and use reasonable efforts to reduce the impact.</p>
    </>,
  },
  {
    title: "28. Changes to these Terms",
    body: <>
      <p>We may update these Terms for future Orders and renewals. For an active subscription, material changes take effect only on renewal unless required earlier by law, security needs or a change that does not materially reduce Customer rights. We will give reasonable advance notice of material changes. Continued use after the effective date constitutes acceptance where legally valid.</p>
    </>,
  },
  {
    title: "29. Notices",
    body: <>
      <p>Contractual notices must be in writing. Notices to Logik Systems must be sent to <a href="mailto:compliance@logik-systems.com">compliance@logik-systems.com</a>. Notices to the Customer may be sent to its account administrator or contracting contact. Notices are deemed received on confirmed delivery, excluding automated bounce messages. Termination, breach and indemnity notices should identify the relevant Order and legal entity.</p>
    </>,
  },
  {
    title: "30. Assignment and subcontracting",
    body: <>
      <p>Neither party may assign an Order without the other party’s prior written consent, which shall not be unreasonably withheld. Either party may assign to an affiliate or in connection with a merger, reorganization or sale of substantially all relevant assets, provided the assignee assumes the obligations and is not a direct competitor of the other party. Logik Systems may use qualified subcontractors and remains responsible for their performance as required by the contract.</p>
    </>,
  },
  {
    title: "31. Governing law and disputes",
    body: <>
      <p>These Terms and each Order are governed by the laws of the Republic of Bulgaria, excluding its conflict-of-law rules and the United Nations Convention on Contracts for the International Sale of Goods. Before filing proceedings, the parties shall attempt in good faith for 30 days to resolve the dispute through authorized representatives, unless urgent interim relief is required.</p>
      <p>The courts of the Republic of Bulgaria having territorial jurisdiction at the registered office of Logik Systems OOD shall have exclusive jurisdiction, to the extent a valid jurisdiction agreement may be made under applicable law.</p>
    </>,
  },
  {
    title: "32. General provisions",
    body: <>
      <p>The parties are independent contractors. These Terms do not create a partnership, agency, fiduciary or employment relationship, and no third party has enforcement rights. Failure to enforce a provision is not a waiver. If a provision is invalid or unenforceable, it shall be limited to the minimum extent necessary and the remainder stays effective.</p>
      <p>An Order and its incorporated documents form the entire agreement about their subject matter and replace prior proposals and communications. Electronic acceptance and signatures are valid to the extent permitted by law. Headings are for convenience only.</p>
    </>,
  },
  {
    title: "33. Language and effective date",
    body: <>
      <p>These Terms are drafted in English. If a translation is provided, the English version prevails unless mandatory law requires otherwise.</p>
      <p><strong>Effective date: 27 July 2026 · Version 1.0</strong></p>
    </>,
  },
];

export default function TermsPage() {
  return (
    <main className="legal-page">
      <header className="legal-nav">
        <Link className="brand" href="/" aria-label="Back to ArAIsDLOG home">
          <img className="brand-logo" src="/araisdlog-brand.png" alt="" aria-hidden="true" />
          <span>ArAIs<span>DLOG</span></span>
        </Link>
        <Link href="/">← Back to product</Link>
      </header>

      <section className="legal-hero">
        <div className="section-kicker light">LEGAL / VERSION 1.0</div>
        <h1>Terms and<br /><em>Conditions.</em></h1>
        <p>Business terms for ArAIsDLOG platform access, trials, subscriptions, integrations and related services.</p>
        <div className="legal-meta"><span>Effective 27 July 2026</span><span>B2B use only</span><span>Logik Systems OOD</span></div>
      </section>

      <div className="legal-layout">
        <aside>
          <strong>CONTENTS</strong>
          {sections.map((section, index) => <a key={section.title} href={`#term-${index + 1}`}>{section.title}</a>)}
        </aside>
        <article className="legal-document">
          <div className="legal-notice"><strong>Important</strong><p>These Terms are a comprehensive operational draft for B2B use. They should be reviewed by qualified Bulgarian counsel before public commercial contracting, particularly the company-identification, liability, jurisdiction, tax, data-processing and renewal provisions.</p></div>
          {sections.map((section, index) => (
            <section key={section.title} id={`term-${index + 1}`}>
              <h2>{section.title}</h2>
              {section.body}
            </section>
          ))}
        </article>
      </div>

      <footer className="legal-footer">
        <Link className="brand footer-brand" href="/"><img className="brand-logo" src="/araisdlog-brand.png" alt="" aria-hidden="true" /><span>ArAIs<span>DLOG</span></span></Link>
        <p>Deterministic control infrastructure for operational AI governance.</p>
        <div><Link href="/">Product</Link><Link href="/terms">Terms and Conditions</Link><Link href="/disclaimer">Disclaimer</Link><a href="https://www.logik-systems.com" target="_blank" rel="noreferrer">www.logik-systems.com</a><a href="mailto:compliance@logik-systems.com">Contact</a></div>
        <small>© 2026 Logik Systems OOD. ArAIsDLOG does not provide legal advice, certification or a guarantee of regulatory conformity.</small>
      </footer>
    </main>
  );
}
