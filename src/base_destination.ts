import type { Destination } from './types.js'

export default class BaseDestination implements Destination {
  // @ts-ignore
  #options: Object

  constructor(options: Object = {}) {
    this.#options = options
  }

  async write(data: any) {
    return data
  }
}
