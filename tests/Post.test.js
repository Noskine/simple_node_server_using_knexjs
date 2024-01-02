import { describe, expect, test } from 'vitest'
import Post from '../src/app/database/models/Post.js'

describe('TEST User.test.js', async () => {
  const post = {
    title: 'admtest',
    text: 'admtest@hotmail.com',
    userId: '1f16b8e4-b50d-4644-b293-7aaace86bf59'
  }

  test('Testing: a posts registration routes', async () => {
    const res = await Post.create(post)

    console.log('*'.repeat(50))
    console.log(res)

    expect(res[0]).toBeTypeOf('object')
  })
})
