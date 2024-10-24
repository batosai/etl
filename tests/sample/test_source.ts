import { Source } from '../../src/types.js'

export default class TestSource implements Source {
  async *each() {
    const dataArray = [
      { lastname: 'Doe', firstname: 'John', age: 30 },
      { lastname: 'Doe', firstname: 'Jane', age: 25 },
    ]

    for (let item of dataArray) {
      yield item
    }
  }
}
