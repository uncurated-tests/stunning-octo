import assert from "node:assert/strict";
import test from "node:test";
import { revision } from "./index.js";

test("revision endpoint is unavailable", async () => {
  assert.equal(await revision("HEAD; touch /tmp/pwned"), "Revision endpoint is unavailable");
});
