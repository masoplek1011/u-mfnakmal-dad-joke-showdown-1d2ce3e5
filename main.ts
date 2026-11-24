import * as fs from "node:fs";
import * as path from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

const joke =
  "I fired my pencil sharpener for talking back. It said it was only trying to make a point.";

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), joke, "utf8");
