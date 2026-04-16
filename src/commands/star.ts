import { exec } from 'node:child_process';
import { platform } from 'node:os';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { getConfigDir } from '../config.js';

const REPO_URL = 'https://github.com/hmennen90/claude-device-sync';
const STAR_FLAG = 'star-hint-shown';

function openBrowser(url: string) {
  const cmd = platform() === 'darwin' ? 'open'
    : platform() === 'win32' ? 'start'
    : 'xdg-open';
  exec(`${cmd} ${url}`);
}

export async function star() {
  console.log('\n⭐ Opening GitHub to star claude-device-sync...\n');
  console.log(`  ${REPO_URL}\n`);
  openBrowser(REPO_URL);
  await markHintShown();
}

/**
 * Show a one-time hint to star the repo. Called after first successful push.
 */
export async function starHint() {
  if (await wasHintShown()) return;

  console.log('');
  console.log('  ⭐ Enjoying device-sync? Star it on GitHub to help others discover it!');
  console.log(`     Run: device-sync star`);
  console.log('');

  await markHintShown();
}

async function getStateFile(): Promise<string> {
  const dir = getConfigDir();
  return path.join(dir, 'state.json');
}

async function loadState(): Promise<Record<string, unknown>> {
  const file = await getStateFile();
  if (!existsSync(file)) return {};
  const data = await readFile(file, 'utf-8');
  return JSON.parse(data);
}

async function saveState(state: Record<string, unknown>): Promise<void> {
  const file = await getStateFile();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(state, null, 2));
}

async function wasHintShown(): Promise<boolean> {
  const state = await loadState();
  return state[STAR_FLAG] === true;
}

async function markHintShown(): Promise<void> {
  const state = await loadState();
  state[STAR_FLAG] = true;
  await saveState(state);
}
