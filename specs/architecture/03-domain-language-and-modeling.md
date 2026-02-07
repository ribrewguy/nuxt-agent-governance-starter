# 03-domain-language-and-modeling.md

## Goal

Establish a cohesive domain language shared across client and server.

## Canonical File

* `types/model.ts`

## Domain Definition Strategy (Mandatory)

- The domain model is defined **exclusively using TypeScript `interface`s**.
- Domain interfaces represent **meaning and intent**, not validation or implementation.
- The domain model MUST remain free of runtime concerns.

## Agent Responsibilities

1. Read all relevant specs
2. Synthesize or update the domain model
3. Use domain DTOs in API routes
4. Avoid persistence leakage

## Modeling Rules

* Explicit ID types
* Clear separation of domain vs persistence
* No UI-only state in the domain model

## Interfaces vs Implementations

### Domain Interfaces

- All domain entities, value objects, and DTOs MUST be defined as **TypeScript interfaces**.
- Domain interfaces:
  - Contain no runtime logic
  - Contain no validation logic
  - Are stable contracts shared across the system

### Implementations

- Concrete implementations of domain interfaces MAY exist in other layers.
- Runtime validation and parsing MUST NOT occur in the domain layer.

## Domain Types vs Runtime Validation

- Runtime validation libraries (e.g., Zod) **MUST NOT define the domain**.
- Zod schemas may:
  - Implement domain interfaces
  - Act as concrete, runtime-safe representations of domain types
  - Be used to validate and construct domain objects at system boundaries

- Zod schemas MUST NOT:
  - Replace domain interfaces
  - Introduce alternative domain shapes
  - Encode business rules

The domain model defines *what the system means*; implementations define *how it is safely constructed*.

## Naming Conventions (Mandatory)

### Domain Types

- **All domain model property names MUST use `camelCase`.**
  - This applies to:
    - Domain entities
    - Value objects
    - DTOs
    - API request and response payloads

- **`snake_case`, `kebab-case`, and `PascalCase` are strictly prohibited** in domain types.

### Persistence & Translation

- Persistence-layer naming (e.g., Supabase table columns) **may use different conventions**
  (such as `snake_case`) but **must be translated** in server-side adapters.
- The domain model is the canonical language of the system and **must not bend**
  to database or UI naming conventions.

> The domain model represents the shared language of the system.
> Naming consistency is required to prevent schema drift, translation errors,
> and agent-generated ambiguity.

## Domain Model Change Control (Mandatory)

The domain model (`types/model.ts`) is the canonical source of truth for the system's shared language. Changes to this file have wide-reaching implications and require strict oversight.

### Change Requirements

Any modification to `types/model.ts` **MUST** satisfy both of the following before being committed:

1. **Explicit Justification**: The agent MUST provide a clear explanation of:
   - Why the change is necessary
   - What feature, bug fix, or spec requirement drives the change
   - How the change affects existing consumers of the interface

2. **UAT Review**: The user MUST review and approve the proposed changes before any commit. This applies to:
   - Adding new interfaces or types
   - Modifying existing interface properties
   - Removing or renaming any type or property
   - Changing type signatures

### Prohibited Actions

Agents MUST NOT:
- Make speculative or "just in case" changes to domain types
- Add properties without a concrete, immediate use case
- Modify domain types as a side effect of unrelated work
- Commit domain model changes without explicit user approval

### Rationale

The domain model is a stable contract shared across the entire system. Uncontrolled changes create:
- Breaking changes in API contracts
- Inconsistencies between client and server
- Adapter translation errors
- Schema drift between domain and persistence layers

> Domain model changes are design decisions, not implementation details.
> Treat `types/model.ts` with the same rigor as spec files.
