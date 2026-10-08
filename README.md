# DOCAGENT

<p align="center"><img src="assets/docagent-logo.png" width="160" alt="DOCAGENT robotic gecko logo"></p>

**Code changes. Keep your docs in sync.**

DOCAGENT is a documentation-maintenance frontend for open-source maintainers. It combines a working public GitHub commit inspector with a clearly labeled demonstration of a future AI repair workflow.

## 当前可以使用的功能

- 输入公开 GitHub 仓库地址，读取仓库信息及最近 10 次提交。
- 选择提交，查看实际变更文件、增删统计和可用的文本差异。
- 下载 JSON 审阅资料，包含提交 SHA、文件路径和 GitHub 返回的 patch。
- 体验六阶段演示：发现变更 → 定位文档 → 起草修复 → 翻译 → 检查 → 人工审阅。
- 查看四色语法代码流、示例补丁和四种语言的预置说明。
- 使用手机布局、键盘导航、自动滚动开关和减少动态效果设置。

## What is live, simulated, or planned?

| Capability | Status |
| --- | --- |
| Public repository metadata, latest commits, changed files | Live, read-only GitHub REST API |
| Review context JSON export | Working, uses the selected real commit |
| Agent logs, source-to-doc mapping, verification results | Prepared demonstration |
| Patch review and translation samples | Local demonstration, no upstream writes |
| AI-generated repairs and automatic drift detection | Not implemented |
| Private repository authorization and PR creation | Planned |
| Wallet, token and payments | Not part of this release |

Inspecting a repository does **not** feed its code into the demo. No AI service is called. Marking a sample reviewed updates only the current page.

## Run locally

No package installation or build step is required. Open `index.html` directly for the demo. A local HTTP server is recommended for the GitHub inspector:

```sh
git clone https://github.com/GHOSTXrun/DOCAGENT.git
cd DOCAGENT
python -m http.server 8080
```

Open `http://localhost:8080`. If Python is unavailable, use an existing static web server or editor preview extension.

## Inspect a repository

1. Enter `owner/repository` or a public `https://github.com/owner/repository` URL.
2. Select **Inspect repository**. Requests are sent only after this action.
3. Choose a commit from the latest 10 commits on its default branch.
4. Expand a file to inspect its patch, or open the full commit on GitHub.
5. Download the review context for manual analysis.

GitHub's unauthenticated rate limit applies. Private repositories and empty repositories cannot be inspected. The first page of up to 100 changed files is displayed; larger commits are labeled as partial. Binary and very large files may not include patches. Individual patch previews are capped at 30,000 characters; the export contains the patch text returned by GitHub. File categories are path-based hints, not proof of documentation drift.

## Privacy and permissions

The frontend sends requests directly to `api.github.com`. It has no project backend, analytics, credential storage or automatic repository writes. Repository data lives in browser memory and in files the user explicitly downloads. GitHub handles these requests under its own policies. Do not paste access tokens into the repository field.

## Static hosting

Publish `index.html` and the entire `assets/` directory together. All asset paths are relative and work under a repository subpath.

For GitHub Pages, choose **Settings → Pages → Deploy from a branch → main → /(root)**. The `.nojekyll` file enables plain static publishing. Once enabled and built, the expected URL is `https://ghostxrun.github.io/DOCAGENT/`; check Pages settings for the actual published status.

## Project structure

```text
index.html             Landing page, demo, review UI and styles
assets/workspace.js    Public GitHub inspector and context export
assets/docagent-logo.png
README.md              Setup, capabilities and limitations
CONTRIBUTING.md        Development and validation guidance
docs/ROADMAP.md         Implementation milestones
.github/ISSUE_TEMPLATE/bug_report.md
```

## Validation

Before proposing a change, check desktop and mobile layouts, the six-stage demo, scrolling controls, repository loading, commit selection, invalid input and API failure messages. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Next milestones

See [the roadmap](docs/ROADMAP.md). The next meaningful backend milestone is one source-grounded documentation patch with traceable evidence, followed by an explicitly approved GitHub pull request.

[Report a bug or suggest an improvement](https://github.com/GHOSTXrun/DOCAGENT/issues).

## License

No software license has been selected yet. Public repository visibility alone does not grant a general reuse license; a project owner should choose the intended license before broader distribution.