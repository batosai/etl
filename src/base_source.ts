import type { Source } from './types.js'

export default class BaseSource implements Source {
  // @ts-ignore
  #options: Object

  constructor(options: Object = {}) {
    this.#options = options
  }

  async *each(): AsyncIterableIterator<any> {}
}
