# Dashboard — Guiding Specification

## Purpose

Define required behavior, constraints, and global UX conventions for an **user-facing (engineer) dashboard**. This document is the root guiding specification and is the authoritative source of truth for all feature-level specs.

* Feature and experience specs now live under `specs/features/`.

---

## Scope

**DECISION**

* This specification defines **what behaviors exist**, not delivery order, priority, or release sequencing.
* Feature availability, rollout timing, or enablement strategy is explicitly **out of scope** for this document.

---

## Target User

**OBSERVED**

* Target persona: **user (engineer)** only.

**DECISION**

* The application SHALL NOT include administrator views unless explicitly added later.

**UNKNOWN**

* Whether support or internal-only views are required in the future.

---

## Capability Boundaries

**DECISION**

* Capabilities SHALL be specified independently and without implied sequencing.
* Read-only, guidance, and transactional behaviors MAY coexist in the system specification.

**DECISION**

* Transactional workflows SHALL adhere to validation, disclosure, review, and authorization requirements.

---

## Global UX Conventions

**DECISION**

* Every feature spec SHALL explicitly separate:

  * **OBSERVED** behavior from reference systems (if applicable)
  * **INFERRED** constraints
  * **DECISIONS** chosen for this product
  * **UNKNOWN** items requiring further observation

**DECISION**

* Every feature spec SHALL include testable requirements using normative language (SHALL / SHALL NOT / SHOULD / MAY).

**DECISION**

* Feature specs SHALL explicitly document:

  * empty states
  * error states
  * loading states (when applicable)
  * permissions assumptions
  * data freshness / “as of” indicators when present

---

## Reliability and Error Handling

**DECISION**

* Page-level error states SHALL be used only when core data required to render the page is unavailable.

**DECISION**

* Section-level error states SHALL be used for partial failures; unaffected sections MUST still render.

**DECISION**

* Error states SHALL provide retry affordances scoped to the failed section or page.

**DECISION**

* Retry actions SHALL preserve user-entered state where applicable.

**DECISION**

* When data is stale or delayed, display a data freshness indicator if available.

**DECISION**

* Section-level and page-level data access failures SHALL use the canonical error copy:

  * "A problem was encountered while accessing this data."

* Save failures SHALL use the canonical error copy:

  * "A problem was encountered while saving these changes."

* Global unavailable states SHALL use the canonical error copy:

  * "A problem was encountered. Please try again later."

* Retry actions SHALL use the label "Try again".

**UNKNOWN**

* Whether maintenance or outage banners are required.

---

## Non‑Goals

* This specification does NOT define backend APIs.
* This specification does NOT mandate visual design.
* This specification does NOT mandate implementation technologies or frameworks.

---

## Open Questions to Resolve Early

**UNKNOWN**

* Data freshness model (real-time vs end-of-day vs delayed).
* Account multiplicity rules.
* Terminology standardization (account, user, etc.).
* Document viewing vs downloading behavior and retention.
* Export formats (CSV, PDF).
* Mobile/responsive requirements.

---

## Authority

* This document is the **system-level source of truth** for acceptance criteria and UX conventions.
* Feature specs MUST NOT contradict this document.
* This document intentionally avoids defining implementation order, rollout strategy, prioritization, or phase gating.
