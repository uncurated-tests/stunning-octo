import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import { basename, resolve } from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);
const templates = resolve("templates");

export async function revision(ref) {
  const { stdout } = await run("git", ["show", "--stat", "--oneline", ref]);
  return stdout;
}

export function revisionTemplate(name) {
  if (name !== basename(name)) throw new Error("Invalid template name");
  return readFile(resolve(templates, name), "utf8");
}
