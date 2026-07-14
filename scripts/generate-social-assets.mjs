/**
 * Render Blackline social media asset pack (exact platform sizes).
 * Run: node scripts/generate-social-assets.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "public", "brand", "social");
const ARTIFACTS = "/opt/cursor/artifacts/brand/social";

const NAVY = "#0F1C2E";
const GOLD = "#C6A85B";
const WHITE = "#F4F4F4";
const SLATE = "#94A3B8";

const MARK = `
  <path d="M12 16 V56 C12 71 27 83.5 40 90 C53 83.5 68 71 68 56 V16"
    stroke="${GOLD}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path fill="${GOLD}" d="M24.5 22h18.2c6.55 0 10.9 3.85 10.9 9.35 0 3.7-2.05 6.4-5.35 7.55 4.15 1.05 6.85 4.35 6.85 9.05 0 6.35-4.9 10.55-12.45 10.55H24.5V22Zm7.6 6.55v8.7h9.55c3.05 0 4.85-1.7 4.85-4.35s-1.8-4.35-4.85-4.35H32.1Zm0 15.2v8.95h10.1c3.35 0 5.25-1.95 5.25-4.55 0-2.55-1.9-4.4-5.25-4.4H32.1Z"/>
  <path fill="${GOLD}" d="M37.5 48h7.4v20.2H62v7.1H37.5V48Z"/>
`;

function svgDoc(width, height, body) {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
      <rect width="${width}" height="${height}" fill="${NAVY}"/>
      ${body}
    </svg>`
  );
}

/** Profile / avatar — mark only, circular crop safe (~70% center). */
function profileMark(size = 1080) {
  // Keep mark inside ~70% of canvas so circular UI crops don't clip the shield.
  const target = size * 0.7;
  const s = target / 96; // scale relative to mark height
  const markW = 80 * s;
  const markH = 96 * s;
  const tx = (size - markW) / 2;
  const ty = (size - markH) / 2;
  return svgDoc(
    size,
    size,
    `<g transform="translate(${tx}, ${ty}) scale(${s})">${MARK}</g>`
  );
}

/** Profile / avatar — stacked lockup for square posts & profile alt. */
function profileStacked(size = 1080) {
  const markScale = size * 0.0042;
  const markW = 80 * markScale;
  const markH = 96 * markScale;
  const mx = (size - markW) / 2;
  const my = size * 0.18;
  const titleY = my + markH + size * 0.08;
  const subY = titleY + size * 0.065;
  const tagY = subY + size * 0.08;
  const ruleW = size * 0.08;
  return svgDoc(
    size,
    size,
    `
    <g transform="translate(${mx}, ${my}) scale(${markScale})">${MARK}</g>
    <text x="${size / 2}" y="${titleY}" text-anchor="middle" fill="${GOLD}"
      font-family="Georgia, 'Times New Roman', serif" font-size="${size * 0.072}" font-weight="700"
      letter-spacing="${size * 0.012}">BLACKLINE</text>
    <line x1="${size / 2 - size * 0.28}" y1="${subY - size * 0.018}" x2="${size / 2 - size * 0.28 - ruleW}" y2="${subY - size * 0.018}" stroke="${GOLD}" stroke-width="2"/>
    <line x1="${size / 2 + size * 0.28}" y1="${subY - size * 0.018}" x2="${size / 2 + size * 0.28 + ruleW}" y2="${subY - size * 0.018}" stroke="${GOLD}" stroke-width="2"/>
    <text x="${size / 2}" y="${subY}" text-anchor="middle" fill="${WHITE}"
      font-family="Helvetica, Arial, sans-serif" font-size="${size * 0.024}" font-weight="600"
      letter-spacing="${size * 0.008}">PUBLIC ADJUSTERS LLC</text>
    <text x="${size / 2}" y="${tagY}" text-anchor="middle" fill="${GOLD}"
      font-family="Helvetica, Arial, sans-serif" font-size="${size * 0.02}" font-weight="600"
      letter-spacing="${size * 0.007}">POLICY. DEFINED. APPLIED.</text>
    `
  );
}

/** Wide cover / banner with horizontal lockup + optional right tagline. */
function cover(width, height, { tagline = true } = {}) {
  const markScale = Math.min(height / 130, width / 900);
  const markW = 80 * markScale;
  const markH = 96 * markScale;
  const padX = width * 0.06;
  const padY = (height - markH) / 2;
  const dividerX = padX + markW + width * 0.025;
  const textX = dividerX + width * 0.025;
  const titleSize = Math.min(height * 0.28, width * 0.042);
  const subSize = Math.min(height * 0.12, width * 0.016);
  const titleY = height * 0.46;
  const subY = height * 0.68;
  const rightTag = tagline
    ? `
    <text x="${width - padX}" y="${height * 0.52}" text-anchor="end" fill="${GOLD}"
      font-family="Helvetica, Arial, sans-serif" font-size="${Math.min(height * 0.11, 22)}" font-weight="600"
      letter-spacing="3">POLICY. DEFINED. APPLIED.</text>`
    : "";

  return svgDoc(
    width,
    height,
    `
    <g transform="translate(${padX}, ${padY}) scale(${markScale})">${MARK}</g>
    <line x1="${dividerX}" y1="${height * 0.28}" x2="${dividerX}" y2="${height * 0.72}"
      stroke="${GOLD}" stroke-width="1.5" opacity="0.85"/>
    <text x="${textX}" y="${titleY}" fill="${GOLD}"
      font-family="Georgia, 'Times New Roman', serif" font-size="${titleSize}" font-weight="700"
      letter-spacing="${titleSize * 0.18}">BLACKLINE</text>
    <text x="${textX}" y="${subY}" fill="${WHITE}"
      font-family="Helvetica, Arial, sans-serif" font-size="${subSize}" font-weight="600"
      letter-spacing="${subSize * 0.28}">PUBLIC ADJUSTERS LLC</text>
    ${rightTag}
    `
  );
}

