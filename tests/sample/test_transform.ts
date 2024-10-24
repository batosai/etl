import { Transform } from '../../src/types.js'

type Person = {
  firstname: string
  lastname: string
  age: number
}

export default class TestTransform implements Transform {
  async process(row: Person) {
    return {
      name: `${row.firstname} ${row.lastname}`,
      age: row.age,
    }
  }
}
