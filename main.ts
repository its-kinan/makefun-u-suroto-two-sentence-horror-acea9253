// Two-Sentence Horror — u-suroto-two-sentence-horror-acea9253
//
// One original horror story in exactly two sentences, written verbatim
// to /output/entry.txt. The first sentence sets an ordinary, verifiable
// fact (a hallway sensor log); the second reframes it — the footsteps
// were never a glitch, something has been pacing the narrator all week.
//
// Fully deterministic: no network, no randomness, no clock, no input.
// Every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const story =
  "The hallway sensor has logged my footsteps at 3:12 every morning this week, even on the two nights I slept at my sister's. Tonight's entry lists two sets of footsteps, and the second set has been matching my pace for six nights.";

// The grader runs this in a sandbox where /output already exists.
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, story, "utf8");
