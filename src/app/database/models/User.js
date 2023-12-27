import knex from '../../../utils/knex.js'

class User {
  async create (data) {
    try {
      return await knex('users').insert({
        username: data.username,
        email: data.email,
        password_hash: data.passwordHash
      }).returning(['id', 'username'])
    } catch (error) {
      return error
    }
  }

  async findUnique (id) {
    try {
      return await knex('users')
        .select(['id', 'username', 'email'])
        .where({ id })
    } catch (error) {
      return error
    }
  }

  async update ({ id, username, email }) {
    try {
      return await knex('users')
        .where({ id })
        .update({
          username,
          email
        })
        .returning(['id', 'username', 'email'])
    } catch (error) {
      return error
    }
  }

  async delete (id) {
    try {
      return await knex('users')
        .del().where({ id })
    } catch (error) {
      return error
    }
  }
}

export default new User()
