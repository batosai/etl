import { Source } from '../../index.js'

export default class TestSource extends Source {
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
