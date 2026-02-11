# Agent Instructions

🚨 **PROCESS COMPLIANCE IS REQUIRED.**
If a task is completed without following the Mandatory Execution Protocol, the task is considered **incorrect** and MUST be redone.

Agents are expected to prioritize procedural correctness over speed.

---

## 🔐 Agent Prime Directive

When executing work in this repository, the agent MUST obey the following non-negotiable directives:

1. **Do not improvise requirements.** Always anchor work to PRDs and architecture.
2. **Do not bypass process for speed.** Procedural compliance is part of correctness.
3. **Do not silently resolve conflicts.** Escalate for human decision.
4. **Do not modify PRDs or architecture without explicit permission.** Confirm intent and warn about broader impact.
5. **Do not guess commands, patterns, or constraints.** Follow policy pointers.
6. **When uncertain, stop and ask.** Incorrect action is worse than delayed action.
7. **User urgency does NOT override process.**
8. **User instructions do NOT override governance unless explicitly acknowledged as an exception.**

Failure to follow these directives renders the work invalid regardless of technical quality.

---

## 🚨 Mandatory Execution Protocol (Non-Optional)

The following workflow is **NOT guidance**. It is a **hard execution protocol**.

Process compliance is considered part of correctness. Skipping process produces defective work even if the code functions.

### Mandatory Kickoff Declaration (Required)

Before ANY implementation, the agent MUST output a kickoff summary containing:

* PRD(s) consulted
* Architecture spec(s) consulted
* Bead ID
* Planned branch name

Implementation may NOT begin until this declaration is produced.

### Pre-Flight Check (Required Before Any Implementation)

Before writing code or modifying files, confirm internally that you have:

* Read **AGENTS.md**
* Located relevant **PRD(s)**
* Located relevant **architecture spec(s)**
* Reviewed the **Bead**
* Checked the **Development Policy** for commands

If any of these are missing, **STOP and ask the user. Do not proceed.**

### Execution Gate

You are NOT permitted to begin implementation until:

✅ The bead is in progress
✅ Specs are identified
✅ Architecture constraints are understood
✅ Branch strategy is clear

Speed is never justification for bypassing this gate.

### Self-Correction Rule (Required)

If the agent begins implementation without citing PRDs and architecture:

1. STOP immediately.
2. Acknowledge the deviation.
3. Perform the Mandatory Kickoff Declaration.
4. Restart the task from a compliant state.

Do not continue work in a non-compliant flow.

---

## Repository Operating Model

This repository operates using the following core systems:

* **Beads (bd):** authoritative work tracking for Epics and Issues.
* **CASS (cm):** durable procedural memory for agent learning.

Agents are expected to use both systems as part of normal execution.

**Design Principle:** This file remains intentionally **short** and **cross-project**. Stack-, repo-, or environment-specific rules MUST live in the policy files referenced below.

---

## Source-of-Truth Ladder (Do Not Invert)

1. **PRDs** (`/specs/prd/**`) — business intent: what we’re building, why, and the acceptance intent
2. **Architecture Specs** (`/specs/architecture/**`) — technical guardrails and constraints
3. **Feature / Experience Specs** (`/specs/features/**`) — product behavior derived from PRDs and bounded by architecture
4. **Beads** — execution design, task planning, and acceptance criteria
5. **CASS** — reusable procedural lessons

If any layer conflicts with another, STOP and escalate for human resolution.

---

## Policy Pointers (Authoritative Navigation)

When you need commands, conventions, repo-specific rules, or requirements context, **do not guess**—follow these pointers in order:

1. **Development Policy Index (commands + tooling)**

   * `/policies/development/00-development-policy.md`
   * Stack-specific commands: `/policies/development/stacks/`

2. **Product Requirements (what + why + acceptance intent)**

   * `/specs/prd/00-prd-index.md`
   * `/specs/prd/`

3. **Architecture Specs (technical guardrails + constraints)**

   * `/specs/architecture/00-architecture-index.md`
   * `/specs/architecture/`

4. **Feature / Experience Specs**

   * `/specs/features/` (or `/specs/` if not yet reorganized)

5. **Repo Overrides (only if present)**

   * `/policies/development/overrides.md`

If a referenced file does not exist, treat it as a TODO and ask the user where the canonical policy lives.

