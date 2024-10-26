# Usage

## by [LazyImport](/guide/detail#type)

::: code-group

```ts [main.js]
import etl from '@jrmc/etl'

const UserSource = () => import('./user_array_source.js')
const UserTransform = () => import('./user_array_to_db_transform.js')
const UserDestination = () => import('./user_db_destination.js')

await etl.run({
  source: UserSource,
  transform: UserTransform,
  destination: UserDestination,
})
```

```ts [user_array_source.js]
import { Source } from '@jrmc/etl/types'

export default class UserArraySource extends Source {
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
```

```ts [user_array_to_db_transform.js]
import { Transform } from '@jrmc/etl/types'

type User = {
  firstname: string
  lastname: string
  age: number
}

export default class UserArrayToDbTransform extends Transform {
  async process(row: User) {
    return {
      name: `${row.firstname} ${row.lastname}`,
      age: row.age,
    }
  }
}
```

```ts [user_db_destination.js]
import { Destination } from '@jrmc/etl/types'

export default class UserDbDestination extends Destination {
  async write(row: any) {
    User.create(row)
  }
}
```

:::

## by [LazyImport](/guide/detail#type) with options

::: code-group


```ts [main.js]
import etl from '@jrmc/etl'

const UserSource = () => import('./user_array_source.js')
const UserDestination = () => import('./user_db_destination.js')

await etl.run({
  source: [UserSource, { 
    data: [
      { lastname: 'Doe', firstname: 'John', age: 30 },
      { lastname: 'Doe', firstname: 'Jane', age: 25 },
    ]
  }],
  destination: [UserDestination, { 
    age: 22
  }],
})
```

```ts [user_array_source.js]
import { Source } from '@jrmc/etl/types'

type Options = Record<string, Array<Object>>

export default class TestWithOptionsSource implements Source {
  #data: Array<Object>

  constructor(options: Options) {
    this.#data = options.data || [];
  }

  async *each() {
    for (let item of this.#data) {
      yield item
    }
  }
}
```

```ts [user_db_destination.js]
import { Destination } from '@jrmc/etl/types'

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
    User.create({ lastname: row.lastname, firstname: row.firstname, age: this.#age ? this.#age : row.age })
  }
}
```

:::

## by Functions

Use [AsyncIterator and AsyncWithData](/guide/detail#type) functions

```ts
import etl from '@jrmc/etl'

await etl.run({
  source: async function* () {
    const dataArray = [
      { lastname: 'Doe', firstname: 'John', age: 30 },
      { lastname: 'Doe', firstname: 'Jane', age: 25 },
    ]

    for (let item of dataArray) {
      yield item
    }
  },
  transform: async function (row: any) {
    return {
      name: `${row.firstname} ${row.lastname}`,
      age: row.age,
    }
  },
  destination: async function (row: any) {
    User.create(row)
  },
})
```

## get results

`run` method return array if Destination class return a result.

::: code-group

```ts [main.js]
import etl from '@jrmc/etl'

const UserSource = () => import('./user_array_source.js')
const UserTransform = () => import('./user_array_to_db_transform.js')
const UserDestination = () => import('./user_db_destination.js')

const results = await etl.run({
  source: UserSource,
  transform: UserTransform,
  destination: UserDestination,
})

/*
return :
[
  { name: 'John Doe', age: 30 },
  { name: 'Jane Doe', age: 25 },
]
*/
```

```ts [user_array_source.js]
import { Source } from '@jrmc/etl/types'

export default class UserArraySource extends Source {
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
```

```ts [user_array_to_db_transform.js]
import { Transform } from '@jrmc/etl/types'

type User = {
  firstname: string
  lastname: string
  age: number
}

export default class UserArrayToDbTransform extends Transform {
  async process(row: User) {
    return {
      name: `${row.firstname} ${row.lastname}`,
      age: row.age,
    }
  }
}
```

```ts [user_db_destination.js]
import { Destination } from '@jrmc/etl/types'

export default class UserDbDestination extends Destination {
  async write(row: any) {
    return row
  }
}

:::