/** Open Graph / link preview 1200×630 */
function ogShare(width = 1200, height = 630) {
  const markScale = 2.8;
  const markW = 80 * markScale;
  const markH = 96 * markScale;
  const mx = 80;
  const my = (height - markH) / 2 - 10;
  return svgDoc(
    width,
    height,
    `
    <rect x="0" y="0" width="${width}" height="6" fill="${GOLD}"/>
    <g transform="translate(${mx}, ${my}) scale(${markScale})">${MARK}</g>
    <line x1="${mx + markW + 40}" y1="${height * 0.28}" x2="${mx + markW + 40}" y2="${height * 0.72}"
      stroke="${GOLD}" stroke-width="2" opacity="0.8"/>
    <text x="${mx + markW + 70}" y="${height * 0.4}" fill="${GOLD}"
      font-family="Georgia, 'Times New Roman', serif" font-size="52" font-weight="700"
      letter-spacing="10">BLACKLINE</text>
    <text x="${mx + markW + 70}" y="${height * 0.52}" fill="${WHITE}"
      font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600"
      letter-spacing="5">PUBLIC ADJUSTERS LLC</text>
    <text x="${mx + markW + 70}" y="${height * 0.66}" fill="${SLATE}"
      font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="500"
      letter-spacing="1">We hold the policy accountable.</text>
    <text x="${width - 80}" y="${height - 48}" text-anchor="end" fill="${GOLD}"
      font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="600"
      letter-spacing="4">POLICY. DEFINED. APPLIED.</text>
    `
  );
}

/** Instagram / vertical story 1080×1920 */
function story(width = 1080, height = 1920) {
  const markScale = 5.5;
  const markW = 80 * markScale;
  const markH = 96 * markScale;
  const mx = (width - markW) / 2;
  const my = height * 0.28;
  return svgDoc(
    width,
    height,
    `
    <g transform="translate(${mx}, ${my}) scale(${markScale})">${MARK}</g>
    <text x="${width / 2}" y="${my + markH + 100}" text-anchor="middle" fill="${GOLD}"
      font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="700"
      letter-spacing="12">BLACKLINE</text>
    <text x="${width / 2}" y="${my + markH + 160}" text-anchor="middle" fill="${WHITE}"
      font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="600"
      letter-spacing="6">PUBLIC ADJUSTERS LLC</text>
    <text x="${width / 2}" y="${height * 0.78}" text-anchor="middle" fill="${GOLD}"
      font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="600"
      letter-spacing="5">POLICY. DEFINED. APPLIED.</text>
    `
  );
}

const ASSETS = [
  { file: "profile-avatar-1080.png", width: 1080, height: 1080, svg: () => profileMark(1080), note: "IG / FB / LinkedIn / X profile (1080²)" },
  { file: "profile-avatar-400.png", width: 400, height: 400, svg: () => profileMark(400), note: "Small profile (400²)" },
  { file: "profile-stacked-1080.png", width: 1080, height: 1080, svg: () => profileStacked(1080), note: "Square post / alternate avatar" },
  { file: "og-share-1200x630.png", width: 1200, height: 630, svg: () => ogShare(1200, 630), note: "Open Graph / link preview" },
  { file: "twitter-header-1500x500.png", width: 1500, height: 500, svg: () => cover(1500, 500), note: "X / Twitter header" },
  { file: "linkedin-cover-1128x191.png", width: 1128, height: 191, svg: () => cover(1128, 191, { tagline: false }), note: "LinkedIn company cover" },
  { file: "linkedin-banner-1584x396.png", width: 1584, height: 396, svg: () => cover(1584, 396), note: "LinkedIn personal/company banner" },
  { file: "facebook-cover-1640x624.png", width: 1640, height: 624, svg: () => cover(1640, 624), note: "Facebook page cover" },
  { file: "instagram-story-1080x1920.png", width: 1080, height: 1920, svg: () => story(1080, 1920), note: "Instagram / FB story" },
];

async function writePng(file, svgBuffer, width, height) {
  const outPath = path.join(OUT, file);
  const artPath = path.join(ARTIFACTS, file);
  // density 72 keeps SVG CSS pixels 1:1; resize locks exact platform size
  const png = await sharp(svgBuffer, { density: 72 })
    .resize(width, height, { fit: "fill" })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await fs.promises.writeFile(outPath, png);
  await fs.promises.mkdir(ARTIFACTS, { recursive: true });
  await fs.promises.writeFile(artPath, png);
  const meta = await sharp(png).metadata();
  return { file, width: meta.width, height: meta.height, bytes: png.length };
}

async function main() {
  await fs.promises.mkdir(OUT, { recursive: true });
  const manifest = [];
  for (const asset of ASSETS) {
    const result = await writePng(asset.file, asset.svg(), asset.width, asset.height);
    manifest.push({ ...result, note: asset.note });
    console.log(`✓ ${asset.file} (${result.width}×${result.height})`);
  }
  const manifestPath = path.join(OUT, "manifest.json");
  await fs.promises.writeFile(
    manifestPath,
    JSON.stringify(
      {
        brand: "Blackline Public Adjusters LLC",
        palette: { navy: NAVY, gold: GOLD, white: WHITE, slate: SLATE },
        assets: manifest,
      },
      null,
      2
    )
  );
  console.log(`Wrote ${manifest.length} assets → ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
