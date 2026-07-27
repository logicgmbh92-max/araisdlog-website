"use client";

import { useState } from "react";

const controls = [
  ["01", "System boundary", "Know exactly which AI system, owner, purpose and deployment context is governed."],
  ["02", "Risk classification", "Translate scope and role into a deterministic compliance state—without guesswork."],
  ["03", "Governance controls", "Assign evidence-backed controls across legal, risk, security and operations."],
  ["04", "Evidence lineage", "Version every artefact with SHA-256 integrity and an unbroken predecessor chain."],
  ["05", "Recurring confirmation", "Reconfirm controls on schedule and degrade status when proof becomes stale."],
  ["06", "Audit export", "Deliver one structured, reproducible record of state, evidence and decisions."],
];

const comparison = [
  {
    category: "GRC & privacy suites",
    examples: "OneTrust · DataGuard · EQS",
    focus: "Broad enterprise risk, privacy and policy workflows",
    difference: "ArAIsDLOG adds a purpose-built deterministic execution layer for AI control state and evidence.",
  },
  {
    category: "AI governance platforms",
    examples: "Credo AI · Holistic AI · IBM watsonx.governance",
    focus: "AI inventory, risk assessment, governance and monitoring",
    difference: "ArAIsDLOG is designed around reproducible state transitions, recurring confirmation and audit-grade lineage.",
  },
  {
    category: "Security & compliance automation",
    examples: "Vanta · Drata",
    focus: "Control collection and assurance for security frameworks",
    difference: "ArAIsDLOG models AI-system obligations and operational governance—not generic control readiness.",
  },
  {
    category: "AI runtime guardrails",
    examples: "Prediction Guard · model monitoring tools",
    focus: "Technical model behavior, safety and runtime signals",
    difference: "ArAIsDLOG turns technical and human evidence into accountable governance decisions and proof.",
  },
];

const nameParts = [
  ["Ar", "Architecture", "The governed structure connecting systems, roles, controls, evidence and decisions."],
  ["AI", "Artificial Intelligence", "The AI systems your organization provides, deploys, purchases or embeds."],
  ["DLOG", "Deterministic Layer of Governance", "The operational layer that turns obligations and evidence into a reproducible control state."],
];

const actQuestions = [
  ["01", "What is the EU AI Act?", "A risk-based European regulation for AI providers, deployers, importers and distributors—with duties that depend on the system, use case and organizational role."],
  ["02", "Why does DLOG matter?", "Because obligations alone do not prove execution. DLOG connects each requirement to an owner, a control, current evidence, confirmation history and a visible state."],
  ["03", "What does ArAIsDLOG do?", "It registers AI systems, classifies scope, assigns controls, protects evidence lineage, schedules confirmations, records findings and produces a structured audit export."],
  ["04", "How is it useful?", "Legal, compliance, risk, audit and system owners work from the same record instead of rebuilding the truth across policies, spreadsheets, tickets and folders."],
];

const extensions = [
  ["LOCAL / EDGE", "Local deployment & hardware", "Scoped deployment options for environments that require local processing, controlled infrastructure or hardware integration."],
  ["SEMANTIC / IoT", "Connected operational context", "Map devices, data sources and semantic system context into the governed AI-system boundary."],
  ["WISE / API", "Governed API keys", "Controlled integration patterns for exchanging evidence and status while keeping ownership and access explicit."],
  ["EXPERT REVIEW", "Human assurance", "Create review-ready records for legal counsel, auditors and other qualified experts without replacing their professional judgment."],
];

const insights = [
  ["EU AI ACT", "From legal obligation to operational evidence", "A practical path from system role and risk classification to accountable controls."],
  ["DLOG", "Why deterministic governance changes the audit conversation", "How explicit rules, evidence lineage and state history make decisions reproducible."],
  ["GDPR", "Where AI governance and data protection meet", "Keep purpose, accountability, evidence and review context connected—without conflating two legal regimes."],
];

