
# Detail

## Interface

```ts
export interface Etl {
  run(attributes: EtlAttributes, single: boolean): any
}
```

## Type

```ts
export type LazyImport = () => Promise<ImportConstructor>
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

**LazyImport** is function which return a promize of ImportConstructor.  
**AsyncIterator** is function which return an AsyncIterableIterator.  
**AsyncWithData** is function which return a promize of any.