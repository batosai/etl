# Xlsx to DB

::: code-group

```ts [main.ts]
import etl from '@jrmc/etl'

const UserXlsxSource = () => import('./etl/sources/user_xlsx_source.js')
const UserXlsxTransform = () => import('./etl/transforms/user_xlsx_to_db_transform.js')
const UserXlsxDestination = () => import('./etl/destinations/user_db_destination.js')

etl.run({
  source: UserXlsxSource,
  transform: UserXlsxTransform,
  destination: UserXlsxDestination,
})
```

```ts [user_xlsx_source.ts]
import { Source } from '@jrmc/etl/types'
import xlsx from 'node-xlsx'

export default class UserArraySource implements Source {
  async *each() {
    const workSheetsFromFile = xlsx.parse('users.xlsx')

    workSheetsFromFile[0].data.shift()

    yield workSheetsFromFile[0].data
  }
}
```

```ts [user_xlsx_to_db_transform.ts]
import { Transform } from '@jrmc/etl/types'

export default class UserXlsxToDbTransform implements Transform {
  async process(rows: Array<[string, string , number]>) {
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

```ts [user_db_destination.ts]
import { Destination } from '@jrmc/etl/types'

type User = {
  firstname: string
  lastname: string
  age: number
}

export default class UserCsvDestination implements Destination {
  async write(rows: User[]) {
    await User.createMany(rows)
  }
}
```

:::