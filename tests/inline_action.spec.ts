import { test } from '@japa/runner'
import etl from '../service.js'

test.group('Maths by inline actions', () => {
  test('with transform by array', async ({ assert }) => {
    await etl.run({
      source: async function* () {
        const dataArray = [
          { lastname: 'Doe', firstname: 'John', age: 30 },
          { lastname: 'Doe', firstname: 'Jane', age: 25 },
        ]

        yield dataArray
      },
      transform: async function (rows: any) {
        let items = []
        for (let row of rows) {
          items.push({
            name: `${row.firstname} ${row.lastname}`,
            age: row.age,
          })
        }

        return items
      },
      destination: async function (rows: any) {
        assert.deepEqual(rows, [
          { name: 'John Doe', age: 30 },
          { name: 'Jane Doe', age: 25 },
        ])
      },
    })
  })

  test('with transform', async ({ assert }) => {
    const results = await etl.run({
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
        return row
      },
    })

    assert.deepEqual(results, [
      { name: 'John Doe', age: 30 },
      { name: 'Jane Doe', age: 25 },
    ])
  })

  test('without transform', async ({ assert }) => {
    const result = await etl.run({
      source: async function* () {
        yield { lastname: 'Doe', firstname: 'John', age: 30 }
      },
      destination: async function (row: any) {
        return row
      },
    })

    assert.deepEqual(result, [{ lastname: 'Doe', firstname: 'John', age: 30 }])
  })

  test('without transform and single', async ({ assert }) => {
    const result = await etl.run(
      {
        source: async function* () {
          yield { lastname: 'Doe', firstname: 'John', age: 30 }
        },
        destination: async function (row: any) {
          return row
        },
      },
      true
    )

    assert.deepEqual(result, { lastname: 'Doe', firstname: 'John', age: 30 })
  })
})
