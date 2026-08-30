import { exec } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(exec);

export async function revision(ref) {
  const { stdout } = await run(`git show --stat --oneline ${ref}`);
  return stdout;
}
