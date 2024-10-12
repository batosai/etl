import type { Transform } from './types.js'

export default class BaseTransform implements Transform{
  async process(row: any): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(row)
    })
  }
}