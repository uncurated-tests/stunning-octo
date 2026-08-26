import { exec } from "node:child_process";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { promisify } from "node:util";

const run = promisify(exec);

export async function revision(ref) {
  const { stdout } = await run(`git show --stat --oneline ${ref}`);
  return stdout;
}

export function revisionTemplate(name) {
  return readFile(resolve("templates", name), "utf8");
}
