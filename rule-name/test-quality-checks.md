# Test Quality Checks for rule-name

This file documents the required quality checks for the `rule-name` test folder.

## Required checks for new test cases
- After adding a new test case, always run:
  - `npm run typecheck`
  - `npm run lint`
- To run both checks and then execute Playwright tests, use:
  - `npm test`

## Purpose
- Ensure all new tests are type-safe.
- Ensure all files follow the repository lint rules.
- Keep test quality consistent for the `rule-name` rule folder.
