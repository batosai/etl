import type { Source } from './types.js'

export default class BaseSource implements Source {
  async *each(): AsyncIterableIterator<any> {}
}