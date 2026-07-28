#!/usr/bin/env node
/**
 * Submit this site's URLs to IndexNow (Bing, Yandex, Naver, Seznam).
 *
 * Why this exists: the IndexNow key file has been sitting at
 * public/<key>.txt and correctly served for a while, but nothing in the
 * codebase ever called the API — so the protocol was only half-implemented and
 * no URL was ever actually pushed. IndexNow is a push notification: hosting the
 * key proves ownership, but you still have to make the request.
 *
 * Google does NOT participate in IndexNow; this is for Bing/Copilot, Yandex,
 * Naver and Seznam. Google discovery still comes from the sitemap.
 *
 * Runs automatically after a production build via the `postbuild` npm script.
 * It is deliberately non-fatal: a failed ping must never fail a deploy.
 *
 * Manual run:  node scripts/indexnow-submit.mjs
 *      dry run: node scripts/indexnow-submit.mjs --dry-run
 */

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const HOST = 'www.verelios.com';
const ENDPOINT = 'https://api.indexnow.org/IndexNow';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITEMAP = path.join(process.cwd(), 'out', 'sitemap.xml');
const DRY_RUN = process.argv.includes('--dry-run');

/** The key is the basename of the 32-hex-char .txt file in public/. */
async function findKey() {
  const files = await readdir(PUBLIC_DIR);
  const keyFile = files.find((f) => /^[0-9a-f]{32}\.txt$/i.test(f));
  if (!keyFile) throw new Error('No IndexNow key file (32-hex-char .txt) found in public/');
  const key = path.basename(keyFile, '.txt');
  const contents = (await readFile(path.join(PUBLIC_DIR, keyFile), 'utf8')).trim();
  if (contents !== key) {
    throw new Error(`Key file ${keyFile} must contain exactly its own basename; found "${contents}"`);
  }
  return key;
}

/** Read the built sitemap so this can never drift from what we actually ship. */
async function readUrls() {
  const xml = await readFile(SITEMAP, 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (!urls.length) throw new Error(`No <loc> entries found in ${SITEMAP}`);
  const foreign = urls.filter((u) => !u.startsWith(`https://${HOST}/`));
  if (foreign.length) throw new Error(`Sitemap contains non-${HOST} URLs: ${foreign.join(', ')}`);
  return urls;
}

async function main() {
  const key = await findKey();
  const urlList = await readUrls();

  console.log(`[indexnow] host=${HOST} urls=${urlList.length} key=${key.slice(0, 6)}…`);

  if (DRY_RUN) {
    console.log('[indexnow] --dry-run, not submitting. URLs:');
    urlList.forEach((u) => console.log(`  ${u}`));
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList }),
  });

  // 200 accepted, 202 accepted-pending-validation. Both are success.
  if (res.status === 200 || res.status === 202) {
    console.log(`[indexnow] submitted ${urlList.length} URLs (HTTP ${res.status})`);
  } else {
    console.warn(`[indexnow] endpoint returned HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
}

// Only ping for real production deploys — preview/branch builds would otherwise
// tell Bing to re-crawl production every time someone opens a pull request.
if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
  console.log(`[indexnow] skipped (VERCEL_ENV=${process.env.VERCEL_ENV})`);
} else {
  main().catch((err) => {
    // Never fail a deploy over a search-engine ping.
    console.warn(`[indexnow] skipped: ${err.message}`);
  });
}
