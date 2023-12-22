import knex from '../../utils/knex.js'

export async function createUser ({ username, email, passwordHash }) {
  try {
    return await knex('users').insert({
      username,
      email,
      password_hash: passwordHash
    }).returning('*')
  } catch (err) {
    return new Error('algfo')
  }
}

export async function userFindByPk ({ id }) {
  try {
    return await knex('users').select().where(id)
  } catch (err) {
    return err
  }
}

export async function userUpdate ({ id, username, email, passwordHash }) {
  try {
    return await knex('users').select().where(id)
  } catch (err) {
    return err
  }
}

export async function userDelete ({ id }) {
  try {
    return await knex('users').delete().where(id)
  } catch (err) {
    return err
  }
}
