type ImportConstructor = {
  default: unknown
}

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
