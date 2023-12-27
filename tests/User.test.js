import { describe, expect, test } from 'vitest'
import userService from '../src/app/services/userService.js'
import User from '../src/app/database/models/User.js'

describe('TEST User.test.js', async () => {
  // eslint-disable-next-line no-unused-vars
  let id = ''
  const user = {
    username: 'admtest',
    email: 'admtest@hotmail.com',
    password: '12345abcde'
  }

  test("Testing: a user's registration routes", async () => {
    const res = await userService.registerService(user)

    if (res[0].id) {
      id = res[0].id
    }

    expect(res[0].id).toBeTypeOf('string')
  })

  test('Testing: whether it is possible to get the user profile', async () => {
    console.log(id)
    const res = await userService.getProfileService({ id })

    expect(res).toBeTypeOf('object')
    console.log('-'.repeat(100))
    console.log(res)
  })

  test('Testing: whether it is possible to get the user profile', async () => {
    const userUpdate = {
      id, username: 'admatualizado test', email: 'admtestalternativo@hotmail.com'
    }
    const res = await userService.updateProfile(userUpdate)

    console.log('*'.repeat(100))
    console.log(res)
  })

  test('Testing: whether it is possible to delete the user in the database', async () => {
    await User.delete(id)
  })
})
