---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'ETL'
  text: ''
  tagline: Extract-transform-load for nodejs
  actions:
    - theme: brand
      text: Getting started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/batosai/etl

features:
  - title: Extract
    details: This step involves collecting data from various sources, which may include databases, files (JSON, CSV, XLS, etc.), APIs, etc.
  - title: Transform
    details: The extracted data is often in different formats or does not meet the requirements of the target system. The transformation adjusts and formats the data to make it consistent and usable. This may include data type conversion, data cleaning (removing duplicates, correcting errors), data enrichment, and applying business rules.
  - title: Load
    details: After transformation, the data is sent to the destination, such as a database, file, API, etc. This step can be done incrementally (only adding new data) or by reloading the entire dataset.
---
