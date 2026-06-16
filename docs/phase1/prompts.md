# Phase 1: Advanced Framework Prompts

This file captures the key conversation and implementation decisions made so far, so students can follow the framework design.

## What we built
- Added a rule-based test folder structure for Playwright tests.
- Created a dedicated rule folder: `rule-name/`.
- Added `test-quality-checks.md` in the rule folder to document mandatory checks.
- Updated repo scripts so test execution runs quality checks automatically.
- Added Copilot rule documentation in both the repository root and `.github/`.
- Added guidance that every new test case must run:
  - `npm run typecheck`
  - `npm run lint`
  - or `npm test`

## Required rules
- Rule folder names should map to the rule group being tested.
- Use the folder name as the argument when running targeted tests, for example:
  - `npx playwright test src/tests/rule-name`
- Keep rule names consistent and descriptive.
- Add each new test case inside the corresponding rule folder.

## Implementation notes
- `package.json` contains the `check` script, which runs both type check and lint.
- The root `README.md` now documents the project and folder structure.
- The `.github/COPILOT_RULES.md` file mirrors the same quality rule guidance.
- This is intended as an advanced framework pattern for organized Playwright automation.

## Student guidance
- Read this prompt summary before adding new tests.
- Use the rule folder structure to keep tests organized.
- Follow the quality checks on every new test to ensure stable automation.
