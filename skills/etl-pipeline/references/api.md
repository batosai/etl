# API reference

## Package exports

| Import path | Content |
|---|---|
| `@jrmc/etl` | the `etl` service singleton (default and named `etl` export) |
| `@jrmc/etl/types` | all types and interfaces below |
| `@jrmc/etl/source` | `BaseSource` class (extend as alternative to `implements Source`) |
| `@jrmc/etl/transform` | `BaseTransform` class |
| `@jrmc/etl/destination` | `BaseDestination` class |

## Run

```ts
etl.run(attributes: EtlAttributes, single?: boolean): Promise<any>
```

- Returns the array of values returned by each `destination.write()` call.
- `single: true` returns only the first element instead of the array.

## Types

```ts
export type LazyImport = () => Promise<{ default: unknown }>
export type AsyncIterator = () => AsyncIterableIterator<any>
export type AsyncWithData = (data: any) => Promise<any>

export type SourceEtl = LazyImport | [LazyImport, options: Object] | AsyncIterator
export type TransformEtl = LazyImport | AsyncWithData
export type DestinationEtl = LazyImport | [LazyImport, options: Object] | AsyncWithData

export type EtlAttributes = {
  source: SourceEtl
  transform?: TransformEtl
  destination: DestinationEtl
}
```

Note: `transform` does not accept the `[LazyImport, options]` tuple — only source and destination do.

## Interfaces to implement

```ts
export interface Source {
  each(): AsyncIterableIterator<any>
}

export interface Transform {
  process(data: any): Promise<any>
}

export interface Destination {
  write(data: any): Promise<unknown>
}
```

When using the `[LazyImport, options]` tuple, options are passed to the class constructor: `constructor(options: Object = {})`.

## Runtime shape detection (how inputs are disambiguated)

- **source**: if calling the function returns an `AsyncIterableIterator`, it is used directly as `each`; otherwise it is awaited as a lazy import and its default export is instantiated.
- **transform / destination**: if calling the function resolves to an object with a `default` key, it is treated as a lazy import; otherwise as an inline `async (data) => any`.

Consequence: an inline destination/transform function is invoked once during detection. Avoid inline functions with side effects that must not run twice on the first item — prefer a class in that case.
