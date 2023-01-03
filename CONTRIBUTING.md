# Contributing

As a contributor, here are the guidelines we would like you to follow:

- [Coding Rules](#markdown-header-coding-rules)
- [Working with branches](#markdown-header-working-with-branches)
- [Commit Message Guidelines](#markdown-header-commit=message-format)

## Coding Rules

TODO

## Working with branches

Remote branches must follow the following format:

- fix/my-fix-name: for bugfixes/hotfixes
- feature/my-feature-name: for features, refactoring, etc

Branches name **must be in kebab-case and lower caps**.

Please **keep the commit history of your branch clean**, with proper commit messages (see below).
Use `git log` to review it, and if necessary `git rebase` to clean it.

> See the [git docs](https://git-scm.com/docs/git-rebase#_interactive_mode) for more details.

## Commit Message Format

_This specification is inspired by [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format)._

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

Each commit message consists of a **header** and a **body**

```
<header>
<BLANK LINE>
<body>
```

The `header` is mandatory and must conform to the [Commit Message Header](#markdown-header-commit-message-header) format.

The `body` is mandatory for all commits except for those of type "docs".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#markdown-header-commit-message-body) format.

Any line of the commit message cannot be longer than 100 characters.

### Commit Message Header

```
<type>(<scope>): <short summary>
  │        |        │
  │        |        └─⫸ Summary in present tense. Not capitalized. No period at the end.
  |        |
  |        └─⫸ Commit Scope: domain-challenge|domain-resource|lib-logger|lib-common|lib-secrets
  |
  └─⫸ Commit Type: feat|fix|docs|chore|refactor|ci|test|perf|revert
```

Both `<type>` and `<summary>` fields are mandatory.

#### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation (README, CONTRIBUTING and code documentation)
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **ci**: Changes to our CI/CD configuration files and scripts
- **test**: Adding missing tests or correcting existing tests
- **perf**: A code change that improves performance
- **revert**: Reverts a previous commit

#### Summary

Use the summary field to provide a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

### Revert commits

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.
