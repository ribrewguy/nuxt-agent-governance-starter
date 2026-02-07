# 02-boundaries-and-data-access.md

## Boundary Rules

* Client communicates with server **only** via `/api/*`

## Prohibited

* No direct database access from client code
* No server code accessing external services without going through a service or adapter layer

## Allowed Pattern

Client → API Route → Service → Adapter/Repo → Database/External Service
