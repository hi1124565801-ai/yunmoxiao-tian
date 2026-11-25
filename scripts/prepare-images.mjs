import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceRoot = "public/images";
const outputRoot = "public/image-previews";
const presets = {
  profile: [96, 160, 256, 512, 768],
  photography: [64, 128, 256, 512, 800, 1100],
  writing: [128, 256, 384],
  media: [192, 384, 576],
  fieldwork: [384, 640, 960],
};
const manifest = {};

for (const [collection, widths] of Object.entries(presets)) {
  const dir = path.join(sourceRoot, collection);
  const entries = await readdir(dir, { recursive: true, withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || !/\.(jpe?g|webp)$/i.test(entry.name)) continue;
    const file = path.join(entry.parentPath, entry.name);
    const relative = path.relative(sourceRoot, file).split(path.sep).join("/");
    const { autoOrient } = await sharp(file).metadata();
    const candidates = [...new Set(widths.map((w) => Math.min(w, autoOrient.width)))];
    const target = path.join(outputRoot, relative);
    await mkdir(path.dirname(target), { recursive: true });
    for (const width of candidates) {
      await sharp(file).autoOrient().resize({ width, withoutEnlargement: true })
        .webp({ quality: entry.name === "mechanism.webp" ? 90 : 81 })
        .toFile(`${target}.${width}.webp`);
    }
    manifest[`/images/${relative}`] = candidates;
  }
}

// Stable ordering keeps builds and source diffs reproducible.
const lines = Object.keys(manifest).sort().map(key =>
  `  ${JSON.stringify(key)}: [${manifest[key].join(", ")}]`
);
await writeFile("lib/image-preview-widths.json", "{\n" + lines.join(",\n") + "\n}\n");
