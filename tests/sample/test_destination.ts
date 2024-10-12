import Destination from '../../src/base_destination.js'

export default class TestDestination extends Destination {
  async write(rows: any) {
    return rows
  }
}