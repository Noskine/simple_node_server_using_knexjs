import knex from '../../../utils/knex.js'

class User {
  async create (data) {
    return await knex('users').insert({
      username: data.username,
      email: data.email,
      password_hash: data.passwordHash
    }).returning(['id', 'username'])
  }
}

export { User }
