/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import { cryptHash } from '../../utils/bcrypt.js'

export async function seed (knex) {
  await knex('users').del()

  await knex('users').insert({
    username: 'admin',
    email: 'admin@email.com',
    password_hash: cryptHash('12345')
  })
}
