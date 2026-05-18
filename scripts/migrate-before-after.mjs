/**
 * Uploads the local before/after JPGs to Sanity and creates beforeAfterPair documents.
 *
 * Usage:
 *   1. Add SANITY_API_TOKEN to .env.local  (Editor role, from sanity.io → API → Tokens)
 *   2. node --env-file=.env.local scripts/migrate-before-after.mjs
 */

import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGE_DIR = path.join(__dirname, "../public/images/before_after");

const PAIRS = [
  { before: "before1.jpg", after: "after1.jpg", description: "" },
  { before: "before2.jpg", after: "after2.jpg", description: "" },
  { before: "before3.jpg", after: "after3.jpg", description: "" },
  { before: "before4.jpg", after: "after4.jpg", description: "" },
  { before: "before5.jpg", after: "after5.jpg", description: "" },
  { before: "before6.jpg", after: "after6.jpg", description: "" },
  { before: "before7.jpg", after: "after7.jpg", description: "" },
];

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function uploadImage(filename) {
  const filepath = path.join(IMAGE_DIR, filename);
  if (!existsSync(filepath)) throw new Error(`File not found: ${filepath}`);
  process.stdout.write(`  Uploading ${filename}... `);
  const asset = await client.assets.upload("image", createReadStream(filepath), { filename });
  console.log(`done (${asset._id})`);
  return asset;
}

async function main() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error("Error: SANITY_API_TOKEN is not set in .env.local");
    console.error("Get a token at sanity.io → your project → API → Tokens (Editor role)");
    process.exit(1);
  }

  console.log(`Migrating ${PAIRS.length} before/after pairs to Sanity…\n`);

  for (let i = 0; i < PAIRS.length; i++) {
    const { before, after, description } = PAIRS[i];
    console.log(`Pair ${i + 1}/${PAIRS.length}`);

    const [beforeAsset, afterAsset] = await Promise.all([
      uploadImage(before),
      uploadImage(after),
    ]);

    const doc = {
      _type: "beforeAfterPair",
      order: i + 1,
      before: { _type: "image", asset: { _type: "reference", _ref: beforeAsset._id } },
      after:  { _type: "image", asset: { _type: "reference", _ref: afterAsset._id } },
      ...(description ? { description } : {}),
    };

    const created = await client.create(doc);
    console.log(`  Created document ${created._id}\n`);
  }

  console.log("Migration complete. Add descriptions in the Studio at /studio");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
