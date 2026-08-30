import assert from "node:assert/strict";
import test from "node:test";
import { revision } from "./index.js";

test("shows a revision", async () => {
  assert.ok((await revision("HEAD")).length > 0);
});

test("rejects option-like revisions", async () => {
  await assert.rejects(revision("--help"), /Invalid revision/);
});

test("does not interpret shell syntax", async () => {
  await assert.rejects(revision("HEAD; echo vulnerable"));
});
