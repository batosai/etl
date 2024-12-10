# DB to CSV

::: code-group

```ts [main.ts]
import etl from '@jrmc/etl'

const UserSource = () => import('./etl/sources/user_array_source.js')
const UserDestination = () => import('./etl/destinations/user_csv_destination.js')

etl.run({
  source: UserSource,
  destination: UserDestination,
})
```

```ts [user_array_source.ts]
import { Source } from '@jrmc/etl/types'

export default class UserArraySource implements Source {
  async *each() {
    const dataArray = [
      { lastname: 'Doe', firstname: 'John', age: 30 },
      { lastname: 'Doe', firstname: 'Jane', age: 25 },
    ]

    yield dataArray
  }
}
```

```ts [user_csv_destination.ts]
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

:::