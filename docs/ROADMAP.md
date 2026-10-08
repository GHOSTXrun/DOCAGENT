# DOCAGENT implementation roadmap

## Available: public inspection and product demo

- Public repository metadata and latest 10 commits.
- Commit files and patches with partial-result and unavailable-patch states.
- Downloadable review context; no repository writes.
- Prepared maintenance workflow, patch review, localization samples and streaming output.

## Next: one real documentation repair

Acceptance criteria:

1. Select a commit and retrieve the relevant source and documentation at an exact revision.
2. Identify changed public symbols and associate them with documentation references.
3. Produce one focused documentation diff with source evidence for each proposed change.
4. Display uncertain mappings and unsupported files explicitly.
5. Verify identifiers and example structure against the source; run project-specific checks only in an isolated job.
6. Let a maintainer edit, reject or download the proposed patch.

Required infrastructure: a backend job API, an AI provider configured through server-side secrets, bounded input sizes, job status, and isolated processing of untrusted repository content. Repository instructions must be treated as source data rather than authority over the service.

## Then: approved GitHub pull requests

Use a GitHub App with repository-scoped installation permissions. Store credentials server-side. Pin proposals to a commit SHA, detect new upstream changes, and show the exact patch, target repository and branch before submission. Require an explicit user action to create a PR; do not enable automatic merges by default. Track retries to avoid duplicate PRs and expose a clear audit trail.

## Later

Private repositories, configurable documentation rules, approved translations, job history and scheduled maintenance. Scope each feature around a demonstrable maintainer workflow before adding more visual dashboard metrics.

No delivery dates or service availability are promised by this roadmap.