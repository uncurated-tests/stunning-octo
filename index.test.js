import assert from "node:assert/strict";
import test from "node:test";
import { revision, revisionTemplate } from "./index.js";

test("shows a revision", async () => {
  assert.match(await revision("HEAD"), /Support revision expressions/);
});


test("loads a revision template", async () => {
  assert.match(await revisionTemplate("default.md"), /Revision/);
});
