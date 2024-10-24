import { Destination } from '../../src/types.js'

type Options = {
  age: number
}

type Person = {
  firstname: string
  lastname: string
  age: number
}

export default class TestWithOptionsDestination implements Destination {
  #age: number | null

  constructor(options: Options) {
    this.#age = options.age || null;
  }

  async write(row: Person) {
    return { lastname: row.lastname, firstname: row.firstname, age: this.#age ? this.#age : row.age }
  }
}
