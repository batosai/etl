import { Transform } from '../../index.js'

type Person = {
  firstname: string
  lastname: string
  age: number
}

export default class TestTransform extends Transform {
  async process(row: Person) {
    return {
      name: `${row.firstname} ${row.lastname}`,
      age: row.age,
    }
  }
}
