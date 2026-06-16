# Copilot Rule: Test Quality Checks

This rule documents the test quality expectations for new Playwright tests.

## Rule
- Create test folders by rule name.
- Add every new test case inside the corresponding rule folder.
- For example: `rule-name/example.spec.ts`.

## Argument Rule
- A rule folder name should map to the rule used for this group of tests.
- Use the folder name as the argument when running targeted tests, for example:
  - `npx playwright test src/tests/rule-name`
- Keep rule names consistent and descriptive.

## Required checks
- After adding a new test case, run:
  - `npm run typecheck`
  - `npm run lint`
- To run both checks and then execute Playwright tests, use:
  - `npm test`

## Locations
- This rule is documented in the repository root as `COPILOT_RULES.md`.
- It is also mirrored in the `.github/` folder for GitHub visibility.
