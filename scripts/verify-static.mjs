import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const htmlPath = path.join(root, "index.html");
const duplicatePath = path.join(root, "public", "bordly", "index.html");

const errors = [];

if (!fs.existsSync(htmlPath)) {
  errors.push("index.html mangler i prosjektroten.");
}

if (fs.existsSync(duplicatePath)) {
  errors.push("Duplikat funnet: public/bordly/index.html skal ikke ligge ved siden av root index.html.");
}

if (fs.existsSync(htmlPath)) {
  const html = fs.readFileSync(htmlPath, "utf8");
  const refs = new Set();
  const re = /["'`]\/(assets|print)\/([^"'\`?#)]+)/g;
  let match;
  while ((match = re.exec(html)) !== null) {
    refs.add(`${match[1]}/${decodeURIComponent(match[2])}`);
  }

  if (refs.size === 0) {
    errors.push("Fant ingen /assets/ eller /print/-referanser i index.html.");
  }

  for (const ref of refs) {
    const target = path.join(root, "public", ref);
    if (!fs.existsSync(target)) {
      errors.push(`Mangler fil referert fra index.html: public/${ref}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Bordly static verification failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Bordly static verification passed.");
