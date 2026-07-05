# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, Cursor, Codex, etc.) when working with code in this repository.

## Project

`@jrmc/etl` — small ESM library (npm package) providing an Extract/Transform/Load pipeline for Node.js (>=20.12). Docs published at https://etl.jrmc.dev via VitePress.

## Commands

```sh
npm test                 # run all tests (Japa runner via bin/test.ts)
npm test -- tests/lazy_import.spec.ts   # run a single test file
npm run typecheck        # tsc --noEmit
npm run build            # clean + tsc → build/
npm run format           # prettier --write .
npm run docs:dev         # VitePress dev server for docs/
```

Tests run with `node --loader ts-node/esm` — no build step needed before testing. The Japa runner (`bin/test.ts`) accepts standard Japa CLI args (file paths, `--tests="title"`).

## Architecture

The whole library is a single orchestrator plus three overridable base classes:

- `service.ts` — the core. Exports a singleton implementing `Etl.run({ source, transform?, destination }, single?)`. It iterates `source.each()`, applies the optional transform to each item, and pushes each item to `destination.write()`. Its private `#source`/`#transform`/`#destination` methods normalize what the caller passed into a usable object.
- `index.ts` — public entry, re-exports the service singleton (default and named `etl`).
- `src/types.ts` — all public types (`EtlAttributes`, `SourceEtl`, `TransformEtl`, `DestinationEtl`, interfaces `Source`/`Transform`/`Destination`).
- `src/base_source.ts`, `src/base_transform.ts`, `src/base_destination.ts` — base classes consumers extend (`each()` async generator, `process(data)`, `write(data)`). Each is exposed as a package subpath export (`@jrmc/etl/source`, etc.).
- `src/utils.ts` — runtime detection (`isLazyImport`, `isAsyncIterableIterator`) used to disambiguate the accepted input forms.

Key design point: each of source/transform/destination accepts several shapes, resolved at runtime in `service.ts`:
1. a lazy import `() => import('./my_source.js')` whose default export extends the matching base class;
2. a `[LazyImport, options]` tuple (source/destination only) — options are passed to the class constructor;
3. an inline function — an async generator for source, an `async (data) => ...` for transform/destination.

When changing accepted input shapes, update `src/types.ts`, the detection logic in `src/utils.ts`, and `docs/guide/detail.md` together.

## Conventions

- Pure ESM (`"type": "module"`): all relative imports use `.js` extensions, including in TypeScript source.
- Prettier config lives in package.json (no semicolons, single quotes, printWidth 100).
- Test fixtures (sample Source/Transform/Destination classes) live in `tests/sample/`.
- Publishing ships only `build/`; subpath exports in package.json map to built files.
