// gta6-meme-x-01 — the post on X is the entry, so this program's whole job
// is to hand the grader the post's address. It reads POST.json from the
// repository and writes those exact bytes to the output directory, nothing
// more: no network, no clock, no other files, so two runs always produce
// the same output and the gate can read the post from the copy.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const POST_FILE = "POST.json";

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const post = readFileSync(join(BOT_DIR, POST_FILE));
  writeFileSync(join(OUTPUT_DIR, POST_FILE), post);
} catch (err) {
  console.error(
    `could not copy ${POST_FILE} from ${BOT_DIR} to ${OUTPUT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
