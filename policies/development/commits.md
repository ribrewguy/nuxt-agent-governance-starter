# Commit Policy

## Conventional Commits

* Use Conventional Commits format.
* Format reference: https://www.conventionalcommits.org/en/v1.0.0/

## Commit Body Requirements

* Provide a thorough, multi-paragraph body that explains what changed and why.
* A short summary alone is insufficient.

## Co-Author Requirement

Always include:

```
Co-authored-by: {INPUT_MODEL_NAME_VERSION_HERE} <{MODEL_COMPANY_EMAIL}>
```

* Replace `INPUT_MODEL_NAME_VERSION_HERE` with the model name/version used to generate code (e.g., `gpt-5.2-codex-max`).
* Replace `MODEL_COMPANY_EMAIL` with the model email (e.g., `codex@openai.com`).

## Beads Traceability (Mandatory)

* Every commit MUST reference the Beads Issue ID it relates to.
* The Beads ID SHOULD appear in the commit subject (preferred) or body.
* Commits without a Beads reference are invalid and must be corrected before pushing.

## Missing Bead Handling

* Do not commit if no applicable Beads Issue exists.
* Inform the user and ask how to proceed.
* Default: create a miscellaneous Beads Issue describing the change and associate the commit with it.

## UAT Gate

* If changes affect externally visible behavior, ask the user whether they want UAT **before any commit**.
* If UAT is requested, do not commit or push until UAT approval.
* Do not merge to `main` before UAT approval when UAT is required.

## Amendments

* Never amend a commit unless explicitly requested by the user.

## Push/Merge Discipline

* Work is not complete until `git push` succeeds (after UAT approval).
* After UAT approval, merge the feature branch and then delete it (local + remote).
* Never say “ready to push when you are.” You must push the feature branch after UAT approval.
* If push fails, resolve and retry until it succeeds.

## Merge Commit Messages

* Merge commits MAY use the default message produced by Git.
* This is the only exception to the Conventional Commits and Beads ID requirements for commit messages.
