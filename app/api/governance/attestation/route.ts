export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import {
  GOVERNANCE_CLOSURE_VERSION,
  GOVERNANCE_POLICY,
  GOVERNANCE_POLICY_SHA256,
  GOVERNANCE_POLICY_SIGNATURE_B64,
  GOVERNANCE_PUBLIC_KEY_PEM,
  governanceKeyId,
  verifyEmbeddedGovernancePolicy,
} from "../../../lib/governance-closure";

export async function GET() {
  if (!verifyEmbeddedGovernancePolicy()) {
    return NextResponse.json(
      { ok: false, error: "governance_policy_verification_failed" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      closureVersion: GOVERNANCE_CLOSURE_VERSION,
      keyId: governanceKeyId(),
      policy: GOVERNANCE_POLICY,
      policySha256: GOVERNANCE_POLICY_SHA256,
      policySignatureB64: GOVERNANCE_POLICY_SIGNATURE_B64,
      publicKeyPem: GOVERNANCE_PUBLIC_KEY_PEM,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
        "X-Governance-Policy-SHA256": GOVERNANCE_POLICY_SHA256,
      },
    },
  );
}
