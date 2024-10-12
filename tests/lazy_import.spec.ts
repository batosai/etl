import { test } from '@japa/runner'
import etl from '../service.js'

test.group('Maths by lazy import', () => {
  test('with transform', async ({ assert }) => {

    const TestSource = () => import('./sample/test_source.js')
    const TestTransform = () => import('./sample/test_transform.js')
    const TestDestination = () => import('./sample/test_destination.js')

    const result = await etl.run({
      source: TestSource,
      transform: TestTransform,
      destination: TestDestination,
    })

    assert.deepEqual(result, [
      { name: 'John Doe', age: 30 },
      { name: 'Jane Doe', age: 25 },
    ])
  })

  test('without transform', async ({ assert }) => {

    const TestSource = () => import('./sample/test_source.js')
    const TestDestination = () => import('./sample/test_destination.js')

    const result = await etl.run({
      source: TestSource,
      destination: TestDestination,
    })

    assert.deepEqual(result, [
      { lastname: "Doe", firstname: 'John', age: 30 },
      { lastname: "Doe", firstname: 'Jane', age: 25 },
    ])
  })
})