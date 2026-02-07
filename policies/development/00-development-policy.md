# Development Policy

## Package Manager

* Use `pnpm` for all installs and scripts.

## Commands (From package.json)

### App

* `pnpm dev`
* `pnpm build`
* `pnpm preview`

### Quality Gates

* `pnpm lint`
* `pnpm typecheck`
* `pnpm test:unit`
* `pnpm e2e`

### Supabase

* `pnpm db:link`
* `pnpm db:push`
* `pnpm db:pull`
* `pnpm db:reset`
* `pnpm db:gen`

## Database Rules

* All schema changes via Supabase migrations.
* No manual database edits.

## Cross-Stack Policies

* `policies/development/mcp.md`
* `policies/development/commits.md`
* `policies/development/i18n.md`

## Policy Stacks

* `policies/development/stacks/nuxt.md`
* `policies/development/stacks/testing.md`
* `policies/development/stacks/nuxt-ui.md`
