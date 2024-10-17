
# Detail

## Interface

```ts
export interface Etl {
  run(attributes: EtlAttributes, single: boolean): any
}
```

## Type

```ts
type EtlAttributes = {
  source: LazyImport | AsyncIterator
  transform?: LazyImport | AsyncWithData
  destination: LazyImport | AsyncWithData
}
```

**LazyImport** is function which return a promize of ImportConstructor.  
**AsyncIterator** is function which return an AsyncIterableIterator.  
**AsyncWithData** is function which return a promize of any.