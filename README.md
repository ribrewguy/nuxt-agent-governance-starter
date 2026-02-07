# nuxt-agent-governance-starter

An opinionated Nuxt boilerplate for building applications with AI agents—focused on governance, execution discipline, shared memory, and preventing agent drift.

This repository is **not** a generic starter template. It is a **reference implementation** of a professional, agent-first workflow designed to keep AI-assisted development aligned, auditable, and defensible as systems grow.

---

## What This Repository Is

This repo demonstrates a complete **AI Developer Experience (AIDX)** for building Nuxt applications with AI agents as first-class collaborators.

It shows how to:

* encode intent and constraints explicitly
* prevent agents from inventing requirements or bypassing process
* separate *what* you’re building from *how* work is executed
* retain procedural learning across agents and sessions

The goal is not speed-at-all-costs.
The goal is **correctness, alignment, and durability**.

---

## What This Repository Is *Not*

* Not a Nuxt UI showcase
* Not a prompt-engineering playground
* Not a plug-and-play SaaS template
* Not a replacement for your project management tooling

If you’re looking for a quick demo or a magic AI framework, this is probably not what you want.

---

## Core Concepts Demonstrated

### 1. Agent Governance (AGENTS.md)

The `AGENTS.md` file is the governing contract for all AI agents working in this repository.

It defines:

* mandatory kickoff declarations
* pre-flight checks
* execution gates
* escalation rules
* self-correction requirements

**AGENTS.md does not contain implementation details.**
It points agents to authoritative sources instead of allowing improvisation.

---

### 2. Intent & Constraints (`/specs`)

The `/specs` directory defines *what* the system is and *why* it exists.

```
/specs
  /prd          # business intent and acceptance criteria
  /architecture # technical guardrails and constraints
  /features     # behavior derived from PRDs and architecture
```

Specs are authoritative. Agents are not allowed to silently reinterpret or modify them.

---

### 3. Execution Constraints (`/policies`)

The `/policies` directory defines **how work is allowed to be executed**.

Policies are used to constrain:

* commit conventions (e.g., conventional commits)
* tool usage (e.g., MCPs, external systems)
* stack-specific commands and workflows

This keeps AGENTS.md tight and reusable while still enforcing deep, project-specific governance.

---

### 4. Execution as a First-Class Artifact (Beads)

Work is tracked using **Beads**, a CLI-first system for managing Epics and Issues as executable contracts.

In this repo, Beads are used to:

* bind work to PRDs and architecture
* require explicit design for non-trivial tasks
* provide durable, inspectable execution units for agents

Beads are not tickets. They are **execution contracts**.

---

### 5. Shared Procedural Memory (CASS)

This repo demonstrates the use of **CASS** for shared procedural memory across agents.

CASS is used to:

* capture durable rules learned through experience
* prevent repeated mistakes
* share learning across agents and sessions

It is **not** used for chat logs, transcripts, or thoughts.

---

## Repository Structure

```
.
├─ AGENTS.md            # Agent governance and execution contract
├─ /specs               # Intent and architectural constraints
├─ /policies            # Execution rules and tooling constraints
├─ /beads               # Beads metadata (if checked in)
├─ /app                 # Nuxt application code
└─ README.md
```

---

## How to Use This Repository

This repo is intended as a **learning scaffold**, not something you blindly fork.

Recommended approach:

1. Read `AGENTS.md` end-to-end
2. Review the `/specs` to understand intent and constraints
3. Inspect `/policies` to see how execution is governed
4. Walk through a bead from design → execution → closure
5. Observe how procedural learning is captured

Only after understanding the full system should you adapt it to your own projects.

---

## How This Fits With Existing PM Tools

This workflow is designed to **complement**, not replace, tools like Jira, Linear, or Azure DevOps.

Those tools capture **organizational intent**.
This repository focuses on **executable intent** for AI agents.

The two can—and should—coexist.

---

## Who This Is For

This repository is intended for:

* senior engineers and staff+ ICs
* engineering managers and VPs
* teams experimenting with AI agents in real systems

If you care about governance, correctness, and scaling AI-assisted development responsibly, this repo is for you.

---

## Status

This repository reflects a **current snapshot** of an evolving workflow.

The AI landscape is moving quickly. Tools, agents, and protocols will change.

The principles demonstrated here—authority, intent, constraints, execution discipline, and learning—are expected to endure.

---

## Related Work

* Article: *A Professional Workflow for Building Software With AI Agents* (link forthcoming)
* Follow-up: *OpenSpec* (in progress)

---

## License

MIT
