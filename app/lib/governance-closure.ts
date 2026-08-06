import { createHash, createPublicKey, verify as ed25519Verify } from "node:crypto";

export const GOVERNANCE_CLOSURE_VERSION = "1.0.0" as const;
export const GOVERNANCE_POLICY = Object.freeze({
  algorithm: "Ed25519",
  closureVersion: GOVERNANCE_CLOSURE_VERSION,
  effectiveAt: "2026-08-06T00:00:00.000Z",
  policySetName: "EU_AI_ACT_2024",
  policySetVersion: "v1",
  scope: ["www.logik-systems.com", "www.araisdlog.com"],
  serialization: "RFC8785-compatible-stable-json",
  status: "active",
});

export const GOVERNANCE_POLICY_SHA256 =
  "290afff9850007cc10734415d1fd44ebb5ec0edeeed6aa6e6d803cc01a061eec";
export const GOVERNANCE_POLICY_SIGNATURE_B64 =
  "tcjx8uwR/bidUr3hi+040wof84cyiGn+TRUZCM79Ay/Xc8S2nZCz/BVMbVCkN4OpgHCax/mkot+FTMWsIrxWBQ==";
export const GOVERNANCE_PUBLIC_KEY_PEM = `-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEAzyE2U7P0t+VjOD3Y7oXOjy4NH48Z3zVbdljQj/cnbmM=
-----END PUBLIC KEY-----`;

export function canonicalStringify(value: unknown): string {
  if (value === null || typeof value !== "object") {
    const encoded = JSON.stringify(value);
    if (encoded === undefined) throw new TypeError("Unsupported governance policy value.");
    return encoded;
  }
  if (Array.isArray(value)) return `[${value.map(canonicalStringify).join(",")}]`;

  const record = value as Record<string, unknown>;
  return `{${Object.keys(record)
    .sort()
    .map((key) => `${JSON.stringify(key)}:${canonicalStringify(record[key])}`)
    .join(",")}}`;
}

export function sha256Hex(material: string | Buffer): string {
  return createHash("sha256").update(material).digest("hex");
}

export function governanceKeyId(): string {
  const der = createPublicKey(GOVERNANCE_PUBLIC_KEY_PEM).export({ type: "spki", format: "der" });
  return `ed25519:${sha256Hex(der).slice(0, 32)}`;
}

export function verifyEmbeddedGovernancePolicy(): boolean {
  const canonical = canonicalStringify(GOVERNANCE_POLICY);
  return (
    sha256Hex(canonical) === GOVERNANCE_POLICY_SHA256 &&
    ed25519Verify(
      null,
      Buffer.from(canonical, "utf8"),
      createPublicKey(GOVERNANCE_PUBLIC_KEY_PEM),
      Buffer.from(GOVERNANCE_POLICY_SIGNATURE_B64, "base64"),
    )
  );
}
