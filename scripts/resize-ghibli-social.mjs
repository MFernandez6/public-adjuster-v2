/**
 * Resize Ghibli-style option #1 social exports to exact platform sizes.
 * Run: node scripts/resize-ghibli-social.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = "/opt/cursor/artifacts/assets";
const OUT = path.join(ROOT, "public", "brand", "social", "ghibli");
const ART = "/opt/cursor/artifacts/brand/social/ghibli";

const JOBS = [
  // Instagram
  { src: "ig-profile.png", out: "instagram/profile-1080.png", w: 1080, h: 1080 },
  { src: "ig-profile.png", out: "instagram/profile-320.png", w: 320, h: 320 },
  { src: "tiktok-profile.png", out: "instagram/profile-alt-1080.png", w: 1080, h: 1080 },
  { src: "ig-post-square.png", out: "instagram/post-square-1080.png", w: 1080, h: 1080 },
  { src: "ig-post-portrait.png", out: "instagram/post-portrait-1080x1350.png", w: 1080, h: 1350 },
  { src: "story-vertical.png", out: "instagram/story-1080x1920.png", w: 1080, h: 1920 },
  { src: "story-vertical.png", out: "instagram/reels-cover-1080x1920.png", w: 1080, h: 1920 },
  { src: "ig-highlight.png", out: "instagram/highlight-cover-1080.png", w: 1080, h: 1080 },
  { src: "linkedin-post.png", out: "instagram/post-landscape-1080x566.png", w: 1080, h: 566 },

  // TikTok
  { src: "tiktok-profile.png", out: "tiktok/profile-1080.png", w: 1080, h: 1080 },
  { src: "tiktok-profile.png", out: "tiktok/profile-200.png", w: 200, h: 200 },
  { src: "ig-profile.png", out: "tiktok/profile-alt-1080.png", w: 1080, h: 1080 },
  { src: "story-vertical.png", out: "tiktok/video-cover-1080x1920.png", w: 1080, h: 1920 },
  { src: "tiktok-endcard.png", out: "tiktok/endcard-1080x1920.png", w: 1080, h: 1920 },
  { src: "ig-post-square.png", out: "tiktok/feed-square-1080.png", w: 1080, h: 1080 },

  // LinkedIn
  { src: "ig-profile.png", out: "linkedin/profile-400.png", w: 400, h: 400 },
  { src: "ig-profile.png", out: "linkedin/profile-800.png", w: 800, h: 800 },
  { src: "tiktok-profile.png", out: "linkedin/profile-alt-800.png", w: 800, h: 800 },
  { src: "linkedin-cover.png", out: "linkedin/company-cover-1128x191.png", w: 1128, h: 191 },
  { src: "linkedin-cover.png", out: "linkedin/banner-1584x396.png", w: 1584, h: 396 },
  { src: "linkedin-banner-v2.png", out: "linkedin/banner-alt-1584x396.png", w: 1584, h: 396 },
  { src: "linkedin-post.png", out: "linkedin/post-1200x627.png", w: 1200, h: 627 },
  { src: "ig-post-square.png", out: "linkedin/post-square-1080.png", w: 1080, h: 1080 },
  { src: "ig-post-portrait.png", out: "linkedin/post-portrait-1080x1350.png", w: 1080, h: 1350 },
];

async function main() {
  for (const dir of ["instagram", "tiktok", "linkedin"]) {
    await fs.promises.mkdir(path.join(OUT, dir), { recursive: true });
    await fs.promises.mkdir(path.join(ART, dir), { recursive: true });
  }

  const manifest = [];
  for (const job of JOBS) {
    const input = path.join(SRC, job.src);
    if (!fs.existsSync(input)) {
      console.warn("missing", job.src);
      continue;
    }
    const isUltraWide = job.h / job.w < 0.25;
    const buf = await sharp(input)
      .resize(job.w, job.h, {
        fit: isUltraWide ? "contain" : "cover",
        position: "centre",
        background: { r: 245, g: 236, b: 220, alpha: 1 },
      })
      .png({ compressionLevel: 9 })
      .toBuffer();
    const outPath = path.join(OUT, job.out);
    const artPath = path.join(ART, job.out);
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true });
    await fs.promises.mkdir(path.dirname(artPath), { recursive: true });
    await fs.promises.writeFile(outPath, buf);
    await fs.promises.writeFile(artPath, buf);
    manifest.push({ file: job.out, width: job.w, height: job.h, source: job.src, bytes: buf.length });
    console.log(`✓ ${job.out} (${job.w}×${job.h})`);
  }

  // Also keep original concept masters
  const masters = [
    "ig-profile.png",
    "ig-post-square.png",
    "ig-post-portrait.png",
    "ig-highlight.png",
    "story-vertical.png",
    "tiktok-profile.png",
    "tiktok-endcard.png",
    "linkedin-cover.png",
    "linkedin-post.png",
    "linkedin-banner-v2.png",
  ];
  const mastersDir = path.join(OUT, "_masters");
  const mastersArt = path.join(ART, "_masters");
  await fs.promises.mkdir(mastersDir, { recursive: true });
  await fs.promises.mkdir(mastersArt, { recursive: true });
  for (const name of masters) {
    const from = path.join(SRC, name);
    if (!fs.existsSync(from)) continue;
    await fs.promises.copyFile(from, path.join(mastersDir, name));
    await fs.promises.copyFile(from, path.join(mastersArt, name));
  }

  const manifestBody = {
    style: "ghibli-hand-drawn (option #1)",
    brand: "Blackline Public Adjusters LLC",
    platforms: {
      instagram: [
        "profile-1080.png",
        "profile-320.png",
        "profile-alt-1080.png",
        "post-square-1080.png",
        "post-portrait-1080x1350.png",
        "post-landscape-1080x566.png",
        "story-1080x1920.png",
        "reels-cover-1080x1920.png",
        "highlight-cover-1080.png",
      ],
      tiktok: [
        "profile-1080.png",
        "profile-200.png",
        "profile-alt-1080.png",
        "video-cover-1080x1920.png",
        "endcard-1080x1920.png",
        "feed-square-1080.png",
      ],
      linkedin: [
        "profile-400.png",
        "profile-800.png",
        "profile-alt-800.png",
        "company-cover-1128x191.png",
        "banner-1584x396.png",
        "banner-alt-1584x396.png",
        "post-1200x627.png",
        "post-square-1080.png",
        "post-portrait-1080x1350.png",
      ],
    },
    assets: manifest,
  };
  await fs.promises.writeFile(path.join(OUT, "manifest.json"), JSON.stringify(manifestBody, null, 2));
  await fs.promises.writeFile(path.join(ART, "manifest.json"), JSON.stringify(manifestBody, null, 2));
  console.log(`Wrote ${manifest.length} sized assets → ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
