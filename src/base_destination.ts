import type { Destination } from './types.js'

export default class BaseDestination implements Destination {
  async write(data: any) {
    return data
  }
}