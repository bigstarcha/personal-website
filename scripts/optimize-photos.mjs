// Shrinks photos in public/ and strips their metadata (including GPS location).
// Run with `yarn photos` after adding new photos. Already-optimized files are skipped.

import { readdir, rename } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = "public";
const MAX_EDGE = 2400; // Plenty for a 450px-wide gallery on a high-DPI screen.
const EXTENSIONS = new Set([".jpg", ".jpeg"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(fullPath);
    else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
      yield fullPath;
  }
}

for await (const file of walk(PUBLIC_DIR)) {
  const { width, height, exif } = await sharp(file).metadata();

  if (Math.max(width, height) <= MAX_EDGE && !exif) {
    console.log(`skip   ${file}`);
    continue;
  }

  const tmp = `${file}.tmp`;
  // rotate() bakes the EXIF orientation into the pixels before the metadata is dropped.
  const info = await sharp(file)
    .rotate()
    .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(tmp);
  await rename(tmp, file);

  console.log(
    `done   ${file} (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)`,
  );
}
