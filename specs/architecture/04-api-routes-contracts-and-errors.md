# 04-api-routes-contracts-and-errors.md

## API Location

* `server/api/**`

## Response Shape

### Success Responses

* **List endpoints** MUST return:
  ```json
  {
    "items": [],
    "page": 1,
    "pageSize": 10,
    "totalCount": 0,
    "totalPages": 0
  }
  ```

* **Detail endpoints** MUST return the **item itself** (no wrapper):
  ```json
  { /* item fields */ }
  ```

### Error Responses

* Errors MUST use HTTP status codes and return a standard error object:
  ```json
  {
    "code": "SOME_ERROR_CODE",
    "messageKey": "optional.i18n.key",
    "details": null
  }
  ```

* 404s MUST return the error object with status code 404.

## Pagination (List Endpoints)

* `page` is **1-based**.
* Default `pageSize` is **10**.
* Max `pageSize` is **100**.

## Validation

* Server-side validation required
* Use Zod schemas where appropriate
- **All API routes MUST perform server-side validation.**
- **Zod is the mandatory validation library for API boundaries.**

## Zod as Domain Implementations (Mandatory)

- Zod schemas are the **concrete, runtime-safe implementations** of domain interfaces.
- Zod schemas MUST:
  - Conform exactly to the corresponding domain interface
  - Produce objects assignable to the domain interface type

Example (conceptual):

- Domain defines:
  - `interface Account { ... }`
- Zod implements:
  - `const AccountSchema = z.object({ ... }) satisfies z.ZodType<Account>`

### Construction Rules

- Domain objects entering the system from untrusted sources MUST be:
  1. Parsed and validated using Zod
  2. Constructed as concrete objects
  3. Treated as instances of the domain interface thereafter

- After validation, downstream layers MUST rely on the **domain interface**, not Zod types.

### Zod Usage Rules (Mandatory)

- Every API route **MUST validate all incoming input** using a Zod schema.
  - This includes:
    - Request bodies
    - Query parameters
    - Route parameters

- Zod schemas MUST be executed at the API boundary using:
  - `schema.parse(...)` or
  - `schema.safeParse(...)`

### Dependency Direction (Strict)

- Domain interfaces → referenced by Zod schemas
- Zod schemas → MUST NOT be imported into `types/model.ts`

This one-way dependency prevents runtime concerns from contaminating the domain.

- No unvalidated input may enter:
  - service layers
  - domain logic
  - persistence adapters

### Domain Types vs Validation

- Zod schemas **MUST NOT replace** the canonical domain types.
- Canonical domain types live in `types/model.ts`.
- Zod schemas may:
  - Be derived from domain types
  - Mirror domain DTOs
  - Narrow or constrain inputs

### Error Handling

- Zod validation failures MUST be translated into the standard API error object.
- Validation errors MUST:
  - Use a stable error code (e.g., `VALIDATION_FAILED`)
  - Avoid leaking internal schema details to the client

Raw Zod error objects MUST NOT be returned directly to clients.

## Error Rules

* No raw error messages in API responses
* All errors must have a stable `code` for client handling
* Optional `messageKey` for i18n support on the client
* `details` field can include structured error information but must not contain sensitive data