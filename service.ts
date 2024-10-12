import type { Etl, EtlAttributes, LazyImport, AsyncIterator, AsyncWithData } from './src/types.js'
import Source from './src/base_source.js'
import Transform from './src/base_transform.js'
import Destination from './src/base_destination.js'
import { isLazyImport, isAsyncIterableIterator } from './src/utils.js'

class Object implements Etl {

  async run(attributes: EtlAttributes, single: boolean = false){
    let results = []

    const { src, trans, dest } = await this.#construct(attributes)

    for await (let item of src()) {
      if (trans) {
        item = await trans(item)
      }
      results.push(await dest(item))
    }

    if (single) {
      return results.shift()
    }

    return results
  }

  // Private Methods

  async #construct({ source, transform, destination }: EtlAttributes) {
    const src = await this.#source(source)
    const dest = await this.#destination(destination)

    let trans = null
    if (transform) {
      trans = await this.#transform(transform)
    }

    return { src, trans, dest }
  }

  async #source(source: LazyImport | AsyncIterator ) {
    let fn
    if (isAsyncIterableIterator(source())) {
      fn = source as AsyncIterator
    } else {
      const { default: SourceUnknown } = await (source as LazyImport)()
      const src = new (SourceUnknown as typeof Source)()
      fn = src.each
    }

    return fn
  }

  async #destination(destination: LazyImport | AsyncWithData ) {
    let fn
    if (await isLazyImport(destination)) {
      const { default: DestinationUnknown } = await (destination as LazyImport)()
      const dest = new (DestinationUnknown as typeof Destination)()
      fn = dest.write
    } else {
      fn = destination as AsyncWithData
    }

    return fn
  }

  async #transform(transform: LazyImport | AsyncWithData ) {
    let fn
    if (await isLazyImport(transform)) {
      const { default: TransformUnknown } = await (transform as LazyImport)()
      const trans = new (TransformUnknown as typeof Transform)()
      fn = trans.process
    } else {
      fn = transform as AsyncWithData
    }

    return fn
  }
}

export default new Object()