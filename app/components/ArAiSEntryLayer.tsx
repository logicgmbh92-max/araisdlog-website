"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./ArAiSEntryLayer.module.css";

type GuidedIntent = {
  id: string;
  label: string;
  prompt: string;
  response: string;
  actionLabel: string;
  actionHref: string;
};

const intents: GuidedIntent[] = [
  {
    id: "product",
    label: "Evaluate ArAIsDLOG",
    prompt: "I want to understand whether ArAIsDLOG fits our governance requirements.",
    response:
      "Begin with the product model: one governed chain connecting AI-system scope, accountable controls, verified evidence, recurring confirmation and reproducible state. The next useful step is to inspect how that chain operates.",
    actionLabel: "Review the product",
    actionHref: "/#product",
  },
  {
    id: "architecture",
    label: "Inspect the control model",
    prompt: "I need to understand the deterministic governance architecture.",
    response:
      "Review the control architecture from system boundary and risk classification through governance controls, evidence lineage, recurring confirmation and audit export. Public guidance stays at product level and does not expose confidential runtime details.",
    actionLabel: "Inspect the architecture",
    actionHref: "/#architecture",
  },
  {
    id: "ai-act",
    label: "EU AI Act readiness",
    prompt: "I need a structured entry point for EU AI Act readiness.",
    response:
      "ArAiS can guide you from organizational role and system context toward the relevant control questions. It does not provide legal advice or determine regulatory conformity. A qualified review remains necessary for binding legal conclusions.",
    actionLabel: "Review EU AI Act guidance",
    actionHref: "/#resources",
  },
  {
    id: "reviewer",
    label: "Auditor or reviewer",
    prompt: "I am evaluating the platform as an auditor, reviewer or external adviser.",
    response:
      "Use the controlled reviewer path to inspect system boundaries, governance controls, evidence metadata, integrity signals, confirmation history and export logic. Reviewer access, scope and findings remain role-gated and audit-visible.",
    actionLabel: "Open the Audit Room",
    actionHref: "https://www.logik-systems.com/audit-room",
  },
  {
    id: "implementation",
    label: "Integration or deployment",
    prompt: "I need to understand implementation, integrations or deployment boundaries.",
    response:
      "Start with the published deployment and integration options. Exact interfaces, permissions, security architecture and implementation effort are defined only after the system boundary and operating context are understood.",
    actionLabel: "Review deployment options",
    actionHref: "/#integrations",
  },
  {
    id: "commercial",
    label: "Trial, plans or demo",
    prompt: "I want the most practical next step for evaluation or purchase.",
    response:
      "Choose a bounded evaluation around one real AI system. That creates a concrete path from fit and scope to evidence mapping, guided review and a clear commercial decision without a generic software tour.",
    actionLabel: "Review plans",
    actionHref: "/#pricing",
  },
];

function inferIntent(pathname: string, hash: string): string {
  if (pathname.startsWith("/privacy") || pathname.startsWith("/disclaimer") || pathname.startsWith("/terms")) {
    return "ai-act";
  }

  if (hash.startsWith("#architecture") || hash.startsWith("#compare")) return "architecture";
  if (hash.startsWith("#integrations")) return "implementation";
  if (hash.startsWith("#resources") || hash.startsWith("#insights")) return "ai-act";
  if (hash.startsWith("#pricing")) return "commercial";
  return "product";
}

export function ArAiSEntryLayer() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [selectedIntentId, setSelectedIntentId] = useState("product");

  useEffect(() => {
    const applyPageContext = () => {
      setSelectedIntentId(inferIntent(pathname, window.location.hash));
    };

    applyPageContext();
    window.addEventListener("hashchange", applyPageContext);
    return () => window.removeEventListener("hashchange", applyPageContext);
  }, [pathname]);

  const selectedIntent = useMemo(
    () => intents.find((intent) => intent.id === selectedIntentId) ?? intents[0],
    [selectedIntentId],
  );

  const actionIsExternal = selectedIntent.actionHref.startsWith("http");

  return (
    <section className={styles.assistant} aria-label="ArAiS governed entry layer">
      {open ? (
        <div className={styles.panel} role="dialog" aria-modal="false" aria-labelledby="arais-title">
          <header className={styles.header}>
            <div>
              <div className={styles.kicker}>Governed entry layer</div>
              <h2 className={styles.title} id="arais-title">Meet ArAiS</h2>
              <div className={styles.aiDisclosure}>AI-assisted guidance · controlled scope</div>
            </div>
            <button
              className={styles.iconButton}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close ArAiS"
            >
              ×
            </button>
          </header>

          <p className={styles.opener}>
            Before I recommend a next step, choose the objective that best matches your visit.
          </p>

          <div className={styles.statusGrid} aria-label="Governance status">
            <div className={styles.statusItem}><span>Intent</span><strong>Classified</strong></div>
            <div className={styles.statusItem}><span>Path</span><strong>Controlled</strong></div>
            <div className={styles.statusItem}><span>Human review</span><strong>Available</strong></div>
          </div>

          <div className={styles.guardrail}>
            ArAiS provides structured product guidance and routing. It does not provide legal advice,
            certify compliance, make binding assurances or disclose confidential implementation details.
          </div>

          <div className={styles.question}>What brings you here today?</div>

          <div className={styles.intentGrid} aria-label="Guided objectives">
            {intents.map((intent) => (
              <button
                className={intent.id === selectedIntent.id ? styles.intentActive : styles.intent}
                key={intent.id}
                type="button"
                onClick={() => setSelectedIntentId(intent.id)}
                aria-pressed={intent.id === selectedIntent.id}
              >
                {intent.label}
              </button>
            ))}
          </div>

          <div className={styles.responseBox} aria-live="polite">
            <div className={styles.responseLabel}>Recommended governed next step</div>
            <div className={styles.prompt}>{selectedIntent.prompt}</div>
            <p className={styles.response}>{selectedIntent.response}</p>
            <a
              className={styles.action}
              href={selectedIntent.actionHref}
              target={actionIsExternal ? "_blank" : undefined}
              rel={actionIsExternal ? "noreferrer" : undefined}
              onClick={() => {
                if (!actionIsExternal) setOpen(false);
              }}
            >
              {selectedIntent.actionLabel}
            </a>
          </div>

          <div className={styles.footerNote}>
            Production, reviewer, legal and contractual decisions remain subject to controlled human or role-gated review.
          </div>
        </div>
      ) : null}

      <button
        className={styles.launcher}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="arais-title"
      >
        <span className={styles.launcherMark} aria-hidden="true">A</span>
        <span>
          <span className={styles.launcherLabel}>Meet ArAiS</span>
          <span className={styles.launcherText}>Start a governed session</span>
        </span>
      </button>
    </section>
  );
}
