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
import { Source } from '@jrmc/etl'

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
import { Transform } from '@jrmc/etl'

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
import { Destination } from '@jrmc/etl'

export default class UserDbDestination extends Destination {
  async write(row: any) {
    User.create(row)
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