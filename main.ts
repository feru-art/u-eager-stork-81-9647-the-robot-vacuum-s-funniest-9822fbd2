import { writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 120;

function excuseLine(): string {
  const opening = "That spot and I have an understanding:";
  const confession = "I pretend it's clean,";
  const accomplice = "and the rug fringe pretends not to know me.";
  return `${opening} ${confession} ${accomplice}`;
}

function assertGate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`gate: ${chars} chars outside 1-${MAX_CHARS}`);
  }
  if (line.includes("\n") || line.trim().length === 0) {
    throw new Error("gate: entry must be one non-blank line");
  }
}

const line = excuseLine();
assertGate(line);
writeFileSync(OUTPUT_PATH, line, "utf8");
