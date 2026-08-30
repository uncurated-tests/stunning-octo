import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

export async function revision(ref) {
  const { stdout } = await run(`git show --stat --oneline ${ref}`, { shell: true });
  return stdout;
}
