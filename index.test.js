import assert from "node:assert/strict";
import test from "node:test";
import { revision, revisionTemplate } from "./index.js";

test("shows a revision", async () => {
  assert.match(await revision("HEAD"), /Add revision templates/);
});

test("does not execute revision input", async () => {
  await assert.rejects(revision("HEAD; printf injected"));
});

test("loads a revision template", async () => {
  assert.match(await revisionTemplate("default.md"), /Revision/);
});

test("rejects paths outside the templates directory", () => {
  assert.throws(() => revisionTemplate("../package.json"), /Invalid template name/);
});