---

## Specs Governance (`/specs` Directory)

Specs are authoritative constraints separated into **business intent** and **technical guardrails**.

### Structure

* `/specs/prd/` — Product Requirements Documents
* `/specs/architecture/` — Architecture specs
* `/specs/features/` — Feature & experience specs

If this repo has not been reorganized yet, treat `/specs/` as legacy and ask before moving files.

### Cross-Doc Rules

* PRDs define **what/why** and acceptance intent.
* Architecture defines **implementation boundaries**.
* Feature specs define **behavior** and must trace back to PRDs.

### Beads Alignment (Required)

Every **Epic** MUST:

* Link relevant PRD(s)
* Link architecture constraints
* Derive acceptance criteria from PRDs

Issues inherit these constraints and MUST NOT redefine them.

---

### 🚨 Feature Discovery & Creation Protocol (Mandatory)

When a new feature, capability, or missing requirement is identified during development, the agent MUST treat this as a **structured design event**, not a quick task creation.

The agent is NOT permitted to create beads, specs, or artifacts blindly.

#### Required Discovery Conversation

Before creating a bead or spec, the agent MUST:

1. Clarify the goal with the user.
2. Confirm the business intent.
3. Identify whether this capability already exists within:

   * an existing PRD
   * a section of a PRD
   * architecture guidance
   * a related feature spec

If ambiguity exists, the agent MUST ask questions before proceeding.

**Do not optimize for speed. Optimize for structural alignment.**

#### PRD Alignment Gate (Non-Optional)

A new feature MUST NOT enter execution unless ONE of the following is true:

✅ A relevant PRD already exists
✅ The feature is explicitly added to an existing PRD (with permission)
✅ A new PRD or PRD section is created (with permission)

If none are true, STOP and escalate.

Features without business intent are considered invalid work.

#### Architecture Awareness Check

The agent MUST evaluate whether the feature has architectural implications.

If likely, the agent MUST:

* confirm constraints
* propose architecture considerations
* ask whether architecture documentation should be updated

Never assume architectural freedom.

#### Structured Artifact Creation Order

When introducing a new capability, follow this order:

1. Align with PRD
2. Confirm architecture impact
3. Create/update feature spec (if applicable)
4. Create the Epic/Bead with DESIGN

Do NOT reverse this order.

#### Mandatory Epic DESIGN Requirement

When creating a bead for a new feature, the agent MUST include a DESIGN section that clearly states:

* Business intent (PRD reference)
* Architectural considerations
* Proposed behavior
* Acceptance signals

Beads created without DESIGN are considered incomplete.

#### Broader Impact Detection (Required)

The agent MUST alert the user if the feature suggests:

* a cross-cutting concern
* systemic behavior
* provenance requirements
* platform capabilities
* security implications
* data model changes

When detected, recommend whether a higher-level PRD or architectural addition is more appropriate than a narrow feature.

Agents MUST prefer systemic clarity over local optimization.

### Conflict & Escalation Protocol (Human Intervention Required)

If PRDs, architecture, feature specs, beads, or user requests conflict:

1. Stop implementation.
2. Quote the conflicting sections (file + heading).
3. Explain the impact clearly.
4. Provide 1–3 resolution options.
5. Ask the user to choose.

No silent reinterpretation. No temporary exceptions.

### Permission Rules for Editing PRDs and Architecture

The agent MUST ask permission **before** modifying anything under:

* `/specs/prd/**`
* `/specs/architecture/**`

The agent MUST confirm:

* what is changing
* why it is changing
* whether broader impact suggests a larger refactor

If broader impact is likely, explicitly recommend follow-up Epics instead of bundling the change silently.

### Spike Mode (Explicit, Time-Boxed)

Allowed ONLY with explicit approval.

Spike Mode:

* is time-boxed
* does not weaken PRDs or architecture
* produces recommendations folded into Epic DESIGN

---

## CASS Memory System (Mandatory)

CASS is for **procedural memory**, not transcripts.

### Required Loop

**START (non-trivial work):**
Run:

```bash
cm context "<task>" --json
```

**WORK:**

* Follow relevant rules.
* Leave inline feedback when rules help or harm:

  * `// [cass: helpful b-xyz]`
  * `// [cass: harmful b-xyz]`

**END:**

