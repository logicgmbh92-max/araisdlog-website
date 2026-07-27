import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Notice | ArAIsDLOG",
  description: "Privacy information for visitors and business contacts of ArAIsDLOG.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  ["1. Controller", <p key="c"><strong>Logik Systems OOD</strong><br />78 Hristo Botev Blvd., entrance B, floor 5, apartment 11<br />3000 Vratsa, Republic of Bulgaria<br />Email: <a href="mailto:compliance@logik-systems.com">compliance@logik-systems.com</a></p>],
  ["2. Scope", <p key="s">This notice explains how Logik Systems OOD processes personal data when you visit the ArAIsDLOG website, contact us, request a demonstration or enter a business relationship with us. Customer environments and contracted processing are additionally governed by the applicable agreement and, where required, a data processing agreement.</p>],
  ["3. Data we process", <p key="d">We may process business contact details, correspondence, enquiry and contract information, technical connection and security data, and information that you voluntarily provide. Please do not submit credentials, special-category data or confidential evidence through ordinary email.</p>],
  ["4. Purposes and legal bases", <p key="p">We process data to operate and secure the website, respond to enquiries, prepare and perform contracts, document business communications and comply with legal obligations. The legal bases may include Article 6(1)(b), (c) and (f) GDPR and, where applicable, consent under Article 6(1)(a) GDPR.</p>],
  ["5. Hosting and recipients", <p key="h">Technical service providers may process limited data on our behalf for hosting, security, communications and business operations. Data is disclosed only where necessary, contractually protected or legally required.</p>],
  ["6. International transfers", <p key="i">Where a recipient processes data outside the European Economic Area, we use an applicable GDPR transfer mechanism and supplementary safeguards where required.</p>],
  ["7. Retention", <p key="r">We retain personal data only for as long as necessary for the stated purpose, contractual performance, legal retention periods, the establishment or defence of claims, and proportionate security records.</p>],
  ["8. Your rights", <p key="y">Subject to the GDPR conditions, you may request access, rectification, erasure, restriction, portability or object to processing. Where processing relies on consent, you may withdraw it for the future. Contact <a href="mailto:compliance@logik-systems.com">compliance@logik-systems.com</a>.</p>],
  ["9. Supervisory authority", <p key="a">You may lodge a complaint with a competent data-protection supervisory authority. In Bulgaria, the competent authority is the Commission for Personal Data Protection.</p>],
  ["10. Security", <p key="e">We apply proportionate technical and organizational measures designed to protect personal data against unauthorized access, alteration, loss and disclosure. No internet transmission can be guaranteed to be completely secure.</p>],
  ["11. Changes", <p key="u"><strong>Effective date: 27 July 2026 · Version 1.0</strong><br />We may update this notice when processing activities, services or legal requirements change. The current version is published on this page.</p>],
] as const;

export default function PrivacyPage() {
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
        <div className="section-kicker light">PRIVACY / VERSION 1.0</div>
        <h1>Privacy<br /><em>Notice.</em></h1>
        <p>Clear information about personal data processed through the ArAIsDLOG website and business communications.</p>
        <div className="legal-meta"><span>Effective 27 July 2026</span><span>GDPR</span><span>Logik Systems OOD</span></div>
      </section>

      <div className="legal-layout">
        <aside>
          <strong>CONTENTS</strong>
          {sections.map((section, index) => <a key={section[0]} href={`#privacy-${index + 1}`}>{section[0]}</a>)}
        </aside>
        <article className="legal-document">
          <div className="legal-notice"><strong>CONTACT</strong><p>Privacy requests and questions: compliance@logik-systems.com</p></div>
          {sections.map((section, index) => <section key={section[0]} id={`privacy-${index + 1}`}><h2>{section[0]}</h2>{section[1]}</section>)}
        </article>
      </div>

      <footer className="legal-footer">
        <Link className="brand footer-brand" href="/"><img className="brand-logo" src="/araisdlog-euipo-logo-transparent.png" alt="" aria-hidden="true" /><span>ArAIs<span>DLOG</span></span></Link>
        <p>Deterministic control infrastructure for operational AI governance.</p>
        <div><Link href="/">Product</Link><Link href="/terms">Terms and Conditions</Link><Link href="/disclaimer">Disclaimer</Link><Link href="/privacy">Privacy</Link><a href="https://www.logik-systems.com" target="_blank" rel="noreferrer">Logik Systems OOD</a></div>
        <small>© 2026 Logik Systems OOD. This notice provides data-protection information and does not constitute legal advice.</small>
      </footer>
    </main>
  );
}
