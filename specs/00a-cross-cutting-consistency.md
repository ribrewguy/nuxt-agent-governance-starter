# Cross-Cutting UX Consistency

## Purpose

**DECISION**
* This spec defines canonical cross-cutting UX patterns that apply across all user-facing features.
* This spec SHALL NOT introduce behavior beyond the decisions already established in existing specs and in `00-guiding-spec.md`.

---

## 1) Global Shell & Navigation

### Tab Deep Linking

**DECISION**
* All top-level tabs SHALL be deep-linkable via URL.

**UNKNOWN**
* Whether modals or wizard steps are deep-linkable.

---

## 2) Modal Pattern

**DECISION**
* Modals SHALL be presented as centered overlays on top of the current content.
* Modals SHALL include a visible close or cancel control.
* Closing a modal SHALL return the user to the originating content without applying changes unless explicitly saved.

**UNKNOWN**
* Whether modal size or width varies by content type.

---

## 3) Wizard Pattern

**DECISION**
* Wizards SHALL be contained within a single modal for the entire workflow lifecycle.
* The wizard modal SHALL NOT be replaced by a second modal.
* A Back control SHALL be available for all wizard steps except:

  * pre-wizard entry screens (if present),
  * the first step of the wizard,
  * and post-submitt confirmation screens (if present).

* Back SHALL preserve user-entered state.
* Wizard state SHALL be discarded when:

  * the wizard is canceled, or
  * the wizard is completed and the transaction is completed (if applicable), or
  * a confirmation screen has been rendered (if applicable).

**UNKNOWN**
* Whether a progress indicator is required for every wizard (some wizards remain partially observed).

---

## 4) Error Pattern

**DECISION**
* Page-level error states SHALL be used only when core data required to render the page is unavailable.
* Section-level error states SHALL be used for partial failures; unaffected sections MUST still render.
* Error states SHALL provide retry affordances scoped to the failed section or page.
* Retry actions SHALL preserve user-entered state where applicable.

**DECISION**
* Section-level and page-level data access failures SHALL use the canonical error copy:
  * "A problem was encountered while accessing this data."
* Global unavailable states SHALL use the canonical error copy:
  * "A problem was encountered. Please try again later."
* Retry actions SHALL use the label "Try again".

---

## 5) Loading Pattern

**DECISION**
* Page-level loading states SHALL be used only when core data required to render the page is unavailable.
* Section-level loading states SHALL be used for independent data regions where possible.

**UNKNOWN**
* Whether skeletons or spinners are the canonical loading UI across the system.

---

## 6) Download Pattern

**DECISION**
* When export is provided, it SHALL export exactly the currently displayed data (active view, lens, and scope).

**DECISION**
* Download-gated workflows SHALL treat a download as successful only after the file transfer completes.

**UNKNOWN**
* Canonical file naming conventions for downloaded artifacts.

---

## 7) Confirmation & Disclosure Pattern

**DECISION**
* Confirmation screens SHALL NOT claim execution or approval unless explicitly confirmed by the system.
* Estimates and projections SHALL include a nearby disclaimer indicating they are estimates and not guarantees.

---

## 8) Formatting Standards

**DECISION**
* Dates displayed in the UI SHALL use the localization rules defined.

**UNKNOWN**
* Currency formatting standard (whole dollars vs cents) is not yet defined.
