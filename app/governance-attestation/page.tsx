import type { Metadata } from "next";
import Link from "next/link";
import {
  GOVERNANCE_CLOSURE_VERSION,
  GOVERNANCE_POLICY,
  GOVERNANCE_POLICY_SHA256,
  GOVERNANCE_POLICY_SIGNATURE_B64,
  GOVERNANCE_PUBLIC_KEY_PEM,
  governanceKeyId,
  verifyEmbeddedGovernancePolicy,
} from "../lib/governance-closure";

export const metadata: Metadata = {
  title: "Public Governance Attestation | ArAIsDLOG",
  description:
    "Crawler-readable Ed25519 governance attestation with exact policy hash, signature, public key and cross-system verification endpoints.",
  alternates: {
    canonical: "/governance-attestation",
    types: {
      "application/json": "https://www.araisdlog.com/api/governance/attestation",
    },
  },
  robots: { index: true, follow: true },
};

const rawEndpoints = [
  "https://www.araisdlog.com/api/governance/attestation",
  "https://www.logik-systems.com/api/governance/attestation",
] as const;

export default function GovernanceAttestationPage() {
  const verified = verifyEmbeddedGovernancePolicy();
  const attestation = {
    ok: verified,
    closureVersion: GOVERNANCE_CLOSURE_VERSION,
    keyId: governanceKeyId(),
    policy: GOVERNANCE_POLICY,
    policySha256: GOVERNANCE_POLICY_SHA256,
    policySignatureB64: GOVERNANCE_POLICY_SIGNATURE_B64,
    publicKeyPem: GOVERNANCE_PUBLIC_KEY_PEM,
  };

  const fields = [
    ["ok", String(attestation.ok)],
    ["closureVersion", attestation.closureVersion],
    ["keyId", attestation.keyId],
    ["policy.algorithm", attestation.policy.algorithm],
    ["policy.policySetName", attestation.policy.policySetName],
    ["policy.policySetVersion", attestation.policy.policySetVersion],
    ["policy.scope", attestation.policy.scope.join(", ")],
    ["policy.status", attestation.policy.status],
    ["policySha256", attestation.policySha256],
    ["policySignatureB64", attestation.policySignatureB64],
    ["publicKeyPem", attestation.publicKeyPem],
  ] as const;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "ArAIsDLOG Public Governance Attestation",
    description:
      "Public, independently retrievable governance policy anchor shared by ArAIsDLOG and Logik Systems.",
    version: attestation.closureVersion,
    identifier: attestation.keyId,
    isAccessibleForFree: true,
    measurementTechnique: "Ed25519 signature verification and SHA-256 policy hashing",
    variableMeasured: fields.map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value,
    })),
    distribution: rawEndpoints.map((contentUrl) => ({
      "@type": "DataDownload",
      contentUrl,
      encodingFormat: "application/json",
    })),
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07111c",
        color: "#f8fafc",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <script
        id="governance-attestation-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 950, fontSize: 20 }}>
          ArAIsDLOG
        </Link>
        <nav aria-label="Attestation navigation" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href={rawEndpoints[0]} style={{ color: "#67e8f9", fontWeight: 850 }}>
            Raw JSON
          </a>
          <a href="https://www.logik-systems.com/trust" style={{ color: "#cbd5e1", fontWeight: 750 }}>
            Logik Systems Trust Center
          </a>
        </nav>
      </header>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "76px 20px 44px" }}>
        <div style={{ color: "#67e8f9", fontSize: 12, fontWeight: 900, letterSpacing: "0.14em" }}>
          PUBLIC CRYPTOGRAPHIC PROOF
        </div>
        <h1
          style={{
            maxWidth: 940,
            margin: "18px 0",
            fontSize: "clamp(42px, 7vw, 82px)",
            lineHeight: 0.98,
            letterSpacing: "-0.055em",
          }}
        >
          Shared governance attestation, exposed without an authenticated session.
        </h1>
        <p style={{ maxWidth: 840, margin: 0, color: "#b6c7d1", fontSize: 18, lineHeight: 1.8 }}>
          This page renders the same verified constants used by the public JSON endpoint. It contains no customer data and no private signing material.
        </p>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "20px 20px 64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          <article style={{ background: "#0f2535", border: "1px solid #1f4c61", borderRadius: 22, padding: 24 }}>
            <div style={{ color: "#67e8f9", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em" }}>
              EMBEDDED POLICY VERIFICATION
            </div>
            <div style={{ marginTop: 14, fontSize: 34, fontWeight: 950 }}>{verified ? "VERIFIED" : "FAILED"}</div>
            <p style={{ marginBottom: 0, color: "#cbd5e1", lineHeight: 1.7 }}>
              The canonical policy hash and Ed25519 signature are verified before this attestation is rendered.
            </p>
          </article>
          <article style={{ background: "#0f2535", border: "1px solid #1f4c61", borderRadius: 22, padding: 24 }}>
            <div style={{ color: "#67e8f9", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em" }}>
              CRYPTOGRAPHIC SEMANTICS
            </div>
            <p style={{ margin: "14px 0 0", color: "#cbd5e1", lineHeight: 1.75 }}>
              Ed25519 is a digital signature algorithm. SHA-256 is a cryptographic hash function. Neither value is presented as an encryption algorithm.
            </p>
          </article>
        </div>
      </section>

      <section data-governance-attestation="public" style={{ maxWidth: 1120, margin: "0 auto", padding: "0 20px 64px" }}>
        <div style={{ background: "#fff", color: "#0f172a", borderRadius: 26, overflow: "hidden" }}>
          <div style={{ padding: 28, borderBottom: "1px solid #e2e8f0" }}>
            <div style={{ color: "#64748b", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em" }}>
              EXACT ATTESTATION FIELDS
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: 36, letterSpacing: "-0.04em" }}>
              Values exposed by this deployment
            </h2>
          </div>
          <div>
            {fields.map(([name, value]) => (
              <div
                key={name}
                data-attestation-field={name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(190px, .35fr) minmax(0, 1fr)",
                  gap: 20,
                  padding: "18px 28px",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <strong>{name}</strong>
                <code style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere", color: "#334155" }}>{value}</code>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 24, background: "#020617", border: "1px solid #1e293b", borderRadius: 26, padding: 28 }}>
          <div style={{ color: "#67e8f9", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em" }}>
            MACHINE-READABLE JSON MIRROR
          </div>
          <pre
            id="governance-attestation-json"
            style={{
              margin: "18px 0 0",
              whiteSpace: "pre-wrap",
              overflowWrap: "anywhere",
              fontSize: 13,
              lineHeight: 1.65,
              color: "#e2e8f0",
            }}
          >
            {JSON.stringify(attestation, null, 2)}
          </pre>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "0 20px 72px" }}>
        <div style={{ background: "#0f2535", border: "1px solid #1f4c61", borderRadius: 26, padding: 28 }}>
          <div style={{ color: "#67e8f9", fontSize: 11, fontWeight: 900, letterSpacing: "0.12em" }}>
            CROSS-SYSTEM VERIFICATION CONTRACT
          </div>
          <h2 style={{ margin: "12px 0", fontSize: 34, letterSpacing: "-0.04em" }}>
            Compare both public endpoints byte for byte
          </h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.75 }}>
            The shared governance anchor contract requires exact equality for <code>keyId</code>, <code>policySha256</code>, <code>policySignatureB64</code> and <code>publicKeyPem</code> across ArAIsDLOG and Logik Systems.
          </p>
          <div style={{ display: "grid", gap: 12, marginTop: 22 }}>
            {rawEndpoints.map((endpoint) => (
              <a
                key={endpoint}
                href={endpoint}
                style={{
                  display: "block",
                  padding: 16,
                  borderRadius: 14,
                  background: "#07111c",
                  color: "#67e8f9",
                  fontWeight: 850,
                  overflowWrap: "anywhere",
                }}
              >
                {endpoint}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #1e293b", color: "#94a3b8", padding: "34px 20px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
          <span>ArAIsDLOG public proof surface</span>
          <span>No legal certification or conformity assessment claim.</span>
        </div>
      </footer>
    </main>
  );
}
