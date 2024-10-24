import { Source } from '../../src/types.js';

type Options = Record<string, Array<Object>>

export default class TestWithOptionsSource implements Source {
  #data: Array<Object>

  constructor(options: Options) {
    this.#data = options.data || [];
  }

  async *each() {
    for (let item of this.#data) {
      yield item
    }
  }
}