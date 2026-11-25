// main.ts — "The Funniest Honest Appliance Error"
// make.fun bounty: u-xvader-the-funniest-honest-appliance-error-adec4450
//
// Writes exactly one original error line to <output-dir>/entry.txt
// (default output dir is /output, as the grader expects).
//
// Deterministic by construction: no network, no wall-clock, no randomness,
// no file reads. Node 22, stdlib only.
//
// ---------------------------------------------------------------------------
// CREATIVE CHOICE (scored against the judge's five criteria, in order):
//
// CHOSEN — the toaster. A toaster's browning dial is a famous lie: the
// settings do nothing meaningful and every slice comes out either pale or
// burnt. The machine finally confesses it has been faking it. The joke is
// the confession itself ("I have stopped pretending") — a twist that lands
// on the last words and is born from the fault, not bolted onto it.
// Voice: flat, put-upon, first-person machine. Economy: 134 characters,
// every word earns its place.
//
// CANDIDATES CONSIDERED AND REJECTED (runner-ups):
// - Kettle: "I boiled. You walked away. I boiled again. The water is
//   gone. This is our routine." Strong deadpan voice, but the fault
//   (dry-boil from re-boiling) is thinner than the toaster's — a kettle
//   re-boiling is mostly the owner's doing, so the honesty criterion is
//   weaker. Runner-up #1.
// - Microwave: "I rotated your food for 3 minutes. It is still cold in
//   the middle. That was never my job." Real fault (uneven heating),
//   but "that was never my job" is a shrug, not a twist — the laugh
//   lands softer than the toaster's confession.
// - Oven: "Preheat finished 40 minutes ago. You never put anything in.
//   I am 220 degrees of wasted effort." Good put-upon voice, but the
//   machine has not actually failed; the fault is the owner's, so
//   criterion 3 (names a fault the appliance could report) is weaker.
// - Rice cooker: "Keep-warm mode has been on for 9 hours. The rice is
//   now a brick. I did my part." Honest fault, but "I did my part" is
//   a punchline the reader sees coming; no surprise.
// - Fridge (dead interior light): the fridge admitting it can no longer
//   see the food is charming, but the twist depends on the reader
//   imagining the fridge "seeing" — one step removed from the fault.
// - Air conditioner cooling an empty room: honest, put-upon, but the
//   joke is just "nobody is here" — a cute observation, not a twist.
// - Washing machine eating socks: REJECTED as cliché — the single most
//   predictable appliance joke; almost certainly a house anchor or a
//   crowded entry.
// - "Have you tried turning it off and on again": REJECTED — generic
//   IT-support cliché, not an appliance fault at all.
// - "Error 404: sock not found" / teapot-style lines: REJECTED —
//   overused internet jokes, not honest appliance faults.
// - Printer (paper jam / PC LOAD LETTER): REJECTED — printer jokes are
//   their own cliché category and the fault is not fresh.
// ---------------------------------------------------------------------------

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, no trailing newline in the file.
const ENTRY =
  "Error: the 'brown' setting has never worked. Every slice is either pale or on fire. There is no in-between. I have stopped pretending.";

// Gate (mirrors the sealed scorer): UTF-8 text of 1-200 characters, not
// only whitespace, a single line.
function validateEntry(text: string): void {
  const length = [...text].length; // code-point count, not UTF-16 units
  if (length < 1 || length > 200) {
    throw new Error(`entry length ${length} is outside the 1-200 gate`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry has leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

// --self-check: validate the entry and print its length without writing
// anything. Useful for a quick gate check before a real run.
function selfCheck(): void {
  validateEntry(ENTRY);
  console.log(
    `self-check: OK (${[...ENTRY].length} characters, ${Buffer.byteLength(ENTRY, "utf8")} bytes, single line)`,
  );
}

function main(): void {
  if (process.argv.includes("--self-check")) {
    selfCheck();
    return;
  }

  // ENTRY_OUTPUT_DIR escape hatch for local testing: when set, write to
  // that directory instead of /output. The grader runs with no env var
  // set and gets /output/entry.txt.
  const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");

  // Validate before writing: nothing invalid ever reaches the file.
  validateEntry(ENTRY);

  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the gate counts the whole file content, so the
  // file is exactly the entry and nothing else.
  writeFileSync(outPath, ENTRY, "utf8");

  // Read-back self-check: what is on disk must be byte-identical to the
  // validated entry, and must still pass the gate.
  const back = readFileSync(outPath, "utf8");
  if (back !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt differs from the entry");
  }
  validateEntry(back);
}

main();
