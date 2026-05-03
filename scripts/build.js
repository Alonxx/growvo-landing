import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const entries = [
  "index.html",
  "styles.css",
  "script.js",
  "CNAME",
  ".nojekyll",
  "assets",
  "privacy",
  "terms",
];

for (const entry of entries) {
  const source = join(root, entry);
  if (!existsSync(source)) {
    throw new Error(`Missing build entry: ${entry}`);
  }
  cpSync(source, join(dist, entry), { recursive: true });
}

console.log("Built Growvo landing into dist/");
