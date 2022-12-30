#!/usr/bin/env node

// @ts-check

const { spawn, execSync } = require("child_process");
const pipeStdIo = { stdio: [process.stdin, process.stdout, process.stderr] };

execSync("rm -rf verdaccio/storage");

// Start verdaccio in the background
const verdaccio = spawn(
  "npx",
  ["verdaccio", "-c", "verdaccio/config.yaml"],
  pipeStdIo
).on("error", (e) => {
  throw e;
});

// Publish all changed packages the local verdaccio server.
// Anything that has not been changed will match what is in npm
const args = [
  "lerna",
  "publish",
  "prerelease",
  "--conventional-commits",
  "--force-publish",
  "--preid",
  "ci",
  "--exact",
  "--registry",
  "http://localhost:4873/",
  "--yes",
  "--no-changelog",
  "--no-git-tag-version",
  "--no-push",
  "--no-git-reset",
  "--ignore-scripts",
  "--no-verify-access",
  "--concurrency",
  "8",
  "--dist-tag",
  "ci",
];
spawn("npx", args, pipeStdIo).on("close", (code) => {
  // Rollback the changes caused by the version bumping
  execSync("git checkout -- domains/*/package.json");
  execSync("git checkout -- lib/*/package.json");
  execSync("git checkout -- lerna.json");

  // Kill the background verdaccio server
  verdaccio.kill();
  if (code !== 0) throw Error(`Exit code: ${code}`);
});
