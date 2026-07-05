---
name: etl-pipeline
description: Build ETL (Extract, Transform, Load) pipelines with the @jrmc/etl package. Use when the user wants to import/export/migrate data between formats or systems (CSV, XLSX, JSON, database, API) using @jrmc/etl, or asks to create a source, transform, or destination component for it.
---

# Build an ETL pipeline with @jrmc/etl

`@jrmc/etl` is a minimal, pure-ESM ETL library for Node.js >= 20.12. A pipeline is one call:

```ts
import etl from '@jrmc/etl'

const results = await etl.run({
  source: UserSource,          // required — where data comes from
  transform: UserTransform,    // optional — reshape each item
  destination: UserDestination // required — where data goes
})
```

The source is iterated item by item; each item goes through the transform (if any), then to the destination. `run` returns the array of values returned by `destination.write()`. Pass `true` as second argument to `run` to get only the first result.

## Requirements (do not skip)

- The consuming project must be ESM: `"type": "module"` in package.json.
- All relative imports must use the `.js` extension, even in TypeScript source files: `import('./user_source.js')` — never `./user_source.ts` or extensionless.
- Component classes must be the **default export** of their module.

## Choosing the input shape

Each of `source` / `transform` / `destination` accepts several shapes. Pick per this rule:

| Situation | Shape to use |
|---|---|
| One-off script, trivial logic | Inline functions |
| Reusable/testable components | Lazy-import classes |
| Component needs configuration (file path, connection, defaults) | `[LazyImport, options]` tuple (source/destination only) |

### Shape 1 — inline functions (quick scripts)

```ts
await etl.run({
  source: async function* () {           // async generator
    for (const item of data) yield item
  },
  transform: async (row) => ({ ...row }), // async (data) => any
  destination: async (row) => save(row),  // async (data) => any
})
```

### Shape 2 — lazy-import classes (reusable)

```ts
const UserSource = () => import('./etl/sources/user_source.js')
const UserTransform = () => import('./etl/transforms/user_transform.js')
const UserDestination = () => import('./etl/destinations/user_destination.js')

await etl.run({ source: UserSource, transform: UserTransform, destination: UserDestination })
```

Each module default-exports a class implementing the matching interface from `@jrmc/etl/types`:

```ts
// etl/sources/user_source.ts
import { Source } from '@jrmc/etl/types'

export default class UserSource implements Source {
  async *each() {
    // fetch/read here, then yield items one by one (or yield a whole batch)
    yield { lastname: 'Doe', firstname: 'John', age: 30 }
  }
}
```

```ts
// etl/transforms/user_transform.ts
import { Transform } from '@jrmc/etl/types'

export default class UserTransform implements Transform {
  async process(row: any) {
    return { name: `${row.firstname} ${row.lastname}`, age: row.age }
  }
}
```

```ts
// etl/destinations/user_destination.ts
import { Destination } from '@jrmc/etl/types'

export default class UserDestination implements Destination {
  async write(row: any) {
    // persist here; whatever you return is collected into etl.run's result array
    return row
  }
}
```

Suggested layout: `etl/sources/`, `etl/transforms/`, `etl/destinations/`, file names in snake_case ending with `_source` / `_transform` / `_destination`.

### Shape 3 — lazy import with options (configurable)

Source and destination (not transform) accept a `[LazyImport, options]` tuple. Options arrive in the class constructor:

```ts
await etl.run({
  source: [UserCsvSource, { file: 'users.csv' }],
  destination: [UserDbDestination, { table: 'users' }],
})
```

```ts
import { Source } from '@jrmc/etl/types'

type Options = { file: string }

export default class UserCsvSource implements Source {
  #file: string

  constructor(options: Options) {
    this.#file = options.file
  }

  async *each() { /* read this.#file, yield rows */ }
}
```

## Batch vs per-item

`each()` may yield items one by one (transform/destination receive a single item per call) or yield a whole array once (transform/destination receive the array and handle it in bulk, e.g. `createMany`, CSV stream). Keep the three components consistent with whichever granularity you pick.

## References

- [references/recipes.md](references/recipes.md) — complete working recipes: XLSX → database, database/array → CSV file. Read when implementing a concrete file/DB pipeline.
- [references/api.md](references/api.md) — full type signatures, interfaces, and package subpath exports. Read when unsure about an exact type or export path.

## AdonisJS

In an AdonisJS project, prefer the dedicated adapter `@jrmc/adonis-etl` (`node ace add @jrmc/adonis-etl`), which adds a `node ace make:etl <name>` scaffolding command. Docs: https://github.com/batosai/adonis-etl
