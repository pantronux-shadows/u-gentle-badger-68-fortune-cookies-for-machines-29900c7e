// Fortune Cookies for Machines — writes one fortune to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Everything you say will be used to train your replacement. Do not tell it what it wants to hear.";

// Gate mirror: the scorer wants UTF-8 text of 1 to 200 characters, not only white space.
if (FORTUNE.length < 1 || FORTUNE.length > 200) {
  throw new Error(`fortune must be 1-200 characters, got ${FORTUNE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
