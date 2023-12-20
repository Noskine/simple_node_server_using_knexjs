import { test, expect } from 'vitest'
import { cryptHash } from '../src/utils/bcrypt.js'
import { createUser } from '../src/entities/User.js'

const request = {
  username: 'enikson',
  passwordHash: cryptHash('12345'),
  email: 'adm@dasdsaemail.com'
}

test('testando a criação de um usuário no banco de dados', async () => {
  const user = await createUser(request)
  console.log(user)
  expect(user).toEqual([
    {
      id: String,
      username: 'enikson',
      email: 'adm@dasdsaemail.com',
      password_hash: '$2b$10$/ZwhctmLAQvhYXS/RzsWLOZHjbyglK64TWOULiFDpAiUJYsU1pBCa'
    }
  ])
})
