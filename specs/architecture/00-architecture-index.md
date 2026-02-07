# Architecture Specifications

> **Canonical Architecture Reference**
> This directory is the authoritative architectural specification for this project. All agents must comply with these rules unless explicitly overridden by the user.

---

# 00-architecture-index.md

## Purpose

This index defines **where architectural guidance lives**, how it is structured, and how agents must consume it.

## Mandatory Rules for Agents

* The `/specs/architecture` directory is the **single source of truth** for cross-cutting technical decisions.
* Agents **must read this index first** before implementing or modifying code.
* If a feature spec conflicts with an architecture spec, **architecture wins** unless the user explicitly overrides it.
* Feature specs may reference architecture but **must not redefine it**.

## Architecture Documents

1. **01-tech-stack-and-repo-map.md** — Frameworks, libraries, repo layout, and invariants
2. **02-boundaries-and-data-access.md** — Client/server boundaries and rules
3. **03-domain-language-and-modeling.md** — Domain model synthesis and `types/model.ts`
4. **04-api-routes-contracts-and-errors.md** — API conventions, validation, and error schema
5. **05-i18n-strings-dates-and-formatting.md** — Localization and formatting rules
6. **06-observability-logging-and-privacy.md** — Logging, tracing, and PII handling
7. **07-testing-strategy-vitest-and-playwright.md** — Testing layers and selector conventions