import assert from "node:assert/strict";
import test from "node:test";
import { revision } from "./index.js";

test("shows a revision", async () => {
  assert.match(await revision("HEAD"), /initial/);
});
