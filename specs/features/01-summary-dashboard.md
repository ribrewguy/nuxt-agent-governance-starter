# 401(k) Summary Dashboard — Your account at a glance

## Scope

**DECISION**
- This spec defines the Dashboard experience only.

**DECISION**
- The Dashboard SHALL be read-only and provide quick access to key account overview data and entry points into deeper sections.

---

## Deep Linking

**DECISION**
- The Summary Dashboard SHALL be deep-linkable via URL.

---

## Requirements

### 1) Balances

**DECISION**
- The dashboard SHALL display a total account balance as the primary headline value.

**INFERRED**
- Balance breakdowns may be shown if available.

**UNKNOWN**
- Exact balance labels and ordering.

### 7) Account Activity Entry Point

**DECISION**
- The dashboard SHALL provide an entry point to account activity or transaction history.

---

## Error and Loading States

**DECISION**
- Use a page-level loading state only when the core balance and summary data are not yet available.

**DECISION**
- Use section-level loading states for cards that fetch independently (contributions, beneficiaries, documents, activity).

**DECISION**
- Page-level errors SHALL be reserved for failures that prevent rendering the dashboard at all.

**DECISION**
- Section-level errors SHALL render in place of the affected card and include a retry action.

---

## Disclosures

**DECISION**
- Any projected values or assumed rates (including rate of return) SHALL include a nearby disclaimer that values are estimates and not guarantees.

**UNKNOWN**
- Specific legal wording required for return or projection disclosures.

---

## UNKNOWNs and Targeted Next Observations

**UNKNOWN**
- Exact card order, grouping, and labels used in the reference portal.
- Whether the summary includes graphs (e.g., balance over time) and the default time window.
- Whether the dashboard includes alerts or messages (e.g., missing account warning).

**TARGETED OBSERVATIONS NEEDED**
- Capture the dashboard layout and card order.
- Capture the exact labels and values for balance breakdowns and rate of return.
- Capture the activity entry points.
