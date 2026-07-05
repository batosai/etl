# Agent Skill

`@jrmc/etl` ships an [agent skill](https://skills.sh) that teaches AI coding agents (Claude Code, Cursor, Codex, etc.) how to build pipelines with this package: the `etl.run` API, the three accepted input shapes and when to use each, component scaffolding conventions, ESM pitfalls, and complete recipes (XLSX to database, database to CSV).

## Installation

From your project root:

```sh
npx skills add batosai/etl
```

The CLI detects the `etl-pipeline` skill in this repository and installs it for your agent.

## What it provides

Once installed, your agent automatically loads the skill when you ask it to import, export, or migrate data with `@jrmc/etl`. It then knows how to:

- choose between inline functions, lazy-import classes, or the `[LazyImport, options]` tuple
- scaffold `Source` / `Transform` / `Destination` classes with the right interfaces and default exports
- respect ESM constraints (`"type": "module"`, `.js` extensions in relative imports)
- pick a consistent granularity (item by item vs batch) across the three components

## Example prompts

```
Import users.xlsx into my database with @jrmc/etl
```

```
Create an ETL destination that writes rows to a CSV file
```

The skill source lives in the [`skills/etl-pipeline`](https://github.com/batosai/etl/tree/main/skills/etl-pipeline) directory of the repository.
