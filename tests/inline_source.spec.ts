import { test } from '@japa/runner'
import etl from '../service.js'

test.group('Maths by inline async iterator', () => {
  test('with transform', async ({ assert }) => {
    const TestTransform = () => import('./sample/test_transform.js')
    const TestDestination = () => import('./sample/test_destination.js')

    const result = await etl.run(
      {
        source: async function* () {
          yield { firstname: 'John', lastname: 'Doe', age: 30 }
        },
        transform: TestTransform,
        destination: TestDestination,
      },
      true
    )

    assert.deepEqual(result, { name: 'John Doe', age: 30 })
  })

  test('without transform', async ({ assert }) => {
    const TestDestination = () => import('./sample/test_destination.js')

    const result = await etl.run(
      {
        source: async function* () {
          yield { firstname: 'John', lastname: 'Doe', age: 30 }
        },
        destination: TestDestination,
      },
      true
    )

    assert.deepEqual(result, { firstname: 'John', lastname: 'Doe', age: 30 })
  })
})
