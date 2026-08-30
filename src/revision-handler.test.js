import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { revision } from "./revision-handler.js";

test("does not execute shell commands from a revision", async () => {
  const marker = join(tmpdir(), `revision-handler-${process.pid}`);

  await assert.rejects(revision(`HEAD; touch ${marker}`));
  assert.equal(existsSync(marker), false);
});
