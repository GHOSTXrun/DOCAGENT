# Contributing to DOCAGENT

Keep changes focused and state what is live, simulated, or planned. Do not present prepared checks as real AI or CI results.

## Local development

Serve the repository with a static web server, for example `python -m http.server 8080`. There is no frontend build step. `assets/workspace.js` owns real GitHub inspection; the inline script in `index.html` owns the prepared demo.

## Before opening a pull request

- Explain the user-facing problem, the change, and how you checked it.
- Check a wide desktop viewport and a 390px mobile viewport for overflow.
- Verify navigation, menu state, keyboard focus and reduced-motion behavior.
- Run the demo through all six stages; try pause, replay, next step, stage selection and output follow mode.
- Inspect a public repository, switch commits and expand a text diff. Download a review context and confirm its SHA matches the selected commit.
- Check invalid repository input, missing or empty repositories, rate limits and network failures. Do not test rate limits by intentionally flooding GitHub.
- Keep external repository metadata and patch text in `textContent`; never inject untrusted strings as HTML.
- Keep credentials out of frontend source, URLs, browser storage and screenshots.
- Run `git diff --check` and a JavaScript syntax check using your available JavaScript runtime.

## Product boundaries

Read-only inspection must never create an issue, branch, commit or PR. A future write flow needs authorized backend access and an explicit review step. Do not add secrets or placeholder credentials to make a demo appear connected.

## Reporting issues

Include the browser, viewport, steps to reproduce, expected result, actual result and a screenshot if useful. Provide a public reproduction repository when applicable. Do not include tokens or private source code.