import { Destination } from '../../index.js'

export default class TestDestination extends Destination {
  async write(rows: any) {
    return rows
  }
}
