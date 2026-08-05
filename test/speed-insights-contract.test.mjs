import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function source(path) {
  return readFile(path, "utf8");
}

test("Speed Insights remains installed in the root layout", async () => {
  const packageJson = JSON.parse(await source("package.json"));
  const layout = await source("app/layout.tsx");

  assert.equal(
    typeof packageJson.dependencies?.["@vercel/speed-insights"],
    "string",
    "@vercel/speed-insights must remain a production dependency",
  );
  assert.match(
    layout,
    /import\s+\{\s*SpeedInsights\s*\}\s+from\s+["']@vercel\/speed-insights\/next["']/,
  );
  assert.match(layout, /<SpeedInsights\s*\/>/);
});

test("public privacy information discloses performance telemetry", async () => {
  const privacy = await source("app/privacy/page.tsx");

  assert.match(privacy, /Vercel Speed Insights/);
  assert.match(privacy, /web performance/i);
  assert.match(privacy, /route/i);
  assert.match(privacy, /country/i);
  assert.match(privacy, /legitimate interests/i);
});
