import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

const files = ["index.html", "privacy/index.html", "terms/index.html"];
let ok = true;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const refs = html.matchAll(/(?:src|href)="([^"#]+)"/g);

  for (const match of refs) {
    const path = match[1];
    if (
      path.startsWith("http") ||
      path.startsWith("mailto:") ||
      path === "#"
    ) {
      continue;
    }

    const localPath = path.startsWith("/")
      ? path.replace(/^\//, "").replace(/\/$/, "/index.html")
      : normalize(join(dirname(file), path.replace(/\/$/, "/index.html")));

    if (!existsSync(localPath)) {
      console.error(`${file}: missing ${path} -> ${localPath}`);
      ok = false;
    }
  }
}

if (!ok) {
  process.exit(1);
}

console.log("All local page references resolve.");
