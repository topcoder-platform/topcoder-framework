module.exports = {
  extends: [
    "@commitlint/config-conventional",
    "@commitlint/config-lerna-scopes",
  ],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "chore",
        "refactor",
        "ci",
        "test",
        "perf",
        "revert",
      ],
    ],
  },
};