const faq = [
  ["Is ArAIsDLOG another EU AI Act checklist?", "No. A checklist records an answer at a point in time. ArAIsDLOG maintains an operational control state: evidence is versioned, confirmations recur, findings affect status and every relevant change is traceable."],
  ["Does ArAIsDLOG replace legal counsel or an auditor?", "No. It gives legal, compliance, risk, audit and technical teams a shared, inspectable system of record. It supports professional judgment; it does not claim certification or legal advice."],
  ["Can it govern third-party AI systems?", "Yes. The system boundary can cover internally developed, purchased and embedded AI. Ownership, purpose, provider evidence and deployer obligations remain visible in one control model."],
  ["What makes the record audit-ready?", "Linked system scope, governance controls, immutable evidence metadata, SHA-256 verification, confirmation history, findings and a structured export make the recorded state reproducible and reviewable."],
  ["Is it only for high-risk AI?", "No. The control depth can follow the risk and role. The strongest value appears where accountability, evidence freshness and repeatable oversight matter most."],
  ["How does ArAIsDLOG support GDPR-focused work?", "It can connect AI-system governance with purpose, ownership, evidence and review records that matter to data-protection teams. It does not replace a GDPR assessment, DPO judgment or legal advice."],
  ["Can ArAIsDLOG run locally or connect to hardware and IoT?", "Local, edge, hardware, semantic and IoT requirements can be scoped as deployment and integration options. Availability depends on the agreed architecture and implementation."],
  ["Are APIs and API keys supported?", "API integration and governed key handling can be included in Standard and Enterprise scopes. Exact interfaces, permissions and security requirements are defined during implementation."],
  ["Is there a trial?", "The Office edition is designed for a 30-day evaluation around one bounded AI system, so your team can validate the operating model with real evidence."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="ArAIsDLOG home">
          <img className="brand-logo" src="/araisdlog-euipo-logo-transparent.png" alt="" aria-hidden="true" />
          <span>ArAIs<span>DLOG</span></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
          <a href="#architecture" onClick={() => setMenuOpen(false)}>Architecture</a>
          <a href="#compare" onClick={() => setMenuOpen(false)}>Why ArAIsDLOG</a>
          <a href="#resources" onClick={() => setMenuOpen(false)}>EU AI Act</a>
          <a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Plans</a>
        </div>
        <a className="nav-cta" href="mailto:compliance@logik-systems.com?subject=ArAIsDLOG%20demo%20request">Request a demo <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span>EU AI Act control infrastructure</span><b>FOR AI DEPLOYERS</b></div>
          <h1>Control every<br />AI system.<br /><em>Prove every decision.</em></h1>
          <p className="hero-lead"><strong>ArAIsDLOG turns EU AI Act obligations into continuous operational control.</strong> It connects your AI inventory, accountable controls, verified evidence and recurring confirmations in one audit-ready system.</p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:compliance@logik-systems.com?subject=ArAIsDLOG%20guided%20demo">See ArAIsDLOG in action <Arrow /></a>
            <a className="button text" href="#product">How it works <span>↓</span></a>
          </div>
          <p className="hero-assurance">Focused walkthrough · one real AI system · no generic sales deck</p>
          <div className="hero-flow" aria-label="ArAIsDLOG operating model">
            <span><b>01</b><strong>REGISTER</strong><small>AI systems</small></span>
            <i>→</i>
            <span><b>02</b><strong>CONTROL</strong><small>obligations & owners</small></span>
            <i>→</i>
            <span><b>03</b><strong>PROVE</strong><small>evidence & decisions</small></span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="registered-mark">
            <span className="registered-mark-label">REGISTERED PRODUCT MARK</span>
            <img src="/araisdlog-euipo-logo-transparent.png" alt="Registered ArAIsDLOG product logo: silver shield, circuitry and connected control nodes" />
          </div>
          <div className="hero-console" aria-label="Product state example">
            <div className="console-top">
              <span>CONTROL RECORD / HR-RECRUIT-04</span>
              <span className="live"><i /> DEMO STATE</span>
            </div>
            <div className="system-title">
              <div><small>AI SYSTEM</small><strong>Candidate ranking</strong></div>
              <span className="risk">HIGH-RISK</span>
            </div>
            <div className="state-ring">
              <div className="ring"><span>CONTROL STATE</span><strong>82</strong><small>/ 100</small></div>
              <div className="state-detail">
                <span>CURRENT RESULT</span>
                <strong>CONDITIONALLY<br />CONTROLLED</strong>
                <small>2 confirmations due</small>
              </div>
            </div>
            <div className="console-list">
              <div><span>Risk management</span><b className="ok">VERIFIED</b></div>
              <div><span>Human oversight</span><b className="warn">DUE IN 4D</b></div>
              <div><span>Evidence integrity</span><b className="ok">HASHED</b></div>
              <div><span>Post-market monitoring</span><b className="ok">ACTIVE</b></div>
            </div>
            <div className="console-foot"><span>LAST EVENT</span><b>CONFIRMATION_COMPLETED</b><time>14:32:08 UTC</time></div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Product capabilities">
        <div>AI INVENTORY <i>✦</i> GOVERNANCE CONTROLS <i>✦</i> EVIDENCE LINEAGE <i>✦</i> RECURRING CONFIRMATIONS <i>✦</i> AUDIT EXPORT <i>✦</i> DETERMINISTIC STATE</div>
      </section>

      <section className="audience-bar" aria-label="Who ArAIsDLOG is for">
        <span>BUILT FOR</span>
        <strong>AI Governance</strong>
        <strong>Legal & Compliance</strong>
        <strong>Risk & Internal Audit</strong>
        <strong>System Owners</strong>
        <b>PROVIDERS + DEPLOYERS</b>
      </section>

      <section className="section intro" id="product">
        <div className="section-kicker">01 / WHAT IT IS</div>
        <div className="intro-copy">
          <h2>From policy language<br />to operational control.</h2>
          <p>Most governance programs tell you what should exist. ArAIsDLOG shows what exists now, what evidence supports it, who confirmed it and what must happen next.</p>
        </div>
        <div className="definition-card">
          <span>DLOG /dē-log/</span>
          <h3>Deterministic<br />Layer of Governance</h3>
          <p>A control architecture that converts obligations, evidence and accountable human decisions into a reproducible system state.</p>
        </div>
        <div className="logic-chain" aria-label="Before and after ArAIsDLOG">
          <article>
            <span>WITHOUT A CONTROL LAYER</span>
            <h3>Scattered proof</h3>
            <p>Spreadsheets, policies, tickets and evidence sit apart. Nobody can reproduce the current control state.</p>
          </article>
          <i>→</i>
          <article className="logic-engine">
            <span>ARAISDLOG</span>
            <h3>Deterministic control</h3>
            <p>Scope, obligations, owners, evidence and confirmations operate as one governed chain.</p>
          </article>
          <i>→</i>
          <article>
            <span>AUDIT-READY OUTCOME</span>
            <h3>One provable state</h3>
            <p>Every reviewer can see what is controlled, why, by whom, with which evidence and as of when.</p>
          </article>
        </div>
      </section>

      <section className="section name-system" aria-labelledby="name-heading">
        <div className="section-kicker">02 / THE PRODUCT, DECODED</div>
        <div className="name-head">
          <h2 id="name-heading">The name is<br />the architecture.</h2>
          <p>ArAIsDLOG is the AI governance product of <strong>Logik Systems OOD</strong>. Its name describes exactly what it delivers: an architecture for AI with a deterministic governance layer.</p>
        </div>
        <div className="name-grid">
          {nameParts.map(([code, title, body]) => (
            <article key={code}>
              <b>{code}</b><span>{title}</span><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section architecture" id="architecture">
        <div className="section-kicker light">03 / CONTROL ARCHITECTURE</div>
        <div className="arch-head">
          <h2>One chain of control.<br /><em>No missing context.</em></h2>
          <p>ArAIsDLOG keeps every governance decision attached to the AI system and the proof behind it—from initial classification to the next confirmation cycle.</p>
        </div>
        <div className="control-grid">
          {controls.map(([num, title, body]) => (
            <article key={num}>
              <span>{num}</span>
              <div className="control-icon">{num === "01" ? "◎" : num === "02" ? "◇" : num === "03" ? "⌁" : num === "04" ? "⛓" : num === "05" ? "↻" : "⇩"}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section state-section">
        <div className="state-copy">
          <div className="section-kicker">04 / THE DECISIVE DIFFERENCE</div>
          <h2>Evidence changes.<br /><em>So should the state.</em></h2>
          <p>ArAIsDLOG does not freeze compliance in a report. When evidence expires, a confirmation is missed or a critical finding appears, the control state changes—predictably and visibly.</p>
          <ul>
            <li><span>01</span> Rules are explicit and versioned</li>
            <li><span>02</span> State degradation is automatic</li>
            <li><span>03</span> Every transition leaves an audit event</li>
          </ul>
        </div>
        <div className="timeline-card">
          <div className="timeline-head"><span>STATE HISTORY</span><b>REPRODUCIBLE</b></div>
          {[
            ["JUL 08", "SYSTEM_PROVISIONED", "UNASSESSED"],
            ["JUL 10", "EVIDENCE_VERSION_ADDED", "IN REVIEW"],
            ["JUL 10", "EVIDENCE_HASH_VERIFIED", "CONTROLLED"],
            ["JUL 24", "CONFIRMATION_DUE", "WARNING"],
            ["JUL 27", "CONFIRMATION_COMPLETED", "CONTROLLED"],
          ].map((item, i) => (
            <div className="timeline-row" key={item[1]}>
              <time>{item[0]}</time><i className={i === 3 ? "yellow" : ""} />
              <span>{item[1]}</span><b>{item[2]}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="section compare" id="compare">
        <div className="section-kicker">05 / MARKET POSITION</div>
        <div className="compare-head">
          <h2>Built to complete the stack,<br />not imitate it.</h2>
          <p>The AI governance market is broad. ArAIsDLOG concentrates on the layer that organizations must be able to inspect: the deterministic link between obligation, control, evidence and current state.</p>
        </div>
        <div className="compare-table">
          <div className="compare-row table-head"><span>Category</span><span>Typical focus</span><span>The ArAIsDLOG advantage</span></div>
          {comparison.map((row) => (
            <div className="compare-row" key={row.category}>
              <span><strong>{row.category}</strong><small>{row.examples}</small></span>
              <span>{row.focus}</span>
              <span>{row.difference}</span>
            </div>
          ))}
        </div>
        <p className="comparison-note">Comparisons reflect publicly described category capabilities and positioning as of July 2026. Product scope varies by plan and configuration. Third-party names are trademarks of their respective owners.</p>
      </section>

      <section className="section resources" id="resources">
        <div className="resource-main">
          <div className="section-kicker light">06 / EU AI ACT, EXPLAINED</div>
          <h2>Know the obligation.<br />Operate the proof.</h2>
          <p>Practical guidance for providers and deployers—translated into the control questions your teams need to answer.</p>
          <a href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noreferrer">Open the EU Commission overview <Arrow /></a>
        </div>
        <div className="resource-cards">
          <article><span>FIELD NOTE 01</span><h3>Why point-in-time readiness is not operational governance</h3><a href="#product">Read the principle <Arrow /></a></article>
          <article><span>FIELD NOTE 02</span><h3>What makes evidence reviewable across confirmation cycles</h3><a href="#architecture">Explore the chain <Arrow /></a></article>
          <article><span>OFFICIAL SOURCE</span><h3>Regulation (EU) 2024/1689 — full legal text</h3><a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" target="_blank" rel="noreferrer">Open EUR-Lex <Arrow /></a></article>
        </div>
      </section>

      <section className="section act-explained">
        <div className="act-heading">
          <div className="section-kicker">07 / FROM RULE TO OPERATION</div>
          <h2>Four questions.<br /><em>One clear answer.</em></h2>
          <p>ArAIsDLOG makes the relationship between the EU AI Act and day-to-day governance visible without pretending that software replaces legal analysis.</p>
        </div>
        <div className="act-grid">
          {actQuestions.map(([num, title, body]) => (
            <article key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
        <div className="gdpr-band"><b>GDPR FOCUS</b><strong>AI governance and data protection—connected, not confused.</strong><p>ArAIsDLOG keeps purpose, ownership, evidence and review context available to privacy teams while maintaining a distinct EU AI Act control model.</p></div>
      </section>

      <section className="section integrations">
        <div className="section-kicker light">08 / DEPLOYMENT & INTEGRATION OPTIONS</div>
        <div className="integration-head"><h2>Fit governance to<br />the real environment.</h2><p>From office evaluation to local infrastructure and connected systems, the deployment boundary is defined explicitly before implementation.</p></div>
        <div className="extension-grid">
          {extensions.map(([tag, title, body]) => <article key={tag}><span>{tag}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
        <p className="scope-note">Local, hardware, IoT, semantic and API capabilities are scoped options. Availability, security architecture and implementation effort depend on the agreed deployment.</p>
      </section>

      <section className="section insights" id="insights">
        <div className="insights-head">
          <div><div className="section-kicker">09 / TUTORIALS, NEWS & TAGS</div><h2>Build understanding.<br />Then build proof.</h2></div>
          <div className="tag-list"><span>EU AI ACT</span><span>DLOG</span><span>AI GOVERNANCE</span><span>GDPR</span><span>EVIDENCE</span></div>
        </div>
        <div className="insight-grid">
          {insights.map(([tag, title, body]) => <article key={title}><span>{tag}</span><h3>{title}</h3><p>{body}</p><a href="#resources">Open topic <Arrow /></a></article>)}
        </div>
        <div className="news-strip">
          <div><span>NEWSLETTER + RSS</span><h3>EU AI Act and DLOG updates—without the noise.</h3><p>Receive product notes, tutorials and selected regulatory updates.</p></div>
          <a className="button primary" href="mailto:compliance@logik-systems.com?subject=Subscribe%20to%20ArAIsDLOG%20updates">Subscribe by email <Arrow /></a>
          <a className="button text" href="https://www.logik-systems.com" target="_blank" rel="noreferrer">Tutorials at Logik Systems <Arrow /></a>
        </div>
      </section>

      <section className="section plans" id="pricing">
        <div className="section-kicker">10 / PRODUCT LINE</div>
        <div className="plans-head"><h2>Start with one system.<br />Scale with proof.</h2><p>No generic software tour. We begin with a bounded AI system, its actual control evidence and a concrete review question.</p></div>
        <div className="plan-grid">
          <article>
            <span>OFFICE</span><h3>Evaluate with one real system</h3><p className="price">30-day trial</p>
            <ul><li>One bounded AI system</li><li>Control and evidence mapping</li><li>Guided review environment</li><li>Structured validation export</li></ul>
            <a href="mailto:compliance@logik-systems.com?subject=ArAIsDLOG%20Office%2030-day%20trial">Request Office trial <Arrow /></a>
          </article>
          <article className="featured">
            <span>STANDARD</span><h3>Run continuous governance</h3><p className="price">Operational</p>
            <ul><li>Multiple AI systems</li><li>Recurring confirmations</li><li>Role-based accountability</li><li>Evidence lineage and findings</li></ul>
            <a href="mailto:compliance@logik-systems.com?subject=ArAIsDLOG%20Standard">Design Standard scope <Arrow /></a>
          </article>
          <article>
            <span>ENTERPRISE</span><h3>Control at organizational scale</h3><p className="price">Custom</p>
            <ul><li>Enterprise system portfolio</li><li>Custom control frameworks</li><li>Integration and API access</li><li>Dedicated implementation support</li></ul>
            <a href="mailto:compliance@logik-systems.com?subject=ArAIsDLOG%20enterprise">Talk to us <Arrow /></a>
          </article>
        </div>
      </section>

      <section className="section faq">
        <div><div className="section-kicker">11 / FAQ</div><h2>Direct answers.</h2></div>
        <div className="faq-list">
          {faq.map(([q, a], i) => (
            <button key={q} onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
              <span><b>{String(i + 1).padStart(2, "0")}</b>{q}</span><i>{openFaq === i ? "−" : "+"}</i>
              {openFaq === i && <p>{a}</p>}
            </button>
          ))}
        </div>
      </section>

      <section className="section contact-panel" id="contact">
        <div><div className="section-kicker light">12 / FEEDBACK & CONTACT</div><h2>Questions, feedback<br />or a real use case?</h2></div>
        <div className="contact-actions">
          <p>Talk directly to Logik Systems OOD about a demo, product feedback, implementation scope, expert review or legal information.</p>
          <a className="button primary" href="mailto:compliance@logik-systems.com?subject=ArAIsDLOG%20contact">compliance@logik-systems.com <Arrow /></a>
        </div>
      </section>

      <section className="final-cta">
        <span className="cta-orbit" aria-hidden="true" />
        <div className="section-kicker light">READY WHEN THE PROOF MATTERS</div>
        <h2>Make AI governance<br /><em>inspectable.</em></h2>
        <p>Bring one real system. Leave with a clear control state.</p>
        <a className="button primary" href="mailto:compliance@logik-systems.com?subject=ArAIsDLOG%20demo%20request">Request a focused demo <Arrow /></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img className="brand-logo" src="/araisdlog-euipo-logo-transparent.png" alt="" aria-hidden="true" /><span>ArAIs<span>DLOG</span></span></a>
        <p>Deterministic control infrastructure for operational AI governance.</p>
        <div><a href="#product">Product</a><a href="#architecture">Architecture</a><a href="#compare">Why us</a><a href="#insights">News & tutorials</a><a href="#pricing">Plans</a></div>
        <div><a href="#contact">Feedback & contact</a><a href="https://www.logik-systems.com" target="_blank" rel="noreferrer">www.logik-systems.com</a><a href="/terms">Terms and Conditions</a><a href="/disclaimer">Disclaimer</a><a href="mailto:compliance@logik-systems.com?subject=ArAIsDLOG%20legal%20information">Legal / EUIPO information</a><a href="mailto:compliance@logik-systems.com?subject=ArAIsDLOG%20privacy">Privacy</a></div>
        <small>© 2026 Logik Systems OOD. ArAIsDLOG™ is a trade mark of Logik Systems OOD; EUIPO details are available on request. Product information is not legal advice, certification or a guarantee of regulatory conformity. Third-party trade marks belong to their respective owners.</small>
      </footer>
    </main>
  );
}
