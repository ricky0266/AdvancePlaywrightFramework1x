# Tests Folder Guidelines

This repository uses a rule-based test folder structure.

## Rule Folder
- `src/tests/rule-name/` is the example rule folder.
- Add every new test case for this rule inside this folder.
- If you have another rule, create a folder named after that rule under `src/tests/`.

## Required checks
- Always run `npm run typecheck` after adding a new test case.
- Always run `npm run lint` after adding a new test case.
- Use `npm test` to run both checks and then execute Playwright tests.
