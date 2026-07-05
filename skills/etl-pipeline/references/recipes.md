# Recipes

Complete, working pipelines. Adapt names and paths to the user's project. Both recipes use the batch granularity: the source yields one array, transform/destination handle the whole batch.

## XLSX → database

Dependencies: `npm install @jrmc/etl node-xlsx`

```ts
// main.ts
import etl from '@jrmc/etl'

const UserXlsxSource = () => import('./etl/sources/user_xlsx_source.js')
const UserXlsxTransform = () => import('./etl/transforms/user_xlsx_to_db_transform.js')
const UserDbDestination = () => import('./etl/destinations/user_db_destination.js')

await etl.run({
  source: UserXlsxSource,
  transform: UserXlsxTransform,
  destination: UserDbDestination,
})
```

```ts
// etl/sources/user_xlsx_source.ts
import { Source } from '@jrmc/etl/types'
import xlsx from 'node-xlsx'

export default class UserXlsxSource implements Source {
  async *each() {
    const workSheetsFromFile = xlsx.parse('users.xlsx')

    workSheetsFromFile[0].data.shift() // drop header row

    yield workSheetsFromFile[0].data
  }
}
```

```ts
// etl/transforms/user_xlsx_to_db_transform.ts
import { Transform } from '@jrmc/etl/types'

export default class UserXlsxToDbTransform implements Transform {
  async process(rows: Array<[string, string, number]>) {
    return rows.map(([firstname, lastname, age]) => ({
      firstname: UserXlsxToDbTransform.capitalizeFirstLetter(firstname),
      lastname: UserXlsxToDbTransform.capitalizeFirstLetter(lastname),
      age,
    }))
  }

  static capitalizeFirstLetter(word: string) {
    if (!word) return ''
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
}
```

```ts
// etl/destinations/user_db_destination.ts
import { Destination } from '@jrmc/etl/types'

type User = {
  firstname: string
  lastname: string
  age: number
}

export default class UserDbDestination implements Destination {
  async write(rows: User[]) {
    await User.createMany(rows) // any ORM: Lucid, Prisma, Knex…
  }
}
```

## Database/array → CSV file

Dependencies: `npm install @jrmc/etl fast-csv`

```ts
// main.ts
import etl from '@jrmc/etl'

const UserSource = () => import('./etl/sources/user_source.js')
const UserCsvDestination = () => import('./etl/destinations/user_csv_destination.js')

await etl.run({
  source: UserSource,
  destination: UserCsvDestination, // no transform: data passes through unchanged
})
```

```ts
// etl/sources/user_source.ts
import { Source } from '@jrmc/etl/types'

export default class UserSource implements Source {
  async *each() {
    // replace with a DB query, e.g. yield await User.all()
    yield [
      { lastname: 'Doe', firstname: 'John', age: 30 },
      { lastname: 'Doe', firstname: 'Jane', age: 25 },
    ]
  }
}
```

```ts
// etl/destinations/user_csv_destination.ts
import { Destination } from '@jrmc/etl/types'
import fs from 'node:fs'
import csv from 'fast-csv'

export default class UserCsvDestination implements Destination {
  async write(rows: any) {
    const ws = fs.createWriteStream('output.csv')
    const csvStream = csv.format({ headers: true, delimiter: ';' })

    csvStream.pipe(ws)
    rows.forEach((row: any) => csvStream.write(row))
    csvStream.end()
  }
}
```
