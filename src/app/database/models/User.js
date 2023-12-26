import knex from '../../../utils/knex.js'

class User {
  async create (data) {
    return await knex('users').insert({
      username: data.username,
      email: data.email,
      password_hash: data.passwordHash
    }).returning(['id', 'username'])
  }

  async findUnique (id) {
    try {
      await knex('users')
        .select(['username', 'email'])
        .where({ id })
    } catch (error) {
      return error
    }
  }

  async delete (id) {
    try {
      await knex('users')
        .where({ id })
        .del()
        .returning('*')
    } catch (error) {
      return error
    }
  }
}

export default new User()
