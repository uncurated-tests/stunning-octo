import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import { promisify } from "node:util";

const run = promisify(execFile);

export async function revision(ref) {
  const { stdout } = await run(`git show --stat --oneline ${ref}`, { shell: true });
  return stdout;
}

export async function readReport(name) {
  return readFile(new URL(`./reports/${name}`, import.meta.url), "utf8");
}
