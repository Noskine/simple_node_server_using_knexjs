import knex from '../utils/knex'
import { log } from '../utils/pino'

export async function createUser ({ username, email, passwordHash }) {
  try {
    return await knex('users').insert({
      username,
      email,
      password_hash: passwordHash
    }).returning('*')
  } catch (err) {
    return err
  } finally {
    log.info('CreateUser')
  }
}

export async function userFindByPk ({ id }) {
  try {
    return await knex('users').select().where(id)
  } catch (err) {
    return err
  } finally {
    log.info('CreateUser')
  }
}

export async function userUpdate ({ id, username, email, passwordHash }) {
  try {
    return await knex('users').select().where(id)
  } catch (err) {
    return err
  } finally {
    log.info('CreateUser')
  }
}

export async function userDelete ({ id }) {
  try {
    return await knex('users').delete().where(id)
  } catch (err) {
    return err
  } finally {
    log.info('CreateUser')
  }
}
