import { createHash, createPublicKey, verify } from "node:crypto";

const policy = {
  algorithm: "Ed25519",
  closureVersion: "1.0.0",
  effectiveAt: "2026-08-06T00:00:00.000Z",
  policySetName: "EU_AI_ACT_2024",
  policySetVersion: "v1",
  scope: ["www.logik-systems.com", "www.araisdlog.com"],
  serialization: "RFC8785-compatible-stable-json",
  status: "active",
};
const expectedHash = "290afff9850007cc10734415d1fd44ebb5ec0edeeed6aa6e6d803cc01a061eec";
const signature = "tcjx8uwR/bidUr3hi+040wof84cyiGn+TRUZCM79Ay/Xc8S2nZCz/BVMbVCkN4OpgHCax/mkot+FTMWsIrxWBQ==";
const publicKey = `-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEAzyE2U7P0t+VjOD3Y7oXOjy4NH48Z3zVbdljQj/cnbmM=
-----END PUBLIC KEY-----`;

function canonical(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
}

const material = `${canonical(policy)}\n`;
const actualHash = createHash("sha256").update(material).digest("hex");
if (actualHash !== expectedHash) throw new Error("Governance policy hash mismatch.");
if (!verify(null, Buffer.from(material), createPublicKey(publicKey), Buffer.from(signature, "base64"))) {
  throw new Error("Governance policy signature verification failed.");
}

process.stdout.write(`Governance closure verified: ${expectedHash}\n`);
