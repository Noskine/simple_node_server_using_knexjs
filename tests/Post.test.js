import { describe, expect, test } from 'vitest'
import Post from '../src/app/database/models/Post.js'

describe('TEST Post.test.js', async () => {
  const post = {
    title: 'admtest',
    text: 'admtest@hotmail.com',
    userId: '1f16b8e4-b50d-4644-b293-7aaace86bf59'
  }
  let id = ''

  test('Testing: a posts registration routes', async () => {
    const res = await Post.create(post)

    id = res[0].id

    console.log('*'.repeat(50))
    console.log(res)

    expect(res[0]).toBeTypeOf('object')
  })

  test('Testing: the relationship between tables in the database', async () => {
    const res = await Post.findAll()

    console.log('*'.repeat(50))
    console.log(res)

    expect(res[0]).toBeTypeOf('object')
  })

  test('Testing: the relationship between tables in the database', async () => {
    await Post.delete({ id })
  })
})
