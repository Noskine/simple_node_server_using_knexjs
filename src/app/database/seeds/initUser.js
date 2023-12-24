/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import { cryptHash } from '../../../utils/bcrypt.js'
import { config } from 'dotenv'

config()

export async function seed (knex) {
  await knex('users').del()

  await knex('users').insert({
    username: 'admin',
    email: 'admin@email.com',
    password_hash: await cryptHash('12345')
  })
}
