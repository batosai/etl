type ImportConstructor = {
  default: unknown
}

export type LazyImport = () => Promise<ImportConstructor>
export type AsyncIterator = () => AsyncIterableIterator<any>
export type AsyncWithData = (data: any) => Promise<any>

export type EtlAttributes = {
  source: LazyImport | AsyncIterator
  transform?: LazyImport | AsyncWithData
  destination: LazyImport | AsyncWithData
}

export interface Etl {
  run(attributes: EtlAttributes, single: boolean): any
}

export interface Source {
  each(): AsyncIterableIterator<any>
}

export interface Transform {
  process(data: any): Promise<any>
}

export interface Destination {
  write(data: any): Promise<unknown>
}
