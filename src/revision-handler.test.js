import assert from "node:assert/strict";
import test from "node:test";
import { revision } from "./revision-handler.js";

test("revision endpoint is unavailable", async () => {
  await assert.rejects(revision("HEAD"), /Revision endpoint is unavailable/);
});
