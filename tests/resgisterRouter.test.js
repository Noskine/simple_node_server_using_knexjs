import { describe, expect, test } from 'vitest'
import userService from '../src/app/services/userService.js'
import User from '../src/app/database/models/User.js'

describe('TEST app', async () => {
  // eslint-disable-next-line no-unused-vars
  let id = ''
  const user = {
    username: 'admtest',
    email: 'adm2@hotmail.com',
    password: '12345abcde'
  }
  test("Testing: a user's registration routes", async () => {
    const res = await userService.registerService(user)

    if (res[0].id) {
      id = res[0].id
    }

    expect(res[0].id).toBeTypeOf('string')
  })

  test('Testing: whether it is possible to delete the user in the database', async () => {
    const res = await User.delete(id)

    expect(res).toEqual(undefined)
  })
})
