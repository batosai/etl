import { Destination } from '../../src/types.js'

export default class TestDestination implements Destination {
  async write(rows: any) {
    return rows
  }
}
