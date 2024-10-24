import type { Etl, EtlAttributes, SourceEtl, DestinationEtl, LazyImport, AsyncIterator, AsyncWithData } from './src/types.js'
import BaseSource from './src/base_source.js'
import BaseTransform from './src/base_transform.js'
import BaseDestination from './src/base_destination.js'
import { isLazyImport, isAsyncIterableIterator } from './src/utils.js'

class Object implements Etl {
  async run(attributes: EtlAttributes, single: boolean = false) {
    let results = []

    const { src, trans, dest } = await this.#construct(attributes)

    for await (let item of src.each()) {
      if (trans) {
        item = await trans(item)
      }
      results.push(await dest.write(item))
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

  async #source(attr: SourceEtl) {
    let fn
    let source = attr
    let options = {}

    if (Array.isArray(source)) {
      source = (attr as [LazyImport, options: Object])[0]
      options = (attr as [LazyImport, options: Object])[1]
    }

    if (isAsyncIterableIterator(source())) {
      fn = {
        each: source as AsyncIterator
      }
    } else {
      const { default: SourceUnknown } = await (source as LazyImport)()
      fn = new (SourceUnknown as typeof BaseSource)(options)
    }

    return fn
  }

  async #destination(attr: DestinationEtl) {
    let fn
    let destination = attr
    let options = {}

    if (Array.isArray(destination)) {
      destination = (attr as [LazyImport, options: Object])[0]
      options = (attr as [LazyImport, options: Object])[1]
    }

    if (await isLazyImport(destination)) {
      const { default: DestinationUnknown } = await (destination as LazyImport)()
      fn = new (DestinationUnknown as typeof BaseDestination)(options)
    } else {
      fn = {
        write: destination as AsyncWithData
      }
    }

    return fn
  }

  async #transform(transform: LazyImport | AsyncWithData) {
    let fn
    if (await isLazyImport(transform)) {
      const { default: TransformUnknown } = await (transform as LazyImport)()
      const trans = new (TransformUnknown as typeof BaseTransform)()
      fn = trans.process
    } else {
      fn = transform as AsyncWithData
    }

    return fn
  }
}

export default new Object()
