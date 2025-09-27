# @jrmc/adonis-etl

An AdonisJS package that facilitates the creation and management of ETL (Extract, Transform, Load) processes by providing scaffolding generators to quickly create source, transform, and destination components.

## Installation

```bash
node ace add @jrmc/adonis-etl
```

## Features

### ETL Component Generation

The package provides scaffolding commands to automatically generate base files for your ETL processes:

#### Generate a files
```bash
node ace make:etl user
```

## Complete Documentation

For more information on advanced usage, check out the [complete documentation](https://github.com/batosai/adonis-etl).

## Usage Examples

The `sample/` folder contains two complete ETL implementation examples:

### 1. Books Import (Source → Destination)

This example shows a simple ETL process without transformation:

**Command:** `node ace import:books`

**Components:**
- **Source**: `book_csv_source.ts` - Reads a CSV file of books (5M records) with batch processing (500 items)
- **Destination**: `book_db_destination.ts` - Inserts data into database via `db.table().multiInsert()`

**Features:**
- Batch processing for performance optimization
- CSV error handling (empty lines and errors ignored)
- Optimized buffer (128KB) for large files

### 2. Products Import (Source → Transform → Destination)

This example shows a complete ETL process with data transformation:

**Command:** `node ace import:products`

**Components:**
- **Source**: `product_csv_source.ts` - Reads a CSV file of products (500K records)
- **Transform**: `product_csv_to_db_transform.ts` - Transforms CSV data (French column names → English)
- **Destination**: `product_db_destination.ts` - Saves via Lucid model `Product.create()`

**Features:**
- Column name transformation (e.g., `Nom` → `name`, `Prix` → `price`)
- AdonisJS model usage for persistence
- Data processing logging

### Example Files Structure

```
sample/
├── commands/
│   ├── import_books.ts      # Books import command
│   └── import_products.ts   # Products import command
├── etl/
│   ├── sources/
│   │   ├── book_csv_source.ts
│   │   └── product_csv_source.ts
│   ├── transforms/
│   │   └── product_csv_to_db_transform.ts
│   ├── destinations/
│   │   ├── book_db_destination.ts
│   │   └── product_db_destination.ts
│   └── resources/
│       ├── books.csv        # Sample data
│       └── products.csv     # Sample data
└── app/models/
    ├── book.ts              # Book model
    └── product.ts           # Product model
```

These examples demonstrate different possible approaches:
- **Batch processing** vs **line-by-line processing**
- **Direct database insertion** vs **Lucid model usage**
- **With or without data transformation**