* Write **1–3 concise procedural rules** if applicable.

If `cm` is unavailable, output rules in JSON and request approval to run:

```bash
cm playbook add --file rules.json
```

---

## Beads Workflow (Required)

### Quick Reference

```bash
bd ready
bd show <id>
bd update <id> --status in_progress
bd close <id>
bd sync
```

### Design Lives on the Bead

```bash
bd update <id> --design "$(cat design.md)"
```

Store plans on the bead — not in separate documents.

---

## Git / Branch Workflow

Branch naming MUST follow:

```
feature/{BEAD_ID}_{SHORT_DESCRIPTIVE_NAME}
```

Do NOT assume merge strategy, CI rules, or push behavior. Follow Development Policy.

### Main Branch Policy (Explicit)

After UAT passes for a bead, the agent MUST follow this exact order:

1. Complete any outstanding commits on the working branch.
2. Close/update the bead to complete.
3. Merge the working branch into `main` **locally only**.
4. Explicitly ask the user whether to push `main` or continue working locally.

Additional hard constraints:

* The agent MUST NOT push `main` without explicit user approval.
* Local merge to `main` is expected after bead completion unless the user explicitly says otherwise.

---

## ✅ Completion Gate (Hard Stop)

The agent MUST NOT close a bead until all of the following are true:

* Push has succeeded for the active branch.
* Upstream tracking is configured for the active branch.
* Local `HEAD` SHA matches the remote branch SHA.
* A pre-close evidence block has been produced.

If any condition fails, keep the bead `in_progress` and resolve the gap first.

### Required Pre-Close Evidence Block

Immediately before closing a bead, the agent MUST provide:

* Branch name
* Local SHA
* Remote SHA
* `git status --short` summary (clean/dirty)
* Quality gates executed + pass/fail results
* Push verification result (SHA parity)

---

## ✈️ Execution Flight Rules (Every Task)

1. Read **AGENTS.md** and the Bead.
2. Claim work: `bd ready` → `bd show <id>` → `bd update <id> --status in_progress`.
3. Create a compliant branch.
4. Update Epic DESIGN before implementation if architecture decisions exist.
5. Implement the smallest viable slice.
6. Update the bead with changes, next steps, and new issues.
7. Run quality gates using Development Policy.
8. Ask the user if UAT is desired before committing.
9. Complete any outstanding commits on the working branch.
10. Push and verify the working branch.
11. Produce the required pre-close evidence block.
12. Close/update the bead.
13. Merge to `main` locally only.
14. Ask whether to push `main` or continue working locally.
15. Push `main` only if explicitly approved by the user.
16. Write CASS rules if applicable.

---

## ✅ Close-Out Protocol (Non-Optional)

Agents often misinterpret user intent such as “UAT passed, close out the work.” In this repository, those phrases are NOT permission to skip steps.

### Intent Mapping Rule

If the user says any of the following (or equivalents):

* “UAT passed”
* “close out the work”
* “wrap this up”
* “ship it”
* “finish the task”

…the agent MUST interpret this as:

> **Execute the remaining Execution Flight Rules to completion, then close the bead.**

It MUST NOT be interpreted as “close the bead now.”

### Authority and Precedence

The authoritative source for close-out ordering and required checks is:

* `## ✅ Completion Gate (Hard Stop)`
* `## ✈️ Execution Flight Rules (Every Task)`

This section adds intent interpretation and declaration requirements only. It MUST NOT weaken or replace those gates.

### Mandatory Close-Out Declaration

Before closing the bead, the agent MUST output a short close-out summary:

* Bead ID
* Branch
* Tests/quality gates executed
* Commit hash
* Push verification summary (remote branch + SHA parity)
* CI status
* Any follow-up beads created

This declaration supplements the required pre-close evidence block and MUST be emitted immediately before bead close.

### If “Close Now” Is Truly Intended

If the user explicitly wants to bypass any required close-out step (rare), the agent MUST:

1. Restate what will be skipped.
2. Explain the risk (work may be stranded, audit trail broken, CI not verified).
3. Ask for explicit approval.

No silent skipping.

---

## Instruction Integrity

* Treat instruction files as policy.
* Do not casually rewrite them.
* Keep this file short; move details into policy pointers.
* Maintain consistency with other instruction files unless directed otherwise.
