# ETL for Node.js

ETL (Extract, Transform, Load) is a process used to extract information from multiple sources, transform it according to your needs, and then load it into a target system, such as a database.

**Extract (Source):**
This step involves collecting data from various sources, which may include databases, files (JSON, CSV, XLS, etc.), APIs, etc.

**Transform:**
The extracted data is often in different formats or does not meet the requirements of the target system. The transformation adjusts and formats the data to make it consistent and usable.
This may include data type conversion, data cleaning (removing duplicates, correcting errors), data enrichment, and applying business rules.

**Load (Destination):**
After transformation, the data is sent to the destination, such as a database, file, API, etc.
This step can be done incrementally (only adding new data) or by reloading the entire dataset.


## Installation

```sh
npm install @jrmc/etl
```

## Run

```ts
import etl from '@jrmc/etl'

await etl.run({
  source: UserSource,
  transform: UserTransform, // optional
  destination: UserDestination,
})
```

view Documentation