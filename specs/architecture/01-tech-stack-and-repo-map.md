# 01-tech-stack-and-repo-map.md

## Technology Stack

* **Framework**: Nuxt (SSR via Nitro)
* **UI**: Nuxt UI (Tailwind-based)

## Repository Map

* `app/`: UI only (no persistence logic)
* `server/api/**`: API routes (client entry point)
* `server/services/**`: business logic and orchestration
* `server/adapters/**`: domain → persistence translation
* `types/model.ts`: canonical domain model
* `i18n/**`: i18n strings per `nuxt-i18n`

## Invariants

* Domain language only in API contracts
* `types/model.ts` is authoritative